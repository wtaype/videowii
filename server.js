import express from 'express';
import multer from 'multer';
import ffmpeg from 'fluent-ffmpeg';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uploadsDir = path.join(__dirname, 'uploads');
const outputDir = path.join(__dirname, 'outputs');
[uploadsDir, outputDir].forEach(d => !fs.existsSync(d) && fs.mkdirSync(d));

const upload = multer({ dest: uploadsDir, limits: { fileSize: 500*1024*1024 } });

const processVideo = (req, res, ffmpegCommand) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  
  ffmpegCommand
    .on('end', () => {
      fs.unlinkSync(req.file.path);
      const stats = fs.statSync(ffmpegCommand._outputs[0].target);
      res.json({ 
        success: true, 
        filename: path.basename(ffmpegCommand._outputs[0].target), 
        size: stats.size, 
        downloadUrl: `/download/${path.basename(ffmpegCommand._outputs[0].target)}` 
      });
    })
    .on('error', (error) => {
      console.error('❌ FFmpeg error:', error);
      fs.existsSync(req.file.path) && fs.unlinkSync(req.file.path);
      res.status(500).json({ error: error.message });
    });
};

app.get('/health', (req, res) => res.json({ status: 'OK', timestamp: new Date().toISOString() }));

app.post('/convert', upload.single('video'), (req, res) => {
  const outputPath = path.join(outputDir, `audio_${Date.now()}.mp3`);
  processVideo(req, res, ffmpeg(req.file.path).noVideo().audioBitrate('192k').save(outputPath));
});

app.post('/optimize', upload.single('video'), (req, res) => {
  const { quality = '28', resolution = 'original', codec = 'h264' } = req.body;
  const outputPath = path.join(outputDir, `optimized_${Date.now()}.mp4`);
  
  let command = ffmpeg(req.file.path)
    .videoCodec(codec === 'h265' ? 'libx265' : 'libx264')
    .addOption('-crf', quality)
    .audioCodec('aac')
    .audioBitrate('128k');
  
  if (resolution !== 'original') command = command.size(`?x${resolution}`);
  
  processVideo(req, res, command.save(outputPath));
});

app.post('/edit', upload.single('video'), (req, res) => {
  const { brightness = '100', contrast = '100', saturation = '100', shadow = '0', speed = '1', quality = 'medium', format = 'mp4' } = req.body;
  const outputPath = path.join(outputDir, `edited_${Date.now()}.${format}`);
  
  const b = parseFloat(brightness) / 100;
  const c = parseFloat(contrast) / 100;
  const s = parseFloat(saturation) / 100;
  const sh = parseFloat(shadow);
  const speedVal = parseFloat(speed);
  
  const qualityMap = { high: '18', medium: '23', low: '28' };
  const crfValue = qualityMap[quality] || '23';
  
  const filters = [];
  
  // Filtros de color
  if (b !== 1 || c !== 1 || s !== 1) {
    const brightnessFFmpeg = (b - 1) * 0.5;
    filters.push(`eq=brightness=${brightnessFFmpeg}:contrast=${c}:saturation=${s}`);
  }
  
  // Shadow (usando boxblur como efecto de sombra)
  if (sh > 0) {
    const shadowIntensity = sh / 30; // Normalizar 0-30 a 0-1
    filters.push(`unsharp=5:5:${shadowIntensity}:5:5:0.0`);
  }
  
  // Velocidad
  if (speedVal !== 1) {
    filters.push(`setpts=${1/speedVal}*PTS`);
  }
  
  let command = ffmpeg(req.file.path);
  
  // Configurar codec según formato
  if (format === 'webm') {
    command = command.videoCodec('libvpx').audioCodec('libvorbis');
  } else if (format === 'mov') {
    command = command.videoCodec('libx264').audioCodec('aac').addOption('-crf', crfValue);
  } else {
    command = command.videoCodec('libx264').audioCodec('aac').addOption('-crf', crfValue);
  }
  
  command = command.audioBitrate('128k');
  
  // Aplicar filtros de video
  if (filters.length) {
    command = command.videoFilters(filters.join(','));
  }
  
  // Filtro de audio para velocidad
  if (speedVal !== 1) {
    command = command.audioFilters(`atempo=${speedVal}`);
  }
  
  console.log('🎬 Editando video:', { brightness, contrast, saturation, shadow, speed, quality, format, filters: filters.join(',') });
  
  processVideo(req, res, command.save(outputPath));
});

app.post('/convert-format', upload.single('video'), (req, res) => {
  const { format = 'mp4', quality = 'medium' } = req.body;
  const outputPath = path.join(outputDir, `converted_${Date.now()}.${format}`);
  
  const qualityMap = { high: '18', medium: '23', low: '28' };
  const formatConfig = {
    mp4: { video: 'libx264', audio: 'aac' },
    avi: { video: 'mpeg4', audio: 'mp3' },
    mov: { video: 'libx264', audio: 'aac' },
    webm: { video: 'libvpx', audio: 'libvorbis' }
  };
  
  const config = formatConfig[format] || formatConfig.mp4;
  let command = ffmpeg(req.file.path)
    .videoCodec(config.video)
    .audioCodec(config.audio)
    .audioBitrate('128k');
  
  if (['mp4', 'mov', 'mkv'].includes(format)) {
    command = command.addOption('-crf', qualityMap[quality]);
  }
  
  processVideo(req, res, command.save(outputPath));
});

app.get('/download/:filename', (req, res) => {
  const filePath = path.join(outputDir, req.params.filename);
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'File not found' });
  res.download(filePath, () => {
    // Opcional: eliminar archivo después de descarga
    // fs.unlinkSync(filePath);
  });
});

// === EXTRACT ENDPOINT ===
app.post('/extract', upload.single('video'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

  const { type, quality, format, timestamp, start, duration, size, fps } = req.body;
  
  try {
    switch(type) {
      case 'audio': {
        const outputPath = path.join(outputDir, `audio_${Date.now()}.mp3`);
        ffmpeg(req.file.path)
          .noVideo()
          .audioBitrate(quality || '192k')
          .audioCodec('libmp3lame')
          .on('end', () => {
            fs.unlinkSync(req.file.path);
            res.json({ 
              success: true, 
              filename: path.basename(outputPath),
              downloadUrl: `/download/${path.basename(outputPath)}` 
            });
          })
          .on('error', (error) => {
            console.error('❌ FFmpeg error:', error);
            fs.existsSync(req.file.path) && fs.unlinkSync(req.file.path);
            res.status(500).json({ error: error.message });
          })
          .save(outputPath);
        break;
      }

      case 'frame-auto': {
        const command = ffmpeg(req.file.path);
        const metadata = await new Promise((resolve, reject) => {
          command.ffprobe((err, data) => err ? reject(err) : resolve(data));
        });
        
        const videoDuration = metadata.format.duration;
        const timestamps = [
          videoDuration * 0.25,
          videoDuration * 0.50,
          videoDuration * 0.75
        ];

        const files = [];
        for (let i = 0; i < timestamps.length; i++) {
          const ext = format || 'jpg';
          const outputPath = path.join(outputDir, `frame_${Date.now()}_${i + 1}.${ext}`);
          
          await new Promise((resolve, reject) => {
            ffmpeg(req.file.path)
              .seekInput(timestamps[i])
              .frames(1)
              .outputOptions(ext === 'png' ? ['-q:v', '1'] : ['-q:v', quality || '2'])
              .on('end', () => {
                files.push({
                  filename: path.basename(outputPath),
                  downloadUrl: `/download/${path.basename(outputPath)}`
                });
                resolve();
              })
              .on('error', reject)
              .save(outputPath);
          });
        }

        fs.unlinkSync(req.file.path);
        res.json({ success: true, files });
        break;
      }

      case 'frame-manual': {
        const ext = format || 'jpg';
        const outputPath = path.join(outputDir, `frame_${Date.now()}.${ext}`);
        
        ffmpeg(req.file.path)
          .seekInput(timestamp || 0)
          .frames(1)
          .outputOptions(ext === 'png' ? ['-q:v', '1'] : ['-q:v', quality || '2'])
          .on('end', () => {
            fs.unlinkSync(req.file.path);
            res.json({ 
              success: true, 
              filename: path.basename(outputPath),
              downloadUrl: `/download/${path.basename(outputPath)}` 
            });
          })
          .on('error', (error) => {
            console.error('❌ FFmpeg error:', error);
            fs.existsSync(req.file.path) && fs.unlinkSync(req.file.path);
            res.status(500).json({ error: error.message });
          })
          .save(outputPath);
        break;
      }

      case 'gif': {
        const outputPath = path.join(outputDir, `gif_${Date.now()}.gif`);
        const gifStart = parseFloat(start || 0);
        const gifDuration = parseFloat(duration || 3);
        const gifSize = parseInt(size || 360);
        const gifFps = parseInt(fps || 15);

        ffmpeg(req.file.path)
          .seekInput(gifStart)
          .duration(gifDuration)
          .size(`?x${gifSize}`)
          .fps(gifFps)
          .outputOptions([
            '-vf', `fps=${gifFps},scale=${gifSize}:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse`,
            '-loop', '0'
          ])
          .on('end', () => {
            fs.unlinkSync(req.file.path);
            res.json({ 
              success: true, 
              filename: path.basename(outputPath),
              downloadUrl: `/download/${path.basename(outputPath)}` 
            });
          })
          .on('error', (error) => {
            console.error('❌ FFmpeg error:', error);
            fs.existsSync(req.file.path) && fs.unlinkSync(req.file.path);
            res.status(500).json({ error: error.message });
          })
          .save(outputPath);
        break;
      }

      default:
        fs.unlinkSync(req.file.path);
        res.status(400).json({ error: 'Invalid extraction type' });
    }
  } catch (error) {
    console.error('❌ Extract error:', error);
    fs.existsSync(req.file.path) && fs.unlinkSync(req.file.path);
    res.status(500).json({ error: error.message });
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.use((req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));
}

app.listen(PORT, () => console.log(`✅ VideoWii Server running on: http://localhost:${PORT}`));
import express from 'express';
import multer from 'multer';
import ffmpeg from 'fluent-ffmpeg';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

// ==================== CONFIGURACIÓN GENERAL ====================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Directorios
const uploadsDir = path.join(__dirname, 'uploads');
const outputDir = path.join(__dirname, 'outputs');
[uploadsDir, outputDir].forEach(d => !fs.existsSync(d) && fs.mkdirSync(d));

const upload = multer({ dest: uploadsDir, limits: { fileSize: 500 * 1024 * 1024 } });
const QUALITY_MAP = { high: '18', medium: '23', low: '28' };
const FORMAT_CODECS = {
  mp4: { video: 'libx264', audio: 'aac' },
  avi: { video: 'mpeg4', audio: 'mp3' },
  mov: { video: 'libx264', audio: 'aac' },
  mkv: { video: 'libx264', audio: 'aac' },
  webm: { video: 'libvpx', audio: 'libvorbis' },
  flv: { video: 'flv', audio: 'mp3' }
};

// ==================== UTILIDADES ====================
const cleanupFile = (filePath) => fs.existsSync(filePath) && fs.unlinkSync(filePath);
const processVideo = (req, res, ffmpegCommand) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  ffmpegCommand
    .on('end', () => {
      cleanupFile(req.file.path);
      const outputPath = ffmpegCommand._outputs[0].target;
      const stats = fs.statSync(outputPath);
      res.json({
        success: true,
        filename: path.basename(outputPath),
        size: stats.size,
        downloadUrl: `/download/${path.basename(outputPath)}`
      });
    })
    .on('error', (error) => {
      console.error('❌ FFmpeg error:', error);
      cleanupFile(req.file.path);
      res.status(500).json({ error: error.message });
    });
};
const getVideoMetadata = (filePath) => {
  return new Promise((resolve, reject) => {
    ffmpeg(filePath).ffprobe((err, data) => err ? reject(err) : resolve(data));
  });
};

// ==================== ENDPOINTS GENERALES ====================
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString(), app: 'VideoWii' });
});
app.get('/download/:filename', (req, res) => {
  const filePath = path.join(outputDir, req.params.filename);
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'File not found' });
  res.download(filePath, (err) => {
    if (!err) cleanupFile(filePath); // Auto-cleanup después de descarga
  });
});

// ==================== SECCIÓN: OPTIMIZAR ====================
app.post('/optimize', upload.single('video'), (req, res) => {
  const { quality = '28', resolution = 'original', codec = 'h264' } = req.body;
  const outputPath = path.join(outputDir, `optimized_${Date.now()}.mp4`);

  let command = ffmpeg(req.file.path)
    .videoCodec(codec === 'h265' ? 'libx265' : 'libx264')
    .addOption('-crf', quality)
    .audioCodec('aac')
    .audioBitrate('128k');

  if (resolution !== 'original') command = command.size(`?x${resolution}`);

  console.log('🚀 Optimizando:', { quality, resolution, codec });
  processVideo(req, res, command.save(outputPath));
});

// ==================== SECCIÓN: EDITAR ====================
app.post('/edit', upload.single('video'), (req, res) => {
  const {
    brightness = '100',
    contrast = '100',
    saturation = '100',
    shadow = '0',
    speed = '1',
    quality = 'medium',
    format = 'mp4'
  } = req.body;

  const outputPath = path.join(outputDir, `edited_${Date.now()}.${format}`);
  const b = parseFloat(brightness) / 100;
  const c = parseFloat(contrast) / 100;
  const s = parseFloat(saturation) / 100;
  const sh = parseFloat(shadow);
  const speedVal = parseFloat(speed);
  const crfValue = QUALITY_MAP[quality] || '23';
  const filters = [];
  if (b !== 1 || c !== 1 || s !== 1) {
    const brightnessFFmpeg = (b - 1) * 0.5;
    filters.push(`eq=brightness=${brightnessFFmpeg}:contrast=${c}:saturation=${s}`);
  }
  if (sh > 0) {
    const shadowIntensity = sh / 30;
    filters.push(`unsharp=5:5:${shadowIntensity}:5:5:0.0`);
  }
  if (speedVal !== 1) filters.push(`setpts=${1 / speedVal}*PTS`);
  const codecConfig = FORMAT_CODECS[format] || FORMAT_CODECS.mp4;
  let command = ffmpeg(req.file.path)
    .videoCodec(codecConfig.video)
    .audioCodec(codecConfig.audio)
    .audioBitrate('128k');

  if (['mp4', 'mov', 'mkv'].includes(format)) {
    command = command.addOption('-crf', crfValue);
  }
  if (filters.length) command = command.videoFilters(filters.join(','));
  if (speedVal !== 1) command = command.audioFilters(`atempo=${speedVal}`);
  console.log('🎨 Editando:', { brightness, contrast, saturation, shadow, speed, quality, format });
  processVideo(req, res, command.save(outputPath));
});

// ==================== SECCIÓN: CONVERSOR ====================
app.post('/convert', upload.single('video'), (req, res) => {
  const outputPath = path.join(outputDir, `audio_${Date.now()}.mp3`);
  console.log('🎵 Convirtiendo a MP3');
  processVideo(req, res, ffmpeg(req.file.path).noVideo().audioBitrate('192k').save(outputPath));
});

app.post('/convert-format', upload.single('video'), (req, res) => {
  const { format = 'mp4', quality = 'medium' } = req.body;
  const outputPath = path.join(outputDir, `converted_${Date.now()}.${format}`);
  const codecConfig = FORMAT_CODECS[format] || FORMAT_CODECS.mp4;
  let command = ffmpeg(req.file.path)
    .videoCodec(codecConfig.video)
    .audioCodec(codecConfig.audio)
    .audioBitrate('128k');
  if (['mp4', 'mov', 'mkv'].includes(format)) {
    command = command.addOption('-crf', QUALITY_MAP[quality]);
  }
  console.log('🔄 Convirtiendo formato:', { format, quality });
  processVideo(req, res, command.save(outputPath));
});

// ==================== SECCIÓN: EXTRAER ====================
app.post('/extract', upload.single('video'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  const { type, quality, format, timestamp } = req.body;
  try {
    switch (type) {
      case 'audio': {
        const outputPath = path.join(outputDir, `audio_${Date.now()}.mp3`);
        console.log('🎵 Extrayendo audio');
        ffmpeg(req.file.path)
          .noVideo()
          .audioBitrate(quality || '192k')
          .audioCodec('libmp3lame')
          .on('end', () => {
            cleanupFile(req.file.path);
            res.json({
              success: true,
              filename: path.basename(outputPath),
              downloadUrl: `/download/${path.basename(outputPath)}`
            });
          })
          .on('error', (error) => {
            console.error('❌ Error al extraer audio:', error);
            cleanupFile(req.file.path);
            res.status(500).json({ error: error.message });
          })
          .save(outputPath);
        break;
      }
      case 'frame-manual': {
        const ext = format || 'jpg';
        const outputPath = path.join(outputDir, `frame_${Date.now()}.${ext}`);
        const qualityOptions = {
          png: ['-q:v', '1'],
          webp: ['-q:v', '90'],
          jpg: ['-q:v', '2']
        };
        console.log('📸 Extrayendo frame manual:', { timestamp, format: ext });
        ffmpeg(req.file.path)
          .seekInput(timestamp || 0)
          .frames(1)
          .outputOptions(qualityOptions[ext] || qualityOptions.jpg)
          .on('end', () => {
            cleanupFile(req.file.path);
            res.json({
              success: true,
              filename: path.basename(outputPath),
              downloadUrl: `/download/${path.basename(outputPath)}`
            });
          })
          .on('error', (error) => {
            console.error('❌ Error al extraer frame:', error);
            cleanupFile(req.file.path);
            res.status(500).json({ error: error.message });
          })
          .save(outputPath);
        break;
      }
      case 'frame-auto': {
        const metadata = await getVideoMetadata(req.file.path);
        const videoDuration = metadata.format.duration;
        const timestamps = [0.25, 0.50, 0.75].map(t => videoDuration * t);
        const ext = format || 'jpg';
        const qualityOptions = {
          png: ['-q:v', '1'],
          webp: ['-q:v', '90'],
          jpg: ['-q:v', '2']
        };
        console.log('📸 Extrayendo frames automáticos:', { count: 3, format: ext });
        const files = [];
        for (let i = 0; i < timestamps.length; i++) {
          const outputPath = path.join(outputDir, `frame_${Date.now()}_${i + 1}.${ext}`);
          await new Promise((resolve, reject) => {
            ffmpeg(req.file.path)
              .seekInput(timestamps[i])
              .frames(1)
              .outputOptions(qualityOptions[ext] || qualityOptions.jpg)
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
        cleanupFile(req.file.path);
        res.json({ success: true, files });
        break;
      }
      default:
        cleanupFile(req.file.path);
        res.status(400).json({ error: 'Invalid extraction type' });
    }
  } catch (error) {
    console.error('❌ Error en extracción:', error);
    cleanupFile(req.file.path);
    res.status(500).json({ error: error.message });
  }
});

// ==================== PRODUCCIÓN ====================
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.use((req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));
}

// ==================== SERVIDOR ====================
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════╗
║   🎬 VideoWii Server v2.0            ║
║   ✅ Running on: http://localhost:${PORT}  ║
║   📁 Uploads: ${uploadsDir}
║   📂 Outputs: ${outputDir}
╚═══════════════════════════════════════╝
  `);
});
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

// ✅ Headers necesarios para FFmpeg.wasm (SharedArrayBuffer)
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

app.use(cors());
app.use(express.json());

const uploadsDir = path.join(__dirname, 'entradas');
const outputDir = path.join(__dirname, 'salidas');
[uploadsDir, outputDir].forEach(d => !fs.existsSync(d) && fs.mkdirSync(d));

const upload = multer({ dest: uploadsDir, limits: { fileSize: 500*1024*1024 } });

app.get('/health', (req, res) => res.json({ status: 'OK' }));

app.post('/convert', upload.single('video'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file' });

  const out = path.join(outputDir, `${Date.now()}.mp3`);

  ffmpeg(req.file.path)
    .noVideo()
    .audioBitrate('192k')
    .on('end', () => {
      fs.unlinkSync(req.file.path);
      const s = fs.statSync(out);
      res.json({ 
        success: true, 
        filename: path.basename(out), 
        size: s.size, 
        downloadUrl: `/download/${path.basename(out)}` 
      });
    })
    .on('error', (e) => {
      fs.existsSync(req.file.path) && fs.unlinkSync(req.file.path);
      res.status(500).json({ error: e.message });
    })
    .save(out);
});

app.post('/optimize', upload.single('video'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file' });

  const { quality = '28', resolution = 'original', codec = 'h264' } = req.body;
  const out = path.join(outputDir, `optimized_${Date.now()}.mp4`);

  console.log('🎬 Optimizando video:', { quality, resolution, codec, input: req.file.path });

  let command = ffmpeg(req.file.path)
    .videoCodec(codec === 'h265' ? 'libx265' : 'libx264')
    .addOption('-crf', quality)
    .audioCodec('aac')
    .audioBitrate('128k');

  // Apply resolution if not original
  if (resolution !== 'original') {
    command = command.size(`?x${resolution}`);
  }

  command
    .on('end', () => {
      fs.unlinkSync(req.file.path);
      const s = fs.statSync(out);
      console.log('✅ Optimización completada:', { size: s.size, output: out });
      res.json({ 
        success: true, 
        filename: path.basename(out), 
        size: s.size, 
        downloadUrl: `/download/${path.basename(out)}` 
      });
    })
    .on('error', (e) => {
      console.error('❌ Error optimizando:', e.message);
      fs.existsSync(req.file.path) && fs.unlinkSync(req.file.path);
      res.status(500).json({ error: e.message });
    })
    .save(out);
});

app.post('/edit', upload.single('video'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file' });

  const { 
    brightness = '100', 
    contrast = '100', 
    saturation = '100',
    speed = '1' 
  } = req.body;
  
  const out = path.join(outputDir, `edited_${Date.now()}.mp4`);

  console.log('🎨 Editando video:', { brightness, contrast, saturation, speed, input: req.file.path });

  // Build FFmpeg filter string for color adjustments
  const filters = [];
  
  // Normalize values (FFmpeg uses 0-2 scale, we use 0-200%)
  const b = parseFloat(brightness) / 100;
  const c = parseFloat(contrast) / 100;
  const s = parseFloat(saturation) / 100;
  
  // Apply color filters if different from defaults
  if (b !== 1 || c !== 1 || s !== 1) {
    filters.push(`eq=brightness=${(b - 1) * 0.5}:contrast=${c}:saturation=${s}`);
  }

  // Apply speed adjustment
  const speedVal = parseFloat(speed);
  if (speedVal !== 1) {
    filters.push(`setpts=${1/speedVal}*PTS`);
  }

  let command = ffmpeg(req.file.path)
    .videoCodec('libx264')
    .audioCodec('aac')
    .audioBitrate('128k');

  // Apply filters if any
  if (filters.length > 0) {
    command = command.videoFilters(filters.join(','));
  }

  // Adjust audio speed if needed
  if (speedVal !== 1) {
    command = command.audioFilters(`atempo=${speedVal}`);
  }

  command
    .on('end', () => {
      fs.unlinkSync(req.file.path);
      const s = fs.statSync(out);
      console.log('✅ Edición completada:', { size: s.size, output: out });
      res.json({ 
        success: true, 
        filename: path.basename(out), 
        size: s.size, 
        downloadUrl: `/download/${path.basename(out)}` 
      });
    })
    .on('error', (e) => {
      console.error('❌ Error editando:', e.message);
      fs.existsSync(req.file.path) && fs.unlinkSync(req.file.path);
      res.status(500).json({ error: e.message });
    })
    .save(out);
});

app.post('/convert-format', upload.single('video'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file' });

  const { format = 'mp4', quality = 'medium' } = req.body;
  const out = path.join(outputDir, `converted_${Date.now()}.${format}`);

  console.log('🔄 Convirtiendo formato:', { format, quality, input: req.file.path });

  // Quality settings
  const qualitySettings = {
    high: { crf: '18', bitrate: '5000k' },
    medium: { crf: '23', bitrate: '2500k' },
    low: { crf: '28', bitrate: '1000k' }
  };

  const settings = qualitySettings[quality] || qualitySettings.medium;

  // Format-specific codecs
  const formatConfig = {
    mp4: { videoCodec: 'libx264', audioCodec: 'aac' },
    avi: { videoCodec: 'mpeg4', audioCodec: 'mp3' },
    mov: { videoCodec: 'libx264', audioCodec: 'aac' },
    webm: { videoCodec: 'libvpx', audioCodec: 'libvorbis' },
    mkv: { videoCodec: 'libx264', audioCodec: 'aac' },
    flv: { videoCodec: 'flv', audioCodec: 'mp3' }
  };

  const config = formatConfig[format] || formatConfig.mp4;

  let command = ffmpeg(req.file.path)
    .videoCodec(config.videoCodec)
    .audioCodec(config.audioCodec)
    .videoBitrate(settings.bitrate)
    .audioBitrate('128k');

  // Add CRF for formats that support it
  if (['mp4', 'mov', 'mkv'].includes(format)) {
    command = command.addOption('-crf', settings.crf);
  }

  command
    .on('end', () => {
      fs.unlinkSync(req.file.path);
      const s = fs.statSync(out);
      console.log('✅ Conversión completada:', { size: s.size, output: out });
      res.json({ 
        success: true, 
        filename: path.basename(out), 
        size: s.size, 
        downloadUrl: `/download/${path.basename(out)}` 
      });
    })
    .on('error', (e) => {
      console.error('❌ Error convirtiendo:', e.message);
      fs.existsSync(req.file.path) && fs.unlinkSync(req.file.path);
      res.status(500).json({ error: e.message });
    })
    .save(out);
});

app.get('/download/:filename', (req, res) => {
  const f = path.join(outputDir, req.params.filename);
  if (!fs.existsSync(f)) return res.status(404).json({ error: 'Not found' });
  res.download(f);
});

// ✅ Solo servir HTML en producción
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
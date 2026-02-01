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

// ✅ HELPER: Procesar video y limpiar
const processVideo = (req, res, ffmpegCommand) => {
  if (!req.file) return res.status(400).json({ error: 'No file' });
  
  ffmpegCommand
    .on('end', () => {
      fs.unlinkSync(req.file.path);
      const s = fs.statSync(ffmpegCommand._outputs[0].target);
      res.json({ 
        success: true, 
        filename: path.basename(ffmpegCommand._outputs[0].target), 
        size: s.size, 
        downloadUrl: `/download/${path.basename(ffmpegCommand._outputs[0].target)}` 
      });
    })
    .on('error', (e) => {
      fs.existsSync(req.file.path) && fs.unlinkSync(req.file.path);
      res.status(500).json({ error: e.message });
    });
};

app.get('/health', (req, res) => res.json({ status: 'OK' }));

app.post('/convert', upload.single('video'), (req, res) => {
  const out = path.join(outputDir, `${Date.now()}.mp3`);
  processVideo(req, res, ffmpeg(req.file.path).noVideo().audioBitrate('192k').save(out));
});

app.post('/optimize', upload.single('video'), (req, res) => {
  const { quality = '28', resolution = 'original', codec = 'h264' } = req.body;
  const out = path.join(outputDir, `opt_${Date.now()}.mp4`);
  
  let cmd = ffmpeg(req.file.path)
    .videoCodec(codec === 'h265' ? 'libx265' : 'libx264')
    .addOption('-crf', quality)
    .audioCodec('aac')
    .audioBitrate('128k');
  
  if (resolution !== 'original') cmd = cmd.size(`?x${resolution}`);
  processVideo(req, res, cmd.save(out));
});

app.post('/edit', upload.single('video'), (req, res) => {
  const { brightness = '100', contrast = '100', saturation = '100', speed = '1' } = req.body;
  const out = path.join(outputDir, `edit_${Date.now()}.mp4`);
  
  const b = parseFloat(brightness) / 100;
  const c = parseFloat(contrast) / 100;
  const s = parseFloat(saturation) / 100;
  const speedVal = parseFloat(speed);
  
  const filters = [];
  if (b !== 1 || c !== 1 || s !== 1) filters.push(`eq=brightness=${(b-1)*0.5}:contrast=${c}:saturation=${s}`);
  if (speedVal !== 1) filters.push(`setpts=${1/speedVal}*PTS`);
  
  let cmd = ffmpeg(req.file.path).videoCodec('libx264').audioCodec('aac').audioBitrate('128k');
  if (filters.length) cmd = cmd.videoFilters(filters.join(','));
  if (speedVal !== 1) cmd = cmd.audioFilters(`atempo=${speedVal}`);
  
  processVideo(req, res, cmd.save(out));
});

app.post('/convert-format', upload.single('video'), (req, res) => {
  const { format = 'mp4', quality = 'medium' } = req.body;
  const out = path.join(outputDir, `conv_${Date.now()}.${format}`);
  
  const qs = { high: '18', medium: '23', low: '28' };
  const fc = {
    mp4: { v: 'libx264', a: 'aac' }, avi: { v: 'mpeg4', a: 'mp3' },
    mov: { v: 'libx264', a: 'aac' }, webm: { v: 'libvpx', a: 'libvorbis' }
  };
  
  const cfg = fc[format] || fc.mp4;
  let cmd = ffmpeg(req.file.path).videoCodec(cfg.v).audioCodec(cfg.a).audioBitrate('128k');
  if (['mp4','mov','mkv'].includes(format)) cmd = cmd.addOption('-crf', qs[quality]);
  
  processVideo(req, res, cmd.save(out));
});

app.get('/download/:filename', (req, res) => {
  const f = path.join(outputDir, req.params.filename);
  if (!fs.existsSync(f)) return res.status(404).json({ error: 'Not found' });
  res.download(f);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.use((req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));
}

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
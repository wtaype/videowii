import './optimizar.css';
import $ from 'jquery';
import { app, ipdev } from '../wii.js';
import { Mensaje, Notificacion, wiSpin } from '../widev.js';

const API = (() => {
  if (typeof window === 'undefined') return '';
  const h = window.location.hostname;
  const locales = new Set(['localhost', ipdev]);
  return locales.has(h) ? `http://${h}:3000` : window.location.origin;
})();

export const render = () => `
  <div class="optimizar_container mwb">
    <section class="optimizar_main">
      <div class="optimizar_left">
        <div class="video_info_section">
          <div class="video_info_header">
            <h3><i class="fas fa-info-circle"></i> Información del Video</h3>
          </div>

          <div class="upload_zone_compact" id="uploadZone">
            <i class="fas fa-cloud-upload-alt"></i>
            <p>Doble clic para seleccionar video</p>
            <input type="file" id="videoInput" accept="video/*" hidden>
          </div>

          <div class="video_actions">
            <button class="btn_select" id="btnSelect">
              <i class="fas fa-folder-open"></i>
              <span>Seleccionar</span>
            </button>
            <button class="btn_delete" id="btnDelete">
              <i class="fas fa-trash-alt"></i>
              <span>Eliminar</span>
            </button>
          </div>

          <div class="optimization_settings">
            <h4><i class="fas fa-sliders-h"></i> Configuración</h4>
            
            <div class="setting_item">
              <label><i class="fas fa-star"></i> Calidad: <span id="qualityValue">28</span> (CRF)</label>
              <input type="range" id="qualitySlider" min="18" max="35" value="28" step="1">
              <small>18=Máxima calidad, 35=Menor tamaño</small>
            </div>

            <div class="settings_grid">
              <div class="setting_item">
                <label><i class="fas fa-desktop"></i> Resolución:</label>
                <select id="resolutionSelect">
                  <option value="original">Original</option>
                  <option value="1080">1080p (Full HD)</option>
                  <option value="720">720p (HD)</option>
                  <option value="480">480p (SD)</option>
                </select>
              </div>

              <div class="setting_item">
                <label><i class="fas fa-cog"></i> Codec:</label>
                <select id="codecSelect">
                  <option value="h264">H.264 (Mejor compatibilidad)</option>
                  <option value="h265">H.265 (Menor tamaño)</option>
                </select>
              </div>
            </div>
          </div>

          <div class="video_stats_grid" id="videoStatsGrid" style="display:none;">
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-clock"></i></div>
              <div class="stat_card_content">
                <div class="stat_card_label">Duración:</div>
                <div class="stat_card_value" id="videoDuration">--</div>
              </div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-expand"></i></div>
              <div class="stat_card_content">
                <div class="stat_card_label">Resolución:</div>
                <div class="stat_card_value" id="videoResolution">--</div>
              </div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-file"></i></div>
              <div class="stat_card_content">
                <div class="stat_card_label">Tamaño:</div>
                <div class="stat_card_value" id="videoSize">--</div>
              </div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-film"></i></div>
              <div class="stat_card_content">
                <div class="stat_card_label">Formato:</div>
                <div class="stat_card_value" id="videoFormat">--</div>
              </div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-tachometer-alt"></i></div>
              <div class="stat_card_content">
                <div class="stat_card_label">Bitrate:</div>
                <div class="stat_card_value" id="videoBitrate">--</div>
              </div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-chart-line"></i></div>
              <div class="stat_card_content">
                <div class="stat_card_label">Calidad:</div>
                <div class="stat_card_value" id="videoQuality">--</div>
              </div>
            </div>
          </div>

          <div class="optimization_preview" id="optimizationPreview" style="display:none;">
            <div class="preview_header">
              <h4><i class="fas fa-eye"></i> Vista Previa</h4>
            </div>
            <div class="preview_comparison_grid">
              <div class="preview_cell">
                <span class="preview_label">Original:</span>
                <span class="preview_value" id="previewOriginal">--</span>
              </div>
              <div class="preview_cell arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
              <div class="preview_cell">
                <span class="preview_label">Estimado:</span>
                <span class="preview_value success" id="previewEstimated">--</span>
              </div>
              <div class="preview_cell reduction">
                <i class="fas fa-chart-pie"></i>
                <span id="previewReduction">0%</span>
              </div>
            </div>
          </div>

          <button class="btn_optimize" id="btnOptimize">
            <i class="fas fa-magic"></i>
            <span>Optimizar Video</span>
          </button>
        </div>
      </div>

      <div class="optimizar_right">
        <div class="progress_section" id="progressSection" style="display:none;">
          <div class="progress_header">
            <h4><i class="fas fa-spinner fa-spin"></i> Optimizando Video...</h4>
            <span class="progress_percent" id="progressPercent">0%</span>
          </div>
          <div class="progress_bar">
            <div class="progress_fill" id="progressFill"></div>
          </div>
          <p class="progress_message" id="progressMessage">Iniciando optimización...</p>
        </div>

        <div class="video_player_wrapper">
          <div class="no_video_placeholder" id="noVideoPlaceholder">
            <i class="fas fa-video"></i>
            <h3>Carga un video para optimizar</h3>
            <p>Soporta MP4, MOV, WEBM, AVI y más formatos</p>
          </div>
          <div class="video_player_container" id="videoPlayerContainer" style="display:none;">
            <video id="optimizarVideo" controls playsinline autoplay loop></video>
          </div>
        </div>

        <div class="video_controls" id="videoControls" style="display:none;">
          <button class="control_btn" id="btnRewind"><i class="fas fa-backward"></i></button>
          <button class="control_btn play" id="btnPlayPause"><i class="fas fa-play"></i></button>
          <button class="control_btn" id="btnForward"><i class="fas fa-forward"></i></button>
          <button class="control_btn" id="btnVolume"><i class="fas fa-volume-up"></i></button>
          <button class="control_btn" id="btnFullscreen"><i class="fas fa-expand"></i></button>
        </div>
      </div>
    </section>
  </div>
`;

export const init = () => {
  console.log(`✅ Optimizar de ${app} cargado`);
  let currentVideo = null, videoMetadata = {}, isOptimizing = false, videoAnalysis = null;

  const analyzeVideo = async (file, videoElement) => {
    const duration = videoElement.duration;
    const size = file.size;
    const bitrate = (size * 8) / duration;
    const bitrateKbps = bitrate / 1000;
    const bitrateMbps = bitrateKbps / 1000;

    let quality = 'baja';
    let suggestedCRF = 30;
    let isAlreadyOptimized = false;

    if (bitrateMbps > 8) {
      quality = 'muy alta';
      suggestedCRF = 23;
    } else if (bitrateMbps > 5) {
      quality = 'alta';
      suggestedCRF = 25;
    } else if (bitrateMbps > 2.5) {
      quality = 'media';
      suggestedCRF = 28;
    } else if (bitrateMbps > 1) {
      quality = 'baja';
      suggestedCRF = 30;
      isAlreadyOptimized = true;
    } else {
      quality = 'muy baja';
      suggestedCRF = 32;
      isAlreadyOptimized = true;
    }

    return {
      duration,
      size,
      bitrate: bitrateKbps,
      bitrateMbps,
      quality,
      suggestedCRF,
      isAlreadyOptimized,
      width: videoElement.videoWidth,
      height: videoElement.videoHeight
    };
  };

  const estimateOutputSize = (analysis, quality, codec) => {
    const targetBitrate = getTargetBitrate(quality, codec, analysis.width, analysis.height);
    const estimatedSize = (targetBitrate * analysis.duration) / 8;
    return estimatedSize;
  };

  const getTargetBitrate = (crf, codec, width, height) => {
    const pixels = width * height;
    const isHD = pixels >= 1280 * 720;
    const isFHD = pixels >= 1920 * 1080;

    let baseBitrate;
    if (isFHD) baseBitrate = 4000;
    else if (isHD) baseBitrate = 2500;
    else baseBitrate = 1500;

    const crfFactor = Math.max(0.3, 1 - ((parseInt(crf) - 18) / 17) * 0.7);
    const codecFactor = codec === 'h265' ? 0.6 : 1;

    return baseBitrate * crfFactor * codecFactor;
  };

  const updateOptimizationPreview = () => {
    if (!videoAnalysis) return;

    const quality = $('#qualitySlider').val();
    const codec = $('#codecSelect').val();
    const estimatedSize = estimateOutputSize(videoAnalysis, quality, codec);
    const reduction = ((1 - estimatedSize / videoAnalysis.size) * 100).toFixed(1);

    $('#previewOriginal').text(formatFileSize(videoAnalysis.size));
    $('#previewEstimated').text(formatFileSize(estimatedSize));
    $('#previewReduction').text(`${reduction}%`);

    if (estimatedSize >= videoAnalysis.size * 0.95) {
      $('#previewEstimated').removeClass('success').addClass('warning');
    } else {
      $('#previewEstimated').removeClass('warning').addClass('success');
    }

    $('#optimizationPreview').fadeIn();
  };

  const handleVideoUpload = async (file) => {
    if (!file.type.startsWith('video/')) return Mensaje('Por favor selecciona un archivo de video válido', 'error');
    
    currentVideo = file;
    const url = URL.createObjectURL(file);
    const video = $('#optimizarVideo')[0];
    
    video.onloadedmetadata = video.onerror = null;
    video.src = url;

    video.onloadedmetadata = async () => {
      videoMetadata = {
        duration: video.duration,
        width: video.videoWidth,
        height: video.videoHeight,
        size: file.size,
        format: file.type.split('/')[1].toUpperCase(),
        name: file.name
      };

      videoAnalysis = await analyzeVideo(file, video);

      $('#noVideoPlaceholder').hide();
      $('#videoPlayerContainer, #videoStatsGrid, #videoControls').show();
      $('#videoDuration').text(formatDuration(video.duration));
      $('#videoResolution').text(`${video.videoWidth}x${video.videoHeight}`);
      $('#videoSize').text(formatFileSize(file.size));
      $('#videoFormat').text(videoMetadata.format);
      $('#videoBitrate').text(`${videoAnalysis.bitrateMbps.toFixed(2)} Mbps`);
      $('#videoQuality').text(videoAnalysis.quality.toUpperCase());

      $('#qualitySlider').val(videoAnalysis.suggestedCRF);
      $('#qualityValue').text(videoAnalysis.suggestedCRF);

      updateOptimizationPreview();
      
      Mensaje('¡Video analizado exitosamente! 🎬', 'success');
    };

    video.onerror = () => {
      if (currentVideo) {
        Mensaje('Error al cargar el video. Intenta con otro archivo.', 'error');
        resetOptimizer();
      }
    };
  };

  const resetOptimizer = () => {
    const video = $('#optimizarVideo')[0];
    if (video) {
      video.onloadedmetadata = video.onerror = null;
      video.pause();
      if (video.src) URL.revokeObjectURL(video.src);
      video.src = '';
      video.load();
    }
    $('#videoPlayerContainer, #videoStatsGrid, #videoControls, #optimizationPreview').hide();
    $('#noVideoPlaceholder').show();
    $('#videoInput').val('');
    $('#progressSection').hide();
    currentVideo = null;
    videoMetadata = {};
    videoAnalysis = null;
  };

  const optimizeVideo = async () => {
    const quality = $('#qualitySlider').val();
    const estimatedSize = estimateOutputSize(videoAnalysis, quality, $('#codecSelect').val());

    if (estimatedSize >= videoAnalysis.size * 0.98) {
      const confirm = window.confirm(
        '⚠️ ADVERTENCIA: El tamaño estimado es similar o mayor al original.\n\n' +
        'Esto puede suceder si el video ya está optimizado.\n\n' +
        '¿Deseas continuar de todos modos?'
      );
      if (!confirm) return;
    }

    isOptimizing = true;
    wiSpin('#btnOptimize', true, 'Optimizando...');
    $('#progressSection').fadeIn();
    updateProgress(0, 'Preparando video...');

    try {
      const resolution = $('#resolutionSelect').val();
      const codec = $('#codecSelect').val();

      const formData = new FormData();
      formData.append('video', currentVideo);
      formData.append('quality', quality);
      formData.append('resolution', resolution);
      formData.append('codec', codec);

      updateProgress(10, 'Subiendo video al servidor...');

      const response = await fetch(`${API}/optimize`, { method: 'POST', body: formData });
      if (!response.ok) throw new Error(`Error del servidor: ${response.statusText}`);

      updateProgress(50, 'Optimizando video en el servidor...');

      const result = await response.json();
      if (!result.success) throw new Error(result.error || 'Error desconocido');

      updateProgress(90, 'Descargando video optimizado...');

      const downloadUrl = `${API}${result.downloadUrl}`;
      const downloadResponse = await fetch(downloadUrl);
      const blob = await downloadResponse.blob();

      const originalSize = currentVideo.size;
      const optimizedSize = blob.size;
      const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

      updateProgress(100, 'Completado!');

      if (optimizedSize >= originalSize) {
        Notificacion(`Video  (${formatFileSize(optimizedSize)}) es mayor que el original (${formatFileSize(originalSize)}). No se recomienda usar editar videos.`, 'warning');
      }

      const a = document.createElement('a');
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = `optimizado_${currentVideo.name}`;
      a.click();
      URL.revokeObjectURL(url);

      setTimeout(() => {
        $('#progressSection').fadeOut();
        if (reduction > 0) {
          Notificacion(`✅ Video optimizado: ${reduction}% (${formatFileSize(originalSize)} → ${formatFileSize(optimizedSize)})`, 'success');
        }
      }, 1000);

    } catch (error) {
      console.error('❌ Error optimizando:', error);
      Mensaje(`Error al optimizar: ${error.message}`, 'error');
      $('#progressSection').fadeOut();
    } finally {
      isOptimizing = false;
      wiSpin('#btnOptimize', false);
    }
  };

  const updateProgress = (percent, message) => {
    $('#progressPercent').text(`${percent}%`);
    $('#progressFill').css('width', `${percent}%`);
    $('#progressMessage').text(message);
  };

  const formatDuration = (s) => `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
  const formatFileSize = (b) => b < 1024 ? b + ' B' : b < 1024 * 1024 ? (b / 1024).toFixed(2) + ' KB' : (b / (1024 * 1024)).toFixed(2) + ' MB';

  $('#uploadZone').on('dblclick', () => $('#videoInput').click())
    .on('dragover', (e) => { e.preventDefault(); $(e.currentTarget).addClass('dragover'); })
    .on('dragleave', (e) => $(e.currentTarget).removeClass('dragover'))
    .on('drop', (e) => { e.preventDefault(); $(e.currentTarget).removeClass('dragover'); const files = e.originalEvent.dataTransfer.files; if (files.length) handleVideoUpload(files[0]); });

  $('#videoInput').on('change', (e) => { const file = e.target.files[0]; if (file) handleVideoUpload(file); });
  $(document).on('click', '#btnSelect', () => !isOptimizing && $('#videoInput').click());
  $(document).on('click', '#btnDelete', () => {
    if (isOptimizing) return Mensaje('No puedes eliminar mientras se optimiza', 'warning');
    if (confirm('¿Estás seguro de eliminar este video?')) { resetOptimizer(); Mensaje('Video eliminado', 'success'); }
  });
  $(document).on('input', '#qualitySlider, #resolutionSelect, #codecSelect', function() {
    $('#qualityValue').text($('#qualitySlider').val());
    if (videoAnalysis) updateOptimizationPreview();
  });
  $(document).on('click', '#btnOptimize', async () => {
    if (!currentVideo) return Mensaje('No hay video para optimizar', 'error');
    if (isOptimizing) return Mensaje('Ya hay una optimización en progreso', 'warning');
    await optimizeVideo();
  });

  $(document).on('click', '#btnPlayPause', function() {
    const video = $('#optimizarVideo')[0];
    if (video.paused) { video.play(); $(this).html('<i class="fas fa-pause"></i>'); }
    else { video.pause(); $(this).html('<i class="fas fa-play"></i>'); }
  });
  $(document).on('click', '#btnRewind', () => { const v = $('#optimizarVideo')[0]; v.currentTime = Math.max(0, v.currentTime - 10); });
  $(document).on('click', '#btnForward', () => { const v = $('#optimizarVideo')[0]; v.currentTime = Math.min(v.duration, v.currentTime + 10); });
  $(document).on('click', '#btnVolume', function() {
    const video = $('#optimizarVideo')[0];
    video.muted = !video.muted;
    $(this).html(`<i class="fas fa-volume-${video.muted ? 'mute' : 'up'}"></i>`);
  });
  $(document).on('click', '#btnFullscreen', () => {
    const video = $('#optimizarVideo')[0];
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
  });
};

export const cleanup = () => {
  console.log('🧹 Optimizar limpiado');
  $('#uploadZone, #videoInput, #btnSelect, #btnDelete, #btnOptimize, #qualitySlider, #resolutionSelect, #codecSelect, #btnPlayPause, #btnRewind, #btnForward, #btnVolume, #btnFullscreen').off();
  const video = $('#optimizarVideo')[0];
  if (video?.src) URL.revokeObjectURL(video.src);
};
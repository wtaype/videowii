import './optimizar.css';
import $ from 'jquery';
import { app, ipdev } from '../wii.js';
import { Mensaje, Notificacion, wiTip } from '../widev.js';

const API = (() => {
  if (typeof window === 'undefined') return '';
  const h = window.location.hostname;
  const locales = new Set(['localhost', ipdev]);
  return locales.has(h) ? `http://${h}:3000` : window.location.origin;
})();

export const render = () => `
  <div class="optimizar_container mwb">
    <section class="optimizar_main">
      <!-- LEFT COLUMN (29%) -->
      <div class="optimizar_left">
        <div class="video_info_section">
          <div class="video_info_header">
            <h3><i class="fas fa-bolt"></i> Optimizar Video</h3>
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

          <div class="file_info_left" id="fileInfoLeft" style="display:none;">
            <div class="file_info_header">
              <i class="fas fa-file-video"></i>
              <span>Nombre:</span>
            </div>
            <div class="file_name_display" id="fileNameDisplay" title="">video.mp4</div>
          </div>

          <div class="video_stats_grid" id="videoStatsGrid" style="display:none;">
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-clock"></i></div>
              <div class="stat_card_label">Duración:</div>
              <div class="stat_card_value" id="videoDuration">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-desktop"></i></div>
              <div class="stat_card_label">Resolución:</div>
              <div class="stat_card_value" id="videoResolution">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-hdd"></i></div>
              <div class="stat_card_label">Tamaño:</div>
              <div class="stat_card_value" id="videoSize">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-file-video"></i></div>
              <div class="stat_card_label">Formato:</div>
              <div class="stat_card_value" id="videoFormat">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-tachometer-alt"></i></div>
              <div class="stat_card_label">Bitrate:</div>
              <div class="stat_card_value" id="videoBitrate">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-star"></i></div>
              <div class="stat_card_label">Calidad:</div>
              <div class="stat_card_value" id="videoQuality">--</div>
            </div>
          </div>

          <div class="optimization_preview" id="optimizationPreview" style="display:none;">
            <div class="preview_header">
              <h4><i class="fas fa-eye"></i> <span id="previewTitle">Vista Previa</span></h4>
            </div>
            <div class="preview_comparison">
              <div class="preview_cell">
                <span class="preview_label">Original:</span>
                <span class="preview_value" id="previewOriginal">--</span>
              </div>
              <div class="preview_arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
              <div class="preview_cell">
                <span class="preview_label" id="previewLabel">Estimado:</span>
                <span class="preview_value success" id="previewEstimated">--</span>
              </div>
              <div class="preview_reduction">
                <i class="fas fa-chart-pie"></i>
                <span id="previewReduction">0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN (70%) -->
      <div class="optimizar_right">
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

        <div class="optimization_controls" id="optimizationControls" style="display:none;">
          <div class="controls_row">
            <div class="control_group">
              <label id="labelQuality"><i class="fas fa-star"></i> Calidad (CRF):</label>
              <input type="number" id="qualityInput" min="18" max="35" value="28" step="1">
            </div>

            <div class="control_group">
              <label><i class="fas fa-desktop"></i> Resolución:</label>
              <select id="resolutionSelect">
                <option value="original">Original</option>
                <option value="1080">1080p (Full HD)</option>
                <option value="720">720p (HD)</option>
                <option value="480">480p (SD)</option>
              </select>
            </div>

            <div class="control_group">
              <label><i class="fas fa-cog"></i> Codec:</label>
              <select id="codecSelect">
                <option value="h264">H.264 (Mejor compatibilidad)</option>
                <option value="h265">H.265 (Menor tamaño)</option>
              </select>
            </div>
          </div>

          <div class="controls_row optimization_action">
            <button class="btn_optimize" id="btnOptimize">
              <i class="fas fa-magic"></i>
              <span>Optimizar Video</span>
            </button>
            <div class="progress_wrapper" id="progressWrapper" style="display:none;">
              <div class="progress_bar_inline">
                <div class="progress_fill_inline" id="progressFillInline"></div>
              </div>
              <span class="progress_text" id="progressText">0%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
`;

export const init = () => {
  console.log(`✅ Optimizar de ${app} cargado`);
  let currentVideo = null, videoMetadata = {}, videoAnalysis = null, isOptimizing = false;

  // Tooltip para Calidad (CRF)
  $('#labelQuality').on('mouseenter', function() {
    wiTip(this, '18 = Máxima calidad | 35 = Menor tamaño');
  }).on('mouseleave', function() {
    $('.wiTip').remove();
  });

  const analyzeVideo = (file, videoElement) => {
    const duration = videoElement.duration;
    const size = file.size;
    const bitrate = (size * 8) / duration;
    const bitrateKbps = bitrate / 1000;
    const bitrateMbps = bitrateKbps / 1000;

    let quality = 'BAJA';
    let suggestedCRF = 30;
    let isAlreadyOptimized = false;

    if (bitrateMbps > 8) {
      quality = 'MUY ALTA';
      suggestedCRF = 23;
    } else if (bitrateMbps > 5) {
      quality = 'ALTA';
      suggestedCRF = 25;
    } else if (bitrateMbps > 2.5) {
      quality = 'MEDIA';
      suggestedCRF = 28;
    } else if (bitrateMbps > 1) {
      quality = 'BAJA';
      suggestedCRF = 30;
      isAlreadyOptimized = true;
    } else {
      quality = 'MUY BAJA';
      suggestedCRF = 32;
      isAlreadyOptimized = true;
    }

    return {
      duration, size, bitrate: bitrateKbps, bitrateMbps, quality, suggestedCRF, isAlreadyOptimized,
      width: videoElement.videoWidth, height: videoElement.videoHeight
    };
  };

  const estimateOutputSize = (analysis, quality, codec, resolution) => {
    const targetBitrate = getTargetBitrate(quality, codec, analysis.width, analysis.height);
    const resolutionFactors = { original: 1, 1080: 0.9, 720: 0.7, 480: 0.5 };
    const resFactor = resolutionFactors[resolution] || 1;
    return (targetBitrate * analysis.duration * resFactor) / 8;
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

    const quality = $('#qualityInput').val();
    const codec = $('#codecSelect').val();
    const resolution = $('#resolutionSelect').val();
    const estimatedSize = estimateOutputSize(videoAnalysis, quality, codec, resolution);
    const reduction = ((1 - estimatedSize / videoAnalysis.size) * 100).toFixed(1);

    $('#previewOriginal').text(formatFileSize(videoAnalysis.size));
    $('#previewEstimated').text(formatFileSize(estimatedSize));
    $('#previewReduction').text(`${reduction > 0 ? '-' : '+'}${Math.abs(reduction)}%`);
    $('#previewLabel').text('Estimado:');
    $('#previewTitle').text('Vista Previa');

    // Update visual styling based on reduction (NO NOTIFICATIONS)
    if (estimatedSize >= videoAnalysis.size * 0.95) {
      $('#previewEstimated').removeClass('success').addClass('warning');
      $('#previewReduction').closest('.preview_reduction').css('background', 'var(--warning)');
    } else {
      $('#previewEstimated').removeClass('warning').addClass('success');
      $('#previewReduction').closest('.preview_reduction').css('background', 'var(--success)');
    }

    $('#optimizationPreview').fadeIn();
  };

  const handleVideoUpload = (file) => {
    if (!file.type.startsWith('video/')) {
      Notificacion('Por favor selecciona un archivo de video válido', 'error', 3000);
      return;
    }

    currentVideo = file;
    const url = URL.createObjectURL(file);
    const video = $('#optimizarVideo')[0];
    
    video.onloadedmetadata = video.onerror = null;
    video.src = url;

    video.onloadedmetadata = () => {
      videoMetadata = {
        duration: video.duration,
        width: video.videoWidth,
        height: video.videoHeight,
        size: file.size,
        format: file.name.split('.').pop().toUpperCase(),
        name: file.name
      };

      videoAnalysis = analyzeVideo(file, video);

      $('#noVideoPlaceholder').hide();
      $('#videoPlayerContainer, #optimizationControls, #optimizationPreview, #videoStatsGrid, #fileInfoLeft').show();
      
      // Update file name in LEFT
      $('#fileNameDisplay').text(file.name).attr('title', file.name);

      // Update stats in LEFT with icons
      $('#videoDuration').text(formatDuration(video.duration));
      $('#videoResolution').text(`${video.videoWidth}x${video.videoHeight}`);
      $('#videoSize').text(formatFileSize(file.size));
      $('#videoFormat').text(videoMetadata.format);
      $('#videoBitrate').text(`${videoAnalysis.bitrateMbps.toFixed(2)} Mbps`);
      $('#videoQuality').text(videoAnalysis.quality);

      // Set suggested CRF
      $('#qualityInput').val(videoAnalysis.suggestedCRF);

      updateOptimizationPreview();

      // Solo notificación al cargar el video
      Notificacion(`✅ Video analizado: ${videoAnalysis.quality} | ${videoAnalysis.bitrateMbps.toFixed(2)} Mbps`, 'success', 3000);
    };

    video.onerror = () => {
      if (currentVideo) {
        Notificacion('Error al cargar el video. Intenta con otro archivo.', 'error', 3000);
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
    
    $('#videoPlayerContainer, #optimizationControls, #optimizationPreview, #videoStatsGrid, #fileInfoLeft').hide();
    $('#noVideoPlaceholder').show();
    $('#videoInput').val('');
    $('#progressWrapper').hide();
    
    currentVideo = null;
    videoMetadata = {};
    videoAnalysis = null;
    isOptimizing = false;
  };

  const optimizeVideo = async () => {
    if (!currentVideo) {
      Notificacion('No hay video para optimizar', 'error', 2000);
      return;
    }

    if (isOptimizing) {
      Notificacion('Ya hay una optimización en progreso', 'warning', 2000);
      return;
    }

    const quality = $('#qualityInput').val();
    const resolution = $('#resolutionSelect').val();
    const codec = $('#codecSelect').val();
    const estimatedSize = estimateOutputSize(videoAnalysis, quality, codec, resolution);

    if (estimatedSize >= videoAnalysis.size * 0.98) {
      const confirm = window.confirm(
        '⚠️ ADVERTENCIA: El tamaño estimado es similar o mayor al original.\n\n' +
        'Esto puede suceder si el video ya está optimizado.\n\n' +
        '¿Deseas continuar de todos modos?'
      );
      if (!confirm) return;
    }

    try {
      isOptimizing = true;
      $('#btnOptimize').prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Optimizando...');
      $('#progressWrapper').fadeIn();
      updateProgress(0);

      const formData = new FormData();
      formData.append('video', currentVideo);
      formData.append('quality', quality);
      formData.append('resolution', resolution);
      formData.append('codec', codec);

      updateProgress(10);

      const response = await fetch(`${API}/optimize`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) throw new Error(`Error del servidor: ${response.statusText}`);

      updateProgress(50);

      const result = await response.json();
      if (!result.success) throw new Error(result.error || 'Error desconocido');

      updateProgress(80);

      const downloadUrl = `${API}${result.downloadUrl}`;
      const downloadResponse = await fetch(downloadUrl);
      const blob = await downloadResponse.blob();

      const originalSize = currentVideo.size;
      const optimizedSize = blob.size;
      const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

      updateProgress(95);

      // Update preview with REAL data + Change title
      $('#previewTitle').text('Video Convertido');
      $('#previewLabel').text('Convertido:');
      $('#previewEstimated').text(formatFileSize(optimizedSize));
      $('#previewReduction').text(`${reduction > 0 ? '-' : '+'}${Math.abs(reduction)}%`);

      if (optimizedSize >= originalSize) {
        $('#previewEstimated').removeClass('success').addClass('warning');
        $('#previewReduction').closest('.preview_reduction').css('background', 'var(--warning)');
      } else {
        $('#previewEstimated').removeClass('warning').addClass('success');
        $('#previewReduction').closest('.preview_reduction').css('background', 'var(--success)');
      }

      const a = document.createElement('a');
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = `optimizado_${currentVideo.name}`;
      a.click();
      URL.revokeObjectURL(url);

      updateProgress(100);

      setTimeout(() => {
        $('#progressWrapper').fadeOut();
        $('#btnOptimize').prop('disabled', false).html('<i class="fas fa-magic"></i> Optimizar Video');
        
        // SOLO NOTIFICACIÓN FINAL
        if (optimizedSize < originalSize) {
          Notificacion(`✅ Video optimizado con éxito: ${Math.abs(reduction)}% de reducción (${formatFileSize(originalSize)} → ${formatFileSize(optimizedSize)})`, 'success', 4000);
        } else {
          Notificacion(` Video procesado. El tamaño final (${formatFileSize(optimizedSize)}) es mayor que el original (${formatFileSize(originalSize)})`, 'warning', 4000);
        }
      }, 1000);

    } catch (error) {
      console.error('❌ Error optimizando:', error);
      $('#progressWrapper').fadeOut();
      $('#btnOptimize').prop('disabled', false).html('<i class="fas fa-magic"></i> Optimizar Video');
      Notificacion(`Error al optimizar: ${error.message}`, 'error', 4000);
    } finally {
      isOptimizing = false;
    }
  };

  const updateProgress = (percent) => {
    $('#progressFillInline').css('width', `${percent}%`);
    $('#progressText').text(`${percent}%`);
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 B';
    if (bytes < 1024) return `${bytes.toFixed(2)} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  };

  // Event Listeners
  $('#uploadZone').on('dblclick', () => $('#videoInput').click())
    .on('dragover', (e) => { e.preventDefault(); $(e.currentTarget).addClass('dragover'); })
    .on('dragleave', (e) => $(e.currentTarget).removeClass('dragover'))
    .on('drop', (e) => {
      e.preventDefault();
      $(e.currentTarget).removeClass('dragover');
      const files = e.originalEvent.dataTransfer.files;
      if (files.length) handleVideoUpload(files[0]);
    });

  $('#videoInput').on('change', (e) => {
    const file = e.target.files[0];
    if (file) handleVideoUpload(file);
  });

  $(document).on('click', '#btnSelect', () => !isOptimizing && $('#videoInput').click());
  
  $(document).on('click', '#btnDelete', () => {
    if (isOptimizing) return Notificacion('No puedes eliminar mientras se optimiza', 'warning', 2000);
    if (confirm('¿Estás seguro de eliminar este video?')) {
      resetOptimizer();
      Notificacion('Video eliminado', 'success', 2000);
    }
  });

  $(document).on('input', '#qualityInput, #resolutionSelect, #codecSelect', () => {
    if (videoAnalysis) updateOptimizationPreview();
  });

  $(document).on('click', '#btnOptimize', optimizeVideo);
};

export const cleanup = () => {
  console.log('🧹 Optimizar limpiado');
  $('#uploadZone, #videoInput, #btnSelect, #btnDelete, #btnOptimize, #qualityInput, #resolutionSelect, #codecSelect, #labelQuality').off();
  $('.wiTip').remove();
  const video = $('#optimizarVideo')[0];
  if (video?.src) URL.revokeObjectURL(video.src);
};
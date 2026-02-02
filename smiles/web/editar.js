import './editar.css';
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
  <div class="editar_container mwb">
    <section class="editar_main">
      <!-- LEFT COLUMN (29%) -->
      <div class="editar_left">
        <div class="video_info_section">
          <div class="video_info_header">
            <h3><i class="fas fa-cut"></i> Editar Video</h3>
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
            <h4><i class="fas fa-palette"></i> Ajustes de Color</h4>
            
            <div class="settings_grid">
              <div class="setting_input_group">
                <label><i class="fas fa-sun"></i> Brillo:</label>
                <div class="input_wrapper">
                  <input type="number" id="brightnessInput" min="0" max="200" value="100">
                  <span class="input_unit">%</span>
                </div>
              </div>

              <div class="setting_input_group">
                <label><i class="fas fa-adjust"></i> Contraste:</label>
                <div class="input_wrapper">
                  <input type="number" id="contrastInput" min="0" max="200" value="100">
                  <span class="input_unit">%</span>
                </div>
              </div>

              <div class="setting_input_group">
                <label><i class="fas fa-tint"></i> Saturación:</label>
                <div class="input_wrapper">
                  <input type="number" id="saturationInput" min="0" max="200" value="100">
                  <span class="input_unit">%</span>
                </div>
              </div>

              <div class="setting_input_group">
                <label><i class="fas fa-moon"></i> Sombra:</label>
                <div class="input_wrapper">
                  <input type="number" id="shadowInput" min="0" max="30" value="0">
                  <span class="input_unit">px</span>
                </div>
              </div>
            </div>
          </div>

          <div class="optimization_settings">
            <h4><i class="fas fa-tachometer-alt"></i> Velocidad</h4>
            
            <div class="setting_item">
              <label><i class="fas fa-forward"></i> Velocidad: <span id="speedValue">1.0</span>x</label>
              <input type="range" id="speed" min="0.25" max="2" value="1" step="0.25">
            </div>

            <div class="speed_presets">
              <button class="speed_btn" data-speed="0.5">0.5x</button>
              <button class="speed_btn" data-speed="1">1x</button>
              <button class="speed_btn" data-speed="1.5">1.5x</button>
              <button class="speed_btn" data-speed="2">2x</button>
            </div>
          </div>

          <div class="export_preview" id="exportPreview" style="display:none;">
            <div class="preview_header">
              <h4><i class="fas fa-eye"></i> <span id="previewTitle">Vista Previa</span></h4>
            </div>
            <div class="preview_info">
              <div class="preview_row">
                <span class="preview_label">Original:</span>
                <span class="preview_value" id="previewOriginal">--</span>
              </div>
              <div class="preview_arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
              <div class="preview_row">
                <span class="preview_label" id="previewLabel">Estimado:</span>
                <span class="preview_value success" id="previewEstimated">--</span>
              </div>
            </div>
          </div>

          <div class="file_info_left" id="fileInfoLeft" style="display:none;">
            <div class="file_info_header">
              <i class="fas fa-file-video"></i>
              <span>Nombre:</span>
            </div>
            <div class="file_name_display" id="fileNameDisplay" title="">video.mp4</div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN (70%) -->
      <div class="editar_right">
        <div class="video_player_wrapper">
          <div class="no_video_placeholder" id="noVideoPlaceholder">
            <i class="fas fa-video"></i>
            <h3>Carga un video para editar</h3>
            <p>Soporta MP4, MOV, WEBM, AVI y más formatos</p>
          </div>
          <div class="video_player_container" id="videoPlayerContainer" style="display:none;">
            <video id="editarVideo" controls playsinline autoplay loop></video>
          </div>
        </div>

        <div class="export_controls" id="exportControls" style="display:none;">
          <div class="controls_row">
            <div class="control_group">
              <label id="labelQuality"><i class="fas fa-star"></i> Calidad:</label>
              <select id="qualitySelect">
                <option value="high">Alta (18 CRF)</option>
                <option value="medium" selected>Media (23 CRF)</option>
                <option value="low">Baja (28 CRF)</option>
              </select>
            </div>

            <div class="control_group">
              <label><i class="fas fa-file-video"></i> Formato:</label>
              <select id="formatSelect">
                <option value="mp4" selected>MP4</option>
                <option value="mov">MOV</option>
                <option value="webm">WEBM</option>
                <option value="avi">AVI</option>
                <option value="mkv">MKV</option>
              </select>
            </div>
          </div>

          <button class="btn_export" id="btnExport">
            <i class="fas fa-download"></i>
            <span>Exportar Video</span>
          </button>

          <div class="progress_wrapper" id="progressWrapper" style="display:none;">
            <div class="progress_bar_inline">
              <div class="progress_fill_inline" id="progressFillInline"></div>
            </div>
            <span class="progress_text" id="progressText">0%</span>
          </div>
        </div>
      </div>
    </section>
  </div>
`;

export const init = () => {
  console.log(`✅ Editar de ${app} cargado`);
  let currentVideo = null, videoElement = null, isExporting = false, videoMetadata = {};

  // Tooltip para Calidad
  $('#labelQuality').on('mouseenter', function() {
    wiTip(this, 'Alta = 18 CRF (mejor calidad) | Media = 23 CRF | Baja = 28 CRF (menor tamaño)');
  }).on('mouseleave', function() {
    $('.wiTip').remove();
  });

  const estimateOutputSize = (originalSize, quality, format) => {
    const qualityFactors = { high: 1.2, medium: 1, low: 0.7 };
    const formatFactors = { mp4: 1, mov: 1.1, webm: 0.8, avi: 1.3, mkv: 1.05 };
    
    const qualityFactor = qualityFactors[quality] || 1;
    const formatFactor = formatFactors[format] || 1;
    
    return originalSize * qualityFactor * formatFactor;
  };

  const updatePreview = () => {
    if (!currentVideo) return;

    const quality = $('#qualitySelect').val();
    const format = $('#formatSelect').val();
    const originalSize = currentVideo.size;
    const estimatedSize = estimateOutputSize(originalSize, quality, format);

    $('#previewOriginal').text(formatFileSize(originalSize));
    $('#previewEstimated').text(formatFileSize(estimatedSize));
    $('#previewLabel').text('Estimado:');
    $('#previewTitle').text('Vista Previa');

    if (estimatedSize > originalSize) {
      $('#previewEstimated').removeClass('success').addClass('warning');
    } else {
      $('#previewEstimated').removeClass('warning').addClass('success');
    }

    $('#exportPreview').fadeIn();
  };

  const handleVideoUpload = (file) => {
    if (!file.type.startsWith('video/')) {
      Notificacion('Por favor selecciona un archivo de video válido', 'error', 3000);
      return;
    }
    
    currentVideo = file;
    const url = URL.createObjectURL(file);
    videoElement = $('#editarVideo')[0];
    
    videoElement.onloadedmetadata = videoElement.onerror = null;
    videoElement.src = url;

    videoElement.onloadedmetadata = () => {
      videoMetadata = {
        duration: videoElement.duration,
        width: videoElement.videoWidth,
        height: videoElement.videoHeight,
        size: file.size,
        format: file.name.split('.').pop().toUpperCase(),
        name: file.name
      };

      $('#noVideoPlaceholder').hide();
      $('#videoPlayerContainer, #exportControls, #exportPreview, #fileInfoLeft').show();
      
      $('#fileNameDisplay').text(file.name).attr('title', file.name);
      
      applyFilters();
      updatePreview();
      
      Notificacion(`✅ Video cargado: ${file.name} (${formatFileSize(file.size)})`, 'success', 3000);
    };

    videoElement.onerror = () => {
      if (currentVideo) {
        Notificacion('Error al cargar el video. Intenta con otro archivo.', 'error', 3000);
        resetEditor();
      }
    };
  };

  const applyFilters = () => {
    if (!videoElement) return;
    
    const brightness = $('#brightnessInput').val();
    const contrast = $('#contrastInput').val();
    const saturation = $('#saturationInput').val();
    const shadow = $('#shadowInput').val();
    
    let filterString = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;
    
    if (shadow > 0) {
      filterString += ` drop-shadow(0 0 ${shadow}px rgba(0, 0, 0, 0.8))`;
    }
    
    videoElement.style.filter = filterString;
  };

  const resetEditor = () => {
    if (videoElement) {
      videoElement.onloadedmetadata = videoElement.onerror = null;
      videoElement.pause();
      if (videoElement.src) URL.revokeObjectURL(videoElement.src);
      videoElement.src = '';
      videoElement.load();
      videoElement.style.filter = '';
    }
    
    $('#videoPlayerContainer, #exportControls, #exportPreview, #fileInfoLeft').hide();
    $('#noVideoPlaceholder').show();
    $('#videoInput').val('');
    $('#progressWrapper').hide();
    
    $('#brightnessInput, #contrastInput, #saturationInput').val(100);
    $('#shadowInput').val(0);
    $('#speed').val(1);
    $('#speedValue').text('1.0');
    
    currentVideo = null;
    videoElement = null;
    videoMetadata = {};
  };

  const exportVideo = async () => {
    if (!currentVideo) {
      Notificacion('No hay video para exportar', 'error', 2000);
      return;
    }

    if (isExporting) {
      Notificacion('Ya hay una exportación en progreso', 'warning', 2000);
      return;
    }

    try {
      isExporting = true;
      $('#btnExport').prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Exportando...');
      $('#progressWrapper').fadeIn();
      updateProgress(0);

      const brightness = $('#brightnessInput').val();
      const contrast = $('#contrastInput').val();
      const saturation = $('#saturationInput').val();
      const shadow = $('#shadowInput').val();
      const speed = $('#speed').val();
      const quality = $('#qualitySelect').val();
      const format = $('#formatSelect').val();

      const formData = new FormData();
      formData.append('video', currentVideo);
      formData.append('brightness', brightness);
      formData.append('contrast', contrast);
      formData.append('saturation', saturation);
      formData.append('shadow', shadow);
      formData.append('speed', speed);
      formData.append('quality', quality);
      formData.append('format', format);

      console.log('🎬 Exportando video:', { brightness, contrast, saturation, shadow, speed, quality, format });

      updateProgress(10);

      const response = await fetch(`${API}/edit`, { method: 'POST', body: formData });
      if (!response.ok) throw new Error(`Error del servidor: ${response.statusText}`);

      updateProgress(50);

      const result = await response.json();
      if (!result.success) throw new Error(result.error || 'Error desconocido');

      updateProgress(80);

      const downloadUrl = `${API}${result.downloadUrl}`;
      const downloadResponse = await fetch(downloadUrl);
      const blob = await downloadResponse.blob();

      const originalSize = currentVideo.size;
      const exportedSize = blob.size;

      updateProgress(95);

      // Update preview with REAL data
      $('#previewTitle').text('Video Convertido');
      $('#previewLabel').text('Convertido:');
      $('#previewEstimated').text(formatFileSize(exportedSize));

      if (exportedSize > originalSize) {
        $('#previewEstimated').removeClass('success').addClass('warning');
      } else {
        $('#previewEstimated').removeClass('warning').addClass('success');
      }

      const a = document.createElement('a');
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = `editado_${currentVideo.name.replace(/\.\w+$/, `.${format}`)}`;
      a.click();
      URL.revokeObjectURL(url);

      updateProgress(100);

      setTimeout(() => {
        $('#progressWrapper').fadeOut();
        $('#btnExport').prop('disabled', false).html('<i class="fas fa-download"></i> Exportar Video');
        
        const diff = ((exportedSize - originalSize) / originalSize * 100).toFixed(1);
        if (exportedSize < originalSize) {
          Notificacion(`✅ Video exportado exitosamente: ${Math.abs(diff)}% más pequeño (${formatFileSize(originalSize)} → ${formatFileSize(exportedSize)})`, 'success', 4000);
        } else {
          Notificacion(`✅ Video exportado en formato ${format.toUpperCase()}: ${formatFileSize(exportedSize)} (Original: ${formatFileSize(originalSize)})`, 'success', 4000);
        }
      }, 1000);

    } catch (error) {
      console.error('❌ Error exportando:', error);
      $('#progressWrapper').fadeOut();
      $('#btnExport').prop('disabled', false).html('<i class="fas fa-download"></i> Exportar Video');
      Notificacion(`Error al exportar: ${error.message}`, 'error', 4000);
    } finally {
      isExporting = false;
    }
  };

  const updateProgress = (percent) => {
    $('#progressFillInline').css('width', `${percent}%`);
    $('#progressText').text(`${percent}%`);
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

  $(document).on('click', '#btnSelect', () => !isExporting && $('#videoInput').click());
  
  $(document).on('click', '#btnDelete', () => {
    if (isExporting) return Notificacion('No puedes eliminar mientras se exporta', 'warning', 2000);
    if (confirm('¿Estás seguro de eliminar este video?')) {
      resetEditor();
      Notificacion('Video eliminado', 'success', 2000);
    }
  });

  $(document).on('input', '#brightnessInput, #contrastInput, #saturationInput, #shadowInput', applyFilters);

  $(document).on('input', '#speed', function() {
    const val = $(this).val();
    $('#speedValue').text(val);
    if (videoElement) videoElement.playbackRate = parseFloat(val);
  });

  $(document).on('click', '.speed_btn', function() {
    const speed = $(this).data('speed');
    $('#speed').val(speed);
    $('#speedValue').text(speed);
    if (videoElement) videoElement.playbackRate = parseFloat(speed);
  });

  $(document).on('change', '#qualitySelect, #formatSelect', () => {
    if (currentVideo) updatePreview();
  });

  $(document).on('click', '#btnExport', exportVideo);
};

export const cleanup = () => {
  console.log('🧹 Editar limpiado');
  $('#uploadZone, #videoInput, #btnSelect, #btnDelete, #btnExport, .speed_btn, #labelQuality, #qualitySelect, #formatSelect').off();
  $('.wiTip').remove();
  const video = $('#editarVideo')[0];
  if (video?.src) URL.revokeObjectURL(video.src);
};
import './editar.css';
import $ from 'jquery';
import { app, ipdev } from '../wii.js';
import { Mensaje, wiSpin } from '../widev.js';

const API = (() => {
  if (typeof window === 'undefined') return '';
  const h = window.location.hostname;
  const locales = new Set(['localhost', ipdev]);
  return locales.has(h) ? `http://${h}:3000` : window.location.origin;
})();

export const render = () => `
  <div class="editar_container mwb">
    <section class="editar_main">
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
            
            <div class="setting_item">
              <label><i class="fas fa-sun"></i> Brillo: <span id="brightnessValue">100</span>%</label>
              <input type="range" id="brightness" min="0" max="200" value="100">
            </div>

            <div class="setting_item">
              <label><i class="fas fa-adjust"></i> Contraste: <span id="contrastValue">100</span>%</label>
              <input type="range" id="contrast" min="0" max="200" value="100">
            </div>

            <div class="setting_item">
              <label><i class="fas fa-tint"></i> Saturación: <span id="saturationValue">100</span>%</label>
              <input type="range" id="saturation" min="0" max="200" value="100">
            </div>

            <div class="setting_item">
              <label><i class="fas fa-moon"></i> Sombra: <span id="shadowValue">0</span>px</label>
              <input type="range" id="shadow" min="0" max="30" value="0">
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

          <div class="optimization_settings">
            <h4><i class="fas fa-download"></i> Exportación</h4>
            
            <div class="settings_grid">
              <div class="setting_item">
                <label><i class="fas fa-star"></i> Calidad:</label>
                <select id="qualitySelect">
                  <option value="high">Alta (18 CRF)</option>
                  <option value="medium" selected>Media (23 CRF)</option>
                  <option value="low">Baja (28 CRF)</option>
                </select>
              </div>

              <div class="setting_item">
                <label><i class="fas fa-file-video"></i> Formato:</label>
                <select id="formatSelect">
                  <option value="mp4" selected>MP4</option>
                  <option value="mov">MOV</option>
                  <option value="webm">WEBM</option>
                </select>
              </div>
            </div>
          </div>

          <button class="btn_optimize" id="btnExport">
            <i class="fas fa-download"></i>
            <span>Exportar Video</span>
          </button>
        </div>
      </div>

      <div class="editar_right">
        <div class="progress_section" id="progressSection" style="display:none;">
          <div class="progress_header">
            <h4><i class="fas fa-spinner fa-spin"></i> Exportando Video...</h4>
            <span class="progress_percent" id="progressPercent">0%</span>
          </div>
          <div class="progress_bar">
            <div class="progress_fill" id="progressFill"></div>
          </div>
          <p class="progress_message" id="progressMessage">Preparando exportación...</p>
        </div>

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
  console.log(`✅ Editar de ${app} cargado`);
  let currentVideo = null, videoElement = null, isExporting = false;

  const handleVideoUpload = (file) => {
    if (!file.type.startsWith('video/')) return Mensaje('Por favor selecciona un archivo de video válido', 'error');
    
    currentVideo = file;
    const url = URL.createObjectURL(file);
    videoElement = $('#editarVideo')[0];
    
    videoElement.onloadedmetadata = videoElement.onerror = null;
    videoElement.src = url;

    videoElement.onloadedmetadata = () => {
      $('#noVideoPlaceholder').hide();
      $('#videoPlayerContainer, #videoControls').show();
      applyFilters();
      Mensaje('¡Video cargado! Comienza a editar 🎬', 'success');
    };

    videoElement.onerror = () => {
      if (currentVideo) {
        Mensaje('Error al cargar el video. Intenta con otro archivo.', 'error');
        resetEditor();
      }
    };
  };

  const applyFilters = () => {
    if (!videoElement) return;
    
    const brightness = $('#brightness').val();
    const contrast = $('#contrast').val();
    const saturation = $('#saturation').val();
    const shadow = $('#shadow').val();
    
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
    
    $('#videoPlayerContainer, #videoControls').hide();
    $('#noVideoPlaceholder').show();
    $('#videoInput').val('');
    $('#progressSection').hide();
    
    $('#brightness, #contrast, #saturation').val(100);
    $('#brightnessValue, #contrastValue, #saturationValue').text('100');
    $('#shadow').val(0);
    $('#shadowValue').text('0');
    $('#speed').val(1);
    $('#speedValue').text('1.0');
    
    currentVideo = null;
    videoElement = null;
  };

  const exportVideo = async () => {
    if (!currentVideo) return Mensaje('No hay video para exportar', 'error');
    if (isExporting) return Mensaje('Ya hay una exportación en progreso', 'warning');

    isExporting = true;
    wiSpin('#btnExport', true, 'Exportando...');
    $('#progressSection').fadeIn();
    updateProgress(0, 'Preparando exportación...');

    try {
      const brightness = $('#brightness').val();
      const contrast = $('#contrast').val();
      const saturation = $('#saturation').val();
      const shadow = $('#shadow').val();
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

      updateProgress(10, 'Subiendo video al servidor...');

      const response = await fetch(`${API}/edit`, { method: 'POST', body: formData });
      if (!response.ok) throw new Error(`Error del servidor: ${response.statusText}`);

      updateProgress(50, 'Aplicando filtros y efectos...');

      const result = await response.json();
      if (!result.success) throw new Error(result.error || 'Error desconocido');

      updateProgress(90, 'Descargando video editado...');

      const downloadUrl = `${API}${result.downloadUrl}`;
      const downloadResponse = await fetch(downloadUrl);
      const blob = await downloadResponse.blob();

      updateProgress(95, 'Finalizando...');

      const a = document.createElement('a');
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = `editado_${currentVideo.name.replace(/\.\w+$/, `.${format}`)}`;
      a.click();
      URL.revokeObjectURL(url);

      updateProgress(100, '¡Completado!');

      setTimeout(() => {
        $('#progressSection').fadeOut();
        Mensaje(`✅ Video exportado exitosamente en formato ${format.toUpperCase()}!`, 'success');
      }, 1000);

    } catch (error) {
      console.error('❌ Error exportando:', error);
      Mensaje(`Error al exportar: ${error.message}`, 'error');
      $('#progressSection').fadeOut();
    } finally {
      isExporting = false;
      wiSpin('#btnExport', false);
    }
  };

  const updateProgress = (percent, message) => {
    $('#progressPercent').text(`${percent}%`);
    $('#progressFill').css('width', `${percent}%`);
    $('#progressMessage').text(message);
  };

  $('#uploadZone').on('dblclick', () => $('#videoInput').click())
    .on('dragover', (e) => { e.preventDefault(); $(e.currentTarget).addClass('dragover'); })
    .on('dragleave', (e) => $(e.currentTarget).removeClass('dragover'))
    .on('drop', (e) => { e.preventDefault(); $(e.currentTarget).removeClass('dragover'); const files = e.originalEvent.dataTransfer.files; if (files.length) handleVideoUpload(files[0]); });

  $('#videoInput').on('change', (e) => { const file = e.target.files[0]; if (file) handleVideoUpload(file); });
  
  $(document).on('click', '#btnSelect', () => !isExporting && $('#videoInput').click());
  $(document).on('click', '#btnDelete', () => {
    if (isExporting) return Mensaje('No puedes eliminar mientras se exporta', 'warning');
    if (confirm('¿Estás seguro de eliminar este video?')) { resetEditor(); Mensaje('Video eliminado', 'success'); }
  });

  $(document).on('input', '#brightness', function() {
    $('#brightnessValue').text($(this).val());
    applyFilters();
  });

  $(document).on('input', '#contrast', function() {
    $('#contrastValue').text($(this).val());
    applyFilters();
  });

  $(document).on('input', '#saturation', function() {
    $('#saturationValue').text($(this).val());
    applyFilters();
  });

  $(document).on('input', '#shadow', function() {
    $('#shadowValue').text($(this).val());
    applyFilters();
  });

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

  $(document).on('click', '#btnExport', exportVideo);

  $(document).on('click', '#btnPlayPause', function() {
    if (!videoElement) return;
    if (videoElement.paused) { videoElement.play(); $(this).html('<i class="fas fa-pause"></i>'); }
    else { videoElement.pause(); $(this).html('<i class="fas fa-play"></i>'); }
  });

  $(document).on('click', '#btnRewind', () => { if (videoElement) videoElement.currentTime = Math.max(0, videoElement.currentTime - 10); });
  $(document).on('click', '#btnForward', () => { if (videoElement) videoElement.currentTime = Math.min(videoElement.duration, videoElement.currentTime + 10); });
  
  $(document).on('click', '#btnVolume', function() {
    if (!videoElement) return;
    videoElement.muted = !videoElement.muted;
    $(this).html(`<i class="fas fa-volume-${videoElement.muted ? 'mute' : 'up'}"></i>`);
  });

  $(document).on('click', '#btnFullscreen', () => {
    if (videoElement) {
      if (videoElement.requestFullscreen) videoElement.requestFullscreen();
      else if (videoElement.webkitRequestFullscreen) videoElement.webkitRequestFullscreen();
    }
  });
};

export const cleanup = () => {
  console.log('🧹 Editar limpiado');
  $('#uploadZone, #videoInput, #btnSelect, #btnDelete, #btnExport, .speed_btn, #btnPlayPause, #btnRewind, #btnForward, #btnVolume, #btnFullscreen').off();
  const video = $('#editarVideo')[0];
  if (video?.src) URL.revokeObjectURL(video.src);
};
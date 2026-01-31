import './editar.css';
import $ from 'jquery';
import { app } from '../wii.js';
import { Notificacion } from '../widev.js';

export const render = () => `
  <div class="editar_container mwb">
    <!-- MAIN CONTENT: 29% LEFT + 70% RIGHT -->
    <section class="editar_main">
      <!-- LEFT COLUMN: Controls (29%) -->
      <div class="editar_left">
        <!-- Upload Zone -->
        <div class="upload_zone" id="uploadZone">
          <div class="upload_icon">
            <i class="fas fa-video"></i>
          </div>
          <h3>Carga tu video</h3>
          <p>Doble clic o arrastra</p>
          <span class="upload_formats">MP4, MOV, WEBM</span>
          <input type="file" id="videoInput" accept="video/*" hidden>
        </div>

        <!-- Editing Tools (Hidden until video loaded) -->
        <div class="editing_tools" id="editingTools" style="display:none;">
          <!-- Header -->
          <div class="info_header">
            <h3><i class="fas fa-cut"></i> Editar Video</h3>
          </div>

          <!-- Action Buttons -->
          <div class="info_actions">
            <button class="btn_select" id="btnSelect">
              <i class="fas fa-folder-open"></i>
              <span>Seleccionar</span>
            </button>
            <button class="btn_delete" id="btnDelete">
              <i class="fas fa-trash-alt"></i>
              <span>Eliminar</span>
            </button>
          </div>

          <!-- Color Adjustments -->
          <div class="optimization_section">
            <h4><i class="fas fa-palette"></i> Ajustes de Color</h4>
            
            <div class="setting_item">
              <label for="brightness">
                <i class="fas fa-sun"></i> Brillo: <span id="brightnessValue">100</span>%
              </label>
              <input type="range" id="brightness" min="0" max="200" value="100">
            </div>

            <div class="setting_item">
              <label for="contrast">
                <i class="fas fa-adjust"></i> Contraste: <span id="contrastValue">100</span>%
              </label>
              <input type="range" id="contrast" min="0" max="200" value="100">
            </div>

            <div class="setting_item">
              <label for="saturation">
                <i class="fas fa-tint"></i> Saturación: <span id="saturationValue">100</span>%
              </label>
              <input type="range" id="saturation" min="0" max="200" value="100">
            </div>

            <div class="setting_item">
              <label for="shadow">
                <i class="fas fa-moon"></i> Sombra: <span id="shadowValue">0</span>px
              </label>
              <input type="range" id="shadow" min="0" max="20" value="0">
            </div>
          </div>

          <!-- Speed Control -->
          <div class="optimization_section">
            <h4><i class="fas fa-tachometer-alt"></i> Velocidad</h4>
            
            <div class="setting_item">
              <label for="speed">
                <i class="fas fa-forward"></i> Velocidad: <span id="speedValue">1.0</span>x
              </label>
              <input type="range" id="speed" min="0.25" max="2" value="1" step="0.25">
            </div>

            <div class="speed_presets">
              <button class="speed_btn" data-speed="0.5">0.5x</button>
              <button class="speed_btn" data-speed="1">1x</button>
              <button class="speed_btn" data-speed="1.5">1.5x</button>
              <button class="speed_btn" data-speed="2">2x</button>
            </div>
          </div>

          <!-- Export Button -->
          <div class="optimize_actions">
            <button class="btn_optimize" id="btnExport">
              <i class="fas fa-download"></i>
              <span>Exportar Video</span>
            </button>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN: Video Preview (70%) -->
      <div class="editar_right">
        <!-- Progress Section (Hidden initially) -->
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

        <div class="video_preview_wrapper">
          <div class="video_preview_box" id="videoPreviewBox">
            <div class="no_video_placeholder" id="noVideoPlaceholder">
              <i class="fas fa-film"></i>
              <p>Carga un video para comenzar a editar</p>
            </div>
            <video id="editarVideo" controls playsinline autoplay style="display:none;"></video>
          </div>

          <!-- Video Controls -->
          <div class="video_controls" id="videoControls" style="display:none;">
            <button class="control_btn" id="btnPlay">
              <i class="fas fa-play"></i>
            </button>
            <div class="timeline">
              <input type="range" id="timeline" min="0" max="100" value="0" step="0.1">
              <div class="time_display">
                <span id="currentTime">0:00</span> / <span id="totalTime">0:00</span>
              </div>
            </div>
            <button class="control_btn" id="btnFullscreen">
              <i class="fas fa-expand"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
`;

export const init = () => {
  console.log(`✅ Editar de ${app} cargado`);

  let currentVideo = null;
  let videoElement = null;
  let originalFilters = { brightness: 100, contrast: 100, saturation: 100 };

  // Upload zone - Double click to select
  $('#uploadZone').on('dblclick', () => {
    $('#videoInput').click();
  });

  // Drag and drop
  $('#uploadZone').on('dragover', (e) => {
    e.preventDefault();
    $(e.currentTarget).addClass('dragover');
  });

  $('#uploadZone').on('dragleave', (e) => {
    $(e.currentTarget).removeClass('dragover');
  });

  $('#uploadZone').on('drop', (e) => {
    e.preventDefault();
    $(e.currentTarget).removeClass('dragover');
    const files = e.originalEvent.dataTransfer.files;
    if (files.length > 0) {
      handleVideoUpload(files[0]);
    }
  });

  // File input change
  $('#videoInput').on('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      handleVideoUpload(file);
    }
  });

  // Select button
  $(document).on('click', '#btnSelect', () => {
    $('#videoInput').click();
  });

  // Delete button
  $(document).on('click', '#btnDelete', () => {
    if (confirm('¿Estás seguro de eliminar este video?')) {
      resetEditor();
      Notificacion('Video eliminado', 'success', 2000);
    }
  });

  // Color sliders
  $(document).on('input', '#brightness', function() {
    const val = $(this).val();
    $('#brightnessValue').text(val);
    applyFilters();
  });

  $(document).on('input', '#contrast', function() {
    const val = $(this).val();
    $('#contrastValue').text(val);
    applyFilters();
  });

  $(document).on('input', '#saturation', function() {
    const val = $(this).val();
    $('#saturationValue').text(val);
    applyFilters();
  });

  $(document).on('input', '#shadow', function() {
    const val = $(this).val();
    $('#shadowValue').text(val);
    applyFilters();
  });

  // Speed control
  $(document).on('input', '#speed', function() {
    const val = $(this).val();
    $('#speedValue').text(val);
    if (videoElement) {
      videoElement.playbackRate = parseFloat(val);
    }
  });

  $(document).on('click', '.speed_btn', function() {
    const speed = $(this).data('speed');
    $('#speed').val(speed);
    $('#speedValue').text(speed);
    if (videoElement) {
      videoElement.playbackRate = parseFloat(speed);
    }
  });

  // Play/Pause
  $(document).on('click', '#btnPlay', () => {
    if (!videoElement) return;
    
    if (videoElement.paused) {
      videoElement.play();
      $('#btnPlay i').removeClass('fa-play').addClass('fa-pause');
    } else {
      videoElement.pause();
      $('#btnPlay i').removeClass('fa-pause').addClass('fa-play');
    }
  });

  // Timeline
  $(document).on('input', '#timeline', function() {
    if (!videoElement) return;
    const time = ($(this).val() / 100) * videoElement.duration;
    videoElement.currentTime = time;
  });

  // Fullscreen
  $(document).on('click', '#btnFullscreen', () => {
    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      }
    }
  });

  // Export video
  $(document).on('click', '#btnExport', async () => {
    if (!currentVideo) {
      Notificacion('No hay video para exportar', 'error', 2000);
      return;
    }

    try {
      // Show progress
      $('#progressSection').fadeIn();
      updateProgress(0, 'Preparando exportación...');

      // Get current filter values
      const brightness = $('#brightness').val();
      const contrast = $('#contrast').val();
      const saturation = $('#saturation').val();
      const shadow = $('#shadow').val();
      const speed = $('#speed').val();

      // Create FormData
      const formData = new FormData();
      formData.append('video', currentVideo);
      formData.append('brightness', brightness);
      formData.append('contrast', contrast);
      formData.append('saturation', saturation);
      formData.append('shadow', shadow);
      formData.append('speed', speed);

      console.log('🎬 Exportando video:', { brightness, contrast, saturation, shadow, speed });

      updateProgress(10, 'Subiendo video al servidor...');

      // Send to server
      const response = await fetch('http://localhost:3000/edit', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Error del servidor: ${response.statusText}`);
      }

      updateProgress(50, 'Aplicando filtros y efectos...');

      const result = await response.json();
      console.log('✅ Respuesta del servidor:', result);

      if (!result.success) {
        throw new Error(result.error || 'Error desconocido');
      }

      updateProgress(80, 'Descargando video editado...');

      // Download the edited video
      const downloadUrl = `http://localhost:3000${result.downloadUrl}`;
      const downloadResponse = await fetch(downloadUrl);
      const blob = await downloadResponse.blob();

      updateProgress(95, 'Finalizando...');

      // Download file
      const a = document.createElement('a');
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = `editado_${currentVideo.name}`;
      a.click();
      URL.revokeObjectURL(url);

      updateProgress(100, '¡Completado!');

      setTimeout(() => {
        $('#progressSection').fadeOut();
        Notificacion('✅ Video exportado exitosamente!', 'success', 3000);
      }, 1000);
    } catch (error) {
      console.error('❌ Error exportando:', error);
      $('#progressSection').fadeOut();
      Notificacion(`Error al exportar: ${error.message}`, 'error', 4000);
    }
  });

  function updateProgress(percent, message) {
    $('#progressPercent').text(`${percent}%`);
    $('#progressFill').css('width', `${percent}%`);
    $('#progressMessage').text(message);
  }

  function handleVideoUpload(file) {
    if (!file.type.startsWith('video/')) {
      Notificacion('Por favor selecciona un archivo de video válido', 'error', 3000);
      return;
    }

    currentVideo = file;
    const url = URL.createObjectURL(file);
    videoElement = document.getElementById('editarVideo');
    
    videoElement.src = url;
    videoElement.onloadedmetadata = () => {
      $('#totalTime').text(formatDuration(videoElement.duration));
      
      // Show video and tools
      $('#noVideoPlaceholder').hide();
      $('#editarVideo').show();
      $('#uploadZone').hide();
      $('#editingTools').fadeIn();
      $('#videoControls').fadeIn();
      
      Notificacion('¡Video cargado! Comienza a editar 🎬', 'success', 2000);
    };

    // Update timeline as video plays
    videoElement.ontimeupdate = () => {
      const percent = (videoElement.currentTime / videoElement.duration) * 100;
      $('#timeline').val(percent);
      $('#currentTime').text(formatDuration(videoElement.currentTime));
    };
  }

  function applyFilters() {
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
  }

  function resetEditor() {
    if (videoElement && videoElement.src) {
      URL.revokeObjectURL(videoElement.src);
      videoElement.src = '';
    }
    
    $('#editarVideo').hide();
    $('#noVideoPlaceholder').show();
    $('#editingTools').hide();
    $('#videoControls').hide();
    $('#uploadZone').show();
    $('#videoInput').val('');
    
    // Reset all controls
    $('#brightness, #contrast, #saturation').val(100);
    $('#brightnessValue, #contrastValue, #saturationValue').text('100');
    $('#shadow').val(0);
    $('#shadowValue').text('0');
    $('#speed').val(1);
    $('#speedValue').text('1.0');
    
    currentVideo = null;
    videoElement = null;
  }

  function formatDuration(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  }
};

export const cleanup = () => {
  console.log('🧹 Editar limpiado');
  $('#uploadZone, #videoInput, .speed_btn, #btnPlay, #btnFullscreen').off();
  const video = document.getElementById('editarVideo');
  if (video && video.src) URL.revokeObjectURL(video.src);
};

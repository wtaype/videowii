import './conversor.css';
import $ from 'jquery';
import { app } from '../wii.js';
import { Notificacion } from '../widev.js';

export const render = () => `
  <div class="conversor_container mwb">
    <!-- MAIN CONTENT: 70% LEFT + 29% RIGHT -->
    <section class="conversor_main">
      <!-- LEFT COLUMN: Video Preview (70%) -->
      <div class="conversor_left">
        <!-- Video Preview -->
        <div class="video_preview_wrapper">
          <div class="video_preview_box" id="videoPreviewBox">
            <div class="no_video_placeholder" id="noVideoPlaceholder">
              <i class="fas fa-film"></i>
              <p>Carga un video para convertir</p>
            </div>
            <video id="conversorVideo" controls playsinline autoplay loop style="display:none;"></video>
          </div>
        </div>

        <!-- Progress Section (Hidden initially) -->
        <div class="progress_section" id="progressSection" style="display:none;">
          <div class="progress_header">
            <h4><i class="fas fa-spinner fa-spin"></i> Convirtiendo Video...</h4>
            <span class="progress_percent" id="progressPercent">0%</span>
          </div>
          <div class="progress_bar">
            <div class="progress_fill" id="progressFill"></div>
          </div>
          <p class="progress_message" id="progressMessage">Preparando conversión...</p>
        </div>
      </div>

      <!-- RIGHT COLUMN: Upload & Settings (29%) -->
      <div class="conversor_right">
        <!-- Upload Zone -->
        <div class="upload_zone" id="uploadZone">
          <div class="upload_icon">
            <i class="fas fa-cloud-upload-alt"></i>
          </div>
          <h3>Arrastra tu video aquí</h3>
          <p>o haz doble clic para seleccionar</p>
          <span class="upload_formats">Cualquier formato</span>
          <input type="file" id="videoInput" accept="video/*" hidden>
        </div>

        <!-- Video Info Panel (Hidden until video loaded) -->
        <div class="video_info_panel" id="videoInfoPanel" style="display:none;">
          <!-- Info Header -->
          <div class="info_header">
            <h3><i class="fas fa-exchange-alt"></i> Convertir Video</h3>
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

          <!-- Video Stats -->
          <div class="info_stats">
            <div class="stat_item">
              <div class="stat_icon"><i class="fas fa-file"></i></div>
              <div class="stat_content">
                <span class="stat_label">Tamaño:</span>
                <span class="stat_value" id="videoSize">--</span>
              </div>
            </div>
            <div class="stat_item">
              <div class="stat_icon"><i class="fas fa-film"></i></div>
              <div class="stat_content">
                <span class="stat_label">Formato:</span>
                <span class="stat_value" id="videoFormat">--</span>
              </div>
            </div>
          </div>

          <!-- Format Selection -->
          <div class="optimization_section">
            <h4><i class="fas fa-file-video"></i> Formato de Salida</h4>
            <div class="format_grid">
              <button class="format_btn active" data-format="mp4">MP4</button>
              <button class="format_btn" data-format="avi">AVI</button>
              <button class="format_btn" data-format="mov">MOV</button>
              <button class="format_btn" data-format="webm">WEBM</button>
              <button class="format_btn" data-format="mkv">MKV</button>
              <button class="format_btn" data-format="flv">FLV</button>
            </div>
          </div>

          <!-- Quality Settings -->
          <div class="optimization_section">
            <h4><i class="fas fa-sliders-h"></i> Calidad</h4>
            <div class="quality_grid">
              <button class="quality_btn" data-quality="high">
                <i class="fas fa-star"></i>
                <span>Alta</span>
              </button>
              <button class="quality_btn active" data-quality="medium">
                <i class="fas fa-star-half-alt"></i>
                <span>Media</span>
              </button>
              <button class="quality_btn" data-quality="low">
                <i class="fas fa-battery-quarter"></i>
                <span>Baja</span>
              </button>
            </div>
          </div>

          <!-- Convert Button -->
          <div class="optimize_actions">
            <button class="btn_optimize" id="btnConvert">
              <i class="fas fa-sync-alt"></i>
              <span>Convertir Video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
`;

export const init = () => {
  console.log(`✅ Conversor de ${app} cargado`);

  let currentVideo = null;
  let videoElement = null;
  let selectedFormat = 'mp4';
  let selectedQuality = 'medium';

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
      resetConverter();
      Notificacion('Video eliminado', 'success', 2000);
    }
  });

  // Format selection
  $(document).on('click', '.format_btn', function() {
    $('.format_btn').removeClass('active');
    $(this).addClass('active');
    selectedFormat = $(this).data('format');
  });

  // Quality selection
  $(document).on('click', '.quality_btn', function() {
    $('.quality_btn').removeClass('active');
    $(this).addClass('active');
    selectedQuality = $(this).data('quality');
  });

  // Convert button
  $(document).on('click', '#btnConvert', async () => {
    if (!currentVideo) {
      Notificacion('No hay video para convertir', 'error', 2000);
      return;
    }

    try {
      // Show progress
      $('#progressSection').fadeIn();
      updateProgress(0, 'Preparando conversión...');

      // Create FormData
      const formData = new FormData();
      formData.append('video', currentVideo);
      formData.append('format', selectedFormat);
      formData.append('quality', selectedQuality);

      console.log('🔄 Convirtiendo video:', { format: selectedFormat, quality: selectedQuality });

      updateProgress(10, 'Subiendo video al servidor...');

      // Send to server
      const response = await fetch('http://localhost:3000/convert-format', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Error del servidor: ${response.statusText}`);
      }

      updateProgress(50, `Convirtiendo a ${selectedFormat.toUpperCase()}...`);

      const result = await response.json();
      console.log('✅ Respuesta del servidor:', result);

      if (!result.success) {
        throw new Error(result.error || 'Error desconocido');
      }

      updateProgress(80, 'Descargando video convertido...');

      // Download the converted video
      const downloadUrl = `http://localhost:3000${result.downloadUrl}`;
      const downloadResponse = await fetch(downloadUrl);
      const blob = await downloadResponse.blob();

      updateProgress(95, 'Finalizando...');

      // Download file
      const a = document.createElement('a');
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = result.filename;
      a.click();
      URL.revokeObjectURL(url);

      updateProgress(100, '¡Completado!');

      setTimeout(() => {
        $('#progressSection').fadeOut();
        Notificacion(`✅ Video convertido a ${selectedFormat.toUpperCase()}!`, 'success', 3000);
      }, 1000);
    } catch (error) {
      console.error('❌ Error convirtiendo:', error);
      $('#progressSection').fadeOut();
      Notificacion(`Error al convertir: ${error.message}`, 'error', 4000);
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
    videoElement = document.getElementById('conversorVideo');
    
    videoElement.src = url;
    videoElement.onloadedmetadata = () => {
      // Update UI
      $('#videoSize').text(formatFileSize(file.size));
      
      // Get original format
      const ext = file.name.split('.').pop().toUpperCase();
      $('#videoFormat').text(ext);
      
      // Show video and controls
      $('#noVideoPlaceholder').hide();
      $('#conversorVideo').show();
      $('#uploadZone').hide();
      $('#videoInfoPanel').fadeIn();
      
      Notificacion('¡Video cargado! Selecciona el formato 🔄', 'success', 2000);
    };
  }

  function resetConverter() {
    if (videoElement && videoElement.src) {
      URL.revokeObjectURL(videoElement.src);
      videoElement.src = '';
    }
    
    $('#conversorVideo').hide();
    $('#noVideoPlaceholder').show();
    $('#videoInfoPanel').hide();
    $('#uploadZone').show();
    $('#videoInput').val('');
    
    // Reset selections
    $('.format_btn').removeClass('active');
    $('.format_btn[data-format="mp4"]').addClass('active');
    $('.quality_btn').removeClass('active');
    $('.quality_btn[data-quality="medium"]').addClass('active');
    
    selectedFormat = 'mp4';
    selectedQuality = 'medium';
    currentVideo = null;
    videoElement = null;
  }

  function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  }
};

export const cleanup = () => {
  console.log('🧹 Conversor limpiado');
  $('#uploadZone, #videoInput, .format_btn, .quality_btn, #btnConvert, #btnChange').off();
  const video = document.getElementById('conversorVideo');
  if (video && video.src) URL.revokeObjectURL(video.src);
};

import './optimizar.css';
import $ from 'jquery';
import { app } from '../wii.js';
import { Notificacion, wiSpin } from '../widev.js';

export const render = () => `
  <div class="optimizar_container mwb">
    <!-- MAIN CONTENT: 70% LEFT + 29% RIGHT -->
    <section class="optimizar_main">
      <!-- LEFT COLUMN: Video Preview (70%) -->
      <div class="optimizar_left">
        <!-- Video Preview -->
        <div class="video_preview_wrapper">
          <div class="video_preview_box" id="videoPreviewBox">
            <div class="no_video_placeholder" id="noVideoPlaceholder">
              <i class="fas fa-video"></i>
              <p>Carga un video para optimizar</p>
            </div>
            <video id="optimizarVideo" controls playsinline autoplay loop style="display:none;"></video>
          </div>
        </div>

        <!-- Progress Section (Hidden initially) -->
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
      </div>

      <!-- RIGHT COLUMN: Upload & Info (29%) -->
      <div class="optimizar_right">
        <!-- Upload Zone -->
        <div class="upload_zone" id="uploadZone">
          <div class="upload_icon">
            <i class="fas fa-cloud-upload-alt"></i>
          </div>
          <h3>Arrastra tu video aquí</h3>
          <p>o haz doble clic para seleccionar</p>
          <span class="upload_formats">MP4, MOV, WEBM, AVI</span>
          <input type="file" id="videoInput" accept="video/*" hidden>
        </div>

        <!-- Video Info Panel (Hidden until video loaded) -->
        <div class="video_info_panel" id="videoInfoPanel" style="display:none;">
          <!-- Info Header -->
          <div class="info_header">
            <h3><i class="fas fa-info-circle"></i> Información del Video</h3>
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

          <!-- Video Stats Grid -->
          <div class="info_stats">
            <div class="stat_item">
              <div class="stat_icon"><i class="fas fa-clock"></i></div>
              <div class="stat_content">
                <span class="stat_label">Duración:</span>
                <span class="stat_value" id="videoDuration">--</span>
              </div>
            </div>
            <div class="stat_item">
              <div class="stat_icon"><i class="fas fa-expand"></i></div>
              <div class="stat_content">
                <span class="stat_label">Resolución:</span>
                <span class="stat_value" id="videoResolution">--</span>
              </div>
            </div>
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
            <div class="stat_item">
              <div class="stat_icon"><i class="fas fa-tachometer-alt"></i></div>
              <div class="stat_content">
                <span class="stat_label">FPS:</span>
                <span class="stat_value" id="videoFps">30</span>
              </div>
            </div>
            <div class="stat_item">
              <div class="stat_icon"><i class="fas fa-compress"></i></div>
              <div class="stat_content">
                <span class="stat_label">Bitrate:</span>
                <span class="stat_value" id="videoBitrate">--</span>
              </div>
            </div>
          </div>

          <!-- Optimization Settings -->
          <div class="optimization_section">
            <h4><i class="fas fa-sliders-h"></i> Configuración</h4>
            
            <div class="setting_item">
              <label for="qualitySlider">
                <i class="fas fa-star"></i> Calidad: <span id="qualityValue">28</span> (CRF)
              </label>
              <input type="range" id="qualitySlider" min="18" max="35" value="28" step="1">
              <small>18=Máxima calidad, 35=Menor tamaño</small>
            </div>

            <div class="setting_item">
              <label for="resolutionSelect">
                <i class="fas fa-desktop"></i> Resolución:
              </label>
              <select id="resolutionSelect">
                <option value="original">Original</option>
                <option value="1080">1080p (Full HD)</option>
                <option value="720">720p (HD)</option>
                <option value="480">480p (SD)</option>
              </select>
            </div>

            <div class="setting_item">
              <label for="codecSelect">
                <i class="fas fa-cog"></i> Codec:
              </label>
              <select id="codecSelect">
                <option value="h264">H.264 (Mejor compatibilidad)</option>
                <option value="h265">H.265 (Menor tamaño)</option>
              </select>
            </div>
          </div>

          <!-- Optimize Button -->
          <div class="optimize_actions">
            <button class="btn_optimize" id="btnOptimize">
              <i class="fas fa-magic"></i>
              <span>Optimizar Video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
`;

export const init = () => {
  console.log(`✅ Optimizar de ${app} cargado`);

  let currentVideo = null;
  let videoMetadata = {};
  let isOptimizing = false;

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
    if (!isOptimizing) $('#videoInput').click();
  });

  // Delete button
  $(document).on('click', '#btnDelete', () => {
    if (isOptimizing) {
      Notificacion('No puedes eliminar mientras se optimiza', 'warning', 2000);
      return;
    }
    if (confirm('¿Estás seguro de eliminar este video?')) {
      resetOptimizer();
      Notificacion('Video eliminado', 'success', 2000);
    }
  });

  // Quality slider
  $(document).on('input', '#qualitySlider', function() {
    $('#qualityValue').text($(this).val());
  });

  // Optimize button
  $(document).on('click', '#btnOptimize', async () => {
    console.log('🎯 [Optimize] Botón optimizar clickeado');
    
    if (!currentVideo) {
      console.warn('⚠️ [Optimize] No hay video cargado');
      Notificacion('No hay video para optimizar', 'error', 2000);
      return;
    }

    if (isOptimizing) {
      console.warn('⚠️ [Optimize] Ya hay optimización en progreso');
      Notificacion('Ya hay una optimización en progreso', 'warning', 2000);
      return;
    }

    console.log('✅ [Optimize] Iniciando optimización...');
    await optimizeVideo();
  });

  async function optimizeVideo() {
    isOptimizing = true;
    wiSpin('#btnOptimize', true, 'Optimizando...');
    $('#progressSection').fadeIn();
    updateProgress(0, 'Preparando video...');

    try {
      const quality = $('#qualitySlider').val();
      const resolution = $('#resolutionSelect').val();
      const codec = $('#codecSelect').val();

      console.log('🎬 Iniciando optimización:', { quality, resolution, codec });

      // Crear FormData para enviar al servidor
      const formData = new FormData();
      formData.append('video', currentVideo);
      formData.append('quality', quality);
      formData.append('resolution', resolution);
      formData.append('codec', codec);

      updateProgress(10, 'Subiendo video al servidor...');

      // Enviar al servidor
      const response = await fetch('http://localhost:3000/optimize', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Error del servidor: ${response.statusText}`);
      }

      updateProgress(50, 'Optimizando video en el servidor...');

      const result = await response.json();
      console.log('✅ Respuesta del servidor:', result);

      if (!result.success) {
        throw new Error(result.error || 'Error desconocido');
      }

      updateProgress(90, 'Descargando video optimizado...');

      // Descargar el video optimizado
      const downloadUrl = `http://localhost:3000${result.downloadUrl}`;
      const downloadResponse = await fetch(downloadUrl);
      const blob = await downloadResponse.blob();

      // Calculate compression
      const originalSize = currentVideo.size;
      const optimizedSize = blob.size;
      const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

      updateProgress(100, 'Completado!');
      console.log(`✅ Optimización completa: ${reduction}% reducción`);

      // Download file
      const a = document.createElement('a');
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = `optimizado_${currentVideo.name}`;
      a.click();
      URL.revokeObjectURL(url);

      setTimeout(() => {
        $('#progressSection').fadeOut();
        Notificacion(`✅ Video optimizado! Reducción: ${reduction}% (${formatFileSize(originalSize)} → ${formatFileSize(optimizedSize)})`, 'success', 5000);
      }, 1000);

    } catch (error) {
      console.error('❌ Error optimizando:', error);
      Notificacion(`Error al optimizar: ${error.message}`, 'error', 4000);
      $('#progressSection').fadeOut();
    } finally {
      isOptimizing = false;
      wiSpin('#btnOptimize', false);
    }
  }

  function updateProgress(percent, message) {
    $('#progressPercent').text(`${percent}%`);
    $('#progressFill').css('width', `${percent}%`);
    $('#progressMessage').text(message);
  }

  function handleVideoUpload(file) {
    console.log('📁 [Upload] Archivo seleccionado:', file.name, file.type, formatFileSize(file.size));
    
    if (!file.type.startsWith('video/')) {
      console.warn('⚠️ [Upload] Tipo de archivo inválido:', file.type);
      Notificacion('Por favor selecciona un archivo de video válido', 'error', 3000);
      return;
    }

    currentVideo = file;
    const url = URL.createObjectURL(file);
    const video = document.getElementById('optimizarVideo');
    
    video.src = url;
    video.onloadedmetadata = () => {
      videoMetadata = {
        duration: video.duration,
        width: video.videoWidth,
        height: video.videoHeight,
        size: file.size,
        format: file.type.split('/')[1].toUpperCase(),
        name: file.name
      };

      console.log('✅ [Upload] Metadata del video:', videoMetadata);

      // Mostrar video y ocultar placeholder
      $('#noVideoPlaceholder').hide();
      $('#optimizarVideo').show();

      // Actualizar UI
      $('#videoDuration').text(formatDuration(video.duration));
      $('#videoResolution').text(`${video.videoWidth}x${video.videoHeight}`);
      $('#videoSize').text(formatFileSize(file.size));
      $('#videoFormat').text(videoMetadata.format);
      $('#videoBitrate').text(calculateBitrate(file.size, video.duration));
      
      // Mostrar panel de info y ocultar upload zone
      $('#uploadZone').hide();
      $('#videoInfoPanel').fadeIn();
      
      Notificacion('¡Video cargado exitosamente! 🎬', 'success', 2000);
    };

    video.onerror = (e) => {
      console.error('❌ [Upload] Error cargando video:', e);
      Notificacion('Error al cargar el video. Intenta con otro archivo.', 'error', 3000);
      resetOptimizer();
    };
  }

  function resetOptimizer() {
    const video = document.getElementById('optimizarVideo');
    if (video) {
      // Remove event handlers to prevent error loop
      video.onloadedmetadata = null;
      video.onerror = null;
      
      // Revoke URL and clear src
      if (video.src) {
        URL.revokeObjectURL(video.src);
        video.src = '';
        video.load(); // Reset video element
      }
    }
    
    $('#optimizarVideo').hide();
    $('#noVideoPlaceholder').show();
    $('#videoInfoPanel').hide();
    $('#uploadZone').show();
    $('#videoInput').val('');
    $('#progressSection').hide();
    
    currentVideo = null;
    videoMetadata = {};
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

  function calculateBitrate(size, duration) {
    const bitrate = (size * 8) / duration / 1000;
    return bitrate > 1000 ? (bitrate / 1000).toFixed(2) + ' Mbps' : bitrate.toFixed(0) + ' kbps';
  }
};

export const cleanup = () => {
  console.log('🧹 Optimizar limpiado');
  $('#uploadZone, #videoInput, #btnSelect, #btnDelete, #btnOptimize, #qualitySlider').off();
  const video = document.getElementById('optimizarVideo');
  if (video && video.src) URL.revokeObjectURL(video.src);
};

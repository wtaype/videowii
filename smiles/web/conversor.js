import './conversor.css';
import $ from 'jquery';
import { app } from '../wii.js';
import { Notificacion, Mensaje } from '../widev.js';

export const render = () => `
  <div class="conversor_container mwb">
    <section class="conversor_main">
      <!-- LEFT COLUMN (29%) -->
      <div class="conversor_left">
        <div class="video_info_section">
          <div class="video_info_header">
            <h3><i class="fas fa-exchange-alt"></i> Convertir Video</h3>
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
              <div class="stat_card_label">Duración:</div>
              <div class="stat_card_value" id="videoDuration">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_label">Resolución:</div>
              <div class="stat_card_value" id="videoResolution">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_label">Tamaño:</div>
              <div class="stat_card_value" id="videoSize">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_label">Formato:</div>
              <div class="stat_card_value" id="videoFormat">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_label">Bitrate:</div>
              <div class="stat_card_value" id="videoBitrate">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_label">Calidad:</div>
              <div class="stat_card_value" id="videoQuality">--</div>
            </div>
          </div>

          <div class="conversion_preview" id="conversionPreview" style="display:none;">
            <div class="preview_header">
              <h4><i class="fas fa-eye"></i> Estimación</h4>
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
                <span class="preview_label">Estimado:</span>
                <span class="preview_value success" id="previewEstimated">--</span>
              </div>
              <div class="preview_reduction">
                <i class="fas fa-chart-pie"></i>
                <span id="previewReduction">0%</span>
              </div>
            </div>
            <div class="preview_time">
              <i class="fas fa-hourglass-half"></i>
              <span id="estimatedTime">Tiempo estimado: --</span>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN (70%) -->
      <div class="conversor_right">
        <div class="video_player_wrapper">
          <div class="no_video_placeholder" id="noVideoPlaceholder">
            <i class="fas fa-video"></i>
            <h3>Carga un video para convertir</h3>
            <p>Soporta MP4, MOV, WEBM, AVI, MKV y más formatos</p>
          </div>
          <div class="video_player_container" id="videoPlayerContainer" style="display:none;">
            <video id="conversorVideo" controls playsinline autoplay loop></video>
          </div>
        </div>

        <div class="conversion_controls" id="conversionControls" style="display:none;">
          <div class="controls_row">
            <div class="control_group">
              <label><i class="fas fa-exchange-alt"></i> Convertir a:</label>
              <select id="formatSelect">
                <option value="mp4" data-desc="Universal">MP4 - Universal</option>
                <option value="webm" data-desc="Web">WEBM - Web</option>
                <option value="avi" data-desc="Clásico">AVI - Clásico</option>
                <option value="mov" data-desc="Apple">MOV - Apple</option>
                <option value="mkv" data-desc="HD">MKV - HD</option>
                <option value="flv" data-desc="Flash">FLV - Flash</option>
                <option value="ogv" data-desc="Libre">OGV - Libre</option>
                <option value="3gp" data-desc="Móvil">3GP - Móvil</option>
                <option value="m4v" data-desc="iTunes">M4V - iTunes</option>
              </select>
            </div>

            <div class="control_group">
              <label><i class="fas fa-star"></i> Calidad:</label>
              <select id="qualitySelect">
                <option value="high">Alta</option>
                <option value="medium" selected>Media</option>
                <option value="low">Baja</option>
              </select>
            </div>

            <div class="control_group">
              <label><i class="fas fa-desktop"></i> Resolución:</label>
              <select id="resolutionSelect">
                <option value="original">Original</option>
                <option value="1080">1080p (Full HD)</option>
                <option value="720">720p (HD)</option>
                <option value="480">480p (SD)</option>
                <option value="360">360p (Móvil)</option>
              </select>
            </div>
          </div>

          <div class="controls_row conversion_action">
            <button class="btn_convert" id="btnConvert">
              <i class="fas fa-sync-alt"></i>
              <span>Convertir Video</span>
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
  console.log(`✅ Conversor de ${app} cargado`);

  let currentVideo = null, videoMetadata = {}, videoAnalysis = null, selectedFormat = '', selectedQuality = 'medium', selectedResolution = 'original';

  const formatCompatibility = {
    mp4: { codecs: ['h264', 'h265', 'mpeg4'], compression: 0.9, speed: 'rápida' },
    webm: { codecs: ['vp8', 'vp9'], compression: 0.7, speed: 'media' },
    avi: { codecs: ['mpeg4', 'xvid'], compression: 1.2, speed: 'rápida' },
    mov: { codecs: ['h264', 'h265'], compression: 0.95, speed: 'rápida' },
    mkv: { codecs: ['h264', 'h265', 'vp9'], compression: 0.85, speed: 'lenta' },
    flv: { codecs: ['h264'], compression: 1.0, speed: 'rápida' },
    ogv: { codecs: ['theora'], compression: 0.8, speed: 'media' },
    '3gp': { codecs: ['h264', 'mpeg4'], compression: 0.6, speed: 'rápida' },
    m4v: { codecs: ['h264'], compression: 0.92, speed: 'rápida' }
  };

  const analyzeVideo = (file, videoElement) => {
    const duration = videoElement.duration;
    const size = file.size;
    const bitrate = (size * 8) / duration;
    const bitrateKbps = bitrate / 1000;
    const bitrateMbps = bitrateKbps / 1000;
    const format = file.name.split('.').pop().toLowerCase();
    
    const codecMap = {
      mp4: 'H.264', webm: 'VP9', avi: 'MPEG-4', mov: 'H.264', 
      mkv: 'H.264', flv: 'H.264', ogv: 'Theora', '3gp': 'H.264', m4v: 'H.264'
    };
    const codec = codecMap[format] || 'Desconocido';

    let quality = 'BAJA';
    if (bitrateMbps > 8) quality = 'MUY ALTA';
    else if (bitrateMbps > 5) quality = 'ALTA';
    else if (bitrateMbps > 2.5) quality = 'MEDIA';
    else if (bitrateMbps > 1) quality = 'BAJA';
    else quality = 'MUY BAJA';

    return {
      duration, size, bitrate: bitrateKbps, bitrateMbps, format, codec, quality,
      width: videoElement.videoWidth, height: videoElement.videoHeight
    };
  };

  const estimateOutputSize = (analysis, format, quality, resolution) => {
    const formatData = formatCompatibility[format];
    const qualityFactors = { high: 1.0, medium: 0.75, low: 0.55 };
    const resolutionFactors = { original: 1, 1080: 0.9, 720: 0.7, 480: 0.5, 360: 0.35 };
    
    const baseFactor = formatData.compression * qualityFactors[quality] * resolutionFactors[resolution];
    return analysis.size * baseFactor;
  };

  const estimateConversionTime = (fileSize, format) => {
    const speedFactors = { rápida: 1, media: 1.5, lenta: 2.5 };
    const formatData = formatCompatibility[format];
    const baseTime = (fileSize / (1024 * 1024)) * 2;
    return baseTime * speedFactors[formatData.speed];
  };

  const updateConversionPreview = () => {
    if (!videoAnalysis || !selectedFormat) return;

    const estimatedSize = estimateOutputSize(videoAnalysis, selectedFormat, selectedQuality, selectedResolution);
    const reduction = ((1 - estimatedSize / videoAnalysis.size) * 100).toFixed(1);
    const estimatedTime = estimateConversionTime(videoAnalysis.size, selectedFormat);

    $('#previewOriginal').text(formatFileSize(videoAnalysis.size));
    $('#previewEstimated').text(formatFileSize(estimatedSize));
    $('#previewReduction').text(`${reduction > 0 ? '-' : '+'}${Math.abs(reduction)}%`);
    
    const minutes = Math.floor(estimatedTime / 60);
    const seconds = Math.floor(estimatedTime % 60);
    $('#estimatedTime').text(`Tiempo estimado: ${minutes > 0 ? minutes + ' min ' : ''}${seconds} seg`);

    if (estimatedSize >= videoAnalysis.size * 0.98) {
      $('#previewEstimated').removeClass('success').addClass('warning');
      $('#previewReduction').closest('.preview_reduction').css('background', 'var(--warning)');
      Notificacion('⚠️ No recomendado: El tamaño será similar o mayor', 'warning', 3000);
    } else if (reduction > 30) {
      $('#previewEstimated').removeClass('warning').addClass('success');
      $('#previewReduction').closest('.preview_reduction').css('background', 'var(--success)');
      Notificacion(`✅ Recomendado: Reducirás ${Math.abs(reduction)}% del tamaño`, 'success', 2500);
    } else {
      $('#previewEstimated').removeClass('warning').addClass('success');
      $('#previewReduction').closest('.preview_reduction').css('background', 'var(--success)');
    }

    $('#conversionPreview').fadeIn();
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleVideoUpload = (file) => {
    if (!file.type.startsWith('video/')) {
      Notificacion('Por favor selecciona un archivo de video válido', 'error', 3000);
      return;
    }

    currentVideo = file;
    const url = URL.createObjectURL(file);
    const video = $('#conversorVideo')[0];
    
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
      $('#videoPlayerContainer, #conversionControls, #conversionPreview, #videoStatsGrid, #fileInfoLeft').show();
      
      // Update FULL file name in LEFT (with tooltip)
      $('#fileNameDisplay').text(file.name).attr('title', file.name);

      // Update stats in LEFT
      $('#videoDuration').text(formatDuration(video.duration));
      $('#videoResolution').text(`${video.videoWidth}x${video.videoHeight}`);
      $('#videoSize').text(formatFileSize(file.size));
      $('#videoFormat').text(videoMetadata.format);
      $('#videoBitrate').text(`${videoAnalysis.bitrateMbps.toFixed(2)} Mbps`);
      $('#videoQuality').text(videoAnalysis.quality);

      // Auto-select recommended format
      const recommendedFormat = getRecommendedFormat(videoAnalysis);
      selectedFormat = recommendedFormat;
      $('#formatSelect').val(recommendedFormat);

      // Disable same format
      $(`#formatSelect option[value="${videoAnalysis.format}"]`).prop('disabled', true).text(`${videoAnalysis.format.toUpperCase()} - Ya está en este formato`);

      updateConversionPreview();

      Notificacion(`✅ Video analizado: ${videoAnalysis.codec} | ${Math.round(videoAnalysis.bitrateMbps * 10) / 10} Mbps | Calidad ${videoAnalysis.quality}`, 'success', 3000);
    };

    video.onerror = () => {
      if (currentVideo) {
        Notificacion('Error al cargar el video. Intenta con otro archivo.', 'error', 3000);
        resetConverter();
      }
    };
  };

  const getRecommendedFormat = (analysis) => {
    if (['webm', 'avi', 'flv', '3gp'].includes(analysis.format)) return 'mp4';
    if (analysis.format === 'mp4') return 'webm';
    if (analysis.format === 'mov') return 'mp4';
    return 'mp4';
  };

  const resetConverter = () => {
    const video = $('#conversorVideo')[0];
    if (video) {
      video.onloadedmetadata = video.onerror = null;
      video.pause();
      if (video.src) URL.revokeObjectURL(video.src);
      video.src = '';
      video.load();
    }
    
    $('#videoPlayerContainer, #conversionControls, #conversionPreview, #videoStatsGrid, #fileInfoLeft').hide();
    $('#noVideoPlaceholder').show();
    $('#videoInput').val('');
    $('#progressWrapper').hide();
    $('#formatSelect option').prop('disabled', false).each(function() {
      const format = $(this).val();
      $(this).text(`${format.toUpperCase()} - ${$(this).data('desc')}`);
    });
    
    currentVideo = null;
    videoMetadata = {};
    videoAnalysis = null;
    selectedFormat = '';
    selectedQuality = 'medium';
    selectedResolution = 'original';
  };

  const convertVideo = async () => {
    if (!currentVideo || !selectedFormat) {
      Notificacion('Selecciona un formato de salida', 'warning', 2000);
      return;
    }

    try {
      $('#btnConvert').prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Convirtiendo...');
      $('#progressWrapper').fadeIn();
      updateProgress(0);

      const formData = new FormData();
      formData.append('video', currentVideo);
      formData.append('format', selectedFormat);
      formData.append('quality', selectedQuality);
      formData.append('resolution', selectedResolution);

      updateProgress(10);

      const response = await fetch('http://localhost:3000/convert-format', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) throw new Error(`Error del servidor: ${response.statusText}`);

      updateProgress(50);

      const result = await response.json();
      if (!result.success) throw new Error(result.error || 'Error desconocido');

      updateProgress(80);

      const downloadUrl = `http://localhost:3000${result.downloadUrl}`;
      const downloadResponse = await fetch(downloadUrl);
      const blob = await downloadResponse.blob();

      const originalSize = currentVideo.size;
      const convertedSize = blob.size;
      const reduction = ((1 - convertedSize / originalSize) * 100).toFixed(1);

      updateProgress(95);

      const a = document.createElement('a');
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = result.filename;
      a.click();
      URL.revokeObjectURL(url);

      updateProgress(100);

      setTimeout(() => {
        $('#progressWrapper').fadeOut();
        $('#btnConvert').prop('disabled', false).html('<i class="fas fa-sync-alt"></i> Convertir Video');
        
        if (convertedSize < originalSize) {
          Notificacion(`✅ Convertido a ${selectedFormat.toUpperCase()}: ${reduction}% de reducción (${formatFileSize(originalSize)} → ${formatFileSize(convertedSize)})`, 'success', 4000);
        } else {
          Notificacion(`✅ Video convertido a ${selectedFormat.toUpperCase()} (${formatFileSize(convertedSize)})`, 'success', 3000);
        }
      }, 1000);

    } catch (error) {
      console.error('❌ Error convirtiendo:', error);
      $('#progressWrapper').fadeOut();
      $('#btnConvert').prop('disabled', false).html('<i class="fas fa-sync-alt"></i> Convertir Video');
      Notificacion(`Error al convertir: ${error.message}`, 'error', 4000);
    }
  };

  const updateProgress = (percent) => {
    $('#progressFillInline').css('width', `${percent}%`);
    $('#progressText').text(`${percent}%`);
  };

  const formatFileSize = (b) => {
    if (b < 1024) return b + ' B';
    if (b < 1024 * 1024) return (b / 1024).toFixed(2) + ' KB';
    return (b / (1024 * 1024)).toFixed(2) + ' MB';
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

  $(document).on('click', '#btnSelect', () => $('#videoInput').click());
  
  $(document).on('click', '#btnDelete', () => {
    if (confirm('¿Estás seguro de eliminar este video?')) {
      resetConverter();
      Notificacion('Video eliminado', 'success', 2000);
    }
  });

  $(document).on('change', '#formatSelect', function() {
    selectedFormat = $(this).val();
    if (videoAnalysis) updateConversionPreview();
  });

  $(document).on('change', '#qualitySelect', function() {
    selectedQuality = $(this).val();
    if (videoAnalysis && selectedFormat) updateConversionPreview();
  });

  $(document).on('change', '#resolutionSelect', function() {
    selectedResolution = $(this).val();
    if (videoAnalysis && selectedFormat) updateConversionPreview();
  });

  $(document).on('click', '#btnConvert', convertVideo);
};

export const cleanup = () => {
  console.log('🧹 Conversor limpiado');
  $('#uploadZone, #videoInput, #btnSelect, #btnDelete, #btnConvert, #formatSelect, #qualitySelect, #resolutionSelect').off();
  const video = $('#conversorVideo')[0];
  if (video?.src) URL.revokeObjectURL(video.src);
};
import './extraer.css';
import $ from 'jquery';
import { app } from '../wii.js';
import { Notificacion, Mensaje } from '../widev.js';

export const render = () => `
  <div class="extraer_container mwb">
    <section class="extraer_main">
      <!-- LEFT COLUMN (29%) -->
      <div class="extraer_left">
        <div class="video_info_section">
          <div class="video_info_header">
            <h3><i class="fas fa-wand-magic-sparkles"></i> Extraer Contenido</h3>
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
              <div class="stat_card_label">FPS:</div>
              <div class="stat_card_value" id="videoFps">--</div>
            </div>
          </div>

          <div class="extraction_preview" id="extractionPreview" style="display:none;">
            <div class="preview_header">
              <h4><i class="fas fa-eye"></i> Vista Previa</h4>
            </div>
            <div class="preview_info">
              <div class="preview_icon">
                <i class="fas fa-music"></i>
              </div>
              <div class="preview_details">
                <span class="preview_type" id="previewType">Audio MP3</span>
                <span class="preview_size" id="previewSize">~2.5 MB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN (70%) -->
      <div class="extraer_right">
        <div class="video_player_wrapper">
          <div class="no_video_placeholder" id="noVideoPlaceholder">
            <i class="fas fa-video"></i>
            <h3>Carga un video para extraer contenido</h3>
            <p>Soporta MP4, MOV, WEBM, AVI, MKV y más formatos</p>
          </div>
          <div class="video_player_container" id="videoPlayerContainer" style="display:none;">
            <video id="extraerVideo" controls playsinline autoplay loop></video>
            <div class="video_timeline" id="videoTimeline" style="display:none;">
              <div class="timeline_marker" id="timelineMarker"></div>
              <div class="timeline_tooltip" id="timelineTooltip">0:00</div>
            </div>
          </div>
        </div>

        <div class="extraction_controls" id="extractionControls" style="display:none;">
          <div class="controls_row">
            <div class="control_group">
              <label><i class="fas fa-magic"></i> Extraer:</label>
              <select id="extractionTypeSelect">
                <option value="audio">🎵 Audio (MP3)</option>
                <option value="frame-manual">📸 Frame Actual</option>
                <option value="frame-auto">🖼️ 3 Frames Automáticos</option>
              </select>
            </div>

            <div class="control_group" id="qualityGroup">
              <label><i class="fas fa-star"></i> Calidad:</label>
              <select id="qualitySelect">
                <option value="320">Alta (320 kbps)</option>
                <option value="192" selected>Media (192 kbps)</option>
                <option value="128">Baja (128 kbps)</option>
                <option value="96">Muy Baja (96 kbps)</option>
              </select>
            </div>

            <div class="control_group" id="formatGroup" style="display:none;">
              <label><i class="fas fa-image"></i> Formato:</label>
              <select id="formatSelect">
                <option value="jpg" selected>JPG</option>
                <option value="png">PNG</option>
                <option value="webp">WEBP</option>
              </select>
            </div>
          </div>

          <div class="controls_row extraction_action">
            <button class="btn_extract" id="btnExtract">
              <i class="fas fa-download"></i>
              <span>Extraer Audio</span>
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
  console.log(`✅ Extraer de ${app} cargado`);

  let currentVideo = null, videoMetadata = {}, videoAnalysis = null, extractionType = 'audio';

  const analyzeVideo = (file, videoElement) => {
    const duration = videoElement.duration;
    const size = file.size;
    const bitrate = (size * 8) / duration;
    const bitrateKbps = bitrate / 1000;
    const bitrateMbps = bitrateKbps / 1000;
    const format = file.name.split('.').pop().toLowerCase();

    return {
      duration, size, bitrate: bitrateKbps, bitrateMbps, format,
      width: videoElement.videoWidth, height: videoElement.videoHeight,
      fps: 30
    };
  };

  const estimateExtraction = () => {
    if (!videoAnalysis) return;

    const type = $('#extractionTypeSelect').val();
    let preview = { icon: 'fa-music', text: 'Audio MP3', size: '~2.5 MB' };

    switch(type) {
      case 'audio':
        const quality = $('#qualitySelect').val();
        const audioBitrate = parseInt(quality);
        const audioSize = (videoAnalysis.duration * audioBitrate * 1000) / 8;
        preview = {
          icon: 'fa-music',
          text: `Audio MP3 (${quality} kbps)`,
          size: `~${formatFileSize(audioSize)}`
        };
        break;
      
      case 'frame-auto':
        const frameFormat = $('#formatSelect').val();
        const avgFrameSize = estimateFrameSize(frameFormat, 90);
        preview = {
          icon: 'fa-images',
          text: `3 Frames ${frameFormat.toUpperCase()}`,
          size: `~${formatFileSize(avgFrameSize * 3)}`
        };
        break;
      
      case 'frame-manual':
        const fmt = $('#formatSelect').val();
        const size = estimateFrameSize(fmt, 90);
        preview = {
          icon: 'fa-camera',
          text: `1 Frame ${fmt.toUpperCase()}`,
          size: `~${formatFileSize(size)}`
        };
        break;
    }

    $('.preview_icon i').attr('class', `fas ${preview.icon}`);
    $('#previewType').text(preview.text);
    $('#previewSize').text(preview.size);
    $('#extractionPreview').fadeIn();
  };

  const estimateFrameSize = (format, quality) => {
    const pixels = videoAnalysis.width * videoAnalysis.height;
    const baseSize = pixels / 10;
    const formatFactor = { jpg: 0.8, png: 2.5, webp: 0.6 }[format] || 1;
    const qualityFactor = parseInt(quality) / 100;
    return baseSize * formatFactor * qualityFactor;
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
    const video = $('#extraerVideo')[0];
    
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
      $('#videoPlayerContainer, #extractionControls, #extractionPreview, #videoStatsGrid, #fileInfoLeft, #videoTimeline').show();
      
      $('#fileNameDisplay').text(file.name).attr('title', file.name);
      $('#videoDuration').text(formatDuration(video.duration));
      $('#videoResolution').text(`${video.videoWidth}x${video.videoHeight}`);
      $('#videoSize').text(formatFileSize(file.size));
      $('#videoFormat').text(videoMetadata.format);
      $('#videoBitrate').text(`${videoAnalysis.bitrateMbps.toFixed(2)} Mbps`);
      $('#videoFps').text(`${videoAnalysis.fps} fps`);

      estimateExtraction();

      Notificacion(`✅ Video analizado: ${videoAnalysis.format.toUpperCase()} | ${formatDuration(video.duration)}`, 'success', 3000);
    };

    video.onerror = () => {
      if (currentVideo) {
        Notificacion('Error al cargar el video. Intenta con otro archivo.', 'error', 3000);
        resetExtractor();
      }
    };
  };

  const resetExtractor = () => {
    const video = $('#extraerVideo')[0];
    if (video) {
      video.onloadedmetadata = video.onerror = null;
      video.pause();
      if (video.src) URL.revokeObjectURL(video.src);
      video.src = '';
      video.load();
    }
    
    $('#videoPlayerContainer, #extractionControls, #extractionPreview, #videoStatsGrid, #fileInfoLeft, #videoTimeline').hide();
    $('#noVideoPlaceholder').show();
    $('#videoInput').val('');
    $('#progressWrapper').hide();
    
    currentVideo = null;
    videoMetadata = {};
    videoAnalysis = null;
    extractionType = 'audio';
  };

  const extractContent = async () => {
    if (!currentVideo) {
      Notificacion('No hay video para extraer', 'warning', 2000);
      return;
    }

    try {
      $('#btnExtract').prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Extrayendo...');
      $('#progressWrapper').fadeIn();
      updateProgress(0);

      const type = $('#extractionTypeSelect').val();
      const formData = new FormData();
      formData.append('video', currentVideo);
      formData.append('type', type);

      switch(type) {
        case 'audio':
          formData.append('quality', $('#qualitySelect').val());
          break;
        case 'frame-manual':
          const video = $('#extraerVideo')[0];
          formData.append('timestamp', video.currentTime);
          formData.append('format', $('#formatSelect').val());
          break;
        case 'frame-auto':
          formData.append('format', $('#formatSelect').val());
          break;
      }

      updateProgress(10);

      const response = await fetch('http://localhost:3000/extract', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) throw new Error(`Error del servidor: ${response.statusText}`);

      updateProgress(50);

      const result = await response.json();
      if (!result.success) throw new Error(result.error || 'Error desconocido');

      updateProgress(80);

      if (result.files && Array.isArray(result.files)) {
        for (const file of result.files) {
          await downloadFile(`http://localhost:3000${file.downloadUrl}`, file.filename);
        }
        updateProgress(100);
        setTimeout(() => {
          $('#progressWrapper').fadeOut();
          $('#btnExtract').prop('disabled', false).html('<i class="fas fa-download"></i> Extraer Frames');
          Notificacion(`✅ ${result.files.length} frames extraídos correctamente`, 'success', 4000);
        }, 1000);
      } else {
        const downloadUrl = `http://localhost:3000${result.downloadUrl}`;
        const downloadResponse = await fetch(downloadUrl);
        const blob = await downloadResponse.blob();

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
          $('#btnExtract').prop('disabled', false).html(`<i class="fas fa-download"></i> Extraer ${getExtractLabel(type)}`);
          Notificacion(`✅ ${getExtractLabel(type)} extraído: ${formatFileSize(blob.size)}`, 'success', 4000);
        }, 1000);
      }

    } catch (error) {
      console.error('❌ Error extrayendo:', error);
      $('#progressWrapper').fadeOut();
      $('#btnExtract').prop('disabled', false).html(`<i class="fas fa-download"></i> Extraer ${getExtractLabel(extractionType)}`);
      Notificacion(`Error al extraer: ${error.message}`, 'error', 4000);
    }
  };

  const downloadFile = async (url, filename) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const a = document.createElement('a');
    const blobUrl = URL.createObjectURL(blob);
    a.href = blobUrl;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(blobUrl);
  };

  const getExtractLabel = (type) => {
    const labels = {
      audio: 'Audio',
      'frame-auto': 'Frames',
      'frame-manual': 'Frame'
    };
    return labels[type] || 'Contenido';
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

  const updateExtractionOptions = () => {
    const type = $('#extractionTypeSelect').val();
    extractionType = type;

    if (type === 'audio') {
      $('#qualityGroup').show();
      $('#formatGroup').hide();
      $('#qualitySelect').html(`
        <option value="320">Alta (320 kbps)</option>
        <option value="192" selected>Media (192 kbps)</option>
        <option value="128">Baja (128 kbps)</option>
        <option value="96">Muy Baja (96 kbps)</option>
      `);
    } else {
      $('#qualityGroup').hide();
      $('#formatGroup').show();
    }

    const labels = {
      audio: 'Audio',
      'frame-auto': 'Frames',
      'frame-manual': 'Frame'
    };

    $('#btnExtract span').text(`Extraer ${labels[type]}`);
    if (videoAnalysis) estimateExtraction();
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
      resetExtractor();
      Notificacion('Video eliminado', 'success', 2000);
    }
  });

  $(document).on('change', '#extractionTypeSelect', updateExtractionOptions);

  $(document).on('change', '#qualitySelect, #formatSelect', () => {
    if (videoAnalysis) estimateExtraction();
  });

  $(document).on('click', '#btnExtract', extractContent);

  // Video timeline interaction with tooltip
  $('#extraerVideo').on('timeupdate', function() {
    const percent = (this.currentTime / this.duration) * 100;
    $('#timelineMarker').css('left', `${percent}%`);
  });

  $('#videoTimeline').on('mousemove', function(e) {
    const video = $('#extraerVideo')[0];
    const rect = this.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const time = percent * video.duration;
    const tooltip = $('#timelineTooltip');
    
    tooltip.text(formatDuration(time))
      .css('left', `${e.clientX - rect.left}px`)
      .show();
  }).on('mouseleave', function() {
    $('#timelineTooltip').hide();
  }).on('click', function(e) {
    const video = $('#extraerVideo')[0];
    const rect = this.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    video.currentTime = percent * video.duration;
    Notificacion(`📸 Posicionado en: ${formatDuration(video.currentTime)}`, 'success', 2000);
  });
};

export const cleanup = () => {
  console.log('🧹 Extraer limpiado');
  $('#uploadZone, #videoInput, #btnSelect, #btnDelete, #btnExtract, #extractionTypeSelect').off();
  const video = $('#extraerVideo')[0];
  if (video?.src) URL.revokeObjectURL(video.src);
};
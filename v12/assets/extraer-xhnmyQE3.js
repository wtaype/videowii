import{j as e}from"./vendor-gzd0YkcT.js";import{c as O,N as d}from"./main-Dptreh-E.js";import"./main-D_3voxNA.js";const A=()=>`
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
            <div class="preview_info" id="previewInfo">
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
            </div>
          </div>
        </div>

        <div class="extraction_controls" id="extractionControls" style="display:none;">
          <div class="controls_row">
            <div class="control_group">
              <label><i class="fas fa-magic"></i> Extraer:</label>
              <select id="extractionTypeSelect">
                <option value="audio">🎵 Audio (MP3)</option>
                <option value="frame-auto">🖼️ 3 Frames Automáticos</option>
                <option value="frame-manual">📸 Frame en Momento Exacto</option>
                <option value="gif">🎞️ GIF Animado</option>
              </select>
            </div>
          </div>

          <!-- OPCIONES ESPECÍFICAS POR TIPO -->
          <div id="audioOptions" class="extraction_options">
            <div class="controls_row">
              <div class="control_group">
                <label><i class="fas fa-star"></i> Calidad:</label>
                <select id="audioQuality">
                  <option value="320">Alta (320 kbps)</option>
                  <option value="192" selected>Media (192 kbps)</option>
                  <option value="128">Baja (128 kbps)</option>
                </select>
              </div>
            </div>
          </div>

          <div id="frameAutoOptions" class="extraction_options" style="display:none;">
            <div class="info_banner">
              <i class="fas fa-info-circle"></i>
              <span>Se extraerán 3 frames de mejor calidad distribuidos uniformemente</span>
            </div>
            <div class="controls_row">
              <div class="control_group">
                <label><i class="fas fa-image"></i> Formato:</label>
                <select id="frameFormat">
                  <option value="jpg" selected>JPG</option>
                  <option value="png">PNG (Mayor calidad)</option>
                  <option value="webp">WEBP (Menor tamaño)</option>
                </select>
              </div>
              <div class="control_group">
                <label><i class="fas fa-star"></i> Calidad:</label>
                <select id="frameQuality">
                  <option value="100">Máxima (100%)</option>
                  <option value="90" selected>Alta (90%)</option>
                  <option value="80">Media (80%)</option>
                </select>
              </div>
            </div>
          </div>

          <div id="frameManualOptions" class="extraction_options" style="display:none;">
            <div class="info_banner">
              <i class="fas fa-hand-pointer"></i>
              <span>Haz clic en la línea de tiempo o pausa el video en el momento deseado</span>
            </div>
            <div class="time_selector">
              <label><i class="fas fa-clock"></i> Momento exacto:</label>
              <div class="time_input_group">
                <input type="number" id="timeMinutes" min="0" max="59" value="0" placeholder="MM">
                <span>:</span>
                <input type="number" id="timeSeconds" min="0" max="59" value="0" placeholder="SS">
                <button class="btn_capture_now" id="btnCaptureNow">
                  <i class="fas fa-camera"></i> Capturar Ahora
                </button>
              </div>
            </div>
            <div class="controls_row">
              <div class="control_group">
                <label><i class="fas fa-image"></i> Formato:</label>
                <select id="frameFormatManual">
                  <option value="jpg" selected>JPG</option>
                  <option value="png">PNG</option>
                  <option value="webp">WEBP</option>
                </select>
              </div>
              <div class="control_group">
                <label><i class="fas fa-star"></i> Calidad:</label>
                <select id="frameQualityManual">
                  <option value="100">Máxima</option>
                  <option value="90" selected>Alta</option>
                  <option value="80">Media</option>
                </select>
              </div>
            </div>
          </div>

          <div id="gifOptions" class="extraction_options" style="display:none;">
            <div class="controls_row">
              <div class="control_group">
                <label><i class="fas fa-play"></i> Inicio (segundos):</label>
                <input type="number" id="gifStart" min="0" value="0" step="0.1">
              </div>
              <div class="control_group">
                <label><i class="fas fa-hourglass-half"></i> Duración (seg):</label>
                <input type="number" id="gifDuration" min="1" max="10" value="3" step="0.5">
              </div>
            </div>
            <div class="controls_row">
              <div class="control_group">
                <label><i class="fas fa-desktop"></i> Tamaño:</label>
                <select id="gifSize">
                  <option value="480">480p</option>
                  <option value="360" selected>360p</option>
                  <option value="240">240p</option>
                </select>
              </div>
              <div class="control_group">
                <label><i class="fas fa-tachometer-alt"></i> FPS:</label>
                <select id="gifFps">
                  <option value="15" selected>15 fps</option>
                  <option value="10">10 fps</option>
                  <option value="24">24 fps</option>
                </select>
              </div>
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
`,V=()=>{console.log(`✅ Extraer de ${O} cargado`);let c=null,m={},n=null,b="audio";const $=(a,t)=>{const i=t.duration,o=a.size,r=o*8/i/1e3,l=r/1e3,v=a.name.split(".").pop().toLowerCase();return{duration:i,size:o,bitrate:r,bitrateMbps:l,format:v,width:t.videoWidth,height:t.videoHeight,fps:30}},_=()=>{if(!n)return;const a=e("#extractionTypeSelect").val();let t={icon:"fa-music",text:"Audio MP3",size:"~2.5 MB"};switch(a){case"audio":const i=e("#audioQuality").val(),o=parseInt(i),s=n.duration*o*1e3/8;t={icon:"fa-music",text:`Audio MP3 (${i} kbps)`,size:`~${u(s)}`};break;case"frame-auto":const r=e("#frameFormat").val(),l=e("#frameQuality").val(),v=h(r,l);t={icon:"fa-images",text:`3 Frames ${r.toUpperCase()} (${l}%)`,size:`~${u(v*3)}`};break;case"frame-manual":const f=e("#frameFormatManual").val(),F=e("#frameQualityManual").val(),I=h(f,F);t={icon:"fa-camera",text:`1 Frame ${f.toUpperCase()} (${F}%)`,size:`~${u(I)}`};break;case"gif":const P=parseFloat(e("#gifDuration").val()),S=parseInt(e("#gifFps").val()),E=parseInt(e("#gifSize").val()),U=k(P,S,E);t={icon:"fa-film",text:`GIF ${E}p (${S} fps)`,size:`~${u(U)}`};break}e(".preview_icon i").attr("class",`fas ${t.icon}`),e("#previewType").text(t.text),e("#previewSize").text(t.size),e("#extractionPreview").fadeIn()},h=(a,t)=>{const o=n.width*n.height/10,s={jpg:.8,png:2.5,webp:.6}[a]||1,r=parseInt(t)/100;return o*s*r},k=(a,t,i)=>{const o=a*t,s=i*i*(16/9);return o*(s/8)*.3},x=a=>{const t=Math.floor(a/60),i=Math.floor(a%60);return`${t}:${i.toString().padStart(2,"0")}`},y=a=>{if(!a.type.startsWith("video/")){d("Por favor selecciona un archivo de video válido","error",3e3);return}c=a;const t=URL.createObjectURL(a),i=e("#extraerVideo")[0];i.onloadedmetadata=i.onerror=null,i.src=t,i.onloadedmetadata=()=>{m={duration:i.duration,width:i.videoWidth,height:i.videoHeight,size:a.size,format:a.name.split(".").pop().toUpperCase(),name:a.name},n=$(a,i),e("#noVideoPlaceholder").hide(),e("#videoPlayerContainer, #extractionControls, #extractionPreview, #videoStatsGrid, #fileInfoLeft, #videoTimeline").show(),e("#fileNameDisplay").text(a.name).attr("title",a.name),e("#videoDuration").text(x(i.duration)),e("#videoResolution").text(`${i.videoWidth}x${i.videoHeight}`),e("#videoSize").text(u(a.size)),e("#videoFormat").text(m.format),e("#videoBitrate").text(`${n.bitrateMbps.toFixed(2)} Mbps`),e("#videoFps").text(`${n.fps} fps`),e("#gifStart").attr("max",Math.floor(i.duration)),e("#gifDuration").attr("max",Math.min(10,Math.floor(i.duration))),_(),d(`✅ Video analizado: ${n.format.toUpperCase()} | ${x(i.duration)}`,"success",3e3)},i.onerror=()=>{c&&(d("Error al cargar el video. Intenta con otro archivo.","error",3e3),w())}},w=()=>{const a=e("#extraerVideo")[0];a&&(a.onloadedmetadata=a.onerror=null,a.pause(),a.src&&URL.revokeObjectURL(a.src),a.src="",a.load()),e("#videoPlayerContainer, #extractionControls, #extractionPreview, #videoStatsGrid, #fileInfoLeft, #videoTimeline").hide(),e("#noVideoPlaceholder").show(),e("#videoInput").val(""),e("#progressWrapper").hide(),c=null,m={},n=null,b="audio"},z=async()=>{if(!c){d("No hay video para extraer","warning",2e3);return}try{e("#btnExtract").prop("disabled",!0).html('<i class="fas fa-spinner fa-spin"></i> Extrayendo...'),e("#progressWrapper").fadeIn(),p(0);const a=e("#extractionTypeSelect").val(),t=new FormData;switch(t.append("video",c),t.append("type",a),a){case"audio":t.append("quality",e("#audioQuality").val());break;case"frame-auto":t.append("format",e("#frameFormat").val()),t.append("quality",e("#frameQuality").val());break;case"frame-manual":const s=parseInt(e("#timeMinutes").val())||0,r=parseInt(e("#timeSeconds").val())||0,l=s*60+r;t.append("timestamp",l),t.append("format",e("#frameFormatManual").val()),t.append("quality",e("#frameQualityManual").val());break;case"gif":t.append("start",e("#gifStart").val()),t.append("duration",e("#gifDuration").val()),t.append("size",e("#gifSize").val()),t.append("fps",e("#gifFps").val());break}p(10);const i=await fetch("http://localhost:3000/extract",{method:"POST",body:t});if(!i.ok)throw new Error(`Error del servidor: ${i.statusText}`);p(50);const o=await i.json();if(!o.success)throw new Error(o.error||"Error desconocido");if(p(80),o.files&&Array.isArray(o.files)){for(const s of o.files)await T(`http://localhost:3000${s.downloadUrl}`,s.filename);p(100),setTimeout(()=>{e("#progressWrapper").fadeOut(),e("#btnExtract").prop("disabled",!1).html('<i class="fas fa-download"></i> Extraer Frames'),d(`✅ ${o.files.length} frames extraídos correctamente`,"success",4e3)},1e3)}else{const s=`http://localhost:3000${o.downloadUrl}`,l=await(await fetch(s)).blob();p(95);const v=document.createElement("a"),f=URL.createObjectURL(l);v.href=f,v.download=o.filename,v.click(),URL.revokeObjectURL(f),p(100),setTimeout(()=>{e("#progressWrapper").fadeOut(),e("#btnExtract").prop("disabled",!1).html(`<i class="fas fa-download"></i> Extraer ${g(a)}`),d(`✅ ${g(a)} extraído: ${u(l.size)}`,"success",4e3)},1e3)}}catch(a){console.error("❌ Error extrayendo:",a),e("#progressWrapper").fadeOut(),e("#btnExtract").prop("disabled",!1).html(`<i class="fas fa-download"></i> Extraer ${g(b)}`),d(`Error al extraer: ${a.message}`,"error",4e3)}},T=async(a,t)=>{const o=await(await fetch(a)).blob(),s=document.createElement("a"),r=URL.createObjectURL(o);s.href=r,s.download=t,s.click(),URL.revokeObjectURL(r)},g=a=>({audio:"Audio","frame-auto":"Frames","frame-manual":"Frame",gif:"GIF"})[a]||"Contenido",p=a=>{e("#progressFillInline").css("width",`${a}%`),e("#progressText").text(`${a}%`)},u=a=>a<1024?a+" B":a<1024*1024?(a/1024).toFixed(2)+" KB":(a/(1024*1024)).toFixed(2)+" MB",C=()=>{const a=e("#extractionTypeSelect").val();b=a,e(".extraction_options").hide(),e(`#${a.replace("-","")}Options`).show();const t={audio:"Audio","frame-auto":"Frames","frame-manual":"Frame",gif:"GIF"};e("#btnExtract span").text(`Extraer ${t[a]}`),_()},M=()=>{const a=e("#extraerVideo")[0];e("#timeMinutes").val(Math.floor(a.currentTime/60)),e("#timeSeconds").val(Math.floor(a.currentTime%60)),d(`📸 Momento capturado: ${x(a.currentTime)}`,"success",2e3)};e("#uploadZone").on("dblclick",()=>e("#videoInput").click()).on("dragover",a=>{a.preventDefault(),e(a.currentTarget).addClass("dragover")}).on("dragleave",a=>e(a.currentTarget).removeClass("dragover")).on("drop",a=>{a.preventDefault(),e(a.currentTarget).removeClass("dragover");const t=a.originalEvent.dataTransfer.files;t.length&&y(t[0])}),e("#videoInput").on("change",a=>{const t=a.target.files[0];t&&y(t)}),e(document).on("click","#btnSelect",()=>e("#videoInput").click()),e(document).on("click","#btnDelete",()=>{confirm("¿Estás seguro de eliminar este video?")&&(w(),d("Video eliminado","success",2e3))}),e(document).on("change","#extractionTypeSelect",C),e(document).on("change","#audioQuality, #frameFormat, #frameQuality, #frameFormatManual, #frameQualityManual, #gifDuration, #gifSize, #gifFps",()=>{n&&_()}),e(document).on("click","#btnCaptureNow",M),e(document).on("click","#btnExtract",z),e("#extraerVideo").on("timeupdate",function(){const a=this.currentTime/this.duration*100;e("#timelineMarker").css("left",`${a}%`)}),e("#videoTimeline").on("click",function(a){const t=e("#extraerVideo")[0],i=this.getBoundingClientRect(),o=(a.clientX-i.left)/i.width;t.currentTime=o*t.duration,M()})},j=()=>{console.log("🧹 Extraer limpiado"),e("#uploadZone, #videoInput, #btnSelect, #btnDelete, #btnExtract, #extractionTypeSelect, #btnCaptureNow").off();const c=e("#extraerVideo")[0];c?.src&&URL.revokeObjectURL(c.src)};export{j as cleanup,V as init,A as render};

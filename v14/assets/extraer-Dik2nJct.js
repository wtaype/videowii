import{j as t}from"./vendor-gzd0YkcT.js";import{c as $,N as l}from"./main-DITjAYME.js";import"./main-RmaTgPfO.js";const U=()=>`
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
`,P=()=>{console.log(`✅ Extraer de ${$} cargado`);let d=null,b={},n=null,x="audio";const S=(e,a)=>{const i=a.duration,o=e.size,r=o*8/i/1e3,v=r/1e3,c=e.name.split(".").pop().toLowerCase();return{duration:i,size:o,bitrate:r,bitrateMbps:v,format:c,width:a.videoWidth,height:a.videoHeight,fps:30}},h=()=>{if(!n)return;const e=t("#extractionTypeSelect").val();let a={icon:"fa-music",text:"Audio MP3",size:"~2.5 MB"};switch(e){case"audio":const i=t("#qualitySelect").val(),o=parseInt(i),s=n.duration*o*1e3/8;a={icon:"fa-music",text:`Audio MP3 (${i} kbps)`,size:`~${u(s)}`};break;case"frame-auto":const r=t("#formatSelect").val(),v=y(r,90);a={icon:"fa-images",text:`3 Frames ${r.toUpperCase()}`,size:`~${u(v*3)}`};break;case"frame-manual":const c=t("#formatSelect").val(),m=y(c,90);a={icon:"fa-camera",text:`1 Frame ${c.toUpperCase()}`,size:`~${u(m)}`};break}t(".preview_icon i").attr("class",`fas ${a.icon}`),t("#previewType").text(a.text),t("#previewSize").text(a.size),t("#extractionPreview").fadeIn()},y=(e,a)=>{const o=n.width*n.height/10,s={jpg:.8,png:2.5,webp:.6}[e]||1,r=parseInt(a)/100;return o*s*r},f=e=>{const a=Math.floor(e/60),i=Math.floor(e%60);return`${a}:${i.toString().padStart(2,"0")}`},g=e=>{if(!e.type.startsWith("video/")){l("Por favor selecciona un archivo de video válido","error",3e3);return}d=e;const a=URL.createObjectURL(e),i=t("#extraerVideo")[0];i.onloadedmetadata=i.onerror=null,i.src=a,i.onloadedmetadata=()=>{b={duration:i.duration,width:i.videoWidth,height:i.videoHeight,size:e.size,format:e.name.split(".").pop().toUpperCase(),name:e.name},n=S(e,i),t("#noVideoPlaceholder").hide(),t("#videoPlayerContainer, #extractionControls, #extractionPreview, #videoStatsGrid, #fileInfoLeft, #videoTimeline").show(),t("#fileNameDisplay").text(e.name).attr("title",e.name),t("#videoDuration").text(f(i.duration)),t("#videoResolution").text(`${i.videoWidth}x${i.videoHeight}`),t("#videoSize").text(u(e.size)),t("#videoFormat").text(b.format),t("#videoBitrate").text(`${n.bitrateMbps.toFixed(2)} Mbps`),t("#videoFps").text(`${n.fps} fps`),h(),l(`✅ Video analizado: ${n.format.toUpperCase()} | ${f(i.duration)}`,"success",3e3)},i.onerror=()=>{d&&(l("Error al cargar el video. Intenta con otro archivo.","error",3e3),w())}},w=()=>{const e=t("#extraerVideo")[0];e&&(e.onloadedmetadata=e.onerror=null,e.pause(),e.src&&URL.revokeObjectURL(e.src),e.src="",e.load()),t("#videoPlayerContainer, #extractionControls, #extractionPreview, #videoStatsGrid, #fileInfoLeft, #videoTimeline").hide(),t("#noVideoPlaceholder").show(),t("#videoInput").val(""),t("#progressWrapper").hide(),d=null,b={},n=null,x="audio"},E=async()=>{if(!d){l("No hay video para extraer","warning",2e3);return}try{t("#btnExtract").prop("disabled",!0).html('<i class="fas fa-spinner fa-spin"></i> Extrayendo...'),t("#progressWrapper").fadeIn(),p(0);const e=t("#extractionTypeSelect").val(),a=new FormData;switch(a.append("video",d),a.append("type",e),e){case"audio":a.append("quality",t("#qualitySelect").val());break;case"frame-manual":const s=t("#extraerVideo")[0];a.append("timestamp",s.currentTime),a.append("format",t("#formatSelect").val());break;case"frame-auto":a.append("format",t("#formatSelect").val());break}p(10);const i=await fetch("http://localhost:3000/extract",{method:"POST",body:a});if(!i.ok)throw new Error(`Error del servidor: ${i.statusText}`);p(50);const o=await i.json();if(!o.success)throw new Error(o.error||"Error desconocido");if(p(80),o.files&&Array.isArray(o.files)){for(const s of o.files)await k(`http://localhost:3000${s.downloadUrl}`,s.filename);p(100),setTimeout(()=>{t("#progressWrapper").fadeOut(),t("#btnExtract").prop("disabled",!1).html('<i class="fas fa-download"></i> Extraer Frames'),l(`✅ ${o.files.length} frames extraídos correctamente`,"success",4e3)},1e3)}else{const s=`http://localhost:3000${o.downloadUrl}`,v=await(await fetch(s)).blob();p(95);const c=document.createElement("a"),m=URL.createObjectURL(v);c.href=m,c.download=o.filename,c.click(),URL.revokeObjectURL(m),p(100),setTimeout(()=>{t("#progressWrapper").fadeOut(),t("#btnExtract").prop("disabled",!1).html(`<i class="fas fa-download"></i> Extraer ${_(e)}`),l(`✅ ${_(e)} extraído: ${u(v.size)}`,"success",4e3)},1e3)}}catch(e){console.error("❌ Error extrayendo:",e),t("#progressWrapper").fadeOut(),t("#btnExtract").prop("disabled",!1).html(`<i class="fas fa-download"></i> Extraer ${_(x)}`),l(`Error al extraer: ${e.message}`,"error",4e3)}},k=async(e,a)=>{const o=await(await fetch(e)).blob(),s=document.createElement("a"),r=URL.createObjectURL(o);s.href=r,s.download=a,s.click(),URL.revokeObjectURL(r)},_=e=>({audio:"Audio","frame-auto":"Frames","frame-manual":"Frame"})[e]||"Contenido",p=e=>{t("#progressFillInline").css("width",`${e}%`),t("#progressText").text(`${e}%`)},u=e=>e<1024?e+" B":e<1024*1024?(e/1024).toFixed(2)+" KB":(e/(1024*1024)).toFixed(2)+" MB",T=()=>{const e=t("#extractionTypeSelect").val();x=e,e==="audio"?(t("#qualityGroup").show(),t("#formatGroup").hide(),t("#qualitySelect").html(`
        <option value="320">Alta (320 kbps)</option>
        <option value="192" selected>Media (192 kbps)</option>
        <option value="128">Baja (128 kbps)</option>
        <option value="96">Muy Baja (96 kbps)</option>
      `)):(t("#qualityGroup").hide(),t("#formatGroup").show());const a={audio:"Audio","frame-auto":"Frames","frame-manual":"Frame"};t("#btnExtract span").text(`Extraer ${a[e]}`),n&&h()};t("#uploadZone").on("dblclick",()=>t("#videoInput").click()).on("dragover",e=>{e.preventDefault(),t(e.currentTarget).addClass("dragover")}).on("dragleave",e=>t(e.currentTarget).removeClass("dragover")).on("drop",e=>{e.preventDefault(),t(e.currentTarget).removeClass("dragover");const a=e.originalEvent.dataTransfer.files;a.length&&g(a[0])}),t("#videoInput").on("change",e=>{const a=e.target.files[0];a&&g(a)}),t(document).on("click","#btnSelect",()=>t("#videoInput").click()),t(document).on("click","#btnDelete",()=>{confirm("¿Estás seguro de eliminar este video?")&&(w(),l("Video eliminado","success",2e3))}),t(document).on("change","#extractionTypeSelect",T),t(document).on("change","#qualitySelect, #formatSelect",()=>{n&&h()}),t(document).on("click","#btnExtract",E),t("#extraerVideo").on("timeupdate",function(){const e=this.currentTime/this.duration*100;t("#timelineMarker").css("left",`${e}%`)}),t("#videoTimeline").on("mousemove",function(e){const a=t("#extraerVideo")[0],i=this.getBoundingClientRect(),s=(e.clientX-i.left)/i.width*a.duration;t("#timelineTooltip").text(f(s)).css("left",`${e.clientX-i.left}px`).show()}).on("mouseleave",function(){t("#timelineTooltip").hide()}).on("click",function(e){const a=t("#extraerVideo")[0],i=this.getBoundingClientRect(),o=(e.clientX-i.left)/i.width;a.currentTime=o*a.duration,l(`📸 Posicionado en: ${f(a.currentTime)}`,"success",2e3)})},C=()=>{console.log("🧹 Extraer limpiado"),t("#uploadZone, #videoInput, #btnSelect, #btnDelete, #btnExtract, #extractionTypeSelect").off();const d=t("#extraerVideo")[0];d?.src&&URL.revokeObjectURL(d.src)};export{C as cleanup,P as init,U as render};

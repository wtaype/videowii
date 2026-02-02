import{j as i}from"./vendor-gzd0YkcT.js";import{c as M,d as V,N as c,i as D}from"./main-DITjAYME.js";import"./main-RmaTgPfO.js";const $=(()=>{if(typeof window>"u")return"";const r=window.location.hostname;return new Set(["localhost",D]).has(r)?`http://${r}:3000`:window.location.origin})(),P=()=>`
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
`,U=()=>{console.log(`✅ Optimizar de ${M} cargado`);let r=null,b={},s=null,f=!1;i("#labelQuality").on("mouseenter",function(){V(this,"18 = Máxima calidad | 35 = Menor tamaño")}).on("mouseleave",function(){i(".wiTip").remove()});const R=(e,t)=>{const a=t.duration,l=e.size,p=l*8/a/1e3,d=p/1e3;let n="BAJA",v=30,m=!1;return d>8?(n="MUY ALTA",v=23):d>5?(n="ALTA",v=25):d>2.5?(n="MEDIA",v=28):d>1?(n="BAJA",v=30,m=!0):(n="MUY BAJA",v=32,m=!0),{duration:a,size:l,bitrate:p,bitrateMbps:d,quality:n,suggestedCRF:v,isAlreadyOptimized:m,width:t.videoWidth,height:t.videoHeight}},y=(e,t,a,l)=>{const o=E(t,a,e.width,e.height),d={original:1,1080:.9,720:.7,480:.5}[l]||1;return o*e.duration*d/8},E=(e,t,a,l)=>{const o=a*l,p=o>=1280*720,d=o>=1920*1080;let n;d?n=4e3:p?n=2500:n=1500;const v=Math.max(.3,1-(parseInt(e)-18)/17*.7),m=t==="h265"?.6:1;return n*v*m},x=()=>{if(!s)return;const e=i("#qualityInput").val(),t=i("#codecSelect").val(),a=i("#resolutionSelect").val(),l=y(s,e,t,a),o=((1-l/s.size)*100).toFixed(1);i("#previewOriginal").text(u(s.size)),i("#previewEstimated").text(u(l)),i("#previewReduction").text(`${o>0?"-":"+"}${Math.abs(o)}%`),i("#previewLabel").text("Estimado:"),i("#previewTitle").text("Vista Previa"),l>=s.size*.95?(i("#previewEstimated").removeClass("success").addClass("warning"),i("#previewReduction").closest(".preview_reduction").css("background","var(--warning)")):(i("#previewEstimated").removeClass("warning").addClass("success"),i("#previewReduction").closest(".preview_reduction").css("background","var(--success)")),i("#optimizationPreview").fadeIn()},O=e=>{if(!e.type.startsWith("video/")){c("Por favor selecciona un archivo de video válido","error",3e3);return}r=e;const t=URL.createObjectURL(e),a=i("#optimizarVideo")[0];a.onloadedmetadata=a.onerror=null,a.src=t,a.onloadedmetadata=()=>{b={duration:a.duration,width:a.videoWidth,height:a.videoHeight,size:e.size,format:e.name.split(".").pop().toUpperCase(),name:e.name},s=R(e,a),i("#noVideoPlaceholder").hide(),i("#videoPlayerContainer, #optimizationControls, #optimizationPreview, #videoStatsGrid, #fileInfoLeft").show(),i("#fileNameDisplay").text(e.name).attr("title",e.name),i("#videoDuration").text(I(a.duration)),i("#videoResolution").text(`${a.videoWidth}x${a.videoHeight}`),i("#videoSize").text(u(e.size)),i("#videoFormat").text(b.format),i("#videoBitrate").text(`${s.bitrateMbps.toFixed(2)} Mbps`),i("#videoQuality").text(s.quality),i("#qualityInput").val(s.suggestedCRF),x(),c(`✅ Video analizado: ${s.quality} | ${s.bitrateMbps.toFixed(2)} Mbps`,"success",3e3)},a.onerror=()=>{r&&(c("Error al cargar el video. Intenta con otro archivo.","error",3e3),S())}},S=()=>{const e=i("#optimizarVideo")[0];e&&(e.onloadedmetadata=e.onerror=null,e.pause(),e.src&&URL.revokeObjectURL(e.src),e.src="",e.load()),i("#videoPlayerContainer, #optimizationControls, #optimizationPreview, #videoStatsGrid, #fileInfoLeft").hide(),i("#noVideoPlaceholder").show(),i("#videoInput").val(""),i("#progressWrapper").hide(),r=null,b={},s=null,f=!1},F=async()=>{if(!r){c("No hay video para optimizar","error",2e3);return}if(f){c("Ya hay una optimización en progreso","warning",2e3);return}const e=i("#qualityInput").val(),t=i("#resolutionSelect").val(),a=i("#codecSelect").val();if(!(y(s,e,a,t)>=s.size*.98&&!window.confirm(`⚠️ ADVERTENCIA: El tamaño estimado es similar o mayor al original.

Esto puede suceder si el video ya está optimizado.

¿Deseas continuar de todos modos?`)))try{f=!0,i("#btnOptimize").prop("disabled",!0).html('<i class="fas fa-spinner fa-spin"></i> Optimizando...'),i("#progressWrapper").fadeIn(),_(0);const o=new FormData;o.append("video",r),o.append("quality",e),o.append("resolution",t),o.append("codec",a),_(10);const p=await fetch(`${$}/optimize`,{method:"POST",body:o});if(!p.ok)throw new Error(`Error del servidor: ${p.statusText}`);_(50);const d=await p.json();if(!d.success)throw new Error(d.error||"Error desconocido");_(80);const n=`${$}${d.downloadUrl}`,m=await(await fetch(n)).blob(),g=r.size,w=m.size,h=((1-w/g)*100).toFixed(1);_(95),i("#previewTitle").text("Video Convertido"),i("#previewLabel").text("Convertido:"),i("#previewEstimated").text(u(w)),i("#previewReduction").text(`${h>0?"-":"+"}${Math.abs(h)}%`),w>=g?(i("#previewEstimated").removeClass("success").addClass("warning"),i("#previewReduction").closest(".preview_reduction").css("background","var(--warning)")):(i("#previewEstimated").removeClass("warning").addClass("success"),i("#previewReduction").closest(".preview_reduction").css("background","var(--success)"));const z=document.createElement("a"),C=URL.createObjectURL(m);z.href=C,z.download=`optimizado_${r.name}`,z.click(),URL.revokeObjectURL(C),_(100),setTimeout(()=>{i("#progressWrapper").fadeOut(),i("#btnOptimize").prop("disabled",!1).html('<i class="fas fa-magic"></i> Optimizar Video'),w<g?c(`✅ Video optimizado con éxito: ${Math.abs(h)}% de reducción (${u(g)} → ${u(w)})`,"success",4e3):c(` Video procesado. El tamaño final (${u(w)}) es mayor que el original (${u(g)})`,"warning",4e3)},1e3)}catch(o){console.error("❌ Error optimizando:",o),i("#progressWrapper").fadeOut(),i("#btnOptimize").prop("disabled",!1).html('<i class="fas fa-magic"></i> Optimizar Video'),c(`Error al optimizar: ${o.message}`,"error",4e3)}finally{f=!1}},_=e=>{i("#progressFillInline").css("width",`${e}%`),i("#progressText").text(`${e}%`)},I=e=>{const t=Math.floor(e/60),a=Math.floor(e%60);return`${t}:${a.toString().padStart(2,"0")}`},u=e=>e===0?"0 B":e<1024?`${e.toFixed(2)} B`:e<1024*1024?`${(e/1024).toFixed(2)} KB`:e<1024*1024*1024?`${(e/(1024*1024)).toFixed(2)} MB`:`${(e/(1024*1024*1024)).toFixed(2)} GB`;i("#uploadZone").on("dblclick",()=>i("#videoInput").click()).on("dragover",e=>{e.preventDefault(),i(e.currentTarget).addClass("dragover")}).on("dragleave",e=>i(e.currentTarget).removeClass("dragover")).on("drop",e=>{e.preventDefault(),i(e.currentTarget).removeClass("dragover");const t=e.originalEvent.dataTransfer.files;t.length&&O(t[0])}),i("#videoInput").on("change",e=>{const t=e.target.files[0];t&&O(t)}),i(document).on("click","#btnSelect",()=>!f&&i("#videoInput").click()),i(document).on("click","#btnDelete",()=>{if(f)return c("No puedes eliminar mientras se optimiza","warning",2e3);confirm("¿Estás seguro de eliminar este video?")&&(S(),c("Video eliminado","success",2e3))}),i(document).on("input","#qualityInput, #resolutionSelect, #codecSelect",()=>{s&&x()}),i(document).on("click","#btnOptimize",F)},A=()=>{console.log("🧹 Optimizar limpiado"),i("#uploadZone, #videoInput, #btnSelect, #btnDelete, #btnOptimize, #qualityInput, #resolutionSelect, #codecSelect, #labelQuality").off(),i(".wiTip").remove();const r=i("#optimizarVideo")[0];r?.src&&URL.revokeObjectURL(r.src)};export{A as cleanup,U as init,P as render};

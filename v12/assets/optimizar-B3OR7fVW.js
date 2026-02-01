import{j as e}from"./vendor-gzd0YkcT.js";import{c as q,M as u,i as D,d as O,N as R}from"./main-Dptreh-E.js";import"./main-D_3voxNA.js";const C=(()=>{if(typeof window>"u")return"";const o=window.location.hostname;return new Set(["localhost",D]).has(o)?`http://${o}:3000`:window.location.origin})(),T=()=>`
  <div class="optimizar_container mwb">
    <section class="optimizar_main">
      <div class="optimizar_left">
        <div class="video_info_section">
          <div class="video_info_header">
            <h3><i class="fas fa-info-circle"></i> Información del Video</h3>
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
            <h4><i class="fas fa-sliders-h"></i> Configuración</h4>
            
            <div class="setting_item">
              <label><i class="fas fa-star"></i> Calidad: <span id="qualityValue">28</span> (CRF)</label>
              <input type="range" id="qualitySlider" min="18" max="35" value="28" step="1">
              <small>18=Máxima calidad, 35=Menor tamaño</small>
            </div>

            <div class="settings_grid">
              <div class="setting_item">
                <label><i class="fas fa-desktop"></i> Resolución:</label>
                <select id="resolutionSelect">
                  <option value="original">Original</option>
                  <option value="1080">1080p (Full HD)</option>
                  <option value="720">720p (HD)</option>
                  <option value="480">480p (SD)</option>
                </select>
              </div>

              <div class="setting_item">
                <label><i class="fas fa-cog"></i> Codec:</label>
                <select id="codecSelect">
                  <option value="h264">H.264 (Mejor compatibilidad)</option>
                  <option value="h265">H.265 (Menor tamaño)</option>
                </select>
              </div>
            </div>
          </div>

          <div class="video_stats_grid" id="videoStatsGrid" style="display:none;">
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-clock"></i></div>
              <div class="stat_card_content">
                <div class="stat_card_label">Duración:</div>
                <div class="stat_card_value" id="videoDuration">--</div>
              </div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-expand"></i></div>
              <div class="stat_card_content">
                <div class="stat_card_label">Resolución:</div>
                <div class="stat_card_value" id="videoResolution">--</div>
              </div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-file"></i></div>
              <div class="stat_card_content">
                <div class="stat_card_label">Tamaño:</div>
                <div class="stat_card_value" id="videoSize">--</div>
              </div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-film"></i></div>
              <div class="stat_card_content">
                <div class="stat_card_label">Formato:</div>
                <div class="stat_card_value" id="videoFormat">--</div>
              </div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-tachometer-alt"></i></div>
              <div class="stat_card_content">
                <div class="stat_card_label">Bitrate:</div>
                <div class="stat_card_value" id="videoBitrate">--</div>
              </div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-chart-line"></i></div>
              <div class="stat_card_content">
                <div class="stat_card_label">Calidad:</div>
                <div class="stat_card_value" id="videoQuality">--</div>
              </div>
            </div>
          </div>

          <div class="optimization_preview" id="optimizationPreview" style="display:none;">
            <div class="preview_header">
              <h4><i class="fas fa-eye"></i> Vista Previa</h4>
            </div>
            <div class="preview_comparison_grid">
              <div class="preview_cell">
                <span class="preview_label">Original:</span>
                <span class="preview_value" id="previewOriginal">--</span>
              </div>
              <div class="preview_cell arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
              <div class="preview_cell">
                <span class="preview_label">Estimado:</span>
                <span class="preview_value success" id="previewEstimated">--</span>
              </div>
              <div class="preview_cell reduction">
                <i class="fas fa-chart-pie"></i>
                <span id="previewReduction">0%</span>
              </div>
            </div>
          </div>

          <button class="btn_optimize" id="btnOptimize">
            <i class="fas fa-magic"></i>
            <span>Optimizar Video</span>
          </button>
        </div>
      </div>

      <div class="optimizar_right">
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
`,j=()=>{console.log(`✅ Optimizar de ${q} cargado`);let o=null,b={},f=!1,s=null;const P=async(i,t)=>{const a=t.duration,l=i.size,v=l*8/a/1e3,n=v/1e3;let d="baja",c=30,p=!1;return n>8?(d="muy alta",c=23):n>5?(d="alta",c=25):n>2.5?(d="media",c=28):n>1?(d="baja",c=30,p=!0):(d="muy baja",c=32,p=!0),{duration:a,size:l,bitrate:v,bitrateMbps:n,quality:d,suggestedCRF:c,isAlreadyOptimized:p,width:t.videoWidth,height:t.videoHeight}},z=(i,t,a)=>$(t,a,i.width,i.height)*i.duration/8,$=(i,t,a,l)=>{const r=a*l,v=r>=1280*720,n=r>=1920*1080;let d;n?d=4e3:v?d=2500:d=1500;const c=Math.max(.3,1-(parseInt(i)-18)/17*.7),p=t==="h265"?.6:1;return d*c*p},y=()=>{if(!s)return;const i=e("#qualitySlider").val(),t=e("#codecSelect").val(),a=z(s,i,t),l=((1-a/s.size)*100).toFixed(1);e("#previewOriginal").text(m(s.size)),e("#previewEstimated").text(m(a)),e("#previewReduction").text(`${l}%`),a>=s.size*.95?e("#previewEstimated").removeClass("success").addClass("warning"):e("#previewEstimated").removeClass("warning").addClass("success"),e("#optimizationPreview").fadeIn()},S=async i=>{if(!i.type.startsWith("video/"))return u("Por favor selecciona un archivo de video válido","error");o=i;const t=URL.createObjectURL(i),a=e("#optimizarVideo")[0];a.onloadedmetadata=a.onerror=null,a.src=t,a.onloadedmetadata=async()=>{b={duration:a.duration,width:a.videoWidth,height:a.videoHeight,size:i.size,format:i.type.split("/")[1].toUpperCase(),name:i.name},s=await P(i,a),e("#noVideoPlaceholder").hide(),e("#videoPlayerContainer, #videoStatsGrid, #videoControls").show(),e("#videoDuration").text(M(a.duration)),e("#videoResolution").text(`${a.videoWidth}x${a.videoHeight}`),e("#videoSize").text(m(i.size)),e("#videoFormat").text(b.format),e("#videoBitrate").text(`${s.bitrateMbps.toFixed(2)} Mbps`),e("#videoQuality").text(s.quality.toUpperCase()),e("#qualitySlider").val(s.suggestedCRF),e("#qualityValue").text(s.suggestedCRF),y(),u("¡Video analizado exitosamente! 🎬","success")},a.onerror=()=>{o&&(u("Error al cargar el video. Intenta con otro archivo.","error"),V())}},V=()=>{const i=e("#optimizarVideo")[0];i&&(i.onloadedmetadata=i.onerror=null,i.pause(),i.src&&URL.revokeObjectURL(i.src),i.src="",i.load()),e("#videoPlayerContainer, #videoStatsGrid, #videoControls, #optimizationPreview").hide(),e("#noVideoPlaceholder").show(),e("#videoInput").val(""),e("#progressSection").hide(),o=null,b={},s=null},k=async()=>{const i=e("#qualitySlider").val();if(!(z(s,i,e("#codecSelect").val())>=s.size*.98&&!window.confirm(`⚠️ ADVERTENCIA: El tamaño estimado es similar o mayor al original.

Esto puede suceder si el video ya está optimizado.

¿Deseas continuar de todos modos?`))){f=!0,O("#btnOptimize",!0,"Optimizando..."),e("#progressSection").fadeIn(),_(0,"Preparando video...");try{const a=e("#resolutionSelect").val(),l=e("#codecSelect").val(),r=new FormData;r.append("video",o),r.append("quality",i),r.append("resolution",a),r.append("codec",l),_(10,"Subiendo video al servidor...");const v=await fetch(`${C}/optimize`,{method:"POST",body:r});if(!v.ok)throw new Error(`Error del servidor: ${v.statusText}`);_(50,"Optimizando video en el servidor...");const n=await v.json();if(!n.success)throw new Error(n.error||"Error desconocido");_(90,"Descargando video optimizado...");const d=`${C}${n.downloadUrl}`,p=await(await fetch(d)).blob(),g=o.size,h=p.size,F=((1-h/g)*100).toFixed(1);_(100,"Completado!"),h>=g&&R(`Video  (${m(h)}) es mayor que el original (${m(g)}). No se recomienda usar editar videos.`,"warning");const w=document.createElement("a"),x=URL.createObjectURL(p);w.href=x,w.download=`optimizado_${o.name}`,w.click(),URL.revokeObjectURL(x),setTimeout(()=>{e("#progressSection").fadeOut(),F>0&&R(`✅ Video optimizado: ${F}% (${m(g)} → ${m(h)})`,"success")},1e3)}catch(a){console.error("❌ Error optimizando:",a),u(`Error al optimizar: ${a.message}`,"error"),e("#progressSection").fadeOut()}finally{f=!1,O("#btnOptimize",!1)}}},_=(i,t)=>{e("#progressPercent").text(`${i}%`),e("#progressFill").css("width",`${i}%`),e("#progressMessage").text(t)},M=i=>`${Math.floor(i/60)}:${Math.floor(i%60).toString().padStart(2,"0")}`,m=i=>i<1024?i+" B":i<1024*1024?(i/1024).toFixed(2)+" KB":(i/(1024*1024)).toFixed(2)+" MB";e("#uploadZone").on("dblclick",()=>e("#videoInput").click()).on("dragover",i=>{i.preventDefault(),e(i.currentTarget).addClass("dragover")}).on("dragleave",i=>e(i.currentTarget).removeClass("dragover")).on("drop",i=>{i.preventDefault(),e(i.currentTarget).removeClass("dragover");const t=i.originalEvent.dataTransfer.files;t.length&&S(t[0])}),e("#videoInput").on("change",i=>{const t=i.target.files[0];t&&S(t)}),e(document).on("click","#btnSelect",()=>!f&&e("#videoInput").click()),e(document).on("click","#btnDelete",()=>{if(f)return u("No puedes eliminar mientras se optimiza","warning");confirm("¿Estás seguro de eliminar este video?")&&(V(),u("Video eliminado","success"))}),e(document).on("input","#qualitySlider, #resolutionSelect, #codecSelect",function(){e("#qualityValue").text(e("#qualitySlider").val()),s&&y()}),e(document).on("click","#btnOptimize",async()=>{if(!o)return u("No hay video para optimizar","error");if(f)return u("Ya hay una optimización en progreso","warning");await k()}),e(document).on("click","#btnPlayPause",function(){const i=e("#optimizarVideo")[0];i.paused?(i.play(),e(this).html('<i class="fas fa-pause"></i>')):(i.pause(),e(this).html('<i class="fas fa-play"></i>'))}),e(document).on("click","#btnRewind",()=>{const i=e("#optimizarVideo")[0];i.currentTime=Math.max(0,i.currentTime-10)}),e(document).on("click","#btnForward",()=>{const i=e("#optimizarVideo")[0];i.currentTime=Math.min(i.duration,i.currentTime+10)}),e(document).on("click","#btnVolume",function(){const i=e("#optimizarVideo")[0];i.muted=!i.muted,e(this).html(`<i class="fas fa-volume-${i.muted?"mute":"up"}"></i>`)}),e(document).on("click","#btnFullscreen",()=>{const i=e("#optimizarVideo")[0];i.requestFullscreen?i.requestFullscreen():i.webkitRequestFullscreen&&i.webkitRequestFullscreen()})},B=()=>{console.log("🧹 Optimizar limpiado"),e("#uploadZone, #videoInput, #btnSelect, #btnDelete, #btnOptimize, #qualitySlider, #resolutionSelect, #codecSelect, #btnPlayPause, #btnRewind, #btnForward, #btnVolume, #btnFullscreen").off();const o=e("#optimizarVideo")[0];o?.src&&URL.revokeObjectURL(o.src)};export{B as cleanup,j as init,T as render};

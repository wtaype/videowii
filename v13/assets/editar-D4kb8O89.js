import{j as e}from"./vendor-gzd0YkcT.js";import{c as P,M as n,d as x,i as R}from"./main-BCNPImiu.js";import"./main-qqtxrb31.js";const y=(()=>{if(typeof window>"u")return"";const o=window.location.hostname;return new Set(["localhost",R]).has(o)?`http://${o}:3000`:window.location.origin})(),U=()=>`
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
`,M=()=>{console.log(`✅ Editar de ${P} cargado`);let o=null,t=null,l=!1;const h=a=>{if(!a.type.startsWith("video/"))return n("Por favor selecciona un archivo de video válido","error");o=a;const s=URL.createObjectURL(a);t=e("#editarVideo")[0],t.onloadedmetadata=t.onerror=null,t.src=s,t.onloadedmetadata=()=>{e("#noVideoPlaceholder").hide(),e("#videoPlayerContainer, #videoControls").show(),d(),n("¡Video cargado! Comienza a editar 🎬","success")},t.onerror=()=>{o&&(n("Error al cargar el video. Intenta con otro archivo.","error"),g())}},d=()=>{if(!t)return;const a=e("#brightness").val(),s=e("#contrast").val(),u=e("#saturation").val(),c=e("#shadow").val();let p=`brightness(${a}%) contrast(${s}%) saturate(${u}%)`;c>0&&(p+=` drop-shadow(0 0 ${c}px rgba(0, 0, 0, 0.8))`),t.style.filter=p},g=()=>{t&&(t.onloadedmetadata=t.onerror=null,t.pause(),t.src&&URL.revokeObjectURL(t.src),t.src="",t.load(),t.style.filter=""),e("#videoPlayerContainer, #videoControls").hide(),e("#noVideoPlaceholder").show(),e("#videoInput").val(""),e("#progressSection").hide(),e("#brightness, #contrast, #saturation").val(100),e("#brightnessValue, #contrastValue, #saturationValue").text("100"),e("#shadow").val(0),e("#shadowValue").text("0"),e("#speed").val(1),e("#speedValue").text("1.0"),o=null,t=null},V=async()=>{if(!o)return n("No hay video para exportar","error");if(l)return n("Ya hay una exportación en progreso","warning");l=!0,x("#btnExport",!0,"Exportando..."),e("#progressSection").fadeIn(),r(0,"Preparando exportación...");try{const a=e("#brightness").val(),s=e("#contrast").val(),u=e("#saturation").val(),c=e("#shadow").val(),p=e("#speed").val(),w=e("#qualitySelect").val(),v=e("#formatSelect").val(),i=new FormData;i.append("video",o),i.append("brightness",a),i.append("contrast",s),i.append("saturation",u),i.append("shadow",c),i.append("speed",p),i.append("quality",w),i.append("format",v),console.log("🎬 Exportando video:",{brightness:a,contrast:s,saturation:u,shadow:c,speed:p,quality:w,format:v}),r(10,"Subiendo video al servidor...");const f=await fetch(`${y}/edit`,{method:"POST",body:i});if(!f.ok)throw new Error(`Error del servidor: ${f.statusText}`);r(50,"Aplicando filtros y efectos...");const b=await f.json();if(!b.success)throw new Error(b.error||"Error desconocido");r(90,"Descargando video editado...");const E=`${y}${b.downloadUrl}`,k=await(await fetch(E)).blob();r(95,"Finalizando...");const m=document.createElement("a"),_=URL.createObjectURL(k);m.href=_,m.download=`editado_${o.name.replace(/\.\w+$/,`.${v}`)}`,m.click(),URL.revokeObjectURL(_),r(100,"¡Completado!"),setTimeout(()=>{e("#progressSection").fadeOut(),n(`✅ Video exportado exitosamente en formato ${v.toUpperCase()}!`,"success")},1e3)}catch(a){console.error("❌ Error exportando:",a),n(`Error al exportar: ${a.message}`,"error"),e("#progressSection").fadeOut()}finally{l=!1,x("#btnExport",!1)}},r=(a,s)=>{e("#progressPercent").text(`${a}%`),e("#progressFill").css("width",`${a}%`),e("#progressMessage").text(s)};e("#uploadZone").on("dblclick",()=>e("#videoInput").click()).on("dragover",a=>{a.preventDefault(),e(a.currentTarget).addClass("dragover")}).on("dragleave",a=>e(a.currentTarget).removeClass("dragover")).on("drop",a=>{a.preventDefault(),e(a.currentTarget).removeClass("dragover");const s=a.originalEvent.dataTransfer.files;s.length&&h(s[0])}),e("#videoInput").on("change",a=>{const s=a.target.files[0];s&&h(s)}),e(document).on("click","#btnSelect",()=>!l&&e("#videoInput").click()),e(document).on("click","#btnDelete",()=>{if(l)return n("No puedes eliminar mientras se exporta","warning");confirm("¿Estás seguro de eliminar este video?")&&(g(),n("Video eliminado","success"))}),e(document).on("input","#brightness",function(){e("#brightnessValue").text(e(this).val()),d()}),e(document).on("input","#contrast",function(){e("#contrastValue").text(e(this).val()),d()}),e(document).on("input","#saturation",function(){e("#saturationValue").text(e(this).val()),d()}),e(document).on("input","#shadow",function(){e("#shadowValue").text(e(this).val()),d()}),e(document).on("input","#speed",function(){const a=e(this).val();e("#speedValue").text(a),t&&(t.playbackRate=parseFloat(a))}),e(document).on("click",".speed_btn",function(){const a=e(this).data("speed");e("#speed").val(a),e("#speedValue").text(a),t&&(t.playbackRate=parseFloat(a))}),e(document).on("click","#btnExport",V),e(document).on("click","#btnPlayPause",function(){t&&(t.paused?(t.play(),e(this).html('<i class="fas fa-pause"></i>')):(t.pause(),e(this).html('<i class="fas fa-play"></i>')))}),e(document).on("click","#btnRewind",()=>{t&&(t.currentTime=Math.max(0,t.currentTime-10))}),e(document).on("click","#btnForward",()=>{t&&(t.currentTime=Math.min(t.duration,t.currentTime+10))}),e(document).on("click","#btnVolume",function(){t&&(t.muted=!t.muted,e(this).html(`<i class="fas fa-volume-${t.muted?"mute":"up"}"></i>`))}),e(document).on("click","#btnFullscreen",()=>{t&&(t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen&&t.webkitRequestFullscreen())})},j=()=>{console.log("🧹 Editar limpiado"),e("#uploadZone, #videoInput, #btnSelect, #btnDelete, #btnExport, .speed_btn, #btnPlayPause, #btnRewind, #btnForward, #btnVolume, #btnFullscreen").off();const o=e("#editarVideo")[0];o?.src&&URL.revokeObjectURL(o.src)};export{j as cleanup,M as init,U as render};

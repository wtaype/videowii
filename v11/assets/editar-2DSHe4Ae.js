import{j as e}from"./vendor-gzd0YkcT.js";import{c as y,N as r}from"./main-y0WQwEm4.js";import"./main-L0prqUzJ.js";const C=()=>`
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
`,P=()=>{console.log(`✅ Editar de ${y} cargado`);let o=null,a=null;e("#uploadZone").on("dblclick",()=>{e("#videoInput").click()}),e("#uploadZone").on("dragover",t=>{t.preventDefault(),e(t.currentTarget).addClass("dragover")}),e("#uploadZone").on("dragleave",t=>{e(t.currentTarget).removeClass("dragover")}),e("#uploadZone").on("drop",t=>{t.preventDefault(),e(t.currentTarget).removeClass("dragover");const s=t.originalEvent.dataTransfer.files;s.length>0&&m(s[0])}),e("#videoInput").on("change",t=>{const s=t.target.files[0];s&&m(s)}),e(document).on("click","#btnSelect",()=>{e("#videoInput").click()}),e(document).on("click","#btnDelete",()=>{confirm("¿Estás seguro de eliminar este video?")&&(g(),r("Video eliminado","success",2e3))}),e(document).on("input","#brightness",function(){const t=e(this).val();e("#brightnessValue").text(t),p()}),e(document).on("input","#contrast",function(){const t=e(this).val();e("#contrastValue").text(t),p()}),e(document).on("input","#saturation",function(){const t=e(this).val();e("#saturationValue").text(t),p()}),e(document).on("input","#shadow",function(){const t=e(this).val();e("#shadowValue").text(t),p()}),e(document).on("input","#speed",function(){const t=e(this).val();e("#speedValue").text(t),a&&(a.playbackRate=parseFloat(t))}),e(document).on("click",".speed_btn",function(){const t=e(this).data("speed");e("#speed").val(t),e("#speedValue").text(t),a&&(a.playbackRate=parseFloat(t))}),e(document).on("click","#btnPlay",()=>{a&&(a.paused?(a.play(),e("#btnPlay i").removeClass("fa-play").addClass("fa-pause")):(a.pause(),e("#btnPlay i").removeClass("fa-pause").addClass("fa-play")))}),e(document).on("input","#timeline",function(){if(!a)return;const t=e(this).val()/100*a.duration;a.currentTime=t}),e(document).on("click","#btnFullscreen",()=>{a&&a.requestFullscreen&&a.requestFullscreen()}),e(document).on("click","#btnExport",async()=>{if(!o){r("No hay video para exportar","error",2e3);return}try{e("#progressSection").fadeIn(),d(0,"Preparando exportación...");const t=e("#brightness").val(),s=e("#contrast").val(),i=e("#saturation").val(),l=e("#shadow").val(),c=e("#speed").val(),n=new FormData;n.append("video",o),n.append("brightness",t),n.append("contrast",s),n.append("saturation",i),n.append("shadow",l),n.append("speed",c),console.log("🎬 Exportando video:",{brightness:t,contrast:s,saturation:i,shadow:l,speed:c}),d(10,"Subiendo video al servidor...");const v=await fetch("http://localhost:3000/edit",{method:"POST",body:n});if(!v.ok)throw new Error(`Error del servidor: ${v.statusText}`);d(50,"Aplicando filtros y efectos...");const u=await v.json();if(console.log("✅ Respuesta del servidor:",u),!u.success)throw new Error(u.error||"Error desconocido");d(80,"Descargando video editado...");const _=`http://localhost:3000${u.downloadUrl}`,x=await(await fetch(_)).blob();d(95,"Finalizando...");const f=document.createElement("a"),h=URL.createObjectURL(x);f.href=h,f.download=`editado_${o.name}`,f.click(),URL.revokeObjectURL(h),d(100,"¡Completado!"),setTimeout(()=>{e("#progressSection").fadeOut(),r("✅ Video exportado exitosamente!","success",3e3)},1e3)}catch(t){console.error("❌ Error exportando:",t),e("#progressSection").fadeOut(),r(`Error al exportar: ${t.message}`,"error",4e3)}});function d(t,s){e("#progressPercent").text(`${t}%`),e("#progressFill").css("width",`${t}%`),e("#progressMessage").text(s)}function m(t){if(!t.type.startsWith("video/")){r("Por favor selecciona un archivo de video válido","error",3e3);return}o=t;const s=URL.createObjectURL(t);a=document.getElementById("editarVideo"),a.src=s,a.onloadedmetadata=()=>{e("#totalTime").text(b(a.duration)),e("#noVideoPlaceholder").hide(),e("#editarVideo").show(),e("#uploadZone").hide(),e("#editingTools").fadeIn(),e("#videoControls").fadeIn(),r("¡Video cargado! Comienza a editar 🎬","success",2e3)},a.ontimeupdate=()=>{const i=a.currentTime/a.duration*100;e("#timeline").val(i),e("#currentTime").text(b(a.currentTime))}}function p(){if(!a)return;const t=e("#brightness").val(),s=e("#contrast").val(),i=e("#saturation").val(),l=e("#shadow").val();let c=`brightness(${t}%) contrast(${s}%) saturate(${i}%)`;l>0&&(c+=` drop-shadow(0 0 ${l}px rgba(0, 0, 0, 0.8))`),a.style.filter=c}function g(){a&&a.src&&(URL.revokeObjectURL(a.src),a.src=""),e("#editarVideo").hide(),e("#noVideoPlaceholder").show(),e("#editingTools").hide(),e("#videoControls").hide(),e("#uploadZone").show(),e("#videoInput").val(""),e("#brightness, #contrast, #saturation").val(100),e("#brightnessValue, #contrastValue, #saturationValue").text("100"),e("#shadow").val(0),e("#shadowValue").text("0"),e("#speed").val(1),e("#speedValue").text("1.0"),o=null,a=null}function b(t){const s=Math.floor(t/60),i=Math.floor(t%60);return`${s}:${i.toString().padStart(2,"0")}`}},R=()=>{console.log("🧹 Editar limpiado"),e("#uploadZone, #videoInput, .speed_btn, #btnPlay, #btnFullscreen").off();const o=document.getElementById("editarVideo");o&&o.src&&URL.revokeObjectURL(o.src)};export{R as cleanup,P as init,C as render};

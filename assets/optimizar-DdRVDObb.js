import{j as e}from"./vendor-gzd0YkcT.js";import{c as V,N as s,e as S}from"./main-Bn64PRrk.js";import"./main-Bp20i4n9.js";import"./firebase-xYuwcABI.js";const F=()=>`
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
`,M=()=>{console.log(`✅ Optimizar de ${V} cargado`);let t=null,r={},d=!1;e("#uploadZone").on("dblclick",()=>{e("#videoInput").click()}),e("#uploadZone").on("dragover",i=>{i.preventDefault(),e(i.currentTarget).addClass("dragover")}),e("#uploadZone").on("dragleave",i=>{e(i.currentTarget).removeClass("dragover")}),e("#uploadZone").on("drop",i=>{i.preventDefault(),e(i.currentTarget).removeClass("dragover");const a=i.originalEvent.dataTransfer.files;a.length>0&&m(a[0])}),e("#videoInput").on("change",i=>{const a=i.target.files[0];a&&m(a)}),e(document).on("click","#btnSelect",()=>{d||e("#videoInput").click()}),e(document).on("click","#btnDelete",()=>{if(d){s("No puedes eliminar mientras se optimiza","warning",2e3);return}confirm("¿Estás seguro de eliminar este video?")&&(f(),s("Video eliminado","success",2e3))}),e(document).on("input","#qualitySlider",function(){e("#qualityValue").text(e(this).val())}),e(document).on("click","#btnOptimize",async()=>{if(console.log("🎯 [Optimize] Botón optimizar clickeado"),!t){console.warn("⚠️ [Optimize] No hay video cargado"),s("No hay video para optimizar","error",2e3);return}if(d){console.warn("⚠️ [Optimize] Ya hay optimización en progreso"),s("Ya hay una optimización en progreso","warning",2e3);return}console.log("✅ [Optimize] Iniciando optimización..."),await w()});async function w(){d=!0,S("#btnOptimize",!0,"Optimizando..."),e("#progressSection").fadeIn(),l(0,"Preparando video...");try{const i=e("#qualitySlider").val(),a=e("#resolutionSelect").val(),o=e("#codecSelect").val();console.log("🎬 Iniciando optimización:",{quality:i,resolution:a,codec:o});const n=new FormData;n.append("video",t),n.append("quality",i),n.append("resolution",a),n.append("codec",o),l(10,"Subiendo video al servidor...");const v=await fetch("http://localhost:3000/optimize",{method:"POST",body:n});if(!v.ok)throw new Error(`Error del servidor: ${v.statusText}`);l(50,"Optimizando video en el servidor...");const p=await v.json();if(console.log("✅ Respuesta del servidor:",p),!p.success)throw new Error(p.error||"Error desconocido");l(90,"Descargando video optimizado...");const I=`http://localhost:3000${p.downloadUrl}`,g=await(await fetch(I)).blob(),h=t.size,z=g.size,_=((1-z/h)*100).toFixed(1);l(100,"Completado!"),console.log(`✅ Optimización completa: ${_}% reducción`);const u=document.createElement("a"),b=URL.createObjectURL(g);u.href=b,u.download=`optimizado_${t.name}`,u.click(),URL.revokeObjectURL(b),setTimeout(()=>{e("#progressSection").fadeOut(),s(`✅ Video optimizado! Reducción: ${_}% (${c(h)} → ${c(z)})`,"success",5e3)},1e3)}catch(i){console.error("❌ Error optimizando:",i),s(`Error al optimizar: ${i.message}`,"error",4e3),e("#progressSection").fadeOut()}finally{d=!1,S("#btnOptimize",!1)}}function l(i,a){e("#progressPercent").text(`${i}%`),e("#progressFill").css("width",`${i}%`),e("#progressMessage").text(a)}function m(i){if(console.log("📁 [Upload] Archivo seleccionado:",i.name,i.type,c(i.size)),!i.type.startsWith("video/")){console.warn("⚠️ [Upload] Tipo de archivo inválido:",i.type),s("Por favor selecciona un archivo de video válido","error",3e3);return}t=i;const a=URL.createObjectURL(i),o=document.getElementById("optimizarVideo");o.src=a,o.onloadedmetadata=()=>{r={duration:o.duration,width:o.videoWidth,height:o.videoHeight,size:i.size,format:i.type.split("/")[1].toUpperCase(),name:i.name},console.log("✅ [Upload] Metadata del video:",r),e("#noVideoPlaceholder").hide(),e("#optimizarVideo").show(),e("#videoDuration").text(y(o.duration)),e("#videoResolution").text(`${o.videoWidth}x${o.videoHeight}`),e("#videoSize").text(c(i.size)),e("#videoFormat").text(r.format),e("#videoBitrate").text(O(i.size,o.duration)),e("#uploadZone").hide(),e("#videoInfoPanel").fadeIn(),s("¡Video cargado exitosamente! 🎬","success",2e3)},o.onerror=n=>{console.error("❌ [Upload] Error cargando video:",n),s("Error al cargar el video. Intenta con otro archivo.","error",3e3),f()}}function f(){const i=document.getElementById("optimizarVideo");i&&(i.onloadedmetadata=null,i.onerror=null,i.src&&(URL.revokeObjectURL(i.src),i.src="",i.load())),e("#optimizarVideo").hide(),e("#noVideoPlaceholder").show(),e("#videoInfoPanel").hide(),e("#uploadZone").show(),e("#videoInput").val(""),e("#progressSection").hide(),t=null,r={}}function y(i){const a=Math.floor(i/60),o=Math.floor(i%60);return`${a}:${o.toString().padStart(2,"0")}`}function c(i){return i<1024?i+" B":i<1024*1024?(i/1024).toFixed(2)+" KB":(i/(1024*1024)).toFixed(2)+" MB"}function O(i,a){const o=i*8/a/1e3;return o>1e3?(o/1e3).toFixed(2)+" Mbps":o.toFixed(0)+" kbps"}},k=()=>{console.log("🧹 Optimizar limpiado"),e("#uploadZone, #videoInput, #btnSelect, #btnDelete, #btnOptimize, #qualitySlider").off();const t=document.getElementById("optimizarVideo");t&&t.src&&URL.revokeObjectURL(t.src)};export{k as cleanup,M as init,F as render};

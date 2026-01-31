import{j as o}from"./vendor-gzd0YkcT.js";import{c as _,N as d}from"./main-DOKoElxx.js";import"./main-BDIfPUC_.js";const w=()=>`
  <div class="conversor_container mwb">
    <!-- MAIN CONTENT: 70% LEFT + 29% RIGHT -->
    <section class="conversor_main">
      <!-- LEFT COLUMN: Video Preview (70%) -->
      <div class="conversor_left">
        <!-- Video Preview -->
        <div class="video_preview_wrapper">
          <div class="video_preview_box" id="videoPreviewBox">
            <div class="no_video_placeholder" id="noVideoPlaceholder">
              <i class="fas fa-film"></i>
              <p>Carga un video para convertir</p>
            </div>
            <video id="conversorVideo" controls playsinline autoplay loop style="display:none;"></video>
          </div>
        </div>

        <!-- Progress Section (Hidden initially) -->
        <div class="progress_section" id="progressSection" style="display:none;">
          <div class="progress_header">
            <h4><i class="fas fa-spinner fa-spin"></i> Convirtiendo Video...</h4>
            <span class="progress_percent" id="progressPercent">0%</span>
          </div>
          <div class="progress_bar">
            <div class="progress_fill" id="progressFill"></div>
          </div>
          <p class="progress_message" id="progressMessage">Preparando conversión...</p>
        </div>
      </div>

      <!-- RIGHT COLUMN: Upload & Settings (29%) -->
      <div class="conversor_right">
        <!-- Upload Zone -->
        <div class="upload_zone" id="uploadZone">
          <div class="upload_icon">
            <i class="fas fa-cloud-upload-alt"></i>
          </div>
          <h3>Arrastra tu video aquí</h3>
          <p>o haz doble clic para seleccionar</p>
          <span class="upload_formats">Cualquier formato</span>
          <input type="file" id="videoInput" accept="video/*" hidden>
        </div>

        <!-- Video Info Panel (Hidden until video loaded) -->
        <div class="video_info_panel" id="videoInfoPanel" style="display:none;">
          <!-- Info Header -->
          <div class="info_header">
            <h3><i class="fas fa-exchange-alt"></i> Convertir Video</h3>
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

          <!-- Video Stats -->
          <div class="info_stats">
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
          </div>

          <!-- Format Selection -->
          <div class="optimization_section">
            <h4><i class="fas fa-file-video"></i> Formato de Salida</h4>
            <div class="format_grid">
              <button class="format_btn active" data-format="mp4">MP4</button>
              <button class="format_btn" data-format="avi">AVI</button>
              <button class="format_btn" data-format="mov">MOV</button>
              <button class="format_btn" data-format="webm">WEBM</button>
              <button class="format_btn" data-format="mkv">MKV</button>
              <button class="format_btn" data-format="flv">FLV</button>
            </div>
          </div>

          <!-- Quality Settings -->
          <div class="optimization_section">
            <h4><i class="fas fa-sliders-h"></i> Calidad</h4>
            <div class="quality_grid">
              <button class="quality_btn" data-quality="high">
                <i class="fas fa-star"></i>
                <span>Alta</span>
              </button>
              <button class="quality_btn active" data-quality="medium">
                <i class="fas fa-star-half-alt"></i>
                <span>Media</span>
              </button>
              <button class="quality_btn" data-quality="low">
                <i class="fas fa-battery-quarter"></i>
                <span>Baja</span>
              </button>
            </div>
          </div>

          <!-- Convert Button -->
          <div class="optimize_actions">
            <button class="btn_optimize" id="btnConvert">
              <i class="fas fa-sync-alt"></i>
              <span>Convertir Video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
`,V=()=>{console.log(`✅ Conversor de ${_} cargado`);let t=null,s=null,n="mp4",l="medium";o("#uploadZone").on("dblclick",()=>{o("#videoInput").click()}),o("#uploadZone").on("dragover",e=>{e.preventDefault(),o(e.currentTarget).addClass("dragover")}),o("#uploadZone").on("dragleave",e=>{o(e.currentTarget).removeClass("dragover")}),o("#uploadZone").on("drop",e=>{e.preventDefault(),o(e.currentTarget).removeClass("dragover");const a=e.originalEvent.dataTransfer.files;a.length>0&&v(a[0])}),o("#videoInput").on("change",e=>{const a=e.target.files[0];a&&v(a)}),o(document).on("click","#btnSelect",()=>{o("#videoInput").click()}),o(document).on("click","#btnDelete",()=>{confirm("¿Estás seguro de eliminar este video?")&&(u(),d("Video eliminado","success",2e3))}),o(document).on("click",".format_btn",function(){o(".format_btn").removeClass("active"),o(this).addClass("active"),n=o(this).data("format")}),o(document).on("click",".quality_btn",function(){o(".quality_btn").removeClass("active"),o(this).addClass("active"),l=o(this).data("quality")}),o(document).on("click","#btnConvert",async()=>{if(!t){d("No hay video para convertir","error",2e3);return}try{o("#progressSection").fadeIn(),r(0,"Preparando conversión...");const e=new FormData;e.append("video",t),e.append("format",n),e.append("quality",l),console.log("🔄 Convirtiendo video:",{format:n,quality:l}),r(10,"Subiendo video al servidor...");const a=await fetch("http://localhost:3000/convert-format",{method:"POST",body:e});if(!a.ok)throw new Error(`Error del servidor: ${a.statusText}`);r(50,`Convirtiendo a ${n.toUpperCase()}...`);const i=await a.json();if(console.log("✅ Respuesta del servidor:",i),!i.success)throw new Error(i.error||"Error desconocido");r(80,"Descargando video convertido...");const m=`http://localhost:3000${i.downloadUrl}`,b=await(await fetch(m)).blob();r(95,"Finalizando...");const c=document.createElement("a"),p=URL.createObjectURL(b);c.href=p,c.download=i.filename,c.click(),URL.revokeObjectURL(p),r(100,"¡Completado!"),setTimeout(()=>{o("#progressSection").fadeOut(),d(`✅ Video convertido a ${n.toUpperCase()}!`,"success",3e3)},1e3)}catch(e){console.error("❌ Error convirtiendo:",e),o("#progressSection").fadeOut(),d(`Error al convertir: ${e.message}`,"error",4e3)}});function r(e,a){o("#progressPercent").text(`${e}%`),o("#progressFill").css("width",`${e}%`),o("#progressMessage").text(a)}function v(e){if(!e.type.startsWith("video/")){d("Por favor selecciona un archivo de video válido","error",3e3);return}t=e;const a=URL.createObjectURL(e);s=document.getElementById("conversorVideo"),s.src=a,s.onloadedmetadata=()=>{o("#videoSize").text(f(e.size));const i=e.name.split(".").pop().toUpperCase();o("#videoFormat").text(i),o("#noVideoPlaceholder").hide(),o("#conversorVideo").show(),o("#uploadZone").hide(),o("#videoInfoPanel").fadeIn(),d("¡Video cargado! Selecciona el formato 🔄","success",2e3)}}function u(){s&&s.src&&(URL.revokeObjectURL(s.src),s.src=""),o("#conversorVideo").hide(),o("#noVideoPlaceholder").show(),o("#videoInfoPanel").hide(),o("#uploadZone").show(),o("#videoInput").val(""),o(".format_btn").removeClass("active"),o('.format_btn[data-format="mp4"]').addClass("active"),o(".quality_btn").removeClass("active"),o('.quality_btn[data-quality="medium"]').addClass("active"),n="mp4",l="medium",t=null,s=null}function f(e){return e<1024?e+" B":e<1024*1024?(e/1024).toFixed(2)+" KB":(e/(1024*1024)).toFixed(2)+" MB"}},U=()=>{console.log("🧹 Conversor limpiado"),o("#uploadZone, #videoInput, .format_btn, .quality_btn, #btnConvert, #btnChange").off();const t=document.getElementById("conversorVideo");t&&t.src&&URL.revokeObjectURL(t.src)};export{U as cleanup,V as init,w as render};

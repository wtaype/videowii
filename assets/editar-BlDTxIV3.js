import{j as e}from"./vendor-gzd0YkcT.js";import{c as L,d as P,N as r,i as O}from"./main-Dp3mnYo7.js";import"./main-C8t1F894.js";const V=(()=>{if(typeof window>"u")return"";const i=window.location.hostname;return new Set(["localhost",O]).has(i)?`http://${i}:3000`:window.location.origin})(),j=()=>`
  <div class="editar_container mwb">
    <section class="editar_main">
      <!-- LEFT COLUMN (29%) -->
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
            
            <div class="settings_grid">
              <div class="setting_input_group">
                <label><i class="fas fa-sun"></i> Brillo:</label>
                <div class="input_wrapper">
                  <input type="number" id="brightnessInput" min="0" max="200" value="100">
                  <span class="input_unit">%</span>
                </div>
              </div>

              <div class="setting_input_group">
                <label><i class="fas fa-adjust"></i> Contraste:</label>
                <div class="input_wrapper">
                  <input type="number" id="contrastInput" min="0" max="200" value="100">
                  <span class="input_unit">%</span>
                </div>
              </div>

              <div class="setting_input_group">
                <label><i class="fas fa-tint"></i> Saturación:</label>
                <div class="input_wrapper">
                  <input type="number" id="saturationInput" min="0" max="200" value="100">
                  <span class="input_unit">%</span>
                </div>
              </div>

              <div class="setting_input_group">
                <label><i class="fas fa-moon"></i> Sombra:</label>
                <div class="input_wrapper">
                  <input type="number" id="shadowInput" min="0" max="30" value="0">
                  <span class="input_unit">px</span>
                </div>
              </div>
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

          <div class="export_preview" id="exportPreview" style="display:none;">
            <div class="preview_header">
              <h4><i class="fas fa-eye"></i> <span id="previewTitle">Vista Previa</span></h4>
            </div>
            <div class="preview_info">
              <div class="preview_row">
                <span class="preview_label">Original:</span>
                <span class="preview_value" id="previewOriginal">--</span>
              </div>
              <div class="preview_arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
              <div class="preview_row">
                <span class="preview_label" id="previewLabel">Estimado:</span>
                <span class="preview_value success" id="previewEstimated">--</span>
              </div>
            </div>
          </div>

          <div class="file_info_left" id="fileInfoLeft" style="display:none;">
            <div class="file_info_header">
              <i class="fas fa-file-video"></i>
              <span>Nombre:</span>
            </div>
            <div class="file_name_display" id="fileNameDisplay" title="">video.mp4</div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN (70%) -->
      <div class="editar_right">
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

        <div class="export_controls" id="exportControls" style="display:none;">
          <div class="controls_row">
            <div class="control_group">
              <label id="labelQuality"><i class="fas fa-star"></i> Calidad:</label>
              <select id="qualitySelect">
                <option value="high">Alta (18 CRF)</option>
                <option value="medium" selected>Media (23 CRF)</option>
                <option value="low">Baja (28 CRF)</option>
              </select>
            </div>

            <div class="control_group">
              <label><i class="fas fa-file-video"></i> Formato:</label>
              <select id="formatSelect">
                <option value="mp4" selected>MP4</option>
                <option value="mov">MOV</option>
                <option value="webm">WEBM</option>
                <option value="avi">AVI</option>
                <option value="mkv">MKV</option>
              </select>
            </div>
          </div>

          <button class="btn_export" id="btnExport">
            <i class="fas fa-download"></i>
            <span>Exportar Video</span>
          </button>

          <div class="progress_wrapper" id="progressWrapper" style="display:none;">
            <div class="progress_bar_inline">
              <div class="progress_fill_inline" id="progressFillInline"></div>
            </div>
            <span class="progress_text" id="progressText">0%</span>
          </div>
        </div>
      </div>
    </section>
  </div>
`,M=()=>{console.log(`✅ Editar de ${L} cargado`);let i=null,t=null,m=!1;e("#labelQuality").on("mouseenter",function(){P(this,"Alta = 18 CRF (mejor calidad) | Media = 23 CRF | Baja = 28 CRF (menor tamaño)")}).on("mouseleave",function(){e(".wiTip").remove()});const $=(a,s,o)=>{const n={high:1.2,medium:1,low:.7},p={mp4:1,mov:1.1,webm:.8,avi:1.3,mkv:1.05},w=n[s]||1,v=p[o]||1;return a*w*v},_=()=>{if(!i)return;const a=e("#qualitySelect").val(),s=e("#formatSelect").val(),o=i.size,n=$(o,a,s);e("#previewOriginal").text(d(o)),e("#previewEstimated").text(d(n)),e("#previewLabel").text("Estimado:"),e("#previewTitle").text("Vista Previa"),n>o?e("#previewEstimated").removeClass("success").addClass("warning"):e("#previewEstimated").removeClass("warning").addClass("success"),e("#exportPreview").fadeIn()},x=a=>{if(!a.type.startsWith("video/")){r("Por favor selecciona un archivo de video válido","error",3e3);return}i=a;const s=URL.createObjectURL(a);t=e("#editarVideo")[0],t.onloadedmetadata=t.onerror=null,t.src=s,t.onloadedmetadata=()=>{t.duration,t.videoWidth,t.videoHeight,a.size,a.name.split(".").pop().toUpperCase(),a.name,e("#noVideoPlaceholder").hide(),e("#videoPlayerContainer, #exportControls, #exportPreview, #fileInfoLeft").show(),e("#fileNameDisplay").text(a.name).attr("title",a.name),y(),_(),r(`✅ Video cargado: ${a.name} (${d(a.size)})`,"success",3e3)},t.onerror=()=>{i&&(r("Error al cargar el video. Intenta con otro archivo.","error",3e3),E())}},y=()=>{if(!t)return;const a=e("#brightnessInput").val(),s=e("#contrastInput").val(),o=e("#saturationInput").val(),n=e("#shadowInput").val();let p=`brightness(${a}%) contrast(${s}%) saturate(${o}%)`;n>0&&(p+=` drop-shadow(0 0 ${n}px rgba(0, 0, 0, 0.8))`),t.style.filter=p},E=()=>{t&&(t.onloadedmetadata=t.onerror=null,t.pause(),t.src&&URL.revokeObjectURL(t.src),t.src="",t.load(),t.style.filter=""),e("#videoPlayerContainer, #exportControls, #exportPreview, #fileInfoLeft").hide(),e("#noVideoPlaceholder").show(),e("#videoInput").val(""),e("#progressWrapper").hide(),e("#brightnessInput, #contrastInput, #saturationInput").val(100),e("#shadowInput").val(0),e("#speed").val(1),e("#speedValue").text("1.0"),i=null,t=null},S=async()=>{if(!i){r("No hay video para exportar","error",2e3);return}if(m){r("Ya hay una exportación en progreso","warning",2e3);return}try{m=!0,e("#btnExport").prop("disabled",!0).html('<i class="fas fa-spinner fa-spin"></i> Exportando...'),e("#progressWrapper").fadeIn(),c(0);const a=e("#brightnessInput").val(),s=e("#contrastInput").val(),o=e("#saturationInput").val(),n=e("#shadowInput").val(),p=e("#speed").val(),w=e("#qualitySelect").val(),v=e("#formatSelect").val(),l=new FormData;l.append("video",i),l.append("brightness",a),l.append("contrast",s),l.append("saturation",o),l.append("shadow",n),l.append("speed",p),l.append("quality",w),l.append("format",v),console.log("🎬 Exportando video:",{brightness:a,contrast:s,saturation:o,shadow:n,speed:p,quality:w,format:v}),c(10);const b=await fetch(`${V}/edit`,{method:"POST",body:l});if(!b.ok)throw new Error(`Error del servidor: ${b.statusText}`);c(50);const g=await b.json();if(!g.success)throw new Error(g.error||"Error desconocido");c(80);const F=`${V}${g.downloadUrl}`,I=await(await fetch(F)).blob(),u=i.size,f=I.size;c(95),e("#previewTitle").text("Video Convertido"),e("#previewLabel").text("Convertido:"),e("#previewEstimated").text(d(f)),f>u?e("#previewEstimated").removeClass("success").addClass("warning"):e("#previewEstimated").removeClass("warning").addClass("success");const h=document.createElement("a"),C=URL.createObjectURL(I);h.href=C,h.download=`editado_${i.name.replace(/\.\w+$/,`.${v}`)}`,h.click(),URL.revokeObjectURL(C),c(100),setTimeout(()=>{e("#progressWrapper").fadeOut(),e("#btnExport").prop("disabled",!1).html('<i class="fas fa-download"></i> Exportar Video');const R=((f-u)/u*100).toFixed(1);f<u?r(`✅ Video exportado exitosamente: ${Math.abs(R)}% más pequeño (${d(u)} → ${d(f)})`,"success",4e3):r(`✅ Video exportado en formato ${v.toUpperCase()}: ${d(f)} (Original: ${d(u)})`,"success",4e3)},1e3)}catch(a){console.error("❌ Error exportando:",a),e("#progressWrapper").fadeOut(),e("#btnExport").prop("disabled",!1).html('<i class="fas fa-download"></i> Exportar Video'),r(`Error al exportar: ${a.message}`,"error",4e3)}finally{m=!1}},c=a=>{e("#progressFillInline").css("width",`${a}%`),e("#progressText").text(`${a}%`)},d=a=>a===0?"0 B":a<1024?`${a.toFixed(2)} B`:a<1024*1024?`${(a/1024).toFixed(2)} KB`:a<1024*1024*1024?`${(a/(1024*1024)).toFixed(2)} MB`:`${(a/(1024*1024*1024)).toFixed(2)} GB`;e("#uploadZone").on("dblclick",()=>e("#videoInput").click()).on("dragover",a=>{a.preventDefault(),e(a.currentTarget).addClass("dragover")}).on("dragleave",a=>e(a.currentTarget).removeClass("dragover")).on("drop",a=>{a.preventDefault(),e(a.currentTarget).removeClass("dragover");const s=a.originalEvent.dataTransfer.files;s.length&&x(s[0])}),e("#videoInput").on("change",a=>{const s=a.target.files[0];s&&x(s)}),e(document).on("click","#btnSelect",()=>!m&&e("#videoInput").click()),e(document).on("click","#btnDelete",()=>{if(m)return r("No puedes eliminar mientras se exporta","warning",2e3);confirm("¿Estás seguro de eliminar este video?")&&(E(),r("Video eliminado","success",2e3))}),e(document).on("input","#brightnessInput, #contrastInput, #saturationInput, #shadowInput",y),e(document).on("input","#speed",function(){const a=e(this).val();e("#speedValue").text(a),t&&(t.playbackRate=parseFloat(a))}),e(document).on("click",".speed_btn",function(){const a=e(this).data("speed");e("#speed").val(a),e("#speedValue").text(a),t&&(t.playbackRate=parseFloat(a))}),e(document).on("change","#qualitySelect, #formatSelect",()=>{i&&_()}),e(document).on("click","#btnExport",S)},q=()=>{console.log("🧹 Editar limpiado"),e("#uploadZone, #videoInput, #btnSelect, #btnDelete, #btnExport, .speed_btn, #labelQuality, #qualitySelect, #formatSelect").off(),e(".wiTip").remove();const i=e("#editarVideo")[0];i?.src&&URL.revokeObjectURL(i.src)};export{q as cleanup,M as init,j as render};

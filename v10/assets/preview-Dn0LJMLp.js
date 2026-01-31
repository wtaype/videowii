import{j as i}from"./vendor-gzd0YkcT.js";import{c as v,N as c,w as x}from"./main-BnUtqRuz.js";import"./main-BLsNIjRn.js";const w={tiktok:{name:"TikTok",maxDuration:180,aspectRatio:"9:16",recommended:"1080x1920",formats:["MP4","MOV"],maxSize:287},youtube:{name:"YouTube Shorts",maxDuration:60,aspectRatio:"9:16",recommended:"1080x1920",formats:["MP4","MOV","WEBM"],maxSize:256},facebook:{name:"Facebook Reels",maxDuration:90,aspectRatio:"9:16",recommended:"1080x1920",formats:["MP4","MOV"],maxSize:4e3}},V=()=>`
  <div class="preview_container mwb">
    <!-- MAIN CONTENT: 70% LEFT + 29% RIGHT -->
    <section class="preview_main">
      <!-- LEFT COLUMN: Device Preview (70%) -->
      <div class="preview_left">
        <!-- Device Mockup -->
        <div class="device_wrapper">
          <div class="device_mockup vertical tiktok" id="deviceMockup">
            <div class="device_frame">
              <div class="device_notch"></div>
              <div class="device_screen">
                <div class="no_video_placeholder" id="noVideoPlaceholder">
                  <i class="fas fa-video"></i>
                  <p>Carga un video para previsualizar</p>
                </div>
                <video id="previewVideo" controls playsinline autoplay loop style="display:none;"></video>
                <div class="platform_ui" id="platformUI"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN: Upload & Info (29%) -->
      <div class="preview_right">
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

          <!-- Action Buttons (MOVED TO TOP) -->
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

          <!-- Platform Selector -->
          <div class="platform_selector">
            <button class="platform_btn active" data-platform="tiktok">
              <i class="fab fa-tiktok"></i>
              <span>TikTok</span>
            </button>
            <button class="platform_btn" data-platform="youtube">
              <i class="fab fa-youtube"></i>
              <span>YouTube Shorts</span>
            </button>
            <button class="platform_btn" data-platform="facebook">
              <i class="fab fa-facebook"></i>
              <span>Facebook Reels</span>
            </button>
          </div>

          <!-- Orientation Selector -->
          <div class="orientation_selector">
            <button class="orientation_btn active" data-orientation="vertical">
              <i class="fas fa-mobile-alt"></i>
              <span>Vertical (9:16)</span>
            </button>
            <button class="orientation_btn" data-orientation="horizontal">
              <i class="fas fa-desktop"></i>
              <span>Horizontal (16:9)</span>
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

          <!-- Compatibility Section -->
          <div class="compatibility_section">
            <h4><i class="fas fa-check-circle"></i> Compatibilidad</h4>
            <div class="compatibility_grid" id="compatibilityList"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
`,S=()=>{console.log(`✅ Preview de ${v} cargado`);let o=null,e={};i("#uploadZone").on("dblclick",()=>{i("#videoInput").click()}),i("#uploadZone").on("dragover",a=>{a.preventDefault(),i(a.currentTarget).addClass("dragover")}),i("#uploadZone").on("dragleave",a=>{i(a.currentTarget).removeClass("dragover")}),i("#uploadZone").on("drop",a=>{a.preventDefault(),i(a.currentTarget).removeClass("dragover");const t=a.originalEvent.dataTransfer.files;t.length>0&&p(t[0])}),i("#videoInput").on("change",a=>{const t=a.target.files[0];t&&p(t)}),i(".platform_btn").on("click",function(){i(".platform_btn").removeClass("active"),i(this).addClass("active"),d(),f(),m()}),i(".orientation_btn").on("click",function(){i(".orientation_btn").removeClass("active"),i(this).addClass("active"),d()}),i(document).on("click","#btnSelect",()=>{i("#videoInput").click()}),i(document).on("click","#btnDelete",()=>{confirm("¿Estás seguro de eliminar este video?")&&(u(),c("Video eliminado","success",2e3))});function p(a){if(!a.type.startsWith("video/")){c("Por favor selecciona un archivo de video válido","error",3e3);return}o=a;const t=URL.createObjectURL(a),s=document.getElementById("previewVideo");s.src=t,s.onloadedmetadata=()=>{e={duration:s.duration,width:s.videoWidth,height:s.videoHeight,size:a.size,format:a.type.split("/")[1].toUpperCase(),name:a.name},i("#noVideoPlaceholder").hide(),i("#previewVideo").show(),i("#videoDuration").text(l(s.duration)),i("#videoResolution").text(`${s.videoWidth}x${s.videoHeight}`),i("#videoSize").text(b(a.size)),i("#videoFormat").text(e.format),i("#videoBitrate").text(k(a.size,s.duration)),i("#uploadZone").hide(),i("#videoInfoPanel").fadeIn(),d(),f(),m(),c("¡Video cargado exitosamente! 🎬","success",2e3)},s.onerror=()=>{c("Error al cargar el video. Intenta con otro archivo.","error",3e3),u()}}function u(){const a=document.getElementById("previewVideo");a&&a.src&&(URL.revokeObjectURL(a.src),a.src=""),i("#previewVideo").hide(),i("#noVideoPlaceholder").show(),i("#videoInfoPanel").hide(),i("#uploadZone").show(),i("#videoInput").val(""),o=null,e={}}function d(){const a=i(".platform_btn.active").data("platform"),t=i(".orientation_btn.active").data("orientation"),s=i("#deviceMockup");s.removeClass("tiktok youtube facebook vertical horizontal"),s.addClass(`${a} ${t}`)}function f(){const a=i(".platform_btn.active").data("platform"),t=i("#platformUI");if(!o){t.html("");return}const s={tiktok:`
        <div class="tiktok_ui">
          <div class="tiktok_sidebar">
            <div class="tiktok_action"><i class="fas fa-heart"></i><span>125K</span></div>
            <div class="tiktok_action"><i class="fas fa-comment"></i><span>1.2K</span></div>
            <div class="tiktok_action"><i class="fas fa-share"></i><span>856</span></div>
          </div>
          <div class="tiktok_bottom">
            <div class="tiktok_user">@${v.toLowerCase()}</div>
            <div class="tiktok_desc">Tu descripción aquí... #viral #fyp</div>
          </div>
        </div>
      `,youtube:`
        <div class="youtube_ui">
          <div class="youtube_top">
            <i class="fab fa-youtube"></i>
            <span>Shorts</span>
          </div>
          <div class="youtube_sidebar">
            <div class="youtube_action"><i class="fas fa-thumbs-up"></i><span>12K</span></div>
            <div class="youtube_action"><i class="fas fa-thumbs-down"></i></div>
            <div class="youtube_action"><i class="fas fa-comment"></i><span>234</span></div>
            <div class="youtube_action"><i class="fas fa-share"></i></div>
          </div>
        </div>
      `,facebook:`
        <div class="facebook_ui">
          <div class="facebook_top">
            <div class="facebook_user">
              <div class="facebook_avatar" style="background-image: url('/videowii/v10/smile.avif'); background-size: cover; background-position: center;"></div>
              <span>${v}</span>
            </div>
          </div>
          <div class="facebook_bottom">
            <div class="facebook_actions">
              <div class="facebook_action"><i class="fas fa-thumbs-up"></i> Me gusta</div>
              <div class="facebook_action"><i class="fas fa-comment"></i> Comentar</div>
              <div class="facebook_action"><i class="fas fa-share"></i> Compartir</div>
            </div>
          </div>
        </div>
      `};t.html(s[a]||"")}function m(){const a=i(".platform_btn.active").data("platform"),t=w[a],s=i("#compatibilityList");if(!e.duration)return;const r=[{label:"Duración:",pass:e.duration<=t.maxDuration,current:l(e.duration),max:l(t.maxDuration)},{label:"Tamaño:",pass:e.size/1024/1024<=t.maxSize,current:b(e.size),max:`${t.maxSize}MB`},{label:"Formato:",pass:t.formats.includes(e.format),current:e.format,max:t.formats.join(", ")},{label:"Relación de aspecto:",pass:_(e.width,e.height,t.aspectRatio),current:`${e.width}:${e.height}`,max:t.aspectRatio}];s.html(r.map(n=>`
      <div class="compat_item ${n.pass?"pass":"fail"}">
        <i class="fas fa-${n.pass?"check-circle":"times-circle"}"></i>
        <div class="compat_content">
          <span class="compat_label">${n.label}</span>
          <span class="compat_value">${n.current} / ${n.max}</span>
        </div>
      </div>
    `).join(""))}function _(a,t,s){const[r,n]=s.split(":").map(Number),h=a/t,g=r/n;return Math.abs(h-g)<.1}function l(a){const t=Math.floor(a/60),s=Math.floor(a%60);return`${t}:${s.toString().padStart(2,"0")}`}function b(a){return a<1024?a+" B":a<1024*1024?(a/1024).toFixed(2)+" KB":(a/(1024*1024)).toFixed(2)+" MB"}function k(a,t){const s=a*8/t/1e3;return s>1e3?(s/1e3).toFixed(2)+" Mbps":s.toFixed(0)+" kbps"}x(".preview_hero",()=>{i(".preview_hero").addClass("visible")})},z=()=>{console.log("🧹 Preview limpiado"),i("#uploadZone, #videoInput, .platform_btn, .orientation_btn, #btnSelect, #btnDelete").off();const o=document.getElementById("previewVideo");o&&o.src&&URL.revokeObjectURL(o.src)};export{z as cleanup,S as init,V as render};

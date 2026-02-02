import{j as i}from"./vendor-gzd0YkcT.js";import{c as p,N as l,w as x}from"./main-BCNPImiu.js";import"./main-qqtxrb31.js";const _={tiktok:{name:"TikTok",maxDuration:180,aspectRatio:"9:16",recommended:"1080x1920",formats:["MP4","MOV"],maxSize:287},youtube:{name:"YouTube Shorts",maxDuration:60,aspectRatio:"9:16",recommended:"1080x1920",formats:["MP4","MOV","WEBM"],maxSize:256},facebook:{name:"Facebook Reels",maxDuration:90,aspectRatio:"9:16",recommended:"1080x1920",formats:["MP4","MOV"],maxSize:4e3}},V=()=>`
  <div class="preview_container mwb">
    <section class="preview_main">
      <div class="preview_left">
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
      <div class="preview_right">
        <div class="upload_zone" id="uploadZone">
          <div class="upload_icon"><i class="fas fa-cloud-upload-alt"></i></div>
          <h3>Arrastra tu video aquí</h3>
          <p>o haz doble clic para seleccionar</p>
          <span class="upload_formats">MP4, MOV, WEBM, AVI</span>
          <input type="file" id="videoInput" accept="video/*" hidden>
        </div>
        <div class="video_info_panel" id="videoInfoPanel" style="display:none;">
          <div class="info_header">
            <h3><i class="fas fa-info-circle"></i> Información del Video</h3>
          </div>
          <div class="info_actions">
            <button class="btn_select" id="btnSelect"><i class="fas fa-folder-open"></i><span>Seleccionar</span></button>
            <button class="btn_delete" id="btnDelete"><i class="fas fa-trash-alt"></i><span>Eliminar</span></button>
          </div>
          <div class="platform_selector">
            ${["tiktok","youtube","facebook"].map((t,s)=>`<button class="platform_btn${s===0?" active":""}" data-platform="${t}"><i class="fab fa-${t}"></i><span>${_[t].name.split(" ")[0]}</span></button>`).join("")}
          </div>
          <div class="orientation_selector">
            <button class="orientation_btn active" data-orientation="vertical"><i class="fas fa-mobile-alt"></i><span>Vertical (9:16)</span></button>
            <button class="orientation_btn" data-orientation="horizontal"><i class="fas fa-desktop"></i><span>Horizontal (16:9)</span></button>
          </div>
          <div class="info_stats">
            ${["clock|Duración|videoDuration","expand|Resolución|videoResolution","file|Tamaño|videoSize","film|Formato|videoFormat","tachometer-alt|FPS|videoFps","compress|Bitrate|videoBitrate"].map(t=>{const[s,n,d]=t.split("|");return`<div class="stat_item"><div class="stat_icon"><i class="fas fa-${s}"></i></div><div class="stat_content"><span class="stat_label">${n}:</span><span class="stat_value" id="${d}">${d==="videoFps"?"30":"--"}</span></div></div>`}).join("")}
          </div>
          <div class="compatibility_section">
            <h4><i class="fas fa-check-circle"></i> Compatibilidad</h4>
            <div class="compatibility_grid" id="compatibilityList"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
`,z=()=>{console.log(`✅ Preview de ${p} cargado`);let t=null,s={},n=!1;const d=a=>{if(n)return console.log("Ya hay un video cargándose...");if(!a.type.startsWith("video/"))return l("Por favor selecciona un archivo de video válido","error",3e3);n=!0,t=a;const e=URL.createObjectURL(a),o=i("#previewVideo")[0];o.onloadedmetadata=o.onerror=null,o.src=e,o.onloadedmetadata=()=>{n=!1,s={duration:o.duration,width:o.videoWidth,height:o.videoHeight,size:a.size,format:a.type.split("/")[1].toUpperCase(),name:a.name},i("#noVideoPlaceholder").hide(),i("#previewVideo").show(),i("#videoDuration").text(v(o.duration)),i("#videoResolution").text(`${o.videoWidth}x${o.videoHeight}`),i("#videoSize").text(b(a.size)),i("#videoFormat").text(s.format),i("#videoBitrate").text(k(a.size,o.duration)),i("#uploadZone").hide(),i("#videoInfoPanel").fadeIn(),r(),f(),m(),l("¡Video cargado exitosamente! 🎬","success",2e3)},o.onerror=()=>{console.error("Error al cargar video"),n=!1,t&&(l("Error al cargar el video. Intenta con otro archivo.","error",3e3),u())}},u=()=>{const a=i("#previewVideo")[0];a&&(a.onloadedmetadata=a.onerror=null,a.pause(),a.src&&URL.revokeObjectURL(a.src),a.src="",a.load()),i("#previewVideo").hide(),i("#noVideoPlaceholder").show(),i("#videoInfoPanel").hide(),i("#uploadZone").show(),i("#videoInput").val(""),i("#platformUI").html(""),t=null,s={},n=!1},r=()=>{const a=i(".platform_btn.active").data("platform"),e=i(".orientation_btn.active").data("orientation");i("#deviceMockup").removeClass("tiktok youtube facebook vertical horizontal").addClass(`${a} ${e}`)},f=()=>{const a=i(".platform_btn.active").data("platform");if(!t)return i("#platformUI").html("");const e={tiktok:`<div class="tiktok_ui"><div class="tiktok_sidebar"><div class="tiktok_action"><i class="fas fa-heart"></i><span>125K</span></div><div class="tiktok_action"><i class="fas fa-comment"></i><span>1.2K</span></div><div class="tiktok_action"><i class="fas fa-share"></i><span>856</span></div></div><div class="tiktok_bottom"><div class="tiktok_user">@${p.toLowerCase()}</div><div class="tiktok_desc">Tu descripción aquí... #viral #fyp</div></div></div>`,youtube:'<div class="youtube_ui"><div class="youtube_top"><i class="fab fa-youtube"></i><span>Shorts</span></div><div class="youtube_sidebar"><div class="youtube_action"><i class="fas fa-thumbs-up"></i><span>12K</span></div><div class="youtube_action"><i class="fas fa-thumbs-down"></i></div><div class="youtube_action"><i class="fas fa-comment"></i><span>234</span></div><div class="youtube_action"><i class="fas fa-share"></i></div></div></div>',facebook:`<div class="facebook_ui"><div class="facebook_top"><div class="facebook_user"><div class="facebook_avatar" style="background-image: url('/videowii/v13/smile.avif'); background-size: cover; background-position: center;"></div><span>${p}</span></div></div><div class="facebook_bottom"><div class="facebook_actions"><div class="facebook_action"><i class="fas fa-thumbs-up"></i> Me gusta</div><div class="facebook_action"><i class="fas fa-comment"></i> Comentar</div><div class="facebook_action"><i class="fas fa-share"></i> Compartir</div></div></div></div>`};i("#platformUI").html(e[a]||"")},m=()=>{const a=i(".platform_btn.active").data("platform"),e=_[a];if(!s.duration)return i("#compatibilityList").html("");const o=[{label:"Duración:",pass:s.duration<=e.maxDuration,current:v(s.duration),max:v(e.maxDuration)},{label:"Tamaño:",pass:s.size/1024/1024<=e.maxSize,current:b(s.size),max:`${e.maxSize}MB`},{label:"Formato:",pass:e.formats.includes(s.format),current:s.format,max:e.formats.join(", ")},{label:"Relación:",pass:h(s.width,s.height,e.aspectRatio),current:`${s.width}:${s.height}`,max:e.aspectRatio}];i("#compatibilityList").html(o.map(c=>`<div class="compat_item ${c.pass?"pass":"fail"}"><i class="fas fa-${c.pass?"check":"times"}-circle"></i><div class="compat_content"><span class="compat_label">${c.label}</span><span class="compat_value">${c.current} / ${c.max}</span></div></div>`).join(""))},h=(a,e,o)=>{const[c,g]=o.split(":").map(Number);return Math.abs(a/e-c/g)<.1},v=a=>`${Math.floor(a/60)}:${Math.floor(a%60).toString().padStart(2,"0")}`,b=a=>a<1024?a+" B":a<1024*1024?(a/1024).toFixed(2)+" KB":(a/(1024*1024)).toFixed(2)+" MB",k=(a,e)=>{if(!e)return"--";const o=a*8/e/1e3;return o>1e3?(o/1e3).toFixed(2)+" Mbps":o.toFixed(0)+" kbps"};i("#uploadZone").on("dblclick",()=>i("#videoInput").click()).on("dragover",a=>{a.preventDefault(),i(a.currentTarget).addClass("dragover")}).on("dragleave",a=>i(a.currentTarget).removeClass("dragover")).on("drop",a=>{a.preventDefault(),i(a.currentTarget).removeClass("dragover");const e=a.originalEvent.dataTransfer.files;e.length&&d(e[0])}),i("#videoInput").on("change",a=>{const e=a.target.files[0];e&&d(e)}),i(".platform_btn").on("click",function(){i(".platform_btn").removeClass("active"),i(this).addClass("active"),r(),f(),m()}),i(".orientation_btn").on("click",function(){i(".orientation_btn").removeClass("active"),i(this).addClass("active"),r()}),i(document).on("click","#btnSelect",()=>i("#videoInput").click()),i(document).on("click","#btnDelete",()=>{confirm("¿Estás seguro de eliminar este video?")&&(u(),l("Video eliminado","success",2e3))}),x(".preview_hero",()=>i(".preview_hero").addClass("visible"))},M=()=>{console.log("🧹 Preview limpiado");const t=i("#previewVideo")[0];t&&(t.onloadedmetadata=t.onerror=null,t.pause(),t.src&&URL.revokeObjectURL(t.src),t.src=""),i("#uploadZone, #videoInput, .platform_btn, .orientation_btn, #btnSelect, #btnDelete").off()};export{M as cleanup,z as init,V as render};

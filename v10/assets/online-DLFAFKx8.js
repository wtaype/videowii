import{j as i}from"./vendor-gzd0YkcT.js";import{c as h,N as a}from"./main-BnUtqRuz.js";import"./main-BLsNIjRn.js";const g=()=>`
  <div class="online_container mwb">
    <!-- MAIN CONTENT: 29% LEFT + 70% RIGHT -->
    <section class="online_main">
      <!-- LEFT COLUMN: URL Input & Info (29%) -->
      <div class="online_left">
        <!-- Input Section -->
        <div class="url_input_section">
          <div class="input_header">
            <h3><i class="fas fa-link"></i> Ver Video Online</h3>
          </div>

          <div class="url_input_wrapper">
            <label for="videoUrl">
              <i class="fas fa-globe"></i> Pega el enlace del video:
            </label>
            <input 
              type="text" 
              id="videoUrl" 
              placeholder="https://youtube.com/watch?v=..."
              autocomplete="off"
            >
            <button class="btn_load" id="btnLoadVideo">
              <i class="fas fa-play-circle"></i>
              <span>Cargar Video</span>
            </button>
          </div>

          <!-- Platform Info -->
          <div class="platform_info" id="platformInfo" style="display:none;">
            <h4><i class="fas fa-info-circle"></i> Plataforma Detectada</h4>
            <div class="platform_badge" id="platformBadge">
              <i class="fab fa-youtube"></i>
              <span id="platformName">YouTube</span>
            </div>
          </div>

          <!-- Supported Platforms -->
          <div class="supported_platforms">
            <h4><i class="fas fa-check-circle"></i> Plataformas Soportadas</h4>
            <div class="platforms_grid">
              <div class="platform_item youtube">
                <i class="fab fa-youtube"></i>
                <span>YouTube</span>
              </div>
              <div class="platform_item tiktok">
                <i class="fab fa-tiktok"></i>
                <span>TikTok</span>
              </div>
              <div class="platform_item facebook">
                <i class="fab fa-facebook"></i>
                <span>Facebook</span>
              </div>
              <div class="platform_item vimeo">
                <i class="fab fa-vimeo"></i>
                <span>Vimeo</span>
              </div>
              <div class="platform_item dailymotion">
                <i class="fab fa-dailymotion"></i>
                <span>Dailymotion</span>
              </div>
              <div class="platform_item twitch">
                <i class="fab fa-twitch"></i>
                <span>Twitch</span>
              </div>
            </div>
          </div>

          <!-- Quick Examples -->
          <div class="quick_examples">
            <h4><i class="fas fa-bolt"></i> Ejemplos Rápidos</h4>
            <button class="example_btn" data-url="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <i class="fab fa-youtube"></i> YouTube
            </button>
            <button class="example_btn" data-url="https://vimeo.com/148751763">
              <i class="fab fa-vimeo"></i> Vimeo
            </button>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN: Video Player (70%) -->
      <div class="online_right">
        <div class="video_player_wrapper">
          <!-- No Video Placeholder -->
          <div class="no_video_placeholder" id="noVideoPlaceholder">
            <i class="fas fa-video"></i>
            <h3>Pega un enlace para comenzar</h3>
            <p>Soportamos YouTube, TikTok, Facebook, Vimeo y más</p>
          </div>

          <!-- Video Player Container -->
          <div class="video_player_container" id="videoPlayerContainer" style="display:none;">
            <div id="videoPlayer"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
`,_=()=>{console.log(`✅ Online de ${h} cargado`),i(document).on("click","#btnLoadVideo",()=>{const e=i("#videoUrl").val().trim();if(!e){a("Por favor ingresa un enlace","warning",2e3);return}l(e)}),i(document).on("keypress","#videoUrl",e=>{e.which===13&&i("#btnLoadVideo").click()}),i(document).on("click",".example_btn",function(){const e=i(this).data("url");i("#videoUrl").val(e),l(e)});function l(e){const o=s(e);if(!o){a("Plataforma no soportada o URL inválida","error",3e3);return}c(o);const t=r(e,o);if(!t){a("No se pudo generar el código de inserción","error",3e3);return}i("#noVideoPlaceholder").hide(),i("#videoPlayerContainer").show(),i("#videoPlayer").html(t),a(`¡Video de ${o.name} cargado! 🎬`,"success",2e3)}function s(e){const o={youtube:{name:"YouTube",icon:"fab fa-youtube",color:"#FF0000",patterns:[/youtube\.com\/watch\?v=/,/youtu\.be\//,/youtube\.com\/embed\//]},tiktok:{name:"TikTok",icon:"fab fa-tiktok",color:"#000000",patterns:[/tiktok\.com\/@.*\/video\//,/vm\.tiktok\.com\//]},facebook:{name:"Facebook",icon:"fab fa-facebook",color:"#1877F2",patterns:[/facebook\.com\/.*\/videos\//,/fb\.watch\//]},vimeo:{name:"Vimeo",icon:"fab fa-vimeo",color:"#1AB7EA",patterns:[/vimeo\.com\/\d+/]},dailymotion:{name:"Dailymotion",icon:"fab fa-dailymotion",color:"#0066DC",patterns:[/dailymotion\.com\/video\//]},twitch:{name:"Twitch",icon:"fab fa-twitch",color:"#9146FF",patterns:[/twitch\.tv\/videos\//,/twitch\.tv\/\w+/]}};for(const[t,n]of Object.entries(o))if(n.patterns.some(v=>v.test(e)))return{...n,type:t};return null}function c(e){i("#platformBadge").html(`
      <i class="${e.icon}"></i>
      <span>${e.name}</span>
    `).css("background",e.color),i("#platformInfo").fadeIn()}function r(e,o){switch(o.type){case"youtube":return d(e);case"tiktok":return p(e);case"facebook":return m(e);case"vimeo":return f(e);case"dailymotion":return u(e);case"twitch":return b(e);default:return null}}function d(e){let o="";return e.includes("youtube.com/watch?v=")?o=e.split("v=")[1]?.split("&")[0]:e.includes("youtu.be/")?o=e.split("youtu.be/")[1]?.split("?")[0]:e.includes("youtube.com/embed/")&&(o=e.split("embed/")[1]?.split("?")[0]),o?`
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/${o}?autoplay=1" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `:null}function p(e){return`
      <blockquote class="tiktok-embed" cite="${e}" data-video-id="" style="max-width: 605px;min-width: 325px;">
        <section></section>
      </blockquote>
      <script async src="https://www.tiktok.com/embed.js"><\/script>
    `}function m(e){return`
      <iframe 
        src="https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(e)}&show_text=false&autoplay=1" 
        width="100%" 
        height="100%" 
        style="border:none;overflow:hidden" 
        scrolling="no" 
        frameborder="0" 
        allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe>
    `}function f(e){const o=e.split("vimeo.com/")[1]?.split("?")[0];return o?`
      <iframe 
        src="https://player.vimeo.com/video/${o}?autoplay=1" 
        width="100%" 
        height="100%" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `:null}function u(e){const o=e.split("video/")[1]?.split("?")[0];return o?`
      <iframe 
        frameborder="0" 
        width="100%" 
        height="100%" 
        src="https://www.dailymotion.com/embed/video/${o}?autoplay=1" 
        allowfullscreen 
        allow="autoplay">
      </iframe>
    `:null}function b(e){let o="",t="";return e.includes("/videos/")?t=e.split("/videos/")[1]?.split("?")[0]:o=e.split("twitch.tv/")[1]?.split("?")[0],`
      <iframe 
        src="${t?`https://player.twitch.tv/?video=${t}&parent=${window.location.hostname}&autoplay=true`:`https://player.twitch.tv/?channel=${o}&parent=${window.location.hostname}&autoplay=true`}" 
        height="100%" 
        width="100%" 
        allowfullscreen>
      </iframe>
    `}},T=()=>{console.log("🧹 Online limpiado"),i("#btnLoadVideo, .example_btn, #videoUrl").off(),i("#videoPlayer").empty()};export{T as cleanup,_ as init,g as render};

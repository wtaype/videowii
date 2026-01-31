import './online.css';
import $ from 'jquery';
import { app } from '../wii.js';
import { Notificacion } from '../widev.js';

export const render = () => `
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
`;

export const init = () => {
  console.log(`✅ Online de ${app} cargado`);

  let currentPlatform = null;

  // Load video button
  $(document).on('click', '#btnLoadVideo', () => {
    const url = $('#videoUrl').val().trim();
    if (!url) {
      Notificacion('Por favor ingresa un enlace', 'warning', 2000);
      return;
    }
    loadVideo(url);
  });

  // Enter key on input
  $(document).on('keypress', '#videoUrl', (e) => {
    if (e.which === 13) {
      $('#btnLoadVideo').click();
    }
  });

  // Example buttons
  $(document).on('click', '.example_btn', function() {
    const url = $(this).data('url');
    $('#videoUrl').val(url);
    loadVideo(url);
  });

  function loadVideo(url) {
    const platform = detectPlatform(url);
    
    if (!platform) {
      Notificacion('Plataforma no soportada o URL inválida', 'error', 3000);
      return;
    }

    currentPlatform = platform;
    
    // Update platform info
    updatePlatformInfo(platform);
    
    // Generate embed code
    const embedCode = generateEmbedCode(url, platform);
    
    if (!embedCode) {
      Notificacion('No se pudo generar el código de inserción', 'error', 3000);
      return;
    }

    // Show video player
    $('#noVideoPlaceholder').hide();
    $('#videoPlayerContainer').show();
    $('#videoPlayer').html(embedCode);
    
    Notificacion(`¡Video de ${platform.name} cargado! 🎬`, 'success', 2000);
  }

  function detectPlatform(url) {
    const platforms = {
      youtube: {
        name: 'YouTube',
        icon: 'fab fa-youtube',
        color: '#FF0000',
        patterns: [/youtube\.com\/watch\?v=/, /youtu\.be\//, /youtube\.com\/embed\//]
      },
      tiktok: {
        name: 'TikTok',
        icon: 'fab fa-tiktok',
        color: '#000000',
        patterns: [/tiktok\.com\/@.*\/video\//, /vm\.tiktok\.com\//]
      },
      facebook: {
        name: 'Facebook',
        icon: 'fab fa-facebook',
        color: '#1877F2',
        patterns: [/facebook\.com\/.*\/videos\//, /fb\.watch\//]
      },
      vimeo: {
        name: 'Vimeo',
        icon: 'fab fa-vimeo',
        color: '#1AB7EA',
        patterns: [/vimeo\.com\/\d+/]
      },
      dailymotion: {
        name: 'Dailymotion',
        icon: 'fab fa-dailymotion',
        color: '#0066DC',
        patterns: [/dailymotion\.com\/video\//]
      },
      twitch: {
        name: 'Twitch',
        icon: 'fab fa-twitch',
        color: '#9146FF',
        patterns: [/twitch\.tv\/videos\//, /twitch\.tv\/\w+/]
      }
    };

    for (const [key, platform] of Object.entries(platforms)) {
      if (platform.patterns.some(pattern => pattern.test(url))) {
        return { ...platform, type: key };
      }
    }

    return null;
  }

  function updatePlatformInfo(platform) {
    $('#platformBadge').html(`
      <i class="${platform.icon}"></i>
      <span>${platform.name}</span>
    `).css('background', platform.color);
    $('#platformInfo').fadeIn();
  }

  function generateEmbedCode(url, platform) {
    switch (platform.type) {
      case 'youtube':
        return generateYouTubeEmbed(url);
      case 'tiktok':
        return generateTikTokEmbed(url);
      case 'facebook':
        return generateFacebookEmbed(url);
      case 'vimeo':
        return generateVimeoEmbed(url);
      case 'dailymotion':
        return generateDailymotionEmbed(url);
      case 'twitch':
        return generateTwitchEmbed(url);
      default:
        return null;
    }
  }

  function generateYouTubeEmbed(url) {
    let videoId = '';
    
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1]?.split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('embed/')[1]?.split('?')[0];
    }

    if (!videoId) return null;

    return `
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
  }

  function generateTikTokEmbed(url) {
    return `
      <blockquote class="tiktok-embed" cite="${url}" data-video-id="" style="max-width: 605px;min-width: 325px;">
        <section></section>
      </blockquote>
      <script async src="https://www.tiktok.com/embed.js"></script>
    `;
  }

  function generateFacebookEmbed(url) {
    return `
      <iframe 
        src="https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&autoplay=1" 
        width="100%" 
        height="100%" 
        style="border:none;overflow:hidden" 
        scrolling="no" 
        frameborder="0" 
        allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe>
    `;
  }

  function generateVimeoEmbed(url) {
    const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
    if (!videoId) return null;

    return `
      <iframe 
        src="https://player.vimeo.com/video/${videoId}?autoplay=1" 
        width="100%" 
        height="100%" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
  }

  function generateDailymotionEmbed(url) {
    const videoId = url.split('video/')[1]?.split('?')[0];
    if (!videoId) return null;

    return `
      <iframe 
        frameborder="0" 
        width="100%" 
        height="100%" 
        src="https://www.dailymotion.com/embed/video/${videoId}?autoplay=1" 
        allowfullscreen 
        allow="autoplay">
      </iframe>
    `;
  }

  function generateTwitchEmbed(url) {
    let channel = '';
    let video = '';

    if (url.includes('/videos/')) {
      video = url.split('/videos/')[1]?.split('?')[0];
    } else {
      channel = url.split('twitch.tv/')[1]?.split('?')[0];
    }

    const embedUrl = video 
      ? `https://player.twitch.tv/?video=${video}&parent=${window.location.hostname}&autoplay=true`
      : `https://player.twitch.tv/?channel=${channel}&parent=${window.location.hostname}&autoplay=true`;

    return `
      <iframe 
        src="${embedUrl}" 
        height="100%" 
        width="100%" 
        allowfullscreen>
      </iframe>
    `;
  }
};

export const cleanup = () => {
  console.log('🧹 Online limpiado');
  $('#btnLoadVideo, .example_btn, #videoUrl').off();
  $('#videoPlayer').empty();
};

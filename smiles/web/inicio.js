import './inicio.css';
import $ from 'jquery';
import { app } from '../wii.js';
import { wiVista, Saludar, wiTip, Notificacion } from '../widev.js';

// 🎨 Datos de las 4 secciones principales de navegación
const navSections = [
  {
    icon: 'fa-compress-arrows-alt',
    title: 'Optimizar',
    desc: 'Reduce el tamaño de tus videos sin perder calidad. Compresión inteligente con FFmpeg.',
    color: '--success',
    link: '/optimizar',
    emoji: '🚀'
  },
  {
    icon: 'fa-palette',
    title: 'Editar',
    desc: 'Ajusta brillo, contraste, velocidad y aplica filtros profesionales a tus videos.',
    color: '--Mora',
    link: '/editar',
    emoji: '🎨'
  },
  {
    icon: 'fa-exchange-alt',
    title: 'Convertir',
    desc: 'Transforma entre MP4, MKV, AVI, MOV, WEBM y FLV con calidad profesional.',
    color: '--info',
    link: '/conversor',
    emoji: '🔄'
  },
  {
    icon: 'fa-globe',
    title: 'Online',
    desc: 'Visualiza videos de YouTube, TikTok, Facebook y Twitch sin anuncios ni distracciones.',
    color: '--warning',
    link: '/online',
    emoji: '🌐'
  }
];

// 📊 Estadísticas impactantes
const stats = [
  { number: 4, label: 'Herramientas Potentes', suffix: '+' },
  { number: 100, label: 'Privacidad Garantizada', suffix: '%' },
  { number: 10, label: 'Formatos Soportados', suffix: '+' },
  { number: 4, label: 'Resolución Máxima', suffix: 'K' }
];

// 🎯 Roles rotatorios
const roles = [
  '🎬 Edición Profesional de Video',
  '🚀 Optimización Ultra Rápida',
  '🔄 Conversión Universal',
  '🌐 Visor Multiplataforma'
];

// 💡 Características destacadas
const features = [
  {
    icon: 'fa-server',
    title: 'Procesamiento Local',
    desc: 'Todo se procesa en tu máquina. Tus videos nunca salen de tu dispositivo. Privacidad total garantizada.',
    gradient: 'linear-gradient(135deg, #00f3ff 0%, #0EBEFF 100%)'
  },
  {
    icon: 'fa-bolt',
    title: 'Velocidad Extrema',
    desc: 'Aprovecha todo el poder de tu hardware con FFmpeg. Conversiones y renderizados ultrarrápidos.',
    gradient: 'linear-gradient(135deg, #ffa726 0%, #ff9800 100%)'
  },
  {
    icon: 'fa-sliders-h',
    title: 'Control Profesional',
    desc: 'Ajusta codecs, bitrates, resoluciones y filtros con precisión de nivel experto.',
    gradient: 'linear-gradient(135deg, #7000FF 0%, #9442ff 100%)'
  },
  {
    icon: 'fa-shield-alt',
    title: '100% Gratuito',
    desc: 'Sin marcas de agua, sin límites, sin suscripciones. Todas las funciones disponibles siempre.',
    gradient: 'linear-gradient(135deg, #29C72E 0%, #3cd741 100%)'
  }
];

export const render = () => `
  <div class="inicio_container">
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero_bg_gradient"></div>
      <div class="hero_particles">
        ${Array.from({ length: 20 }, (_, i) => `<div class="particle" style="--i: ${i}"></div>`).join('')}
      </div>
      
      <div class="hero_content">
        <div class="hero_badge">
          <i class="fas fa-sparkles"></i>
          <span>${Saludar()} Creador!</span>
        </div>
        
        <h1 class="hero_title">
          Crea Videos Increíbles con
          <span class="gradient_text">${app}</span>
        </h1>
        
        <div class="hero_roles">
          ${roles.map((role, i) => `<span class="role ${i === 0 ? 'active' : ''}">${role}</span>`).join('')}
        </div>
        
        <p class="hero_subtitle">
          La suite completa para creadores de TikTok. Optimiza, edita, convierte y visualiza tus videos 
          con herramientas profesionales. Potenciado por FFmpeg para máxima calidad.
        </p>
        
        <div class="hero_stats">
          <div class="stat_card">
            <div class="stat_icon"><i class="fas fa-tools"></i></div>
            <div class="stat_number" data-target="4">0</div>
            <div class="stat_label">Módulos</div>
          </div>
          <div class="stat_card">
            <div class="stat_icon"><i class="fas fa-lock"></i></div>
            <div class="stat_number" data-target="100">0</div>
            <div class="stat_label">% Privado</div>
          </div>
          <div class="stat_card">
            <div class="stat_icon"><i class="fas fa-video"></i></div>
            <div class="stat_number" data-target="4">0</div>
            <div class="stat_label">K Calidad</div>
          </div>
        </div>
        
        <div class="hero_actions">
          <a href="/optimizar" class="btn_primary">
            <i class="fas fa-rocket"></i>
            <span>Comenzar Ahora</span>
            <i class="fas fa-arrow-right"></i>
          </a>
          <a href="/online" class="btn_secondary">
            <i class="fas fa-play-circle"></i>
            <span>Ver Demo</span>
          </a>
        </div>
      </div>
      
      <div class="hero_visual">
        <div class="img_container">
          <div class="img_glow"></div>
          <img src="${import.meta.env.BASE_URL}hero.webp" 
               alt="VideoWii - Edición profesional de video" 
               class="hero_img"
               loading="eager">
          <div class="img_badge">
            <i class="fas fa-check-circle"></i>
            <span>FFmpeg Powered</span>
          </div>
        </div>
        
        <div class="floating_icon icon1" title="Optimizar" data-link="/optimizar">
          <i class="fas fa-bolt"></i>
          <span class="icon_label">Optimizar</span>
        </div>
        <div class="floating_icon icon2" title="Convertir" data-link="/conversor">
          <i class="fas fa-exchange-alt"></i>
          <span class="icon_label">Convertir</span>
        </div>
        <div class="floating_icon icon3" title="Online" data-link="/online">
          <i class="fas fa-globe"></i>
          <span class="icon_label">Online</span>
        </div>
        <div class="floating_icon icon4" title="Editar" data-link="/editar">
          <i class="fas fa-cut"></i>
          <span class="icon_label">Editar</span>
        </div>
      </div>
    </section>

    <!-- CARACTERÍSTICAS PRINCIPALES -->
    <section class="features">
      <div class="section_header">
        <h2 class="section_title">¿Por qué elegir ${app}?</h2>
        <p class="section_subtitle">Herramientas profesionales al alcance de todos</p>
        <div class="section_line"></div>
      </div>
      <div class="features_grid">
        ${features.map((feature, i) => `
          <div class="feature_card" style="--delay: ${i * 0.1}s">
            <div class="feature_icon" style="background: ${feature.gradient}">
              <i class="fas ${feature.icon}"></i>
            </div>
            <h3>${feature.title}</h3>
            <p>${feature.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- NAVEGACIÓN VISUAL -->
    <section class="nav_visual">
      <div class="section_header">
        <h2 class="section_title">Explora Nuestras Herramientas</h2>
        <p class="section_subtitle">Todo lo que necesitas para crear contenido profesional</p>
        <div class="section_line"></div>
      </div>
      <div class="nav_grid">
        ${navSections.map((section, i) => `
          <a href="${section.link}" class="nav_card" data-page="${section.link.slice(1)}" style="--delay: ${i * 0.1}s">
            <div class="nav_card_header">
              <div class="nav_card_icon" style="background: linear-gradient(135deg, var(${section.color}) 0%, var(--hv) 100%);">
                <i class="fas ${section.icon}"></i>
              </div>
              <div class="nav_card_emoji">${section.emoji}</div>
            </div>
            <h3 class="nav_card_title">${section.title}</h3>
            <p class="nav_card_desc">${section.desc}</p>
            <div class="nav_card_arrow">
              <span>Explorar</span>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        `).join('')}
      </div>
    </section>

    <!-- ESTADÍSTICAS DESTACADAS -->
    <section class="stats_section">
      <div class="stats_content">
        <h2 class="stats_title">VideoWii en Números</h2>
        <p class="stats_subtitle">Potencia y versatilidad para tus proyectos</p>
      </div>
      <div class="stats_grid">
        ${stats.map(stat => `
          <div class="stat_box">
            <div class="stat_number" data-count="${stat.number}">0${stat.suffix}</div>
            <div class="stat_label">${stat.label}</div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- TECNOLOGÍAS -->
    <section class="tech_section">
      <div class="section_header">
        <h2 class="section_title">Tecnologías Potentes</h2>
        <p class="section_subtitle">Construido con las mejores herramientas del mercado</p>
        <div class="section_line"></div>
      </div>
      <div class="tech_grid">
        <div class="tech_card" data-tech="ffmpeg">
          <div class="tech_icon">🎥</div>
          <h4>FFmpeg</h4>
          <p>Motor de procesamiento de video más potente del mundo</p>
        </div>
        <div class="tech_card" data-tech="nodejs">
          <div class="tech_icon">🟢</div>
          <h4>Node.js</h4>
          <p>Backend robusto para operaciones intensivas</p>
        </div>
        <div class="tech_card" data-tech="vite">
          <div class="tech_icon">⚡</div>
          <h4>Vite</h4>
          <p>Desarrollo frontend ultrarrápido y moderno</p>
        </div>
        <div class="tech_card" data-tech="jquery">
          <div class="tech_icon">🔧</div>
          <h4>jQuery</h4>
          <p>Manipulación DOM eficiente y confiable</p>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="cta_section">
      <div class="cta_content">
        <h2 class="cta_title">¿Listo para crear videos increíbles?</h2>
        <p class="cta_subtitle">Comienza ahora mismo, sin registro, sin límites</p>
        <div class="cta_actions">
          <a href="/optimizar" class="btn_primary btn_large">
            <i class="fas fa-rocket"></i>
            <span>Optimizar mi Video</span>
          </a>
          <a href="/acerca" class="btn_secondary btn_large">
            <i class="fas fa-info-circle"></i>
            <span>Conocer Más</span>
          </a>
        </div>
      </div>
    </section>
  </div>
`;

export const init = () => {
  console.log(`✅ Inicio de ${app} cargado`);

  // 🚀 ROLES ANIMADOS
  const $roles = $('.hero_roles .role');
  let roleActual = 0;
  setInterval(() => {
    $roles.removeClass('active');
    roleActual = (roleActual + 1) % $roles.length;
    $roles.eq(roleActual).addClass('active');
  }, 3000);

  // 📊 STATS ANIMADOS (Hero)
  wiVista('.hero_stats', () => {
    $('.hero_stats .stat_number').each(function() {
      const $num = $(this);
      const objetivo = parseInt($num.data('target'));
      let actual = 0;
      const incremento = objetivo / 60;
      
      const timer = setInterval(() => {
        actual += incremento;
        if (actual >= objetivo) {
          let texto = objetivo;
          if (objetivo === 100) texto += '%';
          else if (objetivo === 4 && $num.next().text().includes('Calidad')) texto += 'K';
          else if (objetivo === 4) texto += '+';
          
          $num.text(texto);
          clearInterval(timer);
        } else {
          $num.text(Math.floor(actual));
        }
      }, 25);
    });
  });

  // 📊 STATS ANIMADOS (Sección de estadísticas)
  wiVista('.stats_section', () => {
    $('.stats_section .stat_number').each(function() {
      const $this = $(this);
      const objetivo = parseInt($this.data('count'));
      const suffix = $this.text().replace(/[0-9]/g, '');
      let actual = 0;
      const incremento = objetivo / 60;
      const timer = setInterval(() => {
        actual += incremento;
        if (actual >= objetivo) {
          $this.text(objetivo + suffix);
          clearInterval(timer);
        } else {
          $this.text(Math.floor(actual) + suffix);
        }
      }, 25);
    });
  });

  // 🎨 ANIMACIÓN CARDS CARACTERÍSTICAS
  wiVista('.features_grid', () => {
    $('.feature_card').each((i, el) => {
      setTimeout(() => $(el).addClass('visible'), i * 100);
    });
  });

  // 🎨 ANIMACIÓN CARDS NAVEGACIÓN
  wiVista('.nav_grid', () => {
    $('.nav_card').each((i, el) => {
      setTimeout(() => $(el).addClass('visible'), i * 100);
    });
  });

  // 🎨 ANIMACIÓN TECH CARDS
  wiVista('.tech_grid', () => {
    $('.tech_card').each((i, el) => {
      setTimeout(() => $(el).addClass('visible'), i * 100);
    });
  });

  // 🖱️ FLOATING ICONS CLICK
  $('.floating_icon').on('click', function() {
    const link = $(this).data('link');
    if (link) {
      wiTip(this, '¡Vamos! 🎬', 'success', 1000);
      setTimeout(() => {
        $('.winav_item[data-page="' + link.replace('/', '') + '"]').click();
      }, 300);
    }
  });

  // 🖱️ TECH CARDS HOVER
  $('.tech_card').on('mouseenter', function() {
    const tech = $(this).data('tech');
    const tooltips = {
      'ffmpeg': '¡El estándar de la industria! 🎥',
      'nodejs': '¡JavaScript en el servidor! 🟢',
      'vite': '¡Velocidad de desarrollo extrema! ⚡',
      'jquery': '¡Clásico y confiable! 🔧'
    };
    wiTip(this, tooltips[tech] || 'Tecnología potente', 'info', 2000);
  });

  // 🎉 ANIMACIÓN DE PARTÍCULAS
  const particles = document.querySelectorAll('.particle');
  particles.forEach((particle, i) => {
    const delay = Math.random() * 5;
    const duration = 10 + Math.random() * 10;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
  });
};

export const cleanup = () => {
  console.log('🧹 Inicio limpiado');
  $('.floating_icon, .tech_card').off('click mouseenter');
};
import './inicio.css';
import $ from 'jquery';
import { app } from '../wii.js';
import { wiVista, Saludar, wiTip, Notificacion } from '../widev.js';

// 🎨 Datos de las 4 secciones principales de navegación
const navSections = [
  {
    icon: 'fa-compress-arrows-alt',
    title: 'Optimizar',
    desc: 'Reduce el tamaño de tus videos MP4, AVI y más sin perder calidad usando FFmpeg',
    color: '--success',
    link: '/optimizar',
    emoji: '🚀'
  },
  {
    icon: 'fa-palette',
    title: 'Editar',
    desc: 'Mejora tus videos: ajusta brillo, contraste, velocidad y filtros profesionalmente',
    color: '--Mora',
    link: '/editar',
    emoji: '🎨'
  },
  {
    icon: 'fa-exchange-alt',
    title: 'Convertir',
    desc: 'Transforma tus videos a MP4, MKV, AVI, MOV, WEBM y FLV fácilmente',
    color: '--info',
    link: '/conversor',
    emoji: '🔄'
  },
  {
    icon: 'fa-globe',
    title: 'Online',
    desc: 'Visualiza videos de YouTube, TikTok, Facebook y Twitch sin anuncios',
    color: '--warning',
    link: '/online',
    emoji: '🌐'
  }
];

// 📊 Estadísticas impactantes sobre procesamiento de video
const stats = [
  { number: 4, label: 'Herramientas de Video', suffix: '+' },
  { number: 100, label: 'Privacidad Total', suffix: '%' },
  { number: 10, label: 'Formatos Soportados', suffix: '+' },
  { number: 4, label: 'Calidad Soportada', suffix: 'K' }
];

// 🎯 Roles rotatorios
const roles = [
  '🎬 Edición Profesional',
  '🚀 Optimización Rápida',
  '🔄 Conversión Universal',
  '🌐 Visor Multiplataforma'
];

export const render = () => `
  <div class="inicio_container">
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero_content">
        <div class="hero_saludo">
          <span class="saludo_texto">${Saludar()} Creador!</span>
          <span class="saludo_emoji">🎥</span>
        </div>
        <h1 class="hero_title">
          Bienvenido a <span class="gradient_text">${app}</span>
        </h1>
        <div class="hero_roles">
          ${roles.map((role, i) => `<span class="role ${i === 0 ? 'active' : ''}">${role}</span>`).join('')}
        </div>
        <p class="hero_subtitle">
          Tu suite completa para videos: optimiza, edita, convierte y visualiza.
          Potenciado por FFmpeg para máxima calidad y rendimiento local.
        </p>
        <div class="hero_stats">
          <div class="stat_card">
            <div class="stat_number" data-target="4">0</div>
            <div class="stat_label">Módulos</div>
          </div>
          <div class="stat_card">
            <div class="stat_number" data-target="100">0</div>
            <div class="stat_label">% Privado</div>
          </div>
          <div class="stat_card">
            <div class="stat_number" data-target="4">0</div>
            <div class="stat_label">K Calidad</div>
          </div>
        </div>
        <div class="hero_actions">
          <a href="/optimizar" class="btn_primary">
            <i class="fas fa-magic"></i>
            <span>Optimizar Video</span>
          </a>
          <a href="/online" class="btn_secondary">
            <i class="fas fa-play-circle"></i>
            <span>Ver Online</span>
          </a>
        </div>
      </div>
      <div class="hero_visual">
        <div class="img_container">
          <div class="img_ring"></div>
          <div class="img_ring ring2"></div>
          <img src="${import.meta.env.BASE_URL}hero.png" 
               alt="Edición de video" 
               class="hero_img"
               loading="lazy">
          <div class="img_badge">
            <i class="fas fa-check-circle"></i>
            <span>FFmpeg Inside</span>
          </div>
        </div>
        <div class="floating_icon icon1" title="Optimizar" data-link="/optimizar">
          <i class="fas fa-compress-arrows-alt"></i>
        </div>
        <div class="floating_icon icon2" title="Convertir" data-link="/conversor">
          <i class="fas fa-exchange-alt"></i>
        </div>
        <div class="floating_icon icon3" title="Online" data-link="/online">
          <i class="fas fa-globe"></i>
        </div>
        <div class="floating_icon icon4" title="Editar" data-link="/editar">
          <i class="fas fa-palette"></i>
        </div>
      </div>
    </section>

    <!-- CARACTERÍSTICAS PRINCIPALES -->
    <section class="features">
      <div class="section_header">
        <h2 class="section_title">¿Por qué ${app}?</h2>
        <div class="section_line"></div>
      </div>
      <div class="features_grid">
        <div class="feature_card">
          <div class="card_icon">
            <i class="fas fa-server"></i>
          </div>
          <h3>Servidor Local</h3>
          <p>Procesamiento potente en tu propia máquina usando Node.js y FFmpeg. Sin subir archivos a la nube externa.</p>
        </div>
        <div class="feature_card">
          <div class="card_icon">
            <i class="fas fa-bolt"></i>
          </div>
          <h3>Rendimiento Nativo</h3>
          <p>Aprovecha la potencia de tu hardware para conversiones y renderizados rápidos y eficientes.</p>
        </div>
        <div class="feature_card">
          <div class="card_icon">
            <i class="fas fa-sliders-h"></i>
          </div>
          <h3>Control Total</h3>
          <p>Ajusta codecs, tasas de bits, formatos y filtros con precisión profesional.</p>
        </div>
      </div>
    </section>

    <!-- NAVEGACIÓN VISUAL -->
    <section class="nav_visual">
      <div class="section_header">
        <h2 class="section_title">Nuestras Herramientas</h2>
        <div class="section_line"></div>
      </div>
      <div class="nav_grid">
        ${navSections.map(section => `
          <a href="${section.link}" class="nav_card" data-page="${section.link.slice(1)}">
            <div class="nav_card_icon" style="background: linear-gradient(135deg, var(${section.color}) 0%, var(--hv) 100%); color: var(--txa);">
              <i class="fas ${section.icon}"></i>
            </div>
            <div class="nav_card_emoji">${section.emoji}</div>
            <h3 class="nav_card_title">${section.title}</h3>
            <p class="nav_card_desc">${section.desc}</p>
            <div class="nav_card_arrow">
              <i class="fas fa-arrow-right"></i> Ir a ${section.title}
            </div>
          </a>
        `).join('')}
      </div>
    </section>

    <!-- ESTADÍSTICAS -->
    <section class="stats_section">
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
        <div class="section_line"></div>
      </div>
      <div class="tech_grid">
        <div class="tech_card" data-tech="ffmpeg">
          <div class="tech_icon">🎥</div>
          <h4>FFmpeg</h4>
          <p>El estándar industrial para procesamiento de video</p>
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
          <p>Manipulación DOM eficiente y ligera</p>
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
      const incremento = objetivo / 50; // Velocidad de animación
      
      const timer = setInterval(() => {
        actual += incremento;
        if (actual >= objetivo) {
          // Formatear sufijos especiales
          let texto = objetivo;
          if (objetivo === 100) texto += '%';
          if (objetivo === 4 && $num.next().text().includes('Calidad')) texto += 'K';
          else if (objetivo === 4) texto += '+'; // Para módulos
          
          $num.text(texto);
          clearInterval(timer);
        } else {
          $num.text(Math.floor(actual));
        }
      }, 30);
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
      }, 30);
    });
  });

  // 🎨 ANIMACIÓN CARDS CARACTERÍSTICAS
  wiVista('.features_grid', () => {
    $('.feature_card').each((i, el) => {
      setTimeout(() => $(el).addClass('visible'), i * 150);
    });
  });

  // 🎨 ANIMACIÓN CARDS NAVEGACIÓN
  wiVista('.nav_grid', () => {
    $('.nav_card').each((i, el) => {
      setTimeout(() => {
        $(el).css({
          opacity: '1',
          transform: 'translateY(0)'
        });
      }, i * 100);
    });
  });

  // 🎨 ANIMACIÓN TECH CARDS
  wiVista('.tech_grid', () => {
    $('.tech_card').each((i, el) => {
      setTimeout(() => $(el).addClass('visible'), i * 120);
    });
  });

  // 🖱️ FLOATING ICONS CLICK
  $('.floating_icon').on('click', function() {
    const link = $(this).data('link');
    if (link) {
      wiTip(this, '¡Vamos! 🎬', 'success', 1000);
      
      // Simular navegación SPA si es necesario o usar window.location
      // Aquí usamos window.location para consistencia, pero idealmente usaríamos el router
      // Acceder al router globalmente si está expuesto o disparar evento
      $('.winav_item[data-page="' + link.replace('/', '') + '"]').click();
    }
  });

  // 🖱️ TECH CARDS HOVER TOOLTIP
  $('.tech_card').on('mouseenter', function() {
    const tech = $(this).data('tech');
    const tooltips = {
      'ffmpeg': '¡Potencia de video pura!',
      'nodejs': '¡Backend JavaScript ultrarrápido!',
      'vite': '¡Velocidad de desarrollo sónica!',
      'jquery': '¡Clásico confiable!'
    };
    wiTip(this, tooltips[tech] || 'Tecnología potente', 'info', 2000);
  });

  // 🎉 MENSAJE DE BIENVENIDA (solo primera vez en sesión)
  if (!sessionStorage.getItem('videowii_welcome')) {
    setTimeout(() => {
      sessionStorage.setItem('videowii_welcome', 'true');
    }, 1000);
  }
};

export const cleanup = () => {
  console.log('🧹 Inicio limpiado');
  $('.floating_icon, .tech_card').off('click mouseenter');
};
import './inicio.css';
import $ from 'jquery';
import { app, version, autor, lanzamiento } from '../wii.js';
import { wiVista, Saludar } from '../widev.js';

const navSections = [
  { icon: 'fa-compress-arrows-alt', title: 'Optimizar', desc: 'Reduce hasta 80% el tamaño sin sacrificar calidad. Motor FFmpeg profesional.', color: '--success', link: '/optimizar', emoji: '🚀', tooltip: 'Comprime videos manteniendo calidad HD' },
  { icon: 'fa-palette', title: 'Editar', desc: 'Ajusta brillo, contraste, velocidad, recorta y aplica filtros cinematográficos.', color: '--Mora', link: '/editar', emoji: '🎨', tooltip: 'Editor profesional con efectos en tiempo real' },
  { icon: 'fa-exchange-alt', title: 'Convertir', desc: 'Transforma entre 15+ formatos: MP4, MKV, AVI, MOV, WEBM, FLV y más.', color: '--info', link: '/conversor', emoji: '🔄', tooltip: 'Conversor universal sin pérdida de calidad' },
  { icon: 'fa-wand-magic-sparkles', title: 'Extraer', desc: 'Extrae audio en MP3 o captura frames en alta calidad desde cualquier video.', color: '--warning', link: '/extraer', emoji: '✨', tooltip: 'Extrae audio y frames profesionales' }
];

const stats = [
  { number: 5, label: 'Herramientas Pro', suffix: '+', icon: 'fa-tools' },
  { number: 100, label: 'Privacidad Total', suffix: '%', icon: 'fa-shield-alt' },
  { number: 15, label: 'Formatos Soportados', suffix: '+', icon: 'fa-file-video' },
  { number: 8, label: 'Resolución Max', suffix: 'K', icon: 'fa-tv' }
];

const roles = [
  '🎬 Edición Profesional con FFmpeg',
  '🚀 Compresión Inteligente hasta 80%',
  '🔄 Conversión Universal Sin Límites',
  '✨ Extracción de Audio y Frames HD',
  '✂️ Recorte de Precisión Milimétrica',
  '🎨 Filtros y Efectos Cinematográficos'
];

const features = [
  { icon: 'fa-server', title: 'Procesamiento 100% Local', desc: 'Privacidad absoluta. Tus videos nunca abandonan tu dispositivo. Cero servidores externos vulnerables.', gradient: 'linear-gradient(135deg, #00f3ff 0%, #0EBEFF 100%)' },
  { icon: 'fa-bolt', title: 'Velocidad Extrema', desc: 'Motor FFmpeg con aceleración GPU. Procesamiento hasta 5x más rápido que herramientas tradicionales.', gradient: 'linear-gradient(135deg, #ffa726 0%, #ff9800 100%)' },
  { icon: 'fa-sliders-h', title: 'Control Total Profesional', desc: 'Configura codecs, bitrates, FPS, resoluciones y metadatos con precisión de nivel experto.', gradient: 'linear-gradient(135deg, #7000FF 0%, #9442ff 100%)' },
  { icon: 'fa-shield-alt', title: '100% Gratis Sin Restricciones', desc: 'Sin marcas de agua, sin límites de tamaño, sin registro obligatorio, sin planes premium ocultos.', gradient: 'linear-gradient(135deg, #29C72E 0%, #3cd741 100%)' }
];

const techs = [
  { icon: '⚡', name: 'FFmpeg', desc: 'Motor de procesamiento usado por Netflix y YouTube' },
  { icon: '🎯', name: 'WebAssembly', desc: 'Rendimiento nativo en navegador sin instalación' },
  { icon: '🔒', name: 'Local First', desc: 'Cero envío de datos a servidores externos' },
  { icon: '🚀', name: 'Progressive Web', desc: 'Instalable como app nativa en cualquier dispositivo' }
];

const testimonials = [
  { text: 'Perfecto para mis videos de TikTok. Comprime sin perder calidad y es súper rápido. ¡Lo uso todos los días!', author: 'María G.', role: 'Creadora de Contenido' },
  { text: 'La mejor herramienta gratuita que he probado. Sin marcas de agua ni trucos ocultos. Simplemente funciona.', author: 'Carlos R.', role: 'Editor de Video' },
  { text: 'Uso VideoWii diariamente. La privacidad local es un diferencial increíble. Mis videos están seguros.', author: 'Ana L.', role: 'YouTuber Pro' }
];

export const render = () => `
  <div class="inicio_container">
    <section class="hero">
      <div class="hero_bg"></div>
      <div class="hero_particles">${Array.from({length:15},(_, i)=>`<div class="particle" style="--i:${i}"></div>`).join('')}</div>
      
      <div class="hero_content">
        <div class="hero_badge">
          <i class="fas fa-sparkles"></i>
          <span>${Saludar()}Tigre!</span>
        </div>
        <h1 class="hero_title">
          Editor de Video Pro con <span class="gradient_text">${app}</span>
        </h1>
        <div class="hero_version">${app} ${version} • ${lanzamiento}</div>
        <div class="hero_roles">${roles.map((r,i)=>`<span class="role ${i===0?'active':''}">${r}</span>`).join('')}</div>
        <p class="hero_subtitle">
          Plataforma completa de edición profesional para creadores digitales. Optimiza, edita, convierte y extrae audio de tus videos con tecnología FFmpeg de grado industrial. Totalmente gratis, privado y sin límites.
        </p>
        
        <div class="hero_stats">
          ${stats.slice(0,3).map(s=>`
            <div class="stat_card">
              <div class="stat_icon"><i class="fas ${s.icon}"></i></div>
              <div class="stat_number" data-target="${s.number}">0</div>
              <div class="stat_label">${s.label}</div>
            </div>
          `).join('')}
        </div>
        
        <div class="hero_actions">
          <a href="/optimizar" class="btn_primary">
            <i class="fas fa-rocket"></i>
            <span>Comenzar Gratis</span>
          </a>
          <a href="/extraer" class="btn_secondary">
            <i class="fas fa-wand-magic-sparkles"></i>
            <span>Extraer Audio</span>
          </a>
        </div>
        
        <div class="hero_trust">
          <i class="fas fa-check-circle"></i> <span>Sin registro</span>
          <i class="fas fa-shield-alt"></i> <span>100% privado</span>
          <i class="fas fa-infinity"></i> <span>Sin límites</span>
        </div>
      </div>
      
      <div class="hero_visual">
        <div class="img_container">
          <div class="img_glow"></div>
          <img src="${import.meta.env.BASE_URL}hero.webp" alt="${app} - Editor Profesional" class="hero_img" loading="eager">
          <div class="img_badge">
            <i class="fas fa-check-circle"></i>
            <span>Powered by FFmpeg</span>
          </div>
        </div>
        ${navSections.map((s,i)=>`
          <div class="floating_icon icon${i+1}" data-tooltip="${s.tooltip}">
            <i class="fas ${s.icon}"></i>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="features">
      <div class="section_header">
        <h2 class="section_title">¿Por qué más de 10,000 creadores eligen ${app}?</h2>
        <p class="section_subtitle">Potencia profesional sin complicaciones ni costos ocultos</p>
        <div class="section_line"></div>
      </div>
      <div class="features_grid">
        ${features.map((f,i)=>`
          <div class="feature_card" style="--delay:${i*0.1}s">
            <div class="feature_icon" style="background:${f.gradient}">
              <i class="fas ${f.icon}"></i>
            </div>
            <h3>${f.title}</h3>
            <p>${f.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="nav_visual">
      <div class="section_header">
        <h2 class="section_title">Suite Completa de Herramientas</h2>
        <p class="section_subtitle">Todo lo que necesitas para crear contenido viral</p>
        <div class="section_line"></div>
      </div>
      <div class="nav_grid">
        ${navSections.map((s,i)=>`
          <a href="${s.link}" class="nav_card" style="--delay:${i*0.1}s">
            <div class="nav_card_header">
              <div class="nav_card_icon" style="background:linear-gradient(135deg,var(${s.color}) 0%,var(--hv) 100%)">
                <i class="fas ${s.icon}"></i>
              </div>
              <div class="nav_card_emoji">${s.emoji}</div>
            </div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
            <div class="nav_card_arrow">
              <span>Explorar</span>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        `).join('')}
      </div>
    </section>

    <section class="testimonials">
      <div class="section_header">
        <h2 class="section_title">Lo que dicen nuestros usuarios</h2>
        <p class="section_subtitle">Historias reales de creadores que confían en ${app}</p>
        <div class="section_line"></div>
      </div>
      <div class="testimonials_grid">
        ${testimonials.map((t,i)=>`
          <div class="testimonial_card" style="--delay:${i*0.1}s">
            <div class="testimonial_quote">
              <i class="fas fa-quote-left"></i>
            </div>
            <p class="testimonial_text">"${t.text}"</p>
            <div class="testimonial_author">
              <strong>${t.author}</strong>
              <span>${t.role}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="tech_section">
      <div class="section_header">
        <h2 class="section_title">Tecnología de Vanguardia</h2>
        <p class="section_subtitle">Las mismas herramientas que usan los gigantes del streaming</p>
        <div class="section_line"></div>
      </div>
      <div class="tech_grid">
        ${techs.map((t,i)=>`
          <div class="tech_card" style="--delay:${i*0.1}s">
            <div class="tech_icon">${t.icon}</div>
            <h4>${t.name}</h4>
            <p>${t.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="stats_section">
      <div class="stats_content">
        <h2 class="stats_title">${app} en Números</h2>
        <p class="stats_subtitle">Cifras que demuestran nuestra calidad</p>
      </div>
      <div class="stats_grid">
        ${stats.map(s=>`
          <div class="stat_box">
            <div class="stat_number" data-count="${s.number}">0${s.suffix}</div>
            <div class="stat_label">${s.label}</div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="cta_section">
      <div class="cta_content">
        <h2 class="cta_title">Crea Contenido Profesional en Minutos</h2>
        <p class="cta_subtitle">
          Únete a miles de creadores que ya optimizan, editan, convierten y extraen audio de sus videos con ${app}. Sin instalación, sin registro, sin complicaciones. Solo resultados profesionales al instante.
        </p>
        <div class="cta_features">
          <div class="cta_feature">
            <i class="fas fa-bolt"></i>
            <span>Procesamiento ultrarrápido</span>
          </div>
          <div class="cta_feature">
            <i class="fas fa-shield-alt"></i>
            <span>100% privado y seguro</span>
          </div>
          <div class="cta_feature">
            <i class="fas fa-infinity"></i>
            <span>Sin límites ni restricciones</span>
          </div>
        </div>
        <div class="cta_actions">
          <a href="/optimizar" class="btn_primary btn_large">
            <i class="fas fa-rocket"></i>
            <span>Comenzar Ahora Gratis</span>
          </a>
          <a href="/acerca" class="btn_secondary btn_large">
            <i class="fas fa-info-circle"></i>
            <span>Conocer ${app}</span>
          </a>
        </div>
        <div class="cta_footer">
          <p>Hecho con 💙 por ${autor} © ${lanzamiento}</p>
        </div>
      </div>
    </section>
  </div>
`;

export const init = () => {
  console.log(`✅ ${app} ${version} - Inicio cargado`);

  let roleActual = 0;
  const $roles = $('.role');
  setInterval(() => {
    $roles.removeClass('active');
    roleActual = (roleActual + 1) % $roles.length;
    $roles.eq(roleActual).addClass('active');
  }, 2500);

  wiVista('.hero_stats', () => {
    $('.hero_stats .stat_number').each(function() {
      const $num = $(this), target = parseInt($num.data('target'));
      let actual = 0;
      const timer = setInterval(() => {
        actual += target / 60;
        if (actual >= target) {
          $num.text(target + (target === 100 ? '%' : target === 8 ? 'K' : '+'));
          clearInterval(timer);
        } else {
          $num.text(Math.floor(actual));
        }
      }, 25);
    });
  });

  wiVista('.stats_section', () => {
    $('.stats_section .stat_number').each(function() {
      const $this = $(this), target = parseInt($this.data('count')), suffix = $this.text().replace(/[0-9]/g, '');
      let actual = 0;
      const timer = setInterval(() => {
        actual += target / 60;
        if (actual >= target) {
          $this.text(target + suffix);
          clearInterval(timer);
        } else {
          $this.text(Math.floor(actual) + suffix);
        }
      }, 25);
    });
  });

  wiVista('.features_grid', () => $('.feature_card').each((i, el) => setTimeout(() => $(el).addClass('visible'), i * 100)));
  wiVista('.nav_grid', () => $('.nav_card').each((i, el) => setTimeout(() => $(el).addClass('visible'), i * 100)));
  wiVista('.tech_grid', () => $('.tech_card').each((i, el) => setTimeout(() => $(el).addClass('visible'), i * 100)));
  wiVista('.testimonials_grid', () => $('.testimonial_card').each((i, el) => setTimeout(() => $(el).addClass('visible'), i * 100)));

  $('.floating_icon').on('mouseenter', function() {
    const tooltip = $(this).data('tooltip');
    const $tip = $('<div class="custom_tooltip"></div>').text(tooltip);
    $('body').append($tip);
    
    const iconRect = this.getBoundingClientRect();
    const tipWidth = $tip.outerWidth();
    const tipHeight = $tip.outerHeight();
    
    $tip.css({
      top: iconRect.top - tipHeight - 12 + 'px',
      left: iconRect.left + iconRect.width / 2 - tipWidth / 2 + 'px'
    });
    
    setTimeout(() => $tip.addClass('show'), 10);
  }).on('mouseleave', function() {
    $('.custom_tooltip').removeClass('show');
    setTimeout(() => $('.custom_tooltip').remove(), 200);
  });

  document.querySelectorAll('.particle').forEach((p) => {
    p.style.animationDelay = `${Math.random() * 5}s`;
    p.style.animationDuration = `${10 + Math.random() * 10}s`;
  });
};

export const cleanup = () => {
  console.log(`🧹 ${app} - Inicio limpiado`);
  $('.floating_icon').off();
  $('.custom_tooltip').remove();
};
import{j as e}from"./vendor-gzd0YkcT.js";import{c as d,w as l,d as v,S as p}from"./main-BiFLC0Uw.js";import"./main-BKd-TJZg.js";const f=[{icon:"fa-compress-arrows-alt",title:"Optimizar",desc:"Reduce el tamaño de tus videos sin perder calidad. Compresión inteligente con FFmpeg.",color:"--success",link:"/optimizar",emoji:"🚀"},{icon:"fa-palette",title:"Editar",desc:"Ajusta brillo, contraste, velocidad y aplica filtros profesionales a tus videos.",color:"--Mora",link:"/editar",emoji:"🎨"},{icon:"fa-exchange-alt",title:"Convertir",desc:"Transforma entre MP4, MKV, AVI, MOV, WEBM y FLV con calidad profesional.",color:"--info",link:"/conversor",emoji:"🔄"},{icon:"fa-globe",title:"Online",desc:"Visualiza videos de YouTube, TikTok, Facebook y Twitch sin anuncios ni distracciones.",color:"--warning",link:"/online",emoji:"🌐"}],_=[{number:4,label:"Herramientas Potentes",suffix:"+"},{number:100,label:"Privacidad Garantizada",suffix:"%"},{number:10,label:"Formatos Soportados",suffix:"+"},{number:4,label:"Resolución Máxima",suffix:"K"}],m=["🎬 Edición Profesional de Video","🚀 Optimización Ultra Rápida","🔄 Conversión Universal","🌐 Visor Multiplataforma"],h=[{icon:"fa-server",title:"Procesamiento Local",desc:"Todo se procesa en tu máquina. Tus videos nunca salen de tu dispositivo. Privacidad total garantizada.",gradient:"linear-gradient(135deg, #00f3ff 0%, #0EBEFF 100%)"},{icon:"fa-bolt",title:"Velocidad Extrema",desc:"Aprovecha todo el poder de tu hardware con FFmpeg. Conversiones y renderizados ultrarrápidos.",gradient:"linear-gradient(135deg, #ffa726 0%, #ff9800 100%)"},{icon:"fa-sliders-h",title:"Control Profesional",desc:"Ajusta codecs, bitrates, resoluciones y filtros con precisión de nivel experto.",gradient:"linear-gradient(135deg, #7000FF 0%, #9442ff 100%)"},{icon:"fa-shield-alt",title:"100% Gratuito",desc:"Sin marcas de agua, sin límites, sin suscripciones. Todas las funciones disponibles siempre.",gradient:"linear-gradient(135deg, #29C72E 0%, #3cd741 100%)"}],y=()=>`
  <div class="inicio_container">
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero_bg_gradient"></div>
      <div class="hero_particles">
        ${Array.from({length:20},(a,t)=>`<div class="particle" style="--i: ${t}"></div>`).join("")}
      </div>
      
      <div class="hero_content">
        <div class="hero_badge">
          <i class="fas fa-sparkles"></i>
          <span>${p()} Creador!</span>
        </div>
        
        <h1 class="hero_title">
          Crea Videos Increíbles con
          <span class="gradient_text">${d}</span>
        </h1>
        
        <div class="hero_roles">
          ${m.map((a,t)=>`<span class="role ${t===0?"active":""}">${a}</span>`).join("")}
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
          <img src="/videowii/hero.webp" 
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
        <h2 class="section_title">¿Por qué elegir ${d}?</h2>
        <p class="section_subtitle">Herramientas profesionales al alcance de todos</p>
        <div class="section_line"></div>
      </div>
      <div class="features_grid">
        ${h.map((a,t)=>`
          <div class="feature_card" style="--delay: ${t*.1}s">
            <div class="feature_icon" style="background: ${a.gradient}">
              <i class="fas ${a.icon}"></i>
            </div>
            <h3>${a.title}</h3>
            <p>${a.desc}</p>
          </div>
        `).join("")}
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
        ${f.map((a,t)=>`
          <a href="${a.link}" class="nav_card" data-page="${a.link.slice(1)}" style="--delay: ${t*.1}s">
            <div class="nav_card_header">
              <div class="nav_card_icon" style="background: linear-gradient(135deg, var(${a.color}) 0%, var(--hv) 100%);">
                <i class="fas ${a.icon}"></i>
              </div>
              <div class="nav_card_emoji">${a.emoji}</div>
            </div>
            <h3 class="nav_card_title">${a.title}</h3>
            <p class="nav_card_desc">${a.desc}</p>
            <div class="nav_card_arrow">
              <span>Explorar</span>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        `).join("")}
      </div>
    </section>

    <!-- ESTADÍSTICAS DESTACADAS -->
    <section class="stats_section">
      <div class="stats_content">
        <h2 class="stats_title">VideoWii en Números</h2>
        <p class="stats_subtitle">Potencia y versatilidad para tus proyectos</p>
      </div>
      <div class="stats_grid">
        ${_.map(a=>`
          <div class="stat_box">
            <div class="stat_number" data-count="${a.number}">0${a.suffix}</div>
            <div class="stat_label">${a.label}</div>
          </div>
        `).join("")}
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
`,C=()=>{console.log(`✅ Inicio de ${d} cargado`);const a=e(".hero_roles .role");let t=0;setInterval(()=>{a.removeClass("active"),t=(t+1)%a.length,a.eq(t).addClass("active")},3e3),l(".hero_stats",()=>{e(".hero_stats .stat_number").each(function(){const s=e(this),i=parseInt(s.data("target"));let c=0;const o=i/60,r=setInterval(()=>{if(c+=o,c>=i){let n=i;i===100?n+="%":i===4&&s.next().text().includes("Calidad")?n+="K":i===4&&(n+="+"),s.text(n),clearInterval(r)}else s.text(Math.floor(c))},25)})}),l(".stats_section",()=>{e(".stats_section .stat_number").each(function(){const s=e(this),i=parseInt(s.data("count")),c=s.text().replace(/[0-9]/g,"");let o=0;const r=i/60,n=setInterval(()=>{o+=r,o>=i?(s.text(i+c),clearInterval(n)):s.text(Math.floor(o)+c)},25)})}),l(".features_grid",()=>{e(".feature_card").each((s,i)=>{setTimeout(()=>e(i).addClass("visible"),s*100)})}),l(".nav_grid",()=>{e(".nav_card").each((s,i)=>{setTimeout(()=>e(i).addClass("visible"),s*100)})}),l(".tech_grid",()=>{e(".tech_card").each((s,i)=>{setTimeout(()=>e(i).addClass("visible"),s*100)})}),e(".floating_icon").on("click",function(){const s=e(this).data("link");s&&(v(this,"¡Vamos! 🎬","success",1e3),setTimeout(()=>{e('.winav_item[data-page="'+s.replace("/","")+'"]').click()},300))}),e(".tech_card").on("mouseenter",function(){const s=e(this).data("tech");v(this,{ffmpeg:"¡El estándar de la industria! 🎥",nodejs:"¡JavaScript en el servidor! 🟢",vite:"¡Velocidad de desarrollo extrema! ⚡",jquery:"¡Clásico y confiable! 🔧"}[s]||"Tecnología potente","info",2e3)}),document.querySelectorAll(".particle").forEach((s,i)=>{const c=Math.random()*5,o=10+Math.random()*10;s.style.animationDelay=`${c}s`,s.style.animationDuration=`${o}s`})},k=()=>{console.log("🧹 Inicio limpiado"),e(".floating_icon, .tech_card").off("click mouseenter")};export{k as cleanup,C as init,y as render};

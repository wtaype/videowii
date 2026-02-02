import{j as s}from"./vendor-gzd0YkcT.js";import{c as i,v as l,a as c,l as d,b as n,w as o}from"./main-C39_l-ef.js";import"./main-DKxQ5YHL.js";const r=[{emoji:"🎬",title:"El Primer Video",desc:'La primera película de la historia fue "La salida de los obreros de la fábrica", filmada por los hermanos Lumière en 1895. Duraba solo 46 segundos.',color:"#FF6B6B"},{emoji:"📦",title:"Compresión Gigante",desc:"Un video 4K sin comprimir puede pesar más de 6 GB por minuto. Gracias a codecs como H.264 y H.265, podemos verlos en streaming con poco ancho de banda.",color:"#4ECDC4"},{emoji:"👁️",title:"Ojo vs Cámara",desc:"Si el ojo humano fuera una cámara digital, tendría una resolución de aproximadamente 576 megapíxeles. ¡Supera a cualquier cámara 8K actual!",color:"#95E1D3"},{emoji:"🎮",title:"FPS y Realismo",desc:'El cine tradicional usa 24 fps para ese "look cinematográfico". Los videojuegos y deportes suelen usar 60 fps para movimientos más fluidos.',color:"#F38181"},{emoji:"🌐",title:"Streaming Mundial",desc:"Más del 80% del tráfico total de internet en el mundo es video. YouTube y Netflix consumen la mayor parte del ancho de banda global.",color:"#AA96DA"},{emoji:"🟢",title:"Pantalla Verde",desc:'El "Chroma Key" se usa porque el verde es el color más alejado del tono de piel humano, facilitando su sustitución digital.',color:"#FCBAD3"}],t=[{icon:"fa-brands fa-js",name:"JavaScript ES6+",desc:"Lógica moderna y eficiente",color:"#F7DF1E"},{icon:"fa-solid fa-film",name:"FFmpeg",desc:"Motor de procesamiento de video",color:"#4CAF50"},{icon:"fa-brands fa-node-js",name:"Node.js",desc:"Backend robusto y escalable",color:"#339933"},{icon:"fa-solid fa-wand-magic-sparkles",name:"WebAssembly",desc:"Rendimiento nativo en el navegador",color:"#654FF0"}],m=[{icon:"fa-code",label:"Líneas de Código",value:"15,000+",color:"#FF6B6B"},{icon:"fa-clock",label:"Horas de Desarrollo",value:"500+",color:"#4ECDC4"},{icon:"fa-users",label:"Usuarios Activos",value:"10,000+",color:"#95E1D3"},{icon:"fa-star",label:"Valoración",value:"4.9/5",color:"#FFD93D"}],v=[{icon:"⚡",title:"Potencia Local",desc:"Demostrar que la web moderna es capaz de realizar tareas pesadas como la edición de video directamente en el navegador.",gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},{icon:"🔒",title:"Privacidad Total",desc:`Tus videos son tuyos. ${i} procesa todo en tu dispositivo, sin subir archivos a servidores externos vulnerables.`,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"},{icon:"🎨",title:"Simplicidad",desc:"Hacer que herramientas complejas como FFmpeg sean accesibles para todos a través de una interfaz amigable y hermosa.",gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"}],p=[{icon:"fa-compress",title:"Bitrate Adecuado",desc:"No necesitas bitrates excesivos. Para 1080p en web, 4-6 Mbps suele ser suficiente para mantener una gran calidad visual.",color:"#FF6B6B"},{icon:"fa-layer-group",title:"Formatos Modernos",desc:"Usa MP4 (H.264) para máxima compatibilidad o WebM (VP9) para mejor compresión en la web.",color:"#4ECDC4"},{icon:"fa-volume-up",title:"Audio Importa",desc:"El audio es el 50% del video. Un mal audio arruina incluso la mejor imagen. Usa compresión AAC a 128kbps o más.",color:"#95E1D3"},{icon:"fa-mobile-alt",title:"Piensa en el Móvil",desc:"La mayoría consume video en celulares. Asegúrate de que tus textos y elementos importantes sean legibles en pantallas pequeñas.",color:"#F38181"}],h=()=>`
  <div class="acerca_container">
    <!-- HERO SECTION -->
    <section class="acer_hero">
      <div class="hero_content">
        <h1 class="hero_title">
          <span class="hero_icon">🎬</span>
          ${i}
          <span class="hero_badge">${l}</span>
        </h1>
        <p class="hero_subtitle">
          Editor de Video Profesional • 100% Gratis • Sin Límites
        </p>
        <p class="hero_description">
          Un proyecto nacido de la pasión por el video y la tecnología web.
          Transformando la creatividad en herramientas poderosas, privadas y accesibles para todos.
        </p>
        <div class="hero_stats">
          ${m.map(e=>`
            <div class="hero_stat" style="--stat-color: ${e.color}">
              <i class="fas ${e.icon}"></i>
              <div class="stat_value">${e.value}</div>
              <div class="stat_label">${e.label}</div>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="hero_visual">
        <img src="/videowii/hero.webp" alt="${i} Hero" class="hero_img" loading="lazy">
        <div class="hero_gradient"></div>
      </div>
    </section>

    <!-- TECNOLOGÍAS -->
    <section class="tecnologias_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-cogs"></i>
          Tecnologías de Vanguardia
        </h2>
        <p class="section_subtitle">
          Construido con las mejores herramientas del desarrollo web moderno
        </p>
        <div class="section_line"></div>
      </div>
      <div class="tecnologias_grid">
        ${t.map(e=>`
          <div class="tech_card" style="--tech-color: ${e.color}">
            <div class="tech_icon">
              <i class="${e.icon}"></i>
            </div>
            <h3 class="tech_name">${e.name}</h3>
            <p class="tech_desc">${e.desc}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- CURIOSIDADES -->
    <section class="curiosidades_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-lightbulb"></i>
          Curiosidades del Mundo del Video
        </h2>
        <p class="section_subtitle">
          Datos fascinantes sobre la tecnología que mueve nuestras pantallas
        </p>
        <div class="section_line"></div>
      </div>
      <div class="curiosidades_grid">
        ${r.map((e,a)=>`
          <div class="curiosidad_card" style="--card-color: ${e.color}; --card-delay: ${a*.1}s">
            <div class="curiosidad_header">
              <span class="curiosidad_emoji">${e.emoji}</span>
              <div class="curiosidad_number">${String(a+1).padStart(2,"0")}</div>
            </div>
            <h3 class="curiosidad_title">${e.title}</h3>
            <p class="curiosidad_desc">${e.desc}</p>
            <div class="curiosidad_decoration"></div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- PROYECTO -->
    <section class="proyecto_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-rocket"></i>
          Acerca del Proyecto
        </h2>
        <p class="section_subtitle">
          La visión detrás de ${i}
        </p>
        <div class="section_line"></div>
      </div>
      <div class="proyecto_content">
        <div class="proyecto_historia">
          <div class="historia_icon">
            <i class="fas fa-code"></i>
          </div>
          <h3>Nuestra Historia</h3>
          <div class="historia_timeline">
            <div class="timeline_item">
              <div class="timeline_dot"></div>
              <div class="timeline_content">
                <h4>El Desafío</h4>
                <p>
                  <strong>${i}</strong> nació como un desafío técnico: ¿Es posible crear un editor y conversor de video completo que funcione 100% en el navegador?
                </p>
              </div>
            </div>
            <div class="timeline_item">
              <div class="timeline_dot"></div>
              <div class="timeline_content">
                <h4>La Solución</h4>
                <p>
                  Utilizando tecnologías de vanguardia como <strong>WebAssembly y FFmpeg</strong>, logramos traer la potencia del escritorio a la web.
                </p>
              </div>
            </div>
            <div class="timeline_item">
              <div class="timeline_dot"></div>
              <div class="timeline_content">
                <h4>El Resultado</h4>
                <p>
                  Hoy, ${i} es una suite completa que permite a creadores novatos y expertos manipular video con facilidad, privacidad y rapidez. 🚀
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="proyecto_mision">
          ${v.map((e,a)=>`
            <div class="mision_card" style="--mision-gradient: ${e.gradient}; --mision-delay: ${a*.15}s">
              <div class="mision_icon">${e.icon}</div>
              <h4 class="mision_title">${e.title}</h4>
              <p class="mision_desc">${e.desc}</p>
              <div class="mision_shine"></div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- CREADOR -->
    <section class="creador_section">
      <div class="creador_card">
        <div class="creador_visual">
          <img src="/videowii/wilder.webp" alt="${c}" class="creador_foto">
          <div class="creador_badge">
            <i class="fas fa-award"></i>
            <span>Creator</span>
          </div>
        </div>
        <div class="creador_info">
          <h3>${c}</h3>
          <div class="rol">
            <i class="fas fa-code"></i>
            Desarrollador Full Stack & Creador de ${i}
          </div>
          <p>
            Apasionado por llevar la web a sus límites. Creo firmemente que el navegador es el sistema operativo del futuro.
          </p>
          <p>
            ${i} es la culminación de meses de investigación y desarrollo para crear una experiencia de usuario fluida y potente.
            ¡Espero que disfrutes usando estas herramientas tanto como yo disfruté creándolas! 🚀✨
          </p>
          <div class="creador_social">
            <a href="https://github.com/wtaype" target="_blank" class="social_link github" title="GitHub">
              <i class="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <a href="${d}" target="_blank" class="social_link portfolio" title="Portfolio">
              <i class="fas fa-globe"></i>
              <span>Portfolio</span>
            </a>
            <a href="mailto:wilder.taype@example.com" class="social_link email" title="Email">
              <i class="fas fa-envelope"></i>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CONSEJOS FINALES -->
    <section class="consejos_finales">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-star"></i>
          Tips para Creadores
        </h2>
        <p class="section_subtitle">
          Mejora la calidad de tus producciones con estos consejos profesionales
        </p>
        <div class="section_line"></div>
      </div>
      <div class="consejos_grid">
        ${p.map((e,a)=>`
          <div class="consejo_card" style="--consejo-color: ${e.color}; --consejo-delay: ${a*.1}s">
            <div class="consejo_icon_wrapper">
              <i class="fas ${e.icon}"></i>
            </div>
            <div class="consejo_content">
              <h3 class="consejo_title">${e.title}</h3>
              <p class="consejo_desc">${e.desc}</p>
            </div>
            <div class="consejo_arrow">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- MENSAJE FINAL -->
    <section class="mensaje_final">
      <div class="mensaje_content">
        <h2>
          <span class="mensaje_icon">🎬</span>
          Sigue Creando Historias Increíbles
          <span class="mensaje_icon">✨</span>
        </h2>
        <p class="mensaje_text">
          El video es el medio más poderoso para transmitir emociones e ideas.
          No dejes que la tecnología sea un obstáculo para tu creatividad.
        </p>
        <p class="mensaje_highlight">
          ¡El mundo espera ver lo que vas a crear! 🚀
        </p>
        <div class="mensaje_footer">
          <p>Hecho con 💙 por ${c} © ${n}</p>
          <div class="mensaje_version">${l}</div>
        </div>
      </div>
    </section>
  </div>
`,g=()=>{console.log(`✅ Acerca de ${i} ${l} cargado`),o(".curiosidad_card",()=>{s(".curiosidad_card").each((e,a)=>{setTimeout(()=>{s(a).addClass("animate-in")},e*100)})}),o(".mision_card",()=>{s(".mision_card").each((e,a)=>{setTimeout(()=>{s(a).addClass("animate-in")},e*150)})}),o(".consejo_card",()=>{s(".consejo_card").each((e,a)=>{setTimeout(()=>{s(a).addClass("animate-in")},e*120)})}),o(".tech_card",()=>{s(".tech_card").each((e,a)=>{setTimeout(()=>{s(a).addClass("animate-in")},e*100)})}),s(window).on("scroll",()=>{const e=s(window).scrollTop();s(".hero_img").css("transform",`translateY(${e*.3}px)`)})},b=()=>{console.log("🧹 Acerca limpiado"),s(window).off("scroll")};export{b as cleanup,g as init,h as render};

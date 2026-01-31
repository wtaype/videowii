import{j as a}from"./vendor-gzd0YkcT.js";import{w as i}from"./main-BKW6xqcV.js";import"./main-D5LRVxrB.js";const o=[{emoji:"🎬",title:"El Primer Video",desc:'La primera película de la historia fue "La salida de los obreros de la fábrica", filmada por los hermanos Lumière en 1895. Duraba solo 46 segundos.'},{emoji:"�",title:"Compresión Gigante",desc:"Un video 4K sin comprimir puede pesar más de 6 GB por minuto. Gracias a codecs como H.264 y H.265, podemos verlos en streaming con poco ancho de banda."},{emoji:"👁️",title:"Ojo vs Cámara",desc:"Si el ojo humano fuera una cámara digital, tendría una resolución de aproximadamente 576 megapíxeles. ¡Supera a cualquier cámara 8K actual!"},{emoji:"🎮",title:"FPS y Realismo",desc:'El cine tradicional usa 24 fps para ese "look cinematográfico". Los videojuegos y deportes suelen usar 60 fps para movimientos más fluidos.'},{emoji:"�",title:"Streaming Mundial",desc:"Más del 80% del tráfico total de internet en el mundo es video. YouTube y Netflix consumen la mayor parte del ancho de banda global."},{emoji:"🟢",title:"Pantalla Verde",desc:'El "Chroma Key" se usa porque el verde es el color más alejado del tono de piel humano, facilitando su sustitución digital.'}],t=[{icon:"�",title:"Potencia Local",desc:"Demostrar que la web moderna es capaz de realizar tareas pesadas como la edición de video directamente en el navegador."},{icon:"�",title:"Privacidad Total",desc:"Tus videos son tuyos. VideoWii procesa todo en tu dispositivo, sin subir archivos a servidores externos vulnerables."},{icon:"�",title:"Simplicidad",desc:"Hacer que herramientas complejas como FFmpeg sean accesibles para todos a través de una interfaz amigable y hermosa."}],c=[{icon:"fa-compress",title:"Bitrate Adecuado",desc:"No necesitas bitrates excesivos. Para 1080p en web, 4-6 Mbps suele ser suficiente para mantener una gran calidad visual."},{icon:"fa-layer-group",title:"Formatos Modernos",desc:"Usa MP4 (H.264) para máxima compatibilidad o WebM (VP9) para mejor compresión en la web."},{icon:"fa-volume-up",title:"Audio Importa",desc:"El audio es el 50% del video. Un mal audio arruina incluso la mejor imagen. Usa compresión AAC a 128kbps o más."},{icon:"fa-mobile-alt",title:"Piensa en el Móvil",desc:"La mayoría consume video en celulares. Asegúrate de que tus textos y elementos importantes sean legibles en pantallas pequeñas."}],d=()=>`
  <div class="acerca_container">
    <!-- HERO SECTION -->
    <section class="acer_hero">
      <h1>🎬✨ VideoWii</h1>
      <p>
        Un proyecto nacido de la pasión por el video y la tecnología web.
        Transformando la creatividad en herramientas poderosas, privadas y accesibles para todos.
      </p>
      <img src="/videowii/hero.png" alt="VideoWii Hero" class="acer_hero_img" loading="lazy">
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
        ${o.map(e=>`
          <div class="curiosidad_card">
            <span class="curiosidad_emoji">${e.emoji}</span>
            <h3 class="curiosidad_title">${e.title}</h3>
            <p class="curiosidad_desc">${e.desc}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- PROYECTO -->
    <section class="proyecto_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-project-diagram"></i>
          Acerca del Proyecto
        </h2>
        <p class="section_subtitle">
          La visión detrás de VideoWii
        </p>
        <div class="section_line"></div>
      </div>
      <div class="proyecto_content">
        <div class="proyecto_historia">
          <h3><i class="fas fa-code"></i> Nuestra Historia</h3>
          <p>
            <strong>VideoWii</strong> nació como un desafío técnico: ¿Es posible crear un editor y conversor de video completo que funcione 100% en el navegador?
          </p>
          <p>
            Tradicionalmente, la edición de video requería software pesado y costoso. Queríamos cambiar eso.
            Utilizando tecnologías de vanguardia como <strong>WebAssembly y FFmpeg</strong>, logramos traer la potencia del escritorio a la web.
          </p>
          <p>
            Hoy, VideoWii es una suite completa que permite a creadores novatos y expertos manipular video
            con facilidad, privacidad y rapidez, sin depender de costosas suscripciones o hardware de última generación. �
          </p>
        </div>

        <div class="proyecto_mision">
          ${t.map(e=>`
            <div class="mision_card">
              <span class="mision_icon">${e.icon}</span>
              <h4 class="mision_title">${e.title}</h4>
              <p class="mision_desc">${e.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- CREADOR -->
    <section class="creador_section">
      <div class="creador_content">
        <img src="/videowii/wilder.webp" alt="Wilder Taype" class="creador_foto">
        <div class="creador_info">
          <h3>Wilder Taype</h3>
          <div class="rol">Desarrollador Full Stack & Creador de VideoWii</div>
          <p>
            Apasionado por llevar la web a sus límites. Creo firmemente que el navegador es el sistema operativo del futuro.
          </p>
          <p>
            VideoWii es la culminación de meses de investigación y desarrollo para crear una experiencia de usuario fluida y potente.
            ¡Espero que disfrutes usando estas herramientas tanto como yo disfruté creándolas! �✨
          </p>
          <div class="creador_social">
            <a href="https://github.com/wtaype" target="_blank" class="social_link" title="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://wtaype.github.io/" target="_blank" class="social_link" title="Portfolio">
              <i class="fas fa-globe"></i>
            </a>
            <a href="mailto:wilder.taype@example.com" class="social_link" title="Email">
              <i class="fas fa-envelope"></i>
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
          Mejora la calidad de tus producciones con estos consejos
        </p>
        <div class="section_line"></div>
      </div>
      <div class="consejos_grid">
        ${c.map(e=>`
          <div class="consejo_card">
            <div class="consejo_header">
              <div class="consejo_icon">
                <i class="fas ${e.icon}"></i>
              </div>
              <h3 class="consejo_title">${e.title}</h3>
            </div>
            <p class="consejo_desc">${e.desc}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- MENSAJE FINAL -->
    <section class="mensaje_final" style="text-align: center; padding: 6vh 0; background: var(--bg3); border-radius: 2vh; margin-bottom: 4vh;">
      <h2 style="font-size: var(--fz_x1); font-weight: 800; color: var(--tx); margin-bottom: 2vh;">
        🎬 Sigue Creando Historias Increíbles 🎬
      </h2>
      <p style="font-size: var(--fz_m4); color: var(--txe); max-width: 700px; margin: 0 auto 3vh; line-height: 1.8;">
        El video es el medio más poderoso para transmitir emociones e ideas.
        No dejes que la tecnología sea un obstáculo para tu creatividad.
      </p>
      <p style="font-size: var(--fz_m3); color: var(--mco); font-weight: 700;">
        ¡El mundo espera ver lo que vas a crear! �
      </p>
      <p style="font-size: var(--fz_m2); color: var(--txe); margin-top: 3vh;">
        Hecho con 💙 por Wilder Taype © ${new Date().getFullYear()}
      </p>
    </section>
  </div>
`,p=()=>{console.log("✅ Acerca completado"),i(".curiosidad_card",()=>{a(".curiosidad_card").each((e,s)=>{setTimeout(()=>{a(s).css({opacity:"0",transform:"scale(0.8)"}),setTimeout(()=>{a(s).css({transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",opacity:"1",transform:"scale(1)"})},50)},e*80)})}),i(".mision_card",()=>{a(".mision_card").each((e,s)=>{setTimeout(()=>{a(s).css({opacity:"0",transform:"translateY(30px)"}),setTimeout(()=>{a(s).css({transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",opacity:"1",transform:"translateY(0)"})},50)},e*150)})}),i(".consejo_card",()=>{a(".consejo_card").each((e,s)=>{setTimeout(()=>{a(s).css({opacity:"0",transform:"translateX(-30px)"}),setTimeout(()=>{a(s).css({transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",opacity:"1",transform:"translateX(0)"})},50)},e*100)})})},m=()=>{console.log("🧹 Acerca limpiado")};export{m as cleanup,p as init,d as render};

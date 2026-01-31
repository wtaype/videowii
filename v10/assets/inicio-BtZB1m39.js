import{j as e}from"./vendor-gzd0YkcT.js";import{c as r,w as n,d as v,S as p}from"./main-DOKoElxx.js";import"./main-BDIfPUC_.js";const _=[{icon:"fa-compress-arrows-alt",title:"Optimizar",desc:"Reduce el tamaño de tus videos MP4, AVI y más sin perder calidad usando FFmpeg",color:"--success",link:"/optimizar",emoji:"🚀"},{icon:"fa-palette",title:"Editar",desc:"Mejora tus videos: ajusta brillo, contraste, velocidad y filtros profesionalmente",color:"--Mora",link:"/editar",emoji:"🎨"},{icon:"fa-exchange-alt",title:"Convertir",desc:"Transforma tus videos a MP4, MKV, AVI, MOV, WEBM y FLV fácilmente",color:"--info",link:"/conversor",emoji:"🔄"},{icon:"fa-globe",title:"Online",desc:"Visualiza videos de YouTube, TikTok, Facebook y Twitch sin anuncios",color:"--warning",link:"/online",emoji:"🌐"}],f=[{number:4,label:"Herramientas de Video",suffix:"+"},{number:100,label:"Privacidad Total",suffix:"%"},{number:10,label:"Formatos Soportados",suffix:"+"},{number:4,label:"Calidad Soportada",suffix:"K"}],m=["🎬 Edición Profesional","🚀 Optimización Rápida","🔄 Conversión Universal","🌐 Visor Multiplataforma"],b=()=>`
  <div class="inicio_container">
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero_content">
        <div class="hero_saludo">
          <span class="saludo_texto">${p()} Creador!</span>
          <span class="saludo_emoji">🎥</span>
        </div>
        <h1 class="hero_title">
          Bienvenido a <span class="gradient_text">${r}</span>
        </h1>
        <div class="hero_roles">
          ${m.map((i,o)=>`<span class="role ${o===0?"active":""}">${i}</span>`).join("")}
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
          <img src="/loveye/v10/hero.png" 
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
        <h2 class="section_title">¿Por qué ${r}?</h2>
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
        ${_.map(i=>`
          <a href="${i.link}" class="nav_card" data-page="${i.link.slice(1)}">
            <div class="nav_card_icon" style="background: linear-gradient(135deg, var(${i.color}) 0%, var(--hv) 100%); color: var(--txa);">
              <i class="fas ${i.icon}"></i>
            </div>
            <div class="nav_card_emoji">${i.emoji}</div>
            <h3 class="nav_card_title">${i.title}</h3>
            <p class="nav_card_desc">${i.desc}</p>
            <div class="nav_card_arrow">
              <i class="fas fa-arrow-right"></i> Ir a ${i.title}
            </div>
          </a>
        `).join("")}
      </div>
    </section>

    <!-- ESTADÍSTICAS -->
    <section class="stats_section">
      <div class="stats_grid">
        ${f.map(i=>`
          <div class="stat_box">
            <div class="stat_number" data-count="${i.number}">0${i.suffix}</div>
            <div class="stat_label">${i.label}</div>
          </div>
        `).join("")}
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
`,j=()=>{console.log(`✅ Inicio de ${r} cargado`);const i=e(".hero_roles .role");let o=0;setInterval(()=>{i.removeClass("active"),o=(o+1)%i.length,i.eq(o).addClass("active")},3e3),n(".hero_stats",()=>{e(".hero_stats .stat_number").each(function(){const a=e(this),s=parseInt(a.data("target"));let t=0;const l=s/50,d=setInterval(()=>{if(t+=l,t>=s){let c=s;s===100&&(c+="%"),s===4&&a.next().text().includes("Calidad")?c+="K":s===4&&(c+="+"),a.text(c),clearInterval(d)}else a.text(Math.floor(t))},30)})}),n(".stats_section",()=>{e(".stats_section .stat_number").each(function(){const a=e(this),s=parseInt(a.data("count")),t=a.text().replace(/[0-9]/g,"");let l=0;const d=s/60,c=setInterval(()=>{l+=d,l>=s?(a.text(s+t),clearInterval(c)):a.text(Math.floor(l)+t)},30)})}),n(".features_grid",()=>{e(".feature_card").each((a,s)=>{setTimeout(()=>e(s).addClass("visible"),a*150)})}),n(".nav_grid",()=>{e(".nav_card").each((a,s)=>{setTimeout(()=>{e(s).css({opacity:"1",transform:"translateY(0)"})},a*100)})}),n(".tech_grid",()=>{e(".tech_card").each((a,s)=>{setTimeout(()=>e(s).addClass("visible"),a*120)})}),e(".floating_icon").on("click",function(){const a=e(this).data("link");a&&(v(this,"¡Vamos! 🎬","success",1e3),e('.winav_item[data-page="'+a.replace("/","")+'"]').click())}),e(".tech_card").on("mouseenter",function(){const a=e(this).data("tech");v(this,{ffmpeg:"¡Potencia de video pura!",nodejs:"¡Backend JavaScript ultrarrápido!",vite:"¡Velocidad de desarrollo sónica!",jquery:"¡Clásico confiable!"}[a]||"Tecnología potente","info",2e3)}),sessionStorage.getItem("videowii_welcome")||setTimeout(()=>{sessionStorage.setItem("videowii_welcome","true")},1e3)},$=()=>{console.log("🧹 Inicio limpiado"),e(".floating_icon, .tech_card").off("click mouseenter")};export{$ as cleanup,j as init,b as render};

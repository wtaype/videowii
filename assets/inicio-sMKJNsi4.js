import{j as e}from"./vendor-gzd0YkcT.js";import{c as n,v as m,b as d,a as u,w as r,S as f}from"./main-Dp3mnYo7.js";import"./main-C8t1F894.js";const v=[{icon:"fa-compress-arrows-alt",title:"Optimizar",desc:"Reduce hasta 80% el tamaño sin sacrificar calidad. Motor FFmpeg profesional.",color:"--success",link:"/optimizar",emoji:"🚀",tooltip:"Comprime videos manteniendo calidad HD"},{icon:"fa-palette",title:"Editar",desc:"Ajusta brillo, contraste, velocidad, recorta y aplica filtros cinematográficos.",color:"--Mora",link:"/editar",emoji:"🎨",tooltip:"Editor profesional con efectos en tiempo real"},{icon:"fa-exchange-alt",title:"Convertir",desc:"Transforma entre 15+ formatos: MP4, MKV, AVI, MOV, WEBM, FLV y más.",color:"--info",link:"/conversor",emoji:"🔄",tooltip:"Conversor universal sin pérdida de calidad"},{icon:"fa-wand-magic-sparkles",title:"Extraer",desc:"Extrae audio en MP3 o captura frames en alta calidad desde cualquier video.",color:"--warning",link:"/extraer",emoji:"✨",tooltip:"Extrae audio y frames profesionales"}],p=[{number:5,label:"Herramientas Pro",suffix:"+",icon:"fa-tools"},{number:100,label:"Privacidad Total",suffix:"%",icon:"fa-shield-alt"},{number:15,label:"Formatos Soportados",suffix:"+",icon:"fa-file-video"},{number:8,label:"Resolución Max",suffix:"K",icon:"fa-tv"}],_=["🎬 Edición Profesional con FFmpeg","🚀 Compresión Inteligente hasta 80%","🔄 Conversión Universal Sin Límites","✨ Extracción de Audio y Frames HD","✂️ Recorte de Precisión Milimétrica","🎨 Filtros y Efectos Cinematográficos"],h=[{icon:"fa-server",title:"Procesamiento 100% Local",desc:"Privacidad absoluta. Tus videos nunca abandonan tu dispositivo. Cero servidores externos vulnerables.",gradient:"linear-gradient(135deg, #00f3ff 0%, #0EBEFF 100%)"},{icon:"fa-bolt",title:"Velocidad Extrema",desc:"Motor FFmpeg con aceleración GPU. Procesamiento hasta 5x más rápido que herramientas tradicionales.",gradient:"linear-gradient(135deg, #ffa726 0%, #ff9800 100%)"},{icon:"fa-sliders-h",title:"Control Total Profesional",desc:"Configura codecs, bitrates, FPS, resoluciones y metadatos con precisión de nivel experto.",gradient:"linear-gradient(135deg, #7000FF 0%, #9442ff 100%)"},{icon:"fa-shield-alt",title:"100% Gratis Sin Restricciones",desc:"Sin marcas de agua, sin límites de tamaño, sin registro obligatorio, sin planes premium ocultos.",gradient:"linear-gradient(135deg, #29C72E 0%, #3cd741 100%)"}],g=[{icon:"⚡",name:"FFmpeg",desc:"Motor de procesamiento usado por Netflix y YouTube"},{icon:"🎯",name:"WebAssembly",desc:"Rendimiento nativo en navegador sin instalación"},{icon:"🔒",name:"Local First",desc:"Cero envío de datos a servidores externos"},{icon:"🚀",name:"Progressive Web",desc:"Instalable como app nativa en cualquier dispositivo"}],$=[{text:"Perfecto para mis videos de TikTok. Comprime sin perder calidad y es súper rápido. ¡Lo uso todos los días!",author:"María G.",role:"Creadora de Contenido"},{text:"La mejor herramienta gratuita que he probado. Sin marcas de agua ni trucos ocultos. Simplemente funciona.",author:"Carlos R.",role:"Editor de Video"},{text:"Uso VideoWii diariamente. La privacidad local es un diferencial increíble. Mis videos están seguros.",author:"Ana L.",role:"YouTuber Pro"}],C=()=>`
  <div class="inicio_container">
    <section class="hero">
      <div class="hero_bg"></div>
      <div class="hero_particles">${Array.from({length:15},(a,t)=>`<div class="particle" style="--i:${t}"></div>`).join("")}</div>
      
      <div class="hero_content">
        <div class="hero_badge">
          <i class="fas fa-sparkles"></i>
          <span>${f()}Tigre!</span>
        </div>
        <h1 class="hero_title">
          Editor de Video Pro con <span class="gradient_text">${n}</span>
        </h1>
        <div class="hero_version">${n} ${m} • ${d}</div>
        <div class="hero_roles">${_.map((a,t)=>`<span class="role ${t===0?"active":""}">${a}</span>`).join("")}</div>
        <p class="hero_subtitle">
          Plataforma completa de edición profesional para creadores digitales. Optimiza, edita, convierte y extrae audio de tus videos con tecnología FFmpeg de grado industrial. Totalmente gratis, privado y sin límites.
        </p>
        
        <div class="hero_stats">
          ${p.slice(0,3).map(a=>`
            <div class="stat_card">
              <div class="stat_icon"><i class="fas ${a.icon}"></i></div>
              <div class="stat_number" data-target="${a.number}">0</div>
              <div class="stat_label">${a.label}</div>
            </div>
          `).join("")}
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
          <img src="/videowii/hero.webp" alt="${n} - Editor Profesional" class="hero_img" loading="eager">
          <div class="img_badge">
            <i class="fas fa-check-circle"></i>
            <span>Powered by FFmpeg</span>
          </div>
        </div>
        ${v.map((a,t)=>`
          <div class="floating_icon icon${t+1}" data-tooltip="${a.tooltip}">
            <i class="fas ${a.icon}"></i>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="features">
      <div class="section_header">
        <h2 class="section_title">¿Por qué más de 10,000 creadores eligen ${n}?</h2>
        <p class="section_subtitle">Potencia profesional sin complicaciones ni costos ocultos</p>
        <div class="section_line"></div>
      </div>
      <div class="features_grid">
        ${h.map((a,t)=>`
          <div class="feature_card" style="--delay:${t*.1}s">
            <div class="feature_icon" style="background:${a.gradient}">
              <i class="fas ${a.icon}"></i>
            </div>
            <h3>${a.title}</h3>
            <p>${a.desc}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="nav_visual">
      <div class="section_header">
        <h2 class="section_title">Suite Completa de Herramientas</h2>
        <p class="section_subtitle">Todo lo que necesitas para crear contenido viral</p>
        <div class="section_line"></div>
      </div>
      <div class="nav_grid">
        ${v.map((a,t)=>`
          <a href="${a.link}" class="nav_card" style="--delay:${t*.1}s">
            <div class="nav_card_header">
              <div class="nav_card_icon" style="background:linear-gradient(135deg,var(${a.color}) 0%,var(--hv) 100%)">
                <i class="fas ${a.icon}"></i>
              </div>
              <div class="nav_card_emoji">${a.emoji}</div>
            </div>
            <h3>${a.title}</h3>
            <p>${a.desc}</p>
            <div class="nav_card_arrow">
              <span>Explorar</span>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        `).join("")}
      </div>
    </section>

    <section class="testimonials">
      <div class="section_header">
        <h2 class="section_title">Lo que dicen nuestros usuarios</h2>
        <p class="section_subtitle">Historias reales de creadores que confían en ${n}</p>
        <div class="section_line"></div>
      </div>
      <div class="testimonials_grid">
        ${$.map((a,t)=>`
          <div class="testimonial_card" style="--delay:${t*.1}s">
            <div class="testimonial_quote">
              <i class="fas fa-quote-left"></i>
            </div>
            <p class="testimonial_text">"${a.text}"</p>
            <div class="testimonial_author">
              <strong>${a.author}</strong>
              <span>${a.role}</span>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="tech_section">
      <div class="section_header">
        <h2 class="section_title">Tecnología de Vanguardia</h2>
        <p class="section_subtitle">Las mismas herramientas que usan los gigantes del streaming</p>
        <div class="section_line"></div>
      </div>
      <div class="tech_grid">
        ${g.map((a,t)=>`
          <div class="tech_card" style="--delay:${t*.1}s">
            <div class="tech_icon">${a.icon}</div>
            <h4>${a.name}</h4>
            <p>${a.desc}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="stats_section">
      <div class="stats_content">
        <h2 class="stats_title">${n} en Números</h2>
        <p class="stats_subtitle">Cifras que demuestran nuestra calidad</p>
      </div>
      <div class="stats_grid">
        ${p.map(a=>`
          <div class="stat_box">
            <div class="stat_number" data-count="${a.number}">0${a.suffix}</div>
            <div class="stat_label">${a.label}</div>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="cta_section">
      <div class="cta_content">
        <h2 class="cta_title">Crea Contenido Profesional en Minutos</h2>
        <p class="cta_subtitle">
          Únete a miles de creadores que ya optimizan, editan, convierten y extraen audio de sus videos con ${n}. Sin instalación, sin registro, sin complicaciones. Solo resultados profesionales al instante.
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
            <span>Conocer ${n}</span>
          </a>
        </div>
        <div class="cta_footer">
          <p>Hecho con 💙 por ${u} © ${d}</p>
        </div>
      </div>
    </section>
  </div>
`,P=()=>{console.log(`✅ ${n} ${m} - Inicio cargado`);let a=0;const t=e(".role");setInterval(()=>{t.removeClass("active"),a=(a+1)%t.length,t.eq(a).addClass("active")},2500),r(".hero_stats",()=>{e(".hero_stats .stat_number").each(function(){const i=e(this),s=parseInt(i.data("target"));let o=0;const c=setInterval(()=>{o+=s/60,o>=s?(i.text(s+(s===100?"%":s===8?"K":"+")),clearInterval(c)):i.text(Math.floor(o))},25)})}),r(".stats_section",()=>{e(".stats_section .stat_number").each(function(){const i=e(this),s=parseInt(i.data("count")),o=i.text().replace(/[0-9]/g,"");let c=0;const l=setInterval(()=>{c+=s/60,c>=s?(i.text(s+o),clearInterval(l)):i.text(Math.floor(c)+o)},25)})}),r(".features_grid",()=>e(".feature_card").each((i,s)=>setTimeout(()=>e(s).addClass("visible"),i*100))),r(".nav_grid",()=>e(".nav_card").each((i,s)=>setTimeout(()=>e(s).addClass("visible"),i*100))),r(".tech_grid",()=>e(".tech_card").each((i,s)=>setTimeout(()=>e(s).addClass("visible"),i*100))),r(".testimonials_grid",()=>e(".testimonial_card").each((i,s)=>setTimeout(()=>e(s).addClass("visible"),i*100))),e(".floating_icon").on("mouseenter",function(){const i=e(this).data("tooltip"),s=e('<div class="custom_tooltip"></div>').text(i);e("body").append(s);const o=this.getBoundingClientRect(),c=s.outerWidth(),l=s.outerHeight();s.css({top:o.top-l-12+"px",left:o.left+o.width/2-c/2+"px"}),setTimeout(()=>s.addClass("show"),10)}).on("mouseleave",function(){e(".custom_tooltip").removeClass("show"),setTimeout(()=>e(".custom_tooltip").remove(),200)}),document.querySelectorAll(".particle").forEach(i=>{i.style.animationDelay=`${Math.random()*5}s`,i.style.animationDuration=`${10+Math.random()*10}s`})},F=()=>{console.log(`🧹 ${n} - Inicio limpiado`),e(".floating_icon").off(),e(".custom_tooltip").remove()};export{F as cleanup,P as init,C as render};

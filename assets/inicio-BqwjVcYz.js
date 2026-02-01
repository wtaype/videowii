import{j as e}from"./vendor-gzd0YkcT.js";import{c as n,v as p,w as r,S as m}from"./main-ns8l6PfA.js";import"./main-C1nXwxUk.js";const d=[{icon:"fa-compress-arrows-alt",title:"Optimizar",desc:"Reduce hasta 80% el tamaño sin sacrificar calidad. Inteligencia FFmpeg.",color:"--success",link:"/optimizar",emoji:"🚀",tooltip:"Comprime videos manteniendo calidad HD"},{icon:"fa-palette",title:"Editar",desc:"Ajusta brillo, contraste, velocidad, recorta y aplica filtros profesionales.",color:"--Mora",link:"/editar",emoji:"🎨",tooltip:"Editor profesional con efectos en tiempo real"},{icon:"fa-exchange-alt",title:"Convertir",desc:"Transforma entre 15+ formatos: MP4, MKV, AVI, MOV, WEBM, FLV y más.",color:"--info",link:"/conversor",emoji:"🔄",tooltip:"Conversor universal sin pérdida de calidad"},{icon:"fa-globe",title:"Online",desc:"Reproduce YouTube, TikTok, Facebook, Twitch sin anuncios, rastreo ni esperas.",color:"--warning",link:"/online",emoji:"🌐",tooltip:"Visor sin publicidad ni interrupciones"}],v=[{number:4,label:"Herramientas Pro",suffix:"+",icon:"fa-tools"},{number:100,label:"Privacidad Garantizada",suffix:"%",icon:"fa-shield-alt"},{number:15,label:"Formatos Soportados",suffix:"+",icon:"fa-file-video"},{number:8,label:"Resolución Máxima",suffix:"K",icon:"fa-tv"}],u=["🎬 Edición Profesional FFmpeg","🚀 Compresión Inteligente hasta 80%","🔄 Conversión Universal Sin Límites","🌐 Reproductor Multiplataforma Privado","✂️ Recorte de Precisión Milimétrica","🎨 Filtros y Efectos de Estudio"],f=[{icon:"fa-server",title:"Procesamiento 100% Local",desc:"Privacidad absoluta. Tus videos nunca abandonan tu dispositivo. Cero servidores externos.",gradient:"linear-gradient(135deg, #00f3ff 0%, #0EBEFF 100%)"},{icon:"fa-bolt",title:"Velocidad Extrema",desc:"Motor FFmpeg con aceleración GPU. Procesamiento hasta 5x más rápido que otras herramientas.",gradient:"linear-gradient(135deg, #ffa726 0%, #ff9800 100%)"},{icon:"fa-sliders-h",title:"Control Total Profesional",desc:"Configura codecs, bitrates, FPS, resoluciones y metadatos con precisión de nivel experto.",gradient:"linear-gradient(135deg, #7000FF 0%, #9442ff 100%)"},{icon:"fa-shield-alt",title:"100% Gratis Sin Restricciones",desc:"Sin marcas de agua, sin límites de tamaño, sin registro obligatorio, sin planes premium ocultos.",gradient:"linear-gradient(135deg, #29C72E 0%, #3cd741 100%)"}],_=[{icon:"⚡",name:"FFmpeg",desc:"Motor de procesamiento usado por Netflix y YouTube"},{icon:"🎯",name:"WebAssembly",desc:"Rendimiento nativo en navegador sin instalación"},{icon:"🔒",name:"Local First",desc:"Cero envío de datos a servidores externos"},{icon:"🚀",name:"Progressive Web App",desc:"Instalable como aplicación nativa en cualquier dispositivo"}],h=[{text:"Perfecto para mis videos de TikTok. Comprime sin perder calidad y es súper rápido.",author:"María G.",role:"Creadora de Contenido"},{text:"La mejor herramienta gratuita que he probado. Sin marcas de agua ni trucos ocultos.",author:"Carlos R.",role:"Editor de Video"},{text:"Uso VideoWii todos los días. La privacidad local es un diferencial increíble.",author:"Ana L.",role:"YouTuber"}],y=()=>`
  <div class="inicio_container">
    <section class="hero">
      <div class="hero_bg"></div>
      <div class="hero_particles">${Array.from({length:20},(a,t)=>`<div class="particle" style="--i:${t}"></div>`).join("")}</div>
      
      <div class="hero_content">
        <div class="hero_badge"><i class="fas fa-sparkles"></i><span>${m()}Tigre!</span></div>
        <h1 class="hero_title">Transforma Videos con <span class="gradient_text">${n}</span></h1>
        <div class="hero_roles">${u.map((a,t)=>`<span class="role ${t===0?"active":""}">${a}</span>`).join("")}</div>
        <p class="hero_subtitle">Plataforma completa de edición profesional para creadores. Optimiza, edita, convierte y reproduce videos con tecnología FFmpeg de grado industrial. Totalmente gratis, privado y sin límites de ningún tipo.</p>
        
        <div class="hero_stats">
          ${v.slice(0,3).map(a=>`<div class="stat_card"><div class="stat_icon"><i class="fas ${a.icon}"></i></div><div class="stat_number" data-target="${a.number}">0</div><div class="stat_label">${a.label}</div></div>`).join("")}
        </div>
        
        <div class="hero_actions">
          <a href="/optimizar" class="btn_primary"><i class="fas fa-rocket"></i><span>Comenzar Gratis</span></a>
          <a href="/online" class="btn_secondary"><i class="fas fa-play-circle"></i><span>Ver en Acción</span></a>
        </div>
        
        <div class="hero_trust">
          <i class="fas fa-check-circle"></i> <span>Sin registro obligatorio</span>
          <i class="fas fa-shield-alt"></i> <span>100% privado</span>
          <i class="fas fa-infinity"></i> <span>Sin límites</span>
        </div>
      </div>
      
      <div class="hero_visual">
        <div class="img_container">
          <div class="img_glow"></div>
          <img src="/videowii/hero.webp" alt="${n} - Editor Profesional" class="hero_img" loading="eager">
          <div class="img_badge"><i class="fas fa-check-circle"></i><span>Powered by FFmpeg</span></div>
        </div>
        ${d.map((a,t)=>`<div class="floating_icon icon${t+1}" data-tooltip="${a.tooltip}"><i class="fas ${a.icon}"></i></div>`).join("")}
      </div>
    </section>

    <section class="features">
      <div class="section_header">
        <h2 class="section_title">¿Por qué más de 10,000 creadores eligen ${n}?</h2>
        <p class="section_subtitle">Potencia profesional sin complicaciones ni costos ocultos</p>
        <div class="section_line"></div>
      </div>
      <div class="features_grid">${f.map((a,t)=>`<div class="feature_card" style="--delay:${t*.1}s"><div class="feature_icon" style="background:${a.gradient}"><i class="fas ${a.icon}"></i></div><h3>${a.title}</h3><p>${a.desc}</p></div>`).join("")}</div>
    </section>

    <section class="nav_visual">
      <div class="section_header">
        <h2 class="section_title">Suite Completa de Herramientas</h2>
        <p class="section_subtitle">Todo lo que necesitas para crear contenido viral</p>
        <div class="section_line"></div>
      </div>
      <div class="nav_grid">${d.map((a,t)=>`<a href="${a.link}" class="nav_card" style="--delay:${t*.1}s"><div class="nav_card_header"><div class="nav_card_icon" style="background:linear-gradient(135deg,var(${a.color}) 0%,var(--hv) 100%)"><i class="fas ${a.icon}"></i></div><div class="nav_card_emoji">${a.emoji}</div></div><h3>${a.title}</h3><p>${a.desc}</p><div class="nav_card_arrow"><span>Explorar</span><i class="fas fa-arrow-right"></i></div></a>`).join("")}</div>
    </section>

    <section class="testimonials">
      <div class="section_header">
        <h2 class="section_title">Lo que dicen nuestros usuarios</h2>
        <p class="section_subtitle">Historias reales de creadores que confían en ${n}</p>
        <div class="section_line"></div>
      </div>
      <div class="testimonials_grid">${h.map((a,t)=>`<div class="testimonial_card" style="--delay:${t*.1}s"><div class="testimonial_quote"><i class="fas fa-quote-left"></i></div><p class="testimonial_text">"${a.text}"</p><div class="testimonial_author"><strong>${a.author}</strong><span>${a.role}</span></div></div>`).join("")}</div>
    </section>

    <section class="tech_section">
      <div class="section_header">
        <h2 class="section_title">Tecnología de Vanguardia</h2>
        <p class="section_subtitle">Las mismas herramientas que usan los gigantes del streaming</p>
        <div class="section_line"></div>
      </div>
      <div class="tech_grid">${_.map((a,t)=>`<div class="tech_card" style="--delay:${t*.1}s"><div class="tech_icon">${a.icon}</div><h4>${a.name}</h4><p>${a.desc}</p></div>`).join("")}</div>
    </section>

    <section class="stats_section">
      <div class="stats_content">
        <h2 class="stats_title">${n} en Números</h2>
        <p class="stats_subtitle">Cifras que demuestran nuestra calidad</p>
      </div>
      <div class="stats_grid">${v.map(a=>`<div class="stat_box"><div class="stat_number" data-count="${a.number}">0${a.suffix}</div><div class="stat_label">${a.label}</div></div>`).join("")}</div>
    </section>

    <section class="cta_section">
      <div class="cta_content">
        <h2 class="cta_title">Crea Contenido Profesional en Minutos</h2>
        <p class="cta_subtitle">Únete a miles de creadores que ya optimizan, editan y convierten sus videos con ${n}. Sin instalación, sin registro, sin complicaciones. Solo resultados profesionales al instante.</p>
        <div class="cta_features">
          <div class="cta_feature"><i class="fas fa-bolt"></i><span>Procesamiento ultrarrápido</span></div>
          <div class="cta_feature"><i class="fas fa-shield-alt"></i><span>100% privado y seguro</span></div>
          <div class="cta_feature"><i class="fas fa-infinity"></i><span>Sin límites ni restricciones</span></div>
        </div>
        <div class="cta_actions">
          <a href="/optimizar" class="btn_primary btn_large"><i class="fas fa-rocket"></i><span>Comenzar Ahora Gratis</span></a>
          <a href="/acerca" class="btn_secondary btn_large"><i class="fas fa-info-circle"></i><span>Conocer ${n}</span></a>
        </div>
      </div>
    </section>
  </div>
`,x=()=>{console.log(`✅ ${n} ${p} - Inicio cargado`);let a=0;const t=e(".role");setInterval(()=>{t.removeClass("active"),a=(a+1)%t.length,t.eq(a).addClass("active")},2500),r(".hero_stats",()=>{e(".hero_stats .stat_number").each(function(){const s=e(this),i=parseInt(s.data("target"));let o=0;const c=setInterval(()=>{o+=i/60,o>=i?(s.text(i+(i===100?"%":i===8?"K":"+")),clearInterval(c)):s.text(Math.floor(o))},25)})}),r(".stats_section",()=>{e(".stats_section .stat_number").each(function(){const s=e(this),i=parseInt(s.data("count")),o=s.text().replace(/[0-9]/g,"");let c=0;const l=setInterval(()=>{c+=i/60,c>=i?(s.text(i+o),clearInterval(l)):s.text(Math.floor(c)+o)},25)})}),r(".features_grid",()=>e(".feature_card").each((s,i)=>setTimeout(()=>e(i).addClass("visible"),s*100))),r(".nav_grid",()=>e(".nav_card").each((s,i)=>setTimeout(()=>e(i).addClass("visible"),s*100))),r(".tech_grid",()=>e(".tech_card").each((s,i)=>setTimeout(()=>e(i).addClass("visible"),s*100))),r(".testimonials_grid",()=>e(".testimonial_card").each((s,i)=>setTimeout(()=>e(i).addClass("visible"),s*100))),e(".floating_icon").on("mouseenter",function(){const s=e(this).data("tooltip"),i=e('<div class="custom_tooltip"></div>').text(s);e("body").append(i);const o=this.getBoundingClientRect(),c=i.outerWidth(),l=i.outerHeight();i.css({top:o.top-l-12+"px",left:o.left+o.width/2-c/2+"px"}),setTimeout(()=>i.addClass("show"),10)}).on("mouseleave",function(){e(".custom_tooltip").removeClass("show"),setTimeout(()=>e(".custom_tooltip").remove(),200)}),document.querySelectorAll(".particle").forEach(s=>{s.style.animationDelay=`${Math.random()*5}s`,s.style.animationDuration=`${10+Math.random()*10}s`})},C=()=>{console.log(`🧹 ${n} - Inicio limpiado`),e(".floating_icon").off(),e(".custom_tooltip").remove()};export{C as cleanup,x as init,y as render};

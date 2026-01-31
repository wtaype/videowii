import{j as t}from"./vendor-gzd0YkcT.js";import{g as n,f as p,h as f,i as d,s as h,j as l,T as m,N as c,e as u,k as v,m as b,S as g}from"./main-tPKiMvEZ.js";import"./main-BVijeq5d.js";let e=n("wiSmile");const i="wiNotas",w=async()=>{const o=n(i),a=o?.fechaUpdate?l(m).get(o.fechaUpdate,"DD/MM/YYYY HH:mm"):"Sin notas";return`
   <div class="miweb">
    <div class="mhead"><h1 class="mh1"><i class="fas fa-sticky-note"></i> ${g()} ${e.nombre}</h1></div>
    <div class="mibody">
     <textarea class="nota-text" placeholder="Empieza escribir tus notas">${o?.notas||""}</textarea>
     <div class="nota-footer">
      <span class="nota-fecha"><i class="far fa-clock"></i> ${o?.fechaCreacion?"Actualizado":"Nota creada"}: ${a}</span>
      <div class="nota-btns">
       <button class="btn btn-save"><i class="fas fa-save"></i> Guardar</button>
       <button class="btn btn-delete"><i class="fas fa-trash"></i> Eliminar</button>
      </div>
     </div>
    </div>
   </div>`},y=async()=>{if(!n(i))try{const a=await p(f(d,"misnotas",e.usuario));if(a.exists()){const s=a.data();t(".nota-text").val(s.notas),h(i,s),t(".nota-fecha").html(`<i class="far fa-clock"></i> Actualizado: ${l(m).get(s.fechaUpdate,"DD/MM/YYYY HH:mm")}`),c("✅ Notas cargadas","success")}}catch(a){console.error(a),c("❌ Error al cargar","error")}t(".btn-save").click(async function(){const a=t(".nota-text").val().trim();if(!a)return c("⚠️ Escribe algo primero","warning");u(this,!0);try{const s=n(i);await v(f(d,"misnotas",e.usuario),{email:e.email,usuario:e.nombre,notas:a,fechaUpdate:b(),...!s?.fechaCreacion&&{fechaCreacion:b()}},{merge:!0});const r=Date.now();h(i,{email:e.email,usuario:e.nombre,notas:a,fechaUpdate:r,fechaCreacion:s?.fechaCreacion||r}),t(".nota-fecha").html(`<i class="far fa-clock"></i> Actualizado: ${l(m).get(r,"DD/MM/YYYY HH:mm")}`),c("✅ Guardado exitosamente!","success")}catch(s){console.error(s),c("❌ Error al guardar","error")}finally{u(this,!1)}}),t(".btn-delete").click(function(){confirm("¿Eliminar todas las notas?")&&(t(".nota-text").val(""),t(".nota-fecha").html('<i class="far fa-clock"></i> Nota creada: Sin notas'),c("🗑️ Notas eliminadas","info"))})},k=()=>{console.log("😊 Smile limpiado")};export{k as cleanup,y as init,w as render,e as smile};

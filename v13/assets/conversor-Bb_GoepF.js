import{j as o}from"./vendor-gzd0YkcT.js";import{c as U,N as d}from"./main-BCNPImiu.js";import"./main-qqtxrb31.js";const L=()=>`
  <div class="conversor_container mwb">
    <section class="conversor_main">
      <!-- LEFT COLUMN (29%) -->
      <div class="conversor_left">
        <div class="video_info_section">
          <div class="video_info_header">
            <h3><i class="fas fa-exchange-alt"></i> Convertir Video</h3>
          </div>

          <div class="upload_zone_compact" id="uploadZone">
            <i class="fas fa-cloud-upload-alt"></i>
            <p>Doble clic para seleccionar video</p>
            <input type="file" id="videoInput" accept="video/*" hidden>
          </div>

          <div class="video_actions">
            <button class="btn_select" id="btnSelect">
              <i class="fas fa-folder-open"></i>
              <span>Seleccionar</span>
            </button>
            <button class="btn_delete" id="btnDelete">
              <i class="fas fa-trash-alt"></i>
              <span>Eliminar</span>
            </button>
          </div>

          <div class="file_info_left" id="fileInfoLeft" style="display:none;">
            <div class="file_info_header">
              <i class="fas fa-file-video"></i>
              <span>Nombre:</span>
            </div>
            <div class="file_name_display" id="fileNameDisplay" title="">video.mp4</div>
          </div>

          <div class="video_stats_grid" id="videoStatsGrid" style="display:none;">
            <div class="stat_card">
              <div class="stat_card_label">Duración:</div>
              <div class="stat_card_value" id="videoDuration">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_label">Resolución:</div>
              <div class="stat_card_value" id="videoResolution">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_label">Tamaño:</div>
              <div class="stat_card_value" id="videoSize">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_label">Formato:</div>
              <div class="stat_card_value" id="videoFormat">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_label">Bitrate:</div>
              <div class="stat_card_value" id="videoBitrate">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_label">Calidad:</div>
              <div class="stat_card_value" id="videoQuality">--</div>
            </div>
          </div>

          <div class="conversion_preview" id="conversionPreview" style="display:none;">
            <div class="preview_header">
              <h4><i class="fas fa-eye"></i> Estimación</h4>
            </div>
            <div class="preview_comparison">
              <div class="preview_cell">
                <span class="preview_label">Original:</span>
                <span class="preview_value" id="previewOriginal">--</span>
              </div>
              <div class="preview_arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
              <div class="preview_cell">
                <span class="preview_label">Estimado:</span>
                <span class="preview_value success" id="previewEstimated">--</span>
              </div>
              <div class="preview_reduction">
                <i class="fas fa-chart-pie"></i>
                <span id="previewReduction">0%</span>
              </div>
            </div>
            <div class="preview_time">
              <i class="fas fa-hourglass-half"></i>
              <span id="estimatedTime">Tiempo estimado: --</span>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN (70%) -->
      <div class="conversor_right">
        <div class="video_player_wrapper">
          <div class="no_video_placeholder" id="noVideoPlaceholder">
            <i class="fas fa-video"></i>
            <h3>Carga un video para convertir</h3>
            <p>Soporta MP4, MOV, WEBM, AVI, MKV y más formatos</p>
          </div>
          <div class="video_player_container" id="videoPlayerContainer" style="display:none;">
            <video id="conversorVideo" controls playsinline autoplay loop></video>
          </div>
        </div>

        <div class="conversion_controls" id="conversionControls" style="display:none;">
          <div class="controls_row">
            <div class="control_group">
              <label><i class="fas fa-exchange-alt"></i> Convertir a:</label>
              <select id="formatSelect">
                <option value="mp4" data-desc="Universal">MP4 - Universal</option>
                <option value="webm" data-desc="Web">WEBM - Web</option>
                <option value="avi" data-desc="Clásico">AVI - Clásico</option>
                <option value="mov" data-desc="Apple">MOV - Apple</option>
                <option value="mkv" data-desc="HD">MKV - HD</option>
                <option value="flv" data-desc="Flash">FLV - Flash</option>
                <option value="ogv" data-desc="Libre">OGV - Libre</option>
                <option value="3gp" data-desc="Móvil">3GP - Móvil</option>
                <option value="m4v" data-desc="iTunes">M4V - iTunes</option>
              </select>
            </div>

            <div class="control_group">
              <label><i class="fas fa-star"></i> Calidad:</label>
              <select id="qualitySelect">
                <option value="high">Alta</option>
                <option value="medium" selected>Media</option>
                <option value="low">Baja</option>
              </select>
            </div>

            <div class="control_group">
              <label><i class="fas fa-desktop"></i> Resolución:</label>
              <select id="resolutionSelect">
                <option value="original">Original</option>
                <option value="1080">1080p (Full HD)</option>
                <option value="720">720p (HD)</option>
                <option value="480">480p (SD)</option>
                <option value="360">360p (Móvil)</option>
              </select>
            </div>
          </div>

          <div class="controls_row conversion_action">
            <button class="btn_convert" id="btnConvert">
              <i class="fas fa-sync-alt"></i>
              <span>Convertir Video</span>
            </button>
            <div class="progress_wrapper" id="progressWrapper" style="display:none;">
              <div class="progress_bar_inline">
                <div class="progress_fill_inline" id="progressFillInline"></div>
              </div>
              <span class="progress_text" id="progressText">0%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
`,P=()=>{console.log(`✅ Conversor de ${U} cargado`);let c=null,w={},a=null,r="",_="medium",g="original";const C={mp4:{codecs:["h264","h265","mpeg4"],compression:.9,speed:"rápida"},webm:{codecs:["vp8","vp9"],compression:.7,speed:"media"},avi:{codecs:["mpeg4","xvid"],compression:1.2,speed:"rápida"},mov:{codecs:["h264","h265"],compression:.95,speed:"rápida"},mkv:{codecs:["h264","h265","vp9"],compression:.85,speed:"lenta"},flv:{codecs:["h264"],compression:1,speed:"rápida"},ogv:{codecs:["theora"],compression:.8,speed:"media"},"3gp":{codecs:["h264","mpeg4"],compression:.6,speed:"rápida"},m4v:{codecs:["h264"],compression:.92,speed:"rápida"}},$=(e,s)=>{const i=s.duration,t=e.size,p=t*8/i/1e3,n=p/1e3,l=e.name.split(".").pop().toLowerCase(),h={mp4:"H.264",webm:"VP9",avi:"MPEG-4",mov:"H.264",mkv:"H.264",flv:"H.264",ogv:"Theora","3gp":"H.264",m4v:"H.264"}[l]||"Desconocido";let v="BAJA";return n>8?v="MUY ALTA":n>5?v="ALTA":n>2.5?v="MEDIA":n>1?v="BAJA":v="MUY BAJA",{duration:i,size:t,bitrate:p,bitrateMbps:n,format:l,codec:h,quality:v,width:s.videoWidth,height:s.videoHeight}},x=(e,s,i,t)=>{const f=C[s],p={high:1,medium:.75,low:.55},n={original:1,1080:.9,720:.7,480:.5,360:.35},l=f.compression*p[i]*n[t];return e.size*l},V=(e,s)=>{const i={rápida:1,media:1.5,lenta:2.5},t=C[s];return e/(1024*1024)*2*i[t.speed]},b=()=>{if(!a||!r)return;const e=x(a,r,_,g),s=((1-e/a.size)*100).toFixed(1),i=V(a.size,r);o("#previewOriginal").text(m(a.size)),o("#previewEstimated").text(m(e)),o("#previewReduction").text(`${s>0?"-":"+"}${Math.abs(s)}%`);const t=Math.floor(i/60),f=Math.floor(i%60);o("#estimatedTime").text(`Tiempo estimado: ${t>0?t+" min ":""}${f} seg`),e>=a.size*.98?(o("#previewEstimated").removeClass("success").addClass("warning"),o("#previewReduction").closest(".preview_reduction").css("background","var(--warning)"),d("⚠️ No recomendado: El tamaño será similar o mayor","warning",3e3)):s>30?(o("#previewEstimated").removeClass("warning").addClass("success"),o("#previewReduction").closest(".preview_reduction").css("background","var(--success)"),d(`✅ Recomendado: Reducirás ${Math.abs(s)}% del tamaño`,"success",2500)):(o("#previewEstimated").removeClass("warning").addClass("success"),o("#previewReduction").closest(".preview_reduction").css("background","var(--success)")),o("#conversionPreview").fadeIn()},R=e=>{const s=Math.floor(e/60),i=Math.floor(e%60);return`${s}:${i.toString().padStart(2,"0")}`},y=e=>{if(!e.type.startsWith("video/")){d("Por favor selecciona un archivo de video válido","error",3e3);return}c=e;const s=URL.createObjectURL(e),i=o("#conversorVideo")[0];i.onloadedmetadata=i.onerror=null,i.src=s,i.onloadedmetadata=()=>{w={duration:i.duration,width:i.videoWidth,height:i.videoHeight,size:e.size,format:e.name.split(".").pop().toUpperCase(),name:e.name},a=$(e,i),o("#noVideoPlaceholder").hide(),o("#videoPlayerContainer, #conversionControls, #conversionPreview, #videoStatsGrid, #fileInfoLeft").show(),o("#fileNameDisplay").text(e.name).attr("title",e.name),o("#videoDuration").text(R(i.duration)),o("#videoResolution").text(`${i.videoWidth}x${i.videoHeight}`),o("#videoSize").text(m(e.size)),o("#videoFormat").text(w.format),o("#videoBitrate").text(`${a.bitrateMbps.toFixed(2)} Mbps`),o("#videoQuality").text(a.quality);const t=T(a);r=t,o("#formatSelect").val(t),o(`#formatSelect option[value="${a.format}"]`).prop("disabled",!0).text(`${a.format.toUpperCase()} - Ya está en este formato`),b(),d(`✅ Video analizado: ${a.codec} | ${Math.round(a.bitrateMbps*10)/10} Mbps | Calidad ${a.quality}`,"success",3e3)},i.onerror=()=>{c&&(d("Error al cargar el video. Intenta con otro archivo.","error",3e3),M())}},T=e=>["webm","avi","flv","3gp"].includes(e.format)?"mp4":e.format==="mp4"?"webm":(e.format==="mov","mp4"),M=()=>{const e=o("#conversorVideo")[0];e&&(e.onloadedmetadata=e.onerror=null,e.pause(),e.src&&URL.revokeObjectURL(e.src),e.src="",e.load()),o("#videoPlayerContainer, #conversionControls, #conversionPreview, #videoStatsGrid, #fileInfoLeft").hide(),o("#noVideoPlaceholder").show(),o("#videoInput").val(""),o("#progressWrapper").hide(),o("#formatSelect option").prop("disabled",!1).each(function(){const s=o(this).val();o(this).text(`${s.toUpperCase()} - ${o(this).data("desc")}`)}),c=null,w={},a=null,r="",_="medium",g="original"},F=async()=>{if(!c||!r){d("Selecciona un formato de salida","warning",2e3);return}try{o("#btnConvert").prop("disabled",!0).html('<i class="fas fa-spinner fa-spin"></i> Convirtiendo...'),o("#progressWrapper").fadeIn(),u(0);const e=new FormData;e.append("video",c),e.append("format",r),e.append("quality",_),e.append("resolution",g),u(10);const s=await fetch("http://localhost:3000/convert-format",{method:"POST",body:e});if(!s.ok)throw new Error(`Error del servidor: ${s.statusText}`);u(50);const i=await s.json();if(!i.success)throw new Error(i.error||"Error desconocido");u(80);const t=`http://localhost:3000${i.downloadUrl}`,p=await(await fetch(t)).blob(),n=c.size,l=p.size,S=((1-l/n)*100).toFixed(1);u(95);const h=document.createElement("a"),v=URL.createObjectURL(p);h.href=v,h.download=i.filename,h.click(),URL.revokeObjectURL(v),u(100),setTimeout(()=>{o("#progressWrapper").fadeOut(),o("#btnConvert").prop("disabled",!1).html('<i class="fas fa-sync-alt"></i> Convertir Video'),l<n?d(`✅ Convertido a ${r.toUpperCase()}: ${S}% de reducción (${m(n)} → ${m(l)})`,"success",4e3):d(`✅ Video convertido a ${r.toUpperCase()} (${m(l)})`,"success",3e3)},1e3)}catch(e){console.error("❌ Error convirtiendo:",e),o("#progressWrapper").fadeOut(),o("#btnConvert").prop("disabled",!1).html('<i class="fas fa-sync-alt"></i> Convertir Video'),d(`Error al convertir: ${e.message}`,"error",4e3)}},u=e=>{o("#progressFillInline").css("width",`${e}%`),o("#progressText").text(`${e}%`)},m=e=>e<1024?e+" B":e<1024*1024?(e/1024).toFixed(2)+" KB":(e/(1024*1024)).toFixed(2)+" MB";o("#uploadZone").on("dblclick",()=>o("#videoInput").click()).on("dragover",e=>{e.preventDefault(),o(e.currentTarget).addClass("dragover")}).on("dragleave",e=>o(e.currentTarget).removeClass("dragover")).on("drop",e=>{e.preventDefault(),o(e.currentTarget).removeClass("dragover");const s=e.originalEvent.dataTransfer.files;s.length&&y(s[0])}),o("#videoInput").on("change",e=>{const s=e.target.files[0];s&&y(s)}),o(document).on("click","#btnSelect",()=>o("#videoInput").click()),o(document).on("click","#btnDelete",()=>{confirm("¿Estás seguro de eliminar este video?")&&(M(),d("Video eliminado","success",2e3))}),o(document).on("change","#formatSelect",function(){r=o(this).val(),a&&b()}),o(document).on("change","#qualitySelect",function(){_=o(this).val(),a&&r&&b()}),o(document).on("change","#resolutionSelect",function(){g=o(this).val(),a&&r&&b()}),o(document).on("click","#btnConvert",F)},k=()=>{console.log("🧹 Conversor limpiado"),o("#uploadZone, #videoInput, #btnSelect, #btnDelete, #btnConvert, #formatSelect, #qualitySelect, #resolutionSelect").off();const c=o("#conversorVideo")[0];c?.src&&URL.revokeObjectURL(c.src)};export{k as cleanup,P as init,L as render};

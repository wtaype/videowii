import{j as i}from"./vendor-gzd0YkcT.js";import{c as L,N as r}from"./main-Dp3mnYo7.js";import"./main-C8t1F894.js";const z=()=>`
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
              <div class="stat_card_icon"><i class="fas fa-clock"></i></div>
              <div class="stat_card_label">Duración:</div>
              <div class="stat_card_value" id="videoDuration">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-desktop"></i></div>
              <div class="stat_card_label">Resolución:</div>
              <div class="stat_card_value" id="videoResolution">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-hdd"></i></div>
              <div class="stat_card_label">Tamaño:</div>
              <div class="stat_card_value" id="videoSize">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-file-video"></i></div>
              <div class="stat_card_label">Formato:</div>
              <div class="stat_card_value" id="videoFormat">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-tachometer-alt"></i></div>
              <div class="stat_card_label">Bitrate:</div>
              <div class="stat_card_value" id="videoBitrate">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-star"></i></div>
              <div class="stat_card_label">Calidad:</div>
              <div class="stat_card_value" id="videoQuality">--</div>
            </div>
          </div>

          <div class="conversion_preview" id="conversionPreview" style="display:none;">
            <div class="preview_header">
              <h4><i class="fas fa-eye"></i> <span id="previewTitle">Vista Previa</span></h4>
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
                <span class="preview_label" id="previewLabel">Estimado:</span>
                <span class="preview_value success" id="previewEstimated">--</span>
              </div>
              <div class="preview_reduction">
                <i class="fas fa-chart-pie"></i>
                <span id="previewReduction">0%</span>
              </div>
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
`,P=()=>{console.log(`✅ Conversor de ${L} cargado`);let c=null,C={},s=null,n="",h="medium",g="original",f=!1;const $={mp4:{codecs:["h264","h265","mpeg4"],compression:.9,speed:"rápida"},webm:{codecs:["vp8","vp9"],compression:.7,speed:"media"},avi:{codecs:["mpeg4","xvid"],compression:1.2,speed:"rápida"},mov:{codecs:["h264","h265"],compression:.95,speed:"rápida"},mkv:{codecs:["h264","h265","vp9"],compression:.85,speed:"lenta"},flv:{codecs:["h264"],compression:1,speed:"rápida"},ogv:{codecs:["theora"],compression:.8,speed:"media"},"3gp":{codecs:["h264","mpeg4"],compression:.6,speed:"rápida"},m4v:{codecs:["h264"],compression:.92,speed:"rápida"}},S=(e,o)=>{const a=o.duration,l=e.size,u=l*8/a/1e3,t=u/1e3,d=e.name.split(".").pop().toLowerCase(),_={mp4:"H.264",webm:"VP9",avi:"MPEG-4",mov:"H.264",mkv:"H.264",flv:"H.264",ogv:"Theora","3gp":"H.264",m4v:"H.264"}[d]||"Desconocido";let v="BAJA";return t>8?v="MUY ALTA":t>5?v="ALTA":t>2.5?v="MEDIA":t>1?v="BAJA":v="MUY BAJA",{duration:a,size:l,bitrate:u,bitrateMbps:t,format:d,codec:_,quality:v,width:o.videoWidth,height:o.videoHeight}},V=(e,o,a,l)=>{const y=$[o],u={high:1,medium:.75,low:.55},t={original:1,1080:.9,720:.7,480:.5,360:.35},d=y.compression*u[a]*t[l];return e.size*d},w=()=>{if(!s||!n)return;const e=V(s,n,h,g),o=((1-e/s.size)*100).toFixed(1);i("#previewOriginal").text(p(s.size)),i("#previewEstimated").text(p(e)),i("#previewReduction").text(`${o>0?"-":"+"}${Math.abs(o)}%`),i("#previewLabel").text("Estimado:"),i("#previewTitle").text("Vista Previa"),e>=s.size*.98?(i("#previewEstimated").removeClass("success").addClass("warning"),i("#previewReduction").closest(".preview_reduction").css("background","var(--warning)"),r("⚠️ No recomendado: El tamaño será similar o mayor","warning",3e3)):o>30?(i("#previewEstimated").removeClass("warning").addClass("success"),i("#previewReduction").closest(".preview_reduction").css("background","var(--success)"),r(`✅ Recomendado: Reducirás ${Math.abs(o)}% del tamaño`,"success",2500)):(i("#previewEstimated").removeClass("warning").addClass("success"),i("#previewReduction").closest(".preview_reduction").css("background","var(--success)")),i("#conversionPreview").fadeIn()},R=e=>{const o=Math.floor(e/60),a=Math.floor(e%60);return`${o}:${a.toString().padStart(2,"0")}`},x=e=>{if(!e.type.startsWith("video/")){r("Por favor selecciona un archivo de video válido","error",3e3);return}c=e;const o=URL.createObjectURL(e),a=i("#conversorVideo")[0];a.onloadedmetadata=a.onerror=null,a.src=o,a.onloadedmetadata=()=>{C={duration:a.duration,width:a.videoWidth,height:a.videoHeight,size:e.size,format:e.name.split(".").pop().toUpperCase(),name:e.name},s=S(e,a),i("#noVideoPlaceholder").hide(),i("#videoPlayerContainer, #conversionControls, #conversionPreview, #videoStatsGrid, #fileInfoLeft").show(),i("#fileNameDisplay").text(e.name).attr("title",e.name),i("#videoDuration").text(R(a.duration)),i("#videoResolution").text(`${a.videoWidth}x${a.videoHeight}`),i("#videoSize").text(p(e.size)),i("#videoFormat").text(C.format),i("#videoBitrate").text(`${s.bitrateMbps.toFixed(2)} Mbps`),i("#videoQuality").text(s.quality);const l=F(s);n=l,i("#formatSelect").val(l),i(`#formatSelect option[value="${s.format}"]`).prop("disabled",!0).text(`${s.format.toUpperCase()} - Ya está en este formato`),w(),r(`✅ Video analizado: ${s.codec} | ${s.bitrateMbps.toFixed(2)} Mbps | Calidad ${s.quality}`,"success",3e3)},a.onerror=()=>{c&&(r("Error al cargar el video. Intenta con otro archivo.","error",3e3),M())}},F=e=>["webm","avi","flv","3gp"].includes(e.format)?"mp4":e.format==="mp4"?"webm":(e.format==="mov","mp4"),M=()=>{const e=i("#conversorVideo")[0];e&&(e.onloadedmetadata=e.onerror=null,e.pause(),e.src&&URL.revokeObjectURL(e.src),e.src="",e.load()),i("#videoPlayerContainer, #conversionControls, #conversionPreview, #videoStatsGrid, #fileInfoLeft").hide(),i("#noVideoPlaceholder").show(),i("#videoInput").val(""),i("#progressWrapper").hide(),i("#formatSelect option").prop("disabled",!1).each(function(){const o=i(this).val();i(this).text(`${o.toUpperCase()} - ${i(this).data("desc")}`)}),c=null,C={},s=null,n="",h="medium",g="original",f=!1},E=async()=>{if(!c||!n){r("Selecciona un formato de salida","warning",2e3);return}if(f){r("Ya hay una conversión en progreso","warning",2e3);return}try{f=!0,i("#btnConvert").prop("disabled",!0).html('<i class="fas fa-spinner fa-spin"></i> Convirtiendo...'),i("#progressWrapper").fadeIn(),m(0);const e=new FormData;e.append("video",c),e.append("format",n),e.append("quality",h),e.append("resolution",g),m(10);const o=await fetch("http://localhost:3000/convert-format",{method:"POST",body:e});if(!o.ok)throw new Error(`Error del servidor: ${o.statusText}`);m(50);const a=await o.json();if(!a.success)throw new Error(a.error||"Error desconocido");m(80);const l=`http://localhost:3000${a.downloadUrl}`,u=await(await fetch(l)).blob(),t=c.size,d=u.size,b=((1-d/t)*100).toFixed(1);m(95),i("#previewTitle").text("Video Convertido"),i("#previewLabel").text("Convertido:"),i("#previewEstimated").text(p(d)),i("#previewReduction").text(`${b>0?"-":"+"}${Math.abs(b)}%`),d>t?(i("#previewEstimated").removeClass("success").addClass("warning"),i("#previewReduction").closest(".preview_reduction").css("background","var(--warning)")):(i("#previewEstimated").removeClass("warning").addClass("success"),i("#previewReduction").closest(".preview_reduction").css("background","var(--success)"));const _=document.createElement("a"),v=URL.createObjectURL(u);_.href=v,_.download=a.filename,_.click(),URL.revokeObjectURL(v),m(100),setTimeout(()=>{i("#progressWrapper").fadeOut(),i("#btnConvert").prop("disabled",!1).html('<i class="fas fa-sync-alt"></i> Convertir Video'),d<t?r(`✅ Convertido a ${n.toUpperCase()}: ${Math.abs(b)}% de reducción (${p(t)} → ${p(d)})`,"success",4e3):r(`✅ Video convertido a ${n.toUpperCase()}: ${p(d)} (Original: ${p(t)})`,"success",3e3)},1e3)}catch(e){console.error("❌ Error convirtiendo:",e),i("#progressWrapper").fadeOut(),i("#btnConvert").prop("disabled",!1).html('<i class="fas fa-sync-alt"></i> Convertir Video'),r(`Error al convertir: ${e.message}`,"error",4e3)}finally{f=!1}},m=e=>{i("#progressFillInline").css("width",`${e}%`),i("#progressText").text(`${e}%`)},p=e=>e===0?"0 B":e<1024?`${e.toFixed(2)} B`:e<1024*1024?`${(e/1024).toFixed(2)} KB`:e<1024*1024*1024?`${(e/(1024*1024)).toFixed(2)} MB`:`${(e/(1024*1024*1024)).toFixed(2)} GB`;i("#uploadZone").on("dblclick",()=>i("#videoInput").click()).on("dragover",e=>{e.preventDefault(),i(e.currentTarget).addClass("dragover")}).on("dragleave",e=>i(e.currentTarget).removeClass("dragover")).on("drop",e=>{e.preventDefault(),i(e.currentTarget).removeClass("dragover");const o=e.originalEvent.dataTransfer.files;o.length&&x(o[0])}),i("#videoInput").on("change",e=>{const o=e.target.files[0];o&&x(o)}),i(document).on("click","#btnSelect",()=>!f&&i("#videoInput").click()),i(document).on("click","#btnDelete",()=>{if(f)return r("No puedes eliminar mientras se convierte","warning",2e3);confirm("¿Estás seguro de eliminar este video?")&&(M(),r("Video eliminado","success",2e3))}),i(document).on("change","#formatSelect",function(){n=i(this).val(),s&&w()}),i(document).on("change","#qualitySelect",function(){h=i(this).val(),s&&n&&w()}),i(document).on("change","#resolutionSelect",function(){g=i(this).val(),s&&n&&w()}),i(document).on("click","#btnConvert",E)},T=()=>{console.log("🧹 Conversor limpiado"),i("#uploadZone, #videoInput, #btnSelect, #btnDelete, #btnConvert, #formatSelect, #qualitySelect, #resolutionSelect").off();const c=i("#conversorVideo")[0];c?.src&&URL.revokeObjectURL(c.src)};export{T as cleanup,P as init,z as render};

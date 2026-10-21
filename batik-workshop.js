/* Atelier de dessin personnel : une découverte de la réserve, distincte d’un motif traditionnel. */
'use strict';
const BATIK_SOURCE='https://ich.unesco.org/fr/RL/le-batik-indonsien-00170';
const BATIK_PALETTES={indigo:{name:'Indigo',color:'#274f79'},lagon:{name:'Lagon',color:'#237e78'},terre:{name:'Terre cuite',color:'#a64f38'},prune:{name:'Prune',color:'#68445f'}};
const BATIK_LIMITS={strokes:28,points:96,cards:24};
let batikGalleryIndex=0,batikPointer=null,batikLastRemoved=null;
function newBatikDraft(){return {palette:'indigo',layout:'single',tool:'line',strokes:[]};}
function cleanBatikDraft(value){
  const d=newBatikDraft();
  if(!value||typeof value!=='object'||Array.isArray(value))return d;
  if(Object.hasOwn(BATIK_PALETTES,value.palette))d.palette=value.palette;
  if(['single','repeat'].includes(value.layout))d.layout=value.layout;
  if(['line','dots'].includes(value.tool))d.tool=value.tool;
  if(Array.isArray(value.strokes))for(const s of value.strokes.slice(0,BATIK_LIMITS.strokes)){
    if(!s||!Array.isArray(s.points))continue;
    const points=s.points.slice(0,BATIK_LIMITS.points).filter(p=>Array.isArray(p)&&p.length===2&&p.every(n=>typeof n==='number'&&Number.isFinite(n))).map(([x,y])=>[Math.round(Math.max(5,Math.min(395,x))*10)/10,Math.round(Math.max(5,Math.min(255,y))*10)/10]);
    if(points.length)d.strokes.push({kind:s.kind==='dots'?'dots':'line',points});
  }
  return d;
}
function batikContentId(draft){
  const d=cleanBatikDraft(draft),input=JSON.stringify([d.palette,d.layout,d.strokes]);let hash=2166136261;
  for(let i=0;i<input.length;i++)hash=Math.imul(hash^input.charCodeAt(i),16777619);
  return 'motif-'+(hash>>>0).toString(16).padStart(8,'0');
}
function cleanBatikWorkshop(value){
  const w={version:1,draft:cleanBatikDraft(value?.draft),cards:[]};
  if(!value||typeof value!=='object'||Array.isArray(value))return w;
  const ids=new Set();
  if(Array.isArray(value.cards))for(const card of value.cards.slice(0,BATIK_LIMITS.cards)){
    if(!card||typeof card!=='object')continue;
    const drawing=cleanBatikDraft(card.drawing);if(!drawing.strokes.length)continue;
    const id=batikContentId(drawing);if(ids.has(id))continue;ids.add(id);
    const validDate=typeof card.createdAt==='string'&&Number.isFinite(Date.parse(card.createdAt));
    w.cards.push({id,createdAt:validDate?new Date(card.createdAt).toISOString():'1970-01-01T00:00:00.000Z',drawing});
  }
  return w;
}
function mergeBatikWorkshops(local,incoming){
  const here=cleanBatikWorkshop(local),there=cleanBatikWorkshop(incoming),byId=new Map();
  for(const card of [...here.cards,...there.cards])if(!byId.has(card.id))byId.set(card.id,card);
  return cleanBatikWorkshop({draft:here.draft.strokes.length?here.draft:there.draft,cards:[...byId.values()].sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).slice(0,BATIK_LIMITS.cards)});
}
function batikStrokeSvg(stroke,stage){
  const points=stroke.points,ink='#fff7dc';
  if(stroke.kind==='dots'||points.length===1)return points.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5.5" fill="${ink}"${stage===0?' stroke="#a8884f" stroke-width=".8"':''}/>`).join('');
  const d=points.map(([x,y],i)=>(i?'L':'M')+x+' '+y).join(' ');
  return `${stage===0?`<path d="${d}" fill="none" stroke="#b29a64" stroke-width="9.5" stroke-linecap="round" stroke-linejoin="round"/>`:''}<path d="${d}" fill="none" stroke="${ink}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`;
}
function batikSvg(drawing,stage=2,prefix='batik-art',editable=false){
  const d=cleanBatikDraft(drawing),paint=d.strokes.map(s=>batikStrokeSvg(s,stage)).join(''),color=stage===0?'#e8dcb9':BATIK_PALETTES[d.palette].color;
  const layers=stage===2&&d.layout==='repeat'?Array.from({length:9},(_,i)=>`<g transform="translate(${(i%3)*400/3} ${Math.floor(i/3)*260/3}) scale(.3333333333)">${paint}</g>`).join(''):paint;
  return `<svg xmlns="http://www.w3.org/2000/svg"${editable?' id="batik-surface"':''} class="batik-canvas${editable?' batik-editable':''}" viewBox="0 0 400 260" width="800" height="520" role="img" aria-label="${stage===0?'Ton espace de dessin : les tracés clairs resteront visibles après la couleur.':'Ton motif personnel, en '+BATIK_PALETTES[d.palette].name+(d.layout==='repeat'?', répété sur une étoffe.':'.')}"><defs><pattern id="${prefix}-weave" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M0 1H6M1 0V6" fill="none" stroke="#fff" stroke-width=".5" opacity=".12"/></pattern><clipPath id="${prefix}-clip"><rect width="400" height="260" rx="8"/></clipPath></defs><g clip-path="url(#${prefix}-clip)"><rect width="400" height="260" fill="${color}"/><rect width="400" height="260" fill="url(#${prefix}-weave)"/><g id="${editable?'batik-marks':prefix+'-marks'}">${layers}</g>${!d.strokes.length?(stage===0?'<text id="batik-empty-hint" x="200" y="121" text-anchor="middle" fill="#766341" font-family="system-ui,sans-serif" font-size="15">Dessine ici</text><text x="200" y="146" text-anchor="middle" fill="#766341" font-family="system-ui,sans-serif" font-size="10">ou choisis un point de départ ci-dessous</text>':'<text x="200" y="134" text-anchor="middle" fill="#fff7dc" font-family="system-ui,sans-serif" font-size="13">Ton motif apparaîtra ici</text>'):''}</g></svg>`;
}
function batikButton(a,action,key,label,extra=''){
  return `<button class="batik-button" data-action="batik-${action}"${key!==null&&key!==undefined?` data-key="${esc(String(key))}"`:''} data-screen="${a.screen}" data-step="${a.practiceStep}" ${extra}>${esc(label)}</button>`;
}
function renderBatikWorkshop(a){
  const w=cleanBatikWorkshop(a.workshop),d=w.draft,stage=a.practiceStep;
  const headings=['Trace ton motif','Fais apparaître la couleur','Compose ton étoffe'];
  const instructions=['Dessine au doigt ou à la souris. Ces traits et points resteront clairs.','Choisis une couleur : les espaces que tu as tracés restent clairs.','Garde ton dessin seul ou répète-le, puis conserve ta création.'];
  let controls='';
  if(stage===0)controls=`<div class="batik-tools" role="group" aria-label="Outil de dessin">${batikButton(a,'tool','line','Tracer',`aria-pressed="${d.tool==='line'}"`)}${batikButton(a,'tool','dots','Points',`aria-pressed="${d.tool==='dots'}"`)}${batikButton(a,'undo',null,'Annuler le dernier',d.strokes.length?'':'disabled')}</div><details class="batik-starters"><summary>Un point de départ</summary><div class="batik-tools" role="group" aria-label="Ajouter une forme libre">${batikButton(a,'seed','wave','Une vague')}${batikButton(a,'seed','loop','Une boucle')}${batikButton(a,'seed','dots','Des points')}</div><small>Tu peux ajouter ces formes avec les boutons, puis les compléter à ta façon.</small></details>`;
  if(stage===1)controls=`<div class="batik-colors" role="group" aria-label="Couleur de ton étoffe">${Object.entries(BATIK_PALETTES).map(([key,p])=>`<button class="batik-color" style="--batik-color:${p.color}" data-action="batik-palette" data-key="${key}" data-screen="${a.screen}" data-step="1" aria-pressed="${d.palette===key}"><span aria-hidden="true"></span>${p.name}</button>`).join('')}</div>`;
  if(stage===2)controls=`<div class="batik-tools batik-layouts" role="group" aria-label="Présentation de ton motif">${batikButton(a,'layout','single','Motif seul',`aria-pressed="${d.layout==='single'}"`)}${batikButton(a,'layout','repeat','Étoffe répétée',`aria-pressed="${d.layout==='repeat'}"`)}</div><div class="batik-save-row">${batikButton(a,'save',null,'Conserver ma création',d.strokes.length?'':'disabled')}${batikButton(a,'gallery',null,'Mon carnet · '+w.cards.length)}</div>${!d.strokes.length?'<p class="batik-help">Reviens au tracé pour ajouter une forme et la conserver.</p>':''}`;
  return `<section class="batik-workshop" aria-label="Atelier créatif en Indonésie"><div class="batik-step-heading"><span>Atelier libre · ${stage+1} / 3</span><h3>${headings[stage]}</h3><p>${instructions[stage]}</p></div><figure class="batik-drawing">${batikSvg(d,stage,'batik-live',stage===0)}<figcaption>${stage===0?d.strokes.length+' tracé'+(d.strokes.length>1?'s':'')+' · ton essai est enregistré au fil du dessin':BATIK_PALETTES[d.palette].name+' · création personnelle'}</figcaption></figure>${controls}<div class="batik-subactions">${worldButton('indonesie',a,'practice','skip','Passer cette activité →','india-text-button')}${stage<2?batikButton(a,'gallery',null,'Mes créations · '+w.cards.length):''}</div><details class="india-practice-sources"><summary>Le lien avec le batik</summary><p>Dans le batik, la cire protège certaines zones pendant la teinture. Ici, tu explores cette idée avec un dessin personnel à l’écran. Les formes et les couleurs choisies sont les tiennes.</p><a href="${BATIK_SOURCE}" target="_blank" rel="noopener noreferrer">Découvrir le batik indonésien · UNESCO ↗</a></details></section>`;
}
function batikCurrentCard(a){
  const cards=cleanBatikWorkshop(a.workshop).cards;
  batikGalleryIndex=Math.max(0,Math.min(cards.length-1,batikGalleryIndex));return cards[batikGalleryIndex]||null;
}
function batikGallery(a){
  const w=cleanBatikWorkshop(a.workshop),card=batikCurrentCard(a);
  if(!card)return `<div class="batik-empty-collection"><p>Ton carnet attend sa première création.</p>${worldButton('indonesie',a,'screen','practice','Ouvrir mon atelier →','btn prime')}${batikLastRemoved?batikButton(a,'restore',null,'Annuler le retrait'):''}</div>`;
  const date=new Date(card.createdAt).toLocaleDateString('fr-FR');
  return `<section class="batik-gallery" aria-label="Mes créations en Indonésie"><p class="batik-gallery-label">Création ${batikGalleryIndex+1} / ${w.cards.length} · Indonésie · ${date}</p><figure class="batik-drawing batik-gallery-drawing">${batikSvg(card.drawing,2,'batik-gallery')}<figcaption>Mon motif personnel · ${esc(BATIK_PALETTES[card.drawing.palette].name)}</figcaption></figure><div class="batik-gallery-nav" role="group" aria-label="Parcourir mes créations">${batikButton(a,'gallery-prev',null,'← Précédente',batikGalleryIndex>0?'':'disabled')}${batikButton(a,'gallery-next',null,'Suivante →',batikGalleryIndex<w.cards.length-1?'':'disabled')}</div><div class="batik-gallery-actions">${batikButton(a,'zoom',null,'Agrandir')}${batikButton(a,'download',null,'Télécharger le dessin')}${batikButton(a,'resume',null,'Reprendre ce motif')}</div><details class="batik-starters"><summary>Gérer cette création</summary><p>Le dessin téléchargé reste disponible en dehors du jeu.</p>${batikButton(a,'remove',null,'Retirer du carnet')}</details>${batikLastRemoved?batikButton(a,'restore',null,'Annuler le retrait'):''}<p class="batik-help">Tes créations sont incluses dans la sauvegarde générale de ta progression.</p></section>`;
}
function batikPersonalScene(a){
  const card=cleanBatikWorkshop(a.workshop).cards[0];if(!card)return '';
  return `<figure class="batik-personal-scene">${batikSvg(card.drawing,2,'batik-ending')}<figcaption>Ton motif rejoint les souvenirs de cette escale.</figcaption></figure>`;
}
function batikSeed(key){
  if(key==='dots')return {kind:'dots',points:[[70,130],[135,130],[200,130],[265,130],[330,130]]};
  if(key==='wave')return {kind:'line',points:Array.from({length:61},(_,i)=>[30+i*340/60,130+42*Math.sin(i/60*Math.PI*4)])};
  if(key==='loop')return {kind:'line',points:Array.from({length:65},(_,i)=>[200+95*Math.cos(i/64*Math.PI*2),130+72*Math.sin(i/64*Math.PI*2)])};
  return null;
}
function batikPersist(saved,a){saved.adventure=cleanWorldAdventure('indonesie',a);state.journeys.indonesie=saved;persist();}
function batikAction(action,key,expectedScreen,expectedStep){
  if(action==='open'){openJourney('indonesie');return worldAction('screen','practice','indonesie');}
  if(view!=='journey'||activeJourney!=='indonesie')return false;
  const saved=journeyProgress('indonesie'),a=saved.adventure,w=cleanBatikWorkshop(a.workshop);
  if(expectedScreen&&expectedScreen!==a.screen||expectedStep!==undefined&&String(expectedStep)!==String(a.practiceStep))return false;
  a.workshop=w;
  const editing=a.screen==='practice'&&!worldPane;
  let preserveScroll=true,message=null;
  if(action==='gallery'){worldPane='creations';batikGalleryIndex=0;preserveScroll=false;}
  else if(action==='gallery-prev'||action==='gallery-next'){
    if(worldPane!=='creations')return false;
    const next=batikGalleryIndex+(action==='gallery-next'?1:-1);if(next<0||next>=w.cards.length)return false;batikGalleryIndex=next;preserveScroll=false;
  }else if(['download','zoom','resume','remove'].includes(action)){
    if(worldPane!=='creations')return false;const card=batikCurrentCard(a);if(!card)return false;
    if(action==='download'){
      const title='<title>Mon motif personnel · Indonésie</title><desc>Création personnelle dans Atlas des cultures. Découverte libre de la réserve de couleur.</desc>';
      const svg=batikSvg(card.drawing,2,'batik-download').replace(/ role="img"/,'').replace(/<svg([^>]*)>/,'<svg$1>'+title);
      downloadBlob(svg,'image/svg+xml;charset=utf-8','atlas-indonesie-'+card.id+'.svg');return true;
    }
    if(action==='zoom')return openBatikZoom(a);
    if(action==='resume'){w.draft=cleanBatikDraft(card.drawing);worldPane=null;a.screen='practice';a.practiceStep=0;a.place=2;a.visited=[...new Set([...a.visited,2])];preserveScroll=false;}
    if(action==='remove'){batikLastRemoved=card;w.cards=w.cards.filter(c=>c.id!==card.id);message='Création retirée. Tu peux annuler ce retrait.';}
  }else if(action==='restore'){
    if(worldPane!=='creations'||!batikLastRemoved||w.cards.length>=BATIK_LIMITS.cards)return false;
    if(!w.cards.some(c=>c.id===batikLastRemoved.id))w.cards.unshift(batikLastRemoved);batikLastRemoved=null;message='Création remise dans ton carnet.';
  }else{
    if(!editing)return false;
    if(action==='tool'){if(a.practiceStep!==0||!['line','dots'].includes(key))return false;w.draft.tool=key;}
    else if(action==='seed'){
      if(a.practiceStep!==0||w.draft.strokes.length>=BATIK_LIMITS.strokes)return false;const s=batikSeed(key);if(!s)return false;w.draft.strokes.push(s);
    }else if(action==='undo'){
      if(a.practiceStep!==0||!w.draft.strokes.length)return false;w.draft.strokes.pop();
    }else if(action==='palette'){if(a.practiceStep!==1||!Object.hasOwn(BATIK_PALETTES,key))return false;w.draft.palette=key;}
    else if(action==='layout'){if(a.practiceStep!==2||!['single','repeat'].includes(key))return false;w.draft.layout=key;}
    else if(action==='save'){
      if(a.practiceStep!==2||!w.draft.strokes.length)return false;
      const id=batikContentId(w.draft);
      if(w.cards.some(c=>c.id===id))message='Cette création est déjà dans ton carnet.';
      else if(w.cards.length>=BATIK_LIMITS.cards)message='Ton carnet contient 24 créations. Tu peux en télécharger et en retirer pour faire une nouvelle place.';
      else{w.cards.unshift({id,createdAt:new Date().toISOString(),drawing:cleanBatikDraft(w.draft)});message='✓ Ta création est conservée dans le carnet.';}
    }else return false;
  }
  const scroll=document.getElementById('india-screen-scroll')?.scrollTop||0;
  batikPersist(saved,a);worldNotice=message;render();
  const scroller=document.getElementById('india-screen-scroll');if(scroller)scroller.scrollTop=preserveScroll?scroll:0;
  app.querySelector(`[data-action="batik-${action}"]${key?`[data-key="${key}"]`:''}`)?.focus({preventScroll:true});return true;
}
function batikAppendStroke(stroke){
  if(view!=='journey'||activeJourney!=='indonesie'||worldPane)return false;
  const saved=journeyProgress('indonesie'),a=saved.adventure;if(a.screen!=='practice'||a.practiceStep!==0)return false;
  const w=cleanBatikWorkshop(a.workshop),clean=cleanBatikDraft({strokes:[stroke]}).strokes[0];
  if(!clean||w.draft.strokes.length>=BATIK_LIMITS.strokes)return false;
  w.draft.strokes.push(clean);a.workshop=w;batikPersist(saved,a);return true;
}
function batikEventPoint(svg,event){
  if(svg.createSVGPoint&&svg.getScreenCTM?.()){
    const p=svg.createSVGPoint();p.x=event.clientX;p.y=event.clientY;const local=p.matrixTransform(svg.getScreenCTM().inverse());return [Math.max(5,Math.min(395,local.x)),Math.max(5,Math.min(255,local.y))];
  }
  const r=svg.getBoundingClientRect();return [Math.max(5,Math.min(395,(event.clientX-r.left)*400/r.width)),Math.max(5,Math.min(255,(event.clientY-r.top)*260/r.height))];
}
function bindBatikDrawing(){
  const svg=document.getElementById('batik-surface');if(!svg?.addEventListener)return;
  svg.addEventListener('pointerdown',event=>{
    if(event.isPrimary===false||event.button!==undefined&&event.button!==0||batikPointer)return;
    const a=journeyProgress('indonesie').adventure,w=cleanBatikWorkshop(a.workshop);if(w.draft.strokes.length>=BATIK_LIMITS.strokes){worldNotice='Tu peux annuler un tracé pour en ajouter un nouveau.';render();return;}
    event.preventDefault();const point=batikEventPoint(svg,event);batikPointer={id:event.pointerId,kind:w.draft.tool,points:[point],svg};
    svg.setPointerCapture?.(event.pointerId);svg.querySelector('#batik-empty-hint')?.parentNode?.querySelectorAll('text').forEach(el=>el.remove());
    const g=document.createElementNS('http://www.w3.org/2000/svg','g');g.id='batik-live-stroke';g.innerHTML=batikStrokeSvg(batikPointer,0);svg.querySelector('#batik-marks')?.appendChild(g);
  });
  svg.addEventListener('pointermove',event=>{
    const p=batikPointer;if(!p||p.id!==event.pointerId||p.svg!==svg||p.kind==='dots')return;
    const next=batikEventPoint(svg,event),last=p.points.at(-1);if(Math.hypot(next[0]-last[0],next[1]-last[1])<2)return;
    p.points.push(next);if(p.points.length>BATIK_LIMITS.points)p.points=p.points.filter((_,i)=>i%2===0||i===p.points.length-1);
    const el=svg.querySelector('#batik-live-stroke');if(el)el.innerHTML=batikStrokeSvg(p,0);
  });
  const finish=event=>{
    const p=batikPointer;if(!p||p.id!==event.pointerId||p.svg!==svg)return;batikPointer=null;
    if(svg.hasPointerCapture?.(event.pointerId))svg.releasePointerCapture?.(event.pointerId);
    if(batikAppendStroke(p)){const scroll=document.getElementById('india-screen-scroll')?.scrollTop||0;render();const scroller=document.getElementById('india-screen-scroll');if(scroller)scroller.scrollTop=scroll;}
  };
  svg.addEventListener('pointerup',finish);svg.addEventListener('pointercancel',finish);svg.addEventListener('lostpointercapture',finish);
}
function openBatikZoom(a){
  const card=batikCurrentCard(a);if(!card)return false;
  document.getElementById('batik-zoom')?.remove();
  const dialog=document.createElement('dialog');dialog.id='batik-zoom';dialog.className='batik-zoom';dialog.setAttribute('aria-label','Ma création en grand');
  dialog.innerHTML=`<div class="batik-zoom-toolbar"><strong>Ma création · Indonésie</strong><button data-action="batik-close-zoom" autofocus>Fermer ✕</button></div><figure>${batikSvg(card.drawing,2,'batik-zoom-art')}<figcaption>${esc(BATIK_PALETTES[card.drawing.palette].name)} · ${batikGalleryIndex+1}/${cleanBatikWorkshop(a.workshop).cards.length}</figcaption></figure><div class="batik-zoom-navigation"><button data-action="batik-zoom-prev"${batikGalleryIndex===0?' disabled':''}>← Précédente</button><button data-action="batik-zoom-next"${batikGalleryIndex===cleanBatikWorkshop(a.workshop).cards.length-1?' disabled':''}>Suivante →</button></div>`;
  document.body.appendChild(dialog);dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});dialog.addEventListener('close',()=>{dialog.remove();if(view==='journey'&&activeJourney==='indonesie'&&worldPane==='creations'){const scroll=document.getElementById('india-screen-scroll')?.scrollTop||0;render();const el=document.getElementById('india-screen-scroll');if(el)el.scrollTop=scroll;if(!document.querySelector('dialog[open]'))app.querySelector('[data-action="batik-zoom"]')?.focus({preventScroll:true});}});dialog.showModal();return true;
}
document.addEventListener('click',event=>{
  const button=event.target.closest('[data-action]');if(!button?.dataset.action?.startsWith('batik-'))return;
  const d=button.dataset,action=d.action.slice(6);
  if(action==='close-zoom'){document.getElementById('batik-zoom')?.close();return;}
  if(action==='zoom-next'||action==='zoom-prev'){
    const a=journeyProgress('indonesie').adventure,next=batikGalleryIndex+(action==='zoom-next'?1:-1),cards=cleanBatikWorkshop(a.workshop).cards;
    if(next<0||next>=cards.length)return;batikGalleryIndex=next;document.getElementById('batik-zoom')?.close();openBatikZoom(a);return;
  }
  batikAction(action,d.key,d.screen,d.step);
});

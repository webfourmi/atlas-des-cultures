/* Moteur des douze aventures : scènes fictives, repères sourcés et pratique facultative. */
'use strict';
const WORLD_SCREEN_KEYS=['intro','host','photo','geste','partage','partner','practice','route','puzzle','preparation','ready','ending'];
const WORLD_PIECES=['photo','geste','partage'];
const WORLD_SEQUENCE=['host','photo','geste','partage','partner','practice','route','puzzle','preparation','ready'];
const WORLD_ART_DETAILS={
  japon:'Petits bols, riz et légumes sur une table de cuisine imaginée pour le récit.',
  coree:'Un bocal de kimchi, des légumes et des cartes de partage sur une table.',
  vietnam:'Des sièges disposés face à face et des feuilles de notes dans une cour.',
  indonesie:'Une étoffe, un outil canting posé et des échantillons dans un atelier de batik imaginé.',
  vanuatu:'Un support de sable portant un tracé libre et un carnet, accessoires du récit.',
  turquie:'Un plateau avec de petites tasses de café, des verres d’eau et une cafetière cezve.',
  georgie:'Des jarres en terre cuite et une petite forme d’étude dans un atelier imaginé.',
  maroc:'Un carnet ouvert et des sièges de conteurs au bord d’une place imaginée.',
  kenya:'Des percussions et des sièges préparés pour un moment d’écoute imaginé.',
  mexique:'Du maïs, des haricots, des tortillas et un metate dans une cuisine imaginée.',
  bresil:'Un berimbau, un caxixi et un pandeiro posés près d’un espace de rencontre imaginé.',
  perou:'Des brins et pelotes de fibres végétales sur une surface de travail, dans les Andes imaginées.'
};
let worldPane=null,worldNotice=null;
function newWorldAdventure(){
  return {version:1,started:false,screen:'intro',place:0,visited:[],clues:[],photoNote:null,log:[],reply:null,piece:'photo',board:{photo:null,geste:null,partage:null},checked:false,hint:0,plan:null,preparations:{atelier:null,rencontre:null},practiceStep:0,practiceChoices:[null,null,null],practiceStatus:null,ending:null,endings:[]};
}
function worldPlan(id,a){return WORLD_ADVENTURES[id].plans.find(p=>p.id===a.plan)||null;}
function worldPreparation(id,a){return worldPlan(id,a)?.options.find(o=>o.id===a.preparations[a.plan])||null;}
function worldSolved(id,a){return a.checked&&WORLD_ADVENTURES[id].puzzle.supports.every(p=>a.board[p.id]===p.correct);}
function worldScreenPlace(id,a,screen){
  if(['preparation','ready','ending'].includes(screen))return worldPlan(id,a)?.place??2;
  return {intro:0,host:0,photo:0,geste:1,partage:1,puzzle:1,partner:2,practice:2,route:2}[screen]??a.place;
}
function worldSuggestedScreen(id,a,place){
  if(place===0)return a.plan==='atelier'&&!a.preparations.atelier?'preparation':a.clues.includes('photo')?'host':'photo';
  if(place===1)return !a.clues.includes('geste')?'geste':!a.clues.includes('partage')?'partage':'puzzle';
  return a.plan==='rencontre'&&!a.preparations.rencontre?'preparation':'partner';
}
function worldTasks(id,a){
  const data=WORLD_ADVENTURES[id],tasks=[];
  if(!a.clues.includes('photo'))tasks.push({screen:'photo',text:'Lire la légende de la photographie'});
  for(const key of ['geste','partage'])if(!a.clues.includes(key))tasks.push({screen:key,text:'Examiner : '+data.clues.find(c=>c.id===key).title});
  if(!a.visited.includes(2))tasks.push({screen:'partner',text:'Rencontrer '+data.characters[1].name});
  if(!worldSolved(id,a))tasks.push({screen:'puzzle',text:'Vérifier les trois associations'});
  if(!a.plan)tasks.push({screen:'route',text:'Choisir la suite de la rencontre'});
  else if(!worldPreparation(id,a))tasks.push({screen:'preparation',text:worldPlan(id,a).preparationTitle});
  return tasks;
}
function worldLogItems(id){
  const data=WORLD_ADVENTURES[id],items={};
  data.characters.forEach((p,person)=>p.questions.forEach((q,i)=>{items['talk:'+person+':'+i]={speaker:p.name,label:q.question,reply:q.answer,place:person===0?0:2};}));
  for(const plan of data.plans){
    items['plan:'+plan.id]={speaker:data.characters[1].name,label:plan.title,reply:plan.reply,place:2};
    for(const option of plan.options)items['prepare:'+plan.id+':'+option.id]={speaker:data.characters[plan.place===0?0:1].name,label:option.label,reply:option.reply,place:plan.place};
  }
  return items;
}
function cleanWorldAdventure(id,value){
  const a=newWorldAdventure(),data=WORLD_ADVENTURES[id];
  if(!data||!value||typeof value!=='object'||Array.isArray(value))return a;
  const list=(v,allowed)=>Array.isArray(v)?[...new Set(v.filter(x=>allowed.includes(x)))]:[];
  a.endings=list(value.endings,['atelier','rencontre']);
  if(value.started!==true)return a;
  a.started=true;a.place=[0,1,2].includes(value.place)?value.place:0;
  a.visited=[...new Set([0,...list(value.visited,[0,1,2]),a.place])];
  a.clues=list(value.clues,WORLD_PIECES);
  a.photoNote=[0,1,2].includes(value.photoNote)?value.photoNote:null;
  const labels=data.puzzle.labels.map(l=>l.id),used=new Set();
  for(const piece of WORLD_PIECES){const v=value.board?.[piece];if(labels.includes(v)&&!used.has(v)){a.board[piece]=v;used.add(v);}}
  a.piece=WORLD_PIECES.includes(value.piece)?value.piece:WORLD_PIECES.find(p=>!a.board[p])||'photo';
  a.checked=value.checked===true;a.hint=Number.isInteger(value.hint)?Math.max(0,Math.min(2,value.hint)):0;
  a.plan=data.plans.some(p=>p.id===value.plan)?value.plan:null;
  for(const p of data.plans)if(p.options.some(o=>o.id===value.preparations?.[p.id]))a.preparations[p.id]=value.preparations[p.id];
  a.practiceStep=Number.isInteger(value.practiceStep)?Math.max(0,Math.min(2,value.practiceStep)):0;
  a.practiceChoices=a.practiceChoices.map((_,i)=>[0,1].includes(value.practiceChoices?.[i])?value.practiceChoices[i]:null);
  a.practiceStatus=['done','skipped'].includes(value.practiceStatus)?value.practiceStatus:null;
  const items=worldLogItems(id);
  a.log=list(value.log,Object.keys(items)).filter(key=>a.visited.includes(items[key].place)).slice(-24);
  a.reply=a.log.includes(value.reply)?value.reply:null;
  if(value.ending===a.plan&&a.plan&&worldTasks(id,a).length===0){a.ending=a.plan;a.endings=[...new Set([...a.endings,a.ending])];}
  a.screen=WORLD_SCREEN_KEYS.includes(value.screen)?value.screen:worldSuggestedScreen(id,a,a.place);
  if(a.screen==='intro'||a.screen==='ending'&&!a.ending)a.screen=worldSuggestedScreen(id,a,a.place);
  if(a.screen==='preparation'&&!a.plan)a.screen='route';
  if(worldScreenPlace(id,a,a.screen)!==a.place)a.screen=worldSuggestedScreen(id,a,a.place);
  if(a.ending&&(!value.screen||value.screen==='intro')){a.screen='ending';a.place=worldScreenPlace(id,a,'ending');}
  return a;
}
function mergeWorldAdventure(id,local,incoming){
  const here=cleanWorldAdventure(id,local),restored=cleanWorldAdventure(id,incoming),result=here.started?here:restored;
  result.endings=[...new Set([...here.endings,...restored.endings])];return result;
}
function worldButton(id,a,action,key,label,style='btn ghost',extra=''){
  const reviewActions=['move','screen','piece','pane','replay','clear-reply','note','practice','practice-choice','talk','legacy'];
  const frozen=a.ending&&(!reviewActions.includes(action)||action==='talk'&&!a.log.includes(key));
  return `<button class="${style}" data-action="world-${action}" data-journey="${id}"${key!==null&&key!==undefined?` data-key="${esc(String(key))}"`:''} data-from="${a.place}" data-screen="${a.screen}" data-step="${a.practiceStep}"${action==='answer'?` data-piece="${a.piece}"`:''}${frozen?' disabled':''} ${extra}>${esc(label)}</button>`;
}
function worldArtImage(id,kind){
  const data=WORLD_ADVENTURES[id],alt=kind==='rencontre'?`${data.characters[0].name} et ${data.characters[1].name}, les deux personnages imaginés de cette aventure.`:WORLD_ART_DETAILS[id];
  return `<img src="./travel/adventures/art/${id}-${kind}.webp" width="960" height="640" alt="${esc(alt)}" decoding="async">`;
}
function worldSceneArt(id,a){
  if(worldPane==='carte'){
    const place=TRAVEL_PLACES[id],p=projectTravelPoint(place);
    return `<figure class="world-map-figure"><div class="world-map-picture"><img src="./travel/world.svg" width="1000" height="500" alt="Planisphère Natural Earth avec un repère pour ${esc(place.name)}."><span style="left:${p.x/10}%;top:${p.y/5}%" aria-hidden="true"></span></div><figcaption>${esc(place.name)} · repère géographique</figcaption></figure>`;
  }
  if(!worldPane&&['photo','puzzle'].includes(a.screen))return '';
  const kind=worldPane?(['indices','sources','aide'].includes(worldPane)?'atelier':'rencontre'):['geste','partage','practice','preparation'].includes(a.screen)?'atelier':'rencontre';
  const caption=kind==='rencontre'?`${WORLD_ADVENTURES[id].characters[0].name} et ${WORLD_ADVENTURES[id].characters[1].name} dans notre récit.`:'Les objets et le décor imaginés pour cette escale.';
  return `<figure class="india-scene"><a href="./travel/adventures/art/${id}-${kind}.webp" target="_blank" rel="noopener" aria-label="Agrandir l’illustration">${worldArtImage(id,kind)}</a><figcaption>${esc(caption)}<small>Illustration du récit · <a href="./travel/adventures/ART-${kind==='rencontre'?'RENCONTRES':'ATELIERS'}.md" target="_blank" rel="noopener">création et crédits ↗</a></small></figcaption></figure>`;
}
function worldCurrentReply(id,a,keys){
  if(!keys.includes(a.reply))return '';
  const line=worldLogItems(id)[a.reply];
  return `<div class="india-current-reply">${journeyLine('Toi',line.label,true)}${journeyLine(line.speaker,line.reply)}${worldButton(id,a,'clear-reply',null,'Revoir les choix','india-text-button')}</div>`;
}
function worldDialogue(id,a,person){
  const p=WORLD_ADVENTURES[id].characters[person],keys=p.questions.map((_,i)=>'talk:'+person+':'+i);
  return `<section class="india-dialogue"><div class="india-person"><span aria-hidden="true">${esc(p.name[0])}</span><div><strong>${esc(p.name)}</strong><small>${esc(p.role)} · personnage fictif</small></div></div>${worldCurrentReply(id,a,keys)||`${journeyLine(p.name,p.greeting)}<div class="india-talk-choices">${p.questions.map((q,i)=>worldButton(id,a,'talk',keys[i],q.question+(a.log.includes(keys[i])?' ✓':''),'journey-choice')).join('')}</div>`}</section>`;
}
function worldPhoto(id,a){
  const p=TRAVEL_PHOTOS[id],data=WORLD_ADVENTURES[id];
  return `<section class="india-photo-activity"><figure class="india-photo world-document-photo"><a href="${p.local}" target="_blank" rel="noopener" aria-label="Agrandir la photographie"><img src="${p.local}" width="${p.width}" height="${p.height}" alt="${esc(p.caption)}"></a><figcaption>${travelCredit(id)}</figcaption></figure><div class="india-detail-buttons" role="group" aria-label="Observer la photographie">${data.photoNotes.map((n,i)=>worldButton(id,a,'note',i,n.label,'india-detail-button',`aria-pressed="${a.photoNote===i}"`)).join('')}</div><div class="india-observation" aria-live="polite">${a.photoNote===null?'<p>Observe la photographie, puis lis sa légende pour conserver le premier indice.</p>':`<strong>${esc(data.photoNotes[a.photoNote].label)}</strong><p>${esc(data.photoNotes[a.photoNote].text)}</p>${a.photoNote===2?`<p class="world-original-caption">Légende de la source : ${esc(p.caption)}</p><small>✓ Indice conservé</small>`:''}`}</div></section>`;
}
function worldDocument(id,a,key){
  const clue=WORLD_ADVENTURES[id].clues.find(c=>c.id===key);
  return `<section class="india-document-card">${a.clues.includes(key)?`<p class="india-document-text">${esc(clue.text)}</p><p class="india-found">✓ Indice conservé dans ton carnet</p><a class="india-source-link" href="${esc(clue.source)}" target="_blank" rel="noopener noreferrer">Vérifier ce repère dans la source officielle ↗</a>`:`<p>Un document de l’escale t’attend : « ${esc(clue.title)} ».</p>${worldButton(id,a,'read',key,'Examiner ce document','btn prime')}`}<small class="india-fiction-small">Le support illustré appartient au récit ; le texte est une synthèse documentaire sourcée.</small></section>`;
}
function worldPracticeMedia(id){
  const audio=TRAVEL_AUDIO.filter(x=>x.stop===id),video=TRAVEL_VIDEO.find(x=>x.stop===id);
  if(audio.length)return `<details class="world-media"><summary>Écouter les vrais extraits de berimbau</summary>${audio.map(item=>`<div class="sound-card world-sound"><strong>${esc(item.title)}</strong><p>${esc(item.guide)}</p><audio controls preload="none" aria-label="${esc(item.title)}"><source src="${item.src}" type="${item.type}"></audio><small>${esc(item.duration)} · ${esc(item.author)} · ${esc(item.license)} · <a href="${esc(item.source)}" target="_blank" rel="noopener">Source ↗</a></small><p class="media-fallback" hidden><a href="${item.src}" target="_blank" rel="noopener">Ouvrir le fichier audio ↗</a></p></div>`).join('')}</details>`;
  if(video)return `<details class="world-media"><summary>Écouter le documentaire officiel · Internet</summary><p>${esc(video.guide)}</p><div id="video-${video.id}" class="video-mount"><button class="btn ghost" data-action="travel-video" data-id="${video.id}">Charger le lecteur officiel</button></div><small>${esc(video.credit)} · <a href="${esc(video.source)}" target="_blank" rel="noopener noreferrer">Source UNESCO ↗</a></small></details>`;
  return '';
}
function worldPractice(id,a){
  const practice=WORLD_ADVENTURES[id].practice,step=practice.steps[a.practiceStep],selected=a.practiceChoices[a.practiceStep];
  return `<section class="india-practice"><p class="india-practice-intro">${esc(practice.intro)}</p><div class="india-practice-step"><small>Facultatif · à ton rythme · ${a.practiceStep+1} / 3</small><h3>${esc(step.title)}</h3><p>${esc(step.text)}</p><div class="world-practice-choices" role="group" aria-label="Ton choix dans cette découverte">${step.options.map((o,i)=>worldButton(id,a,'practice-choice',i,o.label,'india-answer',`aria-pressed="${selected===i}"`)).join('')}</div>${selected===null?'':`<p class="world-practice-response" role="status">${esc(step.options[selected].reply)}</p>`}</div>${worldPracticeMedia(id)}${a.practiceStep===2?`<p class="world-practice-finish">${esc(practice.finishText)}</p><details class="india-recap"><summary>Revoir mes choix</summary><ol>${practice.steps.map((item,i)=>`<li>${esc(item.title)} : ${a.practiceChoices[i]===null?'à imaginer':esc(item.options[a.practiceChoices[i]].label)}</li>`).join('')}</ol></details>`:''}${worldButton(id,a,'practice','skip','Passer cette activité →','india-text-button')}<details class="india-practice-sources"><summary>À propos de cette découverte</summary><p>Cette activité imaginée pour le jeu permet d’observer ou de créer librement. Elle ne remplace pas un apprentissage auprès des personnes qui portent la tradition. Aucun choix n’est nécessaire pour terminer l’aventure.</p><a href="${esc(practice.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(practice.sourceLabel)} ↗</a></details></section>`;
}
function worldPuzzle(id,a){
  const data=WORLD_ADVENTURES[id].puzzle,support=data.supports.find(s=>s.id===a.piece),index=WORLD_PIECES.indexOf(a.piece),solved=worldSolved(id,a),errors=data.supports.filter(p=>a.board[p.id]!==p.correct);
  return `<section class="india-puzzle" aria-label="L’énigme de l’escale"><div class="india-puzzle-heading"><span>Support ${index+1} / 3</span><div role="group" aria-label="Choisir un support">${data.supports.map((p,i)=>worldButton(id,a,'piece',p.id,String(i+1),'india-piece-dot',`aria-label="${esc(p.name)}" aria-pressed="${a.piece===p.id}" aria-invalid="${a.checked&&a.board[p.id]!==p.correct}"`)).join('')}</div></div><div class="india-puzzle-support">${a.piece==='photo'?`<img src="${TRAVEL_PHOTOS[id].local}" width="${TRAVEL_PHOTOS[id].width}" height="${TRAVEL_PHOTOS[id].height}" alt="${esc(TRAVEL_PHOTOS[id].caption)}">`:worldArtImage(id,'atelier')}<div><h3>${esc(support.name)}</h3><p>${esc(support.text)}</p><small>${a.piece==='photo'?'Photographie · crédits dans Sources':'Illustration du récit'}</small></div></div><p class="india-question">${esc(data.prompt)}</p><div class="india-answer-choices" role="group" aria-label="Associer une idée au support">${data.labels.map(label=>worldButton(id,a,'answer',label.id,label.text,'india-answer',`aria-pressed="${a.board[a.piece]===label.id}"`)).join('')}</div>${a.checked?`<p class="india-board-result ${solved?'success':''}" role="status">${solved?'✓ Les trois associations sont justes.':`Il reste ${errors.length} ${errors.length===1?'association à revoir':'associations à revoir'}. Reviens aux supports signalés.`}</p>`:`<p class="india-board-count">${Object.values(a.board).filter(Boolean).length} / 3 idées associées</p>`}${worldButton(id,a,'hint',null,'Un indice','india-text-button')}</section>`;
}
function worldBranch(id,a){
  const data=WORLD_ADVENTURES[id];
  if(a.screen==='route')return worldCurrentReply(id,a,data.plans.map(p=>'plan:'+p.id))||`<p>${esc(data.characters[1].name)} te propose deux façons de poursuivre.</p><div class="india-route-choices">${data.plans.map(p=>`<div>${worldButton(id,a,'plan',p.id,p.title,'india-answer',`aria-pressed="${a.plan===p.id}"`)}<p>${esc(p.description)}</p></div>`).join('')}</div>`;
  const plan=worldPlan(id,a);
  return worldCurrentReply(id,a,plan.options.map(o=>'prepare:'+plan.id+':'+o.id))||`<p>${esc(plan.preparationPrompt)}</p><div class="india-route-choices">${plan.options.map(o=>worldButton(id,a,'prepare',o.id,o.label,'india-answer',`aria-pressed="${a.preparations[a.plan]===o.id}"`)).join('')}</div>`;
}
function worldLegacyNotes(id,saved){
  const j=JOURNEYS[id];
  return saved.seen.length||saved.completed||saved.history.length?`<details class="india-recap"><summary>Mes repères déjà obtenus</summary><p>${saved.completed?'✓ Cette escale reste inscrite dans ton carnet.':'Tes découvertes sont conservées.'}</p>${saved.seen.map(key=>`<h3>${esc(j[key].title)}</h3><p>${esc(j[key].text)}</p>`).join('')}${saved.history.length?`<details class="world-legacy-history"><summary>Relire mon ancien échange</summary>${journeyConversation(id,saved)}</details>`:''}</details>`:'';
}
function worldUtility(id,a,saved){
  const data=WORLD_ADVENTURES[id];
  if(worldPane==='indices')return `<p>${a.clues.length} / 3 indices de cette aventure.</p><div class="india-notebook">${data.clues.filter(c=>a.clues.includes(c.id)).map(c=>`<details><summary>${esc(c.title)}</summary><p>${esc(c.text)}</p><a href="${esc(c.source==='photo'?TRAVEL_PHOTOS[id].source:c.source)}" target="_blank" rel="noopener noreferrer">Vérifier la source ↗</a></details>`).join('')||'<p>Les indices apparaîtront pendant ton exploration.</p>'}</div>${worldLegacyNotes(id,saved)}`;
  if(worldPane==='dialogues'){
    const items=worldLogItems(id);
    return `<p>Retrouve les échanges de cette aventure.</p><div class="india-history">${a.log.map(key=>`<details name="world-history"><summary>${esc(items[key].speaker)} · ${esc(items[key].label)}</summary><p>${esc(items[key].reply)}</p></details>`).join('')||'<p>Les conversations seront conservées ici.</p>'}</div>${worldLegacyNotes(id,saved)}`;
  }
  if(worldPane==='sources')return `<p class="fiction-note">Lieux de la scène, personnages, dialogues et dénouements fictifs, racontés en français. Cette tradition ne résume pas le pays ni toutes ses communautés.</p>${data.sources.map(s=>`<p><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)} ↗</a><small class="world-source-support">${esc(s.supports)}</small></p>`).join('')}<details class="india-recap"><summary>Photographie et illustrations</summary>${travelCredit(id,true)}<p>Les personnes photographiées ne représentent pas nos personnages. Les autres scènes sont des illustrations créées avec un outil d’IA pour le récit.</p><p><a href="./travel/adventures/ART-RENCONTRES.md" target="_blank" rel="noopener">Illustrations des rencontres ↗</a> · <a href="./travel/adventures/ART-ATELIERS.md" target="_blank" rel="noopener">Illustrations des activités ↗</a></p></details><button class="btn ghost" data-action="read" data-id="${id}">Lire la fiche culturelle</button>`;
  if(worldPane==='carte'){
    const place=TRAVEL_PLACES[id];
    return `<p>Ce repère aide à situer l’escale. Les lieux de notre petite aventure sont imaginés ; la tradition existe aussi ailleurs.</p><p><a href="https://www.openstreetmap.org/?mlat=${place.lat}&mlon=${place.lon}#map=9/${place.lat}/${place.lon}" target="_blank" rel="noopener noreferrer">Ouvrir la carte détaillée ↗</a></p><p class="travel-small">Fond <a href="https://www.naturalearthdata.com/about/terms-of-use/" target="_blank" rel="noopener noreferrer">Natural Earth, domaine public ↗</a> · <a href="${esc(place.source)}" target="_blank" rel="noopener noreferrer">Coordonnées de référence ↗</a>.</p>`;
  }
  if(worldPane==='aide')return `<p>${esc(a.hint<2?data.puzzle.hint:data.puzzle.supports.map(p=>p.name+' → '+data.puzzle.labels.find(l=>l.id===p.correct).text).join(' · '))}</p>${a.hint<2?worldButton(id,a,'hint',null,'Voir les trois associations','btn ghost'):''}`;
  const tasks=worldTasks(id,a);
  return `<p>${esc(data.mission)}</p><p class="india-found">${a.clues.length} / 3 indices · ${a.endings.length} / 2 souvenirs</p>${a.started&&!a.ending&&tasks.length?`<div class="india-mission-next"><strong>La prochaine chose à faire</strong><p>${esc(tasks[0].text)}</p>${worldButton(id,a,'screen',tasks[0].screen,'Y aller →','btn prime')}</div><details class="india-recap"><summary>Tous les préparatifs restants</summary><ul>${tasks.map(t=>`<li>${worldButton(id,a,'screen',t.screen,t.text,'india-task-button')}</li>`).join('')}</ul></details>`:''}${a.ending?data.plans.map(p=>`<p>${a.endings.includes(p.id)?'✓ '+esc(p.endingTitle):'○ Un autre dénouement à découvrir'}</p>`).join(''):''}${a.started?worldButton(id,a,'screen','practice','Retrouver la petite activité →','india-text-button'):''}${RECIPES[id]?`<button class="btn ghost world-recipe" data-action="recipe" data-id="${id}">Retrouver la recette →</button>`:''}${worldLegacyNotes(id,saved)}<details class="india-recap"><summary>Recommencer l’aventure</summary><p>Tes découvertes et les souvenirs déjà obtenus seront conservés.</p>${worldButton(id,a,'replay',null,'Recommencer','btn ghost')}</details>`;
}
function worldScreenTitle(id,a){
  const data=WORLD_ADVENTURES[id];
  return {intro:data.title,host:'Un coup de main à '+data.characters[0].name,photo:'Observer la photographie',geste:data.clues[1].title,partage:data.clues[2].title,partner:'Rencontrer '+data.characters[1].name,practice:data.practice.title,route:'Choisir la suite',puzzle:'Relier les découvertes',preparation:worldPlan(id,a)?.preparationTitle,ready:'Les derniers préparatifs',ending:worldPlan(id,a)?.endingTitle}[a.screen]||data.title;
}
function worldScreenBody(id,a,saved){
  const data=WORLD_ADVENTURES[id];
  if(worldPane)return worldUtility(id,a,saved);
  if(a.screen==='intro')return `<p>${esc(data.intro)}</p><p class="world-mission">${esc(data.mission)}</p><p class="india-start-help">Les trois lieux restent accessibles dans la barre du haut.</p>${saved.completed||saved.seen.length?'<p class="travel-small">Tes découvertes et ta rencontre précédentes sont conservées dans le carnet.</p>':''}`;
  if(a.screen==='host')return worldDialogue(id,a,0);
  if(a.screen==='partner')return worldDialogue(id,a,1);
  if(a.screen==='photo')return worldPhoto(id,a);
  if(['geste','partage'].includes(a.screen))return worldDocument(id,a,a.screen);
  if(a.screen==='practice')return worldPractice(id,a);
  if(a.screen==='puzzle')return worldPuzzle(id,a);
  if(['route','preparation'].includes(a.screen))return worldBranch(id,a);
  if(a.screen==='ending'){
    const option=worldPreparation(id,a),plan=worldPlan(id,a),person=data.characters[plan.place===0?0:1];
    return `<p>${esc(option.endingText)}</p>${journeyLine(person.name,option.endingReply)}<p class="india-found">✓ Souvenir conservé · ${a.endings.length} / 2 dénouements</p>${RECIPES[id]?`<button class="btn ghost world-recipe" data-action="recipe" data-id="${id}">Prolonger avec la recette →</button>`:''}`;
  }
  const tasks=worldTasks(id,a);
  return tasks.length?`<p>Il reste un préparatif.</p><div class="india-mission-next"><strong>${esc(tasks[0].text)}</strong></div>`:`<p>Les trois découvertes sont reliées et votre dernier choix est prêt.</p><p>${esc(worldPlan(id,a).title)} : ${esc(worldPreparation(id,a).label)}.</p><p>Tu peux rejoindre ${esc(data.characters[worldPlan(id,a).place===0?0:1].name)} pour la suite.</p>`;
}
function worldPrimary(id,a){
  const screen=(key,label)=>({action:'screen',key,label});
  if(a.screen==='practice')return {action:'practice',key:a.practiceStep<2?'next':'done',label:a.practiceStep<2?'Étape suivante →':'Terminer la découverte →'};
  if(a.ending)return screen('ending','Revoir mon dénouement →');
  if(a.screen==='intro')return {action:'start',label:'Commencer l’aventure →'};
  if(a.screen==='host')return screen('photo','Observer la photo →');
  if(a.screen==='photo')return a.clues.includes('photo')?screen('geste','Continuer la découverte →'):{action:'note',key:2,label:'Lire la légende →'};
  if(['geste','partage'].includes(a.screen))return a.clues.includes(a.screen)?screen(a.screen==='geste'?'partage':'partner',a.screen==='geste'?'Découvrir le second document →':'Rencontrer '+WORLD_ADVENTURES[id].characters[1].name+' →'):{action:'read',key:a.screen,label:'Lire ce document →'};
  if(a.screen==='partner')return screen('practice','Essayer une petite activité →');
  if(a.screen==='route')return a.plan?screen('puzzle','Relier mes découvertes →'):{label:'Choisis la suite ci-dessus',disabled:true};
  if(a.screen==='puzzle'){
    if(worldSolved(id,a)){const task=worldTasks(id,a)[0];return task?screen(task.screen,'Continuer les préparatifs →'):screen('ready','Tout est prêt →');}
    if(!a.board[a.piece])return {label:'Choisis une idée ci-dessus',disabled:true};
    if(a.checked)return {action:'check',label:'Vérifier à nouveau'};
    const index=WORLD_PIECES.indexOf(a.piece);
    return index<2?{action:'piece',key:WORLD_PIECES[index+1],label:'Support suivant →'}:{action:'check',label:'Vérifier les associations'};
  }
  if(a.screen==='preparation')return worldPreparation(id,a)?screen('ready','Les préparatifs sont prêts →'):{label:'Choisis une proposition',disabled:true};
  const task=worldTasks(id,a)[0];return task?screen(task.screen,'Poursuivre ce préparatif →'):{action:'finish',label:'Rejoindre la suite →'};
}
function renderWorldAdventure(id){
  const saved=journeyProgress(id),a=saved.adventure,data=WORLD_ADVENTURES[id],stop=STOPS.find(s=>s.id===id),primary=worldPrimary(id,a),index=WORLD_SEQUENCE.indexOf(a.screen);
  const titles={mission:'Ta mission',indices:'Tes découvertes',dialogues:'Les échanges',sources:'Sources et récit',carte:'Situer cette escale',aide:'Un indice pour l’énigme'};
  const previous=a.screen==='practice'&&a.practiceStep>0?{action:'practice',key:'previous'}:a.screen==='puzzle'&&a.piece!=='photo'?{action:'piece',key:WORLD_PIECES[WORLD_PIECES.indexOf(a.piece)-1]}:index>0?{action:'screen',key:WORLD_SEQUENCE[index-1]==='preparation'&&!a.plan?'route':WORLD_SEQUENCE[index-1]}:null;
  app.innerHTML=`<section class="india-player world-player" aria-label="Aventure : ${esc(stop.country)}"><header class="india-player-toolbar"><button class="india-exit" data-action="journey-back">← Atlas</button><div><small>${stop.flag} ${esc(stop.country)}</small><h1 id="journey-title" tabindex="-1">${esc(data.title)}</h1></div>${worldButton(id,a,'pane',worldPane?'play':'mission',worldPane?'Fermer le carnet':'Carnet','india-carnet-button',`aria-pressed="${!!worldPane}"`)}</header><nav class="india-placebar" aria-label="Les trois lieux de l’aventure">${data.places.map((p,i)=>worldButton(id,a,'move',i,p.shortName||p.name,'india-location',`aria-current="${a.place===i?'location':'false'}"`)).join('')}</nav><div class="india-screen-scroll" id="india-screen-scroll"><article class="india-screen" data-world-screen="${worldPane||a.screen}" data-world-journey="${id}"><div class="india-screen-heading"><span class="overline">${worldPane?'Carnet de voyage':a.screen==='intro'?'Une aventure en trois lieux':esc(data.places[a.place].name)}${!worldPane&&index>=0?' · '+(index+1)+' / '+WORLD_SEQUENCE.length:''}</span><h2 id="india-screen-title" tabindex="-1">${esc(worldPane?titles[worldPane]:worldScreenTitle(id,a))}</h2></div>${worldPane&&worldPane!=='aide'?`<nav class="india-carnet-tabs world-carnet-tabs" aria-label="Dans ton carnet">${[['mission','Mission'],['indices','Indices'],['dialogues','Échanges'],['carte','Carte'],['sources','Sources']].map(([key,label])=>worldButton(id,a,'pane',key,label,'india-carnet-tab',`aria-pressed="${worldPane===key}"`)).join('')}</nav>`:''}${a.ending&&a.screen!=='ending'&&!worldPane?'<p class="india-review-note">Aventure terminée · tu peux revoir les lieux et les documents.</p>':''}${worldNotice&&!worldPane?`<p class="india-notice" role="status">${esc(worldNotice)}</p>`:''}${worldSceneArt(id,a)}${worldScreenBody(id,a,saved)}</article></div><footer class="india-player-controls">${worldPane?`${worldButton(id,a,'pane','play','← Revenir au jeu','btn prime')}<span class="india-control-status">${a.clues.length}/3 indices</span>`:a.screen==='ending'?`${worldButton(id,a,'pane','mission','Mes souvenirs','btn ghost')}${worldButton(id,a,'replay',null,'Rejouer l’aventure','btn prime')}`:`${previous?worldButton(id,a,previous.action,previous.key,'← Précédent','btn ghost'):'<button class="btn ghost" disabled>← Précédent</button>'}<span class="india-control-status">${a.screen==='practice'?'Découverte '+(a.practiceStep+1)+'/3':a.screen==='puzzle'?'Support '+(WORLD_PIECES.indexOf(a.piece)+1)+'/3':a.clues.length+'/3 indices'}</span>${primary.disabled?`<button class="btn prime" disabled>${esc(primary.label)}</button>`:worldButton(id,a,primary.action,primary.key,primary.label,'btn prime')}`}</footer></section>`;
}
function worldAction(action,key,expectedJourney,expectedPlace,expectedScreen,expectedPiece,expectedStep){
  const id=activeJourney;
  if(view!=='journey'||!Object.hasOwn(WORLD_ADVENTURES,id)||expectedJourney&&expectedJourney!==id)return false;
  const saved=journeyProgress(id),a=saved.adventure,data=WORLD_ADVENTURES[id];
  if(expectedScreen&&expectedScreen!==a.screen||expectedPlace!==undefined&&String(expectedPlace)!==String(a.place))return false;
  const focus=()=>{document.getElementById('india-screen-title')?.focus({preventScroll:true});document.getElementById('india-screen-scroll')?.scrollTo?.({top:0});};
  if(action==='pane'){
    if(!['play','mission','indices','dialogues','sources','carte'].includes(key))return false;
    worldPane=key==='play'?null:key;worldNotice=null;render();focus();return true;
  }
  if(action==='replay'){
    const fresh=newWorldAdventure();fresh.endings=a.endings;saved.adventure=fresh;state.journeys[id]=saved;worldPane=null;worldNotice=null;persist();render();focus();return true;
  }
  const reviewActions=['move','screen','piece','talk','note','clear-reply','practice','practice-choice'];
  if(a.ending&&!reviewActions.includes(action))return false;
  const log=key=>{a.log=[...new Set([...a.log,key])];a.reply=key;};
  let keepFocus=false;
  if(action==='start'){
    if(a.started)return false;a.started=true;a.visited=[0];a.screen='host';
  }else if(action==='move'||action==='screen'){
    let screen;
    if(action==='move'){
      if(!['0','1','2'].includes(String(key)))return false;
      screen=worldSuggestedScreen(id,a,Number(key));
    }else{
      if(!WORLD_SCREEN_KEYS.includes(key)||key==='intro'||key==='ending'&&!a.ending||key==='preparation'&&!a.plan)return false;
      screen=key;
    }
    if(!a.started){a.started=true;a.visited=[0];}
    if(screen==='practice'&&a.practiceStatus&&a.screen!=='practice')a.practiceStep=0;
    a.screen=screen;a.place=worldScreenPlace(id,a,screen);a.visited=[...new Set([...a.visited,a.place])];a.reply=null;
  }else{
    if(!a.started)return false;
    if(action==='practice'||action==='practice-choice'){
      if(a.screen!=='practice'||a.place!==2||expectedStep!==undefined&&String(expectedStep)!==String(a.practiceStep))return false;
      if(action==='practice-choice'){
        if(!['0','1'].includes(String(key)))return false;a.practiceChoices[a.practiceStep]=Number(key);keepFocus=true;
      }else if(key==='next'&&a.practiceStep<2)a.practiceStep++;
      else if(key==='previous'&&a.practiceStep>0)a.practiceStep--;
      else if(key==='skip'||key==='done'&&a.practiceStep===2){a.practiceStatus=key==='done'?'done':a.practiceStatus==='done'?'done':'skipped';a.screen=a.ending?'ending':'route';a.place=worldScreenPlace(id,a,a.screen);}
      else return false;
    }else if(action==='clear-reply')a.reply=null;
    else if(action==='talk'){
      const items=worldLogItems(id),line=Object.hasOwn(items,key)?items[key]:null;
      if(!line||!key.startsWith('talk:')||line.place!==a.place||a.ending&&!a.log.includes(key))return false;
      a.screen=a.place===0?'host':'partner';log(key);
    }else if(action==='note'){
      if(a.place!==0||!['0','1','2'].includes(String(key)))return false;
      a.screen='photo';a.photoNote=Number(key);if(a.photoNote===2)a.clues=[...new Set([...a.clues,'photo'])];
    }else if(action==='read'){
      if(a.place!==1||!['geste','partage'].includes(key)||a.clues.includes(key))return false;
      a.screen=key;a.clues.push(key);
    }else if(action==='piece'){
      if(a.place!==1||!WORLD_PIECES.includes(key))return false;a.screen='puzzle';a.piece=key;
    }else if(action==='answer'){
      if(a.place!==1||a.screen!=='puzzle'||expectedPiece&&expectedPiece!==a.piece||!data.puzzle.labels.some(l=>l.id===key))return false;
      const from=WORLD_PIECES.find(p=>a.board[p]===key),previous=a.board[a.piece];
      if(from&&from!==a.piece)a.board[from]=previous;a.board[a.piece]=key;a.checked=false;keepFocus=true;
    }else if(action==='check'){
      if(a.place!==1||a.screen!=='puzzle')return false;a.checked=true;
      const wrong=data.puzzle.supports.find(p=>a.board[p.id]!==p.correct);if(wrong)a.piece=wrong.id;
    }else if(action==='hint'){
      if(a.place!==1||a.screen!=='puzzle'&&worldPane!=='aide')return false;a.hint=Math.min(2,a.hint+1);worldPane='aide';
    }else if(action==='plan'){
      if(a.place!==2||!data.plans.some(p=>p.id===key))return false;a.screen='route';a.plan=key;log('plan:'+key);
    }else if(action==='prepare'){
      const plan=worldPlan(id,a);if(!plan||a.place!==plan.place||!plan.options.some(o=>o.id===key))return false;
      a.screen='preparation';a.preparations[a.plan]=key;log('prepare:'+a.plan+':'+key);
    }else if(action==='finish'){
      if(worldTasks(id,a).length||a.place!==worldPlan(id,a)?.place)return false;
      a.ending=a.plan;a.endings=[...new Set([...a.endings,a.ending])];a.screen='ending';
    }else return false;
  }
  if(action!=='hint')worldPane=null;worldNotice=null;
  saved.adventure=cleanWorldAdventure(id,a);
  if(saved.adventure.clues.includes('geste'))saved.seen=[...new Set([...saved.seen,'hands'])];
  if(saved.adventure.clues.includes('partage')||saved.adventure.clues.includes('photo'))saved.seen=[...new Set([...saved.seen,'voices'])];
  if(saved.adventure.ending)saved.completed=true;
  state.journeys[id]=saved;persist();render();
  if(keepFocus){app.querySelector(action==='answer'?'[data-action="world-answer"][aria-pressed="true"]':'[data-action="world-practice-choice"][aria-pressed="true"]')?.focus({preventScroll:true});}
  else focus();
  return true;
}
document.addEventListener('click',event=>{
  const button=event.target.closest('[data-action]');if(!button?.dataset.action?.startsWith('world-'))return;
  const d=button.dataset;worldAction(d.action.slice(6),d.key,d.journey,d.from,d.screen,d.piece,d.step);
});

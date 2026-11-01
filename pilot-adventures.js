/* Trois activités originales. Les scènes et les créations sont fictives ; les repères sont sourcés. */
'use strict';
const PILOT_IDS = ['japon','maroc','bresil'];
const PILOT_NAMES = {japon:'Ma table au Japon',maroc:'Mon conte avec Salma',bresil:'Mon parcours d’écoute'};
const PILOT_FOODS = {
  riz:{name:'Riz nature',slot:0,color:'#f4efda'},
  sesame:{name:'Riz au sésame',slot:0,color:'#eee1ba'},
  concombre:{name:'Concombre croquant',slot:1,color:'#82ac63'},
  carotte:{name:'Carottes cuites',slot:1,color:'#df8a45'},
  tofu:{name:'Tofu grillé',slot:2,color:'#d7b16e'},
  poisson:{name:'Poisson grillé',slot:2,color:'#b8c6bc'}
};
const PILOT_GUESTS = {
  haru:{name:'Haru',request:'J’aimerais du tofu et un légume croquant.',vegetable:'concombre',dish:'tofu',reply:'Le tofu et le concombre ! Tu as retenu ce qui me faisait envie. Assieds-toi, on peut partager ce repas.'},
  nao:{name:'Nao',request:'Du poisson et des légumes cuits me feraient plaisir.',vegetable:'carotte',dish:'poisson',reply:'Tu as choisi du poisson et des carottes cuites, comme je l’espérais. J’aime les petites attentions que tu as mises dans cette table.'}
};
const PILOT_TALES = {
  cle:{name:'Une petite clé',title:'La clé au ruban bleu',opening:'En rangeant les livres d’une petite bibliothèque, Inès trouve une clé attachée à un ruban bleu. Personne ne sait quelle serrure elle ouvre.',events:[
    {label:'Un coffret arrive à la bibliothèque',text:'Un voisin apporte un coffret fermé trouvé dans son grenier. Un morceau de ruban bleu dépasse du couvercle.',choices:[
      {label:'Essayer la clé avec le voisin',ending:'La clé tourne. Le coffret contient des cartes postales écrites par la grand-mère du voisin. Ensemble, ils lisent la première : elle raconte le jour où la bibliothèque a ouvert. Le voisin décide d’y revenir avec sa famille.'},
      {label:'Chercher d’abord à qui appartenait le ruban',ending:'La bibliothécaire reconnaît le ruban de son ancienne collègue. Elle vient ouvrir le coffret avec Inès et y retrouve les lettres de ses premiers lecteurs. Le lendemain, elle leur organise des retrouvailles.'}]},
    {label:'Une voisine reconnaît la clé',text:'Une voisine s’arrête devant le ruban. « Cette clé ressemble à celle de notre ancien jardin », dit-elle.',choices:[
      {label:'L’accompagner jusqu’au jardin',ending:'Derrière la porte, le jardin est encore plein de menthe. La voisine raconte les après-midi où les enfants venaient y lire. Inès propose d’y installer un banc pour recommencer ces lectures.'},
      {label:'Inviter la voisine à raconter son souvenir',ending:'La voisine s’assied entre les livres et raconte le jardin. Chacun ajoute un souvenir. Inès suspend le ruban près de la fenêtre : il devient le signe du nouveau rendez-vous des lecteurs.'}]}]},
  lanterne:{name:'Une lanterne',title:'La lumière au bout de la rue',opening:'Sami doit retrouver son amie devant un café. Elle lui a promis d’accrocher une lanterne à la fenêtre pour qu’il reconnaisse le lieu.',events:[
    {label:'Toutes les fenêtres s’éclairent',text:'En arrivant dans la rue, Sami découvre des lanternes à presque toutes les fenêtres. Comment retrouver celle de son amie ?',choices:[
      {label:'Demander au marchand qui connaît le quartier',ending:'Le marchand lui indique la fenêtre ornée d’un petit poisson de papier. Son amie avait préparé ce signe en plus de la lanterne. Sami revient remercier le marchand ; ils partagent ensuite le goûter à trois.'},
      {label:'Écouter la chanson qu’elle fredonne souvent',ending:'Sami s’arrête et écoute. Derrière une porte, il reconnaît la chanson de son amie. Elle rit en le voyant : il a trouvé sa voix avant sa fenêtre. Ils décident d’apprendre la chanson ensemble.'}]},
    {label:'La lanterne n’est plus à la fenêtre',text:'La fenêtre du café est vide. Près de la porte, une petite fille tient la lanterne et regarde la rue.',choices:[
      {label:'Lui demander ce qui s’est passé',ending:'La petite fille explique que l’amie de Sami est allée aider une voisine à porter ses courses. Tous deux vont à sa rencontre avec la lanterne. Le goûter commence un peu plus tard, avec une invitée de plus.'},
      {label:'Entrer au café pour laisser un message',ending:'Au café, Sami découvre une table et un mot : « Je reviens, choisis notre gâteau ! » Il pose la lanterne au centre de la table. À son retour, son amie reconnaît son gâteau préféré et lui raconte son détour.'}]}]},
  graine:{name:'Un sachet de graines',title:'Le jardin qui commence petit',opening:'Lina reçoit quelques graines de sa grand-mère. Elle aimerait en faire un petit jardin à partager avec ses voisins.',events:[
    {label:'Elle ne trouve qu’une petite cour',text:'La cour est minuscule. Lina peut y poser quelques pots, mais pas y installer le grand jardin qu’elle imaginait.',choices:[
      {label:'Commencer avec trois pots',ending:'Lina installe trois pots et en confie un à chaque foyer. Les voisins reviennent comparer leurs petites pousses. Le jardin n’a pas de grande porte : il commence par trois rendez-vous sur le seuil.'},
      {label:'Inviter les voisins à imaginer le jardin',ending:'Les voisins dessinent ce qu’ils aimeraient planter. L’un propose sa terrasse, une autre prête des pots. Lina garde le sachet vide dans son carnet : il lui rappelle le jour où une idée a trouvé plusieurs maisons.'}]},
    {label:'Un voisin lui demande des graines',text:'Un voisin voudrait en planter avec son fils. Lina hésite : elle n’en a qu’un tout petit sachet.',choices:[
      {label:'Partager le sachet',ending:'Ils partagent les graines et se donnent rendez-vous pour regarder ce qui pousse. Le fils du voisin fabrique deux petites étiquettes. Lina découvre qu’un jardin peut aussi grandir dans les conversations.'},
      {label:'Proposer de cultiver un pot ensemble',ending:'Ils choisissent un pot commun et se répartissent les visites. Chaque semaine, le fils du voisin dessine la pousse. À la fin, le carnet est aussi précieux que les fleurs : chacun y a laissé quelque chose.'}]}]}
};
const PILOT_CLIPS = {angola:{name:'Angola',seconds:5},pause:{name:'Une pause',seconds:2},iuna:{name:'Iúna',seconds:5}};
let pilotNotice = null, pilotPlayback = null, pilotPlayToken = 0;

function isPilot(id){return PILOT_IDS.includes(id);}
function pilotFooterStatus(a){
  if(a.screen==='practice')return 'Création '+(a.practiceStep+1)+'/3';
  if(a.screen==='puzzle')return 'Révision '+(WORLD_PIECES.indexOf(a.piece)+1)+'/3';
  return a.pilot.result?'Création gardée':a.practiceStatus==='skipped'?'Visite libre':'À ton rythme';
}
function pilotStepTitle(id,step){
  return {japon:['Pour qui prépares-tu le repas ?','Compose la table','Voici ton repas'],maroc:['Quel objet ouvre le conte ?','Quel détour arrive ?','Que décide ton personnage ?'],bresil:['Quel instrument entends-tu ?','Compose ton ordre d’écoute','Que veux-tu faire remarquer ?']}[id][step];
}
function pilotIntroSteps(id){
  const steps={japon:['Choisis ton invité et découvre sa demande.','Pose et remplace les plats sur la table.','Garde ta composition, puis présente le repas.'],maroc:['Choisis l’objet qui ouvre ton conte.','Ajoute un détour, puis décide ce que fait le personnage.','Découvre la fin et garde ton histoire.'],bresil:['Écoute les deux documents et reconnais l’instrument.','Déplace les extraits et écoute ta séquence.','Choisis ce que tu veux faire remarquer et garde ton parcours.']}[id];
  return steps.map(s=>`<li>${esc(s)}</li>`).join('');
}
function pilotGuide(id,a){
  const d=WORLD_ADVENTURES[id];
  const instructions={japon:['Choisis ton invité et lis sa demande. Le bouton du bas ouvre la table à composer.','Touche une place, puis choisis ce que tu y poses. La table change aussitôt.','Regarde le repas, puis garde ta table avec le bouton du bas.'],maroc:['Choisis un objet : il fait apparaître le début de ton conte.','Choisis ce qui arrive. Tu découvriras un nouvel épisode.','Décide ce que fait ton personnage : la fin change avec ta décision.'],bresil:['Écoute quelques secondes, ou lis la description, puis choisis l’instrument.','Les flèches déplacent les blocs. Écoute le résultat avec « Écouter ma séquence ».','Choisis le point d’attention à partager. Garde ton parcours avec le bouton du bas.']};
  if(a.screen==='practice')return adventureGuidePanel(d.mission,a.practiceStep+2,instructions[id][a.practiceStep]);
  const other={intro:[1,d.mission],host:[1,'Tu peux échanger avec ton hôte ou regarder les documents. La création reste accessible dans le dernier lieu.'],photo:[2,'Cette photographie est un document réel. Sa légende et les repères restent dans ton carnet.'],geste:[2,'Lis ce repère culturel si tu le souhaites. Tu peux retrouver la création dans le dernier lieu.'],partage:[2,'Ce repère complète la découverte. Les questions de révision sont facultatives.'],partner:[2,'Tu peux essayer la création ou poursuivre la visite. Les questions restent disponibles dans le carnet.'],puzzle:[3,'Ces questions sont facultatives. Tu peux réessayer, demander la réponse ou revenir à l’aventure.'],route:[4,'Choisis comment poursuivre la rencontre et présenter ce que tu as préparé.'],preparation:[4,'Choisis comment commencera ce dernier moment. Ce choix apparaîtra dans la scène finale.'],ready:[5,'Tout est prêt. Le bouton du bas lance la scène finale.'],ending:[5,'Tes choix apparaissent dans cette dernière scène. Tes créations sont accessibles dans le carnet.']};
  const [stage,text]=other[a.screen];return adventureGuidePanel(d.mission,stage,text);
}
function pilotEntryChoices(){
  return `<section class="pilot-picks"><h2>Trois aventures à jouer</h2><p>Une table à composer, un conte qui change avec toi, une écoute à créer.</p><div>${[['japon','🇯🇵 Composer un repas'],['maroc','🇲🇦 Inventer un conte'],['bresil','🇧🇷 Explorer les sons']].map(([id,label])=>`<button class="btn ghost" data-action="journey" data-id="${id}">${label} →</button>`).join('')}</div></section>`;
}
function newPilotDraft(id){
  if(id==='japon')return {guest:null,slots:[null,null,null],slot:0};
  if(id==='maroc')return {object:null,event:null,decision:null};
  return {instrument:null,sequence:['angola','pause','iuna'],focus:null,heard:[],description:false};
}
function cleanPilotDraft(id,value){
  const d=newPilotDraft(id),v=value&&typeof value==='object'&&!Array.isArray(value)?value:{};
  if(id==='japon'){
    d.guest=Object.hasOwn(PILOT_GUESTS,v.guest)?v.guest:null;
    d.slots=d.slots.map((_,i)=>typeof v.slots?.[i]==='string'&&Object.hasOwn(PILOT_FOODS,v.slots[i])&&PILOT_FOODS[v.slots[i]].slot===i?v.slots[i]:null);
    d.slot=[0,1,2].includes(v.slot)?v.slot:0;
  }else if(id==='maroc'){
    d.object=Object.hasOwn(PILOT_TALES,v.object)?v.object:null;
    d.event=d.object&&[0,1].includes(v.event)?v.event:null;
    d.decision=d.event!==null&&[0,1].includes(v.decision)?v.decision:null;
  }else{
    d.instrument=['berimbau','guitare','flute'].includes(v.instrument)?v.instrument:null;
    if(Array.isArray(v.sequence)&&v.sequence.length===3&&new Set(v.sequence).size===3&&v.sequence.every(k=>Object.hasOwn(PILOT_CLIPS,k)))d.sequence=[...v.sequence];
    d.focus=['timbre','dialogue'].includes(v.focus)?v.focus:null;
    d.heard=Array.isArray(v.heard)?[...new Set(v.heard.filter(k=>['angola','iuna'].includes(k)))]:[];
    d.description=v.description===true;
  }
  return d;
}
function pilotMenuFits(d){const g=PILOT_GUESTS[d.guest];return !!g&&d.slots.every(Boolean)&&d.slots[1]===g.vegetable&&d.slots[2]===g.dish;}
function pilotCanAdvance(id,a,step=a.practiceStep){
  const d=a.pilot.draft;
  if(id==='japon')return step===0?!!d.guest:pilotMenuFits(d);
  if(id==='maroc')return step===0?!!d.object:step===1?d.event!==null:d.decision!==null;
  return step===0?d.instrument==='berimbau':step===1?true:!!d.focus;
}
function cleanPilotCard(id,value){
  if(!value||typeof value!=='object')return null;
  const draft=cleanPilotDraft(id,value.draft);
  const fake={pilot:{draft},practiceStep:2};if(!pilotCanAdvance(id,fake,0)||!pilotCanAdvance(id,fake,2))return null;
  let key;
  if(id==='japon')key=id+':'+draft.guest+':'+draft.slots.join(':');
  else if(id==='maroc')key=id+':'+draft.object+':'+draft.event+':'+draft.decision;
  else key=id+':'+draft.sequence.join(':')+':'+draft.focus;
  return {key,draft};
}
function cleanPilot(id,value){
  const p={version:1,draft:cleanPilotDraft(id,value?.draft),result:cleanPilotCard(id,value?.result),cards:[],gallery:0};
  if(Array.isArray(value?.cards))for(const item of value.cards){const card=cleanPilotCard(id,item);if(card&&!p.cards.some(c=>c.key===card.key))p.cards.push(card);if(p.cards.length===24)break;}
  p.gallery=Number.isInteger(value?.gallery)?Math.max(0,Math.min(p.cards.length-1,value.gallery)):0;
  return p;
}
function mergePilot(id,local,incoming,preferLocal){
  const here=cleanPilot(id,local),other=cleanPilot(id,incoming),result=preferLocal?here:other;
  result.cards=[...here.cards,...other.cards].filter((c,i,all)=>all.findIndex(x=>x.key===c.key)===i).slice(0,24);
  result.gallery=Math.min(result.gallery,Math.max(0,result.cards.length-1));return result;
}
function pilotCommit(id,a){
  const card=cleanPilotCard(id,{draft:a.pilot.draft});if(!card)return false;
  a.pilot.cards=[card,...a.pilot.cards.filter(c=>c.key!==card.key)].slice(0,24);a.pilot.gallery=0;
  if(!a.ending)a.pilot.result=card;return true;
}
function pilotResultText(id,d){
  if(id==='japon')return {title:'Une table pour '+PILOT_GUESTS[d.guest].name,lines:d.slots.map(k=>PILOT_FOODS[k].name),story:PILOT_GUESTS[d.guest].reply};
  if(id==='maroc'){const t=PILOT_TALES[d.object],e=t.events[d.event];return {title:t.title,lines:[t.opening,e.text,e.choices[d.decision].ending],story:'Salma reprend ton objet, ton détour et ta décision. Voici le conte que vous avez inventé ensemble.'};}
  return {title:'Mon parcours de berimbau',lines:d.sequence.map(k=>PILOT_CLIPS[k].name),story:d.focus==='timbre'?'Joana fait écouter votre séquence, puis propose de décrire la couleur du son. Les visiteurs cherchent leurs mots : clair, vibrant, résonnant…':'Paulo fait écouter votre séquence. Le passage entre un berimbau et les trois instruments d’Iúna devient le point de départ de votre conversation.'};
}
function pilotFoodArt(key,x,y){
  const f=PILOT_FOODS[key];if(!f)return `<text x="${x}" y="${y}" text-anchor="middle" fill="#8b8f7f" font-size="22">＋</text>`;
  let art='';
  if(f.slot===0){art=`<ellipse cx="0" cy="0" rx="43" ry="23" fill="${f.color}"/>`;for(let i=0;i<15;i++)art+=`<path d="M${-29+i%5*14} ${-12+Math.floor(i/5)*11}l5 2" stroke="${key==='sesame'?'#75513b':'#fffdf4'}" stroke-width="3" stroke-linecap="round"/>`;}
  else if(key==='concombre'){for(let i=0;i<5;i++)art+=`<ellipse cx="${-28+i*14}" cy="${i%2?5:-5}" rx="13" ry="20" fill="#bad79b" stroke="#537e4c" stroke-width="4"/>`;}
  else if(key==='carotte'){for(let i=0;i<6;i++)art+=`<circle cx="${-27+i%3*27}" cy="${i<3?-11:13}" r="13" fill="#e79548" stroke="#ce7334" stroke-width="2"/>`;}
  else if(key==='tofu'){for(let i=0;i<3;i++)art+=`<rect x="${-43+i*30}" y="-19" width="27" height="37" rx="5" fill="#edcd90" stroke="#b07b41" stroke-width="2"/><path d="M${-38+i*30} -9l16 4m-16 8 16 4" stroke="#bd8d50" stroke-width="2"/>`;}
  else art='<path d="M-45 0Q-5-37 37 0-5 32-45 0L-57-14v29Z" fill="#a9bcae" stroke="#5b796b" stroke-width="3"/><circle cx="25" cy="-4" r="3" fill="#355449"/><path d="M-20-11l8 22m9-23 8 23" stroke="#738c7d" stroke-width="3"/>';
  return `<g transform="translate(${x} ${y})">${art}</g>`;
}
function pilotVisual(id,d,step=2){
  let art='',label='';
  if(id==='japon'){
    label='Ta table composée : '+d.slots.map(k=>k?PILOT_FOODS[k].name:'une place à remplir').join(', ');
    art='<rect x="35" y="56" width="530" height="194" rx="22" fill="#d7b88a"/><path d="M52 83h496M52 226h496" stroke="#c29b68" stroke-width="2"/>';
    for(let i=0;i<3;i++){const x=140+i*160;art+=`<rect x="${x-67}" y="87" width="134" height="115" rx="13" fill="#fffaf0" stroke="${step===1&&d.slot===i?'#2c7d6e':'#c6bba1'}" stroke-width="${step===1&&d.slot===i?4:2}"/>${pilotFoodArt(d.slots[i],x,140)}<text x="${x}" y="185" text-anchor="middle" font-size="13" fill="#365647">${esc(d.slots[i]?PILOT_FOODS[d.slots[i]].name:['Riz','Légume','Plat'][i])}</text>`;}
    art+=`<text x="300" y="37" text-anchor="middle" font-family="Georgia,serif" font-size="24" fill="#284e42">${d.guest?'La table de '+PILOT_GUESTS[d.guest].name:'Qui viendra à ta table ?'}</text><path d="M448 264h92m-92 10h92" stroke="#76523d" stroke-width="5" stroke-linecap="round"/>`;
  }else if(id==='maroc'){
    const t=d.object?PILOT_TALES[d.object]:null;label=t?'Le fil de ton conte : '+t.name:'Un carnet attend le début de ton conte.';
    art='<path d="M42 49Q165 22 300 56 435 22 558 49V255Q430 232 300 264 165 232 42 255Z" fill="#fff6df" stroke="#c6a575" stroke-width="3"/><path d="M300 58v204" stroke="#e0c7a1" stroke-width="2"/>';
    const icon=d.object==='cle'?'<circle cx="167" cy="100" r="22" fill="none" stroke="#b17c41" stroke-width="9"/><path d="M184 116l44 44m-15-15 10-10m-1 22 10-10" stroke="#b17c41" stroke-width="9" stroke-linecap="round"/>':d.object==='lanterne'?'<rect x="159" y="92" width="65" height="80" rx="12" fill="#eed393" stroke="#a97048" stroke-width="4"/><path d="M170 93v-13q20-25 42 0v13M157 173h69" stroke="#a97048" stroke-width="4" fill="none"/><path d="M190 111v44" stroke="#e5a64a" stroke-width="15" stroke-linecap="round"/>':d.object==='graine'?'<path d="M187 168v-49q-45 6-39-25 35-5 39 25 4-44 37-31 0 32-37 31" stroke="#56895e" stroke-width="4" fill="#a6c58b"/><ellipse cx="187" cy="174" rx="46" ry="9" fill="#d6b785"/>':'<text x="190" y="139" text-anchor="middle" font-size="54" fill="#b99460">?</text>';
    art+=icon+`<text x="418" y="92" text-anchor="middle" font-family="Georgia,serif" font-size="21" fill="#805b3d">${esc(t?t.name:'Un objet à choisir')}</text>`;
    for(let i=0;i<3;i++)art+=`<circle cx="${358+i*60}" cy="145" r="17" fill="${[!!d.object,d.event!==null,d.decision!==null][i]?'#4f7d67':'#e4d6b9'}"/><text x="${358+i*60}" y="151" text-anchor="middle" fill="#fff" font-size="15">${i+1}</text>`;
    art+='<text x="418" y="199" text-anchor="middle" font-size="14" fill="#705d45">Un objet · un détour · ta décision</text>';
  }else{
    label='Ton ordre d’écoute : '+d.sequence.map(k=>PILOT_CLIPS[k].name).join(', ');
    art='<text x="300" y="43" text-anchor="middle" font-family="Georgia,serif" font-size="24" fill="#284e42">Une écoute que tu composes</text>';
    d.sequence.forEach((key,i)=>{const x=43+i*184;art+=`<rect x="${x}" y="71" width="160" height="173" rx="17" fill="${key==='pause'?'#eee2c8':'#e2eddd'}" stroke="#afc3a4" stroke-width="2"/><text x="${x+80}" y="105" text-anchor="middle" font-size="19" fill="#325847">${PILOT_CLIPS[key].name}</text>`;
      if(key==='pause')art+=`<path d="M${x+68} 137v46m24-46v46" stroke="#b3915e" stroke-width="10" stroke-linecap="round"/>`;
      else for(let j=0;j<15;j++){const h=(j*17+(key==='iuna'?19:7))%51+12;art+=`<path d="M${x+25+j*8} ${165-h/2}v${h}" stroke="${key==='iuna'?'#ac7046':'#3c7b6d'}" stroke-width="4" stroke-linecap="round"/>`;}
      art+=`<text x="${x+80}" y="221" text-anchor="middle" font-size="13" fill="#57705c">${PILOT_CLIPS[key].seconds} secondes${key==='pause'?'':' d’extrait'}</text>`;
    });
    art+='<text x="300" y="282" text-anchor="middle" font-size="13" fill="#63765f">Montage d’écoute personnel · extraits documentaires</text>';
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" class="pilot-canvas" viewBox="0 0 600 310" width="1200" height="620" role="img" aria-label="${esc(label)}"><rect width="600" height="310" rx="16" fill="#f6efdf"/>${art}</svg>`;
}
function pilotScene(id,a){
  const card=worldPane==='souvenirs'?a.pilot.cards[a.pilot.gallery]:['route','preparation','ready','ending'].includes(a.screen)?a.pilot.result:null;
  const draft=card?.draft||a.pilot.draft;
  return `<figure class="pilot-picture">${pilotVisual(id,draft,card?2:a.practiceStep)}<figcaption>${id==='maroc'?'Un conte personnel inventé avec Salma.':id==='japon'?'Ta composition pour les personnages de cette scène.':'Les blocs montrent ton ordre d’écoute ; les barres sont décoratives.'}</figcaption></figure>`;
}
function pilotButton(id,a,action,key,label,pressed){
  return `<button type="button" class="pilot-choice" data-action="pilot-${action}" data-key="${esc(String(key??''))}" data-journey="${id}" data-screen="${a.screen}" data-step="${a.practiceStep}"${pressed===undefined?'':` aria-pressed="${pressed}"`}>${esc(label)}</button>`;
}
function pilotAudioPanel(){
  return `<div class="pilot-audio-panel">${TRAVEL_AUDIO.filter(x=>x.stop==='bresil').map(item=>`<div class="pilot-audio-item"><strong>${esc(item.title)}</strong><audio controls preload="none" data-pilot-source="${item.id}" aria-label="${esc(item.title)}"><source src="${item.src}" type="${item.type}"></audio><small>${esc(item.author)} · ${esc(item.license)} · <a href="${esc(item.source)}" target="_blank" rel="noopener">Source ↗</a></small></div>`).join('')}</div>`;
}
function pilotSequenceControls(id,a){
  const d=a.pilot.draft;
  return `<ol class="pilot-sequence">${d.sequence.map((key,i)=>`<li><span><small>${i+1}</small><strong>${PILOT_CLIPS[key].name}</strong><em>${PILOT_CLIPS[key].seconds} s</em></span><div>${i?pilotButton(id,a,'up',i,'↑ Monter '+PILOT_CLIPS[key].name):''}${i<2?pilotButton(id,a,'down',i,'↓ Descendre '+PILOT_CLIPS[key].name):''}</div></li>`).join('')}</ol>${pilotButton(id,a,'play-sequence',null,'▶ Écouter ma séquence')}<p id="pilot-audio-status" class="pilot-audio-status" role="status" aria-live="polite"></p>`;
}
function pilotSavedAudio(id,a,key){
  return id==='bresil'?`${pilotButton(id,a,'play-card',key,'▶ Réécouter ce parcours')}<p id="pilot-audio-status" class="pilot-audio-status" role="status" aria-live="polite"></p><details class="adventure-extra"><summary>Documents sonores et crédits</summary>${pilotAudioPanel()}</details>`:'';
}
function pilotPractice(id,a){
  const d=a.pilot.draft,step=a.practiceStep;
  let content='';
  if(id==='japon'){
    if(step===0)content=`<p>Aiko prépare la table. Choisis la personne pour laquelle tu vas composer un petit repas.</p><div class="pilot-choices">${Object.entries(PILOT_GUESTS).map(([key,g])=>`<div>${pilotButton(id,a,'guest',key,'Inviter '+g.name,d.guest===key)}<p class="pilot-request">« ${esc(g.request)} »</p></div>`).join('')}</div>`;
    else if(step===1){
      const guest=PILOT_GUESTS[d.guest];
      content=`<p class="pilot-request"><strong>${guest?guest.name:'Ton invité'} :</strong> « ${guest?esc(guest.request):'Choisis d’abord un invité à l’étape précédente.'} »</p><p>1. Touche une place. 2. Choisis ce que tu y poses. Tu peux changer chaque plat.</p><div class="pilot-slots" role="group" aria-label="Choisir une place sur la table">${['Le riz','Le légume','Le plat'].map((label,i)=>pilotButton(id,a,'slot',i,label+(d.slots[i]?' ✓':''),d.slot===i)).join('')}</div><div class="pilot-choices" role="group" aria-label="Plats à poser à cette place">${Object.entries(PILOT_FOODS).filter(([,f])=>f.slot===d.slot).map(([key,f])=>pilotButton(id,a,'food',key,'Poser : '+f.name,d.slots[d.slot]===key)).join('')}</div><p class="pilot-fit ${pilotMenuFits(d)?'success':''}" role="status">${!d.slots.every(Boolean)?'Il reste '+d.slots.filter(k=>!k).length+' place(s) à remplir.':pilotMenuFits(d)?'✓ Ta table correspond à ce que ton invité a demandé.':`Regarde encore la demande : ${esc(guest?.request||'choisis un invité')} Tu peux remplacer un plat.`}</p>`;
    }else{
      const ready=pilotMenuFits(d);content=ready?`<h3>Ton repas est prêt</h3><ul class="pilot-menu-list">${d.slots.map(k=>`<li>${esc(PILOT_FOODS[k].name)}</li>`).join('')}</ul>${journeyLine(PILOT_GUESTS[d.guest].name,PILOT_GUESTS[d.guest].reply)}<p>Le bouton du bas garde cette table dans tes créations. Tu choisiras ensuite comment présenter votre repas.</p><button class="btn ghost" data-action="recipe" data-id="japon">Prolonger en cuisine : la soupe miso →</button>`:'<p>Reviens composer la table, ou demande une proposition pour continuer.</p>';
    }
  }else if(id==='maroc'){
    const tale=d.object?PILOT_TALES[d.object]:null,event=tale&&d.event!==null?tale.events[d.event]:null;
    if(step===0)content=`<p>« Choisissons un objet, puis imaginons ce qui lui arrive », propose Salma. Votre conte sera une création en français pour ce jeu.</p><div class="pilot-choices">${Object.entries(PILOT_TALES).map(([key,t])=>pilotButton(id,a,'object',key,t.name,d.object===key)).join('')}</div>${tale?`<div class="pilot-story"><strong>Le début de ton histoire</strong><p>${esc(tale.opening)}</p></div>`:''}`;
    else if(step===1)content=tale?`<div class="pilot-story"><p>${esc(tale.opening)}</p></div><h3>Quel détour arrive maintenant ?</h3><div class="pilot-choices">${tale.events.map((e,i)=>pilotButton(id,a,'event',i,e.label,d.event===i)).join('')}</div>${event?`<div class="pilot-story"><p>${esc(event.text)}</p></div>`:''}`:'<p>Choisis d’abord un objet à l’étape précédente.</p>';
    else content=event?`<div class="pilot-story"><p>${esc(event.text)}</p></div><h3>Que décide ton personnage ?</h3><div class="pilot-choices">${event.choices.map((c,i)=>pilotButton(id,a,'decision',i,c.label,d.decision===i)).join('')}</div>${d.decision!==null?`<div class="pilot-story pilot-story-ending"><strong>Voici ce que ton choix change</strong><p>${esc(event.choices[d.decision].ending)}</p></div><details class="adventure-extra"><summary>Relire tout mon conte</summary>${pilotStoryText(id,d)}</details>`:''}`:'<p>Choisis d’abord le détour de l’histoire à l’étape précédente.</p>';
  }else{
    if(step===0)content=`<p>Joana te propose deux enregistrements. Écoute quelques secondes de l’un d’eux, ou ouvre la description sonore.</p>${pilotAudioPanel()}<details class="adventure-extra"><summary>Description sonore et repère</summary><p>Angola fait entendre un berimbau seul ; dans Iúna, trois berimbaus jouent. Le berimbau est un instrument à une corde. Les extraits permettent d’écouter ses frappes, ses résonances et les variations de sa sonorité.</p></details><h3>Quel instrument entends-tu dans ces extraits ?</h3><div class="pilot-choices">${[['berimbau','Le berimbau'],['guitare','La guitare'],['flute','La flûte']].map(([key,label])=>pilotButton(id,a,'instrument',key,label,d.instrument===key)).join('')}</div>${d.instrument?`<p class="pilot-fit ${d.instrument==='berimbau'?'success':''}" role="status">${d.instrument==='berimbau'?'✓ C’est le berimbau. À toi de composer une courte écoute.':'Réécoute ou lis le repère : ces deux documents font entendre le berimbau. Tu peux réessayer.'}</p>`:''}`;
    else if(step===1)content=`<p>Compose l’ordre d’une écoute de 12 secondes : deux extraits de 5 secondes et une pause de 2 secondes. Les flèches déplacent les blocs.</p>${pilotSequenceControls(id,a)}<details class="adventure-extra"><summary>Écouter les deux documents en entier</summary>${pilotAudioPanel()}</details>`;
    else content=`<h3>Qu’aimerais-tu faire remarquer aux autres ?</h3><div class="pilot-choices">${pilotButton(id,a,'focus','timbre','La couleur du son',d.focus==='timbre')}${pilotButton(id,a,'focus','dialogue','Le passage d’un à trois berimbaus',d.focus==='dialogue')}</div>${d.focus?`<div class="pilot-story"><p>${esc(pilotResultText(id,d).story)}</p></div>`:''}${pilotButton(id,a,'play-sequence',null,'▶ Réécouter ma séquence')}<p id="pilot-audio-status" class="pilot-audio-status" role="status" aria-live="polite"></p><details class="adventure-extra"><summary>Lecteurs et crédits des documents</summary>${pilotAudioPanel()}</details>`;
  }
  return `<section class="pilot-workshop" aria-label="${PILOT_NAMES[id]}"><div class="pilot-step-label">${['Choisir le point de départ','À toi de jouer','Le résultat de tes choix'][step]} · ${step+1} / 3</div>${content}${pilotNotice?`<p class="pilot-fit" role="status">${esc(pilotNotice)}</p>`:''}${!pilotCanAdvance(id,a)?pilotButton(id,a,'assist',null,'Un coup de main pour continuer'):''}<div class="pilot-secondary">${worldButton(id,a,'practice','skip','Continuer la visite sans créer →','india-text-button')}</div><details class="adventure-extra"><summary>Repère culturel et sources</summary><p>${esc(WORLD_ADVENTURES[id].clues[1].text)}</p><p>${id==='maroc'?'Le conte est écrit pour le jeu ; ce n’est pas la transcription d’un récit traditionnel.':id==='japon'?'Cette table simplifiée est inventée pour les personnages du jeu.':'Ton montage est une composition d’écoute personnelle à partir des documents ; ce n’est pas la reproduction d’un toque traditionnel.'}</p>${WORLD_ADVENTURES[id].sources.map(s=>`<p><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></p>`).join('')}</details></section>`;
}
function pilotStoryText(id,d){const t=pilotResultText(id,d);return `<h3>${esc(t.title)}</h3>${t.lines.map(line=>`<p>${esc(line)}</p>`).join('')}`;}
function pilotPrimary(id,a){
  const step=a.practiceStep,ok=pilotCanAdvance(id,a);
  const labels=id==='japon'?['Composer la table →','Voir le repas servi →','Garder ma table →']:id==='maroc'?['Imaginer le détour →','Choisir la décision →','Garder mon conte →']:['Composer mon écoute →','Préparer le partage →','Garder mon parcours →'];
  return ok?{action:'practice',key:step<2?'next':'done',label:labels[step]}:{label:id==='japon'&&step===1?'Complète la table ou demande de l’aide':'Choisis une proposition ou demande de l’aide',disabled:true};
}
function pilotGallery(id,a){
  const p=a.pilot,card=p.cards[p.gallery];
  if(!card)return `<p>Tu n’as pas encore gardé de création ici. Termine la petite activité pour conserver ta table, ton conte ou ton parcours d’écoute.</p>${worldButton(id,a,'screen','practice','Commencer ma création →','btn prime')}`;
  return `<p class="pilot-step-label">Création ${p.gallery+1} / ${p.cards.length}</p>${pilotStoryText(id,card.draft)}${id==='maroc'?'':`<p>${esc(pilotResultText(id,card.draft).story)}</p>`}${pilotSavedAudio(id,a,'gallery')}<div class="pilot-gallery-controls">${pilotButton(id,a,'gallery-prev',null,'← Création précédente')}${pilotButton(id,a,'gallery-next',null,'Création suivante →')}</div>${pilotButton(id,a,'export','gallery','Télécharger ma carte')}<p class="travel-small">Jusqu’à 24 créations différentes sont conservées pour cette escale, avec ta sauvegarde habituelle.</p>`;
}
function pilotEnding(id,a){
  const card=a.pilot.result;if(!card)return '';
  const text=pilotResultText(id,card.draft),plan=worldPlan(id,a),option=worldPreparation(id,a);
  return `<p class="adventure-success">✓ ${id==='japon'?'Le repas que tu as composé est servi.':id==='maroc'?'Le conte que tu as inventé prend vie.':'Ton parcours d’écoute est prêt à être partagé.'}</p>${id==='japon'?journeyLine(PILOT_GUESTS[card.draft.guest].name,text.story):`<p>${esc(text.story)}</p>`}${id==='maroc'?pilotStoryText(id,card.draft):`<h3>${esc(text.title)}</h3><ul class="pilot-menu-list">${text.lines.map(line=>`<li>${esc(line)}</li>`).join('')}</ul>`}${pilotSavedAudio(id,a,'result')}<p><strong>Ton choix pour la suite :</strong> ${esc(plan.title)} · ${esc(option.label)}.</p><p>${esc(option.endingText)}</p><p class="india-found">✓ Ta création est gardée dans le carnet · ${a.endings.length} / 2 dénouements</p><div class="pilot-choices">${pilotButton(id,a,'export','result','Télécharger ma carte')}${worldButton(id,a,'pane','souvenirs','Retrouver mes créations →','btn ghost')}${worldButton(id,a,'screen','puzzle','Réviser les trois repères · facultatif →','btn ghost')}</div>${id==='japon'?'<button class="btn ghost world-recipe" data-action="recipe" data-id="japon">La recette imprimable de soupe miso →</button>':''}`;
}
function pilotExportSvg(id,card){
  const text=pilotResultText(id,card.draft),lines=[];
  const wrap=(s,max)=>{const words=s.split(/\s+/);let line='';for(const word of words){if(line&&line.length+word.length+1>max){lines.push(line);line='';}line+=(line?' ':'')+word;}if(line)lines.push(line);};
  for(const line of text.lines){wrap(line,82);lines.push('');}
  wrap('Création personnelle dans l’Atlas des cultures. '+(id==='maroc'?'Conte fictif écrit en français pour le jeu.':id==='japon'?'Menu fictif composé pour les personnages du récit.':'Montage d’écoute personnel : '+card.draft.sequence.map(k=>PILOT_CLIPS[k].name+' '+PILOT_CLIPS[k].seconds+' s').join(' → ')),82);
  const credits=id==='bresil'?TRAVEL_AUDIO.filter(x=>x.stop===id).map(x=>x.title+' — '+x.author+' — '+x.license+' — '+x.source):[WORLD_ADVENTURES[id].sources[0].url];
  for(const credit of credits){lines.push('');wrap(credit,100);}
  const height=490+lines.length*23;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="${height}" viewBox="0 0 900 ${height}" role="img" aria-label="${esc(text.title)}"><rect width="900" height="${height}" fill="#fffaf0"/><text x="40" y="48" font-family="Georgia,serif" font-size="30" fill="#264f43">${esc(text.title)}</text><svg x="40" y="78" width="820" height="410" viewBox="0 0 600 310">${pilotVisual(id,card.draft).replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'')}</svg>${lines.map((line,i)=>`<text x="42" y="${505+i*23}" font-family="sans-serif" font-size="16" fill="#355548">${esc(line)}</text>`).join('')}</svg>`;
}
function pilotStopPlayback(){
  pilotPlayToken++;
  if(pilotPlayback){clearTimeout(pilotPlayback.timer);pilotPlayback.current?.pause?.();pilotPlayback=null;}
  const status=document.getElementById('pilot-audio-status');if(status)status.textContent='';
  app.querySelectorAll?.('[data-action="pilot-play-sequence"],[data-action="pilot-play-card"]').forEach(button=>{button.textContent=button.dataset?.action==='pilot-play-card'?'▶ Réécouter ce parcours':'▶ Écouter ma séquence';});
}
function pilotPlaySequence(a){
  if(pilotPlayback){pilotStopPlayback();const status=document.getElementById('pilot-audio-status');if(status)status.textContent='Écoute arrêtée.';return;}
  const sequence=[...a.pilot.draft.sequence];pilotStopPlayback();const token=pilotPlayToken;
  const status=document.getElementById('pilot-audio-status');
  const playback={timer:null,current:null};pilotPlayback=playback;
  app.querySelectorAll?.('[data-action="pilot-play-sequence"],[data-action="pilot-play-card"]').forEach(button=>{button.textContent='■ Arrêter l’écoute';});
  const next=index=>{
    if(token!==pilotPlayToken)return;
    playback.current?.pause?.();playback.current=null;
    if(index===sequence.length){pilotPlayback=null;app.querySelectorAll?.('[data-action="pilot-play-sequence"],[data-action="pilot-play-card"]').forEach(button=>{button.textContent=button.dataset?.action==='pilot-play-card'?'▶ Réécouter ce parcours':'▶ Écouter ma séquence';});if(status)status.textContent='✓ Ton parcours de 12 secondes est terminé.';return;}
    const key=sequence[index];if(status)status.textContent=`${index+1} / 3 · ${PILOT_CLIPS[key].name} · ${PILOT_CLIPS[key].seconds} secondes. Touche le bouton d’écoute pour arrêter.`;
    if(key==='pause'){playback.timer=setTimeout(()=>next(index+1),2000);return;}
    const player=app.querySelector(`audio[data-pilot-source="${key}"]`);
    if(!player?.play){pilotPlayback=null;if(status)status.textContent='Utilise les lecteurs des documents pour écouter les extraits.';return;}
    playback.current=player;player.currentTime=0;
    Promise.resolve(player.play()).then(()=>{if(token===pilotPlayToken)playback.timer=setTimeout(()=>next(index+1),5000);else player.pause();}).catch(()=>{if(token!==pilotPlayToken)return;pilotStopPlayback();if(status)status.textContent='Le son n’a pas démarré. Les lecteurs individuels et les descriptions restent disponibles.';});
  };
  next(0);
}
function pilotAction(action,key,id,expectedScreen,expectedStep){
  if(view!=='journey'||activeJourney!==id||!isPilot(id))return false;
  const saved=journeyProgress(id),a=saved.adventure;
  if(expectedScreen&&expectedScreen!==a.screen||expectedStep!==undefined&&String(expectedStep)!==String(a.practiceStep))return false;
  const p=a.pilot,d=p.draft,step=a.practiceStep;
  if(action==='export'){
    const card=key==='gallery'&&worldPane==='souvenirs'?p.cards[p.gallery]:key==='result'?p.result:null;if(!card)return false;
    downloadBlob(pilotExportSvg(id,card),'image/svg+xml;charset=utf-8','Atlas-'+card.key.replace(/:/g,'-')+'.svg');return true;
  }
  if(action==='play-card'){
    const card=key==='gallery'&&worldPane==='souvenirs'?p.cards[p.gallery]:key==='result'&&a.screen==='ending'&&!worldPane?p.result:null;
    if(id!=='bresil'||!card)return false;pilotPlaySequence({pilot:{draft:card.draft}});return true;
  }
  if(action==='gallery-prev'||action==='gallery-next'){
    if(worldPane!=='souvenirs'||!p.cards.length)return false;p.gallery=(p.gallery+(action==='gallery-next'?1:p.cards.length-1))%p.cards.length;
  }else{
    if(!a.started||a.screen!=='practice'||worldPane)return false;
    if(action==='play-sequence'){if(id!=='bresil'||step===0)return false;pilotPlaySequence(a);return true;}
    pilotNotice=null;
    if(action==='guest'&&id==='japon'&&step===0&&Object.hasOwn(PILOT_GUESTS,key)){if(d.guest!==key){d.guest=key;d.slots=[null,null,null];d.slot=0;}}
    else if(action==='slot'&&id==='japon'&&step===1&&['0','1','2'].includes(String(key)))d.slot=Number(key);
    else if(action==='food'&&id==='japon'&&step===1&&Object.hasOwn(PILOT_FOODS,key)&&PILOT_FOODS[key].slot===d.slot)d.slots[d.slot]=key;
    else if(action==='object'&&id==='maroc'&&step===0&&Object.hasOwn(PILOT_TALES,key)){if(d.object!==key){d.object=key;d.event=null;d.decision=null;}}
    else if(action==='event'&&id==='maroc'&&step===1&&d.object&&['0','1'].includes(String(key))){if(d.event!==Number(key)){d.event=Number(key);d.decision=null;}}
    else if(action==='decision'&&id==='maroc'&&step===2&&d.event!==null&&['0','1'].includes(String(key)))d.decision=Number(key);
    else if(action==='instrument'&&id==='bresil'&&step===0&&['berimbau','guitare','flute'].includes(key))d.instrument=key;
    else if(['up','down'].includes(action)&&id==='bresil'&&step===1&&['0','1','2'].includes(String(key))){const from=Number(key),to=from+(action==='up'?-1:1);if(to<0||to>2)return false;[d.sequence[from],d.sequence[to]]=[d.sequence[to],d.sequence[from]];}
    else if(action==='focus'&&id==='bresil'&&step===2&&['timbre','dialogue'].includes(key))d.focus=key;
    else if(action==='assist'){
      if(id==='japon'){if(!d.guest)d.guest='haru';if(step>0){const g=PILOT_GUESTS[d.guest];d.slots=[d.slots[0]||'riz',g.vegetable,g.dish];}}
      else if(id==='maroc'){if(!d.object)d.object='cle';if(step>0&&d.event===null)d.event=0;if(step>1&&d.decision===null)d.decision=0;}
      else {d.instrument='berimbau';d.description=true;if(step===2&&!d.focus)d.focus='timbre';}
      pilotNotice='Voici une proposition pour poursuivre. Tu peux encore la modifier.';
    }else return false;
  }
  const scroll=document.getElementById('india-screen-scroll')?.scrollTop||0;
  saved.adventure=cleanWorldAdventure(id,a);state.journeys[id]=saved;persist();render();
  document.getElementById('india-screen-scroll')?.scrollTo?.({top:scroll});
  app.querySelector(`[data-action="pilot-${action}"][data-key="${key??''}"]`)?.focus({preventScroll:true});return true;
}
document.addEventListener('click',event=>{const button=event.target.closest('[data-action]');if(!button?.dataset.action?.startsWith('pilot-'))return;const d=button.dataset;pilotAction(d.action.slice(6),d.key,d.journey,d.screen,d.step);});
document.addEventListener('play',event=>{
  const key=event.target?.dataset?.pilotSource;if(!['angola','iuna'].includes(key))return;
  if(pilotPlayback&&pilotPlayback.current!==event.target)pilotStopPlayback();
  if(view!=='journey'||activeJourney!=='bresil')return;
  const saved=journeyProgress('bresil');saved.adventure.pilot.draft.heard=[...new Set([...saved.adventure.pilot.draft.heard,key])];state.journeys.bresil=saved;persist();
},true);

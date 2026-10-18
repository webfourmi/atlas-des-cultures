/* École, personnages et intrigue fictifs. Les repères culturels sont sourcés dans l’interface. */
'use strict';
const INDIA_SOURCE = 'https://ich.unesco.org/fr/RL/le-yoga-01163';
const INDIA_PLACES = {
  accueil:{name:'L’accueil',person:'Anaya',role:'élève et bénévole',icon:'porte',text:'Anaya dégage une table près de l’entrée. Une photographie et trois étiquettes détachées attendent à côté du panneau de bienvenue.'},
  bibliotheque:{name:'La bibliothèque',person:null,icon:'livre',text:'Une fiche documentaire dépasse d’un livre. Sur la grande table, trois supports attendent leur titre. Tu peux examiner les documents puis préparer le panneau.'},
  cour:{name:'La cour',person:'Ravi',role:'enseignant',icon:'arbre',text:'Ravi dispose quelques sièges dans la cour. Il lève les yeux quand tu arrives et te propose de t’asseoir un instant.'}
};
const INDIA_LABELS = {
  diversite:'Plusieurs dimensions d’une pratique',
  textes:'Des écrits pour accompagner l’étude',
  transmission:'Apprendre avec une autre personne'
};
const INDIA_PIECES = {
  photo:{name:'La photographie',correct:'transmission',description:'Deux personnes, une relation précisée par la légende.',icon:'photo'},
  fiche:{name:'La fiche des pratiques',correct:'diversite',description:'Des postures, le souffle, la méditation, des récitations.',icon:'pratiques'},
  livre:{name:'Le livre de la bibliothèque',correct:'textes',description:'Un support de lecture à mettre en relation avec l’enseignement.',icon:'livre'}
};
const INDIA_DETAILS = {
  personnes:{label:'Les deux personnes',text:'Une personne est assise ; l’autre se penche devant elle. L’image montre un échange entre deux personnes, pas le déroulement d’un cours complet.',x:43,y:35},
  geste:{label:'Le geste',text:'La personne penchée joint les mains. On peut décrire ce que l’on voit ; pour connaître la relation entre les personnes, il faut aussi lire la légende.',x:64,y:66},
  legende:{label:'La légende source',text:'La source identifie un maître de yoga et un élève, photographiés en Inde. Cette précision permet de relier l’image à la transmission entre personnes.',x:77,y:31}
};
const INDIA_LOG = {
  'anaya-mission':{place:'accueil',speaker:'Anaya',label:'Qu’est-ce qu’il reste à préparer ?',reply:'Les trois titres se sont décollés. Je ne veux pas les remettre au hasard. La photo est ici ; la fiche et le livre sont à la bibliothèque. Ravi est dans la cour si tu as une question.'},
  'anaya-apprendre':{place:'accueil',speaker:'Anaya',label:'Tu étudies ici depuis longtemps ?',reply:'Depuis quelques mois. J’aimais bien lire de mon côté, mais j’avais plein de questions. Ici, je peux les poser. Aujourd’hui, c’est la première fois que j’aide à accueillir les visiteurs.'},
  'ravi-premier':{place:'cour',speaker:'Ravi',label:'Anaya m’a parlé des étiquettes. Tu peux m’aider ?',reply:'Bien sûr. Va regarder la photographie et sa légende à l’accueil. Pour les deux autres supports, la fiche et le livre de la bibliothèque donnent les repères utiles. Ensuite, on choisira comment recevoir le groupe.'},
  'ravi-photo':{place:'cour',speaker:'Ravi',label:'La légende parle d’un maître et d’un élève. C’est notre premier thème ?',reply:'Oui, tu as trouvé un bon point de départ. La transmission entre maître et élève fait partie de l’histoire du yoga. Pour notre rencontre, je peux aussi raconter mon propre apprentissage.'},
  'ravi-livres':{place:'cour',speaker:'Ravi',label:'Pourquoi garder des livres si l’on apprend avec quelqu’un ?',reply:'Je m’en sers pour étudier et reprendre une explication. Les textes et les échanges ne jouent pas exactement le même rôle. À la bibliothèque, tu trouveras aussi une fiche sur les différentes dimensions de la pratique.'},
  'plan-expo':{place:'cour',speaker:'Ravi',label:'Je voudrais préparer une exposition avec Anaya.',reply:'D’accord. Une fois les titres vérifiés, retrouve-la à l’accueil pour choisir votre premier panneau. Vous pourrez recevoir les visiteurs pendant que je termine la cour.'},
  'plan-rencontre':{place:'cour',speaker:'Ravi',label:'Je préfère préparer une visite où l’on échange avec toi.',reply:'Ça me va. Vérifie les titres à la bibliothèque, puis reviens choisir une question pour ouvrir la discussion. Anaya pourra nous envoyer le groupe quand nous serons prêts.'},
  'ordre-photo':{place:'accueil',speaker:'Anaya',label:'Commençons l’exposition par la photographie.',reply:'Oui. Les visiteurs découvriront d’abord la relation entre les deux personnes, puis les pratiques et les écrits. Je vais placer la photo près de l’entrée.'},
  'ordre-pratiques':{place:'accueil',speaker:'Anaya',label:'Commençons par les différentes pratiques.',reply:'D’accord. La fiche donnera une première vue d’ensemble. On poursuivra avec la photo et le livre. Je vais préparer la place du premier panneau.'},
  'ouverture-personne':{place:'cour',speaker:'Ravi',label:'Pour commencer : qui t’a donné envie d’apprendre ?',reply:'Bonne entrée en matière. Je parlerai de la personne avec qui j’ai commencé, puis nous regarderons la photo. Tu pourras ensuite demander aux visiteurs ce qu’ils aimeraient découvrir.'},
  'ouverture-textes':{place:'cour',speaker:'Ravi',label:'Pour commencer : comment utilises-tu un livre pendant tes études ?',reply:'Je pourrai montrer comment je reprends une explication écrite, puis raconter les questions que j’apporte au cours. Le livre sera notre premier support de discussion.'}
};
const INDIA_CLUES = {
  photo:{title:'L’image et sa légende',text:'La légende de cette photographie identifie un maître de yoga et un élève. Elle documente une relation d’apprentissage.',source:'photo'},
  fiche:{title:'Plusieurs dimensions',text:'Le dossier UNESCO décrit des postures, le travail du souffle, la méditation et des récitations, parmi d’autres techniques.',source:'unesco'},
  livre:{title:'Étudier et transmettre',text:'La transmission passe notamment par la relation maître-élève, les établissements d’enseignement et des supports écrits anciens ou modernes.',source:'unesco'}
};
const INDIA_ENDINGS = {expo:{title:'Les portes de l’exposition',subtitle:'Un parcours préparé avec Anaya',icon:'porte'},rencontre:{title:'Une visite à deux voix',subtitle:'Un échange préparé avec Ravi',icon:'personnes'}};
let indiaNotice = null;

function newIndiaAdventure() {
  return {version:1,started:false,place:'accueil',visited:[],observed:[],detail:null,documents:[],log:[],board:{photo:null,fiche:null,livre:null},selected:null,checked:false,hint:0,plan:null,order:null,opening:null,ending:null,endings:[]};
}
function indiaClues(a) {
  return [a.observed.includes('legende') ? 'photo' : null,...a.documents].filter(Boolean);
}
function indiaBoardSolved(a) {
  return a.checked && Object.entries(INDIA_PIECES).every(([id,piece])=>a.board[id]===piece.correct);
}
function indiaTasks(a) {
  const clues=indiaClues(a), tasks=[];
  if(!clues.includes('photo'))tasks.push({place:'accueil',text:'Lire la légende de la photographie',anchor:'india-photo-title'});
  if(!clues.includes('fiche'))tasks.push({place:'bibliotheque',text:'Examiner la fiche documentaire',anchor:'india-documents-title'});
  if(!clues.includes('livre'))tasks.push({place:'bibliotheque',text:'Examiner le livre',anchor:'india-documents-title'});
  if(!a.visited.includes('cour'))tasks.push({place:'cour',text:'Rencontrer Ravi',anchor:'india-place-title'});
  if(!indiaBoardSolved(a))tasks.push({place:'bibliotheque',text:'Associer puis vérifier les trois titres',anchor:'india-puzzle-title'});
  if(!a.plan)tasks.push({place:'cour',text:'Choisir avec Ravi comment accueillir les visiteurs',anchor:'india-route-title'});
  if(a.plan==='expo'&&!a.order)tasks.push({place:'accueil',text:'Choisir le premier panneau avec Anaya',anchor:'india-order-title'});
  if(a.plan==='rencontre'&&!a.opening)tasks.push({place:'cour',text:'Préparer une question d’ouverture avec Ravi',anchor:'india-opening-title'});
  return tasks;
}
function cleanIndiaAdventure(value) {
  const a=newIndiaAdventure();
  if(!value||typeof value!=='object'||Array.isArray(value))return a;
  const list=(input,allowed)=>Array.isArray(input)?[...new Set(input.filter(id=>allowed.includes(id)))]:[];
  a.endings=list(value.endings,Object.keys(INDIA_ENDINGS));
  if(value.started!==true)return a;
  a.started=true;
  a.place=Object.hasOwn(INDIA_PLACES,value.place)?value.place:'accueil';
  a.visited=[...new Set(['accueil',...list(value.visited,Object.keys(INDIA_PLACES)),a.place])];
  a.observed=list(value.observed,Object.keys(INDIA_DETAILS));
  a.detail=a.observed.includes(value.detail)?value.detail:null;
  a.documents=list(value.documents,['fiche','livre']);
  a.log=Array.isArray(value.log)?value.log.filter(id=>Object.hasOwn(INDIA_LOG,id)&&a.visited.includes(INDIA_LOG[id].place)).slice(-30):[];
  const used=new Set();
  for(const id of Object.keys(INDIA_PIECES)) {
    const label=value.board&&value.board[id];
    if(Object.hasOwn(INDIA_LABELS,label)&&!used.has(label)){a.board[id]=label;used.add(label);}
  }
  a.selected=Object.hasOwn(INDIA_LABELS,value.selected)?value.selected:null;
  a.checked=value.checked===true;
  a.hint=Number.isInteger(value.hint)?Math.max(0,Math.min(2,value.hint)):0;
  a.plan=Object.hasOwn(INDIA_ENDINGS,value.plan)?value.plan:null;
  a.order=['photo','pratiques'].includes(value.order)?value.order:null;
  a.opening=['personne','textes'].includes(value.opening)?value.opening:null;
  if(value.ending===a.plan&&a.plan&&indiaTasks(a).length===0) {
    a.ending=a.plan;a.endings=[...new Set([...a.endings,a.ending])];
  }
  return a;
}
function mergeIndiaAdventure(local, incoming) {
  const here=cleanIndiaAdventure(local), restored=cleanIndiaAdventure(incoming);
  const result=here.started?here:restored;
  result.endings=[...new Set([...here.endings,...restored.endings])];
  return result;
}
function indiaIcon(kind) {
  const paths={
    porte:'<path d="M18 55h40M24 55V13h28v42M31 55V21h14v34M40 37h1"/><path d="M9 59h58"/>',
    livre:'<path d="M37 19c-8-6-19-7-28-3v36c10-4 20-3 28 3 8-6 18-7 28-3V16c-9-4-20-3-28 3v36M16 25c5-1 10 0 15 2M16 34c5-1 10 0 15 2M44 27c5-2 10-3 15-2M44 36c5-2 10-3 15-2"/>',
    arbre:'<path d="M37 59V35M24 59h26M37 44l-10-8M37 39l10-9"/><path d="M24 39c-19 0-16-24-1-25 4-15 28-12 28 2 18 1 20 23 1 25"/>',
    photo:'<rect x="9" y="13" width="56" height="43" rx="4"/><circle cx="28" cy="28" r="5"/><path d="m13 50 14-12 10 8 11-16 13 20"/>',
    pratiques:'<circle cx="37" cy="15" r="6"/><path d="M37 23v18M18 29l19 4 19-4M37 41 22 56M37 41l15 15M12 61h50"/><path d="M56 12c7 2 7 8 0 10M62 7c10 4 10 16 0 20"/>',
    personnes:'<circle cx="24" cy="20" r="7"/><circle cx="53" cy="27" r="6"/><path d="M10 54V40c0-13 28-13 28 0v14M42 57V44c0-11 23-11 23 0v13M13 62h50"/>'
  };
  return `<svg viewBox="0 0 74 72" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[kind]||paths.livre}</svg>`;
}
function indiaDialogue(id,a) {
  const keys=id==='accueil'?['anaya-mission','anaya-apprendre']:[a.observed.includes('legende')?'ravi-photo':'ravi-premier','ravi-livres'];
  const greeting=id==='accueil'?'Bonjour ! Tu peux nous donner un coup de main ? Nous préparons l’accueil des visiteurs.':'Bonjour ! Anaya est à l’entrée, et je termine de préparer la cour. Dis-moi ce dont tu as besoin.';
  const place=INDIA_PLACES[id];
  return `<section class="india-dialogue" aria-label="Parler avec ${place.person}"><div class="india-person"><span aria-hidden="true">${place.person[0]}</span><div><strong>${place.person}</strong><small>${place.role} · personnage fictif</small></div></div>${journeyLine(place.person,greeting)}${a.log.filter(key=>INDIA_LOG[key].place===id).map((key,index,lines)=>{const line=INDIA_LOG[key];return `<div class="india-exchange"${index===lines.length-1?' id="india-last-reply" tabindex="-1" aria-label="Dernier échange"':''}>${journeyLine('Toi',line.label,true)}${journeyLine(line.speaker,line.reply)}</div>`}).join('')}<div class="india-talk-choices">${keys.map(key=>`<button class="journey-choice" data-action="india-talk" data-key="${key}" data-from="${id}" ${a.log.includes(key)?'disabled':''}>${esc(INDIA_LOG[key].label)}${a.log.includes(key)?'<span aria-hidden="true">✓</span>':''}</button>`).join('')}</div></section>`;
}
function indiaPhoto(a) {
  return `<section class="india-object"><span class="overline">Pièce 1 · observer</span><h3 id="india-photo-title" tabindex="-1">Que raconte cette photographie ?</h3><p>Choisis un détail de l’image, puis consulte sa légende.</p><figure class="india-photo"><div class="india-photo-image"><img src="${TRAVEL_PHOTOS.inde.local}" width="960" height="640" alt="Une personne assise et une personne penchée devant elle, les mains jointes.">${Object.entries(INDIA_DETAILS).filter(([key])=>key!=='legende').map(([key,item],index)=>`<button class="india-spot ${a.detail===key?'active':''}" style="left:${item.x}%;top:${item.y}%" data-action="india-detail" data-key="${key}" data-from="accueil" aria-label="${esc(item.label)}" aria-pressed="${a.detail===key}">${index+1}</button>`).join('')}</div><figcaption>${travelCredit('inde',true)}</figcaption></figure><div class="india-detail-buttons">${Object.entries(INDIA_DETAILS).map(([key,item],index)=>`<button class="chip ${a.detail===key?'active':''}" data-action="india-detail" data-key="${key}" data-from="accueil" aria-pressed="${a.detail===key}">${index+1}. ${esc(item.label)} ${a.observed.includes(key)?'✓':''}</button>`).join('')}</div>${a.detail?`<div class="india-observation" id="india-observation" tabindex="-1"><strong>${esc(INDIA_DETAILS[a.detail].label)}</strong><p>${esc(INDIA_DETAILS[a.detail].text)}</p>${a.detail==='legende'?'<span class="india-found">✓ Indice conservé : la transmission</span>':''}</div>`:''}</section>`;
}
function indiaDocuments(a) {
  return `<section class="india-object"><span class="overline">Pièces 2 et 3 · examiner</span><h3 id="india-documents-title" tabindex="-1">Deux documents sur la table</h3><div class="india-documents">${['fiche','livre'].map(id=>`<article>${indiaIcon(INDIA_PIECES[id].icon)}<h4>${INDIA_PIECES[id].name}</h4>${a.documents.includes(id)?`<p>${esc(INDIA_CLUES[id].text)}</p><a href="${INDIA_SOURCE}" target="_blank" rel="noopener noreferrer">Repère documentaire UNESCO ↗</a><span class="india-found">✓ Indice conservé</span>`:`<p>${id==='fiche'?'Une synthèse documentaire préparée pour les visiteurs.':'Un volume ouvert près de notes de lecture.'}</p><button class="btn ghost" data-action="india-document" data-key="${id}" data-from="bibliotheque">Examiner ${id==='fiche'?'la fiche':'le livre'}</button>`}</article>`).join('')}</div><p class="travel-small">Le livre dessiné est un objet du récit. Les informations présentées sont des synthèses du dossier UNESCO.</p></section>`;
}
function indiaBoard(a) {
  const solved=indiaBoardSolved(a);
  const errors=a.checked&&!solved?Object.keys(INDIA_PIECES).filter(id=>a.board[id]!==INDIA_PIECES[id].correct):[];
  return `<section class="india-object india-puzzle" aria-labelledby="india-puzzle-title"><span class="overline">L’énigme des trois titres</span><h3 id="india-puzzle-title" tabindex="-1">Remettre les légendes à leur place</h3><p>Choisis un titre, puis touche la pièce qui lui correspond. Tu peux déplacer un titre déjà posé.</p><div class="india-labels" role="group" aria-label="Choisir un titre">${Object.entries(INDIA_LABELS).map(([id,label])=>`<button id="india-label-${id}" class="india-label ${a.selected===id?'selected':''}" data-action="india-label" data-key="${id}" data-from="bibliotheque" aria-pressed="${a.selected===id}">${esc(label)}<small>${Object.values(a.board).includes(id)?'Déjà posé · déplaçable':'Disponible'}</small></button>`).join('')}</div><p class="india-selection" aria-live="polite">${a.selected?`Titre choisi : ${esc(INDIA_LABELS[a.selected])}`:'Choisis d’abord un titre ci-dessus.'}</p><div class="india-board">${Object.entries(INDIA_PIECES).map(([id,piece])=>`<button id="india-piece-${id}" class="india-piece ${solved?'correct':errors.includes(id)?'needs-review':''}" data-action="india-place-label" data-key="${id}" data-from="bibliotheque" aria-label="${esc(piece.name)}. ${a.board[id]?esc(INDIA_LABELS[a.board[id]]):'Aucun titre posé'}. Poser le titre choisi.">${id==='photo'?`<img src="${TRAVEL_PHOTOS.inde.local}" alt="Détail du support photographique déjà légendé à l’accueil." width="960" height="640">`:indiaIcon(piece.icon)}<strong>${piece.name}</strong><span class="india-piece-description">${esc(piece.description)}</span><span class="india-assignment">${a.board[id]?esc(INDIA_LABELS[a.board[id]]):'Poser un titre ici'}</span></button>`).join('')}</div><div class="actions-row"><button class="btn prime" data-action="india-check" data-from="bibliotheque">Vérifier les titres</button><button class="btn ghost" data-action="india-hint" data-from="bibliotheque">${a.hint===0?'Un indice':a.hint===1?'Voir les associations':'Relire les associations'}</button></div>${a.checked?`<div class="india-board-result ${solved?'success':''}" role="status">${solved?'✓ Les trois titres correspondent aux documents. Le panneau est prêt.':`Il reste ${errors.length} ${errors.length===1?'association à revoir':'associations à revoir'}. ${errors.includes('photo')?'La légende source précise une relation entre personnes.':errors.includes('fiche')?'La fiche présente plusieurs dimensions de la pratique.':'Le livre est un support écrit pour l’étude.'}`}</div>`:''}${a.hint?`<details class="india-hint" open><summary>${a.hint===1?'Piste pour chercher':'Les trois associations'}</summary><p>${a.hint===1?'Relis la légende de la photographie. Compare ensuite la liste des pratiques avec le rôle du livre. Chaque support a un titre différent.':'Photographie → apprendre avec une autre personne. Fiche → plusieurs dimensions d’une pratique. Livre → des écrits pour accompagner l’étude.'}</p></details>`:''}</section>`;
}
function indiaBranch(a) {
  if(a.place==='cour')return `<section class="india-object"><span class="overline">Une décision à prendre</span><h3 id="india-route-title" tabindex="-1">Comment accueillir le groupe ?</h3><p>Ton choix change les préparatifs et la visite finale. Tu peux en parler avec Ravi et changer d’avis avant l’ouverture.</p><div class="india-route-choices">${[['expo','Préparer une exposition avec Anaya','Choisir le premier panneau à l’accueil ; les visiteurs parcourront les documents.'],['rencontre','Préparer une visite avec Ravi','Choisir une question dans la cour ; Ravi échangera avec le groupe.']].map(([id,title,text])=>`<button class="india-route ${a.plan===id?'selected':''}" data-action="india-plan" data-key="${id}" data-from="cour" aria-pressed="${a.plan===id}">${indiaIcon(INDIA_ENDINGS[id].icon)}<strong>${title}</strong><span>${text}</span>${a.plan===id?'<small>✓ Voie choisie</small>':''}</button>`).join('')}</div>${a.plan==='rencontre'?`<h4 id="india-opening-title" tabindex="-1">Quelle question ouvrira la visite ?</h4><div class="india-talk-choices">${[['personne','ouverture-personne'],['textes','ouverture-textes']].map(([id,key])=>`<button class="journey-choice" data-action="india-opening" data-key="${id}" data-from="cour" aria-pressed="${a.opening===id}">${esc(INDIA_LOG[key].label)}${a.opening===id?' ✓':''}</button>`).join('')}</div>`:''}</section>`;
  if(a.place==='accueil'&&a.plan==='expo')return `<section class="india-object"><span class="overline">Préparer l’exposition avec Anaya</span><h3 id="india-order-title" tabindex="-1">Quel sera le premier panneau ?</h3><p>Tu as proposé une exposition à Ravi. Anaya attend ton choix pour organiser l’entrée.</p><div class="india-talk-choices">${[['photo','ordre-photo'],['pratiques','ordre-pratiques']].map(([id,key])=>`<button class="journey-choice" data-action="india-order" data-key="${id}" data-from="accueil" aria-pressed="${a.order===id}">${esc(INDIA_LOG[key].label)}${a.order===id?' ✓':''}</button>`).join('')}</div></section>`;
  return '';
}
function indiaNotebook(a) {
  const clues=indiaClues(a);
  return `<section class="india-notebook"><h3>Les indices retrouvés <span>${clues.length}/3</span></h3>${clues.length?clues.map(id=>`<details ${a.ending?'open':''}><summary>${esc(INDIA_CLUES[id].title)}</summary><p>${esc(INDIA_CLUES[id].text)}</p><a href="${id==='photo'?esc(TRAVEL_PHOTOS.inde.source):INDIA_SOURCE}" target="_blank" rel="noopener noreferrer">${id==='photo'?'Photographie et légende source':'Fiche UNESCO'} ↗</a></details>`).join(''):'<p>Les observations et les documents examinés apparaîtront ici.</p>'}</section>`;
}
function indiaEnding(a) {
  const ending=INDIA_ENDINGS[a.ending];
  let text,dialogue,order=[];
  if(a.ending==='expo') {
    order=a.order==='photo'?['photo','fiche','livre']:['fiche','photo','livre'];
    text='Anaya ouvre la porte. Les premiers visiteurs s’arrêtent devant le panneau que vous avez choisi. Elle les accueille pendant que tu les aides à retrouver les documents.';
    dialogue=journeyLine('Anaya',a.order==='photo'?'La photographie attire déjà leur attention. Je vais leur proposer de lire sa légende avant de continuer. Merci, on est prêts !':'Ils commencent par la fiche, comme prévu. Je leur indiquerai ensuite la photographie et le livre. Merci pour ton aide !');
  } else {
    text='Anaya accompagne les visiteurs jusque dans la cour. Tu présentes la question que tu as choisie. Ravi se tourne vers le groupe et commence la visite avec toi.';
    dialogue=journeyLine('Toi',INDIA_LOG['ouverture-'+a.opening].label,true)+journeyLine('Ravi',a.opening==='personne'?'J’ai commencé auprès d’un proche, puis j’ai poursuivi mes études avec d’autres enseignants. La photo nous donne une occasion de parler de ces relations. Et vous, qu’aimeriez-vous demander sur l’apprentissage ?':'Je reprends certaines explications dans mes lectures, puis j’apporte mes questions au cours. Regardons ensemble le livre et la fiche : ils nous serviront à lancer l’échange.');
  }
  return `<section class="india-ending"><span class="overline">Dénouement · ${a.ending==='expo'?'l’exposition':'la rencontre'}</span>${indiaIcon(ending.icon)}<h2 id="india-ending-title" tabindex="-1">${ending.title}</h2><p>${text}</p>${dialogue}${a.ending==='expo'?`<ol class="india-exhibit-order" aria-label="L’ordre de ton exposition">${order.map(id=>`<li>${INDIA_PIECES[id].name}<small>${esc(INDIA_LABELS[INDIA_PIECES[id].correct])}</small></li>`).join('')}</ol>`:'<p class="india-conclusion">La visite se poursuit autour des questions du groupe. Vous avez choisi un échange accompagné.</p>'}<div class="india-souvenirs"><h3>Tes souvenirs de cette aventure · ${a.endings.length}/2</h3>${Object.entries(INDIA_ENDINGS).map(([id,item])=>`<div class="india-souvenir ${a.endings.includes(id)?'collected':''}">${indiaIcon(item.icon)}<strong>${a.endings.includes(id)?item.title:'Un autre dénouement à découvrir'}</strong><small>${a.endings.includes(id)?'✓ Souvenir conservé':'Rejoue pour choisir une autre voie'}</small></div>`).join('')}</div><div class="actions-row"><button class="btn prime" data-action="india-replay">Rejouer l’aventure</button><button class="btn ghost" data-action="travel-stories">Les autres escales</button></div><p class="travel-small">Rejouer conserve les découvertes et les souvenirs déjà obtenus.</p></section>`;
}
function renderIndiaAdventure() {
  const saved=journeyProgress('inde'),a=saved.adventure;
  const tasks=indiaTasks(a),place=INDIA_PLACES[a.place];
  app.innerHTML=`<button class="back" data-action="journey-back">← Retour au voyage</button><header class="india-hero"><div><span class="overline">🇮🇳 Inde · aventure pilote</span><h1 id="journey-title" tabindex="-1">Avant l’ouverture</h1><p>Trois lieux, deux rencontres et une exposition à préparer.</p><div class="india-tags"><span>3 lieux à explorer</span><span>Une énigme visuelle</span><span>2 dénouements</span></div></div>${indiaIcon('porte')}</header><p class="fiction-note">École, personnages et histoire fictifs, racontés en français. Le yoga est le thème de cette escale ; il ne résume pas l’Inde. La photographie est documentaire et ne représente pas Anaya ni Ravi.</p>${!a.started?`<section class="india-intro"><div><span class="overline">Une matinée dans une école de yoga imaginaire</span><h2>Les étiquettes se sont décollées.</h2><p>Anaya accueille bientôt un petit groupe. Sur la table, une photographie, une fiche et un livre ont perdu leur titre. Elle te demande de retrouver les bonnes associations.</p><p>Ravi prépare la cour. Avec lui, tu choisiras la suite : ouvrir une exposition avec Anaya ou accompagner une visite dialoguée.</p><button class="btn prime" data-action="india-start">Entrer dans l’école →</button>${saved.completed||saved.seen.length?'<p class="travel-small">Tes découvertes précédentes en Inde sont conservées.</p>':''}</div><div class="india-intro-pieces">${indiaIcon('photo')}${indiaIcon('pratiques')}${indiaIcon('livre')}<p>Observer · comparer · choisir</p></div></section>`:a.ending?indiaEnding(a):`<nav class="india-map" aria-label="Plan de l’école fictive">${Object.entries(INDIA_PLACES).map(([id,p],index)=>`<button class="india-place ${a.place===id?'current':''}" data-action="india-move" data-key="${id}" data-from="${a.place}" aria-current="${a.place===id?'location':'false'}">${indiaIcon(p.icon)}<span><small>${index+1}. ${a.visited.includes(id)?'Lieu exploré':'À explorer'}</small><strong>${p.name}</strong><em>${p.person?p.person:'Les documents et l’énigme'}</em></span></button>`).join('')}</nav><div class="india-layout"><article class="india-room"><div class="india-room-heading"><span class="overline">${a.visited.length}/3 lieux explorés · ${indiaClues(a).length}/3 indices</span><h2 id="india-place-title" tabindex="-1">${place.name}</h2><p>${place.text}</p></div>${indiaNotice?.place===a.place?`<p class="india-notice" role="status" id="india-feedback" tabindex="-1">${esc(indiaNotice.text)}</p>`:''}${place.person?indiaDialogue(a.place,a):''}${a.place==='accueil'?indiaPhoto(a):a.place==='bibliotheque'?indiaDocuments(a)+indiaBoard(a):''}${indiaBranch(a)}${tasks.length===0?`<section class="india-ready"><h3>Tout est prêt pour ${a.plan==='expo'?'l’exposition':'la visite'}.</h3>${a.place===(a.plan==='expo'?'accueil':'cour')?`<button class="btn prime" data-action="india-finish" data-from="${a.place}">${a.plan==='expo'?'Ouvrir les portes avec Anaya':'Accueillir le groupe avec Ravi'} →</button>`:`<button class="btn prime" data-action="india-move" data-key="${a.plan==='expo'?'accueil':'cour'}" data-from="${a.place}">Rejoindre ${a.plan==='expo'?'Anaya à l’accueil':'Ravi dans la cour'} →</button>`}</section>`:''}</article><aside><section class="india-mission"><span class="overline">Ta mission</span><h3>Préparer l’accueil des visiteurs</h3><p>${a.plan==='expo'?'Avec Anaya, tu prépares un parcours d’exposition.':a.plan==='rencontre'?'Avec Ravi, tu prépares une visite dialoguée.':'Observe les trois supports et choisis avec Ravi comment recevoir le groupe.'}</p>${tasks.length?`<ul>${tasks.map(t=>`<li><button data-action="india-move" data-key="${t.place}" data-from="${a.place}" data-target="${t.anchor}">${t.text}<small>${INDIA_PLACES[t.place].name} →</small></button></li>`).join('')}</ul>`:'<p class="india-found">✓ Les préparatifs sont terminés.</p>'}</section>${indiaNotebook(a)}<details class="india-restart"><summary>Recommencer cette aventure</summary><p>Tes découvertes et tes souvenirs seront conservés.</p><button class="btn ghost" data-action="india-replay">Recommencer</button></details></aside></div>`}${a.started&&a.ending?indiaNotebook(a):''}<footer class="india-sources"><strong>Les sources de cette escale</strong><p><a href="${INDIA_SOURCE}" target="_blank" rel="noopener noreferrer">Le yoga · fiche UNESCO ↗</a> · <a href="${esc(TRAVEL_PHOTOS.inde.source)}" target="_blank" rel="noopener noreferrer">Photographie originale et légende ↗</a></p><p>Les documents du jeu résument les sources. Les paroles d’Anaya et de Ravi sont inventées.</p><button class="btn ghost" data-action="read" data-id="inde">Lire la fiche culturelle</button></footer>`;
}
function indiaAction(action,key,expectedPlace,anchor) {
  if(view!=='journey'||activeJourney!=='inde')return false;
  const saved=journeyProgress('inde'),a=saved.adventure;
  let focus=null,notice=null;
  const log=id=>a.log.push(id);
  if(action==='start') {
    if(a.started)return false;
    a.started=true;a.visited=['accueil'];focus='india-place-title';
  } else if(action==='replay') {
    const fresh=newIndiaAdventure();fresh.endings=a.endings;saved.adventure=fresh;indiaNotice=null;
    state.journeys.inde=saved;persist();render();document.getElementById('journey-title')?.focus();return true;
  } else {
    if(!a.started||a.ending||expectedPlace!==a.place)return false;
    if(action==='move') {
      if(!Object.hasOwn(INDIA_PLACES,key))return false;
      const destination=indiaTasks(a).find(task=>task.place===key&&task.anchor===anchor);
      a.place=key;a.visited=[...new Set([...a.visited,key])];focus=destination?destination.anchor:'india-place-title';
    } else if(action==='talk') {
      if(!Object.hasOwn(INDIA_LOG,key)||INDIA_LOG[key].place!==a.place||!['anaya-mission','anaya-apprendre','ravi-premier','ravi-photo','ravi-livres'].includes(key)||a.log.includes(key))return false;
      if(key==='ravi-photo'&&!a.observed.includes('legende'))return false;
      log(key);focus='india-last-reply';
    } else if(action==='detail') {
      if(a.place!=='accueil'||!Object.hasOwn(INDIA_DETAILS,key))return false;
      a.detail=key;a.observed=[...new Set([...a.observed,key])];focus='india-observation';
    } else if(action==='document') {
      if(a.place!=='bibliotheque'||!['fiche','livre'].includes(key)||a.documents.includes(key))return false;
      a.documents.push(key);notice='Indice conservé : '+INDIA_CLUES[key].title+'.';focus='india-feedback';
    } else if(action==='label') {
      if(a.place!=='bibliotheque'||!Object.hasOwn(INDIA_LABELS,key))return false;
      a.selected=key;focus='india-label-'+key;
    } else if(action==='place-label') {
      if(a.place!=='bibliotheque'||!Object.hasOwn(INDIA_PIECES,key))return false;
      if(!a.selected){notice='Choisis d’abord l’un des trois titres, puis la pièce où le poser.';focus='india-feedback';}
      else {
        const from=Object.keys(a.board).find(id=>a.board[id]===a.selected),previous=a.board[key];
        if(from&&from!==key)a.board[from]=previous;
        a.board[key]=a.selected;a.selected=null;a.checked=false;focus='india-piece-'+key;
      }
    } else if(action==='check') {
      if(a.place!=='bibliotheque')return false;
      a.checked=true;notice=indiaBoardSolved(a)?'Les trois titres sont bien associés. Consulte ta mission pour préparer la suite.':'Regarde les pièces signalées et les repères ci-dessous. Tu peux déplacer les titres ou demander un indice.';focus='india-feedback';
    } else if(action==='hint') {
      if(a.place!=='bibliotheque')return false;
      a.hint=Math.min(2,a.hint+1);notice=a.hint===1?'Une piste a été ajoutée sous l’énigme.':'Les associations sont affichées sous l’énigme ; tu peux les utiliser pour replacer les titres.';focus='india-feedback';
    } else if(action==='plan') {
      if(a.place!=='cour'||!Object.hasOwn(INDIA_ENDINGS,key)||a.plan===key)return false;
      a.plan=key;log('plan-'+key);notice=key==='expo'?'Voie choisie : l’exposition. Anaya t’attend à l’accueil pour choisir le premier panneau.':'Voie choisie : la visite dialoguée. Choisis ta question avec Ravi dans cette cour.';focus='india-last-reply';
    } else if(action==='order') {
      if(a.place!=='accueil'||a.plan!=='expo'||!['photo','pratiques'].includes(key)||a.order===key)return false;
      a.order=key;log('ordre-'+key);focus='india-last-reply';
    } else if(action==='opening') {
      if(a.place!=='cour'||a.plan!=='rencontre'||!['personne','textes'].includes(key)||a.opening===key)return false;
      a.opening=key;log('ouverture-'+key);focus='india-last-reply';
    } else if(action==='finish') {
      if(indiaTasks(a).length||a.place!==(a.plan==='expo'?'accueil':'cour'))return false;
      a.ending=a.plan;a.endings=[...new Set([...a.endings,a.ending])];focus='india-ending-title';
    } else return false;
  }
  saved.adventure=cleanIndiaAdventure(a);
  const clues=indiaClues(saved.adventure);
  if(clues.includes('fiche'))saved.seen=[...new Set([...saved.seen,'hands'])];
  if(clues.includes('photo')||clues.includes('livre'))saved.seen=[...new Set([...saved.seen,'voices'])];
  if(saved.adventure.ending)saved.completed=true;
  state.journeys.inde=saved;indiaNotice=notice?{place:a.place,text:notice}:null;persist();render();
  const target=focus?document.getElementById(focus):null;
  target?.focus({preventScroll:true});
  if(focus!=='india-feedback'&&!focus?.startsWith('india-label-')&&!focus?.startsWith('india-piece-'))target?.scrollIntoView?.({block:'start'});
  return true;
}
document.addEventListener('click',event=>{
  const button=event.target.closest('[data-action]');
  if(!button?.dataset.action?.startsWith('india-'))return;
  indiaAction(button.dataset.action.slice(6),button.dataset.key,button.dataset.from,button.dataset.target);
});

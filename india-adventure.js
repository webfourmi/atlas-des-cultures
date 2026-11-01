/* École, personnages et intrigue fictifs. Les repères culturels sont sourcés dans l’interface. */
'use strict';
const INDIA_SOURCE = 'https://ich.unesco.org/fr/RL/le-yoga-01163';
const INDIA_PRACTICE_SOURCES = {
  souffle:'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/',
  assise:'https://www.nhs.uk/live-well/exercise/sitting-exercises/'
};
const INDIA_ART = {
  ecole:{alt:'Anaya et Ravi accueillent le visiteur dans la cour de l’école fictive.',caption:'Bienvenue dans l’école d’Anaya et Ravi.'},
  accueil:{alt:'Anaya arrange des étiquettes détachées près d’un livre, à l’accueil.',caption:'Anaya prépare les documents de l’accueil.'},
  ravi:{alt:'Ravi, assis dans la cour, est prêt à discuter.',caption:'Un moment pour échanger avec Ravi.'},
  livre:{alt:'Un livre ouvert et des notes de lecture sur une table de bibliothèque.',caption:'Le livre et les notes de la bibliothèque.'},
  documents:{alt:'Trois supports et leurs étiquettes détachées sont disposés sur une table.',caption:'La photographie, la fiche et le livre pour préparer la visite.'},
  exposition:{alt:'Anaya termine l’installation des panneaux, tandis que Ravi accueille les visiteurs.',caption:'Les derniers préparatifs de l’exposition.'},
  visite:{alt:'Anaya et Ravi échangent avec un petit groupe de visiteurs autour d’un livre.',caption:'Une rencontre autour des documents.'},
  souffle:{alt:'Ravi est assis sur une chaise, les deux pieds à plat, les mains sur les cuisses et les épaules relâchées.',caption:'Une assise confortable pour observer son souffle.'}
};
const INDIA_PLACES = {
  accueil:{name:'L’accueil',person:'Anaya',role:'élève et bénévole',icon:'porte',text:'Anaya dégage une table près de l’entrée. Une photographie attend à côté du panneau de bienvenue.'},
  bibliotheque:{name:'La bibliothèque',person:null,icon:'livre',text:'Une fiche documentaire dépasse d’un livre. La fiche et le livre donnent des repères pour accueillir les visiteurs.'},
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
const INDIA_QUESTIONS = {
  photo:{question:'Qui la légende permet-elle d’identifier sur la photographie ?',answers:{transmission:'Un maître de yoga et un élève',diversite:'Deux personnes dont le rôle reste inconnu',textes:'Un auteur et son éditeur'}},
  fiche:{question:'Que vas-tu présenter aux visiteurs à propos du yoga ?',answers:{transmission:'Une seule posture identique pour tous',diversite:'Des postures, le souffle, la méditation et des récitations',textes:'Seulement une méthode de lecture'}},
  livre:{question:'Comment le livre peut-il accompagner l’apprentissage ?',answers:{transmission:'Il rend tous les échanges inutiles',diversite:'Il sert seulement à décorer l’école',textes:'Il permet de reprendre une explication et de préparer ses questions'}}
};
const INDIA_GOAL = 'Aide Anaya et Ravi à accueillir les visiteurs de leur école de yoga : découvre trois repères, puis choisis comment commencer la visite.';
const INDIA_LOG = {
  'anaya-mission':{place:'accueil',speaker:'Anaya',label:'Qu’est-ce qu’il reste à préparer ?',reply:'Je voudrais montrer aux visiteurs que le yoga ne se limite pas aux postures. Regarde la photo, la fiche et le livre, puis retrouvons Ravi. Tu choisiras ensuite comment ouvrir la visite.'},
  'anaya-apprendre':{place:'accueil',speaker:'Anaya',label:'Tu étudies ici depuis longtemps ?',reply:'Depuis quelques mois. J’aimais bien lire de mon côté, mais j’avais plein de questions. Ici, je peux les poser. Aujourd’hui, c’est la première fois que j’aide à accueillir les visiteurs.'},
  'ravi-premier':{place:'cour',speaker:'Ravi',label:'Comment allons-nous accueillir les visiteurs ?',reply:'Nous pouvons préparer une petite exposition avec Anaya ou ouvrir une conversation dans la cour. Regarde d’abord les trois documents : ils nous aideront à répondre aux premières questions.'},
  'ravi-photo':{place:'cour',speaker:'Ravi',label:'La légende parle d’un maître et d’un élève. C’est notre premier thème ?',reply:'Oui, tu as trouvé un bon point de départ. La transmission entre maître et élève fait partie de l’histoire du yoga. Pour notre rencontre, je peux aussi raconter mon propre apprentissage.'},
  'ravi-livres':{place:'cour',speaker:'Ravi',label:'Pourquoi garder des livres si l’on apprend avec quelqu’un ?',reply:'Je m’en sers pour étudier et reprendre une explication. Les textes et les échanges ne jouent pas exactement le même rôle. À la bibliothèque, tu trouveras aussi une fiche sur les différentes dimensions de la pratique.'},
  'plan-expo':{place:'cour',speaker:'Ravi',label:'Je voudrais préparer une exposition avec Anaya.',reply:'D’accord. Après les trois questions, retrouve-la à l’accueil pour choisir votre premier panneau. Vous pourrez recevoir les visiteurs pendant que je termine la cour.'},
  'plan-rencontre':{place:'cour',speaker:'Ravi',label:'Je préfère préparer une visite où l’on échange avec toi.',reply:'Ça me va. Prépare les réponses aux questions des visiteurs, puis reviens choisir une question pour ouvrir la discussion. Anaya pourra nous envoyer le groupe quand nous serons prêts.'},
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
const INDIA_SCREEN_KEYS=['intro','anaya','photo','fiche','livre','ravi','pratique','route','puzzle','preparation','ready','ending'];
let indiaNotice = null, indiaPane = null;

function newIndiaAdventure() {
  return {version:3,screen:'intro',piece:'photo',reply:null,practiceStep:0,practiceStatus:null,started:false,place:'accueil',visited:[],observed:[],detail:null,documents:[],log:[],board:{photo:null,fiche:null,livre:null},selected:null,checked:false,hint:0,plan:null,order:null,opening:null,ending:null,endings:[]};
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
  if(!indiaBoardSolved(a))tasks.push({place:'bibliotheque',text:'Répondre aux trois questions des visiteurs',anchor:'india-puzzle-title'});
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
    for(const id of Object.keys(INDIA_PIECES)) {
    const label=value.board&&value.board[id];
    if(Object.hasOwn(INDIA_LABELS,label))a.board[id]=label;
  }
  a.selected=Object.hasOwn(INDIA_LABELS,value.selected)?value.selected:null;
  a.checked=value.checked===true;
  a.hint=Number.isInteger(value.hint)?Math.max(0,Math.min(2,value.hint)):0;
  a.plan=Object.hasOwn(INDIA_ENDINGS,value.plan)?value.plan:null;
  a.order=['photo','pratiques'].includes(value.order)?value.order:null;
  a.opening=['personne','textes'].includes(value.opening)?value.opening:null;
  a.practiceStep=Number.isInteger(value.practiceStep)?Math.max(0,Math.min(2,value.practiceStep)):0;
  a.practiceStatus=['done','skipped'].includes(value.practiceStatus)?value.practiceStatus:null;
  if(value.ending===a.plan&&a.plan&&indiaTasks(a).length===0) {
    a.ending=a.plan;a.endings=[...new Set([...a.endings,a.ending])];
  }
  a.screen=INDIA_SCREEN_KEYS.includes(value.screen)?value.screen:indiaSuggestedScreen(a,a.place);
  if(a.screen==='intro')a.screen=indiaSuggestedScreen(a,a.place);
  if(a.screen==='ending'&&!a.ending)a.screen=indiaSuggestedScreen(a,a.place);
  if(a.screen==='preparation'&&!a.plan)a.screen='route';
  if(indiaScreenPlace(a,a.screen)!==a.place)a.screen=indiaSuggestedScreen(a,a.place);
  a.piece=Object.hasOwn(INDIA_PIECES,value.piece)?value.piece:Object.keys(INDIA_PIECES).find(id=>!a.board[id])||'photo';
  a.reply=Object.hasOwn(INDIA_LOG,value.reply)&&a.log.includes(value.reply)?value.reply:null;
  if(a.ending&&(!value.screen||value.screen==='intro')){a.screen='ending';a.place=indiaScreenPlace(a,'ending');}
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
function indiaScreenPlace(a,screen) {
  if(['preparation','ready','ending'].includes(screen))return a.plan==='expo'?'accueil':'cour';
  return {intro:'accueil',anaya:'accueil',photo:'accueil',fiche:'bibliotheque',livre:'bibliotheque',puzzle:'bibliotheque',ravi:'cour',pratique:'cour',route:'cour'}[screen]||a.place;
}
function indiaSuggestedScreen(a,place) {
  if(place==='bibliotheque')return !a.documents.includes('fiche')?'fiche':!a.documents.includes('livre')?'livre':'puzzle';
  if(place==='cour')return !a.plan?'ravi':a.plan==='rencontre'&&!a.opening?'preparation':'route';
  return a.plan==='expo'&&!a.order?'preparation':a.log.includes('anaya-mission')?'photo':'anaya';
}
function indiaTaskScreen(task,a) {
  return {'india-photo-title':'photo','india-puzzle-title':'puzzle','india-place-title':'ravi','india-route-title':'route','india-order-title':'preparation','india-opening-title':'preparation'}[task.anchor]||(task.text.includes('livre')?'livre':!a.documents.includes('fiche')?'fiche':'livre');
}
function indiaButton(a,action,key,label,style='btn ghost',extra='') {
  const frozen=a.ending&&(!['move','screen','piece','pane','replay','clear-reply','detail','talk','practice'].includes(action)||action==='talk'&&!a.log.includes(key));
  return `<button class="${style}" data-action="india-${action}"${key?` data-key="${esc(key)}"`:''} data-from="${a.place}" data-screen="${a.screen}" ${frozen?'disabled':''} ${extra}>${esc(label)}</button>`;
}
function indiaReply(a,keys) {
  const key=keys.includes(a.reply)?a.reply:null;
  if(!key)return '';
  const line=INDIA_LOG[key];
  return `<div class="india-current-reply" id="india-last-reply" tabindex="-1">${journeyLine('Toi',line.label,true)}${journeyLine(line.speaker,line.reply)}${indiaButton(a,'clear-reply',null,'Revoir les choix','india-text-button')}</div>`;
}
function indiaDialogue(id,a) {
  const keys=id==='accueil'?['anaya-mission','anaya-apprendre']:[a.observed.includes('legende')?'ravi-photo':'ravi-premier','ravi-livres'];
  const p=INDIA_PLACES[id],reply=indiaReply(a,keys);
  return `<section class="india-dialogue"><div class="india-person"><span aria-hidden="true">${p.person[0]}</span><div><strong>${p.person}</strong><small>${p.role} · personnage fictif</small></div></div>${reply||`${journeyLine(p.person,id==='accueil'?'Bienvenue ! Les visiteurs arrivent bientôt. Tu m’aides à préparer leur accueil ? Regarde la photo, puis les deux repères de la bibliothèque. Nous choisirons ensuite comment ouvrir la visite.':'Bienvenue dans la cour ! Je peux te proposer une courte pause de yoga assis. Tu peux aussi continuer directement : nous préparerons ensuite l’arrivée des visiteurs.')}<div class="india-talk-choices">${keys.map(key=>indiaButton(a,'talk',key,INDIA_LOG[key].label+(a.log.includes(key)?' ✓':''),'journey-choice')).join('')}</div>`}</section>`;
}
function indiaPhoto(a) {
  return `<section class="india-photo-activity"><figure class="india-photo"><div class="india-photo-image"><img src="${TRAVEL_PHOTOS.inde.local}" width="960" height="640" alt="Une personne assise et une personne penchée devant elle, les mains jointes."><span class="india-photo-marker" style="left:43%;top:35%" aria-hidden="true">1</span><span class="india-photo-marker" style="left:64%;top:66%" aria-hidden="true">2</span></div><figcaption>Photo : ${esc(TRAVEL_PHOTOS.inde.author)} · <a href="${esc(TRAVEL_PHOTOS.inde.source)}" target="_blank" rel="noopener noreferrer">Source</a> · <a href="${esc(TRAVEL_PHOTOS.inde.licenseUrl)}" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> · <a href="${TRAVEL_PHOTOS.inde.local}" target="_blank" rel="noopener">Agrandir ↗</a></figcaption></figure><div class="india-detail-buttons" role="group" aria-label="Examiner la photographie">${Object.entries(INDIA_DETAILS).map(([key,item],index)=>indiaButton(a,'detail',key,`${index+1}. ${item.label}`,'india-detail-button',`aria-pressed="${a.detail===key}"`)).join('')}</div><div class="india-observation" id="india-observation" tabindex="-1" aria-live="polite">${true?`<strong>${esc(INDIA_DETAILS[a.detail||'legende'].label)}</strong><p>${esc(INDIA_DETAILS[a.detail||'legende'].text)}</p>${a.detail==='legende'?'<small>✓ Indice conservé</small>':''}`:'<p>Observe un détail, puis lis la légende source pour identifier la relation entre les personnes.</p>'}</div></section>`;
}
function indiaDocument(a,id) {
  return `<section class="india-document-card"><p class="india-document-text">${esc(INDIA_CLUES[id].text)}</p><p class="adventure-reading">Ce repère sera ajouté à ton carnet quand tu continueras.</p><details class="adventure-extra"><summary>Source de ce repère</summary><a class="india-source-link" href="${INDIA_SOURCE}" target="_blank" rel="noopener noreferrer">Lire le dossier UNESCO ↗</a></details></section>`;
}
function indiaArtImage(id) {
  return `<img src="./travel/inde/${id}.webp" width="960" height="640" alt="${esc(INDIA_ART[id].alt)}" decoding="async">`;
}
function indiaScreenArt(a) {
  if(!indiaPane&&['photo','puzzle'].includes(a.screen))return '';
  const endingArt=a.plan==='expo'?'exposition':'visite';
  const id=indiaPane?{mission:'ecole',indices:'documents',dialogues:'visite',sources:'livre',aide:'documents'}[indiaPane]:{intro:'ecole',anaya:'accueil',fiche:'documents',livre:'livre',ravi:'ravi',pratique:'souffle',route:'ecole',preparation:endingArt,ready:endingArt,ending:endingArt}[a.screen];
  if(!id)return '';
  return `<figure class="india-scene${id==='souffle'?' india-scene-practice':''}"><a href="./travel/inde/${id}.webp" target="_blank" rel="noopener" aria-label="Agrandir l’illustration : ${esc(INDIA_ART[id].caption)}">${indiaArtImage(id)}</a><figcaption>${esc(INDIA_ART[id].caption)}<small>Illustration du récit · <a href="./travel/inde/ILLUSTRATIONS.md" target="_blank" rel="noopener">création et crédits ↗</a></small></figcaption></figure>`;
}
function indiaPractice(a) {
  const steps=[
    ['Trouver une assise confortable','Assieds-toi sur une chaise stable, sans roulettes. Pose les deux pieds à plat, écartés à peu près de la largeur des hanches. Laisse ton dos soutenu par le dossier, sans te raidir, les mains sur les cuisses et les épaules relâchées.'],
    ['Observer trois respirations','Laisse entrer l’air doucement par le nez si cela t’est confortable, puis laisse-le sortir doucement par la bouche. Observe trois respirations à ton rythme, sans chercher à les allonger, sans forcer et sans retenir le souffle.'],
    ['Revenir tranquillement','Laisse maintenant ta respiration suivre son rythme habituel. Remarque simplement comment tu te sens. Tu peux prendre un instant de plus avant de poursuivre l’aventure.']
  ];
  const [title,text]=steps[a.practiceStep];
  return `<section class="india-practice" aria-label="Découverte facultative du yoga"><p class="india-practice-intro">Ravi te propose une découverte du yoga assis, centrée sur l’attention au souffle.</p><div class="india-practice-step"><small>À ton rythme · étape ${a.practiceStep+1} / 3</small><h3>${title}</h3><p>${text}</p></div><p class="india-practice-care">Reste à l’aise. En cas de gêne, de douleur ou de vertige, arrête et respire normalement.</p>${indiaButton(a,'practice','passer','Passer cette pratique →','india-text-button')}<details class="india-practice-sources"><summary>À propos de cette pause et sources</summary><p>Cette courte découverte est une adaptation pour le jeu, sans objectif thérapeutique. Elle est facultative et ne change ni tes repères ni les dénouements. Si tu as un doute sur ce qui convient à ta santé, demande conseil à un professionnel.</p><p>Consignes d’assise et de respiration : <a href="${INDIA_PRACTICE_SOURCES.assise}" target="_blank" rel="noopener noreferrer">NHS · s’installer sur une chaise ↗</a> et <a href="${INDIA_PRACTICE_SOURCES.souffle}" target="_blank" rel="noopener noreferrer">NHS · respirer sans forcer ↗</a>. Le <a href="${INDIA_SOURCE}" target="_blank" rel="noopener noreferrer">dossier UNESCO ↗</a> décrit la place du souffle parmi les dimensions du yoga.</p></details></section>`;
}
function indiaBoard(a) {
  const id=a.piece,piece=INDIA_PIECES[id],q=INDIA_QUESTIONS[id],index=Object.keys(INDIA_PIECES).indexOf(id),selected=a.board[id],correct=selected===piece.correct;
  return `<section class="india-puzzle" aria-label="Les questions des visiteurs"><div class="india-puzzle-heading"><span>Question ${index+1} / 3</span><div role="group" aria-label="Choisir une question">${Object.entries(INDIA_PIECES).map(([key,item],i)=>indiaButton(a,'piece',key,String(i+1),'india-piece-dot',`aria-label="Question ${i+1} : ${esc(INDIA_QUESTIONS[key].question)}" aria-pressed="${id===key}"`)).join('')}</div></div><div class="india-puzzle-support">${id==='photo'?`<img src="${TRAVEL_PHOTOS.inde.local}" width="960" height="640" alt="Le maître de yoga et l’élève décrits dans la légende source.">`:indiaArtImage(id==='fiche'?'documents':'livre')}<div><h3>${piece.name}</h3></div></div><div class="india-answer-choices" role="group" aria-label="Ta réponse">${Object.entries(q.answers).map(([key,label])=>indiaButton(a,'answer',key,label,'india-answer',`aria-pressed="${selected===key}" data-piece="${id}"`)).join('')}</div>${selected?`<div class="india-board-result ${correct?'success':''}" role="status"><strong>${correct?'✓ Oui, c’est cela.':'Tu peux essayer une autre réponse.'}</strong><p>${esc(INDIA_CLUES[id].text)}</p></div>`:'<p class="adventure-reading">Choisis une réponse : tu peux réessayer librement.</p>'}${!correct?indiaButton(a,'reveal',id,'Me montrer la réponse','india-text-button'):''}</section>`;
}
function indiaBranch(a) {
  if(a.screen==='route') {
    const reply=indiaReply(a,['plan-expo','plan-rencontre']);
    return reply||`<p>Ravi te propose deux façons d’accueillir les visiteurs.</p><div class="india-route-choices">${[['expo','Une exposition avec Anaya','Tu choisiras le premier panneau à l’accueil.'],['rencontre','Une visite dialoguée avec Ravi','Tu choisiras une question pour ouvrir la rencontre.']].map(([id,title,text])=>`<div>${indiaButton(a,'plan',id,title,'india-answer',`aria-pressed="${a.plan===id}"`)}<p>${text}</p></div>`).join('')}</div>`;
  }
  const options=a.plan==='expo'?[['photo','ordre-photo'],['pratiques','ordre-pratiques']]:[['personne','ouverture-personne'],['textes','ouverture-textes']];
  const reply=indiaReply(a,options.map(([,key])=>key));
  return reply||`<p>${a.plan==='expo'?'Anaya attend ton choix pour organiser l’exposition.':'Ravi prépare la visite avec toi. Quelle question poseras-tu pour commencer ?'}</p><div class="india-talk-choices">${options.map(([id,key])=>indiaButton(a,a.plan==='expo'?'order':'opening',id,INDIA_LOG[key].label,'journey-choice',`aria-pressed="${(a.plan==='expo'?a.order:a.opening)===id}"`)).join('')}</div>`;
}
function indiaNotebook(a) {
  const clues=indiaClues(a);
  return `<p>${clues.length}/3 repères conservés.</p><div class="india-notebook">${clues.length?clues.map(id=>`<details><summary>${esc(INDIA_CLUES[id].title)}</summary><p>${esc(INDIA_CLUES[id].text)}</p><a href="${id==='photo'?esc(TRAVEL_PHOTOS.inde.source):INDIA_SOURCE}" target="_blank" rel="noopener noreferrer">${id==='photo'?'Photographie et légende source':'Fiche UNESCO'} ↗</a></details>`).join(''):'<p>Observe la photographie et examine les documents pour remplir ton carnet.</p>'}</div>`;
}
function indiaEnding(a) {
  if(a.ending==='expo') {
    const order=a.order==='photo'?['photo','fiche','livre']:['fiche','photo','livre'];
    return `<p class="adventure-success">✓ Mission accomplie</p><p>Anaya ouvre la porte. Les visiteurs découvrent le premier panneau que vous avez choisi.</p>${journeyLine('Anaya',a.order==='photo'?'La photographie attire déjà leur attention. Je vais leur proposer de lire sa légende avant de continuer. Merci, on est prêts !':'Ils commencent par la fiche, comme prévu. Je leur indiquerai ensuite la photographie et le livre. Merci pour ton aide !')}<details class="india-recap" open><summary>Voir le parcours de ton exposition</summary><ol class="india-exhibit-order">${order.map(id=>`<li>${INDIA_PIECES[id].name}<small>${esc(INDIA_LABELS[INDIA_PIECES[id].correct])}</small></li>`).join('')}</ol></details><p class="india-found">✓ Souvenir conservé · ${a.endings.length}/2 dénouements</p>`;
  }
  return `<p class="adventure-success">✓ Mission accomplie</p><p>Anaya accompagne les visiteurs dans la cour. Tu poses la question préparée avec Ravi.</p>${journeyLine('Toi',INDIA_LOG['ouverture-'+a.opening].label,true)}${journeyLine('Ravi',a.opening==='personne'?'J’ai commencé auprès d’un proche, puis j’ai poursuivi mes études avec d’autres enseignants. Regardons cette photo pour parler de la transmission.':'Je reprends certaines explications dans mes lectures, puis j’apporte mes questions au cours. Regardons ensemble le livre et la fiche pour lancer l’échange.')}<p class="india-found">✓ Souvenir conservé · ${a.endings.length}/2 dénouements</p>`;
}
function indiaScreenTitle(a) {
  if(a.screen==='puzzle')return INDIA_QUESTIONS[a.piece].question;
  return {intro:'Avant l’ouverture',anaya:'Un coup de main à Anaya',photo:'Observer la photographie',fiche:'La fiche des pratiques',livre:'Le livre de la bibliothèque',ravi:'Rencontrer Ravi',pratique:'Une pause de yoga avec Ravi',route:'Choisir l’accueil des visiteurs',puzzle:'Les questions des visiteurs',preparation:a.plan==='expo'?'Choisir le premier panneau':'Préparer la première question',ready:'Voici ce que tu as préparé',ending:a.ending?INDIA_ENDINGS[a.ending].title:'La fin de la visite'}[a.screen];
}
function indiaUtility(a,saved) {
  if(indiaPane==='indices')return indiaNotebook(a);
  if(indiaPane==='dialogues')return `<p>Ouvre l’échange que tu souhaites relire.</p><div class="india-history">${a.log.length?a.log.map(key=>`<details name="india-history"><summary>${esc(INDIA_LOG[key].speaker)} · ${esc(INDIA_LOG[key].label)}</summary><p>${esc(INDIA_LOG[key].reply)}</p></details>`).join(''):'<p>Les échanges apparaîtront ici au fil des rencontres.</p>'}</div>`;
  if(indiaPane==='sources')return `<p class="fiction-note">École, personnages et histoire fictifs, racontés en français. Le yoga est le thème de cette escale ; il ne résume pas l’Inde.</p><p>Les documents résument la <a href="${INDIA_SOURCE}" target="_blank" rel="noopener noreferrer">fiche UNESCO sur le yoga ↗</a>.</p><div class="india-source-photo">${travelCredit('inde',true)}</div><p>Les personnes photographiées ne représentent pas Anaya ni Ravi.</p><p>Les autres images sont des illustrations originales créées avec un outil d’IA pour ce récit fictif. <a href="./travel/inde/ILLUSTRATIONS.md" target="_blank" rel="noopener">Voir les illustrations et leur création ↗</a>.</p><p>Pause de yoga facultative : consignes adaptées des fiches du NHS sur <a href="${INDIA_PRACTICE_SOURCES.assise}" target="_blank" rel="noopener noreferrer">l’assise sur une chaise ↗</a> et <a href="${INDIA_PRACTICE_SOURCES.souffle}" target="_blank" rel="noopener noreferrer">la respiration douce ↗</a>. Trois respirations constituent ici une découverte pour le jeu, sans promesse de bénéfice thérapeutique.</p><button class="btn ghost" data-action="read" data-id="inde">Lire la fiche culturelle</button>`;
  if(indiaPane==='aide')return `<p>${a.hint<2?'La photo présente une relation d’apprentissage ; la fiche explique les dimensions du yoga ; le livre accompagne l’étude.':'Photographie → apprendre avec une autre personne. Fiche → plusieurs dimensions d’une pratique. Livre → des écrits pour accompagner l’étude.'}</p>${a.hint<2?indiaButton(a,'hint',null,'Voir les trois réponses','btn ghost'):''}`;
  const tasks=indiaTasks(a);
  return `<p>Découvre les trois repères, puis prépare ${a.plan==='expo'?'l’exposition avec Anaya':a.plan==='rencontre'?'la visite avec Ravi':'l’accueil des visiteurs'}.</p><p class="india-found">${indiaClues(a).length}/3 repères · ${a.endings.length}/2 souvenirs</p>${a.started&&!a.ending&&tasks.length?`<div class="india-mission-next"><strong>La prochaine chose à faire</strong><p>${tasks[0].text}</p>${indiaButton(a,'screen',indiaTaskScreen(tasks[0],a),'Y aller →','btn prime')}</div><details class="india-recap"><summary>Voir les préparatifs restants</summary><ul>${tasks.map(t=>`<li>${indiaButton(a,'screen',indiaTaskScreen(t,a),t.text,'india-task-button')}</li>`).join('')}</ul></details>`:''}${a.ending?Object.entries(INDIA_ENDINGS).map(([id,item])=>`<p>${a.endings.includes(id)?'✓ '+item.title:'○ Un autre dénouement à découvrir'}</p>`).join(''):''}${a.started?indiaButton(a,'screen','pratique','Retrouver la pause de yoga →','india-text-button'):''}<details class="india-recap"><summary>Recommencer l’aventure</summary><p>Tes découvertes et les souvenirs déjà obtenus seront conservés.</p>${indiaButton(a,'replay',null,'Recommencer','btn ghost')}</details>${!a.started&&(saved.completed||saved.seen.length)?'<p class="travel-small">Tes découvertes précédentes sont conservées.</p>':''}`;
}
function indiaScreenBody(a,saved) {
  if(indiaPane)return indiaUtility(a,saved);
  if(a.screen==='intro')return `<p>Anaya prépare l’entrée de l’école et Ravi installe des sièges dans la cour. Ils aimeraient recevoir les visiteurs avec toi.</p><div class="adventure-outcome"><strong>À la fin, tu verras ton accueil prendre vie.</strong><ol><li>Découvre une photo et deux repères.</li><li>Essaie une pause de yoga si tu en as envie.</li><li>Réponds aux visiteurs, puis choisis une exposition ou une conversation.</li></ol></div>${saved.completed||saved.seen.length?'<p class="travel-small">Tes découvertes précédentes en Inde sont conservées.</p>':''}`;
  if(a.screen==='anaya')return indiaDialogue('accueil',a);
  if(a.screen==='ravi')return indiaDialogue('cour',a)+(!a.ending?`<div class="adventure-optional"><strong>La pause est facultative</strong><p>Tu peux essayer le yoga assis ou poursuivre la rencontre.</p>${indiaButton(a,'skip-activity',null,'Continuer sans la pause →','btn ghost')}</div>`:'');
  if(a.screen==='pratique')return indiaPractice(a);
  if(a.screen==='photo')return indiaPhoto(a);
  if(['fiche','livre'].includes(a.screen))return indiaDocument(a,a.screen);
  if(a.screen==='puzzle')return indiaBoard(a);
  if(['route','preparation'].includes(a.screen))return indiaBranch(a);
  if(a.screen==='ending')return indiaEnding(a);
  const tasks=indiaTasks(a);
  return tasks.length?`<p>Il reste un préparatif avant de recevoir le groupe.</p><div class="india-mission-next"><strong>${tasks[0].text}</strong><p>${INDIA_PLACES[tasks[0].place].name}</p></div>`:`<p>✓ Les trois questions sont comprises. ${a.plan==='expo'?'Anaya a préparé le premier panneau que tu as choisi.':'Ravi connaît ta question d’ouverture.'}</p><p>Tout est prêt pour ${a.plan==='expo'?'ouvrir l’exposition':'accueillir le groupe dans la cour'}.</p>`;
}
function indiaPrimary(a) {
  if(a.screen==='pratique')return {action:'practice',key:a.practiceStep<2?'suivante':'terminer',label:a.practiceStep<2?'Étape suivante →':'Terminer la pause →'};
  if(a.ending)return {action:'screen',key:'ending',label:'Revoir mon dénouement →'};
  const screen=(key,label)=>({action:'screen',key,label});
  if(a.screen==='intro')return {action:'start',label:'Rencontrer Anaya →'};
  if(a.screen==='anaya')return screen('photo','Découvrir la photographie →');
  if(['photo','fiche','livre'].includes(a.screen))return {action:'collect',key:a.screen,label:a.screen==='photo'?'Continuer à la bibliothèque →':a.screen==='fiche'?'Continuer : le rôle du livre →':'Rejoindre Ravi →'};
  if(a.screen==='ravi')return screen('pratique','Essayer la pause de yoga →');
  if(a.screen==='route')return a.plan?screen('preparation',a.plan==='expo'?'Choisir le premier panneau →':'Choisir la question d’ouverture →'):{label:'Choisis l’accueil ci-dessus',disabled:true};
  if(a.screen==='puzzle') {
    if(indiaBoardSolved(a)) {const task=indiaTasks(a)[0];return task?screen(indiaTaskScreen(task,a),task.anchor==='india-route-title'?'Choisir la fin de la rencontre →':'Continuer : '+task.text+' →'):screen('ready','Voir mes préparatifs →');}
    if(a.board[a.piece]!==INDIA_PIECES[a.piece].correct)return {label:a.board[a.piece]?'Réessaie ou demande la réponse':'Choisis une réponse ci-dessus',disabled:true};
    const next=Object.keys(INDIA_PIECES).find(id=>a.board[id]!==INDIA_PIECES[id].correct);
    return next?{action:'piece',key:next,label:'Question suivante →'}:{action:'check',label:'Confirmer ces réponses →'};
  }
  if(a.screen==='preparation')return (a.plan==='expo'?a.order:a.opening)?screen('ready','Voir le résultat de mes choix →'):{label:'Choisis une proposition ci-dessus',disabled:true};
  const task=indiaTasks(a)[0];return task?screen(indiaTaskScreen(task,a),'Continuer : '+task.text+' →'):{action:'finish',label:a.plan==='expo'?'Ouvrir l’exposition →':'Accueillir le groupe avec Ravi →'};
}
function indiaGuide(a) {
  if(indiaPane)return '';
  const instructions={intro:[1,INDIA_GOAL],anaya:[1,'Tu peux parler avec Anaya, puis découvrir la photo avec le bouton du bas.'],photo:[2,'Observe la photographie et sa légende, puis continue vers la bibliothèque.'],fiche:[2,'Lis le repère sur les dimensions du yoga, puis continue pour le garder dans ton carnet.'],livre:[2,'Lis ce repère sur les écrits, puis rejoins Ravi avec le bouton du bas.'],ravi:[3,'Choisis : essayer une courte pause de yoga assis, ou continuer sans cette activité.'],pratique:[3,'Suis l’étape à ton rythme. Tu peux passer la pause à tout moment.'],puzzle:[3,'Choisis une réponse : elle sera expliquée. Tu peux réessayer ou demander de l’aide.'],route:[4,'Choisis une exposition avec Anaya ou une conversation avec Ravi. Les deux choix sont valables.'],preparation:[4,'Choisis le premier panneau ou la première question. Ce choix apparaîtra dans la scène finale.'],ready:[5,'Tout est prêt. Le bouton du bas fait commencer la scène finale.'],ending:[5,'La visite que tu as préparée commence. Ton souvenir est conservé.']};
  const [stage,instruction]=instructions[a.screen];return adventureGuidePanel(INDIA_GOAL,stage,instruction);
}
function renderIndiaAdventure() {
  const saved=journeyProgress('inde'),a=saved.adventure;
  const sequence=['anaya','photo','fiche','livre','ravi','pratique','puzzle','route','preparation','ready'];
  const utilityTitles={mission:'Ta mission',indices:'Tes repères',dialogues:'Les échanges',sources:'Sources et récit',aide:'Un indice pour l’énigme'};
  const title=indiaPane?utilityTitles[indiaPane]:indiaScreenTitle(a),primary=indiaPrimary(a),index=sequence.indexOf(a.screen);
  const previous=a.screen==='pratique'&&a.practiceStep>0?{action:'practice',key:'precedente'}:a.screen==='puzzle'&&a.piece!=='photo'?{action:'piece',key:Object.keys(INDIA_PIECES)[Object.keys(INDIA_PIECES).indexOf(a.piece)-1]}:index>0?{action:'screen',key:sequence[index-1]==='preparation'&&!a.plan?'route':sequence[index-1]}:null;
  app.innerHTML=`<section class="india-player" aria-label="Aventure en Inde"><header class="india-player-toolbar"><button class="india-exit" data-action="journey-back">← Atlas</button><div><small>🇮🇳 Inde</small><h1 id="journey-title" tabindex="-1">Avant l’ouverture</h1></div>${indiaButton(a,'pane',indiaPane?'play':'mission',indiaPane?'Fermer le carnet':'Carnet','india-carnet-button',`aria-pressed="${!!indiaPane}"`)}</header><nav class="india-placebar" aria-label="Changer de lieu dans l’école fictive">${[['accueil','Accueil'],['bibliotheque','Bibliothèque'],['cour','Cour']].map(([id,label])=>indiaButton(a,'move',id,label,'india-location',`aria-current="${a.place===id?'location':'false'}"`)).join('')}</nav><div class="india-screen-scroll" id="india-screen-scroll"><article class="india-screen" data-india-screen="${indiaPane||a.screen}"><div class="india-screen-heading"><span class="overline">${indiaPane?'Carnet de voyage':a.screen==='intro'?'Une aventure en trois lieux':INDIA_PLACES[a.place].name}</span><h2 id="india-screen-title" tabindex="-1">${esc(title)}</h2></div>${indiaPane&&indiaPane!=='aide'?`<nav class="india-carnet-tabs" aria-label="Dans ton carnet">${[['mission','Mission'],['indices','Indices'],['dialogues','Échanges'],['sources','Sources']].map(([id,label])=>indiaButton(a,'pane',id,label,'india-carnet-tab',`aria-pressed="${indiaPane===id}"`)).join('')}</nav>`:''}${a.ending&&a.screen!=='ending'&&!indiaPane?'<p class="india-review-note">Aventure terminée · tu peux revoir les lieux et les documents.</p>':''}${indiaNotice?.place===a.place&&!indiaPane?`<p class="india-notice" role="status">${esc(indiaNotice.text)}</p>`:''}${indiaGuide(a)}${indiaScreenArt(a)}${indiaScreenBody(a,saved)}</article></div><footer class="india-player-controls">${indiaPane?`${indiaButton(a,'pane','play','← Revenir au jeu','btn prime')}<span class="india-control-status">${indiaClues(a).length}/3 repères</span>`:a.screen==='ending'?`${indiaButton(a,'pane','mission','Mes souvenirs','btn ghost')}${indiaButton(a,'replay',null,'Rejouer l’aventure','btn prime')}`:`${previous?indiaButton(a,previous.action,previous.key,'← Précédent','btn ghost'):'<button class="btn ghost" disabled>← Précédent</button>'}<span class="india-control-status">${a.screen==='pratique'?'Pause '+(a.practiceStep+1)+'/3':a.screen==='puzzle'?'Question '+(Object.keys(INDIA_PIECES).indexOf(a.piece)+1)+'/3':indiaClues(a).length+'/3 repères'}</span>${primary.disabled?`<button class="btn prime" disabled>${esc(primary.label)}</button>`:indiaButton(a,primary.action,primary.key,primary.label,'btn prime')}`}</footer></section>`;
}
function indiaAction(action,key,expectedPlace,anchor,expectedScreen,piece) {
  if(view!=='journey'||activeJourney!=='inde')return false;
  const saved=journeyProgress('inde'),a=saved.adventure;
  if(expectedScreen&&expectedScreen!==a.screen)return false;
  const log=id=>{a.log.push(id);a.reply=id;};
  let keepScroll=false;
  if(action==='pane') {
    if(!['play','mission','indices','dialogues','sources'].includes(key))return false;
    indiaPane=key==='play'?null:key;indiaNotice=null;render();document.getElementById('india-screen-title')?.focus({preventScroll:true});document.getElementById('india-screen-scroll')?.scrollTo?.({top:0});return true;
  }
  if(action==='replay') {
    const fresh=newIndiaAdventure();fresh.endings=a.endings;saved.adventure=fresh;indiaPane=null;indiaNotice=null;state.journeys.inde=saved;persist();render();document.getElementById('india-screen-title')?.focus({preventScroll:true});return true;
  }
  if(expectedPlace&&expectedPlace!==a.place)return false;
  if(a.ending&&!['move','screen','piece','talk','detail','clear-reply','practice'].includes(action))return false;
  if(action==='start') {
    if(a.started)return false;a.started=true;a.visited=['accueil'];a.screen='anaya';
  } else if(action==='move'||action==='screen') {
    let screen;
    if(action==='move') {
      if(!Object.hasOwn(INDIA_PLACES,key))return false;
      const task=indiaTasks(a).find(t=>t.place===key&&t.anchor===anchor);
      screen=task?indiaTaskScreen(task,a):indiaSuggestedScreen(a,key);
    } else {
      if(!INDIA_SCREEN_KEYS.includes(key)||key==='intro'||key==='ending'&&!a.ending||key==='preparation'&&!a.plan)return false;
      screen=key;
    }
    if(!a.started){a.started=true;a.visited=['accueil'];}
    if(screen==='pratique'&&a.practiceStatus&&a.screen!=='pratique')a.practiceStep=0;
    a.screen=screen;a.place=indiaScreenPlace(a,screen);a.visited=[...new Set([...a.visited,a.place])];a.reply=null;
  } else {
    if(!a.started)return false;
    if(action==='collect') {
      if(!['photo','fiche','livre'].includes(key)||a.screen!==key)return false;
      if(key==='photo'){a.observed=[...new Set([...a.observed,'legende'])];a.detail='legende';}else a.documents=[...new Set([...a.documents,key])];
      a.screen={photo:'fiche',fiche:'livre',livre:'ravi'}[key];a.place=indiaScreenPlace(a,a.screen);a.visited=[...new Set([...a.visited,a.place])];a.reply=null;
    } else if(action==='skip-activity') {
      if(a.screen!=='ravi')return false;a.practiceStatus=a.practiceStatus==='done'?'done':'skipped';a.screen=indiaTasks(a)[0]?indiaTaskScreen(indiaTasks(a)[0],a):'ready';a.place=indiaScreenPlace(a,a.screen);a.visited=[...new Set([...a.visited,a.place])];a.reply=null;
    } else if(action==='reveal') {
      if(a.screen!=='puzzle'||key!==a.piece)return false;a.board[key]=INDIA_PIECES[key].correct;a.checked=true;keepScroll=true;
    } else if(action==='practice') {
      if(a.place!=='cour'||a.screen!=='pratique')return false;
      if(key==='suivante'&&a.practiceStep<2)a.practiceStep++;
      else if(key==='precedente'&&a.practiceStep>0)a.practiceStep--;
      else if(key==='passer'||key==='terminer'&&a.practiceStep===2){
        a.practiceStatus=key==='terminer'?'done':a.practiceStatus==='done'?'done':'skipped';
        a.screen=a.ending?'ending':indiaTasks(a)[0]?indiaTaskScreen(indiaTasks(a)[0],a):'ready';a.place=indiaScreenPlace(a,a.screen);a.visited=[...new Set([...a.visited,a.place])];
      } else return false;
    } else if(action==='clear-reply'){a.reply=null;}
    else if(action==='talk') {
      if(!Object.hasOwn(INDIA_LOG,key)||INDIA_LOG[key].place!==a.place||!['anaya-mission','anaya-apprendre','ravi-premier','ravi-photo','ravi-livres'].includes(key))return false;
      if(key==='ravi-photo'&&!a.observed.includes('legende'))return false;
      if(a.ending&&!a.log.includes(key))return false;
      if(!a.log.includes(key))a.log.push(key);a.reply=key;a.screen=a.place==='accueil'?'anaya':'ravi';
    } else if(action==='detail') {
      if(a.place!=='accueil'||!Object.hasOwn(INDIA_DETAILS,key))return false;
      a.screen='photo';a.detail=key;a.observed=[...new Set([...a.observed,key])];
    } else if(action==='document') {
      if(a.place!=='bibliotheque'||!['fiche','livre'].includes(key)||a.documents.includes(key))return false;
      a.screen=key;a.documents.push(key);
    } else if(action==='piece') {
      if(a.place!=='bibliotheque'||!Object.hasOwn(INDIA_PIECES,key))return false;a.screen='puzzle';a.piece=key;
    } else if(action==='answer'||action==='label'||action==='place-label') {
      if(a.place!=='bibliotheque')return false;
      a.screen='puzzle';
      if(action==='label') {if(!Object.hasOwn(INDIA_LABELS,key))return false;a.selected=key;}
      else {
        const target=action==='answer'?piece||a.piece:key,label=action==='answer'?key:a.selected;
        if(!Object.hasOwn(INDIA_PIECES,target))return false;
        if(action==='answer'&&piece&&piece!==a.piece)return false;
        if(!Object.hasOwn(INDIA_LABELS,label)){indiaNotice={place:a.place,text:'Choisis d’abord l’un des trois titres, puis la pièce où le poser.'};}
        else {
          a.board[target]=label;a.selected=null;a.piece=target;a.checked=true;
        }
      }
      keepScroll=true;
    } else if(action==='check') {
      if(a.place!=='bibliotheque')return false;
      a.screen='puzzle';a.checked=true;
      const wrong=Object.keys(INDIA_PIECES).find(id=>a.board[id]!==INDIA_PIECES[id].correct);if(wrong)a.piece=wrong;
    } else if(action==='hint') {
      if(a.place!=='bibliotheque')return false;a.hint=Math.min(2,a.hint+1);indiaPane='aide';
    } else if(action==='plan') {
      if(a.place!=='cour'||!Object.hasOwn(INDIA_ENDINGS,key))return false;
      a.screen='route';a.plan=key;log('plan-'+key);
    } else if(action==='order') {
      if(a.place!=='accueil'||a.plan!=='expo'||!['photo','pratiques'].includes(key))return false;
      a.screen='preparation';a.order=key;log('ordre-'+key);
    } else if(action==='opening') {
      if(a.place!=='cour'||a.plan!=='rencontre'||!['personne','textes'].includes(key))return false;
      a.screen='preparation';a.opening=key;log('ouverture-'+key);
    } else if(action==='finish') {
      if(indiaTasks(a).length||a.place!==(a.plan==='expo'?'accueil':'cour'))return false;
      a.ending=a.plan;a.endings=[...new Set([...a.endings,a.ending])];a.screen='ending';
    } else return false;
  }
  if(action!=='hint')indiaPane=null;
  if(!['place-label','answer'].includes(action))indiaNotice=null;
  saved.adventure=cleanIndiaAdventure(a);
  const clues=indiaClues(saved.adventure);
  if(clues.includes('fiche'))saved.seen=[...new Set([...saved.seen,'hands'])];
  if(clues.includes('photo')||clues.includes('livre'))saved.seen=[...new Set([...saved.seen,'voices'])];
  if(saved.adventure.ending)saved.completed=true;
  state.journeys.inde=saved;persist();render();
  const target=keepScroll?app.querySelector('[data-action="india-answer"][aria-pressed="true"]')||document.getElementById('india-screen-title'):document.getElementById('india-screen-title');target?.focus({preventScroll:true});
  if(!keepScroll)document.getElementById('india-screen-scroll')?.scrollTo?.({top:0});
  return true;
}
document.addEventListener('click',event=>{
  const button=event.target.closest('[data-action]');if(!button?.dataset.action?.startsWith('india-'))return;
  indiaAction(button.dataset.action.slice(6),button.dataset.key,button.dataset.from,button.dataset.target,button.dataset.screen,button.dataset.piece);
});

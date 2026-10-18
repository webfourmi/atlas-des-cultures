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
const INDIA_SCREEN_KEYS=['intro','anaya','photo','fiche','livre','ravi','route','puzzle','preparation','ready','ending'];
let indiaNotice = null, indiaPane = null;

function newIndiaAdventure() {
  return {version:2,screen:'intro',piece:'photo',reply:null,started:false,place:'accueil',visited:[],observed:[],detail:null,documents:[],log:[],board:{photo:null,fiche:null,livre:null},selected:null,checked:false,hint:0,plan:null,order:null,opening:null,ending:null,endings:[]};
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
  return {intro:'accueil',anaya:'accueil',photo:'accueil',fiche:'bibliotheque',livre:'bibliotheque',puzzle:'bibliotheque',ravi:'cour',route:'cour'}[screen]||a.place;
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
  const frozen=a.ending&&(!['move','screen','piece','pane','replay','clear-reply','detail','talk'].includes(action)||action==='talk'&&!a.log.includes(key));
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
  return `<section class="india-dialogue"><div class="india-person"><span aria-hidden="true">${p.person[0]}</span><div><strong>${p.person}</strong><small>${p.role} · personnage fictif</small></div></div>${reply||`${journeyLine(p.person,id==='accueil'?'Bonjour ! Les titres de nos trois documents se sont décollés. Tu nous aides à les retrouver avant l’arrivée des visiteurs ?':'Bonjour ! Anaya prépare l’entrée et je termine la cour. Tu viens me parler des documents ?')}<div class="india-talk-choices">${keys.map(key=>indiaButton(a,'talk',key,INDIA_LOG[key].label+(a.log.includes(key)?' ✓':''),'journey-choice')).join('')}</div>`}</section>`;
}
function indiaPhoto(a) {
  return `<section class="india-photo-activity"><figure class="india-photo"><div class="india-photo-image"><img src="${TRAVEL_PHOTOS.inde.local}" width="960" height="640" alt="Une personne assise et une personne penchée devant elle, les mains jointes."><span class="india-photo-marker" style="left:43%;top:35%" aria-hidden="true">1</span><span class="india-photo-marker" style="left:64%;top:66%" aria-hidden="true">2</span></div><figcaption>Photo : ${esc(TRAVEL_PHOTOS.inde.author)} · <a href="${esc(TRAVEL_PHOTOS.inde.source)}" target="_blank" rel="noopener noreferrer">Source</a> · <a href="${esc(TRAVEL_PHOTOS.inde.licenseUrl)}" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> · <a href="${TRAVEL_PHOTOS.inde.local}" target="_blank" rel="noopener">Agrandir ↗</a></figcaption></figure><div class="india-detail-buttons" role="group" aria-label="Examiner la photographie">${Object.entries(INDIA_DETAILS).map(([key,item],index)=>indiaButton(a,'detail',key,`${index+1}. ${item.label}`,'india-detail-button',`aria-pressed="${a.detail===key}"`)).join('')}</div><div class="india-observation" id="india-observation" tabindex="-1" aria-live="polite">${a.detail?`<strong>${esc(INDIA_DETAILS[a.detail].label)}</strong><p>${esc(INDIA_DETAILS[a.detail].text)}</p>${a.detail==='legende'?'<small>✓ Indice conservé</small>':''}`:'<p>Observe un détail, puis lis la légende source pour identifier la relation entre les personnes.</p>'}</div></section>`;
}
function indiaDocument(a,id) {
  return `<section class="india-document-card">${indiaIcon(INDIA_PIECES[id].icon)}${a.documents.includes(id)?`<p class="india-document-text">${esc(INDIA_CLUES[id].text)}</p><p class="india-found">✓ Indice conservé dans ton carnet</p><a class="india-source-link" href="${INDIA_SOURCE}" target="_blank" rel="noopener noreferrer">Lire le dossier UNESCO ↗</a>`:`<p>${id==='fiche'?'Sur la table, une fiche présente différentes dimensions du yoga. Tu peux l’ouvrir pour retrouver son titre.':'Un livre ouvert accompagne les notes de lecture. Examine-le pour comprendre la place des écrits dans l’apprentissage.'}</p>${indiaButton(a,'document',id,id==='fiche'?'Ouvrir la fiche':'Examiner le livre','btn prime')}`}<small class="india-fiction-small">${id==='livre'?'Le livre dessiné est un objet du récit. ':''}Repère documentaire : synthèse de la fiche UNESCO.</small></section>`;
}
function indiaBoard(a) {
  const id=a.piece,piece=INDIA_PIECES[id],index=Object.keys(INDIA_PIECES).indexOf(id),solved=indiaBoardSolved(a);
  const errors=a.checked?Object.keys(INDIA_PIECES).filter(key=>a.board[key]!==INDIA_PIECES[key].correct):[];
  return `<section class="india-puzzle" aria-label="L’énigme des trois titres"><div class="india-puzzle-heading"><span>Support ${index+1} / 3</span><div role="group" aria-label="Choisir un support">${Object.entries(INDIA_PIECES).map(([key,item],i)=>indiaButton(a,'piece',key,String(i+1),'india-piece-dot',`aria-label="${esc(item.name)}${a.board[key]?', titre choisi':''}" aria-pressed="${id===key}" aria-invalid="${a.checked&&a.board[key]!==INDIA_PIECES[key].correct}"`)).join('')}</div></div><div class="india-puzzle-support">${id==='photo'?`<img src="${TRAVEL_PHOTOS.inde.local}" width="960" height="640" alt="Le maître de yoga et l’élève décrits dans la légende source.">`:indiaIcon(piece.icon)}<div><h3>${piece.name}</h3><p>${esc(piece.description)}</p></div></div><p class="india-question">Quel titre correspond à ce support ?</p><div class="india-answer-choices" role="group" aria-label="Associer un titre à ${esc(piece.name)}">${Object.entries(INDIA_LABELS).map(([key,label])=>indiaButton(a,'answer',key,label,'india-answer',`aria-pressed="${a.board[id]===key}" data-piece="${id}"`)).join('')}</div>${a.checked?`<p class="india-board-result ${solved?'success':''}" role="status">${solved?'✓ Les trois titres sont bien associés. Le panneau est prêt.':`Il reste ${errors.length} ${errors.length===1?'association à revoir':'associations à revoir'}. ${errors.includes(id)?'Revois le titre de ce support.':'Tu peux revenir aux supports signalés.'}`}</p>`:`<p class="india-board-count">${Object.values(a.board).filter(Boolean).length}/3 titres choisis</p>`}${indiaButton(a,'hint',null,'Un indice','india-text-button')}</section>`;
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
  return `<p>${clues.length}/3 indices conservés.</p><div class="india-notebook">${clues.length?clues.map(id=>`<details><summary>${esc(INDIA_CLUES[id].title)}</summary><p>${esc(INDIA_CLUES[id].text)}</p><a href="${id==='photo'?esc(TRAVEL_PHOTOS.inde.source):INDIA_SOURCE}" target="_blank" rel="noopener noreferrer">${id==='photo'?'Photographie et légende source':'Fiche UNESCO'} ↗</a></details>`).join(''):'<p>Observe la photographie et examine les documents pour remplir ton carnet.</p>'}</div>`;
}
function indiaEnding(a) {
  if(a.ending==='expo') {
    const order=a.order==='photo'?['photo','fiche','livre']:['fiche','photo','livre'];
    return `<p>Anaya ouvre la porte. Les visiteurs découvrent le premier panneau que vous avez choisi.</p>${journeyLine('Anaya',a.order==='photo'?'La photographie attire déjà leur attention. Je vais leur proposer de lire sa légende avant de continuer. Merci, on est prêts !':'Ils commencent par la fiche, comme prévu. Je leur indiquerai ensuite la photographie et le livre. Merci pour ton aide !')}<details class="india-recap"><summary>Voir le parcours de ton exposition</summary><ol class="india-exhibit-order">${order.map(id=>`<li>${INDIA_PIECES[id].name}<small>${esc(INDIA_LABELS[INDIA_PIECES[id].correct])}</small></li>`).join('')}</ol></details><p class="india-found">✓ Souvenir conservé · ${a.endings.length}/2 dénouements</p>`;
  }
  return `<p>Anaya accompagne les visiteurs dans la cour. Tu poses la question préparée avec Ravi.</p>${journeyLine('Toi',INDIA_LOG['ouverture-'+a.opening].label,true)}${journeyLine('Ravi',a.opening==='personne'?'J’ai commencé auprès d’un proche, puis j’ai poursuivi mes études avec d’autres enseignants. Regardons cette photo pour parler de la transmission.':'Je reprends certaines explications dans mes lectures, puis j’apporte mes questions au cours. Regardons ensemble le livre et la fiche pour lancer l’échange.')}<p class="india-found">✓ Souvenir conservé · ${a.endings.length}/2 dénouements</p>`;
}
function indiaScreenTitle(a) {
  return {intro:'Avant l’ouverture',anaya:'Un coup de main à Anaya',photo:'Observer la photographie',fiche:'La fiche des pratiques',livre:'Le livre de la bibliothèque',ravi:'Rencontrer Ravi',route:'Choisir l’accueil des visiteurs',puzzle:'Retrouver les trois titres',preparation:a.plan==='expo'?'Choisir le premier panneau':'Préparer la première question',ready:'Avant d’ouvrir les portes',ending:a.ending?INDIA_ENDINGS[a.ending].title:'La fin de la visite'}[a.screen];
}
function indiaUtility(a,saved) {
  if(indiaPane==='indices')return indiaNotebook(a);
  if(indiaPane==='dialogues')return `<p>Ouvre l’échange que tu souhaites relire.</p><div class="india-history">${a.log.length?a.log.map(key=>`<details name="india-history"><summary>${esc(INDIA_LOG[key].speaker)} · ${esc(INDIA_LOG[key].label)}</summary><p>${esc(INDIA_LOG[key].reply)}</p></details>`).join(''):'<p>Les échanges apparaîtront ici au fil des rencontres.</p>'}</div>`;
  if(indiaPane==='sources')return `<p class="fiction-note">École, personnages et histoire fictifs, racontés en français. Le yoga est le thème de cette escale ; il ne résume pas l’Inde.</p><p>Les documents résument la <a href="${INDIA_SOURCE}" target="_blank" rel="noopener noreferrer">fiche UNESCO sur le yoga ↗</a>.</p><div class="india-source-photo">${travelCredit('inde',true)}</div><p>Les personnes photographiées ne représentent pas Anaya ni Ravi.</p><button class="btn ghost" data-action="read" data-id="inde">Lire la fiche culturelle</button>`;
  if(indiaPane==='aide')return `<p>${a.hint<2?'Relis la légende de la photographie, puis compare la liste des pratiques au rôle du livre. Chaque support a son propre titre.':'Photographie → apprendre avec une autre personne. Fiche → plusieurs dimensions d’une pratique. Livre → des écrits pour accompagner l’étude.'}</p>${a.hint<2?indiaButton(a,'hint',null,'Voir les trois associations','btn ghost'):''}`;
  const tasks=indiaTasks(a);
  return `<p>Retrouve les titres des trois documents, puis prépare ${a.plan==='expo'?'l’exposition avec Anaya':a.plan==='rencontre'?'la visite avec Ravi':'l’accueil des visiteurs'}.</p><p class="india-found">${indiaClues(a).length}/3 indices · ${a.endings.length}/2 souvenirs</p>${a.started&&!a.ending&&tasks.length?`<div class="india-mission-next"><strong>La prochaine chose à faire</strong><p>${tasks[0].text}</p>${indiaButton(a,'screen',indiaTaskScreen(tasks[0],a),'Y aller →','btn prime')}</div><details class="india-recap"><summary>Voir les préparatifs restants</summary><ul>${tasks.map(t=>`<li>${indiaButton(a,'screen',indiaTaskScreen(t,a),t.text,'india-task-button')}</li>`).join('')}</ul></details>`:''}${a.ending?Object.entries(INDIA_ENDINGS).map(([id,item])=>`<p>${a.endings.includes(id)?'✓ '+item.title:'○ Un autre dénouement à découvrir'}</p>`).join(''):''}<details class="india-recap"><summary>Recommencer l’aventure</summary><p>Tes découvertes et les souvenirs déjà obtenus seront conservés.</p>${indiaButton(a,'replay',null,'Recommencer','btn ghost')}</details>${!a.started&&(saved.completed||saved.seen.length)?'<p class="travel-small">Tes découvertes précédentes sont conservées.</p>':''}`;
}
function indiaScreenBody(a,saved) {
  if(indiaPane)return indiaUtility(a,saved);
  if(a.screen==='intro')return `<div class="india-intro-pieces">${indiaIcon('photo')}${indiaIcon('pratiques')}${indiaIcon('livre')}</div><p>Anaya et Ravi préparent l’accueil de visiteurs dans une école de yoga fictive. Trois documents ont perdu leur titre.</p><p>Explore les lieux, retrouve les légendes et choisis comment recevoir le groupe.</p><p class="india-start-help">Les trois lieux sont toujours accessibles dans la barre du haut.</p>${saved.completed||saved.seen.length?'<p class="travel-small">Tes découvertes précédentes en Inde sont conservées.</p>':''}`;
  if(a.screen==='anaya')return indiaDialogue('accueil',a);
  if(a.screen==='ravi')return indiaDialogue('cour',a);
  if(a.screen==='photo')return indiaPhoto(a);
  if(['fiche','livre'].includes(a.screen))return indiaDocument(a,a.screen);
  if(a.screen==='puzzle')return indiaBoard(a);
  if(['route','preparation'].includes(a.screen))return indiaBranch(a);
  if(a.screen==='ending')return indiaEnding(a);
  const tasks=indiaTasks(a);
  return tasks.length?`<p>Il reste un préparatif avant de recevoir le groupe.</p><div class="india-mission-next"><strong>${tasks[0].text}</strong><p>${INDIA_PLACES[tasks[0].place].name}</p></div>`:`${indiaIcon(INDIA_ENDINGS[a.plan].icon)}<p>Les trois titres sont vérifiés. ${a.plan==='expo'?'Anaya a préparé le premier panneau que tu as choisi.':'Ravi connaît ta question d’ouverture.'}</p><p>Tout est prêt pour ${a.plan==='expo'?'ouvrir l’exposition':'accueillir le groupe dans la cour'}.</p>`;
}
function indiaPrimary(a) {
  if(a.ending)return {action:'screen',key:'ending',label:'Revoir mon dénouement →'};
  const screen=(key,label)=>({action:'screen',key,label});
  if(a.screen==='intro')return {action:'start',label:'Entrer dans l’école →'};
  if(a.screen==='anaya')return screen('photo','Observer la photo →');
  if(a.screen==='photo')return a.observed.includes('legende')?screen('fiche','Aller à la bibliothèque →'):{action:'detail',key:'legende',label:'Lire la légende →'};
  if(a.screen==='fiche')return a.documents.includes('fiche')?screen('livre','Examiner le livre →'):{action:'document',key:'fiche',label:'Lire la fiche →'};
  if(a.screen==='livre')return a.documents.includes('livre')?screen('ravi','Rencontrer Ravi →'):{action:'document',key:'livre',label:'Examiner le livre →'};
  if(a.screen==='ravi')return screen('route','Choisir la suite →');
  if(a.screen==='route')return a.plan?screen('puzzle','Retrouver les titres →'):{label:'Choisis une façon d’accueillir',disabled:true};
  if(a.screen==='puzzle') {
    if(indiaBoardSolved(a)) {
      const task=indiaTasks(a)[0];return task?screen(indiaTaskScreen(task,a),'Continuer les préparatifs →'):screen('ready','Tout est prêt →');
    }
    const ids=Object.keys(INDIA_PIECES),index=ids.indexOf(a.piece);
    if(!a.board[a.piece])return {label:'Choisis un titre ci-dessus',disabled:true};
    if(a.checked)return {action:'check',label:'Vérifier à nouveau'};
    return index<2?{action:'piece',key:ids[index+1],label:'Support suivant →'}:{action:'check',label:'Vérifier les trois titres'};
  }
  if(a.screen==='preparation')return (a.plan==='expo'?a.order:a.opening)?screen('ready','Préparatifs terminés →'):{label:'Choisis une proposition',disabled:true};
  const task=indiaTasks(a)[0];return task?screen(indiaTaskScreen(task,a),'Poursuivre ce préparatif →'):{action:'finish',label:a.plan==='expo'?'Ouvrir avec Anaya →':'Accueillir avec Ravi →'};
}
function renderIndiaAdventure() {
  const saved=journeyProgress('inde'),a=saved.adventure;
  const sequence=['anaya','photo','fiche','livre','ravi','route','puzzle','preparation','ready'];
  const utilityTitles={mission:'Ta mission',indices:'Tes indices',dialogues:'Les échanges',sources:'Sources et récit',aide:'Un indice pour l’énigme'};
  const title=indiaPane?utilityTitles[indiaPane]:indiaScreenTitle(a),primary=indiaPrimary(a),index=sequence.indexOf(a.screen);
  const previous=a.screen==='puzzle'&&a.piece!=='photo'?{action:'piece',key:Object.keys(INDIA_PIECES)[Object.keys(INDIA_PIECES).indexOf(a.piece)-1]}:index>0?{action:'screen',key:sequence[index-1]==='preparation'&&!a.plan?'route':sequence[index-1]}:null;
  app.innerHTML=`<section class="india-player" aria-label="Aventure en Inde"><header class="india-player-toolbar"><button class="india-exit" data-action="journey-back">← Atlas</button><div><small>🇮🇳 Inde</small><h1 id="journey-title" tabindex="-1">Avant l’ouverture</h1></div>${indiaButton(a,'pane',indiaPane?'play':'mission',indiaPane?'Fermer le carnet':'Carnet','india-carnet-button',`aria-pressed="${!!indiaPane}"`)}</header><nav class="india-placebar" aria-label="Changer de lieu dans l’école fictive">${[['accueil','Accueil'],['bibliotheque','Bibliothèque'],['cour','Cour']].map(([id,label])=>indiaButton(a,'move',id,label,'india-location',`aria-current="${a.place===id?'location':'false'}"`)).join('')}</nav><div class="india-screen-scroll" id="india-screen-scroll"><article class="india-screen" data-india-screen="${indiaPane||a.screen}"><div class="india-screen-heading"><span class="overline">${indiaPane?'Carnet de voyage':a.screen==='intro'?'Une aventure en trois lieux':INDIA_PLACES[a.place].name}${!indiaPane&&index>=0?' · '+(index+1)+' / '+sequence.length:''}</span><h2 id="india-screen-title" tabindex="-1">${esc(title)}</h2></div>${indiaPane&&indiaPane!=='aide'?`<nav class="india-carnet-tabs" aria-label="Dans ton carnet">${[['mission','Mission'],['indices','Indices'],['dialogues','Échanges'],['sources','Sources']].map(([id,label])=>indiaButton(a,'pane',id,label,'india-carnet-tab',`aria-pressed="${indiaPane===id}"`)).join('')}</nav>`:''}${a.ending&&a.screen!=='ending'&&!indiaPane?'<p class="india-review-note">Aventure terminée · tu peux revoir les lieux et les documents.</p>':''}${indiaNotice?.place===a.place&&!indiaPane?`<p class="india-notice" role="status">${esc(indiaNotice.text)}</p>`:''}${indiaScreenBody(a,saved)}</article></div><footer class="india-player-controls">${indiaPane?`${indiaButton(a,'pane','play','← Revenir au jeu','btn prime')}<span class="india-control-status">${indiaClues(a).length}/3 indices</span>`:a.screen==='ending'?`${indiaButton(a,'pane','mission','Mes souvenirs','btn ghost')}${indiaButton(a,'replay',null,'Rejouer l’aventure','btn prime')}`:`${previous?indiaButton(a,previous.action,previous.key,'← Précédent','btn ghost'):'<button class="btn ghost" disabled>← Précédent</button>'}<span class="india-control-status">${a.screen==='puzzle'?'Support '+(Object.keys(INDIA_PIECES).indexOf(a.piece)+1)+'/3':indiaClues(a).length+'/3 indices'}</span>${primary.disabled?`<button class="btn prime" disabled>${esc(primary.label)}</button>`:indiaButton(a,primary.action,primary.key,primary.label,'btn prime')}`}</footer></section>`;
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
  if(a.ending&&!['move','screen','piece','talk','detail','clear-reply'].includes(action))return false;
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
    a.screen=screen;a.place=indiaScreenPlace(a,screen);a.visited=[...new Set([...a.visited,a.place])];a.reply=null;
  } else {
    if(!a.started)return false;
    if(action==='clear-reply'){a.reply=null;}
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
          const from=Object.keys(a.board).find(id=>a.board[id]===label),previous=a.board[target];
          if(from&&from!==target)a.board[from]=previous;
          a.board[target]=label;a.selected=null;a.piece=target;a.checked=false;
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

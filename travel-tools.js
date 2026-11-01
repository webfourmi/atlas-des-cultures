/* Choisir un voyage et reprendre une aventure, sans modifier les anciens carnets. */
'use strict';
let travelQuery='',travelRegion='all',travelStatus='all';
const ATLAS_NEW_IDS=['espagne','finlande','egypte','mongolie','senegal'];
function cleanLastJourney(value){return typeof value==='string'&&STOPS.some(s=>s.id===value)?value:null;}
function adventureState(id){return journeyProgress(id)?.adventure;}
function travelMatches(){
  const query=recipeSearchText(travelQuery.trim());
  return STOPS.filter(s=>{
    const a=adventureState(s.id),data=s.id==='inde'?{title:'Bienvenue à l’école de yoga',mission:INDIA_GOAL}:WORLD_ADVENTURES[s.id];
    return (travelRegion==='all'||s.region===travelRegion)&&(!query||recipeSearchText([s.country,s.topic,data.title].join(' ')).includes(query))&&(travelStatus==='all'||travelStatus==='new'&&ATLAS_NEW_IDS.includes(s.id)||travelStatus==='ongoing'&&a.started&&!a.ending||travelStatus==='done'&&!!a.ending);
  }).sort((a,b)=>Number(ATLAS_NEW_IDS.includes(b.id))-Number(ATLAS_NEW_IDS.includes(a.id)));
}
function latestJourney(){
  const last=cleanLastJourney(state.lastJourney),ongoing=id=>{const a=adventureState(id);return a?.started&&!a.ending;};
  return last&&ongoing(last)?last:[...STOPS].reverse().find(s=>ongoing(s.id))?.id||null;
}
function renderResumeCard(){
  const id=latestJourney();if(!id)return '';
  const stop=STOPS.find(s=>s.id===id),a=adventureState(id),title=id==='inde'?'Bienvenue à l’école de yoga':WORLD_ADVENTURES[id].title;
  const detail=id==='inde'?'Retrouve ton école de yoga.':worldScreenTitle(id,a);
  return `<aside class="travel-resume" aria-label="Reprendre mon voyage"><div><span class="overline">${stop.flag} Ton voyage en cours · ${esc(stop.country)}</span><h2>${esc(title)}</h2><p>${esc(detail)}</p></div><button class="btn prime" data-action="journey" data-id="${id}">Reprendre mon aventure →</button></aside>`;
}
function travelSelectionControls(){
  const regions=[...new Set(STOPS.map(s=>s.region))];
  return `<section class="travel-tools" aria-label="Choisir une aventure"><div><label for="travel-search">Une destination, une tradition…</label><input id="travel-search" type="search" value="${esc(travelQuery)}" placeholder="Flamenco, Sénégal, tissage…" autocomplete="off"></div><div><label for="travel-region">Région</label><select id="travel-region"><option value="all">Toutes les régions</option>${regions.map(r=>`<option value="${esc(r)}"${travelRegion===r?' selected':''}>${esc(r)}</option>`).join('')}</select></div><div class="travel-status-filters" role="group" aria-label="Avancement des aventures">${[['all','Toutes'],['new','5 nouvelles'],['ongoing','En cours'],['done','Terminées']].map(([key,label])=>`<button class="chip${travelStatus===key?' active':''}" data-action="travel-status" data-status="${key}" aria-pressed="${travelStatus===key}">${label}</button>`).join('')}</div></section><p id="travel-results-count" class="travel-results-count" role="status" aria-live="polite"></p>`;
}
function renderTravelStoryResults(){
  const target=document.getElementById('travel-story-results');if(!target)return;
  const entries=travelMatches(),count=document.getElementById('travel-results-count');
  if(count)count.textContent=entries.length+' aventure'+(entries.length===1?'':'s')+' à explorer';
  target.innerHTML=entries.length?entries.map(travelStoryCard).join(''):`<div class="empty"><h2>Aucune aventure ne correspond</h2><p>Essaie un autre mot ou une autre région.</p><button class="btn ghost" data-action="travel-reset-filters">Voir toutes les aventures</button></div>`;
}
function travelStoryCard(s){
  const saved=journeyProgress(s.id),a=saved.adventure,data=s.id==='inde'?{title:'Bienvenue à l’école de yoga',mission:INDIA_GOAL}:WORLD_ADVENTURES[s.id];
  const status=a.ending?'✓ Aventure terminée':a.started?'Aventure en cours':'À découvrir';
  const label=a.ending?'Revoir le dénouement':a.started?'Reprendre l’aventure':'Commencer l’aventure';
  return `<article class="journey-card"${s.id==='inde'?' data-pilot="true"':''}><img class="journey-cover" src="${TRAVEL_PHOTOS[s.id].local}" alt="${esc(TRAVEL_PHOTOS[s.id].caption)}" loading="lazy"><div class="journey-card-copy"><span class="overline">${s.flag} ${esc(s.country)} · ${status}</span>${ATLAS_NEW_IDS.includes(s.id)?'<span class="travel-new">Nouvelle escale</span>':''}<h2>${esc(data.title)}</h2><p>${esc(data.mission||data.goal)}</p><div class="india-card-tag">Un objectif clair · activité facultative · 2 fins</div><div class="travel-small">${a.visited.length}/3 lieux explorés · ${a.endings.length}/2 souvenirs</div><button class="btn prime" data-action="journey" data-id="${s.id}">${label} →</button>${s.id==='indonesie'?'<button class="btn ghost batik-entry" data-action="batik-open">Mon atelier de motifs →</button>':''}${travelCredit(s.id)}</div></article>`;
}
function adventureOverview(){
  const progress=STOPS.map(s=>({s,a:adventureState(s.id)}));
  const done=progress.filter(p=>p.a.ending).length,souvenirs=progress.reduce((n,p)=>n+p.a.endings.length,0);
  return `<section class="adventure-overview"><div><h2>Les souvenirs de tes aventures</h2><p>${done}/${STOPS.length} aventures terminées · ${souvenirs}/${STOPS.length*2} dénouements conservés</p><small>Les tampons ci-dessous viennent des quiz ; les souvenirs viennent des rencontres.</small></div><button class="btn ghost" data-action="travel-stories">Retrouver mes voyages →</button></section>`;
}
function worldMilestones(id,a){
  if(!a.started||worldPane||a.screen==='practice')return '';
  const milestones=[[a.clues.length===3,a.clues.length+'/3 indices'],[worldSolved(id,a),'Énigme reliée'],[!!worldPreparation(id,a),'Suite préparée']];
  return `<div class="world-milestones" aria-label="Les préparatifs de l’aventure">${milestones.map(([done,label])=>`<span class="${done?'complete':''}">${done?'✓':'○'} ${esc(label)}</span>`).join('')}</div>`;
}
function adventureGuidePanel(goal,stage,instruction){
  const labels=['Rencontre','Découvertes','À toi de jouer','Tes choix','Le résultat'];
  return `<aside class="adventure-guide" aria-label="Ton objectif et la prochaine action"><div class="adventure-guide-heading"><span>Étape ${stage} / 5 · ${labels[stage-1]}</span><details><summary>Mon objectif</summary><p>${esc(goal)}</p></details></div><progress max="5" value="${stage}" aria-label="Étape ${stage} sur 5"></progress><p>${esc(instruction)}</p></aside>`;
}
function worldGuide(id,a){
  if(worldPane)return '';
  const data=WORLD_ADVENTURES[id],names=data.characters;
  const instructions={
    intro:[1,data.mission],
    host:[1,'Tu peux poser une question à '+names[0].name+', ou passer à la photographie avec le bouton du bas.'],
    photo:[2,'Regarde la photo et lis sa légende. Le bouton « Continuer » garde ce repère et ouvre la suite.'],
    geste:[2,'Lis ce premier repère, puis touche « Continuer » pour le garder dans ton carnet.'],
    partage:[2,'Lis ce second repère, puis rejoins '+names[1].name+' avec le bouton du bas.'],
    partner:[3,'Choisis : essayer la petite activité avec le bouton du bas, ou continuer sans l’activité.'],
    practice:[3,id==='indonesie'?'Crée un motif personnel à l’écran. L’activité est facultative : tu peux la passer à tout moment.':'Choisis une proposition : sa réponse apparaît juste dessous. Tu peux aussi passer cette activité.'],
    puzzle:[3,'Choisis une réponse : elle sera expliquée. Tu peux réessayer ou demander de l’aide.'],
    route:[4,'Choisis comment accueillir les visiteurs. Les deux possibilités sont valables et mènent à des scènes différentes.'],
    preparation:[4,'Un dernier choix : décide comment commencera ton accueil. Tu verras ce choix dans la scène finale.'],
    ready:[5,'Tes choix sont prêts. Le bouton du bas fait commencer la scène finale.'],
    ending:[5,'La rencontre a commencé grâce à tes choix. Retrouve ci-dessous ce que tu emportes de cette escale.']
  };
  const [stage,instruction]=instructions[a.screen];
  return adventureGuidePanel(data.mission,stage,instruction);
}
function worldEndingRecap(id,a){
  const option=worldPreparation(id,a),plan=worldPlan(id,a),next=STOPS.find(s=>s.id!==id&&!adventureState(s.id).started);
  return `<details class="india-recap world-ending-recap" open><summary>Ce que mes choix ont préparé</summary><p><strong>Mon accueil :</strong> ${esc(plan.title)}.</p><p><strong>Son début :</strong> ${esc(option.label)}.</p>${a.practiceStatus==='done'?'<p>✓ Mon activité est conservée dans le carnet.</p>':''}<p><strong>Un repère à emporter :</strong> ${esc(WORLD_ADVENTURES[id].clues[1].text)}</p></details>${next?`<div class="world-next-trip"><span>Un autre horizon</span><button class="btn ghost" data-action="journey" data-id="${next.id}">${next.flag} Découvrir ${esc(next.country)} →</button></div>`:''}`;
}
document.addEventListener('input',event=>{if(event.target.id==='travel-search'){travelQuery=event.target.value;renderTravelStoryResults();}});
document.addEventListener('change',event=>{if(event.target.id==='travel-region'){travelRegion=event.target.value;renderTravelStoryResults();}});
document.addEventListener('click',event=>{
  const b=event.target.closest('[data-action]');if(!b)return;
  if(b.dataset.action==='travel-status'&&['all','new','ongoing','done'].includes(b.dataset.status)){travelStatus=b.dataset.status;renderTravelHub();document.querySelector(`[data-action="travel-status"][data-status="${travelStatus}"]`)?.focus({preventScroll:true});}
  if(b.dataset.action==='travel-reset-filters'){travelQuery='';travelRegion='all';travelStatus='all';renderTravelHub();document.getElementById('travel-search')?.focus();}
});

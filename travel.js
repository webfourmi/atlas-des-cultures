'use strict';
let travelTab = 'map', travelSelected = 'japon', activeJourney = null, journeyReturn = null;
const JOURNEY_NODES = ['begin','hands','voices','end','finish'];

function cleanJourneys(value) {
  const result = {};
  if (!value || typeof value !== 'object' || Array.isArray(value)) return result;
  for (const id of Object.keys(JOURNEYS)) {
    const saved = value[id];
    if (!saved || typeof saved !== 'object' || Array.isArray(saved)) continue;
    result[id] = {
      node:JOURNEY_NODES.includes(saved.node) ? saved.node : 'begin',
      seen:Array.isArray(saved.seen) ? [...new Set(saved.seen.filter(n => n === 'hands' || n === 'voices'))] : [],
      completed:saved.completed === true || saved.node === 'finish'
    };
  }
  return result;
}
function mergeJourneys(local, restored) {
  const result = cleanJourneys(local), incoming = cleanJourneys(restored);
  for (const [id, item] of Object.entries(incoming)) {
    if (!result[id]) result[id] = item;
    else {
      result[id].seen = [...new Set([...result[id].seen,...item.seen])];
      result[id].completed = result[id].completed || item.completed;
    }
  }
  return result;
}
function journeyProgress(id) { return state.journeys[id] || {node:'begin',seen:[],completed:false}; }
function pauseTravelMedia() {
  app.querySelectorAll?.('audio, video').forEach(player => player.pause());
}
function travelYear(photo) { return photo.date.match(/\d{4}/)?.[0] || 'date non précisée'; }
function travelCredit(id, full = false) {
  const photo = TRAVEL_PHOTOS[id];
  return `<div class="photo-credit">${full ? `<p>${esc(photo.caption)}</p>` : ''}<span>Photo : ${esc(photo.author)} · ${esc(travelYear(photo))} · <a href="${esc(photo.licenseUrl)}" target="_blank" rel="noopener noreferrer">${esc(photo.license)}</a> · <a href="${esc(photo.source)}" target="_blank" rel="noopener noreferrer">Source et original ↗</a>${full ? ' · Image redimensionnée pour l’Atlas.' : ''}</span></div>`;
}
function travelFigure(id, eager = false) {
  const p = TRAVEL_PHOTOS[id];
  return `<figure class="travel-figure"><a href="${p.local}" target="_blank" rel="noopener" aria-label="Voir la photographie entière"><img src="${p.local}" alt="${esc(p.caption)}" width="${p.width}" height="${p.height}" ${eager ? '' : 'loading="lazy"'}></a><figcaption>${travelCredit(id,true)}</figcaption></figure>`;
}
function projectTravelPoint(point) { return {x:(point.lon + 180) * 1000 / 360,y:(90 - point.lat) * 500 / 180}; }
function regionalMap(id) {
  const place = TRAVEL_PLACES[id], p = projectTravelPoint(place);
  const x = Math.max(0,Math.min(840,p.x - 80)), y = Math.max(0,Math.min(390,p.y - 55));
  return `<svg class="regional-map" viewBox="${x.toFixed(2)} ${y.toFixed(2)} 160 110" role="img" aria-label="Zoom régional : ${esc(place.name)}"><image href="./travel/world.svg" width="1000" height="500"/><circle cx="${p.x.toFixed(2)}" cy="${p.y.toFixed(2)}" r="3" fill="#d75d43" stroke="white" stroke-width="1"/></svg>`;
}
function worldMap() {
  return `<div class="world-map" aria-label="Les treize escales sur la carte du monde"><img src="./travel/world.svg" alt="Planisphère des terres émergées, fond Natural Earth" width="1000" height="500">${STOPS.map((s,i) => {const p = projectTravelPoint(TRAVEL_PLACES[s.id]);return `<button class="map-pin ${travelSelected === s.id ? 'selected' : ''}" style="left:${p.x/10}%;top:${p.y/5}%" data-action="travel-select" data-id="${s.id}" title="${esc(s.country)}" aria-label="Situer ${esc(s.country)}" aria-pressed="${travelSelected === s.id}">${i+1}</button>`}).join('')}</div><p class="map-attribution">Fond simplifié : <a href="https://www.naturalearthdata.com/about/terms-of-use/" target="_blank" rel="noopener noreferrer">Natural Earth, domaine public</a>. Les points sont des repères ; les pratiques ne se limitent pas à ces lieux.</p>`;
}
function travelStopLinks(id) {
  return `<div class="actions-row"><button class="btn prime" data-action="journey" data-id="${id}">Rencontrer ${esc(JOURNEYS[id].person)} →</button><button class="btn ghost" data-action="read" data-id="${id}">Lire la fiche</button>${RECIPES[id] ? `<button class="btn ghost" data-action="recipe" data-id="${id}">Recette</button>` : ''}</div>`;
}
function renderTravelMap() {
  const s = STOPS.find(s => s.id === travelSelected), place = TRAVEL_PLACES[s.id];
  return `${worldMap()}<div class="map-country-buttons" aria-label="Choisir une escale">${STOPS.map((stop,i) => `<button class="chip ${stop.id === s.id ? 'active' : ''}" data-action="travel-select" data-id="${stop.id}" aria-pressed="${stop.id === s.id}">${i+1}. ${stop.flag} ${esc(stop.country)}</button>`).join('')}</div><section class="travel-selected" aria-live="polite"><div>${travelFigure(s.id,true)}</div><div class="travel-selected-copy"><span class="overline">${s.flag} ${esc(s.country)}</span><h2>${esc(s.topic)}</h2><p>${esc(GUIDES[s.id].lead)}</p>${regionalMap(s.id)}<strong>${esc(place.name)}</strong><p class="travel-small">Repère géographique choisi pour situer l’escale ; ce point ne représente pas toutes les communautés qui portent la tradition.</p><p class="travel-small"><a href="${esc(place.source)}" target="_blank" rel="noopener noreferrer">Coordonnées de référence ↗</a> · <a href="https://www.openstreetmap.org/?mlat=${place.lat}&mlon=${place.lon}#map=9/${place.lat}/${place.lon}" target="_blank" rel="noopener noreferrer">Carte détaillée en ligne ↗</a></p>${travelStopLinks(s.id)}</div></section>`;
}
function renderTravelStories() {
  return `<p class="fiction-note">Personnages et dialogues imaginés, traditions documentées. Les personnes photographiées ne représentent pas les personnages des récits.</p><div class="journey-cards">${STOPS.map(s => {const j = JOURNEYS[s.id], saved = journeyProgress(s.id);return `<article class="journey-card"><img class="journey-cover" src="${TRAVEL_PHOTOS[s.id].local}" alt="${esc(TRAVEL_PHOTOS[s.id].caption)}" loading="lazy"><div class="journey-card-copy"><span class="overline">${s.flag} ${esc(s.country)} · ${saved.completed ? '✓ Rencontre terminée' : saved.node === 'begin' ? 'À découvrir' : 'En cours'}</span><h2>${esc(j.title)}</h2><p>Avec ${esc(j.person)}, qui ${esc(j.role)}.</p><div class="travel-small">${saved.seen.length} / 2 découvertes gardées dans ton carnet</div><button class="btn prime" data-action="journey" data-id="${s.id}">${saved.node === 'finish' ? 'Revoir le carnet' : saved.node === 'begin' ? 'Commencer la rencontre' : 'Reprendre la rencontre'} →</button>${travelCredit(s.id)}</div></article>`}).join('')}</div>`;
}
function travelAudioCard(item) {
  return `<article class="sound-card"><div class="overline">🇧🇷 Brésil · extrait sonore</div><h2>${esc(item.title)}</h2><p>${esc(item.guide)}</p><audio controls preload="none" aria-label="${esc(item.title)}"><source src="${item.src}" type="${item.type}">Ton navigateur ne lit pas cet extrait. <a href="${item.src}">Ouvrir le fichier audio</a>.</audio><p class="travel-small">${esc(item.duration)} · ${esc(item.author)} · ${esc(item.license)} · <a href="${esc(item.source)}" target="_blank" rel="noopener noreferrer">Crédit et enregistrement source ↗</a></p><p class="media-fallback" hidden>Le lecteur ne parvient pas à charger l’extrait. <a href="${item.src}" target="_blank" rel="noopener">Ouvrir le fichier audio ↗</a></p><button class="btn ghost" data-action="journey" data-id="${item.stop}">Rencontrer Joana</button></article>`;
}
function travelVideoCard(item) {
  return `<article class="sound-card"><div class="overline">${esc(STOPS.find(s => s.id === item.stop).country)} · écoute et image</div><h2>${esc(item.title)}</h2><p>${esc(item.guide)}</p><div id="video-${item.id}" class="video-mount"><button class="btn prime" data-action="travel-video" data-id="${item.id}">Charger le lecteur officiel</button><span class="travel-small">Une connexion Internet est nécessaire. Le lecteur se charge à ta demande.</span></div><p class="travel-small">${esc(item.credit)} · <a href="${esc(item.source)}" target="_blank" rel="noopener noreferrer">Voir sur le site UNESCO ↗</a> · <a href="https://www.youtube.com/watch?v=${item.video}" target="_blank" rel="noopener noreferrer">Ouvrir la vidéo ↗</a></p><button class="btn ghost" data-action="journey" data-id="${item.stop}">Vivre la rencontre →</button></article>`;
}
function renderTravelSounds() {
  return `<p class="travel-intro">Deux extraits sonores de berimbau sont emportés dans l’Atlas. Les voix du Quan Họ et les chants isukuti se découvrent dans deux documentaires officiels, à écouter et regarder en ligne.</p><div class="sound-grid">${TRAVEL_AUDIO.map(travelAudioCard).join('')}${TRAVEL_VIDEO.map(travelVideoCard).join('')}</div>`;
}
function renderTravelHub() {
  const completed = Object.values(state.journeys).filter(s => s.completed).length, notes = Object.values(state.journeys).reduce((n,s) => n + s.seen.length,0);
  app.innerHTML = `<header class="travel-hero"><span class="eyebrow">Voir · écouter · rencontrer</span><h1>Le monde se raconte.</h1><p>Des photographies réelles, une carte à parcourir et des rencontres où tes choix ouvrent le carnet.</p><div class="travel-counters"><span>${completed} / 13 rencontres terminées</span><span>${notes} / 26 découvertes conservées</span><span>13 photographies légendées</span></div></header><nav class="travel-tabs" aria-label="Parcourir les voyages">${[['map','🗺️ Carte'],['stories','💬 Aventures'],['sounds','🎵 Écouter'],['photos','📷 Photos']].map(([id,label]) => `<button class="chip ${travelTab === id ? 'active' : ''}" data-action="travel-tab" data-tab="${id}" aria-pressed="${travelTab === id}">${label}</button>`).join('')}</nav>${travelTab === 'map' ? renderTravelMap() : travelTab === 'stories' ? renderTravelStories() : travelTab === 'sounds' ? renderTravelSounds() : `<div class="travel-photo-grid">${STOPS.map(s => `<section><h2>${s.flag} ${esc(s.country)} · ${esc(s.topic)}</h2>${travelFigure(s.id)}<button class="btn ghost" data-action="read" data-id="${s.id}">Découvrir la tradition →</button></section>`).join('')}</div>`}<p class="travel-footer">Photos, cartes, récits et extraits sonores sont disponibles hors connexion après la mise à jour complète. Les liens externes et les vidéos officielles demandent Internet. <a href="./travel/CREDITS.md" target="_blank" rel="noopener">Crédits et sources détaillés</a>.</p>`;
}
function journeyScene(id, node) {
  const j = JOURNEYS[id];
  if (node === 'begin') return {title:'La rencontre',text:j.setting,speech:j.invitation,choices:[{label:j.handAction,to:'hands'},{label:j.voiceAction,to:'voices'}]};
  if (node === 'hands') return {...j.hands,choices:[{label:'Écouter aussi ce qui se transmet',to:'voices'},{label:'Garder ce geste dans mon carnet',to:'end'}]};
  if (node === 'voices') return {...j.voices,choices:[{label:'Noter les liens entre les personnes',to:'end'},{label:'Garder une question pour mon prochain voyage',to:'end'}]};
  if (node === 'end') return {title:'Le souvenir à emporter',text:j.closing,choices:[{label:'Écrire cette rencontre dans mon carnet',to:'finish'}]};
  return {title:'Rencontre terminée',text:'Ton carnet garde les découvertes faites sur ce chemin. Tu peux reprendre la rencontre et choisir une autre piste.',choices:[]};
}
function openJourney(id) {
  if (!JOURNEYS[id] || !STOPS.some(s => s.id === id)) return;
  if (view !== 'journey') journeyReturn = {view,game,readingStop,detailReturn};
  activeJourney = id; game = null; view = 'journey';
  if (!state.journeys[id]) {state.journeys[id] = journeyProgress(id);persist();}
  render();window.scrollTo(0,0);document.getElementById('journey-title')?.focus();
}
function chooseJourney(index, expectedNode) {
  if (view !== 'journey' || !JOURNEYS[activeJourney] || !Number.isInteger(index)) return false;
  const saved = journeyProgress(activeJourney);
  if (saved.node !== expectedNode) return false;
  const choice = journeyScene(activeJourney,saved.node).choices[index];
  if (!choice) return false;
  saved.node = choice.to;
  if (choice.to === 'hands' || choice.to === 'voices') saved.seen = [...new Set([...saved.seen,choice.to])];
  if (choice.to === 'finish') saved.completed = true;
  state.journeys[activeJourney] = saved;persist();render();
  document.getElementById('journey-scene-title')?.focus({preventScroll:true});
  return true;
}
function renderJourney() {
  if (!activeJourney || !JOURNEYS[activeJourney]) {view='travel';renderTravelHub();return;}
  const id = activeJourney, j = JOURNEYS[id], stop = STOPS.find(s => s.id === id), saved = journeyProgress(id), scene = journeyScene(id,saved.node);
  app.innerHTML = `<button class="back" data-action="journey-back">← Retour au voyage</button><header class="journey-hero"><div><span class="overline">${stop.flag} ${esc(stop.country)} · ${esc(stop.topic)}</span><h1 id="journey-title" tabindex="-1">${esc(j.title)}</h1><p>Une rencontre avec ${esc(j.person)}, qui ${esc(j.role)}.</p></div><span class="character-initial" aria-hidden="true">${esc(j.person[0])}</span></header><p class="fiction-note">Personnage et dialogues fictifs. Traditions documentées par l’UNESCO ; les personnes photographiées ne représentent pas le personnage.</p><div class="journey-layout"><article class="journey-scene"><div class="journey-phases" aria-label="Ton chemin"><span class="${saved.node === 'begin' ? 'current' : ''}">Rencontre</span><span class="${['hands','voices'].includes(saved.node) ? 'current' : ''}">Découverte</span><span class="${['end','finish'].includes(saved.node) ? 'current' : ''}">Carnet</span></div><h2 id="journey-scene-title" tabindex="-1">${esc(scene.title)}</h2><p>${esc(scene.text)}</p>${scene.speech ? `<blockquote>${esc(scene.speech)}</blockquote>` : ''}${scene.choices.length ? `<div class="journey-choices">${scene.choices.map((choice,index) => `<button class="journey-choice" data-action="journey-choice" data-index="${index}" data-node="${saved.node}"><span>${esc(choice.label)}</span><b aria-hidden="true">→</b></button>`).join('')}</div>` : `<div class="journey-finish"><strong>✓ Cette rencontre est inscrite dans ton carnet.</strong><button class="btn prime" data-action="journey-replay">Explorer un autre chemin</button><button class="btn ghost" data-action="travel-stories">Choisir une autre rencontre</button>${RECIPES[id] ? `<button class="btn ghost" data-action="recipe" data-id="${id}">Prolonger en cuisine</button>` : ''}</div>`}<section class="journey-notes"><h3>Ton carnet · ${saved.seen.length} / 2 découvertes</h3>${saved.seen.length ? saved.seen.map(key => `<details ${saved.node === 'finish' ? 'open' : ''}><summary>${esc(j[key].title)}</summary><p>${esc(j[key].text)}</p></details>`).join('') : '<p>Ta première découverte apparaîtra ici.</p>'}</section><div class="travel-source"><a href="${src(stop)}" target="_blank" rel="noopener noreferrer">Vérifier la tradition dans la fiche UNESCO ↗</a><button class="btn ghost" data-action="read" data-id="${id}">Lire le carnet culturel</button></div></article><aside>${travelFigure(id,true)}${regionalMap(id)}<p class="travel-small">${esc(TRAVEL_PLACES[id].name)} · repère géographique</p>${TRAVEL_AUDIO.filter(a => a.stop === id).slice(0,1).map(travelAudioCard).join('')}${TRAVEL_VIDEO.filter(v => v.stop === id).map(travelVideoCard).join('')}</aside></div>`;
}
function travelExtras(id) {
  return `<section class="travel-extra"><div><span class="overline">Prolonger l’escale</span><h3>Un lieu, une rencontre</h3><p>${esc(TRAVEL_PLACES[id].name)}. Ce point aide à situer la tradition ; elle peut être pratiquée dans d’autres lieux.</p>${regionalMap(id)}</div><div>${travelStopLinks(id)}<button class="btn ghost" data-action="travel-map" data-id="${id}">Voir sur le planisphère</button>${TRAVEL_AUDIO.some(a => a.stop === id) || TRAVEL_VIDEO.some(v => v.stop === id) ? '<button class="btn ghost" data-action="travel-sounds">Écouter cette région du monde</button>' : ''}</div></section>`;
}
document.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');if (!button) return;
  const action = button.dataset.action;
  if (action === 'travel-tab' && ['map','stories','sounds','photos'].includes(button.dataset.tab)) {
    travelTab=button.dataset.tab;pauseTravelMedia();renderTravelHub();app.querySelector(`[data-tab="${travelTab}"]`)?.focus({preventScroll:true});
  } else if (action === 'travel-select' && TRAVEL_PLACES[button.dataset.id]) {
    travelSelected=button.dataset.id;pauseTravelMedia();renderTravelHub();app.querySelector(`.map-country-buttons [data-id="${travelSelected}"]`)?.focus({preventScroll:true});
  } else if (action === 'travel-map' && TRAVEL_PLACES[button.dataset.id]) {travelSelected=button.dataset.id;travelTab='map';show('travel');}
  else if (action === 'travel-stories') {travelTab='stories';show('travel');}
  else if (action === 'travel-sounds') {travelTab='sounds';show('travel');}
  else if (action === 'journey') openJourney(button.dataset.id);
  else if (action === 'journey-choice') chooseJourney(Number(button.dataset.index),button.dataset.node);
  else if (action === 'journey-replay' && activeJourney) {
    const saved=journeyProgress(activeJourney);saved.node='begin';state.journeys[activeJourney]=saved;persist();render();document.getElementById('journey-title')?.focus();
  } else if (action === 'journey-back') {
    const previous=journeyReturn;journeyReturn=null;view=previous?.view || 'travel';game=previous?.game || null;
    if(view==='detail'){readingStop=previous.readingStop;detailReturn=previous.detailReturn;}
    render();window.scrollTo(0,0);
  } else if (action === 'travel-video') {
    const video=TRAVEL_VIDEO.find(v=>v.id===button.dataset.id);if(!video)return;
    if(navigator.onLine===false){flash('Cette vidéo demande Internet. Les extraits sonores restent accessibles hors connexion.');return;}
    const mount=document.getElementById('video-'+video.id);if(!mount)return;
    pauseTravelMedia();
    mount.innerHTML=`<iframe title="${esc(video.title)} · vidéo officielle UNESCO" src="https://www.youtube-nocookie.com/embed/${video.video}?rel=0" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  }
});
document.addEventListener('play', event => {
  if(event.target.tagName==='AUDIO')app.querySelectorAll?.('audio').forEach(audio=>{if(audio!==event.target)audio.pause();});
},true);
document.addEventListener('error',event=>{
  if(['AUDIO','SOURCE'].includes(event.target.tagName))event.target.closest('.sound-card')?.querySelector('.media-fallback')?.removeAttribute('hidden');
},true);

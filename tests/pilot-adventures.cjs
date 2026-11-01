/* Tests sans navigateur : migration, carnet, favoris, sauvegardes et cache PWA. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const qaDir=process.env.ATLAS_QA_DIR;
if(qaDir)fs.mkdirSync(qaDir,{recursive:true});
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1];
for (const [name, code] of [['index.html',inline], ...['recipes.js','kitchen.js','notebook.js','travel-data.js','journeys.js','travel.js','india-adventure.js','world-adventure-data.js','batik-workshop.js','pilot-adventures.js','world-adventure.js','extra-stops.js','travel-tools.js','discovery-workshops.js','sw.js'].map(p => [p,fs.readFileSync(path.join(root,p),'utf8')])]) new vm.Script(code, {filename:name});

const elements = new Map(), events = {}, downloads = [], alerts = [];
function element() {
  const classes = new Set();
  return {innerHTML:'',textContent:'',dataset:{},attrs:{},hidden:false,
    setAttribute(k,v){this.attrs[k]=String(v)},removeAttribute(k){delete this.attrs[k]},
    classList:{toggle(k,on){if(on===undefined)on=!classes.has(k);if(on)classes.add(k);else classes.delete(k)},remove(k){classes.delete(k)},contains(k){return classes.has(k)}},
    focus(){},click(){},remove(){},appendChild(){},addEventListener(){},querySelector(){return null}};
}
const document = {body:element(),hidden:false,fonts:{ready:Promise.resolve()},
  getElementById(id){if(!elements.has(id))elements.set(id,element());return elements.get(id)},
  querySelector(){return null},querySelectorAll(){return []},createElement(){return element()},
  addEventListener(type,callback){(events[type] ||= []).push(callback)}};
const storage = new Map([['atlas-cultures-save-v1',JSON.stringify({completed:{japon:true},seen:{'japon:0':true},solved:{'japon:0':true},best:{japon:2},read:{japon:true}})]]);
let printed = 0;
const navigator = {onLine:false};
const window = {navigator,matchMedia:()=>({matches:false}),scrollTo(){},addEventListener(){},print(){printed++}};
const context = vm.createContext({document,window,navigator,location:{protocol:'file:',hostname:''},
  localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},
  confirm:()=>true,alert:m=>alerts.push(m),console,Blob,URL,setTimeout:()=>0,clearTimeout(){}});
for (const file of ['recipes.js','kitchen.js','notebook.js','travel-data.js','journeys.js','travel.js','india-adventure.js','world-adventure-data.js','batik-workshop.js','pilot-adventures.js','world-adventure.js','extra-stops.js','travel-tools.js','discovery-workshops.js']) vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
vm.runInContext(inline,context,{filename:'index.html'});
const run = code => vm.runInContext(code,context);
run('downloadBlob=(data,type,name)=>captureDownload(data,type,name)');
context.captureDownload = (data,type,name)=>downloads.push({data,type,name});
const plain = code => JSON.parse(run(`JSON.stringify(${code})`));
const snapshot=name=>{if(qaDir)fs.writeFileSync(path.join(qaDir,name+'.html'),elements.get('app').innerHTML)};
const click = (action,id,extra={}) => {const button=element();button.dataset={action,id,...extra};for(const handler of events.click)handler({target:{closest:()=>button}})};

const markup=()=>elements.get('app').innerHTML;
const adventure=()=>plain('journeyProgress(activeJourney).adventure');
function fresh(id){run(`state.journeys['${id}']={node:'begin',seen:[],completed:false};show('travel');openJourney('${id}')`);}
function displayed(action,key,footer=false){
  const region=footer?markup().match(/<footer class="india-player-controls">([\s\S]*?)<\/footer>/)[1]:markup();
  const buttons=[...region.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/g)];
  const b=footer?buttons.at(-1):buttons.find(b=>b[1].includes(`data-action="${action}"`)&&(key===undefined||b[1].includes(`data-key="${key}"`)));
  assert(b,'Missing button '+action+' '+key);assert(!/\bdisabled\b/.test(b[1]),'Disabled button '+b[2]);
  const d=Object.fromEntries([...b[1].matchAll(/data-([\w-]+)="([^"]*)"/g)].map(([,k,v])=>[k,v]));click(d.action,undefined,d);
}
const primary=()=>displayed(null,undefined,true);
const choose=(action,key)=>displayed('pilot-'+action,key);
function disabled(){assert.match(markup().match(/<footer class="india-player-controls">([\s\S]*?)<\/footer>/)[1],/<button class="btn prime" disabled>/);}
function check(){
  assert.equal((markup().match(/class="pilot-canvas"/g)||[]).length,1,'One creation visual must be shown');
  assert(markup().indexOf('class="adventure-guide"')<markup().indexOf('class="pilot-picture"'));
  assert.equal((markup().match(/class="india-location"/g)||[]).length,3);
  const before=adventure();run('state=load();openJourney(activeJourney)');assert.deepEqual(adventure(),before,'Reload changed the creation or scene');
}
function finish(plan,option){
  assert.equal(adventure().screen,'route');assert.equal(adventure().pilot.cards.length,1);
  assert.equal(adventure().clues.length,0,'The hands-on path silently required documents');
  assert.equal(adventure().checked,false,'The hands-on path silently solved the optional questions');
  displayed('world-plan',plan.id);primary();displayed('world-prepare',option.id);primary();primary();
  assert.equal(adventure().ending,plan.id);assert.equal(adventure().screen,'ending');check();
  assert(markup().includes(run('esc(worldPreparation(activeJourney,journeyProgress(activeJourney).adventure).label)')));
}

(async()=>{
  assert.deepEqual(plain('PILOT_IDS'),['japon','maroc','bresil']);
  run("travelStatus='interactive'");assert.deepEqual(plain('travelMatches().map(s=>s.id).sort()'),['bresil','japon','maroc']);run("travelStatus='all'");
  const xpBefore=run('xp()');let meals=0,tales=0,listens=0;
  for(const guest of ['haru','nao'])for(const rice of ['riz','sesame'])for(const plan of plain('WORLD_ADVENTURES.japon.plans'))for(const option of plan.options){
    fresh('japon');primary();assert.equal(adventure().screen,'practice');disabled();
    choose('guest',guest);primary();disabled();
    choose('food',rice);choose('slot','1');choose('food',guest==='haru'?'concombre':'carotte');choose('slot','2');
    choose('food',guest==='haru'?'poisson':'tofu');disabled();assert.match(markup(),/Regarde encore la demande/);
    choose('food',guest==='haru'?'tofu':'poisson');check();primary();assert(markup().includes(guest==='haru'?'Le tofu et le concombre':'poisson et des carottes cuites'));
    primary();finish(plan,option);assert(markup().includes(guest==='haru'?'Une table pour Haru':'Une table pour Nao'));meals++;
  }
  const uniqueTales=new Set();
  for(const object of ['cle','lanterne','graine'])for(const event of [0,1])for(const decision of [0,1])for(const plan of plain('WORLD_ADVENTURES.maroc.plans'))for(const option of plan.options){
    fresh('maroc');primary();disabled();choose('object',object);primary();disabled();choose('event',event);primary();disabled();choose('decision',decision);check();
    const story=run('pilotResultText("maroc",journeyProgress("maroc").adventure.pilot.draft).lines[2]');uniqueTales.add(story);
    assert(markup().includes(run('esc(pilotResultText("maroc",journeyProgress("maroc").adventure.pilot.draft).lines[2])')));
    primary();finish(plan,option);assert(markup().includes(run('esc(pilotResultText("maroc",journeyProgress("maroc").adventure.pilot.result.draft).lines[2])')));tales++;
  }
  assert.equal(uniqueTales.size,12,'Different decisions led to an identical story ending');
  const orders=[['angola','pause','iuna'],['angola','iuna','pause'],['pause','angola','iuna'],['pause','iuna','angola'],['iuna','angola','pause'],['iuna','pause','angola']];
  for(const order of orders)for(const focus of ['timbre','dialogue'])for(const plan of plain('WORLD_ADVENTURES.bresil.plans'))for(const option of plan.options){
    fresh('bresil');primary();assert.equal((markup().match(/<audio /g)||[]).length,2);assert(!/autoplay/.test(markup()));
    choose('instrument','guitare');disabled();assert.match(markup(),/ces deux documents font entendre le berimbau/);choose('instrument','berimbau');primary();
    for(let target=0;target<3;target++){let from=adventure().pilot.draft.sequence.indexOf(order[target]);while(from>target){choose('up',from);from--;}}
    assert.deepEqual(adventure().pilot.draft.sequence,order);check();primary();disabled();choose('focus',focus);primary();finish(plan,option);listens++;
  }
  assert.equal(meals,16);assert.equal(tales,48);assert.equal(listens,48);assert.equal(run('xp()'),xpBefore);
  // The optional review still works after an ending and cannot erase its creation.
  const finished=adventure().pilot.result,ending=adventure().ending;
  displayed('world-screen','puzzle');displayed('world-answer','b');assert.equal(adventure().ending,ending);assert.deepEqual(adventure().pilot.result,finished);
  for(const p of plain('WORLD_ADVENTURES.bresil.puzzle.supports')){displayed('world-piece',p.id);displayed('world-answer',p.correct);}primary();assert.equal(adventure().screen,'ending');
  // Downloads use the exact saved creation, and include the documentary audio credits.
  const exports=[];
  for(const id of ['japon','maroc','bresil']){
    run(`openJourney('${id}');worldAction('screen','ending')`);choose('export','result');const file=downloads.at(-1);
    assert.match(file.type,/image\/svg\+xml/);assert.match(file.data,/<svg xmlns="http:\/\/www.w3.org\/2000\/svg"/);assert(!/<(?:script|foreignObject)\b/.test(file.data));exports.push({id,svg:file.data});
    if(id==='bresil'){assert(file.data.includes('Andrew Archibald'));assert(file.data.includes('Djino'));}
    const result=adventure().pilot.result;displayed('world-pane','souvenirs');assert.match(markup(),/Création 1 \/ 1/);choose('export','gallery');assert.equal(downloads.at(-1).data,file.data);
    displayed('world-pane','play');displayed('world-replay');assert.equal(adventure().pilot.cards.length,1);assert.equal(adventure().pilot.result,null);assert(adventure().endings.length>0);
    displayed('world-pane','mission');displayed('world-pane','souvenirs');choose('export','gallery');assert.equal(adventure().started,false);displayed('world-pane','play');
    primary();for(let step=0;step<3;step++){if(!run('pilotCanAdvance(activeJourney,journeyProgress(activeJourney).adventure)'))choose('assist');primary();}assert.equal(adventure().pilot.cards.length>=1,true);assert.equal(adventure().screen,'route');
    assert(result.key.length>10);
  }
  if(qaDir)fs.writeFileSync(path.join(qaDir,'pilot-exports.json'),JSON.stringify(exports));
  // Changing an earlier story decision invalidates the later parts, with stale clicks refused.
  fresh('maroc');primary();choose('object','cle');primary();choose('event','0');primary();choose('decision','1');
  const oldStep=adventure().practiceStep;displayed('world-practice','previous');assert.equal(run(`pilotAction('decision','0','maroc','practice',${oldStep})`),false);
  displayed('world-practice','previous');choose('object','graine');assert.equal(adventure().pilot.draft.event,null);assert.equal(adventure().pilot.draft.decision,null);
  assert.equal(run("pilotAction('guest','haru','japon','practice',0)"),false,'A stale country changed the active story');
  // Old adventures remain finished, and old practice choices do not invent new creations.
  const migrated=plain('cleanWorldAdventure("japon",{version:1,started:true,place:2,visited:[0,2],screen:"practice",practiceStep:2,practiceChoices:[1,0,1],practiceStatus:"done"})');
  assert.equal(migrated.practiceStep,0);assert.deepEqual(migrated.pilot.cards,[]);assert.equal(migrated.pilot.result,null);
  const legacyEnd=plain('cleanWorldAdventure("japon",{version:1,started:true,place:0,screen:"ending",plan:"atelier",preparations:{atelier:"un"},ending:"atelier",endings:["atelier"]})');assert.equal(legacyEnd.ending,'atelier');assert.equal(legacyEnd.pilot.result,null);
  const corrupt=plain('cleanPilot("maroc",{draft:{object:"__proto__",event:999,decision:"<script>"},cards:[{key:"<script>",draft:{object:"<script>"}}],gallery:999})');assert.equal(corrupt.draft.object,null);assert.deepEqual(corrupt.cards,[]);
  const merged=plain('mergePilot("bresil",{draft:{instrument:"berimbau",sequence:["iuna","pause","angola"],focus:"timbre"},cards:[]},journeyProgress("bresil").adventure.pilot,true)');assert.deepEqual(merged.draft.sequence,['iuna','pause','angola']);assert(merged.cards.length>0);
  // The playback scheduler really follows the chosen order and is cancelled on navigation.
  fresh('bresil');primary();choose('instrument','berimbau');primary();
  const timerMap=new Map();let nextTimer=1,played=[],paused=[];
  context.schedulePilot=(fn,ms)=>{const id=nextTimer++;timerMap.set(id,{fn,ms});return id;};context.cancelPilot=id=>timerMap.delete(id);
  run('setTimeout=schedulePilot;clearTimeout=cancelPilot');
  const players=Object.fromEntries(['angola','iuna'].map(key=>[key,{dataset:{pilotSource:key},currentTime:0,pause(){paused.push(key)},play(){played.push(key);for(const handler of events.play||[])handler({target:this});return Promise.resolve();}}]));
  elements.get('app').querySelector=selector=>players[selector.match(/data-pilot-source="(\w+)"/)?.[1]]||null;
  elements.get('app').querySelectorAll=()=>Object.values(players);
  choose('play-sequence');await new Promise(resolve=>setImmediate(resolve));
  let timer=timerMap.get(run('pilotPlayback.timer'));assert.equal(timer.ms,5000);timer.fn();
  timer=timerMap.get(run('pilotPlayback.timer'));assert.equal(timer.ms,2000);timer.fn();await new Promise(resolve=>setImmediate(resolve));
  timer=timerMap.get(run('pilotPlayback.timer'));assert.equal(timer.ms,5000);timer.fn();assert.deepEqual(played,['angola','iuna']);assert.equal(run('pilotPlayback'),null);
  assert.deepEqual(adventure().pilot.draft.heard,['angola','iuna']);
  choose('play-sequence');await new Promise(resolve=>setImmediate(resolve));const pending=timerMap.get(run('pilotPlayback.timer')).fn;
  displayed('world-move','1');const before=played.length;pending();assert.equal(played.length,before);assert.equal(run('pilotPlayback'),null);assert(paused.length>0);
  run("worldAction('screen','practice')");players.angola.play=()=>Promise.reject(new Error('media unavailable'));
  choose('play-sequence');await new Promise(resolve=>setImmediate(resolve));assert.equal(run('pilotPlayback'),null);assert.match(elements.get('pilot-audio-status').textContent,/n’a pas démarré/);
  context.savedListenCard=finished;run('state.journeys.bresil.adventure.pilot.cards=[savedListenCard]');displayed('world-pane','mission');displayed('world-pane','souvenirs');
  choose('play-card','gallery');await new Promise(resolve=>setImmediate(resolve));assert.equal(played.at(-1),'iuna','A saved card played the current draft instead of its own order');displayed('world-pane','play');assert.equal(run('pilotPlayback'),null);
  // JSON export/import restores creations and retains a locally edited draft on merge.
  run('exportJSON()');const backup=JSON.parse(downloads.at(-1).data),beforeBackup=plain('state.journeys');
  context.pilotBackupFile={size:50000,text:async()=>JSON.stringify(backup)};run('state.journeys={}');await run('importJSON(pilotBackupFile)');
  for(const id of ['japon','maroc','bresil'])assert.deepEqual(plain(`journeyProgress('${id}').adventure.pilot`),beforeBackup[id].adventure.pilot);
  for(const file of ['pilot-adventures.js','pilot-adventures.css'])assert(fs.readFileSync(path.join(root,'sw.js'),'utf8').includes("'./"+file+"'"),'Missing offline resource '+file);
  console.log(`PASS: ${meals} repas, ${tales} parcours de conte et ${listens} parcours d’écoute par les commandes affichées ; 12 fins de conte distinctes.`);
  console.log('PASS: résultat lié aux choix, révision facultative, reprise, créations et SVG, rejeu, anciennes sauvegardes, fusion JSON et clics périmés.');
  console.log('PASS: deux sources sonores créditées, aucun démarrage automatique, séquence 5 s / 2 s / 5 s, ordre choisi et arrêt lors de la navigation.');
})().catch(error=>{console.error(error);process.exitCode=1});


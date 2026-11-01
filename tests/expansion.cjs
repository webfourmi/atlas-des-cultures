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
for (const [name, code] of [['index.html',inline], ...['recipes.js','kitchen.js','notebook.js','travel-data.js','journeys.js','travel.js','india-adventure.js','world-adventure-data.js','batik-workshop.js','world-adventure.js','extra-stops.js','travel-tools.js','discovery-workshops.js','sw.js'].map(p => [p,fs.readFileSync(path.join(root,p),'utf8')])]) new vm.Script(code, {filename:name});

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
for (const file of ['recipes.js','kitchen.js','notebook.js','travel-data.js','journeys.js','travel.js','india-adventure.js','world-adventure-data.js','batik-workshop.js','world-adventure.js','extra-stops.js','travel-tools.js','discovery-workshops.js']) vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
vm.runInContext(inline,context,{filename:'index.html'});
const run = code => vm.runInContext(code,context);
run('downloadBlob=(data,type,name)=>captureDownload(data,type,name)');
context.captureDownload = (data,type,name)=>downloads.push({data,type,name});
const plain = code => JSON.parse(run(`JSON.stringify(${code})`));
const snapshot=name=>{if(qaDir)fs.writeFileSync(path.join(qaDir,name+'.html'),elements.get('app').innerHTML)};
const click = (action,id,extra={}) => {const button=element();button.dataset={action,id,...extra};for(const handler of events.click)handler({target:{closest:()=>button}})};

(async()=>{
  assert.equal(run('STOPS.length'),18);assert.equal(run('ATLAS_QUESTION_COUNT'),54);
  assert.equal(run('new Set(STOPS.map(s=>s.id)).size'),18);
  assert.equal(run('latestJourney()'),null);
  for(const id of plain('ATLAS_NEW_IDS')){
    assert.equal(plain('STOPS.find(s=>s.id==="'+id+'").q').length,3);
    run('show("home");openDetail("'+id+'")');assert(!elements.get('app').innerHTML.includes('undefined'));
    run('startTour("'+id+'")');
    for(let i=0;i<3;i++){const answerIndex=run('game.questions[game.idx].s.q[game.questions[game.idx].i][2]');run('answer('+answerIndex+');next()');}
    assert.equal(run('state.completed.'+id),true);
    assert.equal(run('journeyProgress("'+id+'").adventure.started'),false,'Quiz fabricated an adventure');
  }
  run('show("travel");travelTab="stories";renderTravelHub()');
  assert.equal((elements.get('travel-story-results').innerHTML.match(/class="journey-card"/g)||[]).length,18);
  run('travelStatus="new"');assert.equal(run('travelMatches().length'),5);
  run('travelRegion="Europe"');assert.deepEqual(plain('travelMatches().map(s=>s.id)'),['espagne','finlande']);
  run('travelRegion="all";travelQuery="egypte"');assert.deepEqual(plain('travelMatches().map(s=>s.id)'),['egypte']);
  run('travelQuery="tissage"');assert.deepEqual(plain('travelMatches().map(s=>s.id)'),['egypte']);
  run('travelQuery="introuvable";renderTravelStoryResults()');assert.match(elements.get('travel-story-results').innerHTML,/Aucune aventure/);
  run('travelQuery="";travelStatus="ongoing"');assert.equal(run('travelMatches().length'),0);
  run('openJourney("egypte");worldAction("start");worldAction("screen","practice");worldAction("practice-choice","1")');
  assert.equal(run('latestJourney()'),'egypte');assert.match(elements.get('app').innerHTML,/#ae694c/);
  run('worldAction("practice","next");worldAction("practice-choice","1")');
  const egypt=plain('journeyProgress("egypte").adventure');run('state=load();openJourney("egypte")');assert.deepEqual(plain('journeyProgress("egypte").adventure'),egypt);
  run('show("home")');assert.match(elements.get('app').innerHTML,/Reprendre mon aventure/);
  run('openJourney("finlande");worldAction("start")');assert.equal(run('latestJourney()'),'finlande');
  run('show("travel");travelTab="stories";renderTravelHub()');assert.equal(run('travelMatches().length'),2);
  run('openJourney("mongolie");worldAction("start");worldAction("screen","practice")');const frame=elements.get('app').innerHTML;
  run('worldAction("practice-choice","1");worldAction("practice","next");worldAction("practice-choice","1");worldAction("practice","next");worldAction("practice-choice","1")');
  const ger=elements.get('app').innerHTML;assert.notEqual(ger,frame);assert.match(ger,/#d9ac69/);assert.match(ger,/stroke-width="4"/);snapshot('nouvelle-maquette-ger');
  run('exportJSON()');const backup=JSON.parse(downloads.at(-1).data);assert.equal(backup.progress.lastJourney,'mongolie');
  context.newBackup={size:30000,text:async()=>JSON.stringify(backup)};run('state.journeys={};state.lastJourney=null');await run('importJSON(newBackup)');assert.equal(run('state.lastJourney'),'mongolie');
  run('openJourney("egypte")');await run('importJSON(newBackup)');assert.equal(run('state.lastJourney'),'egypte','Import overwrote the local resume target');
  assert.equal(run('cleanBackupProgress({lastJourney:"<script>"}).lastJourney'),null);
  run('openRecipe("senegal");setRecipePortions("senegal",2)');assert.match(run('scaledRecipeIngredients("senegal")[0]'),/200 g/);assert.match(elements.get('app').innerHTML,/31 octobre 2026/);
  run('exportPassportSVG()');const svg=downloads.at(-1).data;const height=Number(svg.match(/height="(\d+)"/)[1]);assert(height>1240);assert(svg.includes('Sénégal'));assert.equal((svg.match(/Escale explorée|À découvrir/g)||[]).length,18);
  const lastStamp=383+Math.floor(17/3)*147+120;assert(lastStamp<height-90,'A stamp overlaps the export footer');
  run('show("passport")');assert.match(elements.get('app').innerHTML,/18 aventures/);assert.match(elements.get('app').innerHTML,/36 dénouements/);
  run('state.lastJourney="egypte";reset()');assert.equal(run('state.lastJourney'),'egypte');assert.equal(run('journeyProgress("egypte").adventure.started'),true);
  console.log('PASS: cinq escales, quinze questions, filtres et recherche accentuée, reprise du dernier voyage, sauvegarde et fusion sans perte.');
  console.log('PASS: tissage et ger visuels, recette et portions sénégalaises, passeport de souvenirs et SVG contenant les 18 tampons sans chevauchement.');
})().catch(error=>{console.error(error);process.exitCode=1});

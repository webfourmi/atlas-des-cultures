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
for (const [name, code] of [['index.html',inline], ...['recipes.js','kitchen.js','notebook.js','travel-data.js','journeys.js','travel.js','india-adventure.js','world-adventure-data.js','batik-workshop.js','world-adventure.js','sw.js'].map(p => [p,fs.readFileSync(path.join(root,p),'utf8')])]) new vm.Script(code, {filename:name});

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
for (const file of ['recipes.js','kitchen.js','notebook.js','travel-data.js','journeys.js','travel.js','india-adventure.js','world-adventure-data.js','batik-workshop.js','world-adventure.js']) vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
vm.runInContext(inline,context,{filename:'index.html'});
const run = code => vm.runInContext(code,context);
run('downloadBlob=(data,type,name)=>captureDownload(data,type,name)');
context.captureDownload = (data,type,name)=>downloads.push({data,type,name});
const plain = code => JSON.parse(run(`JSON.stringify(${code})`));
const snapshot=name=>{if(qaDir)fs.writeFileSync(path.join(qaDir,name+'.html'),elements.get('app').innerHTML)};
const click = (action,id,extra={}) => {const button=element();button.dataset={action,id,...extra};for(const handler of events.click)handler({target:{closest:()=>button}})};


(async()=>{
  run('show("travel");openJourney("indonesie");worldAction("screen","practice")');
  const workshop=()=>plain('journeyProgress("indonesie").adventure.workshop');
  const adventure=()=>plain('journeyProgress("indonesie").adventure');
  assert.equal(workshop().draft.strokes.length,0);assert.equal(run('batikAction("save")'),false);
  assert(run('batikAction("seed","loop","practice",0)'));assert.equal(workshop().draft.strokes.length,1);
  assert.equal(run('batikAction("palette","terre","practice",0)'),false);
  run('worldAction("practice","next")');assert(run('batikAction("palette","terre","practice",1)'));
  assert.equal(run('batikAction("seed","wave","practice",0)'),false,'Stale drawing action accepted');
  assert.match(elements.get('app').innerHTML,/#a64f38/);
  run('worldAction("practice","next")');assert(run('batikAction("layout","repeat","practice",2)'));
  assert(run('batikAction("save",null,"practice",2)'));assert.equal(workshop().cards.length,1);
  const first=workshop().cards[0];assert(run('batikAction("save")'));assert.equal(workshop().cards.length,1,'Duplicate creation saved twice');
  run('batikAction("palette","__proto__")');assert.equal(workshop().draft.palette,'terre');
  run('batikAction("layout","single");batikAction("save")');assert.equal(workshop().cards.length,2);
  const saved=workshop();run('state=load();openJourney("indonesie")');assert.deepEqual(workshop(),saved);
  run('batikAction("gallery")');assert.equal(run('worldPane'),'creations');snapshot('batik-carnet');
  assert(run('batikAction("gallery-next")'));assert.equal(run('batikAction("gallery-next")'),false);
  run('batikAction("download")');const drawing=downloads.at(-1);assert.equal(drawing.type,'image/svg+xml;charset=utf-8');assert(drawing.name.endsWith('.svg'));assert.match(drawing.data,/<svg/);assert.match(drawing.data,/<title>Mon motif personnel/);assert(!drawing.data.includes('<script'));
  run('batikAction("remove")');assert.equal(workshop().cards.length,1);run('batikAction("restore")');assert.equal(workshop().cards.length,2);
  context.beforeEmptyGallery=workshop();run('batikAction("remove");batikAction("remove")');assert.equal(workshop().cards.length,0);assert.match(elements.get('app').innerHTML,/data-action="batik-restore"/,'The last removal must remain reversible from the empty gallery');run('batikAction("restore")');assert.equal(workshop().cards.length,1);run('state.journeys.indonesie.adventure.workshop=cleanBatikWorkshop(beforeEmptyGallery)');
  run('batikAction("resume")');assert.equal(adventure().screen,'practice');assert.equal(adventure().practiceStep,0);
  const count=workshop().draft.strokes.length;assert(run('batikAppendStroke({kind:"line",points:[[10,20],[35,80],[70,40]]})'));assert.equal(workshop().draft.strokes.length,count+1);
  run('worldAction("screen","route")');assert.equal(run('batikAppendStroke({kind:"line",points:[[10,20]]})'),false);
  const kept=workshop();run('worldAction("replay")');assert.deepEqual(workshop(),kept,'Replay removed drawings or creations');
  run('worldAction("screen","practice");batikAction("undo")');assert.equal(workshop().draft.strokes.length,count);
  run('exportJSON()');const backup=JSON.parse(downloads.at(-1).data);context.batikBackup={size:Buffer.byteLength(JSON.stringify(backup)),text:async()=>JSON.stringify(backup)};
  const beforeImport=workshop();run('state.journeys={}');await run('importJSON(batikBackup)');run('openJourney("indonesie")');assert.deepEqual(workshop(),beforeImport);
  context.remoteWorkshop={draft:first.drawing,cards:[first]};
  const merged=plain('mergeBatikWorkshops(journeyProgress("indonesie").adventure.workshop,remoteWorkshop)');assert.equal(merged.cards.length,2);assert.deepEqual(merged.draft,beforeImport.draft);
  const clean=plain('cleanBatikWorkshop({draft:{palette:"<script>",layout:"bad",tool:"__proto__",strokes:[{kind:"line",points:[[Infinity,5],[-100,900],[1,2,3],[4,5]]}]},cards:[{drawing:{strokes:[]}},null]})');
  assert.equal(clean.draft.palette,'indigo');assert.equal(clean.draft.layout,'single');assert.equal(clean.draft.tool,'line');assert.deepEqual(clean.draft.strokes[0].points,[[5,255],[5,5]]);assert.deepEqual(clean.cards,[]);
  assert.equal(run('cleanWorldAdventure("japon",{started:true,workshop:{}}).workshop'),undefined);
  const old=plain('cleanWorldAdventure("indonesie",{started:true,place:2,screen:"practice",practiceStep:1,practiceChoices:[1,1,0],endings:["atelier"]})');assert.equal(old.practiceStep,1);assert.deepEqual(old.practiceChoices,[1,1,0]);assert.equal(old.workshop.draft.strokes.length,0);
  // A real large drawing backup still imports under the increased 8 MiB bound.
  context.largeCards=Array.from({length:24},(_,card)=>({createdAt:new Date(2026,9,21,0,card).toISOString(),drawing:{palette:'indigo',layout:'repeat',strokes:Array.from({length:28},(_,line)=>({kind:'line',points:Array.from({length:96},(_,p)=>[10+((p*3+line+card)%380),10+((p*2+line+card)%240)])}))}}));
  run('state.journeys.indonesie.adventure.workshop=cleanBatikWorkshop({cards:largeCards});persist();exportJSON()');
  const large=downloads.at(-1).data;assert(Buffer.byteLength(large)>1024*1024,'The drawing fixture does not cover large backups');context.largeBackup={size:Buffer.byteLength(large),text:async()=>large};
  run('state.journeys={}');await run('importJSON(largeBackup)');assert.equal(run('journeyProgress("indonesie").adventure.workshop.cards.length'),24);
  // Pointer events use SVG coordinates and store one finished stroke.
  run('openJourney("indonesie");worldAction("screen","practice");state.journeys.indonesie.adventure.workshop=cleanBatikWorkshop();persist()');
  const handlers={},marks=element();
  const svg={...element(),addEventListener(t,f){(handlers[t]||=[]).push(f)},getBoundingClientRect:()=>({left:10,top:20,width:800,height:520}),setPointerCapture(){},hasPointerCapture:()=>false,querySelector:k=>k==='#batik-marks'?marks:null};
  elements.set('batik-surface',svg);document.createElementNS=()=>element();run('bindBatikDrawing()');
  for(const f of [...handlers.pointerdown])f({pointerId:1,clientX:110,clientY:120,button:0,isPrimary:true,preventDefault(){}});
  for(const f of [...handlers.pointermove])f({pointerId:1,clientX:310,clientY:220});
  for(const f of [...handlers.pointerup])f({pointerId:1});
  assert.equal(workshop().draft.strokes.length,1);assert.deepEqual(workshop().draft.strokes[0].points,[[50,50],[150,100]]);
  run('show("home")');assert.equal(run('batikAction("seed","loop")'),false);
  console.log('PASS: atelier Indonésie, dessin à la souris/au doigt, outils, couleurs, répétition, carnet, téléchargement et retrait réversible.');
  console.log('PASS: reprise et rejeu sans perte des créations, fusion, JSON de plus de 1 MiB, migration v5 et nettoyage des données importées.');
})().catch(error=>{console.error(error);process.exitCode=1});

/* Tests sans navigateur : migration, carnet, favoris, sauvegardes et cache PWA. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1];
for (const [name, code] of [['index.html',inline], ...['recipes.js','notebook.js','sw.js'].map(p => [p,fs.readFileSync(path.join(root,p),'utf8')])]) new vm.Script(code, {filename:name});

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
for (const file of ['recipes.js','notebook.js']) vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
vm.runInContext(inline,context,{filename:'index.html'});
const run = code => vm.runInContext(code,context);
run('downloadBlob=(data,type,name)=>captureDownload(data,type,name)');
context.captureDownload = (data,type,name)=>downloads.push({data,type,name});
const plain = code => JSON.parse(run(`JSON.stringify(${code})`));
const click = (action,id) => {const button=element();button.dataset={action,id};for(const handler of events.click)handler({target:{closest:()=>button}})};

(async()=>{
  assert.equal(run('STOPS.length'),13); assert.equal(run('STOPS.reduce((n,s)=>n+s.q.length,0)'),39);
  assert.equal(run('state.completed.japon'),true); assert.equal(run('xp()'),10);
  assert.deepEqual(plain('state.recipeFavorites'),{});
  click('recipes'); assert.equal(run('view'),'recipes');
  assert.match(elements.get('app').innerHTML,/Recettes du monde/);
  assert.equal((elements.get('recipe-results').innerHTML.match(/class="recipe-card"/g)||[]).length,4);
  click('favorite-recipe','mexique');assert.equal(run('state.recipeFavorites.mexique'),true);
  assert.equal(plain('recipeEntries().map(s=>s.id)')[0],'mexique');
  run("recipeSearch='cafe';renderRecipeResults()");assert.deepEqual(plain('recipeEntries().map(s=>s.id)'),['turquie']);
  run("recipeSearch='tofu'");assert.deepEqual(plain('recipeEntries().map(s=>s.id)'),['japon']);
  run("recipeSearch='CORÉE'");assert.deepEqual(plain('recipeEntries().map(s=>s.id)'),['coree']);
  run("recipeSearch='';recipeCountry='mexique'");assert.deepEqual(plain('recipeEntries().map(s=>s.id)'),['mexique']);
  run("recipeCountry='all'");click('recipe-favorites');assert.deepEqual(plain('recipeEntries().map(s=>s.id)'),['mexique']);
  click('favorite-recipe','mexique');assert.match(elements.get('recipe-results').innerHTML,/Aucun favori/);
  click('reset-recipe-filters');assert.equal(run('recipeEntries().length'),4);
  for(const id of ['japon','coree','turquie','mexique']){
    click('recipe',id); assert.equal(run('view'),'recipe');
    const markup = elements.get('app').innerHTML;
    assert.match(markup,/recipe-visual/);assert.match(markup,/Imprimer la recette/);assert.match(markup,/Télécharger la fiche PDF/);assert.match(markup,/Références/);
    assert(document.body.classList.contains('recipe-print'));
    click('back-recipe');assert.equal(run('view'),'recipes');
    assert(!document.body.classList.contains('recipe-print'));
  }
  run("openDetail('japon');openRecipe('japon');closeRecipe()");assert.equal(run('view'),'detail');
  run("startTour('mexique')");
  for(let i=0;i<3;i++)run('answer(game.questions[game.idx].s.q[game.questions[game.idx].i][2]);next()');
  assert.equal(run('state.completed.mexique'),true);
  run("show('recipes');toggleRecipeFavorite('coree');exportJSON()");
  const backup=JSON.parse(downloads.at(-1).data);
  assert.equal(backup.progress.recipeFavorites.coree,true);assert.equal(backup.progress.completed.japon,true);
  run("toggleRecipeFavorite('japon');state.completed={};persist()");
  context.backupFile={size:512,text:async()=>JSON.stringify(backup)};
  await run('importJSON(backupFile)');
  assert.equal(run('state.recipeFavorites.coree && state.recipeFavorites.japon && state.completed.japon'),true);
  const clean=plain('cleanBackupProgress({recipeFavorites:{japon:true,coree:1,unknown:true},best:{japon:99}})');
  assert.deepEqual(clean.recipeFavorites,{japon:true});assert.deepEqual(clean.best,{});
  const old=plain('cleanBackupProgress({completed:{japon:true}})');assert.deepEqual(old.recipeFavorites,{});
  run('state=load()');assert.equal(run('state.recipeFavorites.coree'),true);
  run('reset()');assert.equal(run('countDone()'),0);assert.equal(run('state.recipeFavorites.coree'),true);
  await run('printRecipe()');assert.equal(printed,1);assert.deepEqual(alerts,[]);

  // The install pre-cache contains every image, stylesheet, script and PDF.
  const worker = fs.readFileSync(path.join(root,'sw.js'),'utf8');
  const listeners={}, cached=[];
  const workerContext=vm.createContext({self:{addEventListener:(type,fn)=>listeners[type]=fn},caches:{open:async()=>({addAll:async urls=>cached.push(...urls)})}});
  vm.runInContext(worker,workerContext);
  let installed;listeners.install({waitUntil:p=>installed=p});await installed;
  for(const asset of cached){const local=asset==='./'?'index.html':asset.replace(/^\.\//,'');assert(fs.existsSync(path.join(root,local)),`Missing cached asset ${asset}`)}
  for(const recipe of Object.values(plain('RECIPES'))){assert(cached.includes(recipe.image));assert(cached.includes(recipe.pdf));assert(recipe.imageAlt.length>20);assert.equal(fs.readFileSync(path.join(root,recipe.pdf)).subarray(0,4).toString(),'%PDF')}
  assert(worker.includes("atlas-cultures-v3.2.0"));assert.equal(JSON.parse(fs.readFileSync(path.join(root,'version.json'))).version,run('APP_VERSION'));
  for(const file of ['recipes.js','notebook.js'])assert(html.indexOf(`src="./${file}"`) < html.indexOf('<script>'));
  assert(html.indexOf('./notebook.css') > html.lastIndexOf('</style>'));
  console.log('PASS: 13 escales / 39 énigmes, ancien passeport, recherche, filtres, favoris, navigation, quiz, sauvegarde/restauration, impression, quatre PDF et cache complet.');
  console.log('Limite : ces tests sans navigateur ne vérifient pas le rendu CSS ni un appareil réel.');
})().catch(error=>{console.error(error);process.exitCode=1});

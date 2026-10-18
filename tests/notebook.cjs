/* Tests sans navigateur : migration, carnet, favoris, sauvegardes et cache PWA. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1];
for (const [name, code] of [['index.html',inline], ...['recipes.js','kitchen.js','notebook.js','sw.js'].map(p => [p,fs.readFileSync(path.join(root,p),'utf8')])]) new vm.Script(code, {filename:name});

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
for (const file of ['recipes.js','kitchen.js','notebook.js']) vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
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
  assert.deepEqual(plain('state.recipeKitchen'),{});
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

  // All default quantities agree with the source recipe, including ranges and fractions.
  for(const id of ['japon','coree','mexique'])assert.deepEqual(plain(`scaledRecipeIngredients('${id}',RECIPES['${id}'].portionModel.base)`),plain(`RECIPES['${id}'].ingredients`));
  assert.equal(run("scaledRecipeIngredients('turquie',1)[0]"),'60 ml d’eau à température ambiante (60 ml par tasse)');
  assert.equal(run("scaledRecipeIngredients('turquie',1)[1]"),'1 c. à café de café moulu très fin');
  assert.equal(run("scaledRecipeIngredients('turquie',1)[2]"),'0 à 3 g de sucre, selon le goût');
  assert.equal(run("scaledRecipeIngredients('turquie',1)[3]"),'1 petit verre d’eau pour le service');
  assert.equal(run("scaledRecipeIngredients('japon',1)[4]"),'¼ oignon nouveau');
  assert.equal(run("scaledRecipeIngredients('mexique',1)[2]"),'1/16 c. à café de sel (facultatif)');
  assert.equal(run("scaledRecipeIngredients('mexique',2)[2]"),'⅛ c. à café de sel (facultatif)');
  assert.match(run("scaledRecipeSteps('mexique',2)[1]"),/^Diviser en 6 boules/);
  assert.match(run("scaledRecipeSteps('coree',8)[0]"),/240 ml d’eau ; laisser 30 minutes/);
  assert.equal(run("scaledRecipeSteps('mexique',8)[2]"),run('RECIPES.mexique.steps[2]'));
  assert.equal(run("recipePortionsLabel('mexique',1)"),'1 personne · 3 petites tortillas');
  assert.equal(run("recipePortionsLabel('coree',6)"),'6 à 12 accompagnements');
  for(const id of ['japon','coree','turquie','mexique'])for(let n=1;n<=12;n++){
    const lines=plain(`scaledRecipeIngredients('${id}',${n})`);
    assert.equal(lines.length,run(`RECIPES['${id}'].ingredients.length`));
    assert(lines.every(line=>!/(NaN|undefined|Infinity|\{\d+\})/.test(line)));
  }

  // Cooking through the event handlers preserves checks without re-rendering the page.
  run("show('recipes');openRecipe('mexique')");click('kitchen-mode');
  assert.equal(run('kitchenMode'),true);assert.match(elements.get('app').innerHTML,/data-kitchen="steps"/);
  const row=element();
  const input={id:'',dataset:{kitchen:'steps',recipe:'mexique',index:'0'},checked:true,closest:()=>row};
  for(const handler of events.change)handler({target:input});
  assert.deepEqual(plain('kitchenState("mexique").steps'),[0]);assert(row.classList.contains('is-checked'));
  assert.match(elements.get('kitchen-progress-text').textContent,/1 \/ 4/);
  assert.match(elements.get('app').innerHTML,/data-kitchen="steps"/);
  run("updateKitchenCheck('mexique','ingredients',0,true)");
  for(let i=1;i<4;i++)run(`updateKitchenCheck('mexique','steps',${i},true)`);
  assert.match(elements.get('kitchen-progress-text').textContent,/C’est prêt/);
  run('state=load()');assert.deepEqual(plain('kitchenState("mexique").steps'),[0,1,2,3]);
  click('back-recipe');run("openRecipe('mexique')");assert.equal(run('kitchenMode'),false);
  assert.deepEqual(plain('kitchenState("mexique").ingredients'),[0]);
  run("setRecipePortions('mexique',2)");assert.equal(run('kitchenState("mexique").portions'),2);
  assert.deepEqual(plain('kitchenState("mexique").steps'),[]);
  assert.match(elements.get('app').innerHTML,/2 personnes · 6 petites tortillas/);
  assert.match(elements.get('app').innerHTML,/Diviser en 6 boules/);
  assert.match(elements.get('app').innerHTML,/100 g de masa/);
  assert.match(elements.get('app').innerHTML,/PDF à télécharger correspond à la recette de base/);
  assert.match(elements.get('app').innerHTML,/4 personnes · 12 petites tortillas/);
  run("setRecipePortions('mexique',0);setRecipePortions('mexique',13);setRecipePortions('mexique',2.5)");
  assert.equal(run('kitchenState("mexique").portions'),2);
  run("updateKitchenCheck('mexique','steps',1,true)");click('kitchen-reset');
  assert.equal(run('kitchenState("mexique").portions'),2);assert.deepEqual(plain('kitchenState("mexique").steps'),[]);
  click('recipe-base');assert.equal(run('kitchenState("mexique").portions'),4);
  run("updateKitchenCheck('mexique','steps',2,true);exportJSON()");
  const cookingBackup=JSON.parse(downloads.at(-1).data);assert.deepEqual(cookingBackup.progress.recipeKitchen.mexique.steps,[2]);
  context.cookingBackupFile={size:1024,text:async()=>JSON.stringify(cookingBackup)};
  run('state.recipeKitchen={}');await run('importJSON(cookingBackupFile)');
  assert.deepEqual(plain('kitchenState("mexique").steps'),[2]);
  run("setRecipePortions('mexique',2)");await run('importJSON(cookingBackupFile)');
  assert.equal(run('kitchenState("mexique").portions'),2); // Local preparation wins over an older backup.
  const sanitized=plain('cleanRecipeKitchen({mexique:{portions:100,ingredients:[0,0,4,"1"],steps:[2,2,-1,99]},unknown:{portions:3}})');
  assert.deepEqual(sanitized,{mexique:{portions:4,ingredients:[0],steps:[2]}});
  run('reset()');assert.equal(run('kitchenState("mexique").portions'),2);
  assert.equal(run("updateKitchenCheck('mexique','invalid',0,true)"),false);
  assert.equal(run("updateKitchenCheck('mexique','steps',99,true)"),false);
  assert.deepEqual(alerts,[]);

  // The install pre-cache contains every image, stylesheet, script and PDF.
  const worker = fs.readFileSync(path.join(root,'sw.js'),'utf8');
  const listeners={}, cached=[];
  const workerContext=vm.createContext({self:{addEventListener:(type,fn)=>listeners[type]=fn},caches:{open:async()=>({addAll:async urls=>cached.push(...urls)})}});
  vm.runInContext(worker,workerContext);
  let installed;listeners.install({waitUntil:p=>installed=p});await installed;
  for(const asset of cached){const local=asset==='./'?'index.html':asset.replace(/^\.\//,'');assert(fs.existsSync(path.join(root,local)),`Missing cached asset ${asset}`)}
  for(const recipe of Object.values(plain('RECIPES'))){assert(cached.includes(recipe.image));assert(cached.includes(recipe.pdf));assert(recipe.imageAlt.length>20);assert.equal(fs.readFileSync(path.join(root,recipe.pdf)).subarray(0,4).toString(),'%PDF')}
  assert(cached.includes('./kitchen.js'));assert(cached.includes('./kitchen.css'));
  assert(worker.includes("atlas-cultures-v"+run('APP_VERSION')));assert.equal(JSON.parse(fs.readFileSync(path.join(root,'version.json'))).version,run('APP_VERSION'));
  for(const file of ['recipes.js','kitchen.js','notebook.js'])assert(html.indexOf(`src="./${file}"`) < html.indexOf('<script>'));
  assert(html.indexOf('./notebook.css') > html.lastIndexOf('</style>'));
  console.log('PASS: 13 escales / 39 énigmes, passeport et favoris, portions de 1 à 12, fractions et étapes recalculées, mode cuisine, coches persistantes, sauvegarde/restauration, impression, quatre PDF et cache complet.');
  console.log('Limite : ces tests sans navigateur ne vérifient pas le rendu CSS ni un appareil réel.');
})().catch(error=>{console.error(error);process.exitCode=1});

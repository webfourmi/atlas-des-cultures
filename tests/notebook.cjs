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
for (const [name, code] of [['index.html',inline], ...['recipes.js','kitchen.js','notebook.js','travel-data.js','journeys.js','travel.js','india-adventure.js','sw.js'].map(p => [p,fs.readFileSync(path.join(root,p),'utf8')])]) new vm.Script(code, {filename:name});

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
for (const file of ['recipes.js','kitchen.js','notebook.js','travel-data.js','journeys.js','travel.js','india-adventure.js']) vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
vm.runInContext(inline,context,{filename:'index.html'});
const run = code => vm.runInContext(code,context);
run('downloadBlob=(data,type,name)=>captureDownload(data,type,name)');
context.captureDownload = (data,type,name)=>downloads.push({data,type,name});
const plain = code => JSON.parse(run(`JSON.stringify(${code})`));
const snapshot=name=>{if(qaDir)fs.writeFileSync(path.join(qaDir,name+'.html'),elements.get('app').innerHTML)};
const click = (action,id,extra={}) => {const button=element();button.dataset={action,id,...extra};for(const handler of events.click)handler({target:{closest:()=>button}})};

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

  // All four travel sections, all photo captions, every map point and all story branches.
  assert.equal(run('Object.keys(TRAVEL_PHOTOS).length'),13);
  assert.equal(run('Object.keys(TRAVEL_PLACES).length'),13);
  assert.equal(run('Object.keys(JOURNEYS).length'),13);
  assert.equal(run('TRAVEL_AUDIO.length'),2);assert.equal(run('TRAVEL_VIDEO.length'),2);
  click('travel');assert.equal(run('view'),'travel');assert.match(elements.get('app').innerHTML,/Natural Earth/);
  for(const id of plain('STOPS.map(s=>s.id)')){
    click('travel-select',id);assert.equal(run('travelSelected'),id);
    assert.match(elements.get('app').innerHTML,new RegExp(`travel/${id}\\.webp`));
    const point=plain(`projectTravelPoint(TRAVEL_PLACES['${id}'])`);assert(point.x>=0&&point.x<=1000&&point.y>=0&&point.y<=500);
    assert(run(`TRAVEL_PHOTOS['${id}'].author.length>2&&TRAVEL_PHOTOS['${id}'].license.length>2&&TRAVEL_PHOTOS['${id}'].caption.length>30`));
    run(`openDetail('${id}')`);assert.match(elements.get('app').innerHTML,/Source et original/);assert.match(elements.get('app').innerHTML,/Prolonger l’escale/);
    assert(!elements.get('app').innerHTML.includes('Regarde l’illustration'));
    click('travel');
  }
  click('travel-tab',undefined,{tab:'photos'});assert.match(elements.get('app').innerHTML,/Photograph|photograph/);
  assert.equal((elements.get('app').innerHTML.match(/class="travel-figure"/g)||[]).length,13);
  click('travel-tab',undefined,{tab:'stories'});assert.equal((elements.get('app').innerHTML.match(/class="journey-card"/g)||[]).length,13);
  const priorXP=run('xp()');let routes=0;
  for(const id of plain("STOPS.filter(s=>s.id!=='inde').map(s=>s.id)")){
    const enumerate=(node,path=[],visited=[])=>{
      assert(!visited.includes(node),'Story loop');
      if(node==='finish')return [path];
      const scene=plain(`journeyScene('${id}','${node}')`);assert(scene.choices.length>0);
      assert.equal(new Set(scene.choices.map(c=>c.reply)).size,scene.choices.length,'Two choices share the same reply');
      return scene.choices.flatMap((choice,index)=>{
        assert.equal(typeof choice.reply,'string');assert(choice.reply.length>25,'Missing character reply');
        return enumerate(choice.to,[...path,{node,index,to:choice.to,label:choice.label,reply:choice.reply}],[...visited,node]);
      });
    };
    const paths=enumerate('begin');assert.equal(paths.length,5);
    for(const route of paths){
      run(`state.journeys['${id}']={node:'begin',seen:[],completed:false};show('travel');openJourney('${id}')`);
      assert.match(elements.get('app').innerHTML,/Personnage et dialogues fictifs/);
      const selected=[];
      for(const move of route){
        click('journey-choice',id,{index:String(move.index),node:move.node});selected.push(move.index);
        assert.equal(run(`journeyProgress('${id}').node`),move.to);
        assert.equal(run(`chooseJourney(0,'${move.node}')`),false,'Stale click accepted');
        assert.equal(run(`chooseJourney(0,'${move.to}','other-story')`),false,'Click from another encounter accepted');
        assert.deepEqual(plain(`journeyProgress('${id}').history`),selected);
        const markup=elements.get('app').innerHTML;
        for(const previous of route.slice(0,selected.length)){
          context.expectedLine=previous.label;assert(markup.includes(run('esc(expectedLine)')),'Player reply disappeared');
          context.expectedLine=previous.reply;assert.equal(markup.split(run('esc(expectedLine)')).length,2,'Character reply missing or duplicated');
        }
        assert.match(markup,/journey-speaker">Toi/);assert.match(markup,/id="journey-latest"/);
        if(selected.length===1){
          run(`state=load();show('home');openJourney('${id}')`);
          assert.deepEqual(plain(`journeyProgress('${id}').history`),selected,'Reload lost the conversation');
          context.expectedLine=move.reply;assert(elements.get('app').innerHTML.includes(run('esc(expectedLine)')));
        }
      }
      assert.equal(run(`journeyProgress('${id}').completed`),true);
      const expected=[...new Set(route.map(m=>m.to).filter(n=>n==='hands'||n==='voices'))];
      assert.deepEqual(plain(`journeyProgress('${id}').seen`),expected);
      assert.match(elements.get('app').innerHTML,/Cette rencontre est inscrite/);routes++;
    }
  }
  assert.equal(routes,60);assert.equal(run('xp()'),priorXP);
  const beforeReplay=plain('journeyProgress(activeJourney)');click('journey-replay');
  assert.equal(run('journeyProgress(activeJourney).node'),'begin');assert.equal(run('journeyProgress(activeJourney).completed'),true);
  assert.deepEqual(plain('journeyProgress(activeJourney).history'),[]);assert.equal(run('journeyProgress(activeJourney).origin'),'begin');
  assert.deepEqual(plain('journeyProgress(activeJourney).seen'),beforeReplay.seen);
  // A concrete choice gets an appropriate answer, including two choices that converge.
  run("state.journeys.turquie={node:'begin'};openJourney('turquie')");
  click('journey-choice','turquie',{index:'1',node:'begin'});
  assert.match(elements.get('app').innerHTML,/Prends les petites tasses et les verres d’eau/);
  assert(!elements.get('app').innerHTML.includes('Je surveille la mousse'));
  click('journey-choice','turquie',{index:'0',node:'voices'});
  assert.match(elements.get('app').innerHTML,/Avec ma mère, en la regardant faire/);
  assert(!elements.get('app').innerHTML.includes('elle est en bas'));
  // Resume an older encounter without fabricating a past question or losing notes.
  run("state.journeys.japon={node:'hands',seen:['hands'],completed:true};openJourney('japon')");
  assert(!elements.get('app').innerHTML.includes('Tu tombes bien'));
  click('journey-choice','japon',{index:'0',node:'hands'});
  assert.equal(run('journeyProgress("japon").origin'),'hands');assert.deepEqual(plain('journeyProgress("japon").history'),[0]);
  assert.equal(run('journeyProgress("japon").completed'),true);
  run('state=load()');assert.equal(run('journeyProgress("japon").node'),'voices');

  // India pilot: every exploration order, both endings and both preparations per ending.
  const indiaState=()=>plain('journeyProgress("inde").adventure');
  const india=(action,key,from=indiaState().place)=>click('india-'+action,undefined,{key,from,screen:indiaState().screen,piece:action==='answer'?indiaState().piece:undefined});
  const moveIndia=place=>{if(indiaState().place!==place)india('move',place)};
  const orders=[['accueil','bibliotheque','cour'],['accueil','cour','bibliotheque'],['bibliotheque','accueil','cour'],['bibliotheque','cour','accueil'],['cour','accueil','bibliotheque'],['cour','bibliotheque','accueil']];
  let indiaRoutes=0;
  function exploreIndia(order,plan,preparation,exerciseErrors=false){
    india('start');assert.equal(indiaState().started,true);snapshot('india-accueil');
    assert.equal(run('indiaAction("start")'),false,'Repeated start reset the adventure');
    assert.equal(run('indiaAction("finish",null,"accueil")'),false,'Unfinished mission accepted');
    for(const place of order){
      moveIndia(place);
      if(place==='accueil'){
        india('talk','anaya-mission');assert.match(elements.get('app').innerHTML,/La photo est ici/);
        india('detail','personnes');india('detail','geste');india('detail','legende');
        assert.match(elements.get('app').innerHTML,/la transmission/);
        assert(indiaState().observed.includes('legende'));
      } else if(place==='bibliotheque'){
        assert.equal(run('indiaAction("detail","legende","accueil")'),false,'Action from a previous place accepted');
        india('document','fiche');assert.match(elements.get('app').innerHTML,/des récitations/);india('document','livre');
        assert.equal(run('indiaAction("place-label","photo","bibliotheque")'),true);
        assert.match(elements.get('app').innerHTML,/Choisis d’abord l’un des trois titres/);
        const choices=exerciseErrors?{photo:'diversite',fiche:'transmission',livre:'textes'}:{photo:'transmission',fiche:'diversite',livre:'textes'};
        for(const [piece,label] of Object.entries(choices)){
          india('piece',piece);india('answer',label);
          const pending=indiaState();run('state=load();render()');
          assert.deepEqual(indiaState(),pending,'Reload lost the current support or partial board');
        }
        india('check');
        if(exerciseErrors){
          assert.equal(run('indiaBoardSolved(journeyProgress("inde").adventure)'),false);
          assert.match(elements.get('app').innerHTML,/2 associations à revoir/);snapshot('india-puzzle-incorrect');
          india('hint');assert.equal(indiaState().hint,1);india('hint');assert.equal(indiaState().hint,2);
          assert.equal(indiaState().board.photo,'diversite','Hint silently solved the puzzle');
          india('pane','play');india('piece','photo');india('answer','transmission');
          assert.equal(indiaState().board.fiche,'diversite','Moving an occupied title lost the other title');
          assert.equal(indiaState().checked,false);india('check');
        }
        assert.equal(run('indiaBoardSolved(journeyProgress("inde").adventure)'),true);
        assert.match(elements.get('app').innerHTML,/Le panneau est prêt/);snapshot('india-bibliotheque');
      } else {
        const knowsPhoto=indiaState().observed.includes('legende');
        india('talk',knowsPhoto?'ravi-photo':'ravi-premier');
        assert.match(elements.get('app').innerHTML,knowsPhoto?/tu as trouvé un bon point de départ/:/Va regarder la photographie/);
        india('talk','ravi-livres');india('plan',plan);
        assert.equal(indiaState().plan,plan);snapshot('india-cour-'+plan);
        if(plan==='rencontre')india('opening',preparation);
      }
      const beforeReload=indiaState();run('state=load();show("home");openJourney("inde")');
      assert.deepEqual(indiaState(),beforeReload,'Reopening lost the place, clues or dialogue');
    }
    assert.equal(indiaState().visited.length,3);
    assert.equal(run('indiaClues(journeyProgress("inde").adventure).length'),3);
    if(plan==='expo'){moveIndia('accueil');india('order',preparation)}else moveIndia('cour');
    assert.deepEqual(plain('indiaTasks(journeyProgress("inde").adventure)'),[]);
    india('finish');
    assert.equal(indiaState().ending,plan);snapshot('india-ending-'+plan);assert.equal(run('state.journeys.inde.completed'),true);
    assert.match(elements.get('app').innerHTML,plan==='expo'?/Les portes de l’exposition/:/Une visite à deux voix/);
    if(plan==='expo'){
      const markup=elements.get('app').innerHTML;
      const list=markup.slice(markup.indexOf('class="india-exhibit-order"'));
      const first=preparation==='photo'?'La photographie':'La fiche des pratiques';
      assert(list.indexOf(first)<list.indexOf('Le livre de la bibliothèque'));
      assert(list.indexOf(first)<list.indexOf(preparation==='photo'?'La fiche des pratiques':'La photographie'));
    } else assert.match(elements.get('app').innerHTML,preparation==='personne'?/J’ai commencé auprès d’un proche/:/Je reprends certaines explications/);
    assert.equal(run('indiaAction("move","bibliotheque",journeyProgress("inde").adventure.place)'),true);assert.equal(indiaState().ending,plan);india('screen','ending');const finished=indiaState();
    run('state=load();render()');assert.deepEqual(indiaState(),finished,'Reload lost the ending');
    indiaRoutes++;
  }
  for(const order of orders){
    for(const [plan,preparation] of [['expo','photo'],['expo','pratiques'],['rencontre','personne'],['rencontre','textes']]){
      run('state.journeys.inde={node:"begin",seen:[],completed:false};show("travel");openJourney("inde")');
      assert.match(elements.get('app').innerHTML,/Entrer dans l’école/);snapshot('india-intro');
      assert.equal(run('chooseJourney(0,"begin","inde")'),false,'Old dialogue engine changed the pilot');
      exploreIndia(order,plan,preparation,indiaRoutes===0);
    }
  }
  assert.equal(indiaRoutes,24);assert.equal(run('xp()'),priorXP);
  const oldIndia={node:'finish',seen:['hands','voices'],completed:true,origin:'begin',history:[0,0,0,0]};
  context.oldIndia=oldIndia;run('state.journeys.inde=oldIndia;openJourney("inde")');
  assert.equal(indiaState().started,false,'An older completed encounter skipped the new adventure');
  assert.equal(run('journeyProgress("inde").completed'),true);
  assert.deepEqual(plain('journeyProgress("inde").seen'),['hands','voices']);
  assert.match(elements.get('app').innerHTML,/découvertes précédentes/);
  exploreIndia(orders[0],'rencontre','personne');
  const oldNotes=plain('journeyProgress("inde").seen');india('replay');
  assert.equal(indiaState().started,false);assert.deepEqual(indiaState().endings,['rencontre']);
  assert.deepEqual(plain('journeyProgress("inde").seen'),oldNotes);
  exploreIndia(orders[4],'expo','pratiques');assert.deepEqual(indiaState().endings,['rencontre','expo']);
  // An in-progress save preserves choices and puzzle; local play wins when restoring.
  india('replay');india('start');moveIndia('cour');india('plan','expo');india('plan','rencontre');
  assert.equal(indiaState().plan,'rencontre');assert.match(elements.get('app').innerHTML,/question pour ouvrir la discussion/);
  india('opening','textes');moveIndia('bibliotheque');india('document','livre');india('label','transmission');india('place-label','photo');
  const pendingIndia=indiaState();run('exportJSON()');const indiaBackup=JSON.parse(downloads.at(-1).data);
  context.indiaBackupFile={size:12000,text:async()=>JSON.stringify(indiaBackup)};
  run('state.journeys={}');await run('importJSON(indiaBackupFile)');run('openJourney("inde")');
  assert.deepEqual(indiaState(),pendingIndia,'Backup lost the unfinished adventure');
  moveIndia('accueil');click('india-move',undefined,{key:'accueil',from:'accueil',target:'india-photo-title'});assert.equal(indiaState().place,'accueil');await run('importJSON(indiaBackupFile)');assert.equal(indiaState().place,'accueil','Restoration overwrote local play');
  const corrupt=plain('cleanIndiaAdventure({started:true,place:"<script>",visited:["cour","bad","cour"],observed:["legende","bad"],documents:["livre","<script>"],board:{photo:"transmission",fiche:"transmission",livre:"bad"},selected:"<script>",hint:999,log:["<script>","ravi-livres"],plan:"expo",ending:"expo",endings:["expo","bad"]})');
  assert.equal(corrupt.place,'accueil');assert.deepEqual(corrupt.visited,['accueil','cour']);assert.equal(corrupt.board.fiche,null);
  assert.equal(corrupt.selected,null);assert.equal(corrupt.hint,2);assert.equal(corrupt.ending,null);assert.deepEqual(corrupt.endings,['expo']);
  assert.deepEqual(corrupt.log,['ravi-livres']);
  const newRemote=plain('newIndiaAdventure()');newRemote.started=true;newRemote.place='cour';newRemote.visited=['accueil','cour'];
  context.newRemote=newRemote;
  assert.equal(run('mergeIndiaAdventure(newIndiaAdventure(),newRemote).place'),'cour','An untouched legacy save blocked a restored adventure');
  assert.equal(run('indiaAction("move","__proto__","accueil")'),false);

  // Regression: a complete journey can be played using only the visible cards and footer.
  const preservedIndia=plain('state.journeys.inde');
  function visibleButton(action,key,footerOnly=false){
    const markup=elements.get('app').innerHTML;
    const region=footerOnly?markup.match(/<footer class="india-player-controls">([\s\S]*?)<\/footer>/)[1]:markup;
    const buttons=[...region.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/g)];
    const found=footerOnly?buttons.at(-1):buttons.find(match=>match[1].includes('data-action="'+action+'"')&&(key===undefined||match[1].includes('data-key="'+key+'"')));
    assert(found,'Expected a visible control: '+action+' '+key);assert(!/\bdisabled\b/.test(found[1]),'Visible progression control is disabled: '+found[2]);
    const data=Object.fromEntries([...found[1].matchAll(/data-([\w-]+)="([^"]*)"/g)].map(([,name,value])=>[name,value]));
    click(data.action,undefined,data);
  }
  const primary=()=>visibleButton(null,undefined,true);
  function checkPlayer(){
    const markup=elements.get('app').innerHTML;
    assert(document.body.classList.contains('india-playing'));
    assert.equal((markup.match(/class="india-location"/g)||[]).length,3,'The three places disappeared');
    assert(markup.indexOf('class="india-placebar"')<markup.indexOf('id="india-screen-scroll"'),'Places were rendered after the activity');
    assert.equal((markup.match(/class="india-screen"/g)||[]).length,1,'More than one activity was rendered');
    assert(!markup.includes('class="india-layout"'));assert(!markup.includes('class="india-hero"'));
    assert(markup.includes('class="india-player-controls"'));
    snapshot('india-screen-'+(run('indiaPane')||indiaState().screen));
  }
  for(const [plan,preparation] of [['expo','photo'],['expo','pratiques'],['rencontre','personne'],['rencontre','textes']]){
    run('state.journeys.inde={node:"begin",seen:[],completed:false};show("travel");openJourney("inde")');
    checkPlayer();assert.equal(indiaState().screen,'intro');
    primary();checkPlayer();assert.equal(indiaState().screen,'anaya');
    primary();checkPlayer();assert.equal(indiaState().screen,'photo');
    visibleButton('india-detail','personnes');primary();assert.equal(indiaState().detail,'legende');
    primary();checkPlayer();assert.equal(indiaState().screen,'fiche');
    primary();assert(indiaState().documents.includes('fiche'));
    primary();checkPlayer();assert.equal(indiaState().screen,'livre');
    primary();assert(indiaState().documents.includes('livre'));
    primary();checkPlayer();assert.equal(indiaState().screen,'ravi');
    visibleButton('india-talk','ravi-photo');assert.match(elements.get('app').innerHTML,/un bon point de départ/);
    visibleButton('india-clear-reply');visibleButton('india-talk','ravi-livres');
    assert(!elements.get('app').innerHTML.includes('un bon point de départ'),'Earlier dialogue was stacked in the active card');
    primary();checkPlayer();assert.equal(indiaState().screen,'route');
    visibleButton('india-plan',plan);primary();checkPlayer();assert.equal(indiaState().screen,'puzzle');
    assert.equal((elements.get('app').innerHTML.match(/class="india-puzzle-support"/g)||[]).length,1);
    for(const label of ['transmission','diversite','textes']){visibleButton('india-answer',label);primary();checkPlayer()}
    assert.equal(run('indiaBoardSolved(journeyProgress("inde").adventure)'),true);
    // Previous and next support keep the chosen titles, and stale card clicks are rejected.
    const board=indiaState().board;visibleButton('india-piece','photo');assert.deepEqual(indiaState().board,board);
    assert.equal(run('indiaAction("answer","textes","bibliotheque",null,"puzzle","livre")'),false,'Click from a former support was accepted');
    visibleButton('india-piece','livre');primary();checkPlayer();assert.equal(indiaState().screen,'preparation');
    visibleButton(plan==='expo'?'india-order':'india-opening',preparation);primary();checkPlayer();assert.equal(indiaState().screen,'ready');
    primary();checkPlayer();assert.equal(indiaState().ending,plan);assert.equal(indiaState().screen,'ending');
    visibleButton('india-pane','mission');checkPlayer();visibleButton('india-pane','dialogues');checkPlayer();
    assert.match(elements.get('app').innerHTML,/un bon point de départ/,'Earlier dialogue disappeared from the history');
    visibleButton('india-pane','sources');checkPlayer();
    click('read','inde');assert(!document.body.classList.contains('india-playing'));
    click('back-detail');assert(document.body.classList.contains('india-playing'));checkPlayer();
    visibleButton('india-pane','play');visibleButton('india-move','bibliotheque');checkPlayer();
    assert.equal(indiaState().ending,plan,'Reviewing a place removed the ending');
    const screenBeforeReload=indiaState();run('state=load();openJourney("inde")');assert.deepEqual(indiaState(),screenBeforeReload);
    checkPlayer();click('journey-back');assert(!document.body.classList.contains('india-playing'));
  }
  const legacyScreen={started:true,place:'bibliotheque',visited:['accueil','bibliotheque'],documents:['fiche','livre'],observed:['legende'],board:{photo:'transmission',fiche:null,livre:null},selected:'diversite',version:1};
  context.legacyScreen=legacyScreen;
  const migratedScreen=plain('cleanIndiaAdventure(legacyScreen)');assert.equal(migratedScreen.screen,'puzzle');assert.equal(migratedScreen.piece,'fiche');
  assert.equal(migratedScreen.board.photo,'transmission');assert.equal(migratedScreen.selected,'diversite');assert.deepEqual(migratedScreen.documents,['fiche','livre']);
  context.preservedIndia=preservedIndia;run('state.journeys.inde=preservedIndia;persist();openJourney("inde")');

  run('show("home")');assert.equal(run('indiaAction("start")'),false,'Action outside the adventure accepted');

  run("show('library');openDetail('vietnam');openJourney('vietnam');openDetail('vietnam');closeDetail()");
  assert.equal(run('view'),'journey');click('journey-back');assert.equal(run('view'),'detail');assert.equal(run('readingStop.id'),'vietnam');
  run('exportJSON()');const travelBackup=JSON.parse(downloads.at(-1).data);
  assert.equal(Object.keys(travelBackup.progress.journeys).length,13);
  context.travelBackupFile={size:4096,text:async()=>JSON.stringify(travelBackup)};
  run('state.journeys={}');await run('importJSON(travelBackupFile)');assert.equal(run('Object.keys(state.journeys).length'),13);
  assert.deepEqual(plain('state.journeys.turquie.history'),[1,0]);
  run("openJourney('turquie')");assert.match(elements.get('app').innerHTML,/Avec ma mère, en la regardant faire/);
  const merged=plain("mergeJourneys({japon:{node:'hands',seen:['hands'],completed:false}},{japon:{node:'finish',seen:['voices'],completed:true}})");
  assert.deepEqual(merged,{japon:{node:'hands',seen:['hands','voices'],completed:true,origin:'hands',history:[]}});
  assert.deepEqual(plain("cleanJourneys({japon:{node:'bad',seen:['hands','hands','<script>'],completed:'yes'},invalid:{node:'finish'}})"),{japon:{node:'begin',seen:['hands'],completed:false,origin:'begin',history:[]}});
  assert.deepEqual(plain("cleanJourneys({japon:{node:'voices',origin:'begin',history:[0,0],seen:['hands','voices']}}).japon.history"),[0,0]);
  assert.deepEqual(plain("cleanJourneys({japon:{node:'voices',origin:'begin',history:[-1,'<script>',0],seen:[]}}).japon"),{node:'voices',seen:[],completed:false,origin:'voices',history:[]});
  assert.deepEqual(plain("mergeJourneys({turquie:{node:'voices',origin:'begin',history:[1],seen:['voices']}},{turquie:{node:'finish',origin:'begin',history:[0,1,0],seen:['hands'],completed:true}}).turquie"),{node:'voices',origin:'begin',history:[1],seen:['voices','hands'],completed:true});
  const escaped=run("journeyLine('<person>','<script>alert(1)</script>')");assert(!escaped.includes('<script>'));assert(escaped.includes('&lt;script&gt;'));
  run('state=load()');assert.equal(run('Object.keys(state.journeys).length'),13);run('reset()');assert.equal(run('Object.keys(state.journeys).length'),13);
  click('travel-sounds');assert(!elements.get('app').innerHTML.includes('<iframe'));
  assert.equal((elements.get('app').innerHTML.match(/<audio /g)||[]).length,2);
  click('travel-video','quanho');assert(!elements.get('video-quanho')?.innerHTML.includes('<iframe'));
  navigator.onLine=true;click('travel-video','quanho');assert.match(elements.get('video-quanho').innerHTML,/youtube-nocookie.com\/embed\/goCQBu896JM/);
  const audioA={tagName:'AUDIO',paused:0,pause(){this.paused++}},audioB={tagName:'AUDIO',paused:0,pause(){this.paused++}};
  elements.get('app').querySelectorAll=()=>[audioA,audioB];
  for(const handler of events.play)handler({target:audioA});assert.equal(audioA.paused,0);assert.equal(audioB.paused,1);
  click('home');assert.equal(audioA.paused,1);assert.equal(audioB.paused,2);
  elements.get('app').querySelectorAll=()=>[];

  // The install pre-cache contains every image, stylesheet, script and PDF.
  const worker = fs.readFileSync(path.join(root,'sw.js'),'utf8');
  const listeners={}, cached=[];
  const workerContext=vm.createContext({self:{addEventListener:(type,fn)=>listeners[type]=fn},caches:{open:async()=>({addAll:async urls=>cached.push(...urls)})}});
  vm.runInContext(worker,workerContext);
  let installed;listeners.install({waitUntil:p=>installed=p});await installed;
  for(const asset of cached){const local=asset==='./'?'index.html':asset.replace(/^\.\//,'');assert(fs.existsSync(path.join(root,local)),`Missing cached asset ${asset}`)}
  for(const recipe of Object.values(plain('RECIPES'))){assert(cached.includes(recipe.image));assert(cached.includes(recipe.pdf));assert(recipe.imageAlt.length>20);assert.equal(fs.readFileSync(path.join(root,recipe.pdf)).subarray(0,4).toString(),'%PDF')}
  assert(cached.includes('./kitchen.js'));assert(cached.includes('./kitchen.css'));
  for(const p of Object.values(plain('TRAVEL_PHOTOS')))assert(cached.includes(p.local));
  for(const a of plain('TRAVEL_AUDIO'))assert(cached.includes(a.src));
  for(const f of ['./travel/world.svg','./travel/CREDITS.md','./travel-data.js','./journeys.js','./travel.js','./travel.css','./india-adventure.js','./india-adventure.css'])assert(cached.includes(f));
  assert(fs.readFileSync(path.join(root,'travel/world.svg'),'utf8').includes('Natural Earth'));
  assert(worker.includes("atlas-cultures-v"+run('APP_VERSION')));assert.equal(JSON.parse(fs.readFileSync(path.join(root,'version.json'))).version,run('APP_VERSION'));
  for(const file of ['recipes.js','kitchen.js','notebook.js','travel-data.js','journeys.js','travel.js','india-adventure.js'])assert(html.indexOf(`src="./${file}"`) < html.indexOf('<script>'));
  assert(html.indexOf('./notebook.css') > html.lastIndexOf('</style>'));
  console.log('PASS: 13 escales / 39 énigmes, passeport et favoris, portions de 1 à 12, fractions et étapes recalculées, mode cuisine, coches persistantes, sauvegarde/restauration, impression, quatre PDF et cache complet.');
  console.log('PASS: 13 photos créditées, 13 cartes, 60 chemins dans 12 rencontres et aventure indienne à deux dénouements, réponses propres à chaque choix, historique/rechargement/JSON, migration des anciennes rencontres, lecteurs à la demande et arrêt des écoutes.');
  console.log('PASS: Inde : 24 parcours (six ordres d’exploration, deux voies, deux préparatifs), erreurs et indices, déplacements de titres, reprise, migration, sauvegarde JSON et souvenirs cumulés.');
  console.log('PASS: écrans successifs : quatre parcours par les commandes affichées, lieux présents dès l’introduction, une activité à la fois, reprise du support, carnet/historique séparés et sortie du mode jeu.');
  console.log('Limite : ces tests sans navigateur ne vérifient pas le rendu CSS ni un appareil réel.');
})().catch(error=>{console.error(error);process.exitCode=1});

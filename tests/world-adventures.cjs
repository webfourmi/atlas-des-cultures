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
  assert.equal(run('Object.keys(WORLD_ADVENTURES).length'),12);
  const ids=plain('Object.keys(WORLD_ADVENTURES)'),orders=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]];
  const adventure=()=>plain('journeyProgress(activeJourney).adventure');
  const act=(action,key,extra={})=>{
    const a=adventure();return run('worldAction('+[action,key,run('activeJourney'),a.place,a.screen,extra.piece,extra.step].map(x=>x===undefined?'undefined':JSON.stringify(x)).join(',')+')');
  };
  function visible(action,key,footerOnly=false){
    const markup=elements.get('app').innerHTML;
    const region=footerOnly?markup.match(/<footer class="india-player-controls">([\s\S]*?)<\/footer>/)[1]:markup;
    const buttons=[...region.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/g)];
    const found=footerOnly?buttons.at(-1):buttons.find(m=>m[1].includes('data-action="'+action+'"')&&(key===undefined||m[1].includes('data-key="'+key+'"')));
    assert(found,'Missing displayed button '+action+' '+key);assert(!/\bdisabled\b/.test(found[1]),'Disabled progression control: '+found[2]);
    const d=Object.fromEntries([...found[1].matchAll(/data-([\w-]+)="([^"]*)"/g)].map(([,k,v])=>[k,v]));
    click(d.action,undefined,d);
  }
  const primary=()=>visible(null,undefined,true);
  const check=(save=true)=>{
    const markup=elements.get('app').innerHTML,a=adventure(),id=run('activeJourney'),pane=run('worldPane');
    assert(document.body.classList.contains('india-playing'),'The focused game layout disappeared');
    assert.equal((markup.match(/class="india-location"/g)||[]).length,3);
    assert(markup.indexOf('class="india-placebar"')<markup.indexOf('id="india-screen-scroll"'));
    assert.equal((markup.match(/class="india-screen"/g)||[]).length,1);
    assert.equal((markup.match(/class="india-player-controls"/g)||[]).length,1);
    assert(!markup.includes('class="journey-layout"'),'The former scrolling page is still displayed');
    const images=[...markup.matchAll(/<img\b([^>]*)>/g)],canvases=[...markup.matchAll(/<svg\b[^>]*class="batik-canvas/g)];
    assert.equal(images.length+canvases.length,1,'Exactly one visual is required on '+id+' '+(pane||a.screen));
    if(images.length){const attrs=images[0][1],src=attrs.match(/\bsrc="([^"]+)"/)[1],alt=attrs.match(/\balt="([^"]*)"/)[1];assert(alt.length>20,'Missing useful image alternative');assert(fs.existsSync(path.join(root,src)),'Missing image '+src);}
    else assert.equal(id,'indonesie','A creation appeared in another country');
    if(save)snapshot('world-'+id+'-'+(pane||a.screen)+(a.screen==='practice'&&!pane?'-'+a.practiceStep:a.screen==='puzzle'&&!pane?'-'+a.piece:a.screen==='ending'&&!pane?'-'+a.ending:''));
  };
  const initialXP=run('xp()');
  run('state.journeys.inde={node:"begin",seen:["hands"],completed:true,adventure:newIndiaAdventure()};persist()');
  const indiaBefore=plain('journeyProgress("inde")');
  let directRoutes=0,uiRoutes=0;
  // Six exploration orders and all four preparations per country.
  for(const id of ids){
    const data=plain('WORLD_ADVENTURES.'+id);
    for(const order of orders)for(const plan of data.plans)for(const option of plan.options){
      run(`state.journeys['${id}']={node:'begin',seen:[],completed:false};show('travel');openJourney('${id}')`);
      assert(act('start'));assert.equal(act('start'),false);assert.equal(act('finish'),false,'An unfinished mission was accepted');
      for(const place of order){
        assert(act('move',String(place)));
        if(place===0){assert(act('talk','talk:0:0'));assert(act('note','2'));}
        if(place===1){assert(act('read','geste'));assert(act('read','partage'));}
        if(place===2){assert(act('talk','talk:1:1'));}
      }
      assert.equal(adventure().clues.length,3);assert.deepEqual([...adventure().visited].sort(),[0,1,2]);
      act('screen','route');act('plan',plan.id);act('screen','puzzle');
      for(const p of data.puzzle.supports){act('piece',p.id);act('answer',p.correct,{piece:p.id});}
      assert(act('check'));assert.equal(run(`worldSolved('${id}',journeyProgress('${id}').adventure)`),true);
      act('screen','preparation');assert(act('prepare',option.id));assert(act('finish'));
      assert.equal(adventure().ending,plan.id);assert.equal(adventure().practiceStatus,null,'The optional activity was silently required');
      context.expectedEnding=option.endingText;assert(elements.get('app').innerHTML.includes(run('esc(expectedEnding)')));
      directRoutes++;
    }
    // A clean run using only displayed choices and the footer, with both endings retained.
    run(`state.journeys['${id}']={node:'begin',seen:[],completed:false};show('travel');openJourney('${id}')`);
    for(const plan of data.plans)for(const option of plan.options){
      if(adventure().started)visible('world-replay');
      check();assert.equal(adventure().screen,'intro');primary();check();assert.equal(adventure().screen,'host');
      visible('world-talk','talk:0:0');const firstReply=elements.get('app').innerHTML;
      visible('world-clear-reply');visible('world-talk','talk:0:1');
      context.oldReply=data.characters[0].questions[0].answer;assert(!elements.get('app').innerHTML.includes(run('esc(oldReply)')),'Two replies are stacked in the active scene');
      assert.notEqual(elements.get('app').innerHTML,firstReply);
      primary();check();assert.equal(adventure().screen,'photo');
      visible('world-note','0');primary();assert.equal(adventure().photoNote,2);check();
      primary();check();assert.equal(adventure().screen,'geste');primary();assert(adventure().clues.includes('geste'));
      primary();check();assert.equal(adventure().screen,'partage');primary();assert(adventure().clues.includes('partage'));
      primary();check();assert.equal(adventure().screen,'partner');
      visible('world-talk','talk:1:0');visible('world-clear-reply');visible('world-talk','talk:1:1');
      primary();check();assert.equal(adventure().screen,'practice');
      const tasks=plain(`worldTasks('${id}',journeyProgress('${id}').adventure)`);
      assert.equal(act('practice','done'),false,'Activity finished before its last step');
      if(option.id==='un'){
        for(let step=0;step<3;step++){
          if(id==='indonesie'){if(step===0)run("batikAction('seed','loop')");if(step===1){visible('batik-palette','indigo');visible('batik-palette','terre');}if(step===2){visible('batik-layout','repeat');visible('batik-save');}assert(adventure().workshop.draft.strokes.length>0);}
          else{visible('world-practice-choice','0');const replyA=elements.get('app').innerHTML;visible('world-practice-choice','1');assert.notEqual(elements.get('app').innerHTML,replyA);assert.equal(adventure().practiceChoices[step],1);}check();
          const beforeReload=adventure();run('state=load();openJourney(activeJourney)');assert.deepEqual(adventure(),beforeReload);check();
          if(step===1){visible('world-practice','previous');assert.equal(adventure().practiceStep,0);primary();assert.equal(adventure().practiceStep,1);}
          primary();
          if(step<2)assert.equal(act('practice','next',{step}),false,'Stale activity step was accepted');
        }
        assert.equal(adventure().practiceStatus,'done');if(id==='indonesie')assert(adventure().workshop.cards.length>0);else assert.deepEqual(adventure().practiceChoices,[1,1,1]);
      }else{
        visible('world-practice','skip');assert.equal(adventure().practiceStatus,'skipped');
      }
      assert.equal(adventure().screen,'route');check();
      assert.deepEqual(plain(`worldTasks('${id}',journeyProgress('${id}').adventure)`),tasks,'The optional activity changed the mission requirements');
      visible('world-plan',plan.id);primary();check();assert.equal(adventure().screen,'puzzle');
      if(option.id==='un'&&plan.id==='atelier'){
        for(const label of ['b','c','a']){visible('world-answer',label);primary();}
        assert.equal(adventure().checked,true);assert.equal(run(`worldSolved('${id}',journeyProgress('${id}').adventure)`),false);
        visible('world-hint');check();assert.equal(run('worldPane'),'aide');
        visible('world-hint');assert.equal(adventure().hint,2);visible('world-pane','play');
      }
      for(const p of data.puzzle.supports){visible('world-piece',p.id);visible('world-answer',p.correct);check();}
      const board=adventure().board;
      assert.equal(act('answer','a',{piece:'photo'}),false,'Answer from another support accepted');
      const other=ids.find(x=>x!==id);assert.equal(run(`worldAction('answer','a','${other}',1,'puzzle','partage')`),false,'Click from another country accepted');
      primary();check();assert.equal(run(`worldSolved('${id}',journeyProgress('${id}').adventure)`),true);
      visible('world-piece','photo');assert.deepEqual(adventure().board,board);visible('world-piece','partage');primary();check();
      assert.equal(adventure().screen,'preparation');visible('world-prepare',option.id);primary();check();assert.equal(adventure().screen,'ready');
      primary();check();assert.equal(adventure().ending,plan.id);assert.equal(adventure().screen,'ending');
      context.expectedEnding=option.endingText;assert(elements.get('app').innerHTML.includes(run('esc(expectedEnding)')));
      const endingBefore=adventure().ending,endingsBefore=adventure().endings;
      assert.equal(act('plan',plan.id==='atelier'?'rencontre':'atelier'),false,'The ending could be changed during review');
      visible('world-pane','mission');check();visible('world-screen','practice');check();assert.equal(adventure().practiceStep,0);
      visible('world-practice','skip');assert.equal(adventure().ending,endingBefore);assert.deepEqual(adventure().endings,endingsBefore);
      visible('world-pane','mission');check();visible('world-pane','indices');check();visible('world-pane','dialogues');check();
      context.oldReply=data.characters[0].questions[0].answer;assert(elements.get('app').innerHTML.includes(run('esc(oldReply)')),'History lost a previous reply');
      visible('world-pane','carte');check();assert.match(elements.get('app').innerHTML,/openstreetmap\.org/);
      visible('world-pane','sources');check();assert.match(elements.get('app').innerHTML,/ich\.unesco\.org/);assert.match(elements.get('app').innerHTML,/Source et original/);
      click('read',id);assert.equal(run('view'),'detail');assert(!document.body.classList.contains('india-playing'));
      click('back-detail');assert.equal(run('view'),'journey');check();
      visible('world-pane','play');visible('world-move','1');check();assert.equal(adventure().ending,endingBefore);
      const beforeReload=adventure();run('state=load();openJourney(activeJourney)');assert.deepEqual(adventure(),beforeReload);
      visible('world-pane','mission');visible('world-pane','play');primary();assert.equal(adventure().screen,'ending');
      uiRoutes++;
    }
    assert.deepEqual(adventure().endings,['atelier','rencontre']);
    click('journey-back');assert(!document.body.classList.contains('india-playing'));
  }
  assert.equal(directRoutes,288);assert.equal(uiRoutes,48);assert.equal(run('xp()'),initialXP);
  assert.deepEqual(plain('journeyProgress("inde")'),indiaBefore,'The India adventure changed during other journeys');
  // Current screen, choices and practice survive export/restore; local work wins on a merge.
  run('openJourney("indonesie");worldAction("replay");worldAction("start");worldAction("screen","practice");worldAction("practice-choice","1");worldAction("practice","next");worldAction("practice-choice","0")');
  const pending=adventure();run('exportJSON()');const backup=JSON.parse(downloads.at(-1).data);context.worldBackupFile={size:20000,text:async()=>JSON.stringify(backup)};
  run('state.journeys={}');await run('importJSON(worldBackupFile)');run('openJourney("indonesie")');assert.deepEqual(adventure(),pending);
  act('screen','photo');const local=adventure();await run('importJSON(worldBackupFile)');assert.deepEqual(adventure(),local,'Import overwrote a local in-progress screen');
  // Invalid imported fields cannot introduce actions, unsafe markup or a fabricated ending.
  const corrupt=plain('cleanWorldAdventure("japon",{started:true,place:"<script>",visited:[0,2,"bad"],clues:["photo","bad"],board:{photo:"a",geste:"a",partage:"bad"},practiceStep:999,practiceChoices:[0,"<script>",9],practiceStatus:"bad",screen:"<script>",plan:"atelier",ending:"atelier",endings:["atelier","bad"],log:["<script>","talk:1:0"]})');
  assert.equal(corrupt.place,0);assert.equal(corrupt.screen,'preparation');assert.equal(corrupt.board.geste,null);assert.equal(corrupt.practiceStep,2);assert.deepEqual(corrupt.practiceChoices,[0,null,null]);assert.equal(corrupt.practiceStatus,null);assert.equal(corrupt.ending,null);assert.deepEqual(corrupt.endings,['atelier']);assert.deepEqual(corrupt.log,['talk:1:0']);
  run('show("home")');assert.equal(run('worldAction("start")'),false);
  run('openJourney("inde")');assert.equal(run('worldAction("start")'),false,'World actions affected India');
  // Audio and video stay opt-in; their files and credits remain the existing sources.
  run('openJourney("bresil");worldAction("replay");worldAction("start");worldAction("screen","practice")');
  let markup=elements.get('app').innerHTML;assert.equal((markup.match(/<audio /g)||[]).length,2);assert(!/autoplay/i.test(markup));assert(markup.includes('berimbau-angola.mp3'));assert(markup.includes('berimbau-iuna.mp3'));
  for(const [id,video] of [['vietnam','quanho'],['kenya','isukuti']]){
    run(`openJourney('${id}');worldAction('replay');worldAction('start');worldAction('screen','practice')`);
    assert(!elements.get('app').innerHTML.includes('<iframe'));navigator.onLine=false;click('travel-video',video);
    assert(!elements.get('video-'+video)?.innerHTML.includes('<iframe'));
    navigator.onLine=true;click('travel-video',video);assert.match(elements.get('video-'+video).innerHTML,/youtube-nocookie\.com\/embed\//);
  }
  const worker=fs.readFileSync(path.join(root,'sw.js'),'utf8');
  for(const id of ids)for(const kind of ['rencontre','atelier'])assert(worker.includes("'./travel/adventures/art/"+id+'-'+kind+".webp'"),'New illustration missing from offline cache');
  for(const file of ['world-adventure-data.js','batik-workshop.js','world-adventure.js','world-adventure.css','travel/adventures/SOURCES.md'])assert(worker.includes("'./"+file+"'"));
  console.log('PASS: 12 nouvelles aventures, 288 parcours dans les six ordres d’exploration et 48 parcours par les seules commandes affichées.');
  console.log('PASS: une image par écran, 3 lieux toujours visibles, réponses et dénouements propres aux choix, activités suivies ou passées, retour, rechargement et souvenirs cumulés.');
  console.log('PASS: sauvegarde JSON et fusion locale, anciennes découvertes et aventure Inde conservées, actions périmées rejetées, médias à la demande et 24 images dans le cache hors connexion.');
  console.log('Limite : vérifications sans navigateur ; rendu CSS sur appareil réel non vérifié.');
})().catch(error=>{console.error(error);process.exitCode=1});

const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const server=require("node:child_process").spawn("python",["-m","http.server","8766"],{windowsHide:true,stdio:"ignore"}); process.on("exit",()=>server.kill());
(async()=>{ await new Promise(r=>setTimeout(r,1500));
 const browser=await chromium.launch({headless:true,channel:"msedge"});
 const context=await browser.newContext({viewport:{width:1440,height:1000}});
 const page=await context.newPage(); const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:8766');
 await page.evaluate(()=>{state.completed.japon=true;state.best.japon=3;persist()});
 assert.equal(await page.evaluate(()=>STOPS.length),13);assert.equal(await page.evaluate(()=>STOPS.reduce((n,s)=>n+s.q.length,0)),39);
 for(const size of [{width:1440,height:1000},{width:390,height:844}]){
  await page.setViewportSize(size);
  for(const id of ['japon','coree','turquie','mexique']){
   await page.evaluate(id=>{show('library');openDetail(id)},id);
   await page.locator('[data-action="recipe"]').click();
   await page.locator('#recipe-title').waitFor();
   assert.equal(await page.locator('[data-action="print-recipe"]').textContent(),'Imprimer la recette');
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'overflow');
   await page.screenshot({path:`tests/${id}-${size.width}.png`,fullPage:true});
   if(size.width===1440){await page.emulateMedia({media:'print'});assert.equal(await page.locator('.recipe-toolbar').isVisible(),false);await page.pdf({path:`tests/${id}.pdf`,preferCSSPageSize:true});await page.emulateMedia({media:'screen'});}
   await page.locator('[data-action="back-recipe"]').click();assert.equal(await page.evaluate(()=>view),'detail');
  }
 }
 // Complete a real tour through the interface.
 await page.evaluate(()=>startTour('mexique'));
 for(let i=0;i<3;i++){const correct=await page.evaluate(()=>game.questions[game.idx].s.q[game.questions[game.idx].i][2]);await page.locator(`[data-action="answer"][data-index="${correct}"]`).click();await page.locator('[data-action="next"]').click();}
 assert(await page.evaluate(()=>state.completed.mexique));
 await page.evaluate(()=>show('settings'));
 const downloadJSON=page.waitForEvent('download');await page.locator('[data-action="export-json"]').click();const jsonFile=await downloadJSON;await jsonFile.saveAs('tests/backup.json');
 await page.evaluate(()=>{state.completed={};persist()});
 await page.evaluate(async()=>{const response=await fetch('/tests/backup.json');await importJSON(new File([await response.text()],'backup.json',{type:'application/json'}))});
 assert(await page.evaluate(()=>state.completed.japon&&state.completed.mexique));
 const downloadSVG=page.waitForEvent('download');await page.locator('[data-action="export-svg"]').click();await (await downloadSVG).saveAs('tests/passport.svg');assert(fs.readFileSync('tests/passport.svg','utf8').includes('<svg'));
 await page.reload();assert(await page.evaluate(()=>state.completed.japon&&state.completed.mexique));
 await page.evaluate(async()=>{await navigator.serviceWorker.ready});await page.reload();await context.setOffline(true);await page.reload();await page.evaluate(()=>{show('library');openRecipe('coree')});assert(await page.locator('#recipe-title').isVisible());
 assert.deepEqual(errors,[]);console.log('PASS: 13 stops, 39 questions, 4 recipes at desktop/mobile, print PDFs, quiz, JSON round-trip, SVG, persisted progress and offline recipe.');
 await browser.close();server.kill();
})().catch(e=>{console.error(e);process.exit(1)});



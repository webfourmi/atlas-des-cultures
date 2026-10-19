/* Assemble les contenus relus en un script autonome pour le jeu hors connexion. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const groups=['asia','africa-oceania','americas-georgia'];
const expected=['japon','coree','vietnam','indonesie','vanuatu','turquie','georgie','maroc','kenya','mexique','bresil','perou'];
const data={};
for(const group of groups){const content=JSON.parse(fs.readFileSync(path.join(root,'travel/adventures',group+'.json'),'utf8'));for(const [id,value] of Object.entries(content)){assert(!data[id],'Duplicate '+id);data[id]=value;}}
assert.deepEqual(Object.keys(data).sort(),[...expected].sort());
const nonempty=v=>assert(typeof v==='string'&&v.trim().length>0,'Missing text');
const url=v=>assert(/^https:\/\//.test(v),'Invalid URL '+v);
for(const [id,d] of Object.entries(data)){
  for(const key of ['title','mission','intro'])nonempty(d[key]);
  assert.equal(d.places.length,3,id);for(const p of d.places){nonempty(p.name);nonempty(p.description);}
  assert.equal(d.characters.length,2,id);
  for(const p of d.characters){for(const key of ['name','role','greeting'])nonempty(p[key]);assert.equal(p.questions.length,2,id);for(const q of p.questions){nonempty(q.question);nonempty(q.answer);}assert.notEqual(p.questions[0].answer,p.questions[1].answer);}
  assert.equal(d.photoNotes.length,3,id);for(const n of d.photoNotes){nonempty(n.label);nonempty(n.text);}
  assert.deepEqual(d.clues.map(c=>c.id),['photo','geste','partage'],id);
  for(const c of d.clues){nonempty(c.title);nonempty(c.text);if(c.id==='photo')assert.equal(c.source,'photo');else url(c.source);}
  nonempty(d.puzzle.prompt);nonempty(d.puzzle.hint);assert.deepEqual(d.puzzle.labels.map(l=>l.id),['a','b','c'],id);for(const l of d.puzzle.labels)nonempty(l.text);
  assert.deepEqual(d.puzzle.supports.map(p=>p.id),['photo','geste','partage'],id);assert.equal(new Set(d.puzzle.supports.map(p=>p.correct)).size,3,id);
  for(const p of d.puzzle.supports){nonempty(p.name);nonempty(p.text);assert(['a','b','c'].includes(p.correct),id);}
  assert.deepEqual(d.plans.map(p=>p.id),['atelier','rencontre'],id);
  for(const [i,p] of d.plans.entries()){
    for(const key of ['title','description','reply','preparationTitle','preparationPrompt','endingTitle'])nonempty(p[key]);assert.equal(p.place,i===0?0:2,id);assert.deepEqual(p.options.map(o=>o.id),['un','deux'],id);
    for(const o of p.options)for(const key of ['label','reply','endingText','endingReply'])nonempty(o[key]);assert.notEqual(p.options[0].reply,p.options[1].reply,id);assert.notEqual(p.options[0].endingText,p.options[1].endingText,id);
  }
  for(const key of ['title','intro','finishText','sourceLabel'])nonempty(d.practice[key]);url(d.practice.sourceUrl);assert.equal(d.practice.steps.length,3,id);
  for(const s of d.practice.steps){nonempty(s.title);nonempty(s.text);assert.equal(s.options.length,2,id);for(const o of s.options){nonempty(o.label);nonempty(o.reply);}assert.notEqual(s.options[0].reply,s.options[1].reply,id);}
  assert(d.sources.length>0,id);for(const s of d.sources){url(s.url);nonempty(s.label);nonempty(s.supports);}
}
const ordered=Object.fromEntries(expected.map(id=>[id,data[id]]));
const output='/* Contenus documentés le 19 octobre 2026. Généré depuis travel/adventures/*.json. */\nconst WORLD_ADVENTURES = '+JSON.stringify(ordered,null,2)+';\n';
const target=path.join(root,'world-adventure-data.js');
if(process.argv.includes('--check'))assert.equal(fs.readFileSync(target,'utf8'),output,'Rebuild world-adventure-data.js');else fs.writeFileSync(target,output);
console.log('PASS: 12 aventures, 36 lieux, 24 personnages, 48 variantes de dénouement et 72 réponses d’activités.');

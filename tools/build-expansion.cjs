/* Assembler les cinq nouvelles fiches et leurs médias sans toucher aux anciens identifiants. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const ids=['espagne','finlande','egypte','mongolie','senegal'],base=read('travel/escales-nouvelles.json'),photos=read('travel/new-photos.json'),places=read('travel/new-places.json');
assert.deepEqual(Object.keys(base).sort(),[...ids].sort());
for(const id of ids){
  const {stop,guide}=base[id],photo=photos.find(p=>p.id===id);
  assert.equal(stop.id,id);assert.equal(stop.q.length,3);assert.equal(guide.sections.length,4);assert.equal(guide.words.length,3);
  for(const q of stop.q){assert.equal(q[1].length,3);assert(Number.isInteger(q[2])&&q[2]>=0&&q[2]<3);assert(q[3].length>20);}
  assert(photo&&photo.author&&photo.license&&photo.licenseUrl&&photo.caption.length>30);assert(places[id]&&Number.isFinite(places[id].lat)&&Number.isFinite(places[id].lon));
}
const data={stops:ids.map(id=>base[id].stop),guides:Object.fromEntries(ids.map(id=>[id,base[id].guide])),photos:Object.fromEntries(photos.map(({id,...p})=>[id,p])),places};
const apply=`
function applyAtlasExpansion(){
  for(const stop of ATLAS_EXPANSION.stops){
    const id=stop.id;if(STOPS.some(s=>s.id===id))continue;
    STOPS.push(stop);GUIDES[id]=ATLAS_EXPANSION.guides[id];IMAGES[id]='./travel/adventures/art/'+id+'-atelier.webp';
    TRAVEL_PHOTOS[id]=ATLAS_EXPANSION.photos[id];TRAVEL_PLACES[id]=ATLAS_EXPANSION.places[id];
    const d=WORLD_ADVENTURES[id],scenes={};
    for(const key of ['begin','hands','voices','end','finish'])scenes[key]={title:d.title,text:d.intro,choices:[]};
    JOURNEYS[id]={title:d.title,goal:d.mission,person:d.characters[0].name,role:d.characters[0].role,hands:{title:d.clues[1].title,text:d.clues[1].text},voices:{title:d.clues[2].title,text:d.clues[2].text},scenes};
  }
}
`;
const output='/* Généré depuis travel/escales-nouvelles.json et les manifestes photos/lieux. Vérification : 1er novembre 2026. */\nconst ATLAS_EXPANSION = '+JSON.stringify(data,null,2)+';\n'+apply;
const target=path.join(root,'extra-stops.js');
if(process.argv.includes('--check'))assert.equal(fs.readFileSync(target,'utf8'),output,'Rebuild extra-stops.js');else fs.writeFileSync(target,output);
console.log('PASS: 5 nouvelles escales, 15 questions, fiches et crédits photographiques.');

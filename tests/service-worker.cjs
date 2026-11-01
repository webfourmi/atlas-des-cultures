/* Une mise à jour doit installer l’édition en ligne malgré un cache HTTP encore frais. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),origin='https://atlas.example/atlas-des-cultures/';
const html=fs.readFileSync(path.join(root,'index.html'),'utf8'),version=JSON.parse(fs.readFileSync(path.join(root,'version.json'),'utf8')).version;
const handlers={},buckets=new Map(),networkRequests=[];
const absolute=url=>new URL(typeof url==='string'?url:url.url,origin).href;
class SiteRequest extends Request {constructor(url,options){super(absolute(url),options);}}
const currentBody=url=>url.endsWith('/index.html')||url===origin?html:'current:'+url;
async function network(request){
  networkRequests.push(request);
  // Simule le cache HTTP qui, sans rechargement, renverrait encore les anciens fichiers.
  return new Response(request.cache==='reload'?currentBody(request.url):'ancienne édition : 13 escales');
}
const caches={
  async open(name){
    if(!buckets.has(name))buckets.set(name,new Map());const entries=buckets.get(name);
    return {
      async addAll(requests){const loaded=await Promise.all(requests.map(async r=>{const req=typeof r==='string'?new SiteRequest(r):r;return [req.url,await network(req)];}));for(const [key,response] of loaded)entries.set(key,response);},
      async match(request){return entries.get(absolute(request))?.clone();}
    };
  },
  async keys(){return [...buckets.keys()];},
  async delete(key){return buckets.delete(key);},
  async match(request){for(const entries of buckets.values()){const response=entries.get(absolute(request));if(response)return response.clone();}}
};
let claimed=0,skipped=0;
const self={location:{origin:new URL(origin).origin},clients:{claim:async()=>claimed++},skipWaiting:()=>skipped++,addEventListener:(name,fn)=>handlers[name]=fn};
vm.runInNewContext(fs.readFileSync(path.join(root,'sw.js'),'utf8'),{self,caches,Request:SiteRequest,Response,URL,fetch:async()=>{throw Error('hors connexion');}});
async function event(name,data={}){let pending;handlers[name]({...data,waitUntil:p=>pending=p,respondWith:p=>pending=p});return await pending;}
(async()=>{
  buckets.set('atlas-cultures-v5.1.0',new Map([[origin+'index.html',new Response('13 escales')]]));
  buckets.set('another-application',new Map());
  await event('install');assert.equal(skipped,0,'Installation activated without consent');
  const installed=await caches.open('atlas-cultures-v'+version),page=await installed.match('./index.html');
  assert.equal(await page.text(),html,'The new cache retained the previous HTML edition');
  for(const file of ['extra-stops.js','world-adventure-data.js','discovery-workshops.js'])assert.equal(await (await installed.match('./'+file)).text(),'current:'+origin+file);
  assert(networkRequests.length>100);assert(networkRequests.every(r=>r.cache==='reload'));
  for(const request of networkRequests){const file=decodeURIComponent(new URL(request.url).pathname.slice(new URL(origin).pathname.length))||'index.html';assert(fs.existsSync(path.join(root,file)),'Missing offline resource '+file);}
  handlers.message({data:{type:'SKIP_WAITING'}});assert.equal(skipped,1);
  await event('activate');assert.equal(claimed,1);assert(!buckets.has('atlas-cultures-v5.1.0'));assert(buckets.has('another-application'));
  const navigation=await event('fetch',{request:{method:'GET',url:origin,mode:'navigate'}});assert.equal(await navigation.text(),html,'Offline navigation returned the old edition');
  const asset=await event('fetch',{request:new SiteRequest('./extra-stops.js')});assert.equal(await asset.text(),'current:'+origin+'extra-stops.js');
  console.log('PASS: nouvelle édition installée malgré un cache HTTP ancien, fichiers et navigation hors connexion actualisés, activation consentie et caches étrangers conservés.');
})().catch(error=>{console.error(error);process.exitCode=1});

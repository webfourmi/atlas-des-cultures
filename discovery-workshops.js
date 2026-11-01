/* Découvertes visuelles libres, dessinées en SVG à partir des choix du carnet. */
'use strict';
function discoveryPersonalCard(id,a){
  const c=a.practiceChoices,step=a.screen==='ending'?2:a.practiceStep;
  const cards={
    espagne:{title:'Mon invitation au flamenco',first:['La voix','La guitare'],second:['Un geste à dessiner','Un cercle pour se retrouver'],last:[['Qu’aimerais-tu','découvrir ?'],['Prends place','avec nous']],color:'#b45e45'},
    finlande:{title:'Ma carte d’accueil',first:['Une maison parmi les arbres','Une porte dans le quartier'],second:['Un banc pour la conversation','Une page pour dessiner'],last:[['Entre,','on prend le temps'],['Quel souvenir','apportes-tu ?']],color:'#507f78'},
    senegal:{title:'Mon invitation au repas',first:['À l’entrée','Près du repas'],second:['Des préparations variées','Des savoirs à transmettre'],last:[['Prenons le temps','de découvrir'],['Une place','pour ton histoire']],color:'#b9763e'}
  },d=cards[id];
  const first=c[0]===null?'Un premier détail à choisir':d.first[c[0]],second=step===0?'':c[1]===null?'Un souvenir à choisir':d.second[c[1]],last=step<2||c[2]===null?['Un mot d’accueil','à inventer']:d.last[c[2]];
  let motif='';
  if(id==='espagne')motif=c[0]===0?'<path d="M190 61q-18 16-9 37l-9 10m42-47q18 16 9 37l9 10M200 62v43" fill="none" stroke="currentColor" stroke-width="4"/><ellipse cx="200" cy="55" rx="7" ry="11" fill="currentColor"/><path d="M192 106h16m-8-1v13m-14 0h28" stroke="currentColor" stroke-width="3"/>':'<g transform="rotate(24 198 90)"><path d="M192 86C182 81 176 85 178 93C180 100 170 104 171 115C173 133 198 139 213 127C225 117 220 106 211 102C204 98 209 90 204 86C200 82 197 84 192 86Z" fill="#d7ac64" stroke="currentColor" stroke-width="3"/><path d="M195 57h8v40h-8Z" fill="#af7950" stroke="currentColor" stroke-width="2"/><rect x="193" y="45" width="12" height="16" rx="3" fill="#c69258" stroke="currentColor" stroke-width="2"/><circle cx="197" cy="109" r="7" fill="currentColor"/><path d="M195 59v62m4-62v62m-13 1h24" stroke="#f9eccf" stroke-width="1.5"/></g>';
  if(id==='finlande')motif='<path d="M154 91l28-26 28 26v31h-56Z" fill="#d8b684" stroke="currentColor" stroke-width="3"/><path d="M165 122V99h14v23" fill="#faf1db" stroke="currentColor" stroke-width="2"/>'+(c[0]===0?'<path d="M226 120V71m-16 15 16-28 16 28m-32 13 16-26 16 26" stroke="currentColor" stroke-width="3" fill="none"/>':'<path d="M216 122V76h24v46m-17-33h5m4 0h5m-14 12h5m4 0h5" stroke="currentColor" stroke-width="3" fill="#e9dcc2"/>');
  if(id==='senegal')motif='<ellipse cx="200" cy="101" rx="62" ry="24" fill="#faf0d7" stroke="currentColor" stroke-width="3"/><ellipse cx="200" cy="99" rx="51" ry="17" fill="#dcaa63"/><path d="M175 100q21-20 41 0-20 18-41 0l-10-7v14Z" fill="#9c7953"/><path d="M187 86l-6 11m43 5 9-8" stroke="#d27942" stroke-width="6" stroke-linecap="round"/>';
  const circle=c[1]===1?'stroke-dasharray="5 5"':'';
  return `<figure class="discovery-drawing"><svg xmlns="http://www.w3.org/2000/svg" class="discovery-canvas" viewBox="0 0 400 260" width="800" height="520" role="img" aria-label="${esc(d.title+' : '+first+(second?', '+second:'')+'. '+last.join(' '))}" style="color:${d.color}"><rect width="400" height="260" rx="14" fill="#f8eed8"/><rect x="14" y="12" width="372" height="236" rx="10" fill="#fffaf0" stroke="currentColor" stroke-width="2" ${circle}/><text x="200" y="38" text-anchor="middle" font-family="Georgia,serif" font-size="18" fill="currentColor">${esc(d.title)}</text>${motif}<text x="200" y="149" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#173e43">${esc(first)}</text><text x="200" y="171" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#4b625a">${esc(second)}</text><path d="M120 186h160" stroke="currentColor" opacity=".4"/><text x="200" y="210" text-anchor="middle" font-family="Georgia,serif" font-size="19" fill="currentColor">${esc(last[0])}</text><text x="200" y="233" text-anchor="middle" font-family="Georgia,serif" font-size="19" fill="currentColor">${esc(last[1])}</text></svg><figcaption>Ta carte personnelle se compose au fil de tes choix.</figcaption></figure>`;
}
function discoveryWorkshopArt(id,a){
  if(['espagne','finlande','senegal'].includes(id))return discoveryPersonalCard(id,a);
  const step=a.screen==='ending'?2:a.practiceStep,c=a.practiceChoices;
  let drawing='',caption='',label='';
  if(id==='egypte'){
    const color=c[0]===null?'#9bafa8':c[0]===0?'#346f83':'#ae694c',rows=c[1]===1?2:1,frame=c[2]===1&&step===2?'#584338':'#c8ac80';
    drawing=`<rect x="21" y="15" width="358" height="230" rx="13" fill="${frame}"/><rect x="40" y="32" width="320" height="195" fill="#f1dfb7"/>`;
    for(let x=48;x<354;x+=12)drawing+=`<path d="M${x} 32V227" stroke="#cfb582" stroke-width="6"/>`;
    for(let r=0;r<15;r++){
      const y=39+r*12,ink=step>0&&Math.floor(r/rows)%2===0?'#faf0d5':color;
      drawing+=`<path d="M40 ${y}H360" stroke="${ink}" stroke-width="8"/>`;
      for(let col=0;col<26;col++)if((col+r)%2===0)drawing+=`<path d="M${48+col*12} ${y-4}v8" stroke="#ead1a0" stroke-width="5"/>`;
    }
    caption='Ton motif personnel · les couleurs et les bandes suivent tes choix.';label='Un échantillon tissé inventé, composé de fils qui se croisent et de bandes colorées.';
  }else{
    const wood=c[0]===1?'#70503e':'#c59a63',felt=c[1]===1?'#d9ac69':'#f5ebd0',covered=step>0;
    drawing='<rect width="400" height="260" fill="#e5eee0"/><path d="M0 210Q200 177 400 211V260H0Z" fill="#b9c99e"/><ellipse cx="200" cy="213" rx="151" ry="17" fill="#607961" opacity=".14"/>';
    drawing+=`<path d="M65 124L200 52L335 124V210Q200 230 65 210Z" fill="${covered?felt:'#efe8d2'}" stroke="${wood}" stroke-width="5"/>`;
    if(!covered){for(let i=0;i<9;i++){const x=65+i*34;drawing+=`<path d="M${x} 129l81 81M${x} 210l81-81" stroke="${wood}" stroke-width="3" clip-path="url(#ger-wall)"/>`;}drawing+=`<path d="M200 52L65 124M200 52L132 132M200 52V134M200 52L268 132M200 52L335 124" fill="none" stroke="${wood}" stroke-width="4"/>`;}
    drawing+=`<path d="M65 124Q200 148 335 124" fill="none" stroke="${wood}" stroke-width="4"/><rect x="175" y="157" width="50" height="62" rx="3" fill="${wood}"/><path d="M200 164v51" stroke="#ead9b7" stroke-width="2"/><ellipse cx="200" cy="53" rx="22" ry="8" fill="#efe4c9" stroke="${wood}" stroke-width="4"/>`;
    if(step===2){const ys=c[2]===1?[150,175,200]:[155,193];for(const y of ys)drawing+=`<path d="M66 ${y}Q200 ${y+20} 334 ${y}" stroke="#976347" stroke-width="${c[2]===1?4:7}" fill="none"/>`;}
    caption='Ta maquette libre · une image simplifiée, sans valeur de plan de montage.';label='Une maquette libre de ger : structure en bois, enveloppe de feutre et bandes extérieures selon tes choix.';
  }
  return `<figure class="discovery-drawing"><svg xmlns="http://www.w3.org/2000/svg" class="discovery-canvas" viewBox="0 0 400 260" width="800" height="520" role="img" aria-label="${label}"><defs><clipPath id="ger-wall"><path d="M67 128Q200 148 333 128V209Q200 229 67 209Z"/></clipPath></defs>${drawing}</svg><figcaption>${caption}</figcaption></figure>`;
}

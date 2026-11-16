const tabs=[...document.querySelectorAll('[data-tab]')];let current=0;
const tips=['Koken kun jij leren.', 'Een goed plan maakt koken makkelijker.', 'Leg alles klaar voordat je begint.', 'Begin eenvoudig en werk stap voor stap.', 'Rustig werken is ook goed werken.', 'Je bent pas klaar als de keuken weer netjes is.', 'Laat zien wat jij hebt gedaan.', 'Schrijf kort op wat je gaat doen en hebt geleerd.'];
function show(n,focus=false){current=Math.max(0,Math.min(tabs.length-1,n));tabs.forEach((b,i)=>{b.setAttribute('aria-selected',i===current);b.tabIndex=i===current?0:-1;document.getElementById('pane'+i).hidden=i!==current});document.getElementById('tip').textContent=tips[current];document.getElementById('step').textContent=(current+1)+' / '+tabs.length;document.getElementById('prev').hidden=current===0;document.getElementById('next').hidden=current===tabs.length-1;if(focus)tabs[current].focus()}
tabs.forEach((b,i)=>{b.addEventListener('click',()=>show(i));b.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();show(e.key==='Home'?0:e.key==='End'?tabs.length-1:i+(e.key==='ArrowRight'?1:-1),true)}})});
if(tabs.length){document.getElementById('prev').onclick=()=>show(current-1,true);document.getElementById('next').onclick=()=>show(current+1,true);show(0)}
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',x===b)});document.querySelectorAll('[data-place]').forEach(c=>c.hidden=b.dataset.filter!=='alle'&&b.dataset.filter!==c.dataset.place)});
const template=`KOOKOPDRACHT 01 - K0877
Naam:
Datum:

MIJN PLAN
Recept en bron:
Aantal personen: 2
Dieetwensen en afspraken:
Materialen:

BOODSCHAPPEN EN KOSTEN
Ingrediënt | Hoeveelheid | Verpakkingsprijs | Kosten gebruikte hoeveelheid

Totaal gebruikte ingrediënten:
Kosten per persoon (totaal / 2):
Werkelijke aanschafkosten:

WERKPLANNING
Stap | Begintijd | Benodigde tijd

ZELFSTANDIG OEFENEN
Wat heb ik geoefend of herhaald?
Wat ging daarna beter?
Werkelijk bestede tijd per activiteit:

RESULTAAT
Mijn drie bewijsfoto's staan bij:
Feedback van:
Dit ging goed:
Dit doe ik volgende keer anders:
Dit kan ik nu zelfstandig:
`;
const work=document.getElementById('work');if(work){work.value=template;document.getElementById('template').onclick=()=>{if(work.value===template||confirm('Je huidige tekst vervangen door het lege sjabloon?'))work.value=template};document.getElementById('download').onclick=()=>{const url=URL.createObjectURL(new Blob([work.value],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='K0877-01-mijn-kookopdracht.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}}

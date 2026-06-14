"use strict";
(function(){
const RM=(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches);

/* ===== i18n ===== */
const I18N={
  ru:{perSec:"ДОБЫЧА",sec:"с",multLabel:"МНОЖИТЕЛЬ",resetConfirm:"Сбросить весь прогресс?",depth:"ГЛУБИНА",layer:"Слой",tapHint:"ТАПАЙ ПО БЛОКУ",
    drills:"ИНСТРУМЕНТЫ · СОЕДИНЯЙ ОДИНАКОВЫЕ",buyDrill:"Купить",boost:"Буст ×5",deeper:"Глубже",
    welcomeBack:"С ВОЗВРАЩЕНИЕМ!",offlineDesc:"Пока вас не было, инструменты добывали золото.",
    collectX2:"Забрать ×2",collect:"Забрать",toCore:"К ЯДРУ!",
    prestigeDesc:"Сбросить прогресс и получить осколки. Каждый осколок даёт +20% к добыче навсегда.",
    descend:"Спуститься",later:"Позже",settings:"НАСТРОЙКИ",langLabel:"Язык",soundLabel:"Звук",musicLabel:"Музыка",
    on:"Вкл",off:"Выкл",close:"Закрыть",reset:"Сбросить прогресс",adLoading:"РЕКЛАМА…",ad:"РЕКЛАМА",
    title:"ЗОЛОТАЯ ЖИЛА",loading:"ЗАГРУЗКА",boardFull:"Поле полное — соедини инструменты!",
    needGold:"Мало золота",boosted:"Буст ×5 на 60 секунд!",deepDone:"Новый слой! Добыча ×2",
    confirmReset:"Сбросить весь прогресс?",combo:"КОМБО",broke:"+БОНУС!",dailyChest:"Сундук",quests:"Задания",questsTitle:"ЗАДАНИЯ",chestTitle:"ЕЖЕДНЕВНЫЙ СУНДУК",chestDesc:"Заходи каждый день за наградой!",chestWait:"Сундук готов через",h:"ч",m:"м",qBreak:"Разбей {n} блоков",qMerge:"Объедини инструменты {n} раз",qBuy:"Купи {n} дрелей",qTap:"Тапни {n} раз",qDeeper:"Спустись глубже {n} раз"},
  en:{perSec:"MINING",sec:"s",multLabel:"MULTIPLIER",resetConfirm:"Reset all progress?",depth:"DEPTH",layer:"Layer",tapHint:"TAP THE BLOCK",
    drills:"TOOLS · MERGE MATCHING ONES",buyDrill:"Buy",boost:"Boost ×5",deeper:"Deeper",
    welcomeBack:"WELCOME BACK!",offlineDesc:"Your tools kept mining while you were away.",
    collectX2:"Collect ×2",collect:"Collect",toCore:"TO THE CORE!",
    prestigeDesc:"Reset for shards. Each shard gives +20% mining forever.",
    descend:"Descend",later:"Later",settings:"SETTINGS",langLabel:"Language",soundLabel:"Sound",musicLabel:"Music",
    on:"On",off:"Off",close:"Close",reset:"Reset progress",adLoading:"AD…",ad:"AD",
    title:"GOLD VEIN",loading:"LOADING",boardFull:"Board full — merge your tools!",
    needGold:"Not enough gold",boosted:"Boost ×5 for 60 seconds!",deepDone:"New layer! Mining ×2",
    confirmReset:"Reset all progress?",combo:"COMBO",broke:"+BONUS!",dailyChest:"Chest",quests:"Quests",questsTitle:"QUESTS",chestTitle:"DAILY CHEST",chestDesc:"Come back every day for a reward!",chestWait:"Chest ready in",h:"h",m:"m",qBreak:"Break {n} blocks",qMerge:"Merge tools {n} times",qBuy:"Buy {n} drills",qTap:"Tap {n} times",qDeeper:"Go deeper {n} times"},
  tr:{perSec:"KAZI",sec:"sn",multLabel:"ÇARPAN",resetConfirm:"Tüm ilerleme sıfırlansın mı?",depth:"DERİNLİK",layer:"Katman",tapHint:"BLOĞA DOKUN",
    drills:"ALETLER · AYNILARI BİRLEŞTİR",buyDrill:"Al",boost:"Güç ×5",deeper:"Daha derin",
    welcomeBack:"TEKRAR HOŞ GELDİN!",offlineDesc:"Sen yokken aletler altın kazdı.",
    collectX2:"×2 topla",collect:"Topla",toCore:"ÇEKİRDEĞE!",
    prestigeDesc:"Sıfırla ve kırık kazan. Her kırık kalıcı +%20 kazı verir.",
    descend:"İn",later:"Sonra",settings:"AYARLAR",langLabel:"Dil",soundLabel:"Ses",musicLabel:"Müzik",
    on:"Açık",off:"Kapalı",close:"Kapat",reset:"Sıfırla",adLoading:"REKLAM…",ad:"REKLAM",
    title:"ALTIN DAMAR",loading:"YÜKLENİYOR",boardFull:"Alan dolu — aletleri birleştir!",
    needGold:"Yeterli altın yok",boosted:"60 saniye ×5 güç!",deepDone:"Yeni katman! Kazı ×2",
    confirmReset:"Tüm ilerleme sıfırlansın mı?",combo:"KOMBO",broke:"+BONUS!",dailyChest:"Sandık",quests:"Görevler",questsTitle:"GÖREVLER",chestTitle:"GÜNLÜK SANDIK",chestDesc:"Ödül için her gün gel!",chestWait:"Sandık hazır olacak",h:"s",m:"d",qBreak:"{n} blok kır",qMerge:"Aletleri {n} kez birleştir",qBuy:"{n} matkap al",qTap:"{n} kez dokun",qDeeper:"{n} kez derine in"},
  es:{perSec:"MINERÍA",sec:"s",multLabel:"MULTIPLICADOR",resetConfirm:"¿Reiniciar todo el progreso?",depth:"PROFUNDIDAD",layer:"Capa",tapHint:"TOCA EL BLOQUE",
    drills:"HERRAMIENTAS · COMBINA LAS IGUALES",buyDrill:"Comprar",boost:"Impulso ×5",deeper:"Más hondo",
    welcomeBack:"¡BIENVENIDO DE NUEVO!",offlineDesc:"Tus herramientas siguieron minando mientras no estabas.",
    collectX2:"Cobrar ×2",collect:"Cobrar",toCore:"¡AL NÚCLEO!",
    prestigeDesc:"Reinicia para obtener fragmentos. Cada fragmento da +20% de minería para siempre.",
    descend:"Descender",later:"Después",settings:"AJUSTES",langLabel:"Idioma",soundLabel:"Sonido",musicLabel:"Música",
    on:"Sí",off:"No",close:"Cerrar",reset:"Reiniciar progreso",adLoading:"ANUNCIO…",ad:"ANUNCIO",
    title:"VETA DE ORO",loading:"CARGANDO",boardFull:"¡Tablero lleno — combina tus herramientas!",
    needGold:"Oro insuficiente",boosted:"¡Impulso ×5 por 60 segundos!",deepDone:"¡Nueva capa! Minería ×2",
    confirmReset:"¿Reiniciar todo el progreso?",combo:"COMBO",broke:"¡+BONO!",dailyChest:"Cofre",quests:"Misiones",questsTitle:"MISIONES",chestTitle:"COFRE DIARIO",chestDesc:"¡Vuelve cada día por una recompensa!",chestWait:"Cofre listo en",h:"h",m:"m",qBreak:"Rompe {n} bloques",qMerge:"Combina herramientas {n} veces",qBuy:"Compra {n} taladros",qTap:"Toca {n} veces",qDeeper:"Baja más hondo {n} veces"},
  de:{perSec:"ABBAU",sec:"s",multLabel:"MULTIPLIKATOR",resetConfirm:"Gesamten Fortschritt zurücksetzen?",depth:"TIEFE",layer:"Schicht",tapHint:"TIPPE AUF DEN BLOCK",
    drills:"WERKZEUGE · GLEICHE KOMBINIEREN",buyDrill:"Kaufen",boost:"Boost ×5",deeper:"Tiefer",
    welcomeBack:"WILLKOMMEN ZURÜCK!",offlineDesc:"Deine Werkzeuge haben weiter Gold abgebaut.",
    collectX2:"×2 holen",collect:"Holen",toCore:"ZUM KERN!",
    prestigeDesc:"Zurücksetzen für Splitter. Jeder Splitter gibt für immer +20% Abbau.",
    descend:"Absteigen",later:"Später",settings:"EINSTELLUNGEN",langLabel:"Sprache",soundLabel:"Ton",musicLabel:"Musik",
    on:"An",off:"Aus",close:"Schließen",reset:"Fortschritt zurücksetzen",adLoading:"WERBUNG…",ad:"WERBUNG",
    title:"GOLDADER",loading:"LÄDT",boardFull:"Feld voll — kombiniere deine Werkzeuge!",
    needGold:"Nicht genug Gold",boosted:"Boost ×5 für 60 Sekunden!",deepDone:"Neue Schicht! Abbau ×2",
    confirmReset:"Gesamten Fortschritt zurücksetzen?",combo:"COMBO",broke:"+BONUS!",dailyChest:"Truhe",quests:"Aufgaben",questsTitle:"AUFGABEN",chestTitle:"TÄGLICHE TRUHE",chestDesc:"Komm jeden Tag für eine Belohnung!",chestWait:"Truhe bereit in",h:"Std",m:"Min",qBreak:"Zerschlage {n} Blöcke",qMerge:"Kombiniere Werkzeuge {n} mal",qBuy:"Kaufe {n} Bohrer",qTap:"Tippe {n} mal",qDeeper:"Steige {n} mal tiefer"},
  ky:{perSec:"КАЗУУ",sec:"сек",multLabel:"КӨБӨЙТКҮЧ",resetConfirm:"Бардык прогрессти тазалайсызбы?",depth:"ТЕРЕҢДИК",layer:"Катмар",tapHint:"БЛОКТУ БАС",
    drills:"КУРАЛДАР · ОКШОШТОРУН БИРИКТИР",buyDrill:"Сатып алуу",boost:"Күч ×5",deeper:"Тереңирээк",
    welcomeBack:"КАЙРА КОШ КЕЛИҢИЗ!",offlineDesc:"Сиз жокто куралдар алтын казып жатты.",
    collectX2:"×2 алуу",collect:"Алуу",toCore:"ӨЗӨГҮНӨ!",
    prestigeDesc:"Сыныктар үчүн тазалаңыз. Ар бир сыныкка түбөлүк +20% казуу.",
    descend:"Түшүү",later:"Кийин",settings:"ЖӨНДӨӨЛӨР",langLabel:"Тил",soundLabel:"Үн",musicLabel:"Музыка",
    on:"Күйүк",off:"Өчүк",close:"Жабуу",reset:"Прогрессти тазалоо",adLoading:"ЖАРНАК…",ad:"ЖАРНАК",
    title:"АЛТЫН ТАМЫР",loading:"ЖҮКТӨЛҮҮДӨ",boardFull:"Талаа толду — куралдарды бириктир!",
    needGold:"Алтын жетишсиз",boosted:"60 секунд ×5 күч!",deepDone:"Жаңы катмар! Казуу ×2",
    confirmReset:"Бардык прогрессти тазалайсызбы?",combo:"КОМБО",broke:"+БОНУС!",dailyChest:"Сандык",quests:"Тапшырмалар",questsTitle:"ТАПШЫРМАЛАР",chestTitle:"КҮНДӨЛҮК САНДЫК",chestDesc:"Сыйлык үчүн күн сайын кел!",chestWait:"Сандык даяр болот",h:"с",m:"м",qBreak:"{n} блок талкала",qMerge:"Куралдарды {n} жолу бириктир",qBuy:"{n} бургу сатып ал",qTap:"{n} жолу бас",qDeeper:"{n} жолу тереңирээк түш"},
  fr:{perSec:"EXTRACTION",sec:"s",multLabel:"MULTIPLICATEUR",resetConfirm:"Réinitialiser toute la progression ?",depth:"PROFONDEUR",layer:"Couche",tapHint:"TAPE SUR LE BLOC",
    drills:"OUTILS · COMBINE LES IDENTIQUES",buyDrill:"Acheter",boost:"Boost ×5",deeper:"Plus profond",
    welcomeBack:"BON RETOUR !",offlineDesc:"Tes outils ont continué à creuser en ton absence.",
    collectX2:"Récolter ×2",collect:"Récolter",toCore:"VERS LE NOYAU !",
    prestigeDesc:"Réinitialise pour des éclats. Chaque éclat donne +20% d'extraction pour toujours.",
    descend:"Descendre",later:"Plus tard",settings:"PARAMÈTRES",langLabel:"Langue",soundLabel:"Son",musicLabel:"Musique",
    on:"Oui",off:"Non",close:"Fermer",reset:"Réinitialiser",adLoading:"PUB…",ad:"PUB",
    title:"FILON D'OR",loading:"CHARGEMENT",boardFull:"Plateau plein — combine tes outils !",
    needGold:"Pas assez d'or",boosted:"Boost ×5 pendant 60 secondes !",deepDone:"Nouvelle couche ! Extraction ×2",
    confirmReset:"Réinitialiser toute la progression ?",combo:"COMBO",broke:"+BONUS !",dailyChest:"Coffre",quests:"Quêtes",questsTitle:"QUÊTES",chestTitle:"COFFRE QUOTIDIEN",chestDesc:"Reviens chaque jour pour une récompense !",chestWait:"Coffre prêt dans",h:"h",m:"min",qBreak:"Casse {n} blocs",qMerge:"Combine des outils {n} fois",qBuy:"Achète {n} foreuses",qTap:"Tape {n} fois",qDeeper:"Descends {n} fois plus profond"}
};
let LANG="ru";
const t=k=>(I18N[LANG]&&I18N[LANG][k])||I18N.ru[k]||k;
function applyI18n(){ document.documentElement.lang=LANG; document.querySelectorAll("[data-i]").forEach(el=>{ el.textContent=t(el.getAttribute("data-i")); }); }

/* ===== storage ===== */
const SAVE_KEY="goldvein_save_v1"; let memStore=null;
function lsGet(){ try{return localStorage.getItem(SAVE_KEY);}catch(e){return memStore;} }
function lsSet(v){ try{localStorage.setItem(SAVE_KEY,v);}catch(e){memStore=v;} }
function lsDel(){ try{localStorage.removeItem(SAVE_KEY);}catch(e){} memStore=null; }

/* ===== Yandex SDK ===== */
const Y={ sdk:null,player:null,
  async init(){ if(window.__noYaSDK||typeof window.YaGames==="undefined") return;
    try{ this.sdk=await window.YaGames.init();
      try{ const l=this.sdk.environment.i18n.lang; if(I18N[l]) LANG=l; }catch(e){}
      try{ this.player=await this.sdk.getPlayer({scopes:false}); }catch(e){}
    }catch(e){ this.sdk=null; } },
  loadingReady(){ try{ this.sdk&&this.sdk.features.LoadingAPI.ready(); }catch(e){} },
  gameStart(){ try{ this.sdk&&this.sdk.features.GameplayAPI.start(); }catch(e){} },
  gameStop(){ try{ this.sdk&&this.sdk.features.GameplayAPI.stop(); }catch(e){} },
  async cloudSave(s){ if(this.player&&this.player.setData){ try{ await this.player.setData({s},true); return true; }catch(e){} } return false; },
  async cloudLoad(){ if(this.player&&this.player.getData){ try{ const d=await this.player.getData(["s"]); return d&&d.s||null; }catch(e){} } return null; },
  requestFullscreen(){
    try{
      if(this.sdk&&this.sdk.screen&&this.sdk.screen.fullscreen&&this.sdk.screen.fullscreen.status!=="on"){
        this.sdk.screen.fullscreen.request(); return;
      }
    }catch(e){}
    try{
      const d=document.documentElement;
      if(!document.fullscreenElement){
        if(d.requestFullscreen) d.requestFullscreen().catch(()=>{});
        else if(d.webkitRequestFullscreen) d.webkitRequestFullscreen();
      }
    }catch(e){}
  }
};
const adv=document.getElementById("adv"); let adBusy=false;
function showAd(type,onReward){ if(adBusy) return; adBusy=true; Audio.muteFor(true); Game.running=false; Y.gameStop();
  const finish=r=>{ adv.classList.remove("show"); Audio.muteFor(false); Game.lastTick=performance.now(); Game.running=true; Y.gameStart(); adBusy=false; if(r&&onReward) onReward(); };
  if(Y.sdk){ if(type==="reward"){ let got=false;
      try{ Y.sdk.adv.showRewardedVideo({callbacks:{onRewarded:()=>{got=true;},onClose:()=>finish(got),onError:()=>finish(false)}}); }catch(e){ finish(false); } }
    else { try{ Y.sdk.adv.showFullscreenAdv({callbacks:{onClose:()=>finish(false),onError:()=>finish(false)}}); }catch(e){ finish(false); } } }
  else { adv.classList.add("show"); setTimeout(()=>finish(type==="reward"),750); } }

/* ===== audio (cartoony) ===== */
const Audio={ ctx:null,on:true,muted:false,
  ensure(){ if(!this.ctx){ try{ this.ctx=new (window.AudioContext||window.webkitAudioContext)(); }catch(e){} } },
  muteFor(v){ this.muted=v; },
  blip(f,d,type,vol){ if(!this.on||this.muted) return; this.ensure(); if(!this.ctx) return;
    try{ if(this.ctx.state==="suspended") this.ctx.resume();
      const o=this.ctx.createOscillator(),g=this.ctx.createGain(); o.type=type||"square"; o.frequency.value=f; g.gain.value=vol||0.05;
      o.connect(g); g.connect(this.ctx.destination); const n=this.ctx.currentTime;
      g.gain.setValueAtTime(vol||0.05,n); g.gain.exponentialRampToValueAtTime(0.0001,n+(d||0.1)); o.start(n); o.stop(n+(d||0.1)); }catch(e){} },
  slide(f1,f2,d,vol){ if(!this.on||this.muted) return; this.ensure(); if(!this.ctx) return;
    try{ const o=this.ctx.createOscillator(),g=this.ctx.createGain(); o.type="square";
      o.connect(g); g.connect(this.ctx.destination); const n=this.ctx.currentTime;
      o.frequency.setValueAtTime(f1,n); o.frequency.exponentialRampToValueAtTime(f2,n+d);
      g.gain.setValueAtTime(vol||0.05,n); g.gain.exponentialRampToValueAtTime(0.0001,n+d); o.start(n); o.stop(n+d); }catch(e){} },
  tap(p){ this.blip(240+(p||0)*10+Math.random()*40,0.06,"square",0.04); },
  buy(){ this.slide(300,500,0.12,0.05); },
  merge(){ this.slide(400,800,0.16,0.05); },
  broke(){ this.slide(700,180,0.2,0.06); },
  reward(){ this.blip(523,0.1,"square",0.06); setTimeout(()=>this.blip(784,0.14,"square",0.06),100); setTimeout(()=>this.blip(1046,0.16,"square",0.06),200); }
};

/* ===== background music (procedural chiptune loop, no assets) ===== */
const Music={ on:true, playing:false, ctx:null, timer:0, nextTime:0, step:0, tempo:0.20, base:261.63,
  // cheerful pentatonic-ish melody (semitone offsets), -99 = rest
  mel:[0,4,7,12,7,4,0,-99, 5,9,12,9,5,0,-99,-99, 7,4,0,4,7,12,7,4, 0,-99,7,-99,4,-99,0,-99],
  bass:[0,-99,-99,-99,-5,-99,-99,-99,-3,-99,-99,-99,-5,-99,-99,-99],
  f(s){ return this.base*Math.pow(2,s/12); },
  start(){ if(this.playing||!this.on) return; Audio.ensure(); this.ctx=Audio.ctx; if(!this.ctx) return;
    try{ if(this.ctx.state==="suspended") this.ctx.resume(); }catch(e){}
    this.playing=true; this.nextTime=this.ctx.currentTime+0.08; this.step=0;
    this.timer=setInterval(()=>this.sched(),30); },
  stop(){ this.playing=false; clearInterval(this.timer); },
  sched(){ if(!this.ctx||Audio.muted) return; while(this.nextTime<this.ctx.currentTime+0.12){ this.tick(this.nextTime); this.nextTime+=this.tempo; this.step=(this.step+1)%this.mel.length; } },
  tick(time){ const m=this.mel[this.step]; if(m>-99) this.voice(this.f(m),time,this.tempo*0.85,"square",0.026);
    const b=this.bass[this.step%this.bass.length]; if(b>-99) this.voice(this.f(b-12),time,this.tempo*1.6,"triangle",0.03);
    if(this.step%2===0){ this.voice(this.f((m>-99?m:0)+24),time,0.04,"square",0.008); } },
  voice(f,time,dur,type,vol){ try{ const o=this.ctx.createOscillator(),g=this.ctx.createGain();
    o.type=type; o.frequency.value=f; o.connect(g); g.connect(this.ctx.destination);
    g.gain.setValueAtTime(0,time); g.gain.linearRampToValueAtTime(vol,time+0.015); g.gain.exponentialRampToValueAtTime(0.0001,time+dur);
    o.start(time); o.stop(time+dur+0.03); }catch(e){} }
};

/* ===== format ===== */
const UNITS=["","K","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc"];
function fmt(n){ if(!isFinite(n)) return "∞";
  if(n<1000){ return (n<10&&n%1!==0)? n.toFixed(1):Math.floor(n).toString(); }
  let u=0; while(n>=1000&&u<UNITS.length-1){ n/=1000; u++; }
  return (n<10?n.toFixed(2):n<100?n.toFixed(1):Math.floor(n).toString())+UNITS[u]; }

/* ===== PIXEL TEXTURE GENERATOR (all original) ===== */
function rng(seed){ let s=seed>>>0||1; return ()=>{ s=(s*1664525+1013904223)>>>0; return s/4294967296; }; }
function cvs(w,h){ const c=document.createElement("canvas"); c.width=w; c.height=h; return c; }
function makeTex(grid,base,specks,seed){
  const c=cvs(grid,grid),x=c.getContext("2d"),r=rng(seed);
  x.fillStyle=base; x.fillRect(0,0,grid,grid);
  for(let i=0;i<grid;i++)for(let j=0;j<grid;j++){ const v=r(); let a=0;
    for(const sp of specks){ a+=sp.p; if(v<a){ x.fillStyle=sp.c; x.fillRect(i,j,1,1); break; } } }
  return "url("+c.toDataURL()+")";
}
function makeOre(){ // gold ore block: stone base + gold nuggets + bevel
  const g=16,c=cvs(g,g),x=c.getContext("2d"),r=rng(777);
  x.fillStyle="#8e8e96"; x.fillRect(0,0,g,g);
  for(let i=0;i<g;i++)for(let j=0;j<g;j++){ const v=r();
    if(v<0.18){x.fillStyle="#6e6e78";x.fillRect(i,j,1,1);} else if(v<0.30){x.fillStyle="#a6a6ae";x.fillRect(i,j,1,1);} }
  // gold nuggets clusters
  const nug=[[3,4],[4,4],[3,5],[10,3],[11,3],[10,4],[6,9],[7,9],[7,10],[12,11],[12,12],[11,12],[2,11],[8,5]];
  for(const[a,b]of nug){ x.fillStyle="#ffd93d"; x.fillRect(a,b,1,1); x.fillStyle="#fff09a"; x.fillRect(a,b,1,1);
    x.fillStyle="#d99416"; if(a+1<g)x.fillRect(a+1,b,1,1); if(b+1<g)x.fillRect(a,b+1,1,1); x.fillStyle="#ffd93d"; x.fillRect(a,b,1,1); }
  return "url("+c.toDataURL()+")";
}
function makeCracks(){ // 4 crack stages stacked horizontally -> we make ONE with full cracks, fade by opacity via stages array
  // generate 4 separate textures returned as array
  const stages=[]; const g=16;
  let segs=[];
  function line(x0,y0,x1,y1,xctx){ let dx=Math.abs(x1-x0),dy=Math.abs(y1-y0),sx=x0<x1?1:-1,sy=y0<y1?1:-1,err=dx-dy,cx=x0,cy=y0;
    while(true){ xctx.fillRect(cx,cy,1,1); if(cx===x1&&cy===y1) break; const e2=2*err; if(e2>-dy){err-=dy;cx+=sx;} if(e2<dx){err+=dx;cy+=sy;} } }
  const cracksByStage=[
    [[8,8,8,2]],
    [[8,8,8,2],[8,8,13,9]],
    [[8,8,8,2],[8,8,13,9],[8,8,3,13]],
    [[8,8,8,2],[8,8,13,9],[8,8,3,13],[8,8,14,3],[8,8,2,5]]
  ];
  for(let s=0;s<4;s++){ const c=cvs(g,g),x=c.getContext("2d"); x.fillStyle="rgba(20,12,4,0.85)";
    for(const ln of cracksByStage[s]) line(ln[0],ln[1],ln[2],ln[3],x);
    stages.push("url("+c.toDataURL()+")"); }
  return stages;
}
function makeTorch(){ const w=8,h=16,c=cvs(w,h),x=c.getContext("2d");
  x.fillStyle="#6b4423"; for(let j=6;j<h;j++) x.fillRect(3,j,2,1); // stick
  x.fillStyle="#ffd93d"; x.fillRect(2,3,4,3); x.fillStyle="#ff9a2a"; x.fillRect(2,5,4,2); x.fillStyle="#fff09a"; x.fillRect(3,2,2,2);
  return "url("+c.toDataURL()+")"; }
function makeCaveWall(){ // big soft rocky texture for the out-of-game background
  const w=80,h=80,c=cvs(w,h),x=c.getContext("2d"),r=rng(909);
  // base
  x.fillStyle="#33241680"; x.fillRect(0,0,w,h);
  // organic darker/lighter blotches (clustered pixels)
  for(let b=0;b<220;b++){ const cx=(r()*w)|0,cy=(r()*h)|0,sz=1+((r()*3)|0);
    const v=r(); let col;
    if(v<0.45) col="rgba(22,15,9,0.55)";        // shadow pocket
    else if(v<0.80) col="rgba(74,52,32,0.45)";   // mid rock
    else col="rgba(108,78,46,0.35)";             // lit edge
    x.fillStyle=col;
    for(let k=0;k<sz*sz;k++){ const dx=((r()*sz)|0),dy=((r()*sz)|0); x.fillRect((cx+dx)%w,(cy+dy)%h,1,1); } }
  // faint diagonal strata lines
  x.fillStyle="rgba(20,13,8,0.30)";
  for(let s=0;s<6;s++){ let sx=(r()*w)|0, sy=0; while(sy<h){ x.fillRect(sx%w,sy,1,1); sy++; if(r()<0.5) sx++; } }
  // rare dim mineral glints
  for(let g=0;g<14;g++){ const gx=(r()*w)|0,gy=(r()*h)|0;
    x.fillStyle=r()<0.6?"rgba(255,210,74,0.45)":"rgba(91,200,224,0.40)"; x.fillRect(gx,gy,1,1); }
  return "url("+c.toDataURL()+")"; }
function makeBrick(){ // varied stone-brick wall: random brick widths, cracks, moss & mineral specks
  const w=64,h=48,c=cvs(w,h),x=c.getContext("2d"),r=rng(555);
  // base mortar / deep background with subtle vertical tone shift
  for(let j=0;j<h;j++){ const t=j/h; const rr=(0x20+t*8)|0, gg=(0x1a+t*6)|0, bb=(0x12+t*4)|0;
    x.fillStyle="rgb("+rr+","+gg+","+bb+")"; x.fillRect(0,j,w,1); }
  // brick face with per-brick tint and pixel noise
  const tints=["#473a30","#4e4034","#42352b","#52443a","#3d3127","#564636"];
  function brick(bx,by,bw,bh){
    const base=tints[(r()*tints.length)|0];
    x.fillStyle=base; x.fillRect(bx,by,bw,bh);
    // top/left highlight, bottom/right shade for a chiselled look
    x.fillStyle="rgba(255,235,200,.10)"; x.fillRect(bx,by,bw,1); x.fillRect(bx,by,1,bh);
    x.fillStyle="rgba(0,0,0,.30)"; x.fillRect(bx,by+bh-1,bw,1); x.fillRect(bx+bw-1,by,1,bh);
    for(let i=0;i<bw;i++)for(let j=0;j<bh;j++){ const v=r();
      if(v<0.14){x.fillStyle="#3a2e24";x.fillRect(bx+i,by+j,1,1);}
      else if(v<0.21){x.fillStyle="#5c4c3e";x.fillRect(bx+i,by+j,1,1);} }
    // occasional crack
    if(r()<0.30){ x.fillStyle="#1c1610"; let cx=bx+1+((r()*(bw-2))|0),cy=by;
      for(let k=0;k<bh;k++){ x.fillRect(cx,cy+k,1,1); if(r()<0.4) cx+=r()<0.5?-1:1; cx=Math.max(bx+1,Math.min(bx+bw-2,cx)); } }
    // rare moss patch (greenish)
    if(r()<0.16){ const mx=bx+((r()*bw)|0),my=by+bh-2; x.fillStyle="#3f5a2c";
      for(let k=0;k<3;k++) if(r()<0.7) x.fillRect(mx+((r()*3-1)|0),my-((r()*2)|0),1,1); }
    // rare mineral speck (gold or blue), gives the wall life
    if(r()<0.10){ const gx=bx+1+((r()*(bw-2))|0),gy=by+1+((r()*(bh-2))|0);
      x.fillStyle=r()<0.6?"#ffd24a":"#5bc8e0"; x.fillRect(gx,gy,1,1);
      if(r()<0.5) x.fillRect(gx+1,gy,1,1); }
  }
  // staggered rows with random widths so the pattern doesn't read as a grid
  const rowH=12;
  for(let ry=0, row=0; ry<h; ry+=rowH, row++){
    let bx = row%2 ? -((4+(r()*8)|0)) : 1;
    while(bx < w){
      const bw = 12 + ((r()*14)|0);
      brick(bx, ry+1, Math.min(bw, w-bx-0), rowH-2);
      bx += bw + 1; // +1 mortar gap
    }
  }
  return "url("+c.toDataURL()+")"; }

/* --- DIFFERENT MINING BLOCKS (all original, crisp) --- */
const NUGGETS=[[3,4],[4,4],[3,5],[4,5],[10,3],[11,3],[10,4],[6,9],[7,9],[7,10],[6,10],[12,11],[12,12],[11,12],[2,11],[2,12],[9,6],[13,7]];
const BLOCKS=[
  {id:"dirt",  base:"#8a5a2c", k:[["#6e4622",.22],["#9c6c38",.13],["#5a3a1c",.07]], mul:3,  cols:["#8a5a2c","#6e4622","#9c6c38"]},
  {id:"stone", base:"#9aa0aa", k:[["#7c828c",.22],["#b4bac4",.13],["#666c76",.07]], mul:4,  cols:["#9aa0aa","#7c828c","#c0c6d0"]},
  {id:"coal",  base:"#9aa0aa", k:[["#7c828c",.18]], ore:{c:"#2a2a30",hi:"#4a4a52",d:"#101014"}, mul:6,  cols:["#3a3a42","#1a1a1e","#9aa0aa"]},
  {id:"iron",  base:"#9aa0aa", k:[["#7c828c",.18]], ore:{c:"#e8c9a0",hi:"#fbe6c4",d:"#c39a70"}, mul:8,  cols:["#e8c9a0","#c39a70","#fbe6c4"]},
  {id:"gold",  base:"#9aa0aa", k:[["#7c828c",.18]], ore:{c:"#ffd93d",hi:"#fff09a",d:"#d99416"}, mul:11, cols:["#ffd93d","#fff09a","#d99416"]},
  {id:"ruby",  base:"#9aa0aa", k:[["#7c828c",.18]], ore:{c:"#ff5566",hi:"#ffb0ba",d:"#c0233a"}, mul:15, cols:["#ff5566","#ffb0ba","#c0233a"]},
  {id:"emerald",base:"#9aa0aa",k:[["#7c828c",.18]], ore:{c:"#3fe06a",hi:"#b4f5c6",d:"#1f9c48"}, mul:19, cols:["#3fe06a","#b4f5c6","#1f9c48"]},
  {id:"diamond",base:"#9aa0aa",k:[["#7c828c",.18]], ore:{c:"#5be0e0",hi:"#d2f8f8",d:"#2fb0b0"}, mul:24, cols:["#5be0e0","#d2f8f8","#2fb0b0"]},
  {id:"amethyst",base:"#9aa0aa",k:[["#7c828c",.18]],ore:{c:"#b07bf0",hi:"#e6d0ff",d:"#7a3fd0"}, mul:30, cols:["#b07bf0","#e6d0ff","#7a3fd0"]}
];
const blockTexCache={};
function makeBlockTex(idx){ if(blockTexCache[idx]) return blockTexCache[idx];
  const def=BLOCKS[idx]; const g=16,c=cvs(g,g),x=c.getContext("2d"),r=rng(900+idx*131);
  x.fillStyle=def.base; x.fillRect(0,0,g,g);
  for(let i=0;i<g;i++)for(let j=0;j<g;j++){ const v=r(); let a=0; for(const sp of def.k){ a+=sp[1]; if(v<a){ x.fillStyle=sp[0]; x.fillRect(i,j,1,1); break; } } }
  if(def.ore){ const o=def.ore; for(let n=0;n<NUGGETS.length;n++){ const[a,b]=NUGGETS[n];
      x.fillStyle=o.d; if(a+1<g)x.fillRect(a+1,b,1,1); if(b+1<g)x.fillRect(a,b+1,1,1);
      x.fillStyle=o.c; x.fillRect(a,b,1,1); x.fillStyle=o.hi; x.fillRect(a,b,1,1);
      if(n%2===0 && a-1>=0){ x.fillStyle=o.c; x.fillRect(a-1,b,1,1); } } }
  const u="url("+c.toDataURL()+")"; blockTexCache[idx]=u; return u; }

/* current block state */
let curBlock=4; // start on gold
function pickBlock(){ const maxIdx=Math.min(BLOCKS.length-1, 2+Math.floor(S.layer/1.4));
  let idx; let guard=0; do{ idx=(Math.random()*(maxIdx+1))|0; guard++; }while(idx===curBlock && guard<6);
  return idx; }
function applyBlock(idx){ curBlock=idx; $vein.style.backgroundImage=makeBlockTex(idx); }
/* 20 цветов кирок по тирам (b = металл, s = тень) */
const TIER_PAL=[
  {b:"#9a9aa2",s:"#6e6e78"}, {b:"#cf8a4e",s:"#a8682f"}, {b:"#d9b25a",s:"#b08a36"}, {b:"#ffd93d",s:"#d99416"},
  {b:"#e8eef2",s:"#b6c0c8"}, {b:"#5be0e0",s:"#2fb0b0"}, {b:"#4fd06a",s:"#2f9c48"}, {b:"#7ad84f",s:"#4ea82c"},
  {b:"#5b86f0",s:"#3558c0"}, {b:"#3fb7e0",s:"#2480ad"}, {b:"#b07bf0",s:"#8a4fd0"}, {b:"#d35bd9",s:"#a233a8"},
  {b:"#ff9ce0",s:"#e060b8"}, {b:"#f0556a",s:"#c03548"}, {b:"#ff7a2a",s:"#d05010"}, {b:"#ff5252",s:"#cc2e2e"},
  {b:"#7ee6c4",s:"#46b692"}, {b:"#c0c8d0",s:"#8e96a0"}, {b:"#4a4f5a",s:"#2c3038"}, {b:"#f5f0a0",s:"#cfc860"}
];
function lighten(hex,amt){ const n=parseInt(hex.slice(1),16); let r=(n>>16)+amt,g=((n>>8)&255)+amt,b=(n&255)+amt;
  r=Math.max(0,Math.min(255,r));g=Math.max(0,Math.min(255,g));b=Math.max(0,Math.min(255,b));
  return "#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1); }
/* Кирка: широкая двузубая металлическая головка + толстая деревянная рукоять вниз.
   M=металл(цвет тира), h=блик, d=тень, o=тёмный контур, W=дерево, g=прожилка дерева */
const PICKAXE=[
  "................",
  "................",
  "...oMoooooooMo..",
  "..oMMMMMMMMMMMo.",
  "..oMhhddddhhMMo.",
  "..oMMMMMMMMMMMo.",
  "..oMo.oMMo.oMMo.",
  "......oWWo..oo..",
  "......oggo......",
  "......oggo......",
  "......oggo......",
  "......oggo......",
  "......oggo......",
  "......oggo......",
  "......oWo.......",
  "......oo........"
];
const TOOLS=[{acc:null,tpl:PICKAXE}];
const drillTexCache={};
function makeDrillTex(tier){ if(drillTexCache[tier]) return drillTexCache[tier];
  const p=TIER_PAL[Math.min(tier-1,TIER_PAL.length-1)]; const tpl=TOOLS[0].tpl;
  const g=16,c=cvs(g,g),x=c.getContext("2d");
  const col={o:"#241018",M:p.b,h:lighten(p.b,70),d:p.s,W:"#7a5430",w:"#5a3a1c",g:"#9a6c3e"};
  for(let j=0;j<g;j++){ const row=tpl[j]; for(let i=0;i<g;i++){ const ch=row[i]; const cc=col[ch]; if(!cc) continue; x.fillStyle=cc; x.fillRect(i,j,1,1); } }
  const u="url("+c.toDataURL()+")"; drillTexCache[tier]=u; return u; }
function makeMole(){ // cute original miner critter
  const g=16,c=cvs(g,g),x=c.getContext("2d");
  const B="#7a4a2a",Bd="#5e3820",P="#ffd6e0",W="#ffffff",K="#2a1a0a",Y="#ffd93d";
  // body
  x.fillStyle=B; x.fillRect(3,6,10,9); x.fillStyle=Bd; x.fillRect(3,13,10,2);
  x.fillRect(2,8,1,5); x.fillRect(13,8,1,5);
  // helmet
  x.fillStyle=Y; x.fillRect(4,3,8,3); x.fillStyle="#d99416"; x.fillRect(4,5,8,1);
  x.fillStyle="#fff09a"; x.fillRect(7,2,2,1);
  // eyes
  x.fillStyle=W; x.fillRect(5,8,2,2); x.fillRect(9,8,2,2);
  x.fillStyle=K; x.fillRect(6,9,1,1); x.fillRect(10,9,1,1);
  // nose + cheeks
  x.fillStyle=P; x.fillRect(7,11,2,1); x.fillRect(4,11,1,1); x.fillRect(11,11,1,1);
  // paws
  x.fillStyle=Bd; x.fillRect(4,15,2,1); x.fillRect(10,15,2,1);
  return "url("+c.toDataURL()+")"; }

let CRACK_STAGES=[];
function buildTextures(){
  const root=document.documentElement.style;
  root.setProperty("--bricktex", makeBrick());
  root.setProperty("--outtex", makeCaveWall());
  root.setProperty("--woodtex", makeTex(16,"#7a5430",[{c:"#684626",p:.16},{c:"#8a6238",p:.14},{c:"#553a1f",p:.10}],22));
  root.setProperty("--cavetex", makeTex(16,"#4a3a26",[{c:"#3c2e1d",p:.22},{c:"#574326",p:.12},{c:"#332618",p:.10},{c:"#8e8e96",p:.03}],33));
  root.setProperty("--oretex", makeOre());
  root.setProperty("--torchtex", makeTorch());
  root.setProperty("--moletex", makeMole());
  CRACK_STAGES=makeCracks();
}

/* ===== economy ===== */
const CFG={ cells:16,tapBase:1,drillBase:1,drillGrowth:2.45,buyCostBase:12,buyCostGrowth:1.135,
  layerMult:2,deepBase:500,deepGrowth:5,prestigeMinLayer:5,offlineCapSec:7200,boostMult:5,boostSec:60,breakStage:5 };
const drillProd=t=>CFG.drillBase*Math.pow(CFG.drillGrowth,t-1);
const buyCost=()=>Math.floor(CFG.buyCostBase*Math.pow(CFG.buyCostGrowth,S.bought));
const deepCost=()=>Math.floor(CFG.deepBase*Math.pow(CFG.deepGrowth,S.layer-1));
const layerMult=()=>Math.pow(CFG.layerMult,S.layer-1);
const coreMult=()=>1+0.2*S.shards;
const boostMult=()=>(S.boostUntil>Date.now())?CFG.boostMult:1;
const globalMult=()=>layerMult()*coreMult()*boostMult();
function productionPerSec(){ let r=0; for(const d of S.cells){ if(d>0) r+=drillProd(d); } return r*globalMult(); }
const tapValue=()=>CFG.tapBase*layerMult()*coreMult()*boostMult();
const prestigeShards=()=>Math.max(0,S.layer-(CFG.prestigeMinLayer-1));

/* ===== state ===== */
const S={ gold:0,bought:0,layer:1,shards:0,cells:new Array(CFG.cells).fill(0),boostUntil:0,lastSave:Date.now(),maxLayer:1,chestLast:0,quests:null };
function newSave(){ S.cells=new Array(CFG.cells).fill(0); S.cells[0]=1; S.chestLast=0; S.quests=null; }
function serialize(){ S.lastSave=Date.now(); return JSON.stringify({g:S.gold,b:S.bought,l:S.layer,sh:S.shards,c:S.cells,bu:S.boostUntil,ts:S.lastSave,ml:S.maxLayer,lang:LANG,snd:Audio.on,mus:Music.on,ch:S.chestLast,q:S.quests}); }
function applySave(str){ try{ const o=JSON.parse(str); if(!o) return false;
  S.gold=+o.g||0; S.bought=+o.b||0; S.layer=Math.max(1,+o.l||1); S.shards=+o.sh||0;
  if(Array.isArray(o.c)){ const a=new Array(CFG.cells).fill(0); for(let i=0;i<Math.min(o.c.length,CFG.cells);i++) a[i]=+o.c[i]||0; S.cells=a; }
  else S.cells=new Array(CFG.cells).fill(0);
  S.boostUntil=+o.bu||0; S.lastSave=+o.ts||Date.now(); S.maxLayer=Math.max(1,+o.ml||S.layer); S.chestLast=+o.ch||0; S.quests=Array.isArray(o.q)?o.q:null;
  if(o.lang&&I18N[o.lang]) LANG=o.lang; if(typeof o.snd==="boolean") Audio.on=o.snd; if(typeof o.mus==="boolean") Music.on=o.mus; return true; }catch(e){ return false; } }
let saveTimer=0;
async function save(){ const s=serialize(); lsSet(s); await Y.cloudSave(s); }
function scheduleSave(){ const n=Date.now(); if(n-saveTimer>4000){ saveTimer=n; save(); } }

/* ===== refs ===== */
const el=id=>document.getElementById(id);
const $goldVal=el("goldVal"),$rateVal=el("rateVal"),$layerVal=el("layerVal"),$multVal=el("multVal"),
  $depthBar=el("depthBar"),$board=el("board"),$buyBtn=el("buyBtn"),$buyCost=el("buyCost"),
  $deepBtn=el("deepBtn"),$deepCost=el("deepCost"),$boostBtn=el("boostBtn"),
  $drillCount=el("drillCount"),$drillCap=el("drillCap"),$vein=el("vein"),$shaft=el("shaft"),
  $combo=el("combo"),$cracks=el("cracks"),$mascot=el("mascot");
let displayGold=0,lastGold=0;

/* ===== FX (blocky particles) ===== */
const FX={ cv:el("fx"),ctx:null,w:0,h:0,dpr:1,parts:[],max:110,shaftRect:null,
  init(){ this.ctx=this.cv.getContext("2d"); this.resize(); },
  resize(){ this.dpr=Math.min(2,window.devicePixelRatio||1); this.w=innerWidth; this.h=innerHeight;
    this.cv.width=this.w*this.dpr; this.cv.height=this.h*this.dpr; this.cv.style.width=this.w+"px"; this.cv.style.height=this.h+"px";
    this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0); this.shaftRect=$shaft.getBoundingClientRect(); },
  cube(x,y,n,cols,up,spread){ if(RM) return; n=Math.min(n,this.max-this.parts.length); if(n<=0) return;
    for(let i=0;i<n;i++){ const a=Math.random()*6.283,sp=(spread||130)*(0.4+Math.random());
      this.parts.push({x,y,vx:Math.cos(a)*sp*0.5,vy:Math.sin(a)*sp*0.4-(up||150),g:560,rot:Math.random()*6.28,vr:(Math.random()*8-4),
        life:0,ttl:0.55+Math.random()*0.5,s:3+Math.random()*5,col:cols[(Math.random()*cols.length)|0],ring:false}); } },
  ring(x,y,col){ if(RM) return; this.parts.push({x,y,ring:true,r:8,vr:300,life:0,ttl:0.4,col:col||"#fff09a"}); },
  tick(dt){ const c=this.ctx; if(!c) return; c.clearRect(0,0,this.w,this.h);
    for(let i=this.parts.length-1;i>=0;i--){ const p=this.parts[i]; p.life+=dt; if(p.life>=p.ttl){ this.parts.splice(i,1); continue; }
      const k=1-p.life/p.ttl;
      if(p.ring){ p.r+=p.vr*dt; c.strokeStyle=hexA(p.col,k*0.85); c.lineWidth=3*k+1; c.beginPath(); c.arc(p.x,p.y,p.r,0,6.283); c.stroke(); }
      else{ p.vy+=p.g*dt; p.x+=p.vx*dt; p.y+=p.vy*dt; p.rot+=p.vr*dt; const s=p.s*k+1;
        c.save(); c.translate(p.x,p.y); c.rotate(p.rot); c.fillStyle=hexA(p.col,Math.min(1,k+0.2));
        c.fillRect(-s/2,-s/2,s,s); c.fillStyle=hexA("#000000",0.18*k); c.fillRect(-s/2,s/2-s*0.3,s,s*0.3); c.restore(); } } }
};
function hexA(hex,a){ const n=parseInt(hex.slice(1),16); return "rgba("+(n>>16)+","+((n>>8)&255)+","+(n&255)+","+Math.max(0,a).toFixed(3)+")"; }
const GOLDCOLS=["#ffd93d","#fff09a","#d99416","#ffe066"];

/* flash + shake */
const $flash=el("flash");
function flash(i){ if(RM) return; $flash.style.opacity=i||.35; setTimeout(()=>$flash.style.opacity=0,80); }
let shakeT=0,shakeAmp=0;
function shake(a){ if(RM) return; shakeAmp=Math.max(shakeAmp,a); shakeT=0.18; }
function applyShake(dt){ if(shakeT>0){ shakeT-=dt; const a=shakeAmp*(shakeT/0.18);
    $shaft.style.transform="translate("+((Math.random()*2-1)*a).toFixed(1)+"px,"+((Math.random()*2-1)*a).toFixed(1)+"px)"; }
  else if($shaft.style.transform){ $shaft.style.transform=""; shakeAmp=0; } }

/* emotes */
const EMOTES_HAPPY=["(•‿•)","(★▽★)","(◕ᴗ◕)","ヽ(°〇°)ﾉ","(＾▽＾)"];
const EMOTES_WOW=["(⊙▽⊙)","(°o°)","\\(◎o◎)/","(✦ω✦)"];
function emote(text,x,y){ const e=document.createElement("div"); e.className="emote"; e.textContent=text;
  e.style.left=(x-20)+"px"; e.style.top=(y-44)+"px"; document.body.appendChild(e);
  e.animate([{transform:"translateY(8px) scale(.6)",opacity:0},{transform:"translateY(0) scale(1)",opacity:1,offset:.2},
    {transform:"translateY(-10px) scale(1)",opacity:1,offset:.75},{transform:"translateY(-22px) scale(.9)",opacity:0}],
    {duration:1100,easing:"ease-out"}).onfinish=()=>e.remove(); }
function mascotReact(wow){ if(RM) return; $mascot.classList.remove("hop"); void $mascot.offsetWidth; $mascot.classList.add("hop");
  const r=$mascot.getBoundingClientRect(); const list=wow?EMOTES_WOW:EMOTES_HAPPY;
  emote(list[(Math.random()*list.length)|0], r.left+r.width/2, r.top); }

/* floats */
function spawnFloat(x,y,text,big){ const f=document.createElement("div"); f.className="float"+(big?" big":""); f.textContent=text;
  f.style.left=x+"px"; f.style.top=y+"px"; document.body.appendChild(f); const dx=Math.random()*40-20;
  f.animate([{transform:"translate(-50%,-50%)",opacity:1},{transform:"translate(calc(-50% + "+dx+"px),-150%)",opacity:0}],
    {duration:900,easing:"cubic-bezier(.2,.6,.3,1)"}).onfinish=()=>f.remove(); }

/* ===== render ===== */
function renderBoard(){ $board.innerHTML="";
  for(let i=0;i<CFG.cells;i++){ const cell=document.createElement("div"); cell.className="cell"; cell.dataset.idx=i;
    cell.tabIndex=0; cell.setAttribute("role","button");
    const tier=S.cells[i]; if(tier===0) cell.classList.add("empty");
    if(tier>0){ const d=document.createElement("div"); d.className="drill"; d.dataset.idx=i;
      d.style.backgroundImage=makeDrillTex(tier); d.style.animationDelay=(i*0.12)+"s";
      d.innerHTML='<span class="tier pix">'+tier+'</span>';
      cell.appendChild(d); attachDrag(d); }
    $board.appendChild(cell); }
  if(kbSelected!=null&&(kbSelected>=CFG.cells||S.cells[kbSelected]===0)) clearKbSelection();
  if(kbSelected!=null){ const c=$board.children[kbSelected]; if(c) c.classList.add("kbsel"); }
  $drillCount.textContent=S.cells.filter(x=>x>0).length; $drillCap.textContent=CFG.cells; }
function renderHUD(){ $rateVal.textContent=fmt(productionPerSec()); $layerVal.textContent=S.layer; $multVal.textContent=fmt(globalMult());
  const c=buyCost(); $buyCost.textContent=fmt(c); $buyBtn.disabled=(S.gold<c)||boardFull();
  const dc=deepCost(); $deepCost.textContent=fmt(dc); $deepBtn.disabled=(S.gold<dc);
  $depthBar.style.width=Math.min(100,(S.gold/dc)*100).toFixed(1)+"%"; }
const boardFull=()=>S.cells.every(x=>x>0);
function tickGoldDisplay(){ const target=S.gold,diff=target-displayGold;
  if(Math.abs(diff)<0.5) displayGold=target; else displayGold+=diff*0.25; $goldVal.textContent=fmt(displayGold);
  if(target-lastGold>5 && target-lastGold>target*0.02){ $goldVal.classList.add("bump"); setTimeout(()=>$goldVal.classList.remove("bump"),120); }
  lastGold=target; }

/* combo */
let combo=0,comboLast=0;
const comboMult=()=>Math.min(3,1+combo*0.035);
function bumpCombo(){ const now=performance.now(); if(now-comboLast<900) combo++; else combo=1; comboLast=now;
  if(combo>=5){ $combo.textContent=t("combo")+" ×"+combo; $combo.classList.add("show"); } }
function decayCombo(){ if(combo>0&&performance.now()-comboLast>900){ combo=0; $combo.classList.remove("show"); } }

/* block break */
let crackStage=0;
function setCracks(){ if(!CRACK_STAGES.length){ return; }
  if(crackStage<=0){ $cracks.style.opacity=0; }
  else { const idx=Math.min(crackStage-1,CRACK_STAGES.length-1); $cracks.style.backgroundImage=CRACK_STAGES[idx]; $cracks.style.opacity=0.9; } }

/* tap */
function doTap(x,y){ bumpCombo(); const val=tapValue()*comboMult(); S.gold+=val;
  spawnFloat(x,y,"+"+fmt(val),combo>=10);
  const bc=BLOCKS[curBlock].cols;
  FX.cube(x,y,combo>=10?10:6,bc,150,130); FX.ring(x,y,bc[1]); flash(combo>=15?.3:.16); shake(combo>=15?3.5:2);
  Audio.tap(Math.min(20,combo)); questEvent("tap",1);
  crackStage++;
  if(crackStage>=CFG.breakStage){ blockBreak(x,y); } else setCracks();
  tickGoldDisplay(); }
function blockBreak(x,y){ crackStage=0; setCracks();
  const def=BLOCKS[curBlock]; const rich=!!def.ore;
  const bonus=tapValue()*def.mul; S.gold+=bonus;
  const r=$vein.getBoundingClientRect(); const cx=r.left+r.width/2, cy=r.top+r.height/2;
  FX.cube(cx,cy,rich?30:22,def.cols,200,200); FX.ring(cx,cy,def.cols[0]); FX.ring(cx,cy,def.cols[1]);
  flash(rich?.55:.4); shake(6); Audio.broke(); questEvent("break",1); spawnFloat(cx,cy-20,t("broke"),true); mascotReact(rich);
  $vein.classList.add("pop"); setTimeout(()=>$vein.classList.remove("pop"),320);
  applyBlock(pickBlock()); }
$vein.addEventListener("pointerdown",e=>{ e.preventDefault(); const r=$vein.getBoundingClientRect();
  doTap(e.clientX||(r.left+r.width/2), e.clientY||(r.top+r.height/2)); });
$vein.tabIndex=0; $vein.setAttribute("role","button");
$vein.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "||e.key==="Spacebar"){ e.preventDefault();
  const r=$vein.getBoundingClientRect(); doTap(r.left+r.width/2, r.top+r.height/2); } });

/* buy */
$buyBtn.addEventListener("click",()=>{ const c=buyCost();
  if(boardFull()){ toast(t("boardFull")); return; } if(S.gold<c){ toast(t("needGold")); return; }
  S.gold-=c; S.bought++; const idx=S.cells.indexOf(0); S.cells[idx]=1; Audio.buy(); questEvent("buy",1); renderBoard(); renderHUD();
  const cell=$board.children[idx],d=cell&&cell.querySelector(".drill");
  if(d){ d.classList.add("pop"); const r=d.getBoundingClientRect(); FX.cube(r.left+r.width/2,r.top+r.height/2,8,["#a9743b","#8a5c2c"],70,90); }
  scheduleSave(); });

/* merge */
let drag=null;
function attachDrag(node){ node.addEventListener("pointerdown",startDrag); }
function startDrag(e){ if(adBusy) return; e.preventDefault(); const node=e.currentTarget,from=+node.dataset.idx,tier=S.cells[from]; if(!tier) return;
  const ghost=node.cloneNode(true); ghost.classList.add("ghost"); const sz=node.getBoundingClientRect();
  ghost.style.width=sz.width+"px"; ghost.style.height=sz.height+"px"; ghost.style.left=e.clientX+"px"; ghost.style.top=e.clientY+"px";
  document.body.appendChild(ghost); node.style.opacity="0.25"; drag={from,tier,node,ghost,overCell:null};
  window.addEventListener("pointermove",moveDrag); window.addEventListener("pointerup",endDrag); window.addEventListener("pointercancel",endDrag); }
function moveDrag(e){ if(!drag) return; drag.ghost.style.left=e.clientX+"px"; drag.ghost.style.top=e.clientY+"px";
  drag.ghost.style.display="none"; const under=document.elementFromPoint(e.clientX,e.clientY); drag.ghost.style.display="";
  const cell=under&&under.closest(".cell");
  if(drag.overCell&&drag.overCell!==cell) drag.overCell.classList.remove("over");
  if(cell&&+cell.dataset.idx!==drag.from){ const ti=S.cells[+cell.dataset.idx];
    if(ti===drag.tier||ti===0){ cell.classList.add("over"); drag.overCell=cell; } else drag.overCell=null; } else drag.overCell=null; }
function mergeOrMove(from,to){ if(to===from) return false;
  const fromTier=S.cells[from]; if(!fromTier) return false; const ti=S.cells[to];
  if(ti===fromTier){ const nt=fromTier+1; S.cells[to]=nt; S.cells[from]=0; Audio.merge(); questEvent("merge",1); renderBoard(); renderHUD();
    const nd=$board.children[to]&&$board.children[to].querySelector(".drill");
    if(nd){ nd.classList.add("pop"); const r=nd.getBoundingClientRect(); const cx=r.left+r.width/2,cy=r.top+r.height/2;
      const pal=TIER_PAL[Math.min(nt-1,TIER_PAL.length-1)]; FX.cube(cx,cy,16,[pal.b,pal.s,"#ffffff"],90,120); FX.ring(cx,cy,pal.b);
      flash(.22); if(nt>=4) mascotReact(nt>=6); }
    scheduleSave(); return true; }
  else if(ti===0){ S.cells[to]=fromTier; S.cells[from]=0; renderBoard(); renderHUD(); scheduleSave(); return true; }
  return false; }
function endDrag(e){ if(!drag) return;
  window.removeEventListener("pointermove",moveDrag); window.removeEventListener("pointerup",endDrag); window.removeEventListener("pointercancel",endDrag);
  const d=drag; drag=null; d.ghost.remove(); if(d.overCell) d.overCell.classList.remove("over");
  const under=document.elementFromPoint(e.clientX,e.clientY),cell=under&&under.closest(".cell");
  if(cell){ const to=+cell.dataset.idx; if(mergeOrMove(d.from,to)) return; }
  if(d.node) d.node.style.opacity="1"; }

/* keyboard / TV remote board navigation */
const BOARD_COLS=4; let kbSelected=null;
function clearKbSelection(){ if(kbSelected!=null){ const c=$board.children[kbSelected]; if(c) c.classList.remove("kbsel"); } kbSelected=null; }
$board.addEventListener("keydown",e=>{
  const target=e.target.closest&&e.target.closest(".cell"); if(!target) return;
  let idx=+target.dataset.idx;
  const move=d=>{ const n=idx+d;
    if(d===-1&&idx%BOARD_COLS===0) return; if(d===1&&idx%BOARD_COLS===BOARD_COLS-1) return;
    if(n<0||n>=CFG.cells) return; e.preventDefault(); const nc=$board.children[n]; if(nc) nc.focus(); };
  switch(e.key){
    case "ArrowLeft": move(-1); return;
    case "ArrowRight": move(1); return;
    case "ArrowUp": move(-BOARD_COLS); return;
    case "ArrowDown": move(BOARD_COLS); return;
    case "Enter": case " ": case "Spacebar":
      e.preventDefault();
      if(kbSelected==null){ if(S.cells[idx]>0){ kbSelected=idx; target.classList.add("kbsel"); } }
      else { if(kbSelected===idx){ clearKbSelection(); } else { mergeOrMove(kbSelected,idx); clearKbSelection(); } }
      return;
  }
});

/* boost */
$boostBtn.addEventListener("click",()=>{ showAd("reward",()=>{ S.boostUntil=Date.now()+CFG.boostSec*1000; Audio.reward(); toast(t("boosted")); flash(.4);
  const r=$vein.getBoundingClientRect(); FX.cube(r.left+r.width/2,r.top+r.height/2,22,["#b06be0","#5be0e0","#ffffff"],180,140); mascotReact(true); renderHUD(); scheduleSave(); }); });

/* deeper / prestige */
$deepBtn.addEventListener("click",()=>{ const dc=deepCost(); if(S.gold<dc){ toast(t("needGold")); return; }
  S.gold-=dc; S.layer++; S.maxLayer=Math.max(S.maxLayer,S.layer); Audio.merge(); questEvent("deeper",1); toast(t("deepDone")); flash(.5); shake(5);
  const r=$vein.getBoundingClientRect(); FX.cube(r.left+r.width/2,r.top+r.height/2,24,GOLDCOLS,200,150); mascotReact(true);
  renderHUD(); renderBoard(); scheduleSave(); if(S.layer%3===0) showAd("interstitial"); });
let pressTimer=0;
$deepBtn.addEventListener("pointerdown",()=>{ if(S.layer<CFG.prestigeMinLayer) return;
  pressTimer=setTimeout(()=>{ el("prestigeShards").textContent=prestigeShards(); openOverlay("prestige"); },650); });
["pointerup","pointerleave","pointercancel"].forEach(ev=>$deepBtn.addEventListener(ev,()=>clearTimeout(pressTimer)));
el("prestigeGo").addEventListener("click",()=>{ S.shards+=prestigeShards(); S.gold=0; S.bought=0; S.layer=1;
  S.cells=new Array(CFG.cells).fill(0); S.cells[0]=1; S.boostUntil=0; crackStage=0; setCracks(); Audio.reward(); flash(.6);
  closeOverlay("prestige"); renderBoard(); renderHUD(); mascotReact(true); save(); });
el("prestigeCancel").addEventListener("click",()=>closeOverlay("prestige"));

/* overlays */
const OVERLAY_IDS=["offline","prestige","chest","quests"];
function openOverlay(id){ el(id).classList.add("show"); }
function closeOverlay(id){ el(id).classList.remove("show"); }

/* TV remote Back / Escape support: close topmost open overlay */
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"||e.key==="Backspace"||e.key==="GoBack"||e.keyCode===10009){
    for(const id of OVERLAY_IDS){
      const o=el(id);
      if(o&&o.classList.contains("show")){ e.preventDefault(); closeOverlay(id); save(); break; }
    }
  }
});

function updateAudioUI(){
  const sb=el("soundBtn"),mb=el("musicBtn");
  if(sb){ sb.textContent=Audio.on?"🔊":"🔇"; sb.classList.toggle("off",!Audio.on); }
  if(mb){ mb.textContent=Music.on?"♪":"♪"; mb.classList.toggle("off",!Music.on); }
}
function updateLangUI(){ const lb=el("langBtn"); if(lb) lb.textContent=LANG.toUpperCase(); }

el("soundBtn").addEventListener("click",()=>{ Audio.on=!Audio.on; if(Audio.on) Audio.tap(); updateAudioUI(); save(); });
el("musicBtn").addEventListener("click",()=>{ Music.on=!Music.on; if(Music.on) Music.start(); else Music.stop(); updateAudioUI(); save(); });

/* язык: кнопка рядом со звуком, по тапу циклично RU → EN → TR */
const LANG_ORDER=["ru","en","tr","es","de","fr","ky"];
function cycleLang(){ const i=LANG_ORDER.indexOf(LANG); LANG=LANG_ORDER[(i+1)%LANG_ORDER.length];
  applyI18n(); updateLangUI(); renderBoard(); renderHUD(); save(); }

/* сброс прогресса вынесен на долгое нажатие кнопки языка (без отдельного экрана настроек) */
function doReset(){ if(confirm(t("resetConfirm")||t("confirmReset"))){ lsDel(); S.shards=0; newSave();
  S.gold=0;S.bought=0;S.layer=1;S.boostUntil=0;S.maxLayer=1;crackStage=0;setCracks();
  renderBoard(); renderHUD(); save(); } }
(function(){ const lb=el("langBtn"); let timer=0,held=false;
  const start=()=>{ held=false; timer=setTimeout(()=>{ held=true; doReset(); },1000); };
  const cancel=()=>{ clearTimeout(timer); };
  lb.addEventListener("pointerdown",start);
  lb.addEventListener("pointerup",()=>{ cancel(); if(!held) cycleLang(); });
  lb.addEventListener("pointerleave",cancel);
  lb.addEventListener("pointercancel",cancel);
})();

/* toast */
let toastTimer=0;
function toast(msg){ const e=el("toast"); e.textContent=msg; e.classList.add("show"); clearTimeout(toastTimer); toastTimer=setTimeout(()=>e.classList.remove("show"),1800); }

/* loop */
/* ===== quests & daily chest ===== */
const QDEF={ break:{base:10,tsec:55}, merge:{base:5,tsec:85}, buy:{base:8,tsec:55}, tap:{base:60,tsec:24}, deeper:{base:2,tsec:150} };
const QKEYS=Object.keys(QDEF);
function makeQuest(prev){ let type,guard=0; do{ type=QKEYS[(Math.random()*QKEYS.length)|0]; guard++; }while(prev&&prev.indexOf(type)>=0&&guard<8);
  const d=QDEF[type]; const tgt=Math.max(2,Math.ceil(d.base*(1+0.12*(S.layer-1))));
  const rew=Math.max(80,Math.ceil(productionPerSec()*d.tsec)+Math.ceil(tapValue()*12));
  return {type,tgt,prog:0,rew,claimed:false}; }
function ensureQuests(){ if(!Array.isArray(S.quests)||S.quests.length!==3){ S.quests=[]; for(let i=0;i<3;i++) S.quests.push(makeQuest(S.quests.map(q=>q.type))); } }
function questEvent(type,n){ if(!Array.isArray(S.quests)) return; let ch=false;
  for(const q of S.quests){ if(q.type===type&&!q.claimed&&q.prog<q.tgt){ q.prog=Math.min(q.tgt,q.prog+n); ch=true; } }
  if(ch){ updateBottom(); if(el("quests").classList.contains("show")) renderQuests(); } }
function qText(q){ return t("q"+q.type[0].toUpperCase()+q.type.slice(1)).replace("{n}",q.tgt); }
function renderQuests(){ const list=el("questList"); if(!list) return; list.innerHTML="";
  S.quests.forEach((q,idx)=>{ const done=q.prog>=q.tgt; const row=document.createElement("div"); row.className="qrow";
    row.innerHTML=`<div class="qinfo"><div class="qtext">${qText(q)}</div><div class="qbarwrap"><div class="qbar" style="width:${Math.min(100,q.prog/q.tgt*100).toFixed(0)}%"></div></div></div><div class="qside"><div class="qprog">${Math.min(q.prog,q.tgt)}/${q.tgt}</div><button class="qclaim${done?"":" off"}" data-q="${idx}"><span class="cc"></span>${fmt(q.rew)}</button></div>`;
    list.appendChild(row); }); }
function centerFloat(text){ spawnFloat(innerWidth/2, innerHeight*0.42, text, true); }
el("questList").addEventListener("click",e=>{ const b=e.target.closest(".qclaim"); if(!b||b.classList.contains("off")) return;
  const idx=+b.dataset.q, q=S.quests[idx]; if(!q||q.prog<q.tgt||q.claimed) return;
  S.gold+=q.rew; Audio.reward(); flash(.35); centerFloat("+"+fmt(q.rew));
  S.quests[idx]=makeQuest(S.quests.map(x=>x.type)); renderQuests(); updateBottom(); tickGoldDisplay(); save(); });
el("questBtn").addEventListener("click",()=>{ ensureQuests(); renderQuests(); openOverlay("quests"); });
el("questsClose").addEventListener("click",()=>{ closeOverlay("quests"); save(); });

const CHEST_MS=20*3600*1000;
function chestReady(){ return (Date.now()-(S.chestLast||0))>=CHEST_MS; }
function chestReward(){ return Math.max(120,Math.ceil(productionPerSec()*900),Math.ceil(tapValue()*100)); }
function fmtTime(ms){ const s2=Math.max(0,Math.ceil(ms/1000)),h=(s2/3600)|0,m=((s2%3600)/60)|0; return h>0?(h+t("h")+" "+m+t("m")):(m+t("m")); }
function openChestPopup(){ if(!chestReady()){ toast(t("chestWait")+" "+fmtTime(CHEST_MS-(Date.now()-(S.chestLast||0)))); return; }
  const earned=chestReward(); el("chestAmt").textContent=fmt(earned); openOverlay("chest");
  el("chestCollect").onclick=()=>{ S.gold+=earned; S.chestLast=Date.now(); closeOverlay("chest"); Audio.reward(); flash(.4); updateBottom(); tickGoldDisplay(); save(); };
  el("chestX2").onclick=()=>{ showAd("reward",()=>{ S.gold+=earned*2; S.chestLast=Date.now(); closeOverlay("chest"); Audio.reward(); flash(.5); updateBottom(); tickGoldDisplay(); save(); }); }; }
el("chestBtn").addEventListener("click",openChestPopup);
el("chestClose").addEventListener("click",()=>closeOverlay("chest"));
function updateBottom(){ const cb=el("chestBtn"); if(cb){ const r=chestReady(); cb.classList.toggle("ready",r); const cd=el("chestDot"); if(cd) cd.style.display=r?"block":"none"; }
  const qd=el("questDot"); if(qd) qd.style.display=(Array.isArray(S.quests)&&S.quests.some(q=>q.prog>=q.tgt&&!q.claimed))?"block":"none"; }

const Game={ running:false,lastTick:0 };
function loop(now){ const dt=Math.min(0.5,(now-Game.lastTick)/1000);
  if(Game.running){ Game.lastTick=now; if(dt>0) S.gold+=productionPerSec()*dt; tickGoldDisplay(); decayCombo();
    if(S.boostUntil&&S.boostUntil<Date.now()) S.boostUntil=0; renderHUD(); scheduleSave(); } else Game.lastTick=now;
  applyShake(dt); FX.tick(dt); requestAnimationFrame(loop); }
document.addEventListener("visibilitychange",()=>{ if(document.hidden){ Game.running=false; Y.gameStop(); Music.stop(); save(); } else { Game.lastTick=performance.now(); Game.running=true; Y.gameStart(); if(Music.on) Music.start(); } });
window.addEventListener("resize",()=>FX.resize());

/* offline */
function handleOffline(){ const elapsed=Math.min(CFG.offlineCapSec,Math.max(0,(Date.now()-S.lastSave)/1000)); const earned=productionPerSec()*elapsed;
  if(earned>=1&&elapsed>=10){ el("offlineAmt").textContent=fmt(earned); openOverlay("offline");
    el("offlineCollect").onclick=()=>{ S.gold+=earned; closeOverlay("offline"); tickGoldDisplay(); save(); };
    el("offlineX2").onclick=()=>{ showAd("reward",()=>{ S.gold+=earned*2; Audio.reward(); flash(.4); closeOverlay("offline"); tickGoldDisplay(); save(); }); } } }

/* boot */
async function boot(){ await Y.init();
  let loaded=false; const cloud=await Y.cloudLoad(); if(cloud&&applySave(cloud)) loaded=true;
  if(!loaded){ const local=lsGet(); if(local&&applySave(local)) loaded=true; } if(!loaded) newSave(); ensureQuests();
  buildTextures();
  displayGold=S.gold; lastGold=S.gold; applyI18n(); updateLangUI(); FX.init(); renderBoard(); renderHUD(); setCracks(); applyBlock(curBlock); updateAudioUI(); $goldVal.textContent=fmt(S.gold);
  if(!RM){ for(let i=0;i<6;i++){ const g=document.createElement("div"); g.className="glint";
    g.style.left=(14+Math.random()*72)+"%"; g.style.top=(14+Math.random()*70)+"%"; g.style.animationDelay=(Math.random()*5)+"s"; $shaft.appendChild(g); } }
  Y.loadingReady(); el("loader").classList.add("hide"); setTimeout(()=>{ const l=el("loader"); if(l) l.remove(); },480);
  Game.lastTick=performance.now(); Game.running=true; Y.gameStart(); requestAnimationFrame(loop); handleOffline();
  const unlock=()=>{ Audio.ensure(); if(Audio.ctx&&Audio.ctx.state==="suspended") Audio.ctx.resume(); if(Music.on) Music.start(); Y.requestFullscreen(); window.removeEventListener("pointerdown",unlock); };
  window.addEventListener("pointerdown",unlock); updateBottom(); setInterval(updateBottom,1000);
  window.addEventListener("beforeunload",()=>{ try{ lsSet(serialize()); }catch(e){} }); }
boot();
})();

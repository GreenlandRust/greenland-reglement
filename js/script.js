const observer=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting)t.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
document.querySelectorAll('details').forEach(e=>{e.addEventListener('toggle',()=>{if(e.open)document.querySelectorAll('details').forEach(t=>{if(t!==e)t.open=false})})});

const burger=document.querySelector('.burger');
const navlinks=document.querySelector('.navlinks');
burger?.addEventListener('click',()=>navlinks?.classList.toggle('open'));

// v5.11 - traduction FR / EN -------------------------------------------------
const TEXT_EN={
  'Chargement de la zone...':'Loading the zone...',
  'Rust Survival Server':'Rust Survival Server',
  'Accueil':'Home',
  'Expérience':'Experience',
  'Règlement':'Rules',
  'Connexion':'Connect',
  'Ambiance OFF':'Ambience OFF',
  'Survie • PvP • Raids • Greenland':'Survival • PvP • Raids • Greenland',
  'Une base au coucher du soleil, du feu, des ruines, des survivants, et des joueurs qui jurent tous qu\'ils n\'ont “rien fait”. Bienvenue sur Greenland.':'A base at sunset, fire, ruins, survivors, and players all swearing they “did nothing”. Welcome to Greenland.',
  'Rejoindre le serveur':'Join the server',
  'Lire le règlement':'Read the rules',
  'Équipe':'Team',
  '3 max':'3 max',
  'Grief':'Griefing',
  'Interdit':'Forbidden',
  'Style':'Style',
  'Survie PvP':'PvP Survival',
  'Défile':'Scroll',
  'Un serveur qui impose son ambiance':'A server with its own atmosphere',
  'Greenland est pensé comme un serveur Rust propre, immersif et encadré : limite d\'équipe claire, raids autorisés, PvP libre, mais aucune tolérance pour le teaming, les abus ou le grief volontaire.':'Greenland is designed as a clean, immersive and well-managed Rust server: a clear team limit, raids allowed, open PvP, but zero tolerance for teaming, abuse or deliberate griefing.',
  'Serveur communautaire':'Community server',
  'Un serveur pensé pour accueillir les joueurs dans une ambiance sérieuse, propre et accessible, avec un staff présent et des règles lisibles.':'A server built to welcome players into a serious, clean and accessible environment, with active staff and clear rules.',
  'PvP & raids':'PvP & raids',
  'Le combat est libre, les raids sont autorisés, mais l\'aide extérieure organisée reste interdite.':'Combat is unrestricted and raids are allowed, but organized outside assistance is forbidden.',
  'Règles claires':'Clear rules',
  'Un règlement écrit pour éviter les débats interminables, ce magnifique sport sur Discord.':'Written rules to avoid endless arguments, that magnificent competitive sport on Discord.',
  'Règlement officiel':'Official rules',
  'En rejoignant le serveur, chaque joueur accepte l\'intégralité du présent règlement. L\'ignorance d\'une règle ne constitue jamais une excuse.':'By joining the server, every player accepts these rules in full. Not knowing a rule is never an excuse.',
  'I. Taille des équipes':'I. Team size',
  'La limite est fixée à':'The limit is',
  '3 joueurs maximum':'3 players maximum',
  'Une équipe comprend toute personne autorisée sur le Tool Cupboard (TC), les cadenas, les tourelles automatiques, ou possédant un lit ou un sac dans la base principale.':'A team includes anyone authorized on the Tool Cupboard (TC), locks, auto turrets, or anyone who has a bed or sleeping bag in the main base.',
  'Exemples interdits':'Forbidden examples',
  'Farmer à quatre.':'Farming as a group of four.',
  'Faire un raid à quatre.':'Raiding as a group of four.',
  'Défendre une base avec une quatrième personne.':'Defending a base with a fourth person.',
  'Construire avec une quatrième personne.':'Building with a fourth person.',
  'Faire intervenir un ancien membre de l\'équipe.':'Bringing in a former team member to help.',
  'Quitter l\'équipe pendant un raid afin de revenir quelques minutes plus tard.':'Leaving the team during a raid and returning a few minutes later.',
  'Toute tentative de contourner cette règle sera considérée comme du teaming.':'Any attempt to bypass this rule will be considered teaming.',
  'II. Alliances':'II. Alliances',
  'Les alliances sont interdites.':'Alliances are forbidden.',
  'Pactes de non-agression permanents.':'Permanent non-aggression pacts.',
  'Équipes amies permanentes.':'Permanent friendly teams.',
  'Défenses communes.':'Shared defenses.',
  'Raids organisés ensemble.':'Organized raids together.',
  'Partage régulier de ressources.':'Regular sharing of resources.',
  'Les collaborations ponctuelles restent tolérées uniquement lorsqu\'elles résultent naturellement du jeu et qu\'elles ne procurent pas un avantage durable.':'One-off cooperation is tolerated only when it happens naturally through gameplay and does not provide a lasting advantage.',
  'Le staff reste seul juge de la différence entre une interaction ponctuelle et une alliance.':'Staff alone decides the difference between a one-off interaction and an alliance.',
  'III. Échanges':'III. Trading',
  'Les échanges entre équipes sont autorisés, mais doivent rester ponctuels.':'Trading between teams is allowed, but it must remain occasional.',
  'Via Shop Front.':'Via Shop Front.',
  'Via Vending Machine.':'Via Vending Machine.',
  'Lors d\'un échange rapide.':'During a quick direct trade.',
  'Les prêts permanents de ressources ou d\'équipements sont interdits.':'Permanent lending of resources or equipment is forbidden.',
  'IV. Bases':'IV. Bases',
  'Chaque équipe doit posséder sa propre base.':'Each team must have its own base.',
  'Il est interdit :':'The following are forbidden:',
  'D\'héberger une autre équipe.':'Housing another team.',
  'De construire une base pour une autre équipe.':'Building a base for another team.',
  'De partager une compound.':'Sharing a compound.',
  'De partager des défenses.':'Sharing defenses.',
  'De partager un TC.':'Sharing a TC.',
  'Les bases satellites destinées uniquement à contourner les règles pourront être supprimées.':'Satellite bases used only to bypass the rules may be removed.',
  'V. PvP':'V. PvP',
  'Le PvP est libre. Le kill on sight (KOS) est autorisé.':'PvP is unrestricted. Kill on sight (KOS) is allowed.',
  'Le camping est autorisé tant qu\'il utilise uniquement les mécaniques normales du jeu.':'Camping is allowed as long as it only uses normal game mechanics.',
  'L\'utilisation de bugs ou d\'exploits est interdite.':'Using bugs or exploits is forbidden.',
  'VI. Raids':'VI. Raids',
  'Les raids sont autorisés à toute heure.':'Raids are allowed at any time.',
  'Pendant un raid :':'During a raid:',
  'Aucune autre équipe ne peut intervenir volontairement.':'No other team may deliberately intervene.',
  'Aucune aide extérieure ne peut être demandée.':'No outside help may be requested.',
  'Aucune défense extérieure organisée n\'est autorisée.':'No organized outside defense is allowed.',
  'Les contre-raids naturels restent autorisés si l\'équipe n\'a aucun lien avec les participants.':'Natural counter-raids remain allowed if the team has no connection to the participants.',
  'VII. Le grief':'VII. Griefing',
  'Le grief est strictement interdit sur Greenland Rust.':'Griefing is strictly forbidden on Greenland Rust.',
  'Est considéré comme du grief tout comportement visant principalement à empêcher un joueur ou une équipe de continuer à jouer normalement après une action PvP ou un raid.':'Griefing means any behavior mainly intended to prevent a player or team from continuing to play normally after PvP or a raid.',
  'Actions interdites :':'Forbidden actions:',
  'Condamner volontairement une base.':'Deliberately sealing off a base.',
  'Remplacer un TC dans le seul but de bloquer définitivement les propriétaires.':'Replacing a TC solely to permanently lock out the owners.',
  'Poser des murs, portes, fondations ou constructions destinés à empêcher durablement la récupération d\'une base.':'Placing walls, doors, foundations or other structures intended to permanently prevent recovery of a base.',
  'Détruire ou modifier une base après un raid sans nécessité de gameplay, uniquement pour nuire.':'Destroying or modifying a base after a raid without gameplay necessity, solely to cause harm.',
  'Utiliser une mécanique, un bug ou un glitch pour rendre une base inutilisable.':'Using a mechanic, bug or glitch to make a base unusable.',
  'Après un raid :':'After a raid:',
  'Les assaillants peuvent piller la base et sécuriser temporairement leur extraction. Toute action visant à condamner, bloquer ou rendre définitivement la base inutilisable est considérée comme du grief et sera sanctionnée.':'Raiders may loot the base and temporarily secure their extraction. Any action intended to seal, block or permanently make the base unusable is considered griefing and will be punished.',
  'VIII. Fair-play':'VIII. Fair play',
  'Sont strictement interdits :':'Strictly forbidden:',
  'Cheats.':'Cheats.',
  'Scripts.':'Scripts.',
  'Macros.':'Macros.',
  'Logiciels tiers.':'Third-party software.',
  'ESP.':'ESP.',
  'Aimbot.':'Aimbot.',
  'Recoil script.':'Recoil scripts.',
  'Exploitation volontaire de bugs.':'Deliberate bug exploitation.',
  'Toute découverte de bug doit être signalée.':'Any discovered bug must be reported.',
  'IX. Comportement':'IX. Conduct',
  'Aucune tolérance concernant :':'Zero tolerance for:',
  'Racisme.':'Racism.',
  'Homophobie.':'Homophobia.',
  'Discrimination.':'Discrimination.',
  'Harcèlement.':'Harassment.',
  'Menaces réelles.':'Real-life threats.',
  'Sont également interdits : spam, flood, publicité, usurpation d\'identité d\'un membre du staff.':'Also forbidden: spam, flooding, advertising and impersonating a staff member.',
  'X. Signalements':'X. Reports',
  'Toute plainte devra contenir une vidéo, une capture d\'écran ou un combatlog si nécessaire.':'Any complaint must include a video, screenshot or combat log when necessary.',
  'Les accusations sans preuve seront ignorées. Les faux signalements volontaires pourront être sanctionnés.':'Accusations without evidence will be ignored. Deliberately false reports may be punished.',
  'XI. Staff':'XI. Staff',
  'Le staff représente l\'autorité du serveur. Les décisions sont finales.':'Staff represents the authority of the server. Decisions are final.',
  'Toute tentative de mentir, cacher des informations, falsifier des preuves ou contourner une sanction pourra entraîner une aggravation de la sanction.':'Any attempt to lie, hide information, falsify evidence or evade a punishment may result in a harsher penalty.',
  'XII. Sanctions':'XII. Penalties',
  'Non-respect mineur':'Minor violation',
  'Avertissement':'Warning',
  'Récidive':'Repeat offense',
  'Bannissement temporaire':'Temporary ban',
  'Teaming':'Teaming',
  'Ban temporaire ou permanent':'Temporary or permanent ban',
  'Exploit de bug':'Bug exploit',
  'Ban permanent':'Permanent ban',
  'Cheat':'Cheating',
  'Contournement de ban':'Ban evasion',
  'XIII. Bon sens':'XIII. Common sense',
  'Toutes les situations ne peuvent pas être prévues par un règlement.':'Not every situation can be covered by written rules.',
  'Si un joueur exploite volontairement une faille du règlement, une mécanique du jeu ou une situation imprévue dans le seul but d\'obtenir un avantage déloyal ou de nuire à l\'expérience des autres joueurs, le staff pourra intervenir et appliquer une sanction adaptée.':'If a player deliberately exploits a loophole in the rules, a game mechanic or an unforeseen situation solely to gain an unfair advantage or harm other players’ experience, staff may intervene and apply an appropriate penalty.',
  'Entre dans Greenland':'Enter Greenland',
  'Commande de connexion :':'Connection command:',
  'Copier la commande':'Copy command',
  '© GREENLAND RUST - Site officiel':'© GREENLAND RUST - Official website'
};

const languageTextNodes=[];
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(node){
  const parent=node.parentElement;
  if(!parent || ['SCRIPT','STYLE'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
  return node.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
}});
let textNode;
while((textNode=walker.nextNode())){
  languageTextNodes.push({node:textNode,fr:textNode.nodeValue});
}

let currentLang='fr';
try{currentLang=localStorage.getItem('greenland-language')==='en'?'en':'fr'}catch(e){}

function preserveWhitespace(original,replacement){
  const lead=(original.match(/^\s*/)||[''])[0];
  const trail=(original.match(/\s*$/)||[''])[0];
  return lead+replacement+trail;
}

function trUI(fr,en){return currentLang==='en'?en:fr;}

function applyLanguage(lang){
  currentLang=lang==='en'?'en':'fr';
  document.documentElement.lang=currentLang;
  document.title=currentLang==='en'?'GREENLAND RUST - Official website':'GREENLAND RUST - Site officiel';

  languageTextNodes.forEach(({node,fr})=>{
    const key=fr.replace(/\s+/g,' ').trim();
    const translated=currentLang==='en'?(TEXT_EN[key]??key):key;
    node.nodeValue=preserveWhitespace(fr,translated);
  });

  document.querySelectorAll('.lang-option').forEach(btn=>{
    const active=btn.dataset.lang===currentLang;
    btn.classList.toggle('active',active);
    btn.setAttribute('aria-pressed',active?'true':'false');
  });

  const langSwitch=document.querySelector('#langSwitch');
  if(langSwitch) langSwitch.setAttribute('aria-label',trUI('Langue','Language'));
  if(burger) burger.setAttribute('aria-label',trUI('Ouvrir le menu','Open menu'));
  setAudioButton();

  try{localStorage.setItem('greenland-language',currentLang)}catch(e){}
}

document.querySelectorAll('.lang-option').forEach(btn=>{
  btn.addEventListener('click',()=>applyLanguage(btn.dataset.lang));
});

// Audio ---------------------------------------------------------------------
const audioBtn=document.querySelector('#audioBtn');
const ambience=document.querySelector('#ambienceAudio');
let audioWanted=true;
let fadeTimer=null;
let audioStarted=false;

ambience.volume=0.78;

function setAudioButton(){
  if(!audioBtn) return;
  audioBtn.textContent=currentLang==='en'
    ?(audioWanted?'Ambience ON':'Ambience OFF')
    :(audioWanted?'Ambiance ON':'Ambiance OFF');
  audioBtn.classList.toggle('active',audioWanted);
  audioBtn.setAttribute('aria-pressed',audioWanted?'true':'false');
}

function fadeAudio(target,resetWhenSilent=false){
  clearInterval(fadeTimer);
  fadeTimer=setInterval(()=>{
    const diff=target-ambience.volume;
    if(Math.abs(diff)<0.03){
      ambience.volume=target;
      clearInterval(fadeTimer);
      if(target===0 && resetWhenSilent){
        ambience.pause();
        ambience.currentTime=0;
        audioStarted=false;
      }
      return;
    }
    ambience.volume=Math.max(0,Math.min(1,ambience.volume+diff*0.22));
  },30);
}

async function startAmbience(fromGesture=false){
  if(!audioWanted) return false;
  if(!ambience.paused){audioStarted=true;return true;}
  try{
    await ambience.play();
    audioStarted=true;
    if(ambience.volume<0.2) ambience.volume=0.2;
    fadeAudio(0.78);
    removeUnlockListeners();
    return true;
  }catch(e){
    audioStarted=false;
    if(!fromGesture) addUnlockListeners();
    return false;
  }
}

function stopAmbience(){
  audioWanted=false;
  setAudioButton();
  removeUnlockListeners();
  fadeAudio(0,true);
}

function unlockAudioFromInteraction(event){
  if(!audioWanted || !ambience.paused) return;
  if(event?.target?.closest?.('#audioBtn')) return;
  startAmbience(true);
}

function addUnlockListeners(){
  window.addEventListener('pointerdown',unlockAudioFromInteraction,true);
  window.addEventListener('touchstart',unlockAudioFromInteraction,{capture:true,passive:true});
  window.addEventListener('keydown',unlockAudioFromInteraction,true);
}

function removeUnlockListeners(){
  window.removeEventListener('pointerdown',unlockAudioFromInteraction,true);
  window.removeEventListener('touchstart',unlockAudioFromInteraction,true);
  window.removeEventListener('keydown',unlockAudioFromInteraction,true);
}

setAudioButton();
addUnlockListeners();
startAmbience(false);
window.addEventListener('pageshow',()=>{if(audioWanted && ambience.paused) startAmbience(false)});
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='visible' && audioWanted && ambience.paused && navigator.userActivation?.hasBeenActive){startAmbience(true)}
});

audioBtn?.addEventListener('click',async()=>{
  if(audioWanted && ambience.paused){await startAmbience(true);return;}
  if(audioWanted){stopAmbience();}
  else{audioWanted=true;setAudioButton();addUnlockListeners();await startAmbience(true);}
});

// Connexion -----------------------------------------------------------------
const connectCmd='client.connect 167.235.12.26:28015';
function copyConnect(targetId){
  navigator.clipboard.writeText(connectCmd).then(()=>{
    const el=document.querySelector(targetId);
    if(el) el.textContent=trUI('Commande copiée : colle-la dans la console F1 de Rust.','Command copied: paste it into the Rust F1 console.');
    setTimeout(()=>{if(el) el.textContent=''},4000);
  }).catch(()=>{
    const el=document.querySelector(targetId);
    if(el) el.textContent=trUI('Impossible de copier automatiquement. Copie la commande affichée.','Could not copy automatically. Copy the command shown above.');
  });
}
document.querySelector('#copyConnect')?.addEventListener('click',()=>copyConnect('#copyFeedback'));
document.querySelector('#copyConnectTop')?.addEventListener('click',()=>copyConnect('#copyFeedbackTop'));

// Décor fixe ----------------------------------------------------------------
const experienceSection=document.querySelector('#experience');
function updateSideArt(){
  if(!experienceSection) return;
  const triggerTop=120;
  const show=experienceSection.getBoundingClientRect().top<=triggerTop;
  document.body.classList.toggle('full-scene-visible',show);
}
window.addEventListener('scroll',updateSideArt,{passive:true});
window.addEventListener('resize',updateSideArt);
updateSideArt();

// Bip électronique type C4 --------------------------------------------------
const c4ClickSfx=new Audio('assets/c4-click.wav');
c4ClickSfx.preload='auto';
c4ClickSfx.volume=0.62;
function playC4Click(){
  try{
    const sfx=c4ClickSfx.cloneNode();
    sfx.volume=c4ClickSfx.volume;
    sfx.play().catch(()=>{});
  }catch(e){}
}
document.addEventListener('click',(event)=>{
  const interactive=event.target.closest('.navbar a, .navbar button, .hero-actions .btn, .join-actions .btn, summary');
  if(interactive) playC4Click();
},true);

// Applique la langue mémorisée après initialisation des contrôles dynamiques.
applyLanguage(currentLang);

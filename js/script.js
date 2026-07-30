const observer=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting)t.target.classList.add('visible')})},{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));document.querySelectorAll('details').forEach(e=>{e.addEventListener('toggle',()=>{if(e.open)document.querySelectorAll('details').forEach(t=>{if(t!==e)t.open=false})})});document.querySelector('.burger').addEventListener('click',()=>document.querySelector('.navlinks').classList.toggle('open'));

const audioBtn=document.querySelector('#audioBtn');
const ambience=document.querySelector('#ambienceAudio');
let audioWanted=true;
let fadeTimer=null;
let audioStarted=false;

ambience.volume=0.78;

function setAudioButton(){
  audioBtn.textContent=audioWanted?'Ambiance ON':'Ambiance OFF';
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
  if(!ambience.paused){
    audioStarted=true;
    return true;
  }
  try{
    // L'appel à play() reste directement dans le geste utilisateur quand
    // Opera/Chrome ont bloqué l'autoplay sonore.
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
  // Le bouton audio gère son propre clic pour éviter qu'un même clic
  // démarre puis coupe immédiatement la musique.
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

// Tentative immédiate. Si Opera GX la refuse, le premier clic/toucher/touche
// n'importe où sur la page lance l'ambiance automatiquement.
startAmbience(false);
window.addEventListener('pageshow',()=>{ if(audioWanted && ambience.paused) startAmbience(false); });
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='visible' && audioWanted && ambience.paused && navigator.userActivation?.hasBeenActive){
    startAmbience(true);
  }
});

audioBtn.addEventListener('click',async()=>{
  if(audioWanted && ambience.paused){
    // Si l'autoplay était bloqué, le premier clic sur ON démarre réellement
    // le son au lieu de basculer immédiatement sur OFF.
    await startAmbience(true);
    return;
  }
  if(audioWanted){
    stopAmbience();
  }else{
    audioWanted=true;
    setAudioButton();
    addUnlockListeners();
    await startAmbience(true);
  }
});

const connectCmd='client.connect 167.235.12.26:28015';
function copyConnect(targetId){
  navigator.clipboard.writeText(connectCmd).then(()=>{
    const el=document.querySelector(targetId);
    if(el) el.textContent='Commande copiée : colle-la dans la console F1 de Rust.';
    setTimeout(()=>{ if(el) el.textContent=''; },4000);
  });
}
document.querySelector('#copyConnect')?.addEventListener('click',()=>copyConnect('#copyFeedback'));
document.querySelector('#copyConnectTop')?.addEventListener('click',()=>copyConnect('#copyFeedbackTop'));


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

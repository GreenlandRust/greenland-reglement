const observer=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting)t.target.classList.add('visible')})},{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));document.querySelectorAll('details').forEach(e=>{e.addEventListener('toggle',()=>{if(e.open)document.querySelectorAll('details').forEach(t=>{if(t!==e)t.open=false})})});document.querySelector('.burger').addEventListener('click',()=>document.querySelector('.navlinks').classList.toggle('open'));

const audioBtn=document.querySelector('#audioBtn');
const ambience=document.querySelector('#ambienceAudio');
let audioWanted=true;
let audioPlaying=false;
let fadeTimer=null;

ambience.volume=0;

function setAudioButton(){
  audioBtn.textContent=audioWanted?'Ambiance ON':'Ambiance OFF';
  audioBtn.classList.toggle('active',audioWanted);
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
        audioPlaying=false;
      }
      return;
    }
    ambience.volume=Math.max(0,Math.min(1,ambience.volume+diff*0.18));
  },35);
}

async function startAmbience(){
  if(!audioWanted || !ambience.paused) return true;
  try{
    await ambience.play();
    audioPlaying=true;
    fadeAudio(0.9);
    removeUnlockListeners();
    return true;
  }catch(e){
    audioPlaying=false;
    return false;
  }
}

function stopAmbience(){
  audioWanted=false;
  setAudioButton();
  fadeAudio(0,true);
}

async function unlockAudio(){
  if(audioWanted && ambience.paused) await startAmbience();
}

function addUnlockListeners(){
  document.addEventListener('pointerdown',unlockAudio,{capture:true});
  document.addEventListener('touchstart',unlockAudio,{capture:true,passive:true});
  document.addEventListener('keydown',unlockAudio,{capture:true});
}

function removeUnlockListeners(){
  document.removeEventListener('pointerdown',unlockAudio,{capture:true});
  document.removeEventListener('touchstart',unlockAudio,{capture:true});
  document.removeEventListener('keydown',unlockAudio,{capture:true});
}

setAudioButton();
addUnlockListeners();
startAmbience();

audioBtn.addEventListener('click',async()=>{
  if(audioWanted){
    stopAmbience();
  }else{
    audioWanted=true;
    setAudioButton();
    addUnlockListeners();
    await startAmbience();
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

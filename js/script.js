const observer=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting)t.target.classList.add('visible')})},{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));document.querySelectorAll('details').forEach(e=>{e.addEventListener('toggle',()=>{if(e.open)document.querySelectorAll('details').forEach(t=>{if(t!==e)t.open=false})})});document.querySelector('.burger').addEventListener('click',()=>document.querySelector('.navlinks').classList.toggle('open'));

const audioBtn=document.querySelector('#audioBtn');
const ambience=document.querySelector('#ambienceAudio');
ambience.volume=0;
let audioPlaying=false;
let fadeTimer=null;

function fadeAudio(target){
  clearInterval(fadeTimer);
  fadeTimer=setInterval(()=>{
    const diff=target-ambience.volume;
    if(Math.abs(diff)<0.03){
      ambience.volume=target;
      clearInterval(fadeTimer);
      if(target===0){ambience.pause();ambience.currentTime=0;}
      return;
    }
    ambience.volume=Math.max(0,Math.min(1,ambience.volume+diff*0.18));
  },35);
}

audioBtn.addEventListener('click',async()=>{
  if(!audioPlaying){
    try{
      await ambience.play();
      audioPlaying=true;
      audioBtn.textContent='Ambiance ON';
      audioBtn.classList.add('active');
      fadeAudio(0.7);
    }catch(e){
      audioBtn.textContent='Son bloqué';
    }
  }else{
    audioPlaying=false;
    audioBtn.textContent='Ambiance OFF';
    audioBtn.classList.remove('active');
    fadeAudio(0);
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

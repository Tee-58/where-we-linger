const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
toggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const modal=document.querySelector('.search-modal');
document.querySelector('.search-btn')?.addEventListener('click',()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');setTimeout(()=>modal.querySelector('input').focus(),50)});
document.querySelector('.close-search')?.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')});
modal?.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}});

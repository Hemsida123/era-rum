const toggle=document.querySelector('.menu-toggle');
const mobileNav=document.querySelector('.mobile-nav');
function setMenuBackground(open){document.querySelector('main').inert=open;document.querySelector('footer').inert=open}
function closeMenu(){if(!toggle)return;toggle.setAttribute('aria-expanded','false');mobileNav.hidden=true;document.body.classList.remove('menu-open');setMenuBackground(false)}
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));mobileNav.hidden=!open;document.body.classList.toggle('menu-open',open);setMenuBackground(open)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle?.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus()}});
mobileNav?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
matchMedia('(min-width:768px)').addEventListener('change',e=>{if(e.matches)closeMenu()});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 let count=0;
 document.querySelectorAll('.all-projects .project-item').forEach(card=>{const filter=button.dataset.filter;const show=filter==='Alla'||card.dataset.category.toLocaleLowerCase('sv').includes(filter.toLocaleLowerCase('sv'))||(filter==='Helhetsgestaltning'&&card.dataset.category==='Ombyggnation');card.hidden=!show;if(show)count++});
 document.querySelector('.project-count').textContent=`${count} projekt`;
}));
document.querySelectorAll('[data-review]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-review]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 document.querySelectorAll('.review').forEach((review,i)=>review.hidden=i!==Number(button.dataset.review));
}));
const lightbox=document.querySelector('.lightbox');
document.querySelectorAll('.gallery-open').forEach(button=>button.addEventListener('click',()=>{
 const img=lightbox.querySelector('img');img.src=button.dataset.image;img.alt=button.dataset.alt;lightbox.showModal();document.body.classList.add('lightbox-open');
}));
lightbox?.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.close());
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
lightbox?.addEventListener('close',()=>document.body.classList.remove('lightbox-open'));
document.querySelectorAll('.accordion details').forEach(detail=>detail.addEventListener('toggle',()=>{if(detail.open)document.querySelectorAll('.accordion details').forEach(other=>{if(other!==detail)other.open=false})}));


// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1);
    if(id){ e.preventDefault(); document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); }
  });
});

// Preloader (simple fade-out)
window.addEventListener('load', ()=>{
  const pre = document.getElementById('preloader');
  if(pre){ pre.style.opacity='0'; setTimeout(()=>pre.remove(), 500) }

  // Center memlib overlay badges into a container wrapper
  try{
    const mem = document.getElementById('memlib');
    if(mem){
      const absBadges = Array.from(mem.children).filter(el => el.matches('.badge, span.badge') && getComputedStyle(el).position === 'absolute');
      if(absBadges.length){
        const wrap = document.createElement('div');
        wrap.className = 'container';
        wrap.style.position = 'relative';
        wrap.style.margin = '12px auto';
        mem.insertBefore(wrap, absBadges[0]);
        absBadges.forEach(el => wrap.appendChild(el));
        // Remove center "Легенда" badge to avoid overlap
        const legend = absBadges.find(el => /легенд/i.test(el.textContent) || (el.style.left === '50%' && el.style.top === '50%'));
        if(legend) legend.remove();
      }
    }
  }catch(e){ /* no-op */ }

  // Copy-to-clipboard helper for elements with [data-copy]
  try{
    document.querySelectorAll('[data-copy]').forEach(el=>{
      el.style.cursor = 'pointer';
      el.title = el.title || 'Скопировать';
      el.addEventListener('click',()=>{
        const sel = el.getAttribute('data-copy');
        const target = sel ? document.querySelector(sel) : el;
        const text = target ? target.textContent.trim() : '';
        if(text){ navigator.clipboard?.writeText(text); el.classList.add('copied'); setTimeout(()=>el.classList.remove('copied'), 800); }
      });
    });
  }catch(e){ /* no-op */ }
});

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('visible'); observer.unobserve(en.target);} });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Parallax on scroll for sections with data-parallax
function parallaxScroll(){
  const y = window.scrollY || window.pageYOffset;
  document.querySelectorAll('[data-parallax="bg"]').forEach(sec=>{
    const speed = parseFloat(sec.dataset.speed || 0.3);
    sec.style.backgroundPosition = `center ${-y*speed}px`;
  });
}
window.addEventListener('scroll', parallaxScroll);

// Mouse parallax for hero layers
const layers = document.querySelectorAll('.parallax-layer');
document.addEventListener('mousemove', (e)=>{
  const cx = window.innerWidth/2, cy = window.innerHeight/2;
  const dx = (e.clientX - cx)/cx;
  const dy = (e.clientY - cy)/cy;
  layers.forEach((el,i)=>{
    const depth = (i+1)*10;
    el.style.transform = `translate(${dx*depth}px, ${dy*depth}px)`;
  });
});

// Counters
function animateCounter(el){
  const to = parseFloat(el.dataset.to || "0");
  const dur = parseInt(el.dataset.duration || "1200");
  let start = null;
  function step(ts){
    if(!start) start = ts;
    const p = Math.min(1,(ts-start)/dur);
    el.innerText = (to*p).toFixed(0);
    if(p<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
document.querySelectorAll('[data-counter]').forEach(animateCounter);

// FAQ
document.querySelectorAll('.faq-item h4').forEach(h=>{
  h.addEventListener('click',()=>{
    h.parentElement.classList.toggle('open');
  });
});

// Scroll to top
const topBtn = document.getElementById('scrolltop');
window.addEventListener('scroll',()=>{
  if(window.scrollY>800){ topBtn.classList.add('show'); } else { topBtn.classList.remove('show'); }
});
topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// Mobile menu (burger)
try{
  const nav = document.querySelector('header .nav');
  const links = document.querySelector('header .links');
  const actions = document.querySelector('header .right');
  const toggle = document.querySelector('header .menu-toggle');
  if(nav && links && actions && toggle){
    let panel = null;
    const ensurePanel = ()=>{
      if(panel) return panel;
      panel = document.createElement('div');
      panel.className = 'mobile-menu';
      panel.innerHTML = `
        <div class="menu-links">${links.innerHTML}</div>
        <div class="menu-actions">${actions.innerHTML}</div>
      `;
      document.body.appendChild(panel);
      return panel;
    };
    const close = ()=>{ if(panel){ panel.classList.remove('open'); } };
    toggle.addEventListener('click',(e)=>{
      e.stopPropagation();
      const p = ensurePanel();
      // position just under header
      const rect = nav.getBoundingClientRect();
      p.style.top = `${rect.bottom + 8}px`;
      p.classList.toggle('open');
    });
    document.addEventListener('click',(e)=>{
      if(panel && panel.classList.contains('open')){
        if(!panel.contains(e.target) && !toggle.contains(e.target)) close();
      }
    });
    window.addEventListener('resize',()=>close());
  }
}catch(e){ /* no-op */ }

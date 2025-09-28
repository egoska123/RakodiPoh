
// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1);
    if(id){ e.preventDefault(); document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); }
  });
});

// Language toggle
const RAKODI_LANG_KEY = 'rakodi-lang';
const translations = {
  ru: {
    'meta.title': 'RAKODI — Миссия мем-города',
    'meta.description': 'RAKODI — город без координат. Узнай миссию мем-ордена, почувствуй кинематографичный лор и выбери точку входа в комьюнити Solana.',
    'nav.home': 'Главная',
    'nav.mission': 'Миссия',
    'nav.tokenomics': 'Токеномика',
    'nav.brotherhood': 'Братство.',
    'nav.news': 'Мемы',
    'nav.buy': 'Купить',
    'hero.tag': 'Миссия мем-ордена',
    'hero.title': 'RAKODI — <span class="mission-hero__accent">Город которого нет на картах.</span>',
    'hero.lead': '<span class="mission-hero__highlight">Живи, управляя своей судьбой, и смело тянись к звёздам.</span>',
    'hero.quote': 'Пусть разум будет твоим клинком, а сердце — пламенем, что направляет его к свету.',
    'hero.primaryCta': 'Смотреть кинематографический тизер',
    'hero.secondaryCta': 'Читать легенду',
    'hero.meta1': 'Видео • Мем-библиотека • Братство',
    'hero.meta2': 'Solana · community · орден мемов',
    'card.label': 'ЛОР-ДОСЬЕ',
    'card.season': 'Сезон I · «Возвращение огня»',
    'card.stat1.title': 'Формат',
    'card.stat1.value': 'Кинематографичный мем-лор',
    'card.stat2.title': 'Статус',
    'card.stat2.value': 'Премьера в подготовке',
    'card.stat3.title': 'Цель',
    'card.stat3.value': 'Разжечь интерес и привести в Орден',
    'card.chip1': 'Solana',
    'card.chip2': 'Мем-библиотека',
    'card.chip3': 'Видео-релизы',
    'card.window': 'Следующий тизер · Октябрь 2024',
    'card.availability': 'Точки входа: YouTube · Telegram · Братство',
    'card.play': 'Смотреть превью',
    'lang.aria': 'Сменить язык',
    'header.menu': 'Меню'
  },
  en: {
    'meta.title': 'RAKODI — Mission of the Meme City',
    'meta.description': 'RAKODI is a city without coordinates. Explore the mission of the meme order, feel the cinematic lore, and choose your entry into the Solana community.',
    'nav.home': 'Home',
    'nav.mission': 'Mission',
    'nav.tokenomics': 'Tokenomics',
    'nav.brotherhood': 'Brotherhood.',
    'nav.news': 'Memes',
    'nav.buy': 'Buy',
    'hero.tag': 'Mission of the Meme Order',
    'hero.title': 'RAKODI — <span class="mission-hero__accent">The City That Doesn’t Exist on Maps.</span>',
    'hero.lead': '<span class="mission-hero__highlight">Live by steering your own destiny and boldly reach for the stars.</span>',
    'hero.quote': 'Let your mind be the blade, and your heart the flame that directs it toward the light.',
    'hero.primaryCta': 'Watch the cinematic teaser',
    'hero.secondaryCta': 'Read the legend',
    'hero.meta1': 'Videos • Meme Library • Brotherhood',
    'hero.meta2': 'Solana · Community · Meme Order',
    'card.label': 'LORE DOSSIER',
    'card.season': 'Season I · “Return of the Flame”',
    'card.stat1.title': 'Format',
    'card.stat1.value': 'Cinematic meme lore',
    'card.stat2.title': 'Status',
    'card.stat2.value': 'Premiere in progress',
    'card.stat3.title': 'Objective',
    'card.stat3.value': 'Ignite curiosity and lead into the Order',
    'card.chip1': 'Solana',
    'card.chip2': 'Meme Library',
    'card.chip3': 'Video drops',
    'card.window': 'Next teaser · October 2024',
    'card.availability': 'Entry points: YouTube · Telegram · Brotherhood',
    'card.play': 'Play preview',
    'lang.aria': 'Switch language',
    'header.menu': 'Menu'
  }
};

let currentLang = (typeof localStorage !== 'undefined' && localStorage.getItem(RAKODI_LANG_KEY) === 'en') ? 'en' : 'ru';

function updateLangToggles(){
  document.querySelectorAll('.lang-toggle').forEach(btn=>{
    btn.dataset.current = currentLang;
    btn.classList.toggle('lang-ru', currentLang === 'ru');
    btn.classList.toggle('lang-en', currentLang === 'en');
    const label = translations[currentLang]?.['lang.aria'] || '';
    if(label){
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
    }
  });
}

function applyLanguage(lang){
  if(!translations[lang]) return;
  currentLang = lang;
  try{ localStorage.setItem(RAKODI_LANG_KEY, lang); }catch(e){ /* ignore */ }
  document.documentElement.lang = lang;
  document.title = translations[lang]['meta.title'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if(metaDesc){ metaDesc.setAttribute('content', translations[lang]['meta.description']); }
  const menuToggle = document.querySelector('.menu-toggle');
  if(menuToggle){
    const menuLabel = translations[lang]['header.menu'];
    if(menuLabel) menuToggle.setAttribute('aria-label', menuLabel);
  }
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const text = translations[lang][key];
    if(typeof text === 'string') el.textContent = text;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const key = el.getAttribute('data-i18n-html');
    const html = translations[lang][key];
    if(typeof html === 'string') el.innerHTML = html;
  });
  updateLangToggles();
}

applyLanguage(currentLang);

document.addEventListener('click', (event)=>{
  const toggle = event.target.closest('.lang-toggle');
  if(!toggle) return;
  event.preventDefault();
  applyLanguage(currentLang === 'ru' ? 'en' : 'ru');
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
(function(){
  const buttons = document.querySelectorAll('.faq-item__question');
  if(!buttons.length) return;

  document.body.classList.add('faq-ready');

  const closeItem = (btn)=>{
    const item = btn.closest('.faq-item');
    const answer = item?.querySelector('.faq-item__answer');
    if(!item || !answer) return;
    item.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
    answer.setAttribute('aria-hidden','true');
    answer.style.maxHeight = '0px';
  };

  const openItem = (btn)=>{
    const item = btn.closest('.faq-item');
    const answer = item?.querySelector('.faq-item__answer');
    if(!item || !answer) return;
    item.classList.add('open');
    btn.setAttribute('aria-expanded','true');
    answer.setAttribute('aria-hidden','false');
    answer.style.maxHeight = `${answer.scrollHeight}px`;
  };

  buttons.forEach(btn=>{
    const item = btn.closest('.faq-item');
    const answer = item?.querySelector('.faq-item__answer');
    if(answer){
      answer.setAttribute('aria-hidden', item?.classList.contains('open') ? 'false' : 'true');
      if(item?.classList.contains('open')){
        btn.setAttribute('aria-expanded','true');
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }else{
        btn.setAttribute('aria-expanded','false');
        answer.style.maxHeight = '0px';
      }
    }

    btn.addEventListener('click',()=>{
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      buttons.forEach(other=>{ if(other!==btn) closeItem(other); });
      if(isOpen){
        closeItem(btn);
      }else{
        openItem(btn);
      }
    });
  });

  window.addEventListener('resize',()=>{
    document.querySelectorAll('.faq-item.open .faq-item__answer').forEach(ans=>{
      ans.style.maxHeight = `${ans.scrollHeight}px`;
    });
  });
})();

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

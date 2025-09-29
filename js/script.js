
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
    'hero.banner': 'Полное издание',
    'hero.title': 'RAKODI — <span class="mission-hero__accent">Город которого нет на картах.</span>',
    'hero.lead': '<span class="mission-hero__highlight">Живи, управляя своей судьбой, и смело тянись к звёздам.</span>',
    'hero.quote': 'Пусть разум будет твоим клинком, а сердце — пламенем, что направляет его к свету.',
    'hero.primaryCta': 'Присоединиться к Ордену',
    'hero.secondaryCta': 'Смотреть тизер',
    'hero.meta1': 'Видео • Мем-библиотека • Братство',
    'hero.meta2': 'Solana · сообщество · орден мемов',
    'panel.label': 'ЛОР-ДОСЬЕ',
    'panel.season': 'Сезон I · «Возвращение огня»',
    'panel.stat1.label': 'Формат',
    'panel.stat1.value': 'Кинематографичный мем-лор',
    'panel.stat2.label': 'Статус',
    'panel.stat2.value': 'Премьера в подготовке',
    'panel.stat3.label': 'Цель',
    'panel.stat3.value': 'Разжечь интерес и привести в Орден',
    'panel.entry': 'Точки входа',
    'panel.meta': 'YouTube · Telegram · Братство',
    'panel.cta': 'Смотреть превью',
    'lang.aria': 'Сменить язык',
    'header.menu': 'Меню',
    'alexandria.chip': 'Хроника происхождения',
    'alexandria.title': 'Первая Александрия — <span class="alexandria-title__accent">город, вдохновивший Rakodi</span>',
    'alexandria.paragraph1': 'Первая Александрия — это легендарный город в Египте, основанный Александром Македонским в 331 году до н.э. Он задумывал его как новый центр торговли и культуры, соединяющий Египет с античным миром Средиземноморья. После смерти Александра город стал столицей Птолемеев и превратился в интеллектуальное сердце древности. Именно здесь возникла знаменитая Александрийская библиотека — хранилище знаний со всего света, и был построен маяк на острове Фарос, одно из семи чудес света. Александрия быстро обрела славу города философов, поэтов и учёных — места, где рождались новые идеи и смыслы.',
    'alexandria.paragraph2': 'Важно помнить, что до основания Александрии на этом месте существовало египетское поселение Ракотис. Именно от него ведёт своё происхождение название «Ракоди» — как символ преемственности, памяти и вдохновения. Так древний Ракотис стал основой для города, изменившего историю, а сегодня метафорой этого города станет наш проект.',
    'alexandria.detail1.label': 'Инженерия знаний',
    'alexandria.detail1.text': 'Свитки Библиотеки и маяк на Фаросе превращали Александрию в освещённый узел, ведущий купцов, мыслителей и мечтателей по всему Средиземноморью.',
    'alexandria.detail2.label': 'Культура в движении',
    'alexandria.detail2.text': 'Поэты, философы и учёные задавали пульс города, доказывая, что идеи — лучшая валюта, когда сообщество поддерживает их живыми.',
    'alexandria.detail3.label': 'Наследие Ракотиса',
    'alexandria.detail3.text': 'Память о Ракотисе вливается в Rakodi. Мы наследуем дух создателей, превращающих приморское поселение в маяк, устремлённый «ту зе мун».',
    'alexandria.caption': 'Ту зе мун, Александр Македонский'
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
    'hero.banner': 'Complete Edition',
    'hero.title': 'RAKODI — <span class="mission-hero__accent">The City That Doesn’t Exist on Maps.</span>',
    'hero.lead': '<span class="mission-hero__highlight">Live by steering your own destiny and boldly reach for the stars.</span>',
    'hero.quote': 'Let your mind be the blade, and your heart the flame that directs it toward the light.',
    'hero.primaryCta': 'Join the Order',
    'hero.secondaryCta': 'Watch the teaser',
    'hero.meta1': 'Videos • Meme Library • Brotherhood',
    'hero.meta2': 'Solana · Community · Meme Order',
    'panel.label': 'LORE DOSSIER',
    'panel.season': 'Season I · “Return of the Flame”',
    'panel.stat1.label': 'Format',
    'panel.stat1.value': 'Cinematic meme lore',
    'panel.stat2.label': 'Status',
    'panel.stat2.value': 'Premiere in progress',
    'panel.stat3.label': 'Objective',
    'panel.stat3.value': 'Ignite curiosity and lead into the Order',
    'panel.entry': 'Entry points',
    'panel.meta': 'YouTube · Telegram · Brotherhood',
    'panel.cta': 'Play preview',
    'lang.aria': 'Switch language',
    'header.menu': 'Menu',
    'alexandria.chip': 'Origin Chronicle',
    'alexandria.title': 'First Alexandria — <span class="alexandria-title__accent">the city that inspired Rakodi</span>',
    'alexandria.paragraph1': 'The first Alexandria is a legendary city in Egypt, founded by Alexander the Great in 331 BC. He envisioned it as a new center of trade and culture, uniting Egypt with the classical world of the Mediterranean. After Alexander’s death, the city became the capital of the Ptolemaic dynasty and grew into the intellectual heart of antiquity. It was here that the famous Library of Alexandria was created — a repository of knowledge from across the world — and the great Lighthouse of Pharos was built, one of the Seven Wonders of the Ancient World. Alexandria quickly gained renown as a city of philosophers, poets, and scholars — a place where new ideas and meanings were born.',
    'alexandria.paragraph2': 'It is important to remember that before Alexandria, there stood the Egyptian settlement of Rakotis. From this name comes “Rakodi” — a symbol of continuity, memory, and inspiration. Ancient Rakotis became the foundation of a city that changed history, and today its metaphor lives on in our project.',
    'alexandria.detail1.label': 'Knowledge Engine',
    'alexandria.detail1.text': 'Library scrolls and the Pharos lighthouse turned Alexandria into an illuminated hub that guided merchants, thinkers, and dreamers across the Mediterranean.',
    'alexandria.detail2.label': 'Culture in Motion',
    'alexandria.detail2.text': 'Poets, philosophers, and scientists shaped the city’s pulse — proving that ideas can be the greatest currency when a community keeps them alive.',
    'alexandria.detail3.label': 'Legacy of Rakotis',
    'alexandria.detail3.text': 'The memory of Rakotis flows into Rakodi. We inherit the spirit of builders who transform a coastal settlement into a beacon that reaches “to the moon.”',
    'alexandria.caption': 'To the moon, Alexander the Great'
  }
};


let currentLang = 'en';
if(typeof localStorage !== 'undefined'){
  const savedLang = localStorage.getItem(RAKODI_LANG_KEY);
  if(savedLang === 'ru' || savedLang === 'en'){
    currentLang = savedLang;
  }
}

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


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
    'alexandria.caption': 'Ту зе мун, Александр Македонский',
    'pharos.chip': 'Тренд I · Протокол маяка',
    'pharos.title': 'Фаросский маяк',
    'pharos.subtitle': 'Включи фонарик, подними его и зажги свой маяк.',
    'pharos.paragraph1': 'Маяк Фарос был не просто башней из камня, но голосом вечности, обращённым к людям. Его свет пронзал мрак, шепча морякам: «Путь есть. Даже если ты один посреди безграничного моря». Он был создан человеком, но в его сиянии чувствовалось присутствие богов — словно сама Вселенная протягивала руку тем, кто осмеливался выйти за горизонт.',
    'pharos.paragraph2': 'Для древнего мира Фарос был чудом света, воплощением веры в то, что человеческий разум и воля способны вознести огонь к небесам. Для нас он остаётся символом надежды, мужества и выбора. Свет всегда можно зажечь, даже когда вокруг тьма, и именно он способен стать ориентиром для других.',
    'pharos.paragraph3': 'Каждый человек носит в себе свой собственный Фарос — внутренний огонь, который способен не только освещать дорогу самому, но и вдохновлять тех, кто идёт рядом.',
    'pharos.caption': 'Зажги маяк. Подними сигнал.',
    'cinema.chip': 'Сигнальное кино',
    'cinema.title': 'Хранители поднятого света',
    'cinema.subtitle': 'Лёгкая эллинистическая карусель с основным фильмом и трендом поднятых фонариков.',
    'cinema.prev': 'Предыдущее видео',
    'cinema.next': 'Следующее видео',
    'cinema.dot1': 'К видео 1',
    'cinema.dot2': 'К видео 2',
    'cinema.slide1.tag': 'Фильм проекта',
    'cinema.slide1.title': 'Rakodi: Свет над городом',
    'cinema.slide1.text': 'Кинематографичный основной тизер с пролётами над невидимым городом, залитым морем огней.',
    'cinema.slide2.tag': 'Тренд маяка',
    'cinema.slide2.title': 'Подборка поднятых фонариков',
    'cinema.slide2.text': 'Динамичный монтаж создателей, поднимающих свет вверх — настроение, энергия и чистый мемный импульс.',
    'cinema.manifest.title': 'Свет, который мы храним',
    'cinema.manifest.text': 'Любить — значит открывать сердце миру и позволять ему звучать в тебе. Мечтать — значит видеть дальше горизонта и не бояться создавать невозможное. Смелость рождается там, где ты выбираешь идти вперёд, даже когда путь скрыт во тьме. А вера в себя — это тот свет, который никогда не гаснет, если ты сам его хранишь. Мы строим пространство, где любовь становится движением, мечты — основой, а вера — ключом к будущему. Мир ждёт тех, кто осмелится быть собой и прожить жизнь в полную силу. Ты с нами?',
    'finale.chip': 'Тренд I · Огонь маяка',
    'finale.title': 'Фарос зажжён!',
    'finale.paragraph1': 'Мы зажгли свой Фарос. Когда-то на острове Фарос горел величайший маяк древнего мира — чудо света, огонь которого освещал морякам путь через тьму и штормы. Его свет говорил каждому: «Ты не один. Путь существует». Сегодня мы продолжаем эту традицию. RAKODI зажигает свой собственный Фарос — не из камня и огня, а из идей, смелости и веры в человека. Веры в тебя. Это свет, который способен пробить тьму сомнений и открыть дорогу в будущее.',
    'finale.paragraph2': 'Мы верим: как маяк Фарос однажды стал символом надежды и величия, так и наш Фарос будет символом нового пути. Пусть его сияние станет ориентиром для тех, кто ищет свой свет, и знаком того, что вместе мы способны превратить ночь безумия и страха в рассвет разума и надежды.',
    'finale.cta.telegram': 'Сигнал в Telegram',
    'finale.cta.brotherhood': 'Войти в Братство',
    'finale.hashtag1': '#ФаросЗажжён',
    'finale.hashtag2': '#RakodiBeacon',
    'finale.hashtag3': '#ЗажгиОрден'
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
    'alexandria.caption': 'To the moon, Alexander the Great',
    'pharos.chip': 'Trend I · Beacon Protocol',
    'pharos.title': 'The Lighthouse of Pharos',
    'pharos.subtitle': 'Switch on the torch, lift it high, and ignite your own beacon.',
    'pharos.paragraph1': 'The Lighthouse of Pharos was not merely a tower of stone, but a voice of eternity speaking to humankind. Its light pierced through the darkness, whispering to sailors: “There is a path. Even if you are alone upon the boundless sea.” Born of human hands, yet touched by the divine, its radiance felt as though the universe itself was reaching out to those daring enough to sail beyond the horizon.',
    'pharos.paragraph2': 'For the ancient world, Pharos was a wonder, a living testament that human will and intellect could lift fire to the heavens. For us, it remains a symbol of hope, courage, and choice. Light can always be kindled, even in the deepest darkness, and once lit, it becomes a beacon for others to follow.',
    'pharos.paragraph3': 'Within each of us lies our own Pharos — an inner flame, capable not only of illuminating our own journey but also of inspiring those who walk beside us.',
    'pharos.caption': 'Light your beacon. Raise the signal.',
    'cinema.chip': 'Signal Cinema',
    'cinema.title': 'Keepers of the Raised Light',
    'cinema.subtitle': 'A gentle Hellenistic carousel that holds our core film and the torchlifting trend.',
    'cinema.prev': 'Previous video',
    'cinema.next': 'Next video',
    'cinema.dot1': 'Go to video 1',
    'cinema.dot2': 'Go to video 2',
    'cinema.slide1.tag': 'Project Film',
    'cinema.slide1.title': 'Rakodi: Light Over the City',
    'cinema.slide1.text': 'Cinematic core teaser with sweeping shots of the invisible city rising under a sea of torches.',
    'cinema.slide2.tag': 'Beacon Trend',
    'cinema.slide2.title': 'Torch Trend Compilation',
    'cinema.slide2.text': 'Quick-cut reel of creators lifting the light upward — mood, energy, and pure meme momentum.',
    'cinema.manifest.title': 'The Light We Guard',
    'cinema.manifest.text': 'To love means opening your heart to the world and letting it resonate within you. To dream means seeing beyond the horizon and daring to create the impossible. Courage is born the moment you choose to move forward, even when the path is hidden in darkness. And believing in yourself is the light that never fades, as long as you guard it within. We are building a space where love becomes movement, dreams become foundation, and faith becomes the key to the future. The world is waiting for those who dare to be themselves and live life to its fullest. Are you with us?',
    'finale.chip': 'Trend I · Beacon Ignited',
    'finale.title': 'Pharos is Lit!',
    'finale.paragraph1': 'We have lit our own Pharos. Long ago, on the island of Pharos, the greatest lighthouse of the ancient world shone — a wonder of light whose fire guided sailors through darkness and storms. Its radiance spoke to every traveler: “You are not alone. The path exists.” Today, we carry that tradition forward. RAKODI lights its own Pharos — not of stone and fire, but of ideas, courage, and faith in humanity. Faith in you. This is a light strong enough to pierce through doubt and open the road to the future.',
    'finale.paragraph2': 'We believe: just as the Lighthouse of Pharos once stood as a symbol of hope and greatness, so too will our Pharos become the symbol of a new path. May its brilliance guide those who seek their own light, and be the sign that together we can transform a night of madness and fear into a dawn of reason and hope.',
    'finale.cta.telegram': 'Join the Telegram Signal',
    'finale.cta.brotherhood': 'Enter the Brotherhood',
    'finale.hashtag1': '#PharosIgnited',
    'finale.hashtag2': '#RakodiBeacon',
    'finale.hashtag3': '#LightTheOrder'
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

function initMissionCarousel(){
  document.querySelectorAll('[data-carousel]').forEach(root=>{
    const track = root.querySelector('[data-carousel-track]');
    if(!track) return;
    const slides = Array.from(track.querySelectorAll('[data-carousel-slide]'));
    if(!slides.length) return;
    const prev = root.querySelector('[data-carousel-prev]');
    const next = root.querySelector('[data-carousel-next]');
    const dots = (()=>{
      const filterDots = list=>list.filter(dot=>dot.closest('[data-carousel]') === root || !dot.closest('[data-carousel]'));
      const direct = filterDots(Array.from(root.querySelectorAll('[data-carousel-dot]')));
      if(direct.length) return direct;
      const parent = root.parentElement;
      if(!parent) return direct;
      const nearby = filterDots(Array.from(parent.querySelectorAll('[data-carousel-dot]')));
      if(nearby.length) return nearby;
      const scoped = root.closest('section, [data-carousel-scope]');
      return scoped ? filterDots(Array.from(scoped.querySelectorAll('[data-carousel-dot]'))) : direct;
    })();
    const viewport = root.querySelector('.mission-cinema__viewport') || root;
    let index = 0;
    const goTo = (newIndex)=>{
      if(!slides.length) return;
      index = (newIndex + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      slides.forEach((slide, idx)=>{
        const isActive = idx === index;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      });
      dots.forEach((dot, idx)=>{
        const isActive = idx === index;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-current', isActive ? 'true' : 'false');
      });
    };
    prev?.addEventListener('click', ()=>goTo(index - 1));
    next?.addEventListener('click', ()=>goTo(index + 1));
    dots.forEach((dot, dotIndex)=>{
      dot.addEventListener('click', ()=>goTo(dotIndex));
    });
    root.addEventListener('keydown', event=>{
      if(event.key === 'ArrowLeft'){
        event.preventDefault();
        goTo(index - 1);
      }else if(event.key === 'ArrowRight'){
        event.preventDefault();
        goTo(index + 1);
      }
    });
    let pointerActive = false;
    let startX = 0;
    let deltaX = 0;
    const start = event=>{
      pointerActive = true;
      const point = event.touches ? event.touches[0] : event;
      startX = point?.clientX ?? 0;
      deltaX = 0;
    };
    const move = event=>{
      if(!pointerActive) return;
      const point = event.touches ? event.touches[0] : event;
      const currentX = point?.clientX ?? startX;
      deltaX = currentX - startX;
    };
    const end = ()=>{
      if(!pointerActive) return;
      pointerActive = false;
      if(Math.abs(deltaX) > 60){
        goTo(deltaX > 0 ? index - 1 : index + 1);
      }
    };
    viewport.addEventListener('mousedown', start);
    viewport.addEventListener('touchstart', start, {passive:true});
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move, {passive:true});
    window.addEventListener('mouseup', end);
    window.addEventListener('touchend', end);
    goTo(0);
  });
}

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

  initMissionCarousel();
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

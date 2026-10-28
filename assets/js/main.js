/* ============================================================
   AMBISIO — prototyp: zdieľané správanie a šablóny
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Ikony ---------- */
  const ICO = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 7 9 6 9-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-5.8-7-11a7 7 0 0 1 14 0c0 5.2-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V5h-3a4 4 0 0 0-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9a1 1 0 0 1 1-1Z"/></svg>',
    in: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 8.5v10H3.7v-10h2.8ZM5.1 4a1.6 1.6 0 1 1 0 3.3 1.6 1.6 0 0 1 0-3.3ZM20.3 13v5.5h-2.8v-5.1c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.7 1.2-.1.2-.1.5-.1.8v5.3h-2.8v-10H14v1.4c.4-.6 1.1-1.5 2.7-1.5 1.9 0 3.6 1.3 3.6 4.6Z"/></svg>',
    pin_social: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.8 1.5 1.8 1.8 0 3.1-2.3 3.1-5 0-2.1-1.4-3.6-3.9-3.6-2.8 0-4.5 2.1-4.5 4.3 0 .8.2 1.4.6 1.8.2.2.2.3.1.5l-.2.8c-.1.3-.2.3-.5.2-1.3-.5-1.9-2-1.9-3.6 0-2.7 2.3-5.9 6.8-5.9 3.6 0 6 2.6 6 5.4 0 3.7-2.1 6.5-5.1 6.5-1 0-2-.6-2.3-1.2l-.6 2.5c-.2.8-.7 1.7-1.1 2.3A10 10 0 1 0 12 2Z"/></svg>',
    yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.7-1.8C18.3 5 12 5 12 5s-6.3 0-7.9.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.7 1.8c1.6.4 7.9.4 7.9.4s6.3 0 7.9-.4a2.5 2.5 0 0 0 1.7-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z"/></svg>',
    dl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16"/></svg>'
  };

  /* ---------- Hlavička ---------- */
  const HEADER = `
  <div class="container header-bar">
    <a class="logo" href="index.html" aria-label="Ambisio — domov">
      <img src="assets/icons/logo-black.svg" alt="Ambisio">
    </a>
    <nav class="main-nav" aria-label="Hlavné menu">
      <ul>
        <li class="has-sub" data-nav="produkty"><a class="nav-link" href="produkty.html">Produkty</a>
          <ul class="submenu">
            <li><a href="pergoly.html">Pergoly</a></li>
            <li><a href="produkty.html#zimne-zahrady">Zimné záhrady</a></li>
            <li><a href="ploty.html">Ploty a brány</a></li>
            <li><a href="produkty.html#fasady">Fasády</a></li>
            <li><a href="produkty.html#tienenie">Tieniaca technika</a></li>
            <li><a href="produkty.html#terasy">Terasy a dlažby</a></li>
            <li><a href="produkty.html#doplnky">Doplnky</a></li>
            <li><a href="produkty.html#home">Ambisio Home</a></li>
            <li><a href="produkty.html#interier">Interiér</a></li>
          </ul>
        </li>
        <li data-nav="sluzby"><a class="nav-link" href="sluzby.html">Služby</a></li>
        <li class="has-sub" data-nav="znacky"><a class="nav-link" href="renson.html">Značky</a>
          <ul class="submenu">
            <li><a href="renson.html">Renson</a></li>
            <li><a href="renson.html">eSafe</a></li>
            <li><a href="renson.html">Climax</a></li>
            <li><a href="renson.html">Vierkant</a></li>
            <li><a href="renson.html">Escape speakers</a></li>
            <li><a href="renson.html">Metalinox TT</a></li>
            <li><a href="renson.html">Todus</a></li>
            <li><a href="renson.html">Somfy</a></li>
          </ul>
        </li>
        <li data-nav="projekty"><a class="nav-link" href="projekty.html">Projekty</a></li>
        <li data-nav="dopyt"><a class="nav-link" href="dopyt.html">Dopyt</a></li>
        <li data-nav="architekti"><a class="nav-link" href="architekti.html">Architekti</a></li>
        <li data-nav="o-nas"><a class="nav-link" href="o-nas.html">O nás</a></li>
        <li data-nav="kontakt"><a class="nav-link" href="kontakt.html">Kontakt</a></li>
        <li data-nav="blog"><a class="nav-link" href="blog.html">Blog</a></li>
      </ul>
    </nav>
    <div class="header-tools">
      <button class="tool-btn js-search-toggle" aria-label="Vyhľadávanie">${ICO.search}</button>
      <div class="lang-switch js-lang">
        <button aria-haspopup="true">SK ▾</button>
        <div class="lang-menu">
          <button data-lang="sk">Slovensky</button>
          <button data-lang="en">English <span class="soon">čoskoro</span></button>
          <button data-lang="cz">Česky <span class="soon">čoskoro</span></button>
        </div>
      </div>
      <button class="tool-btn hamburger js-mobile-open" aria-label="Otvoriť menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
    </div>
  </div>
  <div class="search-bar js-search-bar">
    <div class="container">
      <form action="vyhladavanie.html" method="get">
        <input type="search" name="q" placeholder="Hľadajte produkty, realizácie, články…" aria-label="Hľadaný výraz">
        <button class="btn" type="submit">Hľadať</button>
      </form>
    </div>
  </div>`;

  const MOBILE_NAV = `
  <div class="mobile-nav-head">
    <a class="logo" href="index.html"><img src="assets/icons/logo-black.svg" alt="Ambisio"></a>
    <button class="tool-btn js-mobile-close" aria-label="Zavrieť menu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22"><path d="m6 6 12 12M18 6 6 18"/></svg>
    </button>
  </div>
  <ul>
    <li><button class="msub-toggle">Produkty <span>+</span></button>
      <ul class="msub">
        <li><a href="pergoly.html">Pergoly</a></li>
        <li><a href="produkty.html#zimne-zahrady">Zimné záhrady</a></li>
        <li><a href="ploty.html">Ploty a brány</a></li>
        <li><a href="produkty.html#fasady">Fasády</a></li>
        <li><a href="produkty.html#tienenie">Tieniaca technika</a></li>
        <li><a href="produkty.html#terasy">Terasy a dlažby</a></li>
        <li><a href="produkty.html#doplnky">Doplnky</a></li>
        <li><a href="produkty.html#home">Ambisio Home</a></li>
        <li><a href="produkty.html#interier">Interiér</a></li>
      </ul>
    </li>
    <li><a href="sluzby.html">Služby</a></li>
    <li><button class="msub-toggle">Značky <span>+</span></button>
      <ul class="msub">
        <li><a href="renson.html">Renson</a></li><li><a href="renson.html">eSafe</a></li>
        <li><a href="renson.html">Climax</a></li>
        <li><a href="renson.html">Vierkant</a></li><li><a href="renson.html">Escape speakers</a></li>
        <li><a href="renson.html">Metalinox TT</a></li><li><a href="renson.html">Todus</a></li>
        <li><a href="renson.html">Somfy</a></li>
      </ul>
    </li>
    <li><a href="projekty.html">Projekty</a></li>
    <li><a href="dopyt.html">Dopyt</a></li>
    <li><a href="architekti.html">Architekti</a></li>
    <li><a href="o-nas.html">O nás</a></li>
    <li><a href="kontakt.html">Kontakt</a></li>
    <li><a href="blog.html">Blog</a></li>
  </ul>
  <div class="mobile-tools">
    <a class="btn" href="dopyt.html">Nezáväzný dopyt</a>
  </div>`;

  /* ---------- Pätička ---------- */
  const FOOTER = `
  <div class="container">
    <div class="footer-cols">
      <div>
        <a class="logo" href="index.html"><img src="assets/icons/logo-black.svg" alt="Ambisio"></a>
        <div class="socials">
          <a href="https://www.instagram.com/ambisio_slovakia/" target="_blank" rel="noopener" aria-label="Instagram">${ICO.ig}</a>
          <a href="https://www.facebook.com/ambisiosk" target="_blank" rel="noopener" aria-label="Facebook">${ICO.fb}</a>
          <a href="https://www.linkedin.com/company/ambisio" target="_blank" rel="noopener" aria-label="LinkedIn">${ICO.in}</a>
          <a href="https://sk.pinterest.com/ambisiosk/" target="_blank" rel="noopener" aria-label="Pinterest">${ICO.pin_social}</a>
          <a href="https://www.youtube.com/@Ambisio" target="_blank" rel="noopener" aria-label="YouTube">${ICO.yt}</a>
        </div>
        <div class="footer-contact">
          <a href="tel:+421911600881">+421 911 600 881</a>
          <a href="mailto:ambisio@ambisio.sk">ambisio@ambisio.sk</a>
          <a href="https://maps.google.com/?q=Logistick%C3%A1+10,+919+42+Zavar" target="_blank" rel="noopener">Logistická 10, Trnava — areál Zavar</a>
        </div>
      </div>
      <div>
        <h4>Produkty</h4>
        <ul class="footer-links">
          <li><a href="pergoly.html">Pergoly</a></li>
          <li><a href="produkty.html#zimne-zahrady">Zimné záhrady</a></li>
          <li><a href="ploty.html">Ploty a brány</a></li>
          <li><a href="produkty.html#tienenie">Tieniaca technika</a></li>
          <li><a href="produkty.html">Všetky vonkajšie elementy</a></li>
        </ul>
      </div>
      <div>
        <h4>Spoločnosť</h4>
        <ul class="footer-links">
          <li><a href="o-nas.html">O nás</a></li>
          <li><a href="projekty.html">Projekty</a></li>
          <li><a href="sluzby.html">Naše služby</a></li>
          <li><a href="architekti.html">Pre architektov a developerov</a></li>
          <li><a href="dopyt.html">Nezáväzný dopyt</a></li>
          <li><a href="blog.html">Blog</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} AMBISIO s.r.o. — Ambiciózny vonkajší domov</span>
      <span>Ochrana osobných údajov · Cookies</span>
    </div>
  </div>`;

  /* ---------- Blok s kontaktami ---------- */
  const CONTACTS = `
  <div class="contact-row">
    <div class="contact-item">
      <span class="ci-icon">${ICO.phone}</span>
      <div><strong>Telefón</strong><a href="tel:+421911600881">+421 911 600 881</a></div>
    </div>
    <div class="contact-item">
      <span class="ci-icon">${ICO.mail}</span>
      <div><strong>E-mail</strong><a href="mailto:ambisio@ambisio.sk">ambisio@ambisio.sk</a></div>
    </div>
    <div class="contact-item">
      <span class="ci-icon">${ICO.pin}</span>
      <div><strong>Showroom</strong><a href="https://maps.google.com/?q=Logistick%C3%A1+10,+919+42+Zavar" target="_blank" rel="noopener">Logistická 10, Trnava — areál Zavar</a></div>
    </div>
  </div>`;

  /* ---------- Formuláre (3 verzie) ---------- */
  const PRODUCT_CHECKS = `
  <div class="field">
    <label>Vyberte produkty, o ktoré máte záujem</label>
    <div class="checks">
      <label class="check"><input type="checkbox" name="produkt" value="pergola"> Pergola / prístrešok</label>
      <label class="check"><input type="checkbox" name="produkt" value="zimna-zahrada"> Zimná záhrada</label>
      <label class="check"><input type="checkbox" name="produkt" value="plot"> Plot / brána</label>
      <label class="check"><input type="checkbox" name="produkt" value="tienenie"> Tieniaca technika</label>
      <label class="check"><input type="checkbox" name="produkt" value="terasa"> Terasa / dlažba</label>
      <label class="check"><input type="checkbox" name="produkt" value="doplnky"> Doplnky a nábytok</label>
    </div>
  </div>`;

  function formTemplate(kind) {
    const isProduct = kind === 'product';
    const isArch = kind === 'architect';
    return `
    <div class="form-wrap">
      <span class="eyebrow">${isArch ? 'Business spolupráca' : 'Nezáväzný dopyt'}</span>
      <h2>${isArch ? 'Spojme sa na vašom projekte' : 'Chcete nám radšej napísať?'}</h2>
      <form class="js-demo-form" novalidate>
        <div class="form-grid">
          <div>
            <div class="field" style="margin-bottom:24px">
              <label for="f-name-${kind}">Meno a priezvisko*</label>
              <input id="f-name-${kind}" name="meno" type="text" required autocomplete="name">
            </div>
            <div class="field" style="margin-bottom:24px">
              <label for="f-mail-${kind}">E-mail*</label>
              <input id="f-mail-${kind}" name="email" type="email" required autocomplete="email">
            </div>
            <div class="field" style="margin-bottom:24px">
              <label for="f-tel-${kind}">Telefón*</label>
              <input id="f-tel-${kind}" name="telefon" type="tel" required autocomplete="tel">
            </div>
            ${isArch ? `
            <div class="field" style="margin-bottom:24px">
              <label for="f-firm-${kind}">Ateliér / spoločnosť</label>
              <input id="f-firm-${kind}" name="firma" type="text" autocomplete="organization">
            </div>` : `
            <div class="field" style="margin-bottom:24px">
              <label for="f-place-${kind}">Miesto realizácie</label>
              <input id="f-place-${kind}" name="miesto" type="text">
            </div>`}
            ${isProduct ? `
            <div class="field">
              <label for="f-msg-${kind}">Povedzte nám viac o vašej predstave</label>
              <textarea id="f-msg-${kind}" name="sprava" rows="4"></textarea>
            </div>` : ''}
          </div>
          <div>
            ${isProduct ? PRODUCT_CHECKS : `
            <div class="field">
              <label for="f-msg-${kind}">${isArch ? 'Popíšte váš projekt' : 'Ako vám vieme pomôcť?'}</label>
              <textarea id="f-msg-${kind}" name="sprava" rows="5"></textarea>
            </div>`}
          </div>
        </div>
        <div class="form-foot">
          <p class="form-note">Odoslaním formulára súhlasíte so spracovaním osobných údajov. Odpovedáme zvyčajne do 24 hodín.</p>
          <button class="btn" type="submit">Odoslať dopyt <span class="arr">→</span></button>
        </div>
      </form>
    </div>`;
  }

  /* ---------- Vloženie šablón ---------- */
  document.querySelectorAll('[data-include]').forEach(el => {
    const key = el.getAttribute('data-include');
    if (key === 'header') { el.innerHTML = HEADER; }
    if (key === 'footer') { el.innerHTML = FOOTER; }
    if (key === 'contacts') { el.innerHTML = CONTACTS; }
    if (key === 'form-general') { el.innerHTML = formTemplate('general'); }
    if (key === 'form-product') { el.innerHTML = formTemplate('product'); }
    if (key === 'form-architect') { el.innerHTML = formTemplate('architect'); }
  });

  const mobileNav = document.createElement('div');
  mobileNav.className = 'mobile-nav';
  mobileNav.innerHTML = MOBILE_NAV;
  document.body.appendChild(mobileNav);

  /* aktívna položka menu */
  const page = document.body.dataset.nav;
  if (page) {
    document.querySelectorAll(`.main-nav li[data-nav="${page}"]`).forEach(li => li.classList.add('is-active'));
  }

  /* ---------- Hlavička: schovaj pri scrolle dole, ukáž pri scrolle hore ---------- */
  const header = document.querySelector('.site-header');
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (header) {
      if (y > lastY && y > 140) header.classList.add('is-hidden');
      else header.classList.remove('is-hidden');
    }
    lastY = y;
  }, { passive: true });

  /* ---------- Vyhľadávanie ---------- */
  document.addEventListener('click', e => {
    if (e.target.closest('.js-search-toggle')) {
      const bar = document.querySelector('.js-search-bar');
      bar.classList.toggle('is-open');
      if (bar.classList.contains('is-open')) bar.querySelector('input').focus();
    }
    if (e.target.closest('.js-mobile-open')) mobileNav.classList.add('is-open');
    if (e.target.closest('.js-mobile-close') || (e.target.closest('.mobile-nav a'))) mobileNav.classList.remove('is-open');
    const msub = e.target.closest('.msub-toggle');
    if (msub) msub.parentElement.classList.toggle('is-open');

    const lang = e.target.closest('.js-lang > button');
    if (lang) lang.parentElement.classList.toggle('is-open');
    else if (!e.target.closest('.js-lang')) document.querySelectorAll('.js-lang.is-open').forEach(l => l.classList.remove('is-open'));

    const langOpt = e.target.closest('.lang-menu button');
    if (langOpt && langOpt.dataset.lang !== 'sk') {
      alert('Jazyková mutácia ' + langOpt.dataset.lang.toUpperCase() + ' sa pripravuje — web je na ňu technicky pripravený.');
    }
  });

  /* Prepínač veľkosti písma bol z webu odstránený. Zmaže sa aj voľba uložená
     staršou verziou, inak by návštevník zostal natrvalo na nastavenej veľkosti
     bez možnosti ju zmeniť. */
  try { localStorage.removeItem('ambisio-fs'); } catch (e) {}

  /* ---------- Carousel šípky ---------- */
  document.querySelectorAll('[data-carousel]').forEach(wrap => {
    const track = wrap.querySelector('.carousel, .gallery');
    if (!track) return;

    /* Šípky sú v hlavičke sekcie, teda nad [data-carousel], nie v ňom.
       Ak ich vnútri nenájdeme, hľadáme ich v celej sekcii — ale len keď je
       v nej jediný karusel, aby sa šípky nenaviazali na cudziu dráhu. */
    let arrows = wrap.querySelectorAll('.arrow-btn');
    if (!arrows.length) {
      const sekcia = wrap.closest('section, .section');
      if (sekcia && sekcia.querySelectorAll('[data-carousel]').length === 1) {
        arrows = sekcia.querySelectorAll('.arrow-btn');
      }
    }
    if (!arrows.length) return;

    const krok = () => {
      const prva = track.firstElementChild;
      if (!prva) return 320;
      const medzera = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 24;
      return prva.getBoundingClientRect().width + medzera;
    };

    /* Na kraji dráhy nemá šípka čo robiť — zhasne, aby bolo vidno, že sa ďalej nedá. */
    const prekresliStav = () => {
      const max = track.scrollWidth - track.clientWidth;
      arrows.forEach(btn => {
        const naKonci = btn.dataset.dir === 'next'
          ? track.scrollLeft >= max - 1
          : track.scrollLeft <= 1;
        btn.disabled = max <= 1 || naKonci;
      });
    };

    /* Posunie dráhu o jednu kartu. Cieľ sa počíta ako absolútna pozícia karty,
       nie ako prírastok k aktuálnemu posunu — inak by sa pri scroll-snape
       odchýlky sčítavali a dráha by postupne ušla. Ak sa do 350 ms nedostane
       presne na cieľ (niektoré prehliadače plynulý scroll vnorených kontajnerov
       neanimujú alebo ho snap stiahne inam), dorazí to skokom. */
    const posun = (smer) => {
      const k = krok();
      const poslednyIndex = Math.max(track.children.length - 1, 0);
      const index = Math.round(track.scrollLeft / k);
      const cielIndex = Math.min(Math.max(index + smer, 0), poslednyIndex);
      const ciel = Math.min(cielIndex * k, track.scrollWidth - track.clientWidth);

      track.scrollTo({ left: ciel, behavior: 'smooth' });
      setTimeout(() => {
        if (Math.abs(track.scrollLeft - ciel) > 2) {
          track.scrollTo({ left: ciel, behavior: 'auto' });
        }
        prekresliStav();
      }, 350);
      setTimeout(prekresliStav, 800);
    };

    arrows.forEach(btn => {
      btn.addEventListener('click', () => posun(btn.dataset.dir === 'next' ? 1 : -1));
    });

    track.addEventListener('scroll', prekresliStav, { passive: true });
    window.addEventListener('resize', prekresliStav);
    prekresliStav();
  });

  /* ---------- Lightbox galéria (obrázky + videá, šípky, popisy) ---------- */
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `
    <button class="lb-btn lb-close" aria-label="Zavrieť">✕</button>
    <button class="lb-btn lb-prev" aria-label="Predchádzajúce">←</button>
    <figure><div class="lb-media"></div><figcaption></figcaption></figure>
    <button class="lb-btn lb-next" aria-label="Ďalšie">→</button>`;
  document.body.appendChild(lb);

  let lbItems = [], lbIdx = 0;
  function renderLb() {
    const it = lbItems[lbIdx];
    const media = lb.querySelector('.lb-media');
    lb.querySelector('figcaption').textContent = it.caption || '';
    if (it.type === 'video') {
      media.innerHTML = `<video src="${it.src}" controls autoplay playsinline></video>`;
      const v = media.querySelector('video');
      v.addEventListener('error', () => {
        media.innerHTML = '<div class="lb-error">Ukážkové video zatiaľ nie je nahraté.<br><small>Do priečinka <code>assets/video/</code> vložte súbor <code>' + it.src.split('/').pop() + '</code>.</small></div>';
      });
    } else {
      media.innerHTML = `<img src="${it.src}" alt="${it.caption || ''}">`;
    }
  }
  function openLb(items, idx) {
    lbItems = items; lbIdx = idx;
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    renderLb();
  }
  function closeLb() {
    lb.classList.remove('is-open');
    lb.querySelector('.lb-media').innerHTML = '';
    document.body.style.overflow = '';
  }
  lb.querySelector('.lb-close').addEventListener('click', closeLb);
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  lb.querySelector('.lb-prev').addEventListener('click', () => { lbIdx = (lbIdx - 1 + lbItems.length) % lbItems.length; renderLb(); });
  lb.querySelector('.lb-next').addEventListener('click', () => { lbIdx = (lbIdx + 1) % lbItems.length; renderLb(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') { lbIdx = (lbIdx - 1 + lbItems.length) % lbItems.length; renderLb(); }
    if (e.key === 'ArrowRight') { lbIdx = (lbIdx + 1) % lbItems.length; renderLb(); }
  });

  document.querySelectorAll('[data-gallery]').forEach(gal => {
    const items = [...gal.querySelectorAll('.gallery-item')].map(g => ({
      src: g.dataset.full || (g.querySelector('img') || {}).src,
      type: g.dataset.type || 'image',
      caption: g.dataset.caption || ''
    }));
    gal.querySelectorAll('.gallery-item').forEach((g, i) => {
      g.addEventListener('click', () => openLb(items, i));
    });
  });

  /* ---------- Filtrovanie tagmi (nabaľovacie) ---------- */
  document.querySelectorAll('[data-filter-bar]').forEach(bar => {
    const targetSel = bar.dataset.filterBar;
    const items = document.querySelectorAll(targetSel + ' [data-tags]');
    const empty = document.querySelector(targetSel + ' .filter-empty');
    bar.addEventListener('click', e => {
      const tagBtn = e.target.closest('.filter-tag');
      if (!tagBtn) return;
      if (tagBtn.dataset.tag === '*') {
        bar.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('is-on'));
        tagBtn.classList.add('is-on');
      } else {
        bar.querySelector('[data-tag="*"]').classList.remove('is-on');
        tagBtn.classList.toggle('is-on');
        if (!bar.querySelector('.filter-tag.is-on')) bar.querySelector('[data-tag="*"]').classList.add('is-on');
      }
      const active = [...bar.querySelectorAll('.filter-tag.is-on')].map(b => b.dataset.tag).filter(t => t !== '*');
      let visible = 0;
      items.forEach(it => {
        const tags = it.dataset.tags.split(' ');
        const show = !active.length || active.every(t => tags.includes(t));
        it.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      if (empty) empty.style.display = visible ? 'none' : 'block';
    });
  });

  /* ---------- Akordeón ---------- */
  document.querySelectorAll('.acc-head').forEach(head => {
    head.addEventListener('click', () => {
      const item = head.parentElement;
      const open = item.classList.contains('is-open');
      item.closest('.accordion').querySelectorAll('.acc-item').forEach(i => i.classList.remove('is-open'));
      if (!open) item.classList.add('is-open');
    });
  });

  /* ---------- Parallax piktogramov ---------- */
  const shapes = document.querySelectorAll('.bg-shape');
  if (shapes.length && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        shapes.forEach(s => {
          const r = s.getBoundingClientRect();
          const speed = parseFloat(s.dataset.speed || '0.12');
          const offset = (r.top + r.height / 2 - window.innerHeight / 2) * speed;
          s.style.transform = `translateY(${offset * -1}px)`;
        });
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---------- Reveal pri scrolle ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- Hero video s fallbackom na Ken Burns fotku ---------- */
  document.querySelectorAll('[data-hero-video]').forEach(hero => {
    const src = hero.dataset.heroVideo;
    const poster = hero.dataset.heroPoster;
    const media = hero.querySelector('.hero-media');
    const v = document.createElement('video');
    v.muted = true; v.loop = true; v.autoplay = true; v.playsInline = true;
    if (poster) v.poster = poster;
    v.src = src;
    v.addEventListener('error', () => {
      media.innerHTML = `<div class="kenburns" style="background-image:url('${poster}')"></div>`;
      const badge = hero.querySelector('.video-badge');
      if (badge) badge.innerHTML = '<span class="dot"></span> Miesto pre hero video (assets/video/hero.mp4) — zatiaľ animovaná fotografia';
    });
    v.addEventListener('canplay', () => v.play().catch(() => {}));
    media.prepend(v);
  });

  /* ---------- Demo odoslanie formulára ---------- */
  document.addEventListener('submit', e => {
    const f = e.target.closest('.js-demo-form');
    if (!f) return;
    e.preventDefault();
    const required = [...f.querySelectorAll('[required]')];
    const bad = required.filter(i => !i.value.trim());
    if (bad.length) {
      bad.forEach(i => i.style.borderBottomColor = '#c0392b');
      bad[0].focus();
      return;
    }
    window.location.href = 'dakujeme.html';
  });

  /* ---------- Blog: načítavanie ďalších ---------- */
  const moreBtn = document.querySelector('.js-load-more');
  if (moreBtn) {
    const hidden = document.querySelectorAll('.js-more-item');
    moreBtn.addEventListener('click', () => {
      hidden.forEach(h => h.style.display = '');
      moreBtn.closest('.load-more-wrap').style.display = 'none';
    });
  }

  /* ---------- Výsledky vyhľadávania: prebratie dopytu z URL ---------- */
  const qEl = document.querySelector('.js-search-query');
  if (qEl) {
    const q = new URLSearchParams(location.search).get('q') || '';
    qEl.textContent = q ? `„${q}"` : '';
    const input = document.querySelector('.js-search-input');
    if (input) input.value = q;
  }
})();

/* Ambisio WP téma — interaktívne správanie blokov (bez šablón, tie rieši WordPress) */
(function () {
  'use strict';

  /* Hlavička: schovaj pri scrolle dole, ukáž pri scrolle hore */
  const header = document.querySelector('.site-header, header.wp-block-template-part');
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (header) {
      if (y > lastY && y > 140) header.classList.add('is-hidden');
      else header.classList.remove('is-hidden');
    }
    lastY = y;
  }, { passive: true });

  /* Prepínač veľkosti písma */
  const SIZES = ['s', 'm', 'l', 'xl'];
  let fsIdx = SIZES.indexOf(localStorage.getItem('ambisio-fs') || 'm');
  if (fsIdx < 0) fsIdx = 1;
  const applyFs = () => {
    document.documentElement.dataset.fontsize = SIZES[fsIdx];
    localStorage.setItem('ambisio-fs', SIZES[fsIdx]);
  };
  applyFs();
  document.addEventListener('click', e => {
    const b = e.target.closest('.js-fs');
    if (!b) return;
    if (b.dataset.fs === 'up' && fsIdx < SIZES.length - 1) fsIdx++;
    if (b.dataset.fs === 'down' && fsIdx > 0) fsIdx--;
    applyFs();
  });

  /* Carousel šípky */
  document.querySelectorAll('[data-carousel]').forEach(wrap => {
    const track = wrap.querySelector('.carousel, .gallery');
    if (!track) return;
    wrap.querySelectorAll('.arrow-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const step = track.firstElementChild ? track.firstElementChild.getBoundingClientRect().width + 24 : 320;
        track.scrollBy({ left: btn.dataset.dir === 'next' ? step : -step, behavior: 'smooth' });
      });
    });
  });

  /* Lightbox galéria */
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<button class="lb-btn lb-close" aria-label="Zavrieť">✕</button><button class="lb-btn lb-prev" aria-label="Predchádzajúce">←</button><figure><div class="lb-media"></div><figcaption></figcaption></figure><button class="lb-btn lb-next" aria-label="Ďalšie">→</button>';
  document.body.appendChild(lb);
  let lbItems = [], lbIdx = 0;
  function renderLb() {
    const it = lbItems[lbIdx];
    const media = lb.querySelector('.lb-media');
    lb.querySelector('figcaption').textContent = it.caption || '';
    media.innerHTML = it.type === 'video'
      ? '<video src="' + it.src + '" controls autoplay playsinline></video>'
      : '<img src="' + it.src + '" alt="">';
  }
  function closeLb() { lb.classList.remove('is-open'); lb.querySelector('.lb-media').innerHTML = ''; document.body.style.overflow = ''; }
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
      g.addEventListener('click', () => { lbItems = items; lbIdx = i; lb.classList.add('is-open'); document.body.style.overflow = 'hidden'; renderLb(); });
    });
  });

  /* Filtrovanie tagmi */
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
        const show = !active.length || active.every(t => it.dataset.tags.split(' ').includes(t));
        it.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      if (empty) empty.style.display = visible ? 'none' : 'block';
    });
  });

  /* Akordeón */
  document.querySelectorAll('.acc-head').forEach(head => {
    head.addEventListener('click', () => {
      const item = head.parentElement;
      const open = item.classList.contains('is-open');
      item.closest('.accordion').querySelectorAll('.acc-item').forEach(i => i.classList.remove('is-open'));
      if (!open) item.classList.add('is-open');
    });
  });

  /* Reveal pri scrolle */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* Hero video fallback */
  document.querySelectorAll('[data-hero-video]').forEach(hero => {
    const media = hero.querySelector('.hero-media');
    if (!media) return;
    const v = document.createElement('video');
    v.muted = true; v.loop = true; v.autoplay = true; v.playsInline = true;
    if (hero.dataset.heroPoster) v.poster = hero.dataset.heroPoster;
    v.src = hero.dataset.heroVideo;
    v.addEventListener('error', () => {
      media.innerHTML = '<div class="kenburns" style="background-image:url(\'' + (hero.dataset.heroPoster || '') + '\')"></div>';
    });
    v.addEventListener('canplay', () => v.play().catch(() => {}));
    media.prepend(v);
  });
})();

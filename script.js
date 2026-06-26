(function () {

  var DATA = {
    name: 'Lt Gen O.O. Oluyede',
    titleRole: 'Initiator — Depot Nigerian Army, Osogbo',
    biography: [],      /* to be filled */
    achievements: [],   /* to be filled */
    gallery: [
      {
        file: 'Acting-COAS-Assumption-of-duty.jpg',
        caption: 'Assumption of duty as Acting Chief of Army Staff'
      },
      {
        file: 'Handshake-with-President-Tinubu.jpg',
        caption: 'Meeting with President Bola Ahmed Tinubu'
      },
      {
        file: 'meeting-with-NS-and-CDS.jpg',
        caption: 'Meeting with the National Security Adviser and Chief of Defence Staff'
      },
      {
        file: 'Lt-Gen.-Olufemi-Oluyede-on-the-news.webp',
        caption: 'Lt Gen Olufemi Oluyede featured on national news'
      }
    ]
  };

  /* ── Utility ────────────────────────────────────────── */
  function setText(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  /* ── Strip transition ───────────────────────────────── */
  function runStrips() {
    var strips = document.querySelectorAll('.strip');
    var view   = document.querySelector('.page-view.active');
    if (!strips.length) return;

    /* hide the content until strips sweep out */
    if (view) { view.style.opacity = '0'; view.style.transition = 'none'; }

    strips.forEach(function (s) { s.classList.add('slide-in'); });

    setTimeout(function () {
      /* reveal content, then sweep strips out */
      if (view) { view.style.transition = ''; view.style.opacity = '1'; }
      strips.forEach(function (s) { s.classList.remove('slide-in'); s.classList.add('slide-out'); });
      setTimeout(function () {
        strips.forEach(function (s) { s.classList.remove('slide-out'); });
      }, 650);
    }, 850);
  }

  /* ── Biography page ─────────────────────────────────── */
  function renderBiography(targetId) {
    var target = document.getElementById(targetId);
    if (!target) return;

    var content;
    if (DATA.biography && DATA.biography.length) {
      content = '<div class="bio-scroll">' +
        DATA.biography.map(function (p) { return '<p class="bio-para">' + p + '</p>'; }).join('') +
        '</div>';
    } else {
      content = '<div class="bio-pending">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">' +
        '<path d="M9 12h6M9 16h6M9 8h2M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>' +
        '</svg>' +
        '<p>Biography coming soon</p>' +
        '</div>';
    }

    target.innerHTML =
      '<div class="detail-heading">Biography</div>' +
      '<div class="detail-card">' + content + '</div>';
  }

  function startAutoScroll(targetId) {
    var target = document.getElementById(targetId);
    if (!target) return;
    var scroller = target.querySelector('.bio-scroll');
    if (!scroller) return;

    var paused = false;
    var timer = null;
    var step = 0.35;

    function pauseFor(ms) {
      paused = true;
      clearTimeout(timer);
      timer = setTimeout(function () { paused = false; }, ms);
    }

    function tick() {
      if (!paused) {
        var max = scroller.scrollHeight - scroller.clientHeight;
        if (max > 0) {
          scroller.scrollTop = scroller.scrollTop >= max - 1 ? 0 : scroller.scrollTop + step;
        }
      }
      timer = setTimeout(tick, 32);
    }

    scroller.addEventListener('mouseenter', function () { paused = true; });
    scroller.addEventListener('mouseleave', function () { paused = false; });
    scroller.addEventListener('wheel',      function () { pauseFor(1500); }, { passive: true });
    scroller.addEventListener('touchstart', function () { pauseFor(1500); }, { passive: true });
    scroller.addEventListener('scroll',     function () { pauseFor(900);  }, { passive: true });

    timer = setTimeout(tick, 1800);
  }

  /* ── Achievements page ──────────────────────────────── */
  function renderAchievements(targetId) {
    var target = document.getElementById(targetId);
    if (!target) return;

    var content = '<div class="bio-pending">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">' +
      '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>' +
      '</svg>' +
      '<p>Achievements coming soon</p>' +
      '</div>';

    target.innerHTML =
      '<div class="detail-heading">Achievements</div>' +
      '<div class="detail-card">' + content + '</div>';
  }

  /* ── Gallery page ───────────────────────────────────── */
  function renderGallery(targetId) {
    var target = document.getElementById(targetId);
    if (!target) return;

    target.innerHTML =
      '<div class="detail-heading">Gallery</div>' +
      '<div class="detail-card"><div class="gallery-scroll"><div class="gallery-grid">' +
      DATA.gallery.map(function (item) {
        var src = 'assets/images/' + item.file;
        return '<button type="button" class="g-tile" data-src="' + src + '" data-caption="' + item.caption + '">' +
          '<img src="' + src + '" alt="' + item.caption + '" loading="lazy">' +
          '<span class="g-caption">' + item.caption + '</span>' +
          '</button>';
      }).join('') +
      '</div></div></div>';

    bindGalleryModal();
  }

  function bindGalleryModal() {
    var modal   = document.getElementById('galleryModal');
    var mImg    = document.getElementById('galleryModalImage');
    var mCap    = document.getElementById('galleryModalCaption');
    var mClose  = document.getElementById('galleryModalClose');
    if (!modal) return;

    function open(src, cap) {
      mImg.src = src; mImg.alt = cap; mCap.textContent = cap;
      modal.classList.add('open');
    }
    function close() {
      modal.classList.remove('open');
      mImg.src = '';
    }

    document.querySelectorAll('.g-tile').forEach(function (btn) {
      btn.addEventListener('click', function () {
        open(btn.dataset.src, btn.dataset.caption);
      });
    });
    mClose.addEventListener('click', close);
    modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* ── Bootstrap ──────────────────────────────────────── */
  setText('name', DATA.name);
  setText('title-role', DATA.titleRole);

  var page = document.body.dataset.page || 'home';
  if (page === 'bio') {
    renderBiography('bioPage');
    startAutoScroll('bioPage');
  } else if (page === 'achievements') {
    renderAchievements('achievementsPage');
  } else if (page === 'gallery') {
    renderGallery('galleryPage');
  } else {
    runStrips();
  }

})();

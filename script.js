(function () {

  var DATA = {
    name: 'Gen O.O. Oluyede',
    titleRole: 'Initiator — Depot Nigerian Army, Osogbo',
    biography: [
      'General Olufemi Olatubosun Oluyede (N/9318) was born on 21 June 1968 in Ikere-Ekiti Local Government Area of Ekiti State. He was granted Regular Combatant Commission as a member of 39 Regular Course on 19 September 1992 in the rank of Second Lieutenant with seniority in the same rank effective 12 September 1987. He is of the Infantry Corps and rose to the rank of General in November 2024. The senior officer has attended several courses and performed creditably well. These courses include Young Officers\' Course (Infantry), Regimental Signal Officers\' Course, Junior Staff Course, Senior Staff Course, Military Observer Course, Logistics Officers\' Course, Commanding Officers\' Course and Senior Executive Course at the National Institute for Policy and Strategic Studies. He holds a Bachelor of Science Degree in Economics.',
      'General Olufemi Olatubosun Oluyede has continued to prove himself as a competent and professional soldier with reputable military regimentation and bearing. He has held several command, staff, instructional and operational appointments. They include Platoon Commander/Adjutant at 65 Battalion, Company Commander at 177 Guards Battalion and later posted to Headquarters Guards Brigade as a staff officer. He also served at the Nigerian Defence Academy as an instructor and later a senior instructor. Thereafter, General Oluyede was posted to Amphibious Training School as the Commandant. General Oluyede has participated in several operations which include Economic Community of West African States Monitoring Group (ECOMOG) mission in Liberia, Operation HARMONY IV in Bakassi and Operation HADIN KAI.',
      'The erudite senior officer has also carved a niche for himself in the realm of operations especially in the North East theatre of operations where he commanded 27 Task Force Brigade. His gallantry as the Brigade Commander saw him elevated as the Sector Commander, Headquarters Sector 2 Operation HADIN KAI where he commanded several successful operations which led to the neutralization of some key Boko Haram Terrorists\' commanders and several foot soldiers. General Oluyede was also a Director at the Army Headquarters Department of Policy and Plans. He was subsequently posted to Headquarters 6 Division as the General Officer Commanding. General Oluyede served as the Commander of the elite Infantry Corps prior to his appointment as the 23rd Chief of Army Staff by the President Commander-in-Chief of the Armed Forces, President Bola Ahmed Tinubu GCFR in October 2024.',
      'In recognition of his meritorious service, absolute dedication to the Nation and numerous exploits in various theatres of operations within and outside the country, he was bestowed with several honours and awards. They include the Nigerian Army Medal, Corps Medal of Honour, Grand Service Star, Pass Staff Course and Member National Institute. Others are Field Command Medal, Field Command Medal of Honour as well as Field Training Medal. General Oluyede was also a recipient of the Chief of Army Staff Commendation Award.',
      'General Oluyede is a devoted Christian. He is happily married and blessed with three children. At his leisure, he enjoys reading, playing badminton and travelling.'
    ],
    achievements: [
      {
        category: 'Honours & Awards',
        items: [
          'Nigerian Army Medal',
          'Corps Medal of Honour',
          'Grand Service Star',
          'Pass Staff Course',
          'Member National Institute (mni)',
          'Field Command Medal',
          'Field Command Medal of Honour',
          'Field Training Medal',
          'Chief of Army Staff Commendation Award'
        ]
      },
      {
        category: 'Operational Distinctions',
        items: [
          'ECOMOG Mission — Liberia',
          'Operation HARMONY IV — Bakassi',
          'Commander, 27 Task Force Brigade — North East Theatre',
          'Sector Commander, HQ Sector 2 Operation HADIN KAI — led operations resulting in neutralization of key Boko Haram Terrorist commanders',
          'Operation HADIN KAI'
        ]
      },
      {
        category: 'Key Appointments',
        items: [
          'Commandant, Amphibious Training School',
          'Director, Army Headquarters Department of Policy and Plans',
          'General Officer Commanding, Headquarters 6 Division',
          'Commander, Infantry Corps',
          '23rd Chief of Army Staff — appointed by President Bola Ahmed Tinubu GCFR, October 2024'
        ]
      }
    ],
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
      },
      {
        file: 'at-the-army-162th-annual-interdenomination-service.jpg',
        caption: 'At the Army 162nd Annual Interdenominational Service'
      },
      {
        file: 'collaboration-with-NIPSS.jpg',
        caption: 'Collaboration with the National Institute for Policy and Strategic Studies'
      },
      {
        file: 'courtey-visit-from-AGF.jpeg',
        caption: 'Courtesy visit from the Attorney General of the Federation'
      },
      {
        file: 'meeting-with-ministriy-of-defence-of-serbia.jpg',
        caption: 'Meeting with the Ministry of Defence of Serbia'
      },
      {
        file: 'more-in-the-news.jpeg',
        caption: 'Lt Gen Oluyede in the news'
      },
      {
        file: 'with-the-US-Special-forces.webp',
        caption: 'With the United States Special Forces'
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

    var content;
    if (DATA.achievements && DATA.achievements.length) {
      content = '<div class="achieve-scroll">' +
        DATA.achievements.map(function (section) {
          return '<div class="achieve-section">' +
            '<h3 class="achieve-cat">' + section.category + '</h3>' +
            '<ul class="achieve-list">' +
            section.items.map(function (item) {
              return '<li class="achieve-item">' + item + '</li>';
            }).join('') +
            '</ul></div>';
        }).join('') +
        '</div>';
    } else {
      content = '<div class="bio-pending">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">' +
        '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>' +
        '</svg>' +
        '<p>Achievements coming soon</p>' +
        '</div>';
    }

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

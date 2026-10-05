/* Home page: hero reel and the floating preview over client-work rows. */
(function () {
  var ASSETS = '../assets/';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Hero reel ----------
  // Slides alternate direction: one enters from the bottom, the next from the top.

  var reel = document.querySelector('.reel');
  if (reel) {
    var slides = reel.querySelectorAll('.reel__slide');
    var dots = reel.querySelectorAll('.reel__dot');
    var EASE = 'transform 1.1s cubic-bezier(0.77,0,0.18,1)';
    var cur = 0, prev = null, dir = 1, timer = null;

    var render = function () {
      var outPos = dir === 1 ? '100%' : '-100%';
      slides.forEach(function (s, i) {
        var isCur = i === cur, isPrev = i === prev && prev !== cur;
        s.style.transform = isCur ? 'translateY(0)' : 'translateY(' + outPos + ')';
        s.style.transition = (isCur || isPrev) ? EASE : 'none';
        s.style.zIndex = isCur ? 2 : isPrev ? 1 : 0;
        s.setAttribute('aria-hidden', String(!isCur));
      });
      dots.forEach(function (d, i) { d.setAttribute('aria-current', String(i === cur)); });
    };

    var go = function (i) {
      if (i === cur) return;
      prev = cur; cur = i; dir = -dir;
      render();
    };

    var start = function () {
      clearInterval(timer);
      if (reduce) return;
      timer = setInterval(function () { go((cur + 1) % slides.length); }, 3800);
    };

    dots.forEach(function (d, i) {
      d.addEventListener('click', function () { go(i); start(); });
    });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) clearInterval(timer); else start();
    });

    render();
    start();
  }

  // ---------- Client rows ----------

  var list = document.querySelector('.client-list');
  if (!list) return;

  Site.observeInView(list.querySelectorAll('.client-row.is-case'));

  var FRAMES = {
    imac: {
      photo: 'opt/imac-desk-photo.webp',
      screen: {
        left: 18.038, top: 18.3375, width: 38.508, height: 35.175,
        clip: 'polygon(0% 0%, 99.29% 9.70%, 100% 100%, 0.368% 99.18%)',
        matrix: 'matrix(0.9929,0.05908,0.006041,0.99183,0,0)'
      },
      zoom: 1.55,
      originYOffset: -3
    },
    qoc: { photo: 'opt/qoc-cover-flat.webp' },
    teyseer: { photo: 'opt/teyseer-mockup.webp' },
    dialog: { photo: 'opt/dialog-macbook-mockup.webp' }
  };

  // Indexed by data-index on each row.
  var MOCKS = [
    { frame: 'qoc' },
    { frame: 'imac', img: 'opt/applab-hero.webp', tint: 'rgba(90,169,255,0.16)' },
    { frame: 'teyseer' },
    { frame: 'dialog' }
  ];

  function mockHTML(mock) {
    var f = FRAMES[mock.frame];
    var photoStyle = 'background-image:url(' + ASSETS + f.photo + ')';
    var screen = '';
    if (f.screen) {
      var s = f.screen;
      var ox = s.left + s.width / 2;
      var oy = s.top + s.height / 2 + (f.originYOffset || 0);
      photoStyle += ';transform:scale(' + f.zoom + ');transform-origin:' + ox + '% ' + oy + '%';
      var imgStyle = mock.img ? 'background-image:url(' + ASSETS + mock.img + ');background-size:' + (mock.fit || 'contain') : '';
      if (s.matrix) imgStyle += ';transform:' + s.matrix;
      screen =
        '<div class="mock__screen" style="left:' + s.left + '%;top:' + s.top + '%;width:' + s.width + '%;height:' + s.height + '%;clip-path:' + s.clip + '">' +
          '<div class="mock__img" style="' + imgStyle + '"></div>' +
          (mock.img ? '' : '<div class="mock__placeholder">In development</div>') +
          (mock.tint ? '<div class="mock__tint" style="background:' + mock.tint + '"></div>' : '') +
        '</div>';
    }
    return '<div class="mock"><div class="mock__photo" style="' + photoStyle + '">' + screen + '</div></div>';
  }

  if (Site.isTouch) return;

  var preview = document.querySelector('.hover-preview');
  var inner = document.querySelector('.hover-preview__inner');
  var PREVIEW_W = 400, PREVIEW_H = 267, EDGE = 16;
  var hover = null; // { row, rect, mouseX }

  function position() {
    var wobble = Math.sin(hover.mouseX * 0.025);
    var x = hover.mouseX - PREVIEW_W / 2;
    var y = hover.rect.top + hover.rect.height / 2 - PREVIEW_H / 2 + wobble * 14;
    x = Math.max(EDGE, Math.min(x, window.innerWidth - PREVIEW_W - EDGE));
    y = Math.max(EDGE, Math.min(y, window.innerHeight - PREVIEW_H - EDGE));
    preview.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0) rotate(' + (wobble * 1.6) + 'deg)';
  }

  function show(row, mouseX) {
    var r = row.getBoundingClientRect();
    if (!hover || hover.row !== row) inner.innerHTML = mockHTML(MOCKS[Number(row.dataset.index)]);
    hover = { row: row, rect: { top: r.top, height: r.height }, mouseX: mouseX == null ? r.left + r.width * 0.7 : mouseX };
    position();
    preview.classList.add('is-visible');
  }

  function hide() {
    hover = null;
    preview.classList.remove('is-visible');
  }

  list.addEventListener('mouseover', function (e) {
    var row = e.target.closest('.client-row');
    if (!row || (hover && hover.row === row)) return;
    show(row, e.clientX);
  });
  list.addEventListener('mousemove', function (e) {
    if (!hover || Math.abs(e.clientX - hover.mouseX) <= 2) return;
    hover.mouseX = e.clientX;
    position();
  });
  list.addEventListener('mouseleave', hide);
  list.addEventListener('focusin', function (e) {
    var row = e.target.closest('.client-row');
    if (row) show(row, null);
  });
  list.addEventListener('focusout', hide);
  window.addEventListener('scroll', function () { if (hover) hide(); }, { passive: true });
})();

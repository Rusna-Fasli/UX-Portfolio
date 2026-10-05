/* Work page: project data, filter tabs, grid/list views and the list hover preview. */
(function () {
  var ASSETS = '../assets/';

  var CASE_STUDIES = {
    'Qatar Olympic Committee': 'projects/qoc.html',
    'Dialog Axiata PLC': 'projects/dialog.html'
  };

  // Device frames. Frames with a screen box composite a screenshot into the photo;
  // the rest are flat, pre-composed mockups.
  var FRAMES = {
    black: {
      photo: 'opt/macbook-desk-photo.webp',
      screen: { left: 31.98, top: 42.95, width: 35.4, height: 34.02, clip: 'inset(0% 0% 0.4% 0% round 7% 7% 0 0)' },
      zoom: 1.4
    },
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
    nifty: { photo: 'opt/nifty-kids-mockup.webp' },
    dialog: { photo: 'opt/dialog-macbook-mockup.webp' },
    research: { photo: 'opt/telco-research-mock.webp' },
    cabinet: { photo: 'cabinetdesk-mockup.webp' },
    teyseer: { photo: 'opt/teyseer-mockup.webp' }
  };

  var PROJECTS = [
    {
      group: 'industry',
      title: 'Qatar Olympic Committee',
      category: 'Website · Sports Governance',
      descriptor: 'Rebuilding the national Olympic body’s website into one place to follow Team Qatar, its athletes, events and news.',
      tags: ['End to End', 'Responsive Design'],
      mock: { frame: 'qoc' }
    },
    {
      group: 'industry',
      title: 'Applab',
      category: 'Website & Kiosk · Technology & IT',
      descriptor: 'Seamless digital experience to strengthen the digital presence & showcase the full potential of its capabilities.',
      tags: ['AI powered Design & Development', 'Walk-up Service'],
      mock: { frame: 'imac', img: 'opt/applab-hero.webp', tint: 'rgba(90,169,255,0.16)' }
    },
    {
      group: 'industry',
      title: 'Teyseer Holding W.L.L.',
      category: 'Website · Business & Corporate',
      descriptor: 'In progress — currently under development phase.',
      tags: ['UI/UX Design', 'Business & Corporate'],
      mock: { frame: 'teyseer' }
    },
    {
      group: 'industry',
      title: 'Dialog Axiata PLC',
      category: 'Website & Mobile App · Telecommunications & Digital',
      descriptor: 'Redesigning a key user flow for Sri Lanka’s No. 1 telecommunications provider, with a focus on clarity, ease, and efficiency.',
      tags: ['SIM Management System', 'End-to-End'],
      mock: { frame: 'dialog' }
    },
    {
      group: 'academic',
      title: 'Mora Start-up',
      category: 'Web Application · Entrepreneurship',
      descriptor: 'Comprehensive business consultancy portal.',
      tags: ['UX Design Process', 'UI Design', 'Concept Pitch'],
      mock: { frame: 'black', img: 'opt/mora-startup.webp', tint: 'rgba(255,180,120,0.14)', fit: 'cover' }
    },
    {
      group: 'academic',
      title: 'Nifty Kids',
      category: 'Mobile Application · Education & Creative Learning',
      descriptor: 'A learning app that turns creative activities into short, playful lessons for children, refined through usability testing.',
      tags: ['UX Design Process', 'UI Design', 'Usability Testing'],
      mock: { frame: 'nifty' }
    },
    {
      group: 'academic',
      title: 'Customer perception on telco selfcare applications based on usability aspect',
      category: 'Research & Publication · Telecommunication & Digital',
      descriptor: 'A published study on how customers perceive telco self-care apps, measured against core usability principles.',
      tags: ['UX Principles Evaluation', 'Usability Testing'],
      mock: { frame: 'research' }
    },
    {
      group: 'academic',
      title: 'CabinetDesk',
      category: 'Dashboard · Government & Public Sector',
      descriptor: 'Cabinet secretariat document workplace.',
      tags: ['Dashboard', 'Key Performance Indicator', 'Data Visualization'],
      mock: { frame: 'cabinet' }
    }
  ];

  var ARROW = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var state = { filter: 'all', view: 'grid' };

  var els = {
    filterBtns: document.querySelectorAll('[data-filter]'),
    viewBtns: document.querySelectorAll('[data-view]'),
    gridSection: document.getElementById('project-grid'),
    listSection: document.getElementById('project-list'),
    grid: document.querySelector('.project-grid'),
    list: document.querySelector('.project-list'),
    expertise: document.getElementById('expertise'),
    preview: document.querySelector('.hover-preview'),
    previewInner: document.querySelector('.hover-preview__inner')
  };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function mockHTML(mock) {
    var f = FRAMES[mock.frame];
    var photoStyle = 'background-image:url(' + ASSETS + f.photo + ')';
    var screen = '';
    if (f.screen) {
      var s = f.screen;
      var ox = s.left + s.width / 2;
      var oy = s.top + s.height / 2 + (f.originYOffset || 0);
      photoStyle += ';transform:scale(' + f.zoom + ');transform-origin:' + ox + '% ' + oy + '%';
      var imgStyle = mock.img
        ? 'background-image:url(' + ASSETS + mock.img + ');background-size:' + (mock.fit || 'contain')
        : '';
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

  function visibleProjects() {
    return state.filter === 'all' ? PROJECTS : PROJECTS.filter(function (p) { return p.group === state.filter; });
  }

  function linkAttrs(p) {
    var href = CASE_STUDIES[p.title];
    return href ? 'href="' + href + '"' : 'role="article"';
  }

  function renderGrid(items) {
    els.grid.innerHTML = items.map(function (p) {
      var isCase = !!CASE_STUDIES[p.title];
      var tag = isCase ? 'a' : 'div';
      return '<' + tag + ' class="card' + (isCase ? ' is-case' : '') + '" ' + linkAttrs(p) + '>' +
        '<div class="card__media"><div class="card__zoom">' + mockHTML(p.mock) +
          (p.nda ? '<span class="card__nda">Selected work · NDA</span>' : '') +
        '</div></div>' +
        '<div class="card__body">' +
          '<span class="card__head"><span class="card__title">' + esc(p.title) + '</span>' +
            (isCase ? '<span class="card__badge" aria-hidden="true">' + ARROW + '</span>' : '') +
          '</span>' +
          '<span class="card__category">' + esc(p.category) + '</span>' +
          '<div class="card__tags">' + p.tags.map(function (t) { return '<span class="chip">' + esc(t) + '</span>'; }).join('') + '</div>' +
        '</div>' +
      '</' + tag + '>';
    }).join('');
    Site.observeInView(els.grid.querySelectorAll('.card.is-case'));
  }

  function renderList(items) {
    els.list.innerHTML = items.map(function (p, i) {
      var isCase = !!CASE_STUDIES[p.title];
      var tag = isCase ? 'a' : 'div';
      return '<' + tag + ' class="row' + (isCase ? ' is-case' : '') + '" data-index="' + i + '" ' + linkAttrs(p) + '>' +
        '<span class="row__num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="row__main"><span class="row__title">' + esc(p.title) + '</span><span class="row__desc">' + esc(p.descriptor) + '</span></span>' +
        '<span class="row__meta"><span class="row__category">' + esc(p.category) + '</span><span class="row__tags">' + esc(p.tags.join(' · ')) + '</span></span>' +
        '<span class="row__arrow" aria-hidden="true">' + ARROW + '</span>' +
      '</' + tag + '>';
    }).join('');
    Site.observeInView(els.list.querySelectorAll('.row.is-case'));
  }

  function replayEnter(section) {
    section.classList.remove('is-entering');
    void section.offsetWidth;
    section.classList.add('is-entering');
  }

  function render(animate) {
    var items = visibleProjects();
    var grid = state.view === 'grid';

    els.filterBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.filter === state.filter)); });
    els.viewBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.view === state.view)); });

    els.gridSection.hidden = !grid;
    els.listSection.hidden = grid;
    els.expertise.hidden = state.filter === 'academic';

    if (grid) renderGrid(items); else renderList(items);
    if (animate) replayEnter(grid ? els.gridSection : els.listSection);
    hidePreview();
  }

  els.filterBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      if (state.filter === b.dataset.filter) return;
      state.filter = b.dataset.filter;
      render(true);
    });
  });
  els.viewBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      if (state.view === b.dataset.view) return;
      state.view = b.dataset.view;
      render(true);
    });
  });

  // ---------- Hover preview (list view, pointer devices only) ----------

  var PREVIEW_W = 400, PREVIEW_H = 267, EDGE = 16;
  var hover = null; // { index, rect, mouseX }

  function positionPreview() {
    var wobble = Math.sin(hover.mouseX * 0.025);
    var x = hover.mouseX - PREVIEW_W / 2;
    var y = hover.rect.top + hover.rect.height / 2 - PREVIEW_H / 2 + wobble * 14;
    x = Math.max(EDGE, Math.min(x, window.innerWidth - PREVIEW_W - EDGE));
    y = Math.max(EDGE, Math.min(y, window.innerHeight - PREVIEW_H - EDGE));
    els.preview.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0) rotate(' + (wobble * 1.6) + 'deg)';
  }

  function hidePreview() {
    hover = null;
    els.preview.classList.remove('is-visible');
  }

  if (!Site.isTouch) {
    els.list.addEventListener('mouseover', function (e) {
      var row = e.target.closest('.row');
      if (!row || (hover && hover.row === row)) return;
      var p = visibleProjects()[Number(row.dataset.index)];
      var r = row.getBoundingClientRect();
      hover = { row: row, rect: { top: r.top, height: r.height }, mouseX: e.clientX };
      els.previewInner.innerHTML = mockHTML(p.mock);
      positionPreview();
      els.preview.classList.add('is-visible');
    });
    els.list.addEventListener('mousemove', function (e) {
      if (!hover || Math.abs(e.clientX - hover.mouseX) <= 2) return;
      hover.mouseX = e.clientX;
      positionPreview();
    });
    els.list.addEventListener('mouseleave', hidePreview);
    window.addEventListener('scroll', function () { if (hover) hidePreview(); }, { passive: true });
  }

  render(false);
})();

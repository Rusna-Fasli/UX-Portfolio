/* QOC case study: stakeholder tabs, persona switcher, heat-map layout fitting. */
(function () {
  // ---------- Stakeholder map tiers ----------
  var sm = document.querySelector('.sm');
  if (sm) {
    var smTabs = sm.querySelectorAll('[data-sm-tab]');
    var selectTier = function (i) {
      sm.setAttribute('data-tier', String(i));
      smTabs.forEach(function (b) {
        var on = b.getAttribute('data-sm-tab') === String(i);
        b.setAttribute('aria-selected', String(on));
        b.setAttribute('aria-pressed', String(on));
        b.tabIndex = on ? 0 : -1;
      });
    };
    smTabs.forEach(function (b, i) {
      b.addEventListener('click', function () { selectTier(i); });
      b.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        var n = (i + d + smTabs.length) % smTabs.length;
        selectTier(n); smTabs[n].focus();
      });
    });
    selectTier(0);
  }

  // ---------- Personas ----------
  var PERSONAS = [
    { name: 'Ahmed', role: 'Media Personal',
      quote: '“I manage press relations and official communications for the Qatar Olympic Committee, ensuring accurate and timely media coverage.”', constraint: 'Scattered Information',
      needs: [['7/10', 'News room'], ['90%', 'Requests Stats of Athletes'], ['10x', 'Online Registration saves time'], ['24/7', 'access to media accreditation info'], ['<3 sec', 'Search for athlete, event, or news'], ['jpg, mp4, pdf', 'Assets downloadable in multiple formats'], ['1-click', 'Access to event & athlete profiles']],
      pains: ['No press contact directory', 'Lack of clear media accreditation guidelines', 'Difficult to find archived material', 'Lack of centralized media hub', 'No central multimedia gallery with tagging by event/sport.', 'No centralized calendar with filters for media planning'] },
    { name: 'Saeed Hasan', role: 'Elite Athlete',
      quote: '“I’m an elite athlete driven by discipline and passion, proud to represent Qatar, and always pushing beyond limits to inspire others.”', constraint: 'Achievement are not showcased',
      needs: [['Visible', 'Post retirement opportunities'], ['100%', 'up-to-date rosters, results, and schedules'], ['Alerts', 'for breaking news or schedule changes'], ['High', 'Visibility on achievement'], ['<3 sec', 'Search for athlete, event, or news'], ['Filtration', 'for sport type, event date'], ['Instant', 'contact links to media relations or press officers'], ['Responsive Design', 'access on mobile, tablet, and desktop']],
      pains: ['No personalized Athletes Portal', 'Lack of athlete feedback/support space', 'Lack of transparency on sponsorship opportunities', 'Unclear selection criteria, qualifications, and performance targets', 'No segregation between public and athlete-only info'] },
    { name: 'Zakir', role: 'Junior Athlete',
      quote: '“I manage press relations and official communications for the Qatar Olympic Committee, ensuring accurate and timely media coverage.”', constraint: 'Less motivation & guidance',
      needs: [['Network', 'with athletes, mentors'], ['90%', 'Requests to provide Talent Identification and Pathways'], ['10/10', 'Tracking achievements & recognition'], ['Detailed', 'access to selection criteria'], ['Information', 'on anti-doping, fair play etc..'], ['Scholarship', 'Access to Scholarships and Financial Support'], ['Resources', 'coaching, facilities, and sports science support.']],
      pains: ['Difficult to find youth-specific programs', 'Limited coverage of junior and emerging athletes', 'The website structure isn’t tailored for quick access', 'No info on available scholarships or support schemes.'] },
    { name: 'Thalal', role: 'Fan',
      quote: '“I’m a huge fan of Qatari athletes and always follow our Olympic teams closely”', constraint: 'struggle to find updates, results, and athlete-related content quickly',
      needs: [['Up-to date', 'Qatar’s athletes, their achievements, and upcoming competitions.'], ['Live Results', 'Access live results, news, and medal updates.'], ['History', 'Qatar’s history in Olympic sports'], ['Updates', 'Real-time updates'], ['Shareable', 'content for social media.'], ['Olympic Community', 'Gain access to events, ticketing information, and exclusive experiences.'], ['Mobile UI', 'Mobile-friendly design for quick browsing.']],
      pains: ['Absence of live updates', 'Lack of personalized content of Athletes', 'Minimal fan interaction', 'Difficulty in purchasing event tickets', 'Limited historical or archive info', 'No central multimedia gallery with tagging by event/sport.', 'Weak social media integration'] }
  ];

  var pz = document.querySelector('.pz');
  if (pz) {
    var field = function (k) { return pz.querySelector('[data-pz="' + k + '"]'); };
    var el = function (tag, cls, text) { var n = document.createElement(tag); n.className = cls; if (text != null) n.textContent = text; return n; };
    var pTabs = pz.querySelectorAll('[data-persona]');
    var showPersona = function (i) {
      var p = PERSONAS[i];
      pTabs.forEach(function (b) {
        var on = b.getAttribute('data-persona') === String(i);
        b.setAttribute('aria-selected', String(on));
        b.tabIndex = on ? 0 : -1;
      });
      field('name').textContent = p.name;
      field('role').textContent = p.role;
      field('quote').textContent = p.quote;
      field('constraint').textContent = p.constraint;
      var needs = field('needs'); needs.textContent = '';
      p.needs.forEach(function (n) {
        var card = el('div', 'pz-need');
        card.appendChild(el('span', 'pz-need__v', n[0]));
        card.appendChild(el('span', 'pz-need__l', n[1]));
        needs.appendChild(card);
      });
      var pains = field('pains'); pains.textContent = '';
      p.pains.forEach(function (t) { pains.appendChild(el('span', 'pz-pain', t)); });
    };
    pTabs.forEach(function (b, i) {
      b.addEventListener('click', function () { showPersona(i); });
      b.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        var n = (i + d + pTabs.length) % pTabs.length;
        showPersona(n); pTabs[n].focus();
      });
    });
    pTabs.forEach(function (b, i) { b.tabIndex = i === 0 ? 0 : -1; });
  }

  // ---------- Mouse-move heat map: pin the last gallery shot when side by side ----------
  var gal = document.getElementById('hm-gallery');
  if (gal) {
    var checkGal = function () {
      var heat = gal.previousElementSibling;
      gal.classList.toggle('is-side', !!heat && Math.abs(gal.offsetTop - heat.offsetTop) < 4);
    };
    if ('ResizeObserver' in window) new ResizeObserver(checkGal).observe(gal.parentElement);
    else window.addEventListener('resize', checkGal);
    checkGal();
  }

  // ---------- Scroll heat map: size the heat map so it matches the screenshot column ----------
  var row = document.getElementById('sh-row');
  var heatBox = document.getElementById('sh-heat');
  var col = document.getElementById('sh-col');
  if (row && heatBox && col) {
    var img = heatBox.querySelector('img');
    var fitScroll = function () {
      var W = row.clientWidth;
      var G = parseFloat(getComputedStyle(row).columnGap) || 30;
      var r = img && img.naturalWidth ? img.naturalHeight / img.naturalWidth : 3;
      if (W < 640) {
        heatBox.style.flex = heatBox.style.maxWidth = heatBox.style.minWidth = '';
        col.style.flex = '';
        col.classList.remove('is-fit');
        return;
      }
      var caps = Array.prototype.reduce.call(col.querySelectorAll('figcaption'), function (t, c) { return t + c.offsetHeight + 8; }, 0) + 28;
      var k = 27 / 16;
      var hw = Math.floor((k * (W - 180 - G) + caps) / (r + k));
      var c = Math.floor(W - hw - 180 - G - 1);
      heatBox.style.flex = '0 0 ' + (hw + 180) + 'px';
      heatBox.style.maxWidth = 'none';
      heatBox.style.minWidth = 'auto';
      col.style.flex = '0 0 ' + c + 'px';
      col.classList.add('is-fit');
    };
    var queued = false;
    var schedule = function () { if (queued) return; queued = true; requestAnimationFrame(function () { queued = false; fitScroll(); }); };
    if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(row);
    else window.addEventListener('resize', schedule);
    if (img && !img.complete) img.addEventListener('load', schedule);
    col.querySelectorAll('img').forEach(function (im) { if (!im.complete) im.addEventListener('load', schedule); });
    fitScroll();
  }
})();

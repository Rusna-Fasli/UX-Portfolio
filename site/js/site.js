/* Shared behaviour: theme toggle, sticky header, mobile menu, scroll reveal, touch in-view highlights. */
(function () {
  var THEME_KEY = 'site-theme-v2';
  var root = document.documentElement;

  function storedTheme() {
    try { return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light'; } catch (e) { return 'light'; }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      var dark = theme === 'dark';
      // SVG elements have no .hidden property, so set the attribute directly.
      btn.querySelector('.icon-sun').toggleAttribute('hidden', !dark);
      btn.querySelector('.icon-moon').toggleAttribute('hidden', dark);
      btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    });
  }

  applyTheme(storedTheme());

  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    });
  });

  // Header: surface background once scrolled, mobile menu below 860px.
  var header = document.querySelector('.site-header');
  if (header) {
    var toggle = header.querySelector('.menu-toggle');
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 4); };
    var setOpen = function (open) {
      header.classList.toggle('is-open', open);
      if (toggle) {
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function () { if (window.innerWidth >= 860) setOpen(false); });
    window.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    if (toggle) toggle.addEventListener('click', function () { setOpen(!header.classList.contains('is-open')); });
    onScroll();
  }

  // Scroll reveal for top-level sections.
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('rv-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.04 });
    var vh = window.innerHeight || 800;
    document.querySelectorAll('main > section:not([data-no-reveal])').forEach(function (el) {
      el.classList.add('rv-armed');
      if (el.getBoundingClientRect().top < vh * 0.92) el.classList.add('rv-in');
      else io.observe(el);
    });
  }

  // On touch devices, highlight the card or row in the middle of the screen.
  var touch = window.matchMedia && window.matchMedia('(hover: none)').matches;
  var inviewIO = touch && 'IntersectionObserver' in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) e.target.setAttribute('data-inview', '');
          else e.target.removeAttribute('data-inview');
        });
      }, { rootMargin: '-38% 0px -38% 0px', threshold: 0 })
    : null;

  window.Site = {
    isTouch: touch,
    observeInView: function (els) {
      if (!inviewIO) return;
      els.forEach(function (el) { inviewIO.observe(el); });
    }
  };
})();

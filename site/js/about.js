/* About page: skill-area tabs, "Outside the pixels" photo carousel, touch highlights. */
(function () {
  // Skill-area tabs (selection only, as in the design).
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.skill-tab'));
  function select(i, focus) {
    tabs.forEach(function (t, j) {
      var on = i === j;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    if (focus) tabs[i].focus();
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { select(i); });
    tab.addEventListener('keydown', function (e) {
      var n = tabs.length, next = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % n;
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + n) % n;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = n - 1;
      if (next !== null) { e.preventDefault(); select(next, true); }
    });
  });

  // Carousel: auto-advances every 3.5s; clicking a dot jumps and restarts the timer.
  var carousel = document.querySelector('.carousel');
  if (carousel) {
    var track = carousel.querySelector('.carousel__track');
    var dots = Array.prototype.slice.call(carousel.querySelectorAll('.carousel__dot'));
    var count = dots.length, idx = 0, timer = null;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var go = function (i) {
      idx = (i + count) % count;
      track.style.transform = 'translateX(-' + idx * 100 + '%)';
      dots.forEach(function (d, j) {
        if (j === idx) d.setAttribute('aria-current', 'true');
        else d.removeAttribute('aria-current');
      });
    };
    var start = function () {
      clearInterval(timer);
      if (reduce || document.hidden) return;
      timer = setInterval(function () { go(idx + 1); }, 3500);
    };

    dots.forEach(function (d, i) {
      d.addEventListener('click', function () { go(i); start(); });
    });
    document.addEventListener('visibilitychange', start);
    go(0);
    start();
  }

  if (window.Site) window.Site.observeInView(Array.prototype.slice.call(document.querySelectorAll('.lift')));
})();

(function () {
  if (window.__siteReveal) return; window.__siteReveal = true;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var css = document.createElement('style');
  css.textContent =
    '.rv-armed{opacity:0;transform:translateY(16px);transition:opacity 700ms cubic-bezier(.16,1,.3,1),transform 700ms cubic-bezier(.16,1,.3,1)}' +
    '.rv-armed.rv-in{opacity:1;transform:none}' +
    '@media (prefers-reduced-motion: reduce){.rv-armed{opacity:1!important;transform:none!important;transition:none!important}}';
  document.head.appendChild(css);
  if (reduce || !('IntersectionObserver' in window)) return;
  var SEL = 'main > section:not([data-no-reveal]), main > * > section:not([data-no-reveal]), [data-reveal-item]';
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('rv-in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.04 });
  function scan() {
    var vh = window.innerHeight || 800;
    document.querySelectorAll(SEL).forEach(function (el) {
      if (el.hasAttribute('data-reveal') || el.classList.contains('rv-armed')) return;
      var top = el.getBoundingClientRect().top;
      el.classList.add('rv-armed');
      if (top < vh * 0.92) { el.classList.add('rv-in'); } else { io.observe(el); }
    });
  }
  var t; var mo = new MutationObserver(function () { clearTimeout(t); t = setTimeout(scan, 60); });
  function start() { scan(); mo.observe(document.body, { childList: true, subtree: true }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();

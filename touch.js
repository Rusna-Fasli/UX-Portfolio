(function () {
  if (window.__siteTouch) return; window.__siteTouch = true;
  var css = document.createElement('style');
  css.textContent =
    'a,button,[role=tab],[tabindex]{-webkit-tap-highlight-color:transparent}' +
    '@media (hover: none){' +
      '[data-touch-card]{transition:transform 260ms cubic-bezier(.2,.7,.2,1),box-shadow 260ms cubic-bezier(.2,.7,.2,1),border-color 260ms ease!important}' +
      '[data-touch-card][data-inview]{transform:translateY(-2px)!important;box-shadow:var(--shadow-2)!important;border-color:var(--hairline-strong)!important}' +
      '[data-touch-card]:active{transform:scale(.985)!important;transition-duration:120ms!important}' +
      '[data-touch-row]{transition:background-color 220ms ease!important}' +
      '[data-touch-row][data-inview]{background-color:var(--tint-2)!important}' +
      '[data-touch-row]:active{background-color:var(--tint)!important;transition-duration:80ms!important}' +
      '[data-touch-link]:active{opacity:.6}' +
    '}' +
    '@media (max-width: 640px){.rv-armed{transform:translateY(10px);transition-duration:480ms!important}}';
  document.head.appendChild(css);
  if (!(window.matchMedia && window.matchMedia('(hover: none)').matches) || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) e.target.setAttribute('data-inview', ''); else e.target.removeAttribute('data-inview'); });
  }, { rootMargin: '-38% 0px -38% 0px', threshold: 0 });
  var seen = new WeakSet();
  function scan() {
    document.querySelectorAll('[data-touch-card],[data-touch-row]').forEach(function (el) { if (!seen.has(el)) { seen.add(el); io.observe(el); } });
  }
  var t; var mo = new MutationObserver(function () { clearTimeout(t); t = setTimeout(scan, 80); });
  function start() { scan(); mo.observe(document.body, { childList: true, subtree: true }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();

(function () {
  if (/\.dc\.html$/i.test(location.pathname)) return;

  // 1. Resolve code-referenced assets to bundled resources
  var key = function (p) { return 'r_' + p.replace(/^\.?\//, '').replace(/[^a-z0-9]/gi, '_'); };
  var res = function (p) { var R = window.__resources; return R && R[key(p)]; };
  var fix = function (el) {
    if (!el || el.nodeType !== 1) return;
    var st = el.getAttribute('style');
    if (st && st.indexOf('assets/') > -1) {
      var n = st.replace(/url\((["']?)(\.?\/?assets\/[^"')]+)\1\)/g, function (m, q, p) { var r = res(p); return r ? 'url("' + r + '")' : m; });
      if (n !== st) el.setAttribute('style', n);
    }
    if (el.tagName === 'IMG') {
      var s = el.getAttribute('src');
      if (s && /^\.?\/?assets\//.test(s)) { var r = res(s); if (r) el.setAttribute('src', r); }
    }
  };
  var scan = function (root) {
    fix(root);
    if (root.querySelectorAll) root.querySelectorAll('[style*="assets/"], img[src*="assets/"]').forEach(fix);
  };
  var startFix = function () {
    if (!window.__resources) return;
    scan(document.documentElement);
    new MutationObserver(function (list) {
      list.forEach(function (m) {
        if (m.type === 'attributes') fix(m.target);
        else m.addedNodes.forEach(function (n) { if (n.nodeType === 1) scan(n); });
      });
    }).observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ['style', 'src'] });
  };
  startFix();

  // 2. Page links
  var isFramed = function () { try { return window.parent !== window && !!window.parent.document.getElementById('view'); } catch (e) { return false; } };
  var ROUTES = { 'portfolio': '/', 'work': '/work', 'profile': '/about', 'contact': '/contact', 'dialog-axiata': '/work/dialog-axiata', 'qatar-olympic-committee': '/work/qoc' };
  var FILES = { 'portfolio': 'index.html', 'work': 'work.html', 'profile': 'about.html', 'contact': 'contact.html', 'dialog-axiata': 'projects/dialog.html', 'qatar-olympic-committee': 'projects/qoc.html' };
  var prefix = /\/projects\/[^\/]*$/.test(location.pathname) ? '../' : '';
  window.addEventListener('click', function (e) {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var m = (a.getAttribute('href') || '').match(/([A-Za-z-]+)\.dc\.html(#.*)?$/);
    if (!m) return;
    var k = m[1].toLowerCase();
    if (!ROUTES[k]) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    if (isFramed()) {
      var anchor = m[2] ? m[2].slice(1) : '';
      window.parent.postMessage({ __route: ROUTES[k], anchor: anchor }, '*');
    }
    else location.href = prefix + FILES[k] + (m[2] || '');
  }, true);
})();

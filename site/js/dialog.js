/* Dialog Axiata case study: inner reveals, journey PDF + lightboxes, user-flow lightbox, showcase carousel. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ASSETS = '../../assets/dialog/';
  var lastFocus = null;

  // ---------- Inner reveals ([data-reveal] blocks inside non-revealing sections) ----------
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('rv-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });
    var vh = window.innerHeight || 800;
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('rv-armed');
      if (el.getBoundingClientRect().top < vh * 0.94) el.classList.add('rv-in');
      else io.observe(el);
    });
  }

  // ---------- Generic lightbox ----------
  function openLightbox(kind, content) {
    lastFocus = document.activeElement;
    var ov = document.createElement('div');
    ov.className = 'lightbox lightbox--' + kind;
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-modal', 'true');
    ov.appendChild(content);
    var close = document.createElement('button');
    close.type = 'button';
    close.className = 'lightbox__close';
    close.textContent = 'Close ✕';
    ov.appendChild(close);
    var shut = function () {
      ov.remove();
      document.body.classList.remove('is-locked');
      document.removeEventListener('keydown', onKey);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    };
    var onKey = function (e) { if (e.key === 'Escape') shut(); };
    close.addEventListener('click', shut);
    if (kind === 'scroll') ov.addEventListener('click', function (e) { if (e.target === ov) shut(); });
    document.addEventListener('keydown', onKey);
    document.body.appendChild(ov);
    document.body.classList.add('is-locked');
    close.focus();
  }

  function activate(el, fn) {
    el.addEventListener('click', fn);
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(); }
    });
  }

  // ---------- User journey diagram (PDF rendered with pdf.js) ----------
  var pdfHost = document.getElementById('journey-pdf');
  if (pdfHost) {
    var fail = function () {
      pdfHost.innerHTML = '<div class="cs-flow__msg">Diagram could not be rendered here — use the full-size link below.</div>';
      var t = document.getElementById('journey-expand');
      if (t) t.href = ASSETS + 'user-journey-diagram.pdf';
    };
    var draw = async function () {
      var pdfjsLib = window.pdfjsLib;
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      try {
        var pdf = await pdfjsLib.getDocument(ASSETS + 'user-journey-diagram.pdf').promise;
        pdfHost.innerHTML = '';
        var world = document.createElement('div');
        world.className = 'pdf-pages';
        pdfHost.appendChild(world);
        for (var n = 1; n <= pdf.numPages; n++) {
          var page = await pdf.getPage(n);
          var base = page.getViewport({ scale: 1 });
          var vp = page.getViewport({ scale: Math.min(2200 / base.width, 3) });
          var canvas = document.createElement('canvas');
          canvas.width = vp.width; canvas.height = vp.height;
          var ctx = canvas.getContext('2d');
          await page.render({ canvasContext: ctx, viewport: vp }).promise;
          // Drop blank pages.
          var ink = 0;
          var d = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
          for (var i = 0; i < d.length; i += 4 * 97) {
            if (d[i] < 245 || d[i + 1] < 245 || d[i + 2] < 245) { ink++; if (ink > 40) break; }
          }
          if (ink > 40) world.appendChild(canvas);
        }
        var open = function () {
          var src = world.querySelector('canvas');
          if (!src) return;
          var img = document.createElement('img');
          img.src = src.toDataURL('image/png');
          img.alt = 'User journey diagram';
          openLightbox('scroll', img);
        };
        activate(pdfHost, open);
        var trigger = document.getElementById('journey-expand');
        if (trigger) trigger.addEventListener('click', function (e) { e.preventDefault(); open(); });
      } catch (e) { fail(); }
    };
    var s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    s.onload = draw;
    s.onerror = fail;
    document.head.appendChild(s);
  }

  // ---------- User flow with UI screens (iframe + full-view lightbox) ----------
  var flowHost = document.getElementById('flow-frame');
  if (flowHost) {
    var openFlow = function () {
      var frame = document.createElement('iframe');
      frame.src = ASSETS + 'user-flow.html';
      frame.title = 'Dialog user flow with UI screens';
      openLightbox('frame', frame);
    };
    // Hide the embedded diagram's own toolbar in the inline preview;
    // its controls only make sense in the interactive full view.
    var inline = flowHost.querySelector('iframe');
    var stripChrome = function () {
      try {
        var doc = inline.contentDocument;
        if (!doc || !doc.body) return false;
        var hit = false;
        doc.querySelectorAll('div').forEach(function (el) {
          var st = el.getAttribute('style') || '';
          if (/right:\s*20px/.test(st) && /top:\s*20px/.test(st)) { el.style.display = 'none'; hit = true; }
          if (/left:\s*20px/.test(st) && /bottom:\s*18px/.test(st)) { el.style.display = 'none'; }
        });
        return hit;
      } catch (e) { return false; }
    };
    var tries = 0;
    var timer = setInterval(function () { if (stripChrome() || ++tries > 300) clearInterval(timer); }, 200);
    inline.addEventListener('load', stripChrome);
    activate(flowHost, openFlow);
    var flowTrigger = document.getElementById('flow-expand');
    if (flowTrigger) flowTrigger.addEventListener('click', function (e) { e.preventDefault(); openFlow(); });
  }

  // ---------- Final screens: auto-scrolling, centre-scaled loop ----------
  var row = document.getElementById('showcase-row');
  if (row) {
    var fit = function () {
      var rect = row.getBoundingClientRect();
      var cx = rect.left + row.clientWidth / 2;
      Array.prototype.forEach.call(row.children, function (c) {
        var r = c.getBoundingClientRect();
        var dist = Math.min(1, Math.abs(r.left + r.width / 2 - cx) / (row.clientWidth / 2));
        var e = (Math.cos(Math.PI * dist) + 1) / 2;
        c.style.transform = 'scale(' + (0.84 + e * 0.52).toFixed(3) + ')';
        c.style.zIndex = String(Math.round(10 + e * 100));
        c.style.boxShadow = '0 ' + (20 + e * 30).toFixed(0) + 'px ' + (44 + e * 50).toFixed(0) + 'px -30px rgba(0,0,0,' + (0.45 + e * 0.25).toFixed(2) + ')';
      });
    };
    row.addEventListener('scroll', fit, { passive: true });
    window.addEventListener('resize', fit);
    requestAnimationFrame(fit);
    setTimeout(fit, 400);
    row.querySelectorAll('img').forEach(function (img) { img.addEventListener('load', fit); });

    if (reduce) {
      row.classList.add('is-static');
    } else {
      var paused = false, visible = true, acc = 0, last = 0;
      row.addEventListener('mouseenter', function () { paused = true; });
      row.addEventListener('mouseleave', function () { paused = false; });
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }).observe(row);
      }
      var tick = function (t) {
        var dt = last ? Math.min(t - last, 60) : 0;
        last = t;
        if (dt && !paused && visible && !document.body.classList.contains('is-locked')) {
          acc += (72 * dt) / 1000;
          var px = Math.floor(acc);
          if (px) {
            acc -= px;
            row.scrollLeft += px;
            var half = row.scrollWidth / 2;
            if (row.scrollLeft >= half) row.scrollLeft -= half;
          }
        }
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }

  // ---------- Showcase full-view overlay ----------
  var overlay = document.getElementById('showcase-overlay');
  var openBtn = document.querySelector('.showcase__open');
  if (overlay && openBtn) {
    var closeBtn = overlay.querySelector('.showcase-overlay__close');
    var onKey = function (e) { if (e.key === 'Escape') closeOverlay(); };
    var openOverlay = function () {
      overlay.hidden = false;
      document.body.classList.add('is-locked');
      document.addEventListener('keydown', onKey);
      closeBtn.focus();
    };
    var closeOverlay = function () {
      overlay.hidden = true;
      document.body.classList.remove('is-locked');
      document.removeEventListener('keydown', onKey);
      openBtn.focus();
    };
    openBtn.addEventListener('click', openOverlay);
    // As in the design, any click inside the overlay closes it.
    overlay.addEventListener('click', closeOverlay);
  }

  // ---------- Touch: highlight the flow card in the middle of the screen ----------
  if (window.Site) window.Site.observeInView(document.querySelectorAll('[data-touch-card]'));
})();

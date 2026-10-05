/* Contact page: copy-to-clipboard buttons and the contact form.
   The form posts to FormSubmit (formsubmit.co), which forwards each message
   to rusnafasli@outlook.com. */
(function () {
  // ---------- Copy buttons ----------
  var status = document.querySelector('.copy-status');
  var timer = null;
  var active = null;

  function setCopied(btn, on) {
    var row = btn.closest('.direct-row');
    if (row) row.classList.toggle('is-copied', on);
    btn.querySelector('.icon-copy').toggleAttribute('hidden', on);
    btn.querySelector('.icon-check').toggleAttribute('hidden', !on);
    btn.setAttribute('aria-label', on ? 'Copied' : 'Copy ' + btn.getAttribute('data-label'));
  }

  function fallbackCopy(text) {
    var t = document.createElement('textarea');
    t.value = text;
    t.setAttribute('readonly', '');
    t.style.position = 'fixed';
    t.style.opacity = '0';
    document.body.appendChild(t);
    t.select();
    try { document.execCommand('copy'); } catch (e) {}
    t.remove();
  }

  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var done = function () {
        if (active && active !== btn) setCopied(active, false);
        active = btn;
        setCopied(btn, true);
        if (status) status.textContent = 'Copied to clipboard';
        clearTimeout(timer);
        timer = setTimeout(function () {
          setCopied(btn, false);
          active = null;
          if (status) status.textContent = '';
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
      } else {
        fallbackCopy(text);
        done();
      }
    });
  });

  // ---------- Form ----------
  var form = document.getElementById('contact-form');
  if (!form) return;
  var submit = form.querySelector('.contact-submit');
  var label = submit.querySelector('.contact-submit__label');
  var spinner = submit.querySelector('.btn-spinner');
  var note = form.querySelector('.contact-form__note:not(.contact-form__error)');
  var error = form.querySelector('.contact-form__error');
  var ENDPOINT = 'https://formsubmit.co/ajax/rusnafasli@outlook.com';
  var sending = false;

  function setSending(on) {
    sending = on;
    submit.disabled = on;
    submit.setAttribute('aria-busy', String(on));
    spinner.toggleAttribute('hidden', !on);
    label.textContent = on ? 'Sending…' : 'Send message';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (sending) return;
    note.hidden = true;
    error.hidden = true;
    setSending(true);

    var data = new FormData(form);
    var name = data.get('name') || '';
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: name,
        email: data.get('email'),
        message: data.get('message'),
        _subject: 'Portfolio inquiry from ' + name,
        _replyto: data.get('email'),
        _template: 'table',
        _captcha: 'false'
      })
    })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (!j || (j.success !== true && j.success !== 'true')) throw new Error('FormSubmit rejected the message');
        form.reset();
        note.hidden = false;
      })
      .catch(function () { error.hidden = false; })
      .then(function () { setSending(false); });
  });
})();

(function () {
  'use strict';

  /* ---------- footer year ---------- */
  var yearEl = document.getElementById('ftYear');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '200px 0px 200px 0px' }
    );
    revealEls.forEach(function (el) { io.observe(el); });

    // Safety net: a fast/jumpy scroll (anchor nav, momentum flick, or a
    // headless full-page screenshot) can move an element past the observed
    // zone between two rendered frames and it never fires. Guarantee every
    // section becomes visible shortly after load no matter what.
    setTimeout(function () {
      document.querySelectorAll('.reveal:not(.in)').forEach(function (el) {
        el.classList.add('in');
      });
    }, 1800);
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- mobile nav burger ---------- */
  var burger = document.getElementById('hdBurger');
  var nav = document.getElementById('hdNav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      nav.classList.toggle('open', open);
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- contact form ----------
     送信先は仮のWordPress REST APIエンドポイント。
     実エンドポイントは後日別途実装する。
  */
  var form = document.getElementById('contactForm');
  var errorEl = document.getElementById('formError');
  var successEl = document.getElementById('formSuccess');
  var submitBtn = document.getElementById('submitBtn');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (errorEl) { errorEl.hidden = true; errorEl.textContent = ''; }

      var company = form.company.value.trim();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();

      if (!company || !name || !email || !message) {
        showError('必須項目が未入力です。');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = '送信中…';

      fetch('/wp-json/cdc/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ company: company, name: name, email: email, message: message }),
      })
        .then(function (res) {
          return res
            .json()
            .catch(function () { return {}; })
            .then(function (json) { return { ok: res.ok, json: json }; });
        })
        .then(function (result) {
          if (!result.ok || (result.json && result.json.ok === false)) {
            throw new Error(
              (result.json && result.json.error) ||
                '送信に失敗しました。時間をおいて再度お試しください。'
            );
          }
          form.hidden = true;
          if (successEl) successEl.hidden = false;
        })
        .catch(function (err) {
          showError(err.message || '送信に失敗しました。時間をおいて再度お試しください。');
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = '無料相談を申し込む';
        });
    });
  }

  function showError(msg) {
    if (!errorEl) return;
    errorEl.textContent = msg;
    errorEl.hidden = false;
  }
})();

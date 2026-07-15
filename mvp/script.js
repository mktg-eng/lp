// FAQセクションのアコーディオン開閉
// 元のNext.js版では useState(openIndex) で1つだけ開く挙動だった。
// ここではその挙動をvanilla JSで再現する。
(function () {
  var faqSection = document.getElementById('faq');
  if (!faqSection) return;

  var items = Array.prototype.slice.call(
    faqSection.querySelectorAll(':scope > div.mt-12 > div'),
  );

  items.forEach(function (item, index) {
    var button = item.querySelector('button');
    var panel = item.querySelector('.grid.transition-all');
    var icon = button ? button.querySelector('svg') : null;
    if (!button || !panel) return;

    button.addEventListener('click', function () {
      var isOpen = button.getAttribute('aria-expanded') === 'true';
      var nextOpen = !isOpen;

      items.forEach(function (other, otherIndex) {
        var otherButton = other.querySelector('button');
        var otherPanel = other.querySelector('.grid.transition-all');
        var otherIcon = otherButton ? otherButton.querySelector('svg') : null;
        var open = otherIndex === index ? nextOpen : false;

        if (otherButton) otherButton.setAttribute('aria-expanded', String(open));
        if (open) {
          other.classList.remove('border-border');
          other.classList.add('border-accent/40');
          if (otherPanel) {
            otherPanel.classList.remove('grid-rows-[0fr]', 'opacity-0');
            otherPanel.classList.add('grid-rows-[1fr]', 'opacity-100');
          }
          if (otherIcon) otherIcon.classList.add('rotate-45');
        } else {
          other.classList.remove('border-accent/40');
          other.classList.add('border-border');
          if (otherPanel) {
            otherPanel.classList.remove('grid-rows-[1fr]', 'opacity-100');
            otherPanel.classList.add('grid-rows-[0fr]', 'opacity-0');
          }
          if (otherIcon) otherIcon.classList.remove('rotate-45');
        }
      });
    });
  });
})();

// お問い合わせフォームの送信処理
// 元のNext.js版では /api/contact (サーバー側でSlack Webhookへ転送) にPOSTしていた。
// WordPress版では、この同じ役割を持つ PHP エンドポイントに向ける想定。
// 実際のURLは WordPress 側に反映する際に書き換える（下記 CONTACT_ENDPOINT）。
(function () {
  var CONTACT_ENDPOINT = '/wp-json/cdc/v1/contact'; // WP REST APIのカスタムエンドポイント想定

  var form = document.getElementById('contact-form');
  if (!form) return;

  var submitButton = form.querySelector('button[type="submit"]');
  var submitButtonDefaultHtml = submitButton ? submitButton.innerHTML : '';
  var errorEl = null;

  function showError(message) {
    if (!errorEl) {
      errorEl = document.createElement('p');
      errorEl.className = 'text-center text-sm text-destructive';
      form.appendChild(errorEl);
    }
    errorEl.textContent = message;
  }

  function showSuccess() {
    var successHtml =
      '<div class="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">' +
      '<span class="flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-7" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>' +
      '</span>' +
      '<h3 class="text-xl font-semibold">送信ありがとうございます</h3>' +
      '<p class="max-w-xs text-sm leading-relaxed text-muted-foreground">内容を確認のうえ、担当者よりご連絡いたします。少々お待ちください。</p>' +
      '</div>';
    form.outerHTML = successHtml;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (errorEl) errorEl.textContent = '';

    var fd = new FormData(form);
    var payload = {
      company: fd.get('company'),
      name: fd.get('name'),
      email: fd.get('email'),
      message: fd.get('message'),
    };

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = '送信中…';
    }

    fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(function (res) {
        return res
          .json()
          .catch(function () {
            return {};
          })
          .then(function (json) {
            if (!res.ok || !json.ok) {
              throw new Error(
                json.error || '送信に失敗しました。時間をおいて再度お試しください。',
              );
            }
            showSuccess();
          });
      })
      .catch(function (err) {
        showError(err.message || '送信に失敗しました。');
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.innerHTML = submitButtonDefaultHtml;
        }
      });
  });
})();

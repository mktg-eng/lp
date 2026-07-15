// 定額制デザインサービス LP（depo.design 参考リスタイル版）
// モバイルナビ／スクロールリビール／FAQアコーディオン／お問い合わせフォームの挙動

document.addEventListener('DOMContentLoaded', function () {
  initMobileNav()
  initReveal()
  initFaqAccordion()
  initContactForm()
  initFooterYear()
})

/* ------------------------------------------------------------------ */
/* モバイルナビゲーション（ハンバーガー開閉）                           */
/* ------------------------------------------------------------------ */
function initMobileNav() {
  var toggle = document.getElementById('navToggle')
  var nav = document.getElementById('mobileNav')
  if (!toggle || !nav) return

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open')
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
  })

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open')
      toggle.setAttribute('aria-expanded', 'false')
    })
  })
}

/* ------------------------------------------------------------------ */
/* スクロールで要素をフェードイン（IntersectionObserver）              */
/* ------------------------------------------------------------------ */
function initReveal() {
  var targets = document.querySelectorAll('[data-reveal]')
  if (!targets.length) return

  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) {
      el.classList.add('reveal-in')
    })
    return
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
  )

  targets.forEach(function (el) {
    var delay = el.getAttribute('data-reveal-delay')
    if (delay) {
      el.style.transitionDelay = delay + 'ms'
    }
    observer.observe(el)
  })
}

/* ------------------------------------------------------------------ */
/* FAQ アコーディオン（1つだけ開く）                                    */
/* ------------------------------------------------------------------ */
function initFaqAccordion() {
  var list = document.getElementById('faqList')
  if (!list) return

  var items = list.querySelectorAll('.faq-item')

  items.forEach(function (item) {
    var button = item.querySelector('.faq-item__q')
    button.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open')

      items.forEach(function (other) {
        other.classList.remove('is-open')
        other.querySelector('.faq-item__q').setAttribute('aria-expanded', 'false')
      })

      if (!isOpen) {
        item.classList.add('is-open')
        button.setAttribute('aria-expanded', 'true')
      }
    })
  })
}

/* ------------------------------------------------------------------ */
/* お問い合わせフォーム送信                                             */
/* 送信先: /wp-json/cdc/v1/contact （仮のWordPress REST APIエンドポイント。 */
/* 実エンドポイントは後日別途実装予定）                                  */
/* ------------------------------------------------------------------ */
function initContactForm() {
  var form = document.getElementById('contactForm')
  var success = document.getElementById('formSuccess')
  var errorEl = document.getElementById('formError')
  var submitBtn = document.getElementById('submitBtn')
  var submitLabel = document.getElementById('submitLabel')
  var submitIcon = document.getElementById('submitIcon')
  if (!form) return

  form.addEventListener('submit', function (event) {
    event.preventDefault()
    errorEl.classList.add('hidden')
    errorEl.textContent = ''
    submitBtn.disabled = true
    submitLabel.textContent = '送信中…'
    submitIcon.classList.add('hidden')

    var payload = {
      company: form.company.value.trim(),
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    }

    fetch('/wp-json/cdc/v1/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(function (res) {
        return res
          .json()
          .catch(function () {
            return {}
          })
          .then(function (json) {
            if (!res.ok || json.ok === false) {
              throw new Error(json.error || '送信に失敗しました。時間をおいて再度お試しください。')
            }
            return json
          })
      })
      .then(function () {
        form.classList.add('hidden')
        success.classList.remove('hidden')
      })
      .catch(function (err) {
        errorEl.textContent = err && err.message ? err.message : '送信に失敗しました。時間をおいて再度お試しください。'
        errorEl.classList.remove('hidden')
      })
      .finally(function () {
        submitBtn.disabled = false
        submitLabel.textContent = '無料相談を申し込む'
        submitIcon.classList.remove('hidden')
      })
  })
}

/* ------------------------------------------------------------------ */
/* フッターの年号                                                      */
/* ------------------------------------------------------------------ */
function initFooterYear() {
  var yearEl = document.getElementById('year')
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear())
  }
}

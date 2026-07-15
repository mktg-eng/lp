// IR LEAD | IR資料作成支援サービス LP
// モバイルナビ／スクロールリビール／制作イメージのショーケース切替／フローティングCTA／お問い合わせフォーム

document.addEventListener('DOMContentLoaded', function () {
  initMobileNav()
  initReveal()
  initShowcase()
  initFloatingCta()
  initContactForm()
  initFooterYear()
})

/* ------------------------------------------------------------------ */
/* モバイルナビゲーション（ハンバーガー開閉）                           */
/* ------------------------------------------------------------------ */
function initMobileNav() {
  var toggle = document.getElementById('navToggle')
  var panel = document.getElementById('mobilePanel')
  if (!toggle || !panel) return

  toggle.addEventListener('click', function () {
    var isOpen = panel.classList.toggle('is-open')
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
  })

  panel.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      panel.classList.remove('is-open')
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
    targets.forEach(function (el) { el.classList.add('reveal-in') })
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
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )

  targets.forEach(function (el) { observer.observe(el) })
}

/* ------------------------------------------------------------------ */
/* 制作イメージ Before/After ショーケース切替                          */
/* ------------------------------------------------------------------ */
function initShowcase() {
  var prevBtn = document.getElementById('showcasePrev')
  var nextBtn = document.getElementById('showcaseNext')
  var thumbs = document.querySelectorAll('.showcase-thumb')
  var caption = document.getElementById('showcaseCaption')
  var afterTitle = document.getElementById('afterTitle')
  if (!thumbs.length) return

  var cases = [
    { label: '中期経営計画資料', title: '中期経営計画 2026-2028', kpi1: '+18%', kpi2: '32%' },
    { label: '決算説明会資料', title: 'FY2026 第2四半期 決算概要', kpi1: '+12%', kpi2: '9.4%' },
    { label: '個人投資家向け資料', title: '個人投資家向け会社説明資料', kpi1: '+24%', kpi2: '68%' },
    { label: '統合報告書', title: '統合報告書 ダイジェスト版', kpi1: '+9%', kpi2: '41%' },
    { label: '事業計画資料', title: '事業計画及び成長可能性に関する事項', kpi1: '+31%', kpi2: '55%' },
  ]

  var current = 0

  function render(index) {
    current = (index + cases.length) % cases.length
    var c = cases[current]
    if (caption) caption.textContent = 'サンプル：' + c.label + '（制作イメージ）'
    if (afterTitle) afterTitle.textContent = c.title
    var kpiEls = document.querySelectorAll('#afterBody .ms-kpis strong')
    if (kpiEls[0]) kpiEls[0].textContent = c.kpi1
    if (kpiEls[1]) kpiEls[1].textContent = c.kpi2
    thumbs.forEach(function (t, i) {
      t.classList.toggle('is-active', i === current)
    })
  }

  thumbs.forEach(function (t) {
    t.addEventListener('click', function () {
      render(parseInt(t.getAttribute('data-index'), 10))
    })
  })
  if (prevBtn) prevBtn.addEventListener('click', function () { render(current - 1) })
  if (nextBtn) nextBtn.addEventListener('click', function () { render(current + 1) })
}

/* ------------------------------------------------------------------ */
/* フローティングCTA（一定スクロール後に表示、フッター手前で非表示）    */
/* ------------------------------------------------------------------ */
function initFloatingCta() {
  var cta = document.getElementById('floatingCta')
  var footer = document.querySelector('.site-footer')
  if (!cta) return

  function update() {
    var showAfter = window.innerHeight * 0.8
    var nearFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false
    if (window.scrollY > showAfter && !nearFooter) {
      cta.classList.add('is-visible')
    } else {
      cta.classList.remove('is-visible')
    }
  }
  window.addEventListener('scroll', update, { passive: true })
  update()
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
    if (submitIcon) submitIcon.classList.add('hidden')

    var payload = {
      company: form.company.value.trim(),
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      tel: form.tel.value.trim(),
      inquiry_type: form.inquiry_type.value,
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
          .catch(function () { return {} })
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
        success.scrollIntoView({ behavior: 'smooth', block: 'center' })
      })
      .catch(function (err) {
        errorEl.textContent = err && err.message ? err.message : '送信に失敗しました。時間をおいて再度お試しください。'
        errorEl.classList.remove('hidden')
      })
      .finally(function () {
        submitBtn.disabled = false
        submitLabel.textContent = 'この内容で送信する'
        if (submitIcon) submitIcon.classList.remove('hidden')
      })
  })
}

/* ------------------------------------------------------------------ */
/* フッターの年号                                                      */
/* ------------------------------------------------------------------ */
function initFooterYear() {
  var yearEl = document.getElementById('year')
  if (yearEl) yearEl.textContent = String(new Date().getFullYear())
}

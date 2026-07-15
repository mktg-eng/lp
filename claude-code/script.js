// Claude Code 導入支援＋サブエージェント設定サービス LP
// FAQアコーディオン と お問い合わせフォームの挙動 (元Next.jsコンポーネントの'use client'ロジックを素のJSに移植)

document.addEventListener('DOMContentLoaded', function () {
  initFaqAccordion()
  initContactForm()
})

/* ------------------------------------------------------------------ */
/* FAQ アコーディオン（1つだけ開く / 開いているものをクリックすると閉じる） */
/* ------------------------------------------------------------------ */
function initFaqAccordion() {
  var faqSection = document.getElementById('faq')
  if (!faqSection) return

  var items = Array.prototype.slice.call(
    faqSection.querySelectorAll('.mt-12.divide-y > div'),
  )
  if (!items.length) return

  items.forEach(function (item, index) {
    var button = item.querySelector('button')
    if (!button) return

    button.addEventListener('click', function () {
      var isOpen = button.getAttribute('aria-expanded') === 'true'
      items.forEach(function (otherItem, otherIndex) {
        setFaqItemOpen(otherItem, otherIndex === index ? !isOpen : false)
      })
    })
  })
}

function setFaqItemOpen(item, open) {
  var indicator = item.querySelector(':scope > span')
  var button = item.querySelector('button')
  var chevron = button ? button.querySelector('svg') : null
  var panel = item.querySelector(':scope > div.grid')

  item.classList.toggle('bg-brand-sky/40', open)
  item.classList.toggle('bg-transparent', !open)

  if (indicator) {
    indicator.classList.toggle('opacity-100', open)
    indicator.classList.toggle('opacity-0', !open)
  }

  if (button) {
    button.setAttribute('aria-expanded', open ? 'true' : 'false')
  }

  if (chevron) {
    chevron.classList.toggle('rotate-180', open)
    chevron.classList.toggle('text-brand-orange', open)
    chevron.classList.toggle('text-brand-navy/40', !open)
  }

  if (panel) {
    panel.classList.toggle('grid-rows-[1fr]', open)
    panel.classList.toggle('opacity-100', open)
    panel.classList.toggle('grid-rows-[0fr]', !open)
    panel.classList.toggle('opacity-0', !open)
  }
}

/* ------------------------------------------------------------------ */
/* お問い合わせフォーム */
/* ------------------------------------------------------------------ */
function initContactForm() {
  var form = document.querySelector('#contact form')
  if (!form) return

  var formWrapper = form.parentNode
  var submitButton = form.querySelector('button[type="submit"]')
  var submitButtonDefaultHTML = submitButton ? submitButton.innerHTML : ''
  var errorParagraph = null

  form.addEventListener('submit', function (event) {
    event.preventDefault()
    clearError()

    var formData = new FormData(form)
    var payload = {
      company: formData.get('company'),
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    setSubmitting(true)

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
            if (!res.ok || !json.ok) {
              throw new Error(
                (json && json.error) ||
                  '送信に失敗しました。時間をおいて再度お試しください。',
              )
            }
            return json
          })
      })
      .then(function () {
        showSuccess()
      })
      .catch(function (err) {
        showError(
          (err && err.message) || '送信に失敗しました。',
        )
      })
      .finally(function () {
        setSubmitting(false)
      })
  })

  function setSubmitting(submitting) {
    if (!submitButton) return
    submitButton.disabled = submitting
    submitButton.innerHTML = submitting ? '送信中…' : submitButtonDefaultHTML
  }

  function clearError() {
    if (errorParagraph) {
      errorParagraph.remove()
      errorParagraph = null
    }
  }

  function showError(message) {
    clearError()
    errorParagraph = document.createElement('p')
    errorParagraph.className = 'text-center text-sm text-destructive'
    errorParagraph.textContent = message
    if (submitButton) {
      submitButton.insertAdjacentElement('afterend', errorParagraph)
    } else {
      form.appendChild(errorParagraph)
    }
  }

  function showSuccess() {
    formWrapper.innerHTML =
      '<div class="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">' +
      '<span class="flex size-14 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check size-7" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>' +
      '</span>' +
      '<h3 class="text-xl font-bold">送信ありがとうございます</h3>' +
      '<p class="max-w-xs text-sm leading-relaxed text-muted-foreground">内容を確認のうえ、担当者よりご連絡いたします。少々お待ちください。</p>' +
      '</div>'
  }
}

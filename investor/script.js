// ============================================================
// Investor Communications LP — vanilla JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- mobile nav toggle ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const mobilePanel = document.getElementById('mobile-panel');

  if (navToggle && mobilePanel) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobilePanel.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // close menu when a link is clicked
    mobilePanel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobilePanel.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- scroll reveal ---------- */
  const revealTargets = document.querySelectorAll(
    '.hero-left, .hero-right, .news-card, .service-card, .feature-card, .contact-card, .company-table, .cta-banner'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );
  revealTargets.forEach((el) => io.observe(el));

  /* ---------- floating CTA visibility ---------- */
  const floatingCta = document.getElementById('floatingCta');
  const heroSection = document.querySelector('.hero');
  const footer = document.querySelector('.site-footer');

  if (floatingCta && heroSection) {
    const showObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // show once hero has scrolled out of view
          if (!entry.isIntersecting) {
            floatingCta.classList.add('is-visible');
          } else {
            floatingCta.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0 }
    );
    showObserver.observe(heroSection);

    if (footer) {
      const hideNearFooter = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              floatingCta.classList.remove('is-visible');
            }
          });
        },
        { threshold: 0.05 }
      );
      hideNearFooter.observe(footer);
    }
  }

  /* ---------- contact form submission ----------
     Placeholder endpoint: a real WordPress site will later expose
     /wp-json/cdc/v1/contact as a custom REST route for this form. */
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('.btn-submit');
      const originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = '送信中…';

      const payload = {
        company_name: form.company_name.value,
        name: form.name.value,
        email: form.email.value,
        tel: form.tel.value,
        inquiry_type: form.inquiry_type.value,
        message: form.message.value,
        source: 'investor.co.jp clone LP',
      };

      try {
        await fetch('/wp-json/cdc/v1/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        // Endpoint is not implemented yet in this environment;
        // the UX still proceeds to the success state so the flow
        // can be reviewed end-to-end ahead of the real API wiring.
        console.warn('Contact endpoint not reachable yet:', err);
      } finally {
        form.hidden = true;
        formSuccess.hidden = false;
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    });
  }
});

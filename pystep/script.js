// FAQのアコーディオン開閉(単一開閉: 1つ開くと他は閉じる)
(function () {
  var buttons = document.querySelectorAll('.rounded-xl.border.bg-card > button[aria-expanded]');
  if (!buttons.length) return;

  function setState(button, isOpen) {
    var wrapper = button.parentElement;
    var icon = button.querySelector('svg');
    var panel = button.nextElementSibling;

    button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    wrapper.classList.toggle('border-accent/40', isOpen);
    wrapper.classList.toggle('border-border', !isOpen);
    if (icon) icon.classList.toggle('rotate-45', isOpen);
    if (panel) {
      panel.classList.toggle('grid-rows-[1fr]', isOpen);
      panel.classList.toggle('grid-rows-[0fr]', !isOpen);
      panel.classList.toggle('opacity-100', isOpen);
      panel.classList.toggle('opacity-0', !isOpen);
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var willOpen = button.getAttribute('aria-expanded') !== 'true';
      buttons.forEach(function (b) {
        setState(b, b === button ? willOpen : false);
      });
    });
  });
})();

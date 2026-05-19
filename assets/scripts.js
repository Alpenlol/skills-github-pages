// Navbar — solidify on scroll, mobile collapse toggle.
(function () {
  var nav = document.getElementById('mainNav');
  if (!nav) return;

  // Add .is-fixed once user has scrolled past a small threshold.
  var FIXED_AT = 100;
  function syncFixed() {
    if (window.scrollY > FIXED_AT) nav.classList.add('is-fixed');
    else nav.classList.remove('is-fixed');
  }
  syncFixed();
  window.addEventListener('scroll', syncFixed, { passive: true });

  // Mobile collapse toggle.
  var toggle = document.getElementById('navbar-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Esc closes mobile menu.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Click outside the menu closes it (only when open).
  document.addEventListener('click', function (e) {
    if (!nav.classList.contains('is-open')) return;
    if (nav.contains(e.target)) return;
    nav.classList.remove('is-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  });
})();

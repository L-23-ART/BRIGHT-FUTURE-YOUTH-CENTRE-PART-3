/* ============================================
   Bright Future Youth Centre - Part 3
   script.js - Interactive elements & dynamic content
   ============================================ */

/* ---------- 2.1a Accordion (FAQ on about.html) ---------- */
document.querySelectorAll('.acc-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.classList.toggle('active');
    var panel = btn.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

/* ---------- 2.1d Gallery lightbox (gallery.html) ---------- */
document.querySelectorAll('.gallery img').forEach(function (img) {
  img.addEventListener('click', function () {
    var box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML = '<img src="' + img.src + '" alt="' + img.alt + '">';
    box.addEventListener('click', function () { box.remove(); });
    document.body.appendChild(box);
  });
});

/* ---------- 2.1c Scroll-reveal animation (IntersectionObserver) ---------- */
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
document.querySelectorAll('.card, section').forEach(function (el) {
  el.classList.add('reveal');
  observer.observe(el);
});

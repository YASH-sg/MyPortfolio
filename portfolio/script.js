/* ════════════════════════════════════════
   Yash Gawande Portfolio — script.js
   ════════════════════════════════════════ */

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

/* ── NAVBAR SHRINK ON SCROLL ── */
const navEl = document.querySelector('nav');
window.addEventListener('scroll', () => {
  navEl.style.padding = window.scrollY > 50 ? '0.9rem 4rem' : '1.4rem 4rem';
}, { passive: true });

/* ── ACTIVE NAV LINK HIGHLIGHT ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--gold)' : '';
  });
}, { passive: true });

/* ── CONTACT FORM HANDLER ── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');

  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = '✓ Message Sent!';
    btn.style.background = 'transparent';
    btn.style.color = 'var(--gold)';
    btn.style.outline = '1px solid var(--gold)';
    e.target.reset();

    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.disabled = false;
      btn.style.background = 'var(--gold)';
      btn.style.color = 'var(--bg)';
      btn.style.outline = 'none';
    }, 3000);
  }, 1200);
}
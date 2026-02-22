/* ════════════════════════════════════════
   Yash Gawande Portfolio — script.js
   ════════════════════════════════════════ */

/* ── EMAIL INJECTION (bypasses Cloudflare obfuscation)
   Split into parts so scrapers can't read it in source,
   but JS assembles & injects at runtime — fully clickable. ── */
(function () {
  const u = 'yashgawande901';
  const d = 'gmail.com';
  const email = u + '\u0040' + d;
  const mailto = 'mailto:' + email;

  // About section pill
  const pill = document.getElementById('email-pill');
  if (pill) {
    pill.href = mailto;
    const span = document.getElementById('email-pill-text');
    if (span) span.textContent = email;
  }

  // Contact section item
  const contactItem = document.getElementById('email-contact-item');
  if (contactItem) {
    contactItem.href = mailto;
    const val = document.getElementById('email-contact-value');
    if (val) val.textContent = email;
  }

  // Footer link
  const footerEmail = document.getElementById('footer-email');
  if (footerEmail) footerEmail.href = mailto;
})();

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

/* ── NAVBAR SHRINK ON SCROLL (CSS class toggle) ── */
const navEl = document.querySelector('nav');
window.addEventListener('scroll', () => {
  navEl.classList.toggle('nav-shrink', window.scrollY > 50);
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

function handleSubmit(e) {
  e.preventDefault();

  const params = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_2gr651r","template_301cl3f",params)
    .then(function() {
      alert("Message sent successfully!");
      e.target.reset();
    }, function(error) {
      alert("Failed to send message.");
      console.log(error);
    });
}
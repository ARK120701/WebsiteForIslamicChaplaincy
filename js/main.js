// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.setAttribute(
      'aria-expanded',
      navLinks.classList.contains('open').toString()
    );
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Contact form — placeholder submission handler
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    // Simulate sending (replace with real backend/Formspree/etc.)
    setTimeout(() => {
      form.innerHTML = `
        <div class="form-success" style="display:block">
          <h3>Message received — JazakAllah Khayran!</h3>
          <p>Thank you for reaching out. We will be in touch within 2–3 business days, in sha Allah.</p>
        </div>`;
    }, 1200);
  });
}

// Smooth scroll for anchor links that point to #id on the same page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

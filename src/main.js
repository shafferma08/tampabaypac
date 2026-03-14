import './css/style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Contact form handler
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      btn.textContent = 'Message Sent! ✓';
      btn.style.backgroundColor = 'var(--clr-accent-2)';
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.backgroundColor = '';
        form.reset();
      }, 3000);
    });
  }

  // Highlight active nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.desktop-nav a').forEach(link => {
    if (link.getAttribute('href') === currentPath || 
        (currentPath.endsWith(link.getAttribute('href').replace('/', '')))) {
      link.classList.add('active');
    }
  });
});

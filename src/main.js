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

  // ===== MOBILE NAV =====
  const navInner = document.querySelector('.nav-inner');
  if (!navInner) return;

  // Create hamburger button
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.setAttribute('aria-label', 'Menu');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  navInner.appendChild(hamburger);

  // Create mobile nav overlay
  const mobileNav = document.createElement('nav');
  mobileNav.className = 'mobile-nav';
  mobileNav.setAttribute('aria-label', 'Mobile navigation');

  // Clone desktop nav links into mobile nav
  const desktopLinks = document.querySelectorAll('.desktop-nav a');
  desktopLinks.forEach(link => {
    const clone = link.cloneNode(true);
    if (link.classList.contains('active')) clone.classList.add('active');
    mobileNav.appendChild(clone);
  });

  // Add "Join the Collective" CTA inside mobile nav
  const ctaBtn = navInner.querySelector('.btn');
  if (ctaBtn) {
    const mobileCta = ctaBtn.cloneNode(true);
    mobileNav.appendChild(mobileCta);
  }

  document.body.appendChild(mobileNav);

  // Toggle
  function toggleMobileNav() {
    const isOpen = hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  hamburger.addEventListener('click', toggleMobileNav);

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
});

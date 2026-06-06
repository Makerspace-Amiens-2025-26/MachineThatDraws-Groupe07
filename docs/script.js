/* ============================================
   DRAWBOT A4 — script.js
   Navbar, menu mobile, reveal, lightbox, TOC
   ============================================ */

const navbar = document.getElementById('navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

function closeMobileMenu() {
  if (!mobileMenu || !navToggle) return;
  mobileMenu.classList.remove('open');
  const spans = navToggle.querySelectorAll('span');
  spans[0].style.transform = '';
  spans[1].style.opacity = '';
  spans[2].style.transform = '';
}

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    const open = mobileMenu.classList.contains('open');
    spans[0].style.transform = open ? 'translateY(7px) rotate(45deg)' : '';
    spans[1].style.opacity = open ? '0' : '';
    spans[2].style.transform = open ? 'translateY(-7px) rotate(-45deg)' : '';
  });

  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMobileMenu();
    }
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-section, .fade-item').forEach((el) => {
  revealObserver.observe(el);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
      closeMobileMenu();
    }
  });
});

/* Lightbox */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src, caption) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = caption || '';
  if (lightboxCaption) {
    lightboxCaption.textContent = caption || '';
    lightboxCaption.style.display = caption ? 'block' : 'none';
  }
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-lightbox]').forEach((el) => {
  el.addEventListener('click', () => {
    const img = el.tagName === 'IMG' ? el : el.querySelector('img');
    if (img?.src) {
      openLightbox(img.src, el.dataset.caption || img.alt);
    }
  });
});

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

/* TOC actif (fiche technique) */
const docSections = document.querySelectorAll('.doc-section');
const tocLinks = document.querySelectorAll('.toc-link[href^="#"]');

function updateActiveToc() {
  if (!docSections.length || !tocLinks.length) return;
  let currentId = '';
  docSections.forEach((section) => {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.35) {
      currentId = section.id;
    }
  });
  tocLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
  });
}

if (docSections.length) {
  window.addEventListener('scroll', updateActiveToc, { passive: true });
  updateActiveToc();
}

/* Formulaire contact */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    if (status) {
      status.textContent = 'Message enregistré (démo). Pour un contact réel, utilisez les liens email ci-dessous.';
      status.classList.add('visible');
    }
    contactForm.reset();
  });
}

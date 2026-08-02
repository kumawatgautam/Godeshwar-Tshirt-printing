// ── NAV SCROLL EFFECT ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── MOBILE MENU ──
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navWa = document.querySelector('.nav-wa');

menuBtn.addEventListener('click', () => {
  const isOpen = menuBtn.classList.toggle('open');
  navLinks.classList.toggle('mobile-open', isOpen);
  navWa.classList.toggle('mobile-open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
  if (isOpen) {
    navbar.style.background = 'rgba(255,255,255,1)';
    navbar.style.borderBottomColor = '#E8E8E8';
    navbar.style.zIndex = '1005';
  } else {
    navbar.style.background = '';
    navbar.style.borderBottomColor = '';
    navbar.style.zIndex = '';
  }
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    navLinks.classList.remove('mobile-open');
    navWa.classList.remove('mobile-open');
    document.body.style.overflow = '';
    navbar.style.background = '';
    navbar.style.borderBottomColor = '';
  });
});


// ── HERO CAROUSEL ──
const slides = document.querySelectorAll('.hero-slide');
let current = 0;
let heroInterval;

function nextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

heroInterval = setInterval(nextSlide, 5000);

// ── REVEAL ON SCROLL ──
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// ── FORM → WHATSAPP ──
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('fname').value.trim();
  const phone = document.getElementById('fphone').value.trim();
  const type = document.getElementById('ftype').value;
  const msg = document.getElementById('fmsg').value.trim();

  const text = `Hello Gondeshwr! 🙏\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Printing Type:* ${type || 'Not specified'}\n*Message:* ${msg || 'No additional details.'}`;
  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/918007372576?text=${encoded}`, '_blank');
}

// ── SUBTLE PARALLAX ON HERO ──
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroSlides = document.querySelector('.hero-slides');
  if (heroSlides && scrollY < window.innerHeight) {
    heroSlides.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
}, { passive: true });
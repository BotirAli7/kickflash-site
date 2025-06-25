window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  setTimeout(() => {
    let l = document.getElementById('site-loader');
    if (l) l.style.display = 'none';
  }, 800);
});

// Dark/Light mode
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeBtn.innerHTML = '☀️';
  }
  themeBtn.onclick = () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      themeBtn.innerHTML = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      themeBtn.innerHTML = '🌙';
      localStorage.setItem('theme', 'light');
    }
  };
}

// Burger menu
const navToggle = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
if (navToggle && nav) {
  navToggle.onclick = () => {
    nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  };
}

// Scroll up button
const scrollUp = document.getElementById('scroll-up');
window.addEventListener('scroll', () => {
  if (scrollUp) scrollUp.classList.toggle('show', window.scrollY > 320);
});
if (scrollUp) scrollUp.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Toast
function showToast(msg) {
  let t = document.getElementById('site-toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2300);
}
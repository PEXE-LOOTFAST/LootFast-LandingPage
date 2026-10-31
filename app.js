document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-button');
const header = document.querySelector('.nav');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Mở menu'); header.classList.remove('menu-open'); document.body.classList.remove('menu-active'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu'); header.classList.toggle('menu-open', open); document.body.classList.toggle('menu-active', open); });
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
matchMedia('(min-width: 761px)').addEventListener('change', e => { if (e.matches) closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window) {
 const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold: .08});
 document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
 const tagline = document.querySelector('.tagline');
 if (!reduced) {
  const lines = tagline.innerHTML.split('<br>');
  tagline.innerHTML = lines.map(line => line.split(' ').map(word => `<span class="word">${word}</span>`).join(' ')).join('<br>');
  const words = [...tagline.querySelectorAll('.word')];
  const wordObserver = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) { entry.target.style.transitionDelay = `${words.indexOf(entry.target) * 60}ms`; entry.target.classList.add('visible'); wordObserver.unobserve(entry.target); } }), {threshold: 1});
  words.forEach(word => wordObserver.observe(word));
 }
} else { document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible')); }

// Keep keyboard focus inside the open mobile navigation.
document.addEventListener('keydown', event => {
  if (event.key !== 'Tab' || menu.getAttribute('aria-expanded') !== 'true') return;
  const controls = [menu, ...document.querySelectorAll('nav a')];
  const first = controls[0];
  const last = controls[controls.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

// Highlight the section being read without continuous scroll handlers.
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const activeSection = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting);
    if (!visible.length) return;
    const id = visible[visible.length - 1].target.id;
    links.forEach(link => {
      if (link.getAttribute('href') === `#${id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, {rootMargin: '-15% 0px -50% 0px', threshold: 0});
  sections.forEach(section => activeSection.observe(section));
}

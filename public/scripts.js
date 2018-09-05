// Parallax FX
window.addEventListener('scroll', function() {
  if (document.querySelector('.parallaxFX')) {
    let parallaxFX = document.querySelector('.parallaxFX');
    parallaxFX.style.backgroundPositionY = scrollY * 0.25 + 'px';
  }
});

// Toggle Nav
const navIcon = document.querySelector('.nav-icon');
navIcon.addEventListener('click', function() {
  navIcon.classList.toggle('active');
});

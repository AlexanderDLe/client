// Parallax FX
window.addEventListener('scroll', function() {
  if (document.querySelector('.parallaxFX')) {
    let parallaxFX = document.querySelector('.parallaxFX');
    parallaxFX.style.backgroundPositionY = scrollY * 0.25 + 'px';
  }
});

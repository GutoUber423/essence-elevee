// Simple animations & small interactive touches
document.addEventListener('DOMContentLoaded', () => {
  // Fade in nav links with a small stagger
  document.querySelectorAll('.main-nav a').forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(-6px)';
    setTimeout(() => {
      el.style.transition = 'all .45s cubic-bezier(.2,.9,.3,1)';
      el.style.opacity = 1;
      el.style.transform = 'none';
    }, 120 * i);
  });

  // Click to slightly scale featured image
  const feat = document.querySelector('.featured-image img');
  if(feat){
    feat.addEventListener('mouseenter', () => feat.style.transform = 'scale(1.01)');
    feat.addEventListener('mouseleave', () => feat.style.transform = '');
  }

  // Floating parallax on mouse move
  const hero = document.querySelector('.hero');
  if(hero && feat){
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      feat.style.transform = `translate(${x*6}px, ${y*6}px) scale(1.005)`;
    });
    hero.addEventListener('mouseleave', () => feat.style.transform = '');
  }
});


// Essence Élevée — script.js
// Simple enhancements: tilt hover, reveal on scroll, and nav current marker.

// Tilt effect for cards
function attachTilt(card){
  card.addEventListener('mousemove', (e)=>{
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x*6}deg) rotateX(${ -y*6 }deg) translateZ(6px)`;
  });
  card.addEventListener('mouseleave', ()=> card.style.transform = '');
}

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('show'); });
},{threshold:0.12, rootMargin:'0px 0px -8% 0px'});

document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.card').forEach(c=>{ attachTilt(c); io.observe(c); });
  // Highlight current nav (aria-current on matching link)
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href.endsWith(path)) a.setAttribute('aria-current','page');
  });
});

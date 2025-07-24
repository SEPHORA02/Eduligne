document.querySelectorAll('.nav-items a').forEach(link => {
  link.addEventListener('click', e => e.preventDefault());
});





const navbar2 = document.querySelector('.navbar2');

let isDown = false;
let startX;
let scrollLeft;

navbar2.addEventListener('mousedown', (e) => {
  isDown = true;
  navbar2.classList.add('active');
  startX = e.pageX - navbar2.offsetLeft;
  scrollLeft = navbar2.scrollLeft;
});

navbar2.addEventListener('mouseleave', () => {
  isDown = false;
  navbar2.classList.remove('active');
});

navbar2.addEventListener('mouseup', () => {
  isDown = false;
  navbar2.classList.remove('active');
});

navbar2.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - navbar2.offsetLeft;
  const walk = (x - startX) * 2; // *2 pour aller plus vite
  navbar2.scrollLeft = scrollLeft - walk;
});


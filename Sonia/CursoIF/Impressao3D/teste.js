let currentSlide = 0;

function moveSlide(direction) {
  const slider = document.getElementById('slider');
  const slides = document.querySelectorAll('.custom-slide');
  
  if (!slider || slides.length === 0) return;

  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Opcional: Faz as imagens passarem sozinhas
setInterval(() => moveSlide(1), 5000);









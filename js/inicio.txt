// --- CONTROLE DO DRAWER (MENU LATERAL) ---
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('drawerOverlay');
const openBtn = document.getElementById('openDrawer');
const closeBtn = document.getElementById('closeDrawer');

function toggleDrawer() {
  if (!drawer || !overlay) return;
  drawer.classList.toggle('open');
  overlay.classList.toggle('active');
}

if (openBtn) openBtn.addEventListener('click', toggleDrawer);
if (closeBtn) closeBtn.addEventListener('click', toggleDrawer);
if (overlay) overlay.addEventListener('click', toggleDrawer);

// --- CONTROLE DO CARROSSEL ---
let currentIndex = 0;
const slidesContainer = document.getElementById('slides'); // O ID no seu HTML é "slides"
const allSlides = document.querySelectorAll('.slide');
const totalSlides = allSlides.length;
let autoPlayInterval;

function updateCarousel() {
  if (slidesContainer) {
    slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
  }
}

// Esta função atende aos botões onclick="moveSlide(1)" do seu HTML
window.moveSlide = function(direction) {
  stopAutoplay();
  currentIndex += direction;

  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  updateCarousel();
  startAutoplay();
};

// --- AUTOPLAY ---
function startAutoplay() {
  autoPlayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }, 5000);
}

function stopAutoplay() {
  clearInterval(autoPlayInterval);
}

// Inicia o carrossel e o autoplay
if (totalSlides > 0) {
  updateCarousel();
  startAutoplay();
}

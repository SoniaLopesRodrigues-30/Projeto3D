const drawer = document.getElementById('drawer');
const overlay = document.getElementById('drawerOverlay');
const openBtn = document.getElementById('openDrawer');
const closeBtn = document.getElementById('closeDrawer');

function toggleDrawer() {
  drawer.classList.toggle('open');
  overlay.classList.toggle('active');
  document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
}

openBtn.addEventListener('click', toggleDrawer);
closeBtn.addEventListener('click', toggleDrawer);
overlay.addEventListener('click', toggleDrawer);

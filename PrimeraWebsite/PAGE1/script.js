// Menú hamburguesa
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const menuBtns = document.querySelectorAll('.menu-btn');
const menuInfo = document.getElementById('menu-info');
const hamburger = document.querySelector('.hamburger');

// Mostrar/ocultar el menú en dispositivos móviles
if (hamburger) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
  });

  // Cerrar el menú si se hace clic fuera de él
  document.addEventListener('click', (e) => {
    if (
      navLinks.classList.contains('active') &&
      !navLinks.contains(e.target) &&
      !menuIcon.contains(e.target)
    ) {
      navLinks.classList.remove('active');
    }
  });
}

const infoContent = {
  explorar: "Aquí puedes comenzar la exploración del modelo 3D de la computadora.",
  aprender: "Aprende más sobre los componentes internos y su funcionamiento.",
  contacto: "Matias (912 999 028) Rodrigo (982 798 340).",
  creadores: "Proyecto realizado por Matias Espinoza y Rodrigo Jara.",
  redes: "IG: espinozaa___l y sainouu1."
};

menuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.getAttribute('data-info');
    navLinks.classList.remove('active'); // Cierra el menú al hacer clic

    if (key === 'explorar') {
      window.location.href = '/PrimeraWebsite/PAGE2/HTML/exploracion.html';
    } else if (key === 'aprender' || key === 'contacto') {
      const section = document.getElementById(key === 'aprender' ? 'aprender-mas' : 'contacto');
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
      menuInfo.innerHTML = infoContent[key] || "";
    } else {
      menuInfo.innerHTML = infoContent[key] || "";
    }
  });
});

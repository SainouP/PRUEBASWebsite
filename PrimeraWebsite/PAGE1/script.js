// Menú hamburguesa
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const menuBtns = document.querySelectorAll('.menu-btn');
const menuInfo = document.getElementById('menu-info');

if (menuIcon) {
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

const infoContent = {
  explorar: "Aquí puedes comenzar la exploración del modelo 3D de la computadora.",
  aprender: "Aprende más sobre los componentes internos y su funcionamiento.",
  contacto: "Matias (912 999 028) Rodrigo (982 798 340).",
  creadores: "Proyecto realizado por Matias Espinoza y Rodrigo Jara.",
  redes: "IG: espinozaa___l y sainouu1."
};

// Scroll suave compensando el navbar fijo
function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  }
}

menuBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const key = btn.getAttribute('data-info');
    navLinks.classList.remove('active'); // Cierra el menú al hacer clic

    if (key === 'explorar') {
      window.location.href = '/PrimeraWebsite/PAGE2/HTML/exploracion.html';
    } else if (key === 'aprender') {
      // Si tienes la sección "aprender-mas" pon ese id, si no cámbialo
      scrollToSection('aprender-mas');
      menuInfo.innerHTML = infoContent[key] || "";
      e.preventDefault();
    } else if (key === 'contacto') {
      scrollToSection('contacto');
      menuInfo.innerHTML = infoContent[key] || "";
      e.preventDefault();
    } else {
      menuInfo.innerHTML = infoContent[key] || "";
    }
  });
});

// Si usas <a href="#contacto"> y quieres scroll suave en todos los enlaces internos:
document.querySelectorAll('a.menu-btn[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});

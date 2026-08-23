document.addEventListener('DOMContentLoaded', () => {
  const acordeones = document.querySelectorAll('.acordeon-cabecera');
  const navMenu = document.querySelector('.nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const dropdown = document.querySelector('.dropdown');
  const dropBtn = document.querySelector('.dropbtn');

  // Función para cerrar todo el menú de 3 rayitas y sus submenús
  function cerrarMenuCompleto() {
    if (navMenu) navMenu.classList.remove('active');
    if (dropdown) dropdown.classList.remove('open');
  }

  // 1. Botón de las 3 rayitas
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      if (dropdown) dropdown.classList.remove('open');
    });
  }

  // 2. Botón desplegable de Colección
  if (dropBtn && dropdown) {
    dropBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });
  }

  // Función para cerrar todas las secciones del catálogo
  function cerrarTodasLasColecciones() {
    document.querySelectorAll('.coleccion-seccion').forEach(seccion => {
      seccion.classList.remove('activa');
    });
  }

  // 3. Clics en los acordeones del catálogo
  acordeones.forEach(cabecera => {
    cabecera.addEventListener('click', () => {
      const seccionPadre = cabecera.parentElement;
      const yaEstaAbierta = seccionPadre.classList.contains('activa');

      cerrarTodasLasColecciones();

      if (!yaEstaAbierta) {
        seccionPadre.classList.add('activa');
      }
    });
  });

  // 4. Clic en las opciones de las colecciones (Aire Flamenco, Florales, etc.)
  if (navMenu) {
    navMenu.querySelectorAll('a').forEach(enlace => {
      enlace.addEventListener('click', (e) => {
        const href = enlace.getAttribute('href');

        if (href && href.startsWith('#') && href !== '#') {
          const idObjetivo = href.substring(1);
          const seccionObjetivo = document.getElementById(idObjetivo);

          if (seccionObjetivo) {
            cerrarTodasLasColecciones();
            seccionObjetivo.classList.add('activa');
          }

          // Cierra inmediatamente las 3 rayitas y la caja flotante
          cerrarMenuCompleto();
        } else if (href && !href.includes('javascript')) {
          cerrarMenuCompleto();
        }
      });
    });
  }

  // Cerrar si hace clic fuera del menú
  document.addEventListener('click', () => {
    cerrarMenuCompleto();
  });
});

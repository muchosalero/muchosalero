document.addEventListener('DOMContentLoaded', () => {
  const acordeones = document.querySelectorAll('.acordeon-cabecera');
  const navMenu = document.querySelector('.nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const enlacesDropdown = document.querySelectorAll('.dropdown-content a');

  // 1. Abrir/Cerrar menú principal de 3 rayitas
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });
  }

  // Función para cerrar todas las colecciones
  function cerrarTodasLasColecciones() {
    document.querySelectorAll('.coleccion-seccion').forEach(seccion => {
      seccion.classList.remove('activa', 'active');
    });
  }

  // Función para abrir una colección concreta
  function abrirColeccion(seccion) {
    if (seccion) {
      seccion.classList.add('activa', 'active');
    }
  }

  // 2. Clic en las cabeceras de cada colección (en el catálogo)
  acordeones.forEach(cabecera => {
    cabecera.addEventListener('click', () => {
      const seccionPadre = cabecera.closest('.coleccion-seccion');
      if (!seccionPadre) return;

      const yaEstaAbierta = seccionPadre.classList.contains('activa') || seccionPadre.classList.contains('active');

      cerrarTodasLasColecciones();

      if (!yaEstaAbierta) {
        abrirColeccion(seccionPadre);
      }
    });
  });

  // 3. Clic en las opciones del menú desplegable (Aire Flamenco, Florales, etc.)
  enlacesDropdown.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
      const href = enlace.getAttribute('href');

      if (href && href.startsWith('#')) {
        const idObjetivo = href.substring(1);
        const seccionObjetivo = document.getElementById(idObjetivo);

        if (seccionObjetivo) {
          cerrarTodasLasColecciones();
          abrirColeccion(seccionObjetivo);
        }

        // Fuerza el cierre inmediato del menú móvil de 3 rayitas
        if (navMenu) {
          navMenu.classList.remove('active');
        }
      }
    });
  });
});

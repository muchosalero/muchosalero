document.addEventListener('DOMContentLoaded', () => {
  const acordeones = document.querySelectorAll('.acordeon-cabecera');
  const navMenu = document.querySelector('.nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const enlacesSubmenu = document.querySelectorAll('.dropdown-content a, .nav > a');

  // 1. Mostrar/Ocultar el menú de 3 rayitas
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });
  }

  // Función auxiliar para cerrar todas las colecciones
  function cerrarColecciones() {
    document.querySelectorAll('.coleccion-seccion').forEach(seccion => {
      seccion.classList.remove('activa');
    });
  }

  // 2. Acordeones en la página (al hacer clic en los títulos)
  acordeones.forEach(cabecera => {
    cabecera.addEventListener('click', () => {
      const seccionPadre = cabecera.closest('.coleccion-seccion');
      if (!seccionPadre) return;

      const yaAbierta = seccionPadre.classList.contains('activa');
      cerrarColecciones();

      if (!yaAbierta) {
        seccionPadre.classList.add('activa');
      }
    });
  });

  // 3. Clics en el menú desplegable (cerrar menú móvil y mostrar colección)
  enlacesSubmenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
      const href = enlace.getAttribute('href');

      if (href && href.startsWith('#') && href !== '#') {
        const objetivo = document.getElementById(href.substring(1));

        if (objetivo) {
          cerrarColecciones();
          objetivo.classList.add('activa');
        }

        // Cierra el menú de las 3 rayitas de inmediato
        if (navMenu) {
          navMenu.classList.remove('active');
        }
      }
    });
  });
});

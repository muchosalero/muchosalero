document.addEventListener('DOMContentLoaded', () => {
  const acordeones = document.querySelectorAll('.acordeon-cabecera');
  const navMenu = document.querySelector('.nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const enlacesSubmenu = document.querySelectorAll('.dropdown-content a');

  // 1. Abrir / Cerrar el menú principal de 3 rayitas
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Función para cerrar todas las colecciones del catálogo
  function cerrarTodasLasColecciones() {
    document.querySelectorAll('.coleccion-seccion').forEach(seccion => {
      seccion.classList.remove('activa');
    });
  }

  // 2. Clic en los encabezados del catálogo en la página
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

  // 3. Clic en CUALQUIERA de las colecciones del menú desplegable
  enlacesSubmenu.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
      const href = enlace.getAttribute('href');

      if (href && href.startsWith('#')) {
        const idObjetivo = href.substring(1);
        const seccionObjetivo = document.getElementById(idObjetivo);

        if (seccionObjetivo) {
          // Abrir la colección elegida
          cerrarTodasLasColecciones();
          seccionObjetivo.classList.add('activa');
        }

        // CERRAR EL MENÚ DE LAS 3 RAYITAS DE INMEDIATO
        if (navMenu) {
          navMenu.classList.remove('active');
        }
      }
    });
  });
});

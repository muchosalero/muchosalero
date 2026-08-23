document.addEventListener('DOMContentLoaded', () => {
  const acordeones = document.querySelectorAll('.acordeon-cabecera');
  const enlacesMenu = document.querySelectorAll('.dropdown-content a, .nav > a');
  const navMenu = document.querySelector('.nav');
  const menuToggle = document.querySelector('.menu-toggle');

  // 1. Abrir / Cerrar el menú principal de las 3 rayitas
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Función para cerrar todas las colecciones desplegables del catálogo
  function cerrarTodasLasColecciones() {
    document.querySelectorAll('.coleccion-seccion').forEach(seccion => {
      seccion.classList.remove('activa');
    });
  }

  // 2. Clic en los acordeones del catálogo
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

  // 3. Clic en cualquier enlace del menú superior (cierra el menú de 3 rayitas y abre la colección)
  enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
      const href = enlace.getAttribute('href');

      if (href && href.startsWith('#')) {
        const idObjetivo = href.substring(1);
        const seccionObjetivo = document.getElementById(idObjetivo);

        if (seccionObjetivo) {
          cerrarTodasLasColecciones();
          seccionObjetivo.classList.add('activa');
        }
      }

      // Cerrar el menú móvil de 3 rayitas tras hacer clic
      if (navMenu) {
        navMenu.classList.remove('active');
      }
    });
  });
});

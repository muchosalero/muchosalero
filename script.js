document.addEventListener('DOMContentLoaded', () => {
  const acordeones = document.querySelectorAll('.acordeon-cabecera');
  const navMenu = document.querySelector('.nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const enlacesSubmenu = document.querySelectorAll('.dropdown-content a');

  // 1. Abrir/Cerrar menú principal de 3 rayitas
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });
  }

  // 2. Clic en las cabeceras del catálogo
  acordeones.forEach(cabecera => {
    cabecera.addEventListener('click', () => {
      const seccionPadre = cabecera.closest('.coleccion-seccion');
      if (!seccionPadre) return;

      const yaEstaAbierta = seccionPadre.classList.contains('activa');

      document.querySelectorAll('.coleccion-seccion').forEach(s => s.classList.remove('activa', 'active'));

      if (!yaEstaAbierta) {
        seccionPadre.classList.add('activa');
      }
    });
  });

  // 3. Clic en el submenú del navegador
  enlacesSubmenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
      const href = enlace.getAttribute('href');

      if (href && href.startsWith('#')) {
        const seccionObjetivo = document.getElementById(href.substring(1));

        if (seccionObjetivo) {
          document.querySelectorAll('.coleccion-seccion').forEach(s => s.classList.remove('activa', 'active'));
          seccionObjetivo.classList.add('activa');
        }

        // Plegar menú móvil
        if (navMenu) {
          navMenu.classList.remove('active');
        }
      }
    });
  });
});

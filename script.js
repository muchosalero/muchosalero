document.addEventListener('DOMContentLoaded', () => {
  const acordeones = document.querySelectorAll('.acordeon-cabecera');
  const navMenu = document.querySelector('.nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const enlacesMenu = document.querySelectorAll('.nav a');

  // 1. Alternar menú de 3 rayitas
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });
  }

  // Función para ocultar todas las colecciones
  function cerrarColecciones() {
    document.querySelectorAll('.coleccion-seccion').forEach(sec => {
      sec.classList.remove('activa');
    });
  }

  // 2. Acordeones del catálogo principal
  acordeones.forEach(cabecera => {
    cabecera.addEventListener('click', () => {
      const seccion = cabecera.closest('.coleccion-seccion');
      const abierta = seccion.classList.contains('activa');
      
      cerrarColecciones();
      if (!abierta) seccion.classList.add('activa');
    });
  });

  // 3. Clics en los enlaces de navegación (cierra el menú y abre la colección)
  enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
      const href = enlace.getAttribute('href');
      
      if (href && href.startsWith('#') && href !== '#') {
        const objetivo = document.getElementById(href.substring(1));
        if (objetivo) {
          cerrarColecciones();
          objetivo.classList.add('activa');
        }
      }
      
      // Ocultar menú de 3 rayitas tras la selección
      if (navMenu) navMenu.classList.remove('active');
    });
  });
});

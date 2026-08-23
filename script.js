document.addEventListener('DOMContentLoaded', () => {
  const acordeones = document.querySelectorAll('.acordeon-cabecera');
  const navMenu = document.querySelector('.nav');
  const menuToggle = document.querySelector('.menu-toggle');

  // Función universal para plegar el menú móvil de 3 rayitas
  function cerrarMenuMovil() {
    if (navMenu) {
      navMenu.classList.remove('active', 'open', 'show');
    }
  }

  // 1. Abrir / Cerrar el menú de 3 rayitas
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });
  }

  // Función para cerrar todas las colecciones del catálogo
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

  // 3. Detectar clic en CUALQUIER enlace dentro de la navegación (<nav>)
  if (navMenu) {
    navMenu.querySelectorAll('a').forEach(enlace => {
      enlace.addEventListener('click', (e) => {
        const href = enlace.getAttribute('href');

        // Si es un enlace a una sección del catálogo (#aire-flamenco, etc.)
        if (href && href.startsWith('#') && href !== '#') {
          const idObjetivo = href.substring(1);
          const seccionObjetivo = document.getElementById(idObjetivo);

          if (seccionObjetivo) {
            cerrarTodasLasColecciones();
            seccionObjetivo.classList.add('activa');
          }
          
          // Cerramos el menú móvil tras elegir opción
          cerrarMenuMovil();
        } 
        // Si es Inicio, Nosotros o Contacto
        else if (href && !href.includes('javascript')) {
          cerrarMenuMovil();
        }
      });
    });
  }
});

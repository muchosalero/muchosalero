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

  // Función para cerrar todas las colecciones
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

  // 4. Modal para ampliar imágenes (Zoom)
  // Crear el contenedor del modal en el HTML si no existe
  let modal = document.getElementById('imagen-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'imagen-modal';
    modal.className = 'modal-imagen';
    modal.innerHTML = `
      <span class="cerrar-modal">&times;</span>
      <img class="contenido-modal" id="img-ampliada" alt="Vista ampliada">
    `;
    document.body.appendChild(modal);
  }

  const modalImg = document.getElementById('img-ampliada');
  const botonCerrar = modal.querySelector('.cerrar-modal');

  // Evento al hacer clic en cualquier imagen del catálogo
  document.querySelectorAll('.tarjeta-producto img').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  // Cerrar el modal al hacer clic en la (X) o fuera de la imagen
  if (botonCerrar) {
    botonCerrar.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

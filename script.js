document.addEventListener('DOMContentLoaded', () => {
  const acordeones = document.querySelectorAll('.acordeon-cabecera');
  const enlacesMenu = document.querySelectorAll('.dropdown-content a');
  const navMenu = document.querySelector('.nav');

  // Función para cerrar todas las colecciones
  function cerrarTodasLasColecciones() {
    document.querySelectorAll('.coleccion-seccion').forEach(seccion => {
      seccion.classList.remove('activa');
    });
  }

  // 1. Clic en las cabeceras de acordeón
  acordeones.forEach(cabecera => {
    cabecera.addEventListener('click', () => {
      const seccionPadre = cabecera.parentElement;
      const yaEstaAbierta = seccionPadre.classList.contains('activa');

      // Cerrar las demás para no saturar la pantalla
      cerrarTodasLasColecciones();

      // Si no estaba abierta, la abrimos
      if (!yaEstaAbierta) {
        seccionPadre.classList.add('activa');
      }
    });
  });

  // 2. Clic en los enlaces del menú desplegable
  enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
      const idObjetivo = enlace.getAttribute('href').substring(1);
      const seccionObjetivo = document.getElementById(idObjetivo);

      if (seccionObjetivo) {
        // Cerrar resto de colecciones y abrir solo la seleccionada
        cerrarTodasLasColecciones();
        seccionObjetivo.classList.add('activa');

        // Cerrar menú móvil si está desplegado
        if (navMenu) navMenu.classList.remove('active');
      }
    });
  });
});

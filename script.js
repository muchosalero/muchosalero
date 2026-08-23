// Menú hamburguesa para móvil
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// Año actual en el footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// LÓGICA DE COLECCIONES (ACORDEÓN) Y VISOR DE IMÁGENES
document.addEventListener("DOMContentLoaded", () => {
  // 1. Abrir y cerrar la carpeta al hacer clic en la cabecera
  const cabeceras = document.querySelectorAll(".acordeon-cabecera");

  cabeceras.forEach(cabecera => {
    cabecera.addEventListener("click", () => {
      const coleccion = cabecera.parentElement;
      coleccion.classList.toggle("abierta");
    });
  });

  // 2. Si pulsan en el menú superior, viaja a la sección Y abre la carpeta
  document.querySelectorAll(".dropdown-content a").forEach(enlace => {
    enlace.addEventListener("click", (e) => {
      const targetId = enlace.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const seccionTarget = document.querySelector(targetId);
        if (seccionTarget) {
          seccionTarget.classList.add("abierta");
        }
      }
    });
  });

  // 3. Ampliar foto a pantalla completa al hacer clic
  const modal = document.getElementById("visor-imagen");
  const modalImg = document.getElementById("imagen-ampliada-src");

  document.querySelectorAll(".catalogo-grid img, .tarjeta-producto img").forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", (e) => {
      e.stopPropagation(); // Evita que se cierre el acordeón al pulsar la foto
      if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = img.src;
      }
    });
  });
});

function cerrarVisor() {
  const modal = document.getElementById("visor-imagen");
  if (modal) {
    modal.style.display = "none";
  }
}

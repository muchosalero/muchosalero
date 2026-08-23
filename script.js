// Menú desplegable para móvil
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

// Poner el año actual en el pie de página
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// VISOR LIGHTBOX (Abre la imagen exclusiva en Grande)
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("visor-imagen");
  const modalImg = document.getElementById("imagen-ampliada-src");

  // Escucha el clic en TODAS las fotos de productos
  document.querySelectorAll(".catalogo-grid img, .tarjeta-producto img").forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });
});

function cerrarVisor() {
  const modal = document.getElementById("visor-imagen");
  if (modal) {
    modal.style.display = "none";
  }
}

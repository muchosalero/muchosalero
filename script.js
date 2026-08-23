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

document.getElementById("year").textContent = new Date().getFullYear();
// Abrir imagen en pantalla completa al hacer clic
document.querySelectorAll('.tarjeta-producto img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('visor-imagen');
    const modalImg = document.getElementById('imagen-ampliada-src');
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});

function cerrarVisor() {
  document.getElementById('visor-imagen').style.display = 'none';
}

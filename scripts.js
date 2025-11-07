// Selecciona los elementos
const grid = document.getElementById("grid");
const sphere = document.getElementById("sphere");

// Variables para movimiento
let isDragging = false;
let startX, startY;
let currentX = 0, currentY = 0;

// Inicia arrastre - Detiene
sphere.addEventListener("mousedown", e => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  sphere.style.cursor = "grabbing";
});


window.addEventListener("mouseup", () => {
  isDragging = false;
  sphere.style.cursor = "grab";
});

// Movimiento mientras se arrastra
window.addEventListener("mousemove", e => {
  if (!isDragging) return;
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  startX = e.clientX;
  startY = e.clientY;
  currentX += dx;
  currentY += dy;
  grid.style.transform = `translate(${currentX}px, ${currentY}px)`;
});

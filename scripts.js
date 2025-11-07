const grid = document.getElementById("grid");
icons.forEach((emoji, i) => {
  const icon = document.createElement("div");
  icon.className = "icon";
  icon.innerHTML = emoji;
  grid.appendChild(icon);
});

// Movimiento con mouse (drag)
let isDragging = false;
let startX, startY;
let currentX = -90, currentY = -90;

const sphere = document.getElementById("sphere");

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

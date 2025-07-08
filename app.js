// Timer regressivo (00:30)
let seconds = 30;
const timerElement = document.getElementById("timer");
const countdown = setInterval(() => {
  seconds--;
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  timerElement.textContent = `${mins}:${secs}`;

  if (seconds <= 0) clearInterval(countdown);
}, 1000);

// Gerar grid de minas (5x5)
const grid = document.querySelector(".grid");
const total = 25;
const bombas = [7, 12, 23]; // posições com bomba (índices)

for (let i = 0; i < total; i++) {
  const cell = document.createElement("div");
  cell.className = "w-10 h-10 rounded flex items-center justify-center";
  cell.style.backgroundColor = bombas.includes(i) ? "#facc15" : "#111827";
  if (bombas.includes(i)) {
    const bomba = document.createElement("span");
    bomba.textContent = "💣";
    cell.appendChild(bomba);
  }
  grid.appendChild(cell);
}

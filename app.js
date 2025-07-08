// Timer regressivo
let seconds = 30;
let countdown;

const timerElement = document.getElementById("timer");
const numMinasElement = document.getElementById("numMinas");
const grid = document.getElementById("grid");
const gerarSinalBtn = document.getElementById("gerarSinal");

function startTimer() {
  clearInterval(countdown);
  seconds = 30;
  updateTimerDisplay(seconds);

  countdown = setInterval(() => {
    seconds--;
    updateTimerDisplay(seconds);

    if (seconds <= 0) clearInterval(countdown);
  }, 1000);
}

function updateTimerDisplay(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  timerElement.textContent = `${mins}:${secs}`;
}

function gerarSinalAleatorio() {
  grid.innerHTML = "";
  const total = 25;
  const numBombas = 3;
  numMinasElement.textContent = String(numBombas).padStart(2, "0");

  const bombas = new Set();
  while (bombas.size < numBombas) {
    bombas.add(Math.floor(Math.random() * total));
  }

  for (let i = 0; i < total; i++) {
    const cell = document.createElement("div");
    cell.className = "w-14 h-14 rounded flex items-center justify-center text-2xl font-bold";

    if (bombas.has(i)) {
      cell.style.backgroundColor = "#facc15";
      cell.textContent = "💣";
    } else {
      cell.style.backgroundColor = "#1f2937";
    }

    grid.appendChild(cell);
  }

  startTimer();
}

// Evento do botão
gerarSinalBtn.addEventListener("click", gerarSinalAleatorio);

// Gera o primeiro sinal ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  gerarSinalAleatorio();
});

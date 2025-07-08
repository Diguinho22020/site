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

const grid = document.querySelector(".grid");
const total = 25;
let currentBombs = [];

// Função para gerar minas aleatórias
function gerarMinas(qtd = 3) {
  const minas = new Set();
  while (minas.size < qtd) {
    minas.add(Math.floor(Math.random() * total));
  }
  return Array.from(minas);
}

// Função para desenhar o grid
function desenharGrid(minas) {
  grid.innerHTML = ''; // limpa grid atual
  for (let i = 0; i < total; i++) {
    const cell = document.createElement("div");
    cell.className = "w-10 h-10 rounded flex items-center justify-center text-xl font-bold";

    if (minas.includes(i)) {
      cell.style.backgroundColor = "#facc15"; // amarelo
      cell.textContent = "💣";
    } else {
      cell.style.backgroundColor = "#111827"; // dark
    }

    grid.appendChild(cell);
  }
}

// Inicializar com minas fixas
currentBombs = gerarMinas();
desenharGrid(currentBombs);

// Ação do botão
document.querySelector("button").addEventListener("click", () => {
  currentBombs = gerarMinas();
  desenharGrid(currentBombs);
  seconds = 30; // reinicia timer se quiser
});

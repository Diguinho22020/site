const gridElement = document.getElementById("grid");
const timerEl = document.getElementById("timer");
const btnGerar = document.getElementById("btnGerar");

let tempo = 30;
let intervalo;
let cooldown = false;

function gerarSinais() {
  if (cooldown) return;

  // Início do bloqueio
  cooldown = true;
  let tempoEspera = 20;
  btnGerar.disabled = true;
  btnGerar.textContent = `Aguarde ${tempoEspera}s...`;

  const cooldownInterval = setInterval(() => {
    tempoEspera--;
    btnGerar.textContent = `Aguarde ${tempoEspera}s...`;
    if (tempoEspera <= 0) {
      clearInterval(cooldownInterval);
      btnGerar.textContent = "Encontrar Sinal";
      btnGerar.disabled = false;
      cooldown = false;
    }
  }, 1000);

  // Gerar grid e bombas
  gridElement.innerHTML = "";
  let bombs = new Set();
  while (bombs.size < 3) {
    bombs.add(Math.floor(Math.random() * 25));
  }

  for (let i = 0; i < 25; i++) {
    const div = document.createElement("div");
    div.className = "cell";
    if (bombs.has(i)) div.classList.add("bomb");
    gridElement.appendChild(div);
  }

  // Iniciar cronômetro de validade
  tempo = 30;
  clearInterval(intervalo);
  intervalo = setInterval(() => {
    tempo--;
    timerEl.textContent = "Validade: 00:" + (tempo < 10 ? "0" + tempo : tempo);
    if (tempo === 0) clearInterval(intervalo);
  }, 1000);
}

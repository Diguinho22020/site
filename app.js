
const gridElement = document.getElementById("grid");
const timerEl = document.getElementById("timer");
let tempo = 30;
let intervalo;

function gerarSinais() {
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

  tempo = 30;
  clearInterval(intervalo);
  intervalo = setInterval(() => {
    tempo--;
    timerEl.textContent = "Validade: 00:" + (tempo < 10 ? "0" + tempo : tempo);
    if (tempo === 0) clearInterval(intervalo);
  }, 1000);
}

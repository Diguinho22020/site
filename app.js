const grid = document.getElementById('grid');
const gerarSinalBtn = document.getElementById('gerarSinal');

function gerarSinal() {
  grid.innerHTML = '';
  const total = 25;
  const bombas = new Set();

  while (bombas.size < 3) {
    bombas.add(Math.floor(Math.random() * total));
  }

  for (let i = 0; i < total; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    if (bombas.has(i)) {
      cell.classList.add('bomb');
      cell.textContent = '💣';
    }

    grid.appendChild(cell);
  }
}

// Gera só ao clicar
gerarSinalBtn.addEventListener('click', gerarSinal);

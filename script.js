const buttonDraw = document.querySelector(".button-draw");

function chamarButton() {
  // Obtém os valores mínimo e máximo
  const min = Math.ceil(document.querySelector(".min").value);
  const max = Math.floor(document.querySelector(".max").value);

  // Gera o número aleatório dentro do intervalo
  const result = Math.floor(Math.random() * (max - min + 1) + min);

  // Exibe o resultado na tela
  exibirResultado(result);
}

function exibirResultado(numero) {
  const resultadoDiv = document.getElementById("resultado");
  const blurOverlay = document.getElementById("blur-overlay");
  const confettiContainer = document.getElementById("confetti-container");

  // Atualiza o texto do resultado
  resultadoDiv.textContent = numero;

  // Mostra o fundo embaçado e o número
  blurOverlay.style.display = "block";
  resultadoDiv.style.display = "block";

  // Reinicia a animação do número
  resultadoDiv.style.animation = "none";
  setTimeout(() => {
    resultadoDiv.style.animation = "";
  }, 10);

  // Mostra os confetes com animação
  confettiContainer.style.display = "block";
  startConfetti();

  // Remove o fundo embaçado e os confetes após 3 segundos
  setTimeout(() => {
    blurOverlay.style.display = "none";
    confettiContainer.style.display = "none";
    stopConfetti();
  }, 3000);
}

// Função para criar confetes
function startConfetti() {
  const confettiContainer = document.getElementById("confetti-container");

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Configura posições e animações aleatórias
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `${Math.random() * 100}vh`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
    confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
    confetti.style.animationDelay = `${Math.random() * 1}s`;

    confettiContainer.appendChild(confetti);
  }
}

// Função para limpar os confetes
function stopConfetti() {
  const confettiContainer = document.getElementById("confetti-container");
  confettiContainer.innerHTML = ""; // Remove os confetes
}

buttonDraw.addEventListener("click", chamarButton);

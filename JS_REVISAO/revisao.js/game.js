/*
Gera um número aleatório entre 1 e 10
const secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

// Função para iniciar o jogo
function startGame() {
    alert("Bem-vindo ao Guess the Number Game! Tente adivinhar o número entre 1 e 10.");
    playGame();
}

// Função principal do jogo
function playGame() { 
    while (true) {
        // Obtém o palpite do jogador
        const guess = parseInt(prompt("Digite seu palpite:"));

        // Verifica se o palpite é válido
        if (isNaN(guess) || guess < 1 || guess > 10) {
            alert("Por favor, digite um número válido entre 1 e 10.");
            continue;
        }

        // Incrementa o número de tentativas
        attempts++;

        // Verifica se o palpite está correto
        if (guess === secretNumber) {
            alert(`Parabéns! Você acertou em ${attempts} tentativas.`);
            break;
        } else {
            alert(`Tente novamente. Dica: O número é ${guess > secretNumber ? 'menor' : 'maior'}.`);
        }
    }
}

// Inicia o jogo quando o script é executado
startGame();
*/
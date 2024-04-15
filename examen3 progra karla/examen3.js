

//karla diaz anaya 740480
let secretNumber;
let attemptsLeft;
let isGameOver;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    isGameOver = false;
    document.getElementById("message").innerText = "";
    document.getElementById("attempt-count").innerText = "1";
}

function checkGuess() {
    if (!isGameOver) {
        let guess = parseInt(document.getElementById("guess").value);
        if (guess === secretNumber) {
            document.getElementById("message").innerText = "¡Felicidades! Has adivinado el número.";
            isGameOver = true;
        } else {
            attemptsLeft--;
            document.getElementById("attempt-count").innerText = 11 - attemptsLeft;
            if (attemptsLeft === 0) {
                document.getElementById("message").innerText = "¡Lo siento! Te has quedado sin intentos. El número era " + secretNumber + ".";
                isGameOver = true;
            } else {
                let message = guess > secretNumber ? "¡Intenta un número más bajo!" : "¡Intenta un número más alto!";
                document.getElementById("message").innerText = message;
            }
        }
    }
}

function restartGame() {
    startGame();
    document.getElementById("guess").value = "";
}
startGame();
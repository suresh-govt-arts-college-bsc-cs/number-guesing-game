const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let running = true;

document.getElementById('minNum').textContent = minNum;
document.getElementById('maxNum').textContent = maxNum;

document.getElementById('guessButton').addEventListener('click', function() {
    if (!running) return;

    const guessInput = document.getElementById('guessInput');
    const guess = Number(guessInput.value);
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');

    if (isNaN(guess)) {
        message.textContent = "Please enter a valid number";
    } else if (guess < minNum || guess > maxNum) {
        message.textContent = "Please enter a number between " + minNum + " and " + maxNum;
    } else {
        attempts++;
        if (guess < answer) {
            message.textContent = "TOO LOW! TRY AGAIN!";
        } else if (guess > answer) {
            message.textContent = "TOO HIGH! TRY AGAIN!";
        } else {
            message.textContent = `CORRECT! The answer was ${answer}.`;
            attemptsDisplay.textContent = `It took you ${attempts} attempts.`;
            running = false;
            document.getElementById('restartButton').style.display = 'block';
        }
    }
    guessInput.value = '';
});

document.getElementById('restartButton').addEventListener('click', function() {
    location.reload();
});

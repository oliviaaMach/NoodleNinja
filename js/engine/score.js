let score = 0;
let highScore = Number(localStorage.getItem('highScore')) || 0;

export function resetScore() {
    score = 0;
    updateScoreUI();
}

export function increaseScore(amount = 10) {
    score += amount;
    updateScoreUI();
}

export function finalizeScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
    }
    updateOverlayUI();
}

export function updateScoreUI() {
    const scoreEl = document.querySelector('.score');
    const highScoreEl = document.querySelector('.highScore');

    if(scoreEl) {
        scoreEl.textContent = score;
    }
    if(highScoreEl) {
        highScoreEl.textContent = highScore;
    }
}

export function updateOverlayUI() {
    document.querySelector('.finalScore').textContent = score;
    document.querySelector('.finalHighScore').textContent = highScore;
}

updateScoreUI()
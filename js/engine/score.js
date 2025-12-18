let score = 0;
let highScore = Number(localStorage.getItem('highScore')) || 0;
const TOP_SCORE_KEY = 'topScores';

function getTopScores() {
    const raw = localStorage.getItem(TOP_SCORE_KEY);
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        // If parsing fails, reset stored value
        return [];
    }
}

function saveTopScore(scoresArray) {
    if (!Array.isArray(scoresArray)) return;
    localStorage.setItem(TOP_SCORE_KEY, JSON.stringify(scoresArray));
}

export function resetScore() {
    score = 0;
    updateScoreUI();
}

export function increaseScore(amount = 10) {
    score += amount;
    updateScoreUI();
}

export function topList() {
    const scores = getTopScores();

    // Ensure we're working with an array
    const working = Array.isArray(scores) ? scores.slice() : [];
    working.push(score);
    working.sort((a, b) => b - a);

    const topFive = working.slice(0, 5);
    saveTopScore(topFive);

    highScore = topFive[0] || 0;
    localStorage.setItem('highScore', highScore);
}

export function finalizeScore() {
    topList();
    updateOverlayUI();
    updateTopScoreUI()
}

export function updateScoreUI() {
    const scoreEl = document.querySelector('.score');
    const highScoreEl = document.querySelector('.highScore');

    if(scoreEl) {
        scoreEl.textContent = `${score}`;
    }
    if(highScoreEl) {
        highScoreEl.textContent = `${highScore}`;
    }
}

export function updateOverlayUI() {
    document.querySelector('.finalScore').textContent = `${score}`;
    // document.querySelector('.finalHighScore').textContent = `${highScore}`;
}

export function updateTopScoreUI() {
    const list = document.querySelector('.scoreBoard');

    if(!list) return;

    const scores = getTopScores();
    list.innerHTML = '';

    scores.forEach(score => {
        const li = document.createElement('li');
        li.textContent = score;
        list.appendChild(li);
    });
}

updateScoreUI()
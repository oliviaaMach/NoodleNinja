import { getGameState } from "./game.js";

export function buttons (startGame, restartGame, pauseGame, resumeGame, renderer, gridWidth, gridHeight) {
    const startBtn = document.querySelector('.startBtn');
    const pauseBtn = document.querySelector('.pauseBtn');

    let hasStarted = false;

    startBtn.addEventListener('click', () => {
            if (getGameState() !== 'running') {
                startGame(renderer, gridWidth, gridHeight);
                startBtn.textContent = 'RESTART GAME';
                hasStarted = true;
            } else {
                restartGame(renderer, gridWidth, gridHeight);
            };
    });

    pauseBtn.addEventListener('click', () => {
        const gameState = getGameState();

        if(gameState === 'running') {
            pauseGame();
         pauseBtn.textContent = 'RESUME GAME';
        } else if(gameState === 'paused') {
            resumeGame(renderer, gridWidth, gridHeight);
            pauseBtn.textContent = 'PAUSE GAME';
        }
    })

}
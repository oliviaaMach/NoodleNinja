import { getGameState } from "./game.js";

export function buttons (startGame, restartGame, pauseGame, resumeGame, renderer, gridSize) {
    const startBtn = document.querySelector('.startBtn');
    const pauseBtn = document.querySelector('.pauseBtn');

    let hasStarted = false;

    startBtn.addEventListener('click', () => {
            if (getGameState() !== 'running') {
                startGame(renderer, gridSize);
                startBtn.textContent = 'Restart Game';
                hasStarted = true;
            } else {
                restartGame(renderer, gridSize);
            };
    });

    pauseBtn.addEventListener('click', () => {
        const gameState = getGameState();

        if(gameState === 'running') {
            pauseGame();
         pauseBtn.textContent = 'Resume Game';
         } else if(gameState === 'paused') {
            resumeGame(renderer, gridSize);
            pauseBtn.textContent = 'Pause Game';
        }
    })

}
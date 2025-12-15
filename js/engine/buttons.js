export function buttons (startGame, restartGame, handleGameOver, renderer, gridSize) {
    const startBtn = document.querySelector('.startBtn');

    let hasStarted = false;

    startBtn.addEventListener('click', () => {
            if (!hasStarted) {
                startGame(renderer, gridSize);
                startBtn.textContent = 'Restart Game';
                hasStarted = true;
            } else {
                restartGame(renderer, gridSize);
            };
    });
}
import { Snake } from "/js/snake/snake.js";
import { Food } from "/js/snake/food.js";
import { gameLoop } from "./loop.js";
import { resetScore, finalizeScore } from "./score.js";

let gameState= 'idle';
let gameInterval = null;
let snake = null;
let food = null;

export function getGameState() {
    return gameState;
}

export function startGame(renderer, gridWidth, gridHeight) {
    if (gameState === "running") return;

    resetScore();

    // start snake near the center
    const startX = Math.floor(gridWidth / 2);
    const startY = Math.floor(gridHeight / 2);
    snake = new Snake(startX, startY);
    // Provide an array of sprite paths for the Food to choose from
    const foodSprites = [
        'assets/imgs/noodleBowl.png',
        'assets/imgs/egg.png',
        'assets/imgs/tempura.png',
        'assets/imgs/pakChoi.png',
        'assets/imgs/chili.png'
    ];
    food = new Food(gridWidth, gridHeight, foodSprites);
    renderer.clear();
    renderer.drawFood(food.position);

    gameState = "running";
    // Starting game-loop
    gameInterval = gameLoop(
        snake, 
        food, 
        renderer, 
        gridWidth, 
        gridHeight,
        handleGameOver, 
        150
    );
}

export function pauseGame() {
    if(gameState !== 'running') return;

    clearInterval(gameInterval);
    gameState = 'paused';
}

export function resumeGame(renderer, gridWidth, gridHeight) {
    if(gameState !== 'paused') return;

    gameState = 'running';
    gameInterval = gameLoop(
        snake, 
        food, 
        renderer, 
        gridWidth, 
        gridHeight,
        handleGameOver, 
        150
    );
}

export function handleGameOver() {
    gameState = 'gameover';
    clearInterval(gameInterval);

    finalizeScore();
    
    // Show overlay
    const overlay = document.getElementById('gameOverlay');
    overlay.style.display = 'flex';
}

export function setDirection(direction) {
    if(snake) {
        snake.setDirection(direction);
    }
}

export function restartGame (renderer, gridWidth, gridHeight) {
    if(gameInterval) clearInterval(gameInterval);
        gameState = 'idle';
        startGame(renderer, gridWidth, gridHeight);
}


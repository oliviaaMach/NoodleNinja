import { Snake } from "/js/snake/snake.js";
import { Food } from "/js/snake/food.js";
import { gameLoop } from "./loop.js";

let gameState= "idle";
let gameInterval = null;
let snake = null;
let food = null;


export function startGame(renderer, gridSize) {
    if (gameState === "running") return;

    snake = new Snake(14, 14);
    food = new Food(gridSize);

    renderer.clear();
    renderer.drawFood(food.position);

    gameState = "running";
    // Staring game-loop
    gameInterval = gameLoop(snake, food, renderer, gridSize, handleGameOver, 150);
}

export function handleGameOver() {
    gameState = 'gameover';
    clearInterval(gameInterval);
    alert('Game Over');
}

export function setDirection(direction) {
    if (snake) {
        snake.setDirection(direction);
    }
}

export function restartGame (renderer, gridSize) {
    if(gameInterval) clearInterval(gameInterval);
        gameState = 'idle';
        startGame(renderer, gridSize);
}


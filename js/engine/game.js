import { Snake } from "/js/snake/snake.js";
import { Food } from "/js/snake/food.js";
import { gameLoop } from "./loop.js";

let gameState= "idle";
let gameInterval = null;
let snake = null;


export function startGame(renderer, gridSize) {
    if (gameState === "running") return;

    snake = new Snake(14, 14);
    const food = new Food(gridSize);

    renderer.clear();
    renderer.drawFood(food.position);

    gameState = "running";
    // Staring game-loop
    gameInterval = gameLoop(snake, food, renderer, gridSize, 150);
}

export function handleGameOver() {
    gameState = "gameover";
    clearInterval(gameInterval);
    alert("Game Over")
}

export function setDirection(direction) {
    if (snake) {
        snake.setDirection(direction);
    }
}


import { increaseScore } from "./score.js";

export function gameLoop (snake, food, renderer, gridWidth, gridHeight, handleGameOver, gameSpeed = 150, onScore) {
    const gameInterval = setInterval(() => {
        snake.move();
        const head = snake.getHead();

        // Check if the food gets eaten
        if (head.x === food.position.x && head.y === food.position.y) {
            snake.grow();
            food.reposition(snake.getSegments());
            increaseScore();
        }

        // Checking wall collision
        if (snake.checkCollision(gridWidth, gridHeight)) {
            clearInterval(gameInterval);
            handleGameOver();
            return;
        }

        renderer.clear();
        renderer.drawSnake(snake.getSegments());
        renderer.drawFood(food.position);
    }, gameSpeed);

    return gameInterval;
}
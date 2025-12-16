import { increaseScore } from "./score.js";

export function gameLoop (snake, food, renderer, gridSize, handleGameOver, gameSpeed = 150, onScore) {
    
    const gameInterval = setInterval(() => {
        console.log('tick');
        snake.move();
        const head = snake.getHead();

        // Check if the food gets eaten
        if (head.x === food.position.x && head.y === food.position.y) {
            snake.grow();
            food.reposition(snake.getSegments());
            increaseScore();
        }

        // Checking wallcollition
        if (snake.checkCollision(gridSize)) {
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
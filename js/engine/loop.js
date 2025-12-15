export function gameLoop (snake, food, renderer, gridSize, handleGameOver, gameSpeed = 150) {
    const gameInterval = setInterval(() => {
        console.log('tick');
        snake.move();

        const head = snake.getHead();

        // Check if the food gets eaten
        if (snake.getHead().x === food.position.x && snake.getHead().y === food.position.y) {
            snake.grow();
            food.reposition(snake.getSegments());
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

        if (snake.checkCollision()) {
            handleGameOver();
            return;
        }

        return gameInterval;
}
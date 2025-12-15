export function gameLoop (snake, food, renderer, gridSize, gameSpeed = 150) {
    const gameInterval = setInterval(() => {
        console.log('tick');
        snake.move();

        // Check if the food gets eaten
        if(snake.getHead().x === food.position.x && snake.getHead().y === food.position.y) {
            snake.grow();
            food.reposition(snake.getSegments());
        }

        // Checking wallcollition
        const head = snake.getHead();
        if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
            clearInterval(gameInterval);
            return;
        }

        // Checking selfcollition
        if (snake.selfCollition()) {

            clearInterval(gameInterval);
            return;
        }
        renderer.clear();
        renderer.drawSnake(snake.getSegments());
        renderer.drawFood(food.position);
        }, gameSpeed);

        return gameInterval;
}
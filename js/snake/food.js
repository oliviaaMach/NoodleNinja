export class Food {
    constructor(gridSize) {
        this.gridSize = gridSize;
        this.position = this.getRandomPosition();
    }

    // Get randomized position in playboard 
    getRandomPosition() {
        return {
            x: Math.floor(Math.random() * this.gridSize),
            y: Math.floor(Math.random() * this.gridSize)
        };
    }
    
    // Spawning food where the snake is not on
    reposition(snakeSegments) {
        let newPosition;

        do {
            newPosition = this.getRandomPosition();
        } while (snakeSegments.some(seg => seg.x === newPosition.x && seg.y === newPosition.y));
            this.position = newPosition;
    }

    
}
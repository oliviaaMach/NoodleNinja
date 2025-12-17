export class Food {
    constructor(gridWidth, gridHeight) {
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
        this.position = this.getRandomPosition();
    }

    // Get randomized position in playboard 
    getRandomPosition() {
        return {
            x: Math.floor(Math.random() * this.gridWidth),
            y: Math.floor(Math.random() * this.gridHeight)
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
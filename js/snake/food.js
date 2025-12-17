export class Food {
    /**
     * @param {number} gridWidth
     * @param {number} gridHeight
     * @param {string[]} sprites - optional array of image paths to use for food
     */
    constructor(gridWidth, gridHeight, sprites = ['assets/imgs/noodleBowl.png']) {
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
        this.sprites = sprites;
        this.position = this.getRandomPosition();
    }

    // Get randomized position in playboard and pick a random sprite
    getRandomPosition() {
        const x = Math.floor(Math.random() * this.gridWidth);
        const y = Math.floor(Math.random() * this.gridHeight);
        const sprite = this.sprites[Math.floor(Math.random() * this.sprites.length)];
        return { x, y, sprite };
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
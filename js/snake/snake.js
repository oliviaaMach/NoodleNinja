export class Snake {
    constructor (startX, startY) {
        this.segments = [
            { x: startX, y: startY} // Head first
        ];
        this.direction = {  x: 1, y: 0}; // Start-direction, right
        this.growAmount = 0; // Grow amount when eating food
    }

    setDirection(newDirection) {
        if ((this.direction.x + newDirection.x === 0) && (this.direction.y + newDirection.y === 0)) {
            return; // ignore 180-turn
        }
        this.direction = newDirection;
    }


    // Move the snake
    move() {
        const head = this.segments[0];
        const newHead = {
            x: head.x + this.direction.x,
            y: head.y + this.direction.y
        };
        this.segments.unshift(newHead);

        if(this.growAmount > 0) {
            this.growAmount--; // Keeping the last segment -> growing
        } else {
            this.segments.pop();
        }
    }

    // Let the snake grow
    grow (amount = 1) {
        this.growAmount += amount;
    }

    // Return head
    getHead() {
        return this.segments[0];
    }

    // Selfcollition
    selfCollition() {
        const head = this.getHead();
        for(let i = 1; i < this.segments.length; i++) {
            if (this.segments[i].x === head.x && this.segments[i].y === head.y)
                return true;
        }
        return false;
    }

    // Returnerar alla segments (read-only)
    getSegments() {
        return [...this.segments];
    }
}
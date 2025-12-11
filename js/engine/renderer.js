export class Renderer {
    constructor(cells, gridSize) {
        this.cells = cells;
        this.gridSize = gridSize;
    }

    index(x, y) {
        return y * this.gridSize + x;
    }

    clear() {
        this.cells.forEach(cell => {
            cell.classList.remove('snake', 'food');
        });
    }

    drawSnake(segments) {
        segments.forEach(seg => {
            const idx = this.index(seg.x, seg.y);
            this.cells[idx].classList.add('snake');
        })
    }

    drawFood(position) {
        const idx = this.index(position.x, position.y);
        this.cells[idx].classList.add('food');
    }
}

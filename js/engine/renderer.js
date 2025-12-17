export class Renderer {
    constructor(cells, gridWidth, board) {
        this.cells = cells;
        this.gridWidth = gridWidth;
        this.board = board;
    }

    index(x, y) {
        return y * this.gridWidth + x;
    }

    clear() {
        this.cells.forEach(cell => {
            cell.classList.remove('snake', 'head', 'food');
        });
    }

    drawSnake(segments) {
        segments.forEach((seg, i) => {
        const idx = this.index(seg.x, seg.y);
        const cell = this.cells[idx];

        cell.classList.remove('snake', 'head');

        cell.classList.add('snake');

        if (i === 0) {
            cell.classList.add('head');
            return;
        }

    });
}

    drawFood(position) {
        const idx = this.index(position.x, position.y);
        this.cells[idx].classList.add('food');
    }
}



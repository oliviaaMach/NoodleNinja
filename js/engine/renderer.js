export class Renderer {
    constructor(cells, gridWidth, board) {
        this.cells = cells;
        this.gridWidth = gridWidth;
        this.board = board;
        // no video element used
    }

    index(x, y) {
        return y * this.gridWidth + x;
    }

    clear() {
        this.cells.forEach(cell => {
            cell.classList.remove('snake', 'head', 'food');
            cell.style.backgroundImage = '';
            // remove any data-sprite attribute set on the cell
            delete cell.dataset.sprite;
        });
    }

    drawSnake(segments) {
        // Clear previous snake classes for safety
        this.cells.forEach(c => c.classList.remove('snake', 'head'));

        segments.forEach((seg, i) => {
            const idx = this.index(seg.x, seg.y);
            const cell = this.cells[idx];
            if (!cell) return;

            // Mark as a snake segment
            cell.classList.add('snake');

            // Mark head so it can be styled larger than body
            if (i === 0) {
                cell.classList.add('head');
            }
        });
}

    drawFood(position) {
        const idx = this.index(position.x, position.y);
        const cell = this.cells[idx];
        if (!cell) return;
        // add class for styling and store sprite key in data attribute
        cell.classList.add('food');
        // clear any previous inline background first
        cell.style.backgroundImage = '';
        if (position.sprite) {
            // derive a short key from the filename, e.g. 'egg' from 'assets/imgs/egg.png'
            const parts = position.sprite.split('/');
            const filename = parts[parts.length - 1] || position.sprite;
            const spriteKey = filename.split('.').slice(0, -1).join('.') || filename;
            cell.dataset.sprite = spriteKey;
        } else {
            delete cell.dataset.sprite;
        }
    }

    }




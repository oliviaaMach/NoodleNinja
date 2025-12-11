export function playBoard() {
    const board = document.querySelector('.playBoard');
    const cells = [];

    for (let i = 0; i < 900; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        board.appendChild(cell);
        cells.push(cell);
    }
    return cells;
}


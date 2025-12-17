export function playBoard(cols = 25, rows = 25, cellSize = '24px') {
    const board = document.querySelector('.playBoard');
    // set CSS variables so CSS grid adapts
    board.style.setProperty('--cols', cols);
    board.style.setProperty('--rows', rows);
    board.style.setProperty('--cell-size', cellSize);

    // clear existing cells if any
    board.innerHTML = '';
    const cells = [];

    const total = cols * rows;
    for (let i = 0; i < total; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        board.appendChild(cell);
        cells.push(cell);
    }
    return cells;
}


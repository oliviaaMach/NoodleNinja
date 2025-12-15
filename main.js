import { playBoard } from "./js/snake/grid.js";
import { Renderer } from "./js/engine/renderer.js";
import  { startGame, restartGame, handleGameOver, setDirection } from "./js/engine/game.js";
import { buttons } from "./js/engine/buttons.js"



const cells = playBoard();
const gridSize = 30;
const board = document.querySelector('.playBoard');
const renderer = new Renderer(cells, gridSize, board);

// keydown
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowUp') setDirection({x: 0, y: -1});
    if(e.key === 'ArrowDown') setDirection({x: 0, y: 1});
    if(e.key === 'ArrowLeft') setDirection({x: -1, y: 0});
    if(e.key === 'ArrowRight') setDirection({x: 1, y: 0});
});

buttons(startGame, restartGame, handleGameOver, renderer, gridSize);

const overlay = document.getElementById('gameOverlay');
const restartBtn = document.querySelector('.restartBtn');
    restartBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        restartGame(renderer, gridSize);
    })



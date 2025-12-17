import { playBoard } from "./js/snake/grid.js";
import { Renderer } from "./js/engine/renderer.js";
import  { getGameState, startGame, restartGame, handleGameOver, setDirection, pauseGame, resumeGame } from "./js/engine/game.js";
import { buttons } from "./js/engine/buttons.js"


// set grid width and height (columns x rows)
const gridWidth = 35;
const gridHeight = 22;
const cells = playBoard(gridWidth, gridHeight);
const board = document.querySelector('.playBoard');
const renderer = new Renderer(cells, gridWidth, board);

// keydown
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowUp') setDirection({x: 0, y: -1});
    if(e.key === 'ArrowDown') setDirection({x: 0, y: 1});
    if(e.key === 'ArrowLeft') setDirection({x: -1, y: 0});
    if(e.key === 'ArrowRight') setDirection({x: 1, y: 0});
});

buttons(
    startGame, 
    restartGame, 
    pauseGame, 
    resumeGame,  
    renderer, 
    gridWidth,
    gridHeight
);

const overlay = document.getElementById('gameOverlay');
const restartBtn = document.querySelector('.restartBtn');
    restartBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        restartGame(renderer, gridWidth, gridHeight);
    })



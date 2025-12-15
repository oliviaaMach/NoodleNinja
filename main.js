import { playBoard } from "./js/snake/grid.js";
import { Renderer } from "./js/engine/renderer.js";
import  { startGame, handleGameOver, setDirection } from "./js/engine/game.js";



const cells = playBoard();
const gridSize = 30;
const renderer = new Renderer(cells, gridSize);

startGame(renderer, gridSize);

// keydown
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowUp') setDirection({x: 0, y: -1});
    if(e.key === 'ArrowDown') setDirection({x: 0, y: 1});
    if(e.key === 'ArrowLeft') setDirection({x: -1, y: 0});
    if(e.key === 'ArrowRight') setDirection({x: 1, y: 0});
});
import { playBoard } from "./js/snake/grid.js";
import { Snake } from "./js/snake/snake.js";
import { Food } from "./js/snake/food.js";
import { Renderer } from "./js/engine/renderer.js";


const cells = playBoard();
console.log(cells.length);

const gridSize = 30;
// Create snake and food
const snake = new Snake(14, 14);
const food = new Food(gridSize);
const renderer = new Renderer(cells, gridSize);

renderer.clear();
renderer.drawSnake(snake.getSegments());
renderer.drawFood(food.position);


// Moving the snake 
snake.move();
console.log(snake.getSegments());

snake.grow();
food.reposition(snake.getSegments());

// keydown
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowUp') snake.setDirection({x: 0, y: -1});
    if(e.key === 'ArrowDown') snake.setDirection({x: 0, y: 1});
    if(e.key === 'ArrowLeft') snake.setDirection({x: -1, y: 0});
    if(e.key === 'ArrowRight') snake.setDirection({x: 1, y: 0});
})
const gameBoard = document.getElementById('gameBoard');
const width = 10;
const height = 20;
let squares = Array.from(Array(width * height).fill(0));

// Draw the game board
function draw() {
  for (let i = 0; i < width * height; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    if (squares[i] === 1) {
      square.classList.add('block');
    }
    gameBoard.appendChild(square);
  }
}

draw();
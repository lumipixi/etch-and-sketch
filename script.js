const board = document.querySelector("#board");

const square = document.createElement("div");
square.classList.add("square");

function createRow(size) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < size; i++) {
    row.append(square.cloneNode());
  }
  return row;
}

function createGrid(size) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  for (let i = 0; i < size; i++) {
    grid.append(createRow(size));
  }
  return grid;
}

function changeColor(e) {
  e.target.style.backgroundColor = "lightpink";
}

function initialize(size) {
  if (!!board) {
    while (board.lastChild) {
      board.removeChild(board.lastChild)
    }; 
  }
  if (isNaN(size)) {
    size = prompt("How big should the board be?")
    if (size === null) size = 16;
  }
  let boardPixels = board.offsetWidth;

  const grid = createGrid(size);
  board.append(grid);
  const squares = document.querySelectorAll(".row .square");
  squares.forEach((sq) => {
    sq.addEventListener("mouseover", changeColor);
    sq.style.width = `${boardPixels / size}px`;
    sq.style.height = `${boardPixels / size}px`;
  });
}

const sizePickers = document.querySelectorAll(".sizePicker");
sizePickers.forEach((btn) => {
  btn.addEventListener("click", () => initialize(btn.getAttribute("data-size")));
})

initialize(16)
const board = document.querySelector("#board");

const square = document.createElement("div");
square.classList.add("square");

let currentColor = "lightpink";

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

function initialize(size) {
  if (!!board) {
    while (board.lastChild) {
      board.removeChild(board.lastChild);
    }
  }
  if (isNaN(size)) {
    size = prompt("How big should the board be?");
    if (size === null || isNaN(size)) size = 16;
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

const sizePickers = document.querySelectorAll(".size-picker");
sizePickers.forEach((btn) => {
  btn.addEventListener("click", () =>
    initialize(btn.getAttribute("data-size"))
  );
});

const colorPickers = document.querySelectorAll(".color-picker");
colorPickers.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentColor = btn.getAttribute("data-color");
    console.log("Current color is: " + currentColor);
  });
});

function changeColor(e) {
  switch (currentColor) {
    case "lightpink":
      e.target.style.backgroundColor = currentColor;
      break;
    case "black":
      e.target.style.backgroundColor = currentColor;
      break;
    case "rainbow":
      let randomColor = () => Math.floor(Math.random() * 360);
      // e.target.style.backgroundColor = `hsl(${randomColor()}, 100%, 50%)`;
      e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
      break;
  }
}

initialize(16);

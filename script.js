const container = document.querySelector(".container");

const square = document.createElement("div");
square.classList.add("square");
let boardPixels = container.offsetWidth;

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

function test() {
  console.log("u clicked me");
}

function initialize(size) {
  const grid = createGrid(size);
  container.append(grid);
  const squares = document.querySelectorAll(".grid .square");
  squares.forEach((sq) => {
    sq.addEventListener("click", test);
  });
  squares.forEach((sq) => {
    sq.style.width = `${boardPixels / size}px`;
    sq.style.height = `${boardPixels / size}px`;
  })
}

initialize(32);
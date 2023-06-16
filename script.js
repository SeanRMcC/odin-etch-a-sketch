const GAME_SIZE = 512;

const game = document.querySelector("#grid");

let dim = 16;

for(let i = 0; i < (dim * dim); i++){
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
    });
    cell.style.flexBasis = (GAME_SIZE / dim).toString() + "px";
    cell.style.height = (GAME_SIZE / dim).toString() + "px";
    game.appendChild(cell);
}
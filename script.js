const GAME_SIZE = 512;

const game = document.querySelector("#grid");
const reset = document.querySelector("#reset");

let dim = 16;

function draw(resolution){
    for(let i = 0; i < (resolution * resolution); i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        });
        cell.style.flexBasis = (GAME_SIZE / dim).toString() + "px";
        cell.style.height = (GAME_SIZE / dim).toString() + "px";
        game.appendChild(cell);
    }
}

function clear(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.remove());
}

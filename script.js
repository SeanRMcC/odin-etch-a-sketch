const GAME_SIZE = 512;

const game = document.querySelector("#grid");
const reset = document.querySelector("#reset");
const blackButton = document.querySelector("#black");
const randomButton = document.querySelector("#random");


let dim = 16;
let rainbowEnabled = false;

function getColor(){
    if(rainbowEnabled){
        const r = parseInt(Math.random() * 255);
        const g = parseInt(Math.random() * 255);
        const b = parseInt(Math.random() * 255);
        console.log(`rgb(${r},${g},${b})`);
        return `rgb(${r},${g},${b})`;
    }else{
        console.log("black");
        return "black";
    }
}

function draw(resolution){
    for(let i = 0; i < (resolution * resolution); i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = getColor();
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

reset.addEventListener("click", () => {
    clear();
    draw(dim);
});

blackButton.addEventListener("click", () => {
    clear();
    draw(dim);
    rainbowEnabled = false;
});

randomButton.addEventListener("click", () => {
    clear();
    draw(dim);
    rainbowEnabled = true;
});

draw(dim);
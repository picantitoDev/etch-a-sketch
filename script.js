
let gridDimension = 16;
let container = document.getElementById('container');
let button = document.getElementById('pop-up');


function createGrid(dimension) {
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            const item = document.createElement("div");
            item.classList.add("item");
            item.style.height = "calc(100% / " + dimension + ")";
            item.style.width = "calc(100% / " + dimension + ")";
            container.appendChild(item);
        }
    }
    paintGrid();
}

function deletePreviousGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
};

function setGridDimension() {
    gridDimension = prompt("Please enter the number of squares");
    deletePreviousGrid();
    createGrid(gridDimension);
    paintGrid();
};

function paintGrid() {
    container.querySelectorAll('.item').forEach(item => {

        item.addEventListener('mouseenter', (event) => {
            if (event.buttons === 1) {
                event.target.style.backgroundColor = 'black';
            }
        });

        item.addEventListener('mousedown', () => {
            item.style.backgroundColor = 'black';
        });
    });

}

createGrid(16);
button.addEventListener('click', setGridDimension);

let gridDimension = 16;
let container = document.getElementById('container');
let button = document.getElementById('pop-up');
let clear = document.getElementById('clear');
let eraser = document.getElementById('eraser');
let paintingColor = 'black';
let colorPicker = document.getElementById('current-color');

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

function clearGrid() {
    container.querySelectorAll('.item').forEach(item => {
        item.style.backgroundColor = 'white';
    });
};

function setGridDimension() {
    let answer;
    while (true) {
        answer = prompt("Please enter the number of squares");
        if (answer <= 100 && answer >= 1) {
            deletePreviousGrid();
            createGrid(answer);
            paintGrid();
            break;
        } else {
            alert("Please enter a valid number");
        }
    }
};


function paintGrid() {
    container.querySelectorAll('.item').forEach(item => {

        item.addEventListener('mouseenter', (event) => {
            if (event.buttons === 1) {
                event.target.style.backgroundColor = paintingColor;
            }
        });

        item.addEventListener('mousedown', () => {
            item.style.backgroundColor = paintingColor;
        });
    });
}

createGrid(16);
button.addEventListener('click', setGridDimension);

eraser.addEventListener('click', () => {
    paintingColor = 'white';
});

clear.addEventListener('click', () => {
    clearGrid();
});

colorPicker.addEventListener('input', () => {
    paintingColor = colorPicker.value;
});
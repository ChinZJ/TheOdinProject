const GRID_SIZE = 16;
const gridContainer = document.querySelector(".container");

// Create 16 x 16 grid of square divs.
function createGrid(size = GRID_SIZE) {
    for (let i = 0; i < size; i++) {
        let colDiv = document.createElement("div");
        colDiv.className = "grid-col";
            
        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cellStyle(cell);

            // Change color when hover.
            cell.addEventListener("mouseenter", (event) => {
                let opacity = cell.style.opacity ? parseFloat(cell.style.opacity) : 0;
                cell.style.backgroundColor = "rgba(255, 0, 0)";
                cell.style.opacity = opacity + 0.1;
            });

            colDiv.appendChild(cell);
        }
        colDivStyle(colDiv);

        gridContainer.appendChild(colDiv);
    }
}

function gridStyle(gridContainer) {
    gridContainer.style.borderColor = "black";
    gridContainer.style.borderWdith = "0.5px";
    gridContainer.style.borderStyle = "solid";

    gridContainer.style.maxHeight = "600px";
    gridContainer.style.maxWidth = "600px";

    gridContainer.style.display = "flex";
    gridContainer.style.flexDirection = "column";
}

function colDivStyle(colDiv) {
    colDiv.style.display = "flex";
    colDiv.style.flex = "auto";
}

function cellStyle(cell) {
    cell.className = "grid-cell";
    cell.style.aspectRatio = "1 / 1";
    cell.style.flex = "auto";
}

createGrid();
gridStyle(gridContainer);
console.log(gridContainer.textContent);

const button = document.querySelector("button");
button.addEventListener("click", (event) => {
    let size;
    do {
        size = parseInt(prompt("Choose a size smaller than or equal to 100."));

        if (size === null) {
            return;
        }
    } while ((size > 100) || (!Number.isInteger(size)));

    clearChildren(gridContainer);
    createGrid(size);
});

function clearChildren(node) {
    while (node.firstChild) {
        node.firstChild.remove();
    }
}

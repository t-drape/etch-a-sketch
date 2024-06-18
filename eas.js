container = document.querySelector(".container");

grid_number = prompt("How many grids?", 16);
grid_number = +grid_number;
container.style.width = 40 * grid_number;

for (let i = 0; i < 16*16; i++) {
    grid_element = document.createElement("div");
    grid_element.style.backgroundColor = "black";
    grid_element.style.width = "40px";
    grid_element.style.height = "40px";
    container.appendChild(grid_element);
}
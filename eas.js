container = document.querySelector(".container");

let width = 960 / 4

for (let i = 0; i < 4**2; i++) {
    grid_element = document.createElement("div");
    grid_element.style.backgroundColor = "white";
    grid_element.style.width = width;
    grid_element.style.height = width;
    grid_element.style.flex = "auto";
    container.appendChild(grid_element);
}
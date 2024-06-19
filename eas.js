const container = document.querySelector(".container");

const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log(container)
    let number = prompt("How many squares?", 16)
    number = +number;
    let width = 960 / number

    for (let i = 0; i < number**2; i++) {
        grid_element = document.createElement("div");
        grid_element.style.backgroundColor = "white";
        grid_element.style.width = width;
        grid_element.style.height = width;
        grid_element.style.flex = "auto";
        container.appendChild(grid_element);
    }
    container.onmouseover = (e) => {
        e.target.style.backgroundColor = "black";
    }

});


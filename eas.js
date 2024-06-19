const container = document.querySelector(".container");

function getColor() {
    let red = Math.floor(Math.random() * (255 - 1) + 1);
    let green = Math.floor(Math.random() * (255 - 1) + 1);
    let blue = Math.floor(Math.random() * (255 - 1) + 1);
    return ((red, green, blue));

}

const opacity_value = .10;
container.onmouseover = (e) => {
    if (e.target.style.backgroundColor == "") {
        e.target.style.backgroundColor = getColor();
    }
    if (e.target.style.opacity < 1) {
        e.target.style.opacity = +(e.target.style.opacity) + opacity_value;
    }
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    if (container.hasChildNodes()) {
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    let number = prompt("How many squares?", 16);
    while (number > 100 || number <= 1) {
        number = prompt("Please enter a valid number. (1-100)")
    }

    number = +number;
    let width = 960 / number

    for (let i = 0; i < number**2; i++) {
        grid_element = document.createElement("div");
        grid_element.style.width = width;
        grid_element.style.height = width;
        grid_element.style.flex = "auto";
        container.appendChild(grid_element);
    }

});


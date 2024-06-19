const container = document.querySelector(".container");

function getColor() {
    let red = Math.floor(Math.random() * (255 - 1) + 1);
    let green = Math.floor(Math.random() * (255 - 1) + 1);
    let blue = Math.floor(Math.random() * (255 - 1) + 1);
    return ((red, green, blue));

}

let delete_bool = false;

const opacity_value = .10;
container.onmouseover = (e) => {
    if (delete_bool === true) {
        e.target.style.backgroundColor = "";
        e.target.style.opacity = 0;
    } else {
        if (e.target.style.backgroundColor == "") {
            e.target.style.backgroundColor = getColor();
        }
        if (e.target.style.opacity < 1) {
            e.target.style.opacity = +(e.target.style.opacity) + opacity_value;
        }
    }
}

const start_button = document.querySelector(".start_button");

start_button.addEventListener("click", () => {
    draw_button.style.visibility = "visible";
    delete_button.style.visibility = "visible";
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
    let width = 480 / number

    for (let i = 0; i < number**2; i++) {
        grid_element = document.createElement("div");
        grid_element.style.width = width;
        grid_element.style.height = width;
        grid_element.style.flex = "auto";
        container.appendChild(grid_element);
    }
    console.log(container.childElementCount);

});

const delete_button = document.querySelector(".delete_button");
delete_button.style.visibility = "hidden";

delete_button.addEventListener("click", () => {
    delete_bool = true;
})

const draw_button = document.querySelector(".draw_button");
draw_button.style.visibility = "hidden";

draw_button.addEventListener("click", () => {
    delete_bool = false;
})


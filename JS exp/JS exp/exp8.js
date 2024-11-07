// Roll No: 42122
// Name: Aditya Ghadge
// Batch: R5

let isFocused = false;

function changeColorOnHover() {
    if (!isFocused) {
        document.body.style.backgroundColor = "yellow";
        document.getElementById("colorBox").innerText = "Hovering!";
    }
}

function resetColorOnLeave() {
    if (!isFocused) {
        document.body.style.backgroundColor = "lightgray";
        document.getElementById("colorBox").innerText = "Hover or Focus here!";
    }
}

function changeColorOnFocus() {
    isFocused = true;
    document.body.style.backgroundColor = "lightgreen";
    document.getElementById("colorBox").innerText = "In Focus!";
}

function resetText() {
    isFocused = false;
    document.body.style.backgroundColor = "lightgray";
    document.getElementById("colorBox").innerText = "Hover or Focus here!";
}

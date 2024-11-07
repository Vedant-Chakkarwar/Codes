let arr = [];
let n = 0;

function addElement() {
    n = parseInt(document.getElementById("arraySize").value);
    const newElement = document.getElementById("newElement").value;
    
    if (arr.length < n) {
        arr.push(newElement);
        document.getElementById("arrayDisplay").innerText = `Array: [${arr.join(", ")}]`;
    } else {
        document.getElementById("arrayDisplay").innerText = `Array is Filled`;
    }
}


function removeArrayElement() {
    const elementToRemove = document.getElementById("removeElement").value;
    const index = arr.indexOf(elementToRemove);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    document.getElementById("arrayDisplay").innerText = `Array: [${arr.join(", ")}]`;
}

function checkArrayValue() {
    const value = document.getElementById("checkValue").value;
    const found = arr.includes(value);
    document.getElementById("checkResult").innerText = found ? "Value found" : "Value not found";
}

function emptyArray() {
    arr = [];
    document.getElementById("arrayDisplay").innerText = `Array: [${arr.join(", ")}]`;
}
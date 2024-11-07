let arr = [];
let n = 0;

function addElement() {
    n = parseInt(document.getElementById("arraySize").value);
    const newElement = document.getElementById("newElement").value;
  
    if (arr.length < n) {
        arr[arr.length] = newElement;
        document.getElementById("arrayDisplay").innerText = `Array: [${arr.join(", ")}]`;
    } else {
        document.getElementById("arrayDisplay").innerText = `Array is Filled`;
    }
}

function removeArrayElement() {
    const elementToRemove = document.getElementById("removeElement").value;

    if (arr.length === 0) {
        document.getElementById("arrayDisplay").innerText = `Array is empty`;
        return;
    }

    // Check if the element exists in the array
    if (arr.includes(elementToRemove)) {
        // Use filter to remove the element
        arr = arr.filter(item => item !== elementToRemove);
        document.getElementById("arrayDisplay").innerText = `Array: [${arr.join(", ")}]`;
    } else {
        document.getElementById("arrayDisplay").innerText = `Element not found in array`;
    }
}


function checkArrayValue() {
    const value = document.getElementById("checkValue").value;
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            found = true;
            break;
        }
    }
    document.getElementById("checkResult").innerText = found ? "Value found" : "Value not found";
}

function emptyArray() {
    arr = [];
    document.getElementById("arrayDisplay").innerText = `Array: [${arr.join(", ")}]`;
}

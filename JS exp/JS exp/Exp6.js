let arr = [];
let maxLength = 0;

// Set the array length
function length() {
    maxLength = parseInt(document.getElementById('1').value);
    if (isNaN(maxLength) || maxLength <= 0) {
        document.getElementById('res').innerHTML = 'Please enter a valid positive number for length.';
    } else {
        document.getElementById('res').innerHTML = `Array length set to ${maxLength}.`;
    }
}

// Set the array input
function arrayip() {
    const input = document.getElementById('2').value;
    const tempArr = input.split(',').map(item => item.trim());

    if (tempArr.length !== maxLength) {
        document.getElementById('res').innerHTML = `Please enter exactly ${maxLength} elements, separated by commas.`;
    } else {
        arr = tempArr;
        document.getElementById('res').innerHTML = `Array set: [${arr.join(', ')}]`;
    }
}

// Delete an element from the array
function del() {
    const deleteElement = document.getElementById('delete').value;
    const index = arr.indexOf(deleteElement);
    
    if (index !== -1) {
        arr.splice(index, 1);
        document.getElementById('res').innerHTML = `Element "${deleteElement}" deleted. Updated Array: [${arr.join(', ')}]`;
    } else {
        document.getElementById('res').innerHTML = `Element "${deleteElement}" not found in the array.`;
    }
}

// Find an element in the array
function find() {
    const findElement = document.getElementById('find').value;
    const index = arr.indexOf(findElement);

    if (index !== -1) {
        document.getElementById('res').innerHTML = `Element "${findElement}" found at index ${index}.`;
    } else {
        document.getElementById('res').innerHTML = `Element "${findElement}" not found in the array.`;
    }
}

// Empty the array
function Empty() {
    arr = [];
    document.getElementById('res').innerHTML = 'Array emptied.';
}

// Display the current array
function Display() {
    if (arr.length > 0) {
        document.getElementById('res').innerHTML = `Current Array: [${arr.join(', ')}]`;
    } else {
        document.getElementById('res').innerHTML = 'Array is empty.';
    }
}

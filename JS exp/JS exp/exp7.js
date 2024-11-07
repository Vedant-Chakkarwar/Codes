let len;
let Array = [];
let obj = {};

function length() {
  len = document.getElementById("1").value;
  document.getElementById('res').innerHTML = `Array length set to ${len}.`;
}

function addElement() {
  var elementValue = document.getElementById("element").value;
  Array.push(elementValue);
  document.getElementById("arrayOutput").textContent = Array.join(" , ");
  document.getElementById("element").value = '';
}

function addObject() {
  var key = document.getElementById("Key").value;
  var value = document.getElementById("Value").value;

  // var newObject = {
  //   name: key,
  //   age: value
  // };
  obj.key=value;
  // Array.push(newObject);

  displayObjects();

  document.getElementById("Key").value = '';
  document.getElementById("Value").value = '';
}

function displayObjects() {
  var output = Array.map(obj => `Name: ${obj.name}, Age: ${obj.age}`).join("<br>");
  document.getElementById("objectArrayOutput").innerHTML = output;
}

// // Global object to hold the current key-value pairs
let currentObject = {};

// // Global array to hold objects
// let objectsArray = [];

// // Function to add a key-value pair to the object
function addKeyValuePair() {
  // Get key and value from input fields
  var key = document.getElementById("key").value;
  var value = document.getElementById("value").value;

  // Add the key-value pair to the object
  if (key && value) {
    currentObject[key] = value;
  }

  // Display the updated object
  displayCurrentObject();

  // Clear the input fields for the next entry
  document.getElementById("key").value = '';
  document.getElementById("value").value = '';
}

// // Function to display the current object being built
function displayCurrentObject() {
  // var output = Array.map(obj => `Name: ${currentObject.name}, Age: ${currentObject.age}`).join("<br>");
  // document.getElementById("objectArrayOutput").innerHTML = output;
  document.getElementById("currentObject").textContent = "Current Object: " + JSON.stringify(currentObject);
}

// // Function to save the current object to the array and reset the current object
// function saveObject() {
//   if (Object.keys(currentObject).length === 0) {
//     alert("Object is empty, please add key-value pairs first!");
//     return;
//   }

//   // Push the current object into the array
//   objectsArray.push({ ...currentObject });

//   // Display the updated array of objects
//   displayObjectsArray();

//   // Clear the current object for the next one
//   currentObject = {};
//   displayCurrentObject();
// }

// // Function to display the array of saved objects
// function displayObjectsArray() {
//   var output = objectsArray.map((obj, index) => `Object ${index + 1}: ${JSON.stringify(obj)}`).join("<br>");
//   document.getElementById("objectArrayOutput").innerHTML = output;
// }
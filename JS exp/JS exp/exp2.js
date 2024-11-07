// Generate table using For loop
function generateTableForLoop() {
  let num = document.getElementById("number").value;
  let result2 = document.getElementById("result2");
  if (num === "" || isNaN(num)) {
      result2.innerHTML = "Please enter a valid number.";
      return;
  }
  
  let table = "<table><tr><th>Multiplier</th><th>Result</th></tr>";
  for (let i = 1; i <= 10; i++) {
      table += "<tr><td>" + num + " x " + i + "</td><td>" + (num * i) + "</td></tr>";
  }
  table += "</table>";
  result2.innerHTML = table;
}

// Generate table using While loop
function generateTable() {
  let num = document.getElementById("number").value;
  let result = document.getElementById("result");
  if (num === "" || isNaN(num)) {
      result.innerHTML = "Please enter a valid number.";
      return;
  }
  
  let i = 1;
  let table = "<table><tr><th>Multiplier</th><th>Result</th></tr>";
  while (i <= 10) {
      table += "<tr><td>" + num + " x " + i + "</td><td>" + (num * i) + "</td></tr>";
      i++;
  }
  table += "</table>";
  result.innerHTML = table;
}

// Generate table using Do While loop
function generateTableDoWhileLoop() {
  let num = document.getElementById("number").value;
  let result3 = document.getElementById("result3");
  if (num === "" || isNaN(num)) {
      result3.innerHTML = "Please enter a valid number.";
      return;
  }

  let i = 1;
  let table = "<table><tr><th>Multiplier</th><th>Result</th></tr>";
  do {
      table += "<tr><td>" + num + " x " + i + "</td><td>" + (num * i) + "</td></tr>";
      i++;
  } while (i <= 10);
  table += "</table>";
  result3.innerHTML = table;
}

// Reset input and result tables
function resetTable() {
  document.getElementById("number").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result3").innerHTML = "";
}

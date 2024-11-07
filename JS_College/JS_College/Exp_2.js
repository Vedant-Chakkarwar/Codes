function multiply() {
  let a = parseInt(document.getElementById("Number").value);
  for (let i = 1; i <= 10; i++) {
    document.getElementById("Result").innerHTML += `${a} * ${i}: ${a * i}<br>`;
  }
}

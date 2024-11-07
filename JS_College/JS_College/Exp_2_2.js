function multiply() {
  let a = parseInt(document.getElementById("Number").value);
  let i = 1;
  do{
    document.getElementById("Result").innerHTML += `${a} * ${i}: ${a * i}<br>`;
    i++;
  }while(i<=10);
}

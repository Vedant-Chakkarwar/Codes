// Mouseover event to change background color of rectangle
let rectangle = document.getElementById("rectangle");
rectangle.addEventListener("mouseover", function () {
  rectangle.style.backgroundColor = "coral";
});
rectangle.addEventListener("mouseout", function () {
  rectangle.style.backgroundColor = "lightblue"; // Reset back to
});
// Focus event to change background color of input field
let focusField = document.getElementById("focusField");
focusField.addEventListener("focus", function () {
  document.body.style.backgroundColor = "lavender";
});
focusField.addEventListener("blur", function () {
  document.body.style.backgroundColor = ""; // Reset back to default when
});
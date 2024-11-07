// Calculate the area of a triangle using the semi-perimeter formula
function areaofTriangle() {
  // Get input values
  const side1 = parseFloat(document.getElementById('side1').value);
  const side2 = parseFloat(document.getElementById('side2').value);
  const side3 = parseFloat(document.getElementById('side3').value);

  // Check if the input is valid
  if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 <= 0 || side2 <= 0 || side3 <= 0) {
    document.getElementById('triangleResult').innerHTML = "Please enter valid side lengths.";
    return;
  }

  // Calculate the semi-perimeter
  const s = (side1 + side2 + side3) / 2;

  // Calculate the area using Heron's formula
  const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

  // Check if the sides form a valid triangle
  if (isNaN(area)) {
    document.getElementById('triangleResult').innerHTML = "The sides do not form a valid triangle.";
  } else {
    document.getElementById('triangleResult').innerHTML = `The area of the triangle is ${area.toFixed(2)} square units.`;
  }
}

// Calculate the area of a rectangle
function areaofRectangle() {
  // Get input values
  const length = parseFloat(document.getElementById('len').value);
  const breadth = parseFloat(document.getElementById('bre').value);

  // Check if the input is valid
  if (isNaN(length) || isNaN(breadth) || length <= 0 || breadth <= 0) {
    document.getElementById('result').innerHTML = "Please enter valid dimensions.";
    return;
  }

  // Calculate the area
  const area = length * breadth;

  // Display the result
  document.getElementById('result').innerHTML = `The area of the rectangle is ${area.toFixed(2)} square units.`;
}

// Calculate the area of a circle
function areaofCircle() {
  // Get input value
  const radius = parseFloat(document.getElementById('rad').value);

  // Check if the input is valid
  if (isNaN(radius) || radius <= 0) {
    document.getElementById('result2').innerHTML = "Please enter a valid radius.";
    return;
  }

  // Calculate the area
  const area = Math.PI * Math.pow(radius, 2);

  // Display the result
  document.getElementById('result2').innerHTML = `The area of the circle is ${area.toFixed(2)} square units.`;
}

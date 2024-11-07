// Function to display results in the result div
function displayResult(result) {
  document.getElementById('result').innerHTML = result;
}

// Function to compare strings using localeCompare method
function localCompare() {
  const string1 = document.getElementById('inputString1').value;
  const string2 = document.getElementById('inputString2').value;
  
  // Compare strings alphabetically
  const compareValue = string1.localeCompare(string2);
  let result;

  if (compareValue === 0) {
      result = `"${string1}" and "${string2}" are alphabetically equal.`;
  } else if (compareValue < 0) {
      result = `"${string1}" comes before "${string2}" alphabetically.`;
  } else {
      result = `"${string1}" comes after "${string2}" alphabetically.`;
  }

  displayResult(result);
}

// Function to compare strings using strict equality operator (===)
function strictEquality() {
  const string1 = document.getElementById('inputString1').value;
  const string2 = document.getElementById('inputString2').value;
  
  // Strict equality check
  const isEqual = (string1 === string2);
  let result = `"${string1}" and "${string2}" are ` + (isEqual ? 'equal.' : 'not equal.');
  
  displayResult(result);
}

// Function to compare strings by length
function comparebylength() {
  const string1 = document.getElementById('inputString1').value;
  const string2 = document.getElementById('inputString2').value;
  
  let result = "";

  if (string1.length > string2.length) {
      result = `"${string1}" is longer than "${string2}".`;
  } else if (string1.length < string2.length) {
      result = `"${string2}" is longer than "${string1}".`;
  } else {
      result = `"${string1}" and "${string2}" have the same length.`;
  }

  displayResult(result);
}

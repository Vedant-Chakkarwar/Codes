// Function to replace characters in a string using standard string methods
function replaceCharacter() {
    let inputStr = document.getElementById('inputString').value;
    let charToReplace = document.getElementById('replaceChar').value;
    let replaceWith = document.getElementById('withChar').value;
  
    if (inputStr && charToReplace && replaceWith) {
        // Using replace method (standard method)
        let result = inputStr.replaceAll(charToReplace, replaceWith);
        document.getElementById('replaceResult').innerText = `Replaced String: ${result}`;
    } else {
        document.getElementById('replaceResult').innerText = "Please provide valid input.";
    }
  }
  
  // Function to check if a string is a palindrome (using standard methods)
  function checkPalindrome() {
    let inputStr = document.getElementById('palindromeString').value;
    let reversedStr = inputStr.split('').reverse().join('');
  
    if (inputStr && inputStr === reversedStr) {
        document.getElementById('palindromeResult').innerText = "The string is a palindrome.";
    } else {
        document.getElementById('palindromeResult').innerText = "The string is not a palindrome.";
    }
  }
  
  // Function to reverse a string using standard methods
  function reverseString() {
    let inputStr = document.getElementById('inputString').value;
    if (inputStr) {
        let reversedStr = inputStr.split('').reverse().join('');
        document.getElementById('reverseResult').innerText = `Reversed String: ${reversedStr}`;
    } else {
        document.getElementById('reverseResult').innerText = "Please enter a valid string.";
    }
  }
  
  // Function to replace characters in a string without using standard string methods
  function replaceWithoutStandardMethods() {
    let inputStr = document.getElementById('inputString').value;
    let charToReplace = document.getElementById('replaceChar').value;
    let replaceWith = document.getElementById('withChar').value;
  
    if (inputStr && charToReplace && replaceWith) {
        let result = '';
        for (let i = 0; i < inputStr.length; i++) {
            if (inputStr[i] === charToReplace) {
                result += replaceWith;
            } else {
                result += inputStr[i];
            }
        }
        document.getElementById('replaceResult').innerText = `Replaced String (No Methods): ${result}`;
    } else {
        document.getElementById('replaceResult').innerText = "Please provide valid input.";
    }
  }
  
  // Function to check if a string is a palindrome without using standard methods
  function checkPalindromeWithoutMethods() {
    let inputStr = document.getElementById('palindromeString').value;
    let reversedStr = '';
    for (let i = inputStr.length - 1; i >= 0; i--) {
        reversedStr += inputStr[i];
    }
  
    if (inputStr && inputStr === reversedStr) {
        document.getElementById('palindromeResult').innerText = "The string is a palindrome (No Methods).";
    } else {
        document.getElementById('palindromeResult').innerText = "The string is not a palindrome (No Methods).";
    }
  }
  
  // Function to reverse a string without using standard string methods
  function reverseWithoutStandardMethods() {
    let inputStr = document.getElementById('inputString').value;
    let reversedStr = '';
    for (let i = inputStr.length - 1; i >= 0; i--) {
        reversedStr += inputStr[i];
    }
    document.getElementById('reverseResult').innerText = `Reversed String (No Methods): ${reversedStr}`;
  }
  
  // Reset function to clear all input fields and results
  function resetForm() {
    document.getElementById('inputString').value = '';
    document.getElementById('replaceChar').value = '';
    document.getElementById('withChar').value = '';
    document.getElementById('palindromeString').value = '';
    
    // Clear result paragraphs
    document.getElementById('replaceResult').innerText = '';
    document.getElementById('palindromeResult').innerText = '';
    document.getElementById('reverseResult').innerText = '';
  }
  
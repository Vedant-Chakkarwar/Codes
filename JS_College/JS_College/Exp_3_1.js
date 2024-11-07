function reverseString() {
  const inputString = document.getElementById("inputString").value;
  let reversed = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
      reversed += inputString[i];
  }
  document.getElementById("reverseResult").innerText = `Reversed String: ${reversed}`;
}

function replaceCharacters() {
  const inputString = document.getElementById("inputString").value;
  const find = document.getElementById("findChar").value;
  const replace = document.getElementById("replaceChar").value;
  let replaced = '';
  
  for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === find) {
          replaced += replace;
      } else {
          replaced += inputString[i];
      }
  }
  document.getElementById("replaceResult").innerText = `String after replacement: ${replaced}`;
}


function checkPalindrome() {
  const inputString = document.getElementById("inputString").value;
  let newString = inputString.toLowerCase();
  let isPalindrome = true;
  for (let i = 0; i < newString.length / 2; i++) {
      if (newString[i] !== newString[newString.length - 1 - i]) {
          isPalindrome = false;
          break;
      }
  }

  document.getElementById("palindromeResult").innerText = isPalindrome ? "The string is a palindrome." : "The string is not a palindrome.";
}

function reverseString() {
  const inputString = document.getElementById("inputString").value;
  const reversed = inputString.split('').reverse().join('');
  document.getElementById("reverseResult").innerText = `Reversed String: ${reversed}`;
}

function replaceCharacters() {
  const inputString = document.getElementById("inputString").value;
  const find = document.getElementById("findChar").value;
  const replace = document.getElementById("replaceChar").value;
  const replaced = inputString.split(find).join(replace);
  document.getElementById("replaceResult").innerText = `String after replacement: ${replaced}`;
}

function checkPalindrome() {
  const inputString = document.getElementById("inputString").value;
  const newString = inputString.replace(/[\W_]/g, '').toLowerCase();
  const isPalindrome = newString === newString.split('').reverse().join('');
  document.getElementById("palindromeResult").innerText = isPalindrome ? "The string is a palindrome." : "The string is not a palindrome.";
}
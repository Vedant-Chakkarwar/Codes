function compareStrings() {
  const string1 = document.getElementById("string1").value;
  const string2 = document.getElementById("string2").value;

  const equality = string1 == string2 ? "Equal" : "Not Equal";

  const strictEquality = string1 === string2 ? "Equal" : "Not Equal";

  const lengthComparison = string1.length === string2.length ? "Same Length" : "Different Length";

  const alphabeticalOrder = string1.localeCompare(string2) === 0 ? "Same" : "Not Same";

  document.getElementById("equalityResult").innerText = `Normal Equality:${equality}`;
  document.getElementById("strictEqualityResult").innerText = `Strict Equality:${strictEquality}`;
  document.getElementById("lengthComparisonResult").innerText = `Length Comparison: ${lengthComparison}`;
  document.getElementById("alphabeticalOrderResult").innerText = `Alphabetical Comparison: ${alphabeticalOrder}`;
  document.getElementById("countResult").innerText = `Number of Different Characters: ${count(string1, string2)}`;
}

function count(string1,string2){
  let count = 0;
  for(let i = 0; i < string1.length; i++){
    if(string1[i] != string2[i]){
      count++;
    }
  }
  return count;
}
function compareStrings() {
    const string1 = document.getElementById("string1").value;
    const string2 = document.getElementById("string2").value;

    const equality = compareNormalEquality(string1, string2) ? "Equal" : "Not Equal";
    const strictEquality = compareStrictEquality(string1, string2) ? "Equal" : "Not Equal";
    const lengthComparison = compareLength(string1, string2) ? "Same Length" : "Different Length";
    const alphabeticalOrder = compareAlphabeticalOrder(string1, string2) === 0 ? "Same" : "Not Same";

    document.getElementById("equalityResult").innerText = `Normal Equality: ${equality}`;
    document.getElementById("strictEqualityResult").innerText = `Strict Equality: ${strictEquality}`;
    document.getElementById("lengthComparisonResult").innerText = `Length Comparison: ${lengthComparison}`;
    document.getElementById("alphabeticalOrderResult").innerText = `Alphabetical Comparison: ${alphabeticalOrder}`;
}
function compareNormalEquality(str1, str2) {
    return str1 == str2;
}
function compareStrictEquality(str1, str2) {
    if (typeof str1 !== typeof str2) return false;
    return compareNormalEquality(str1, str2);
}
function compareLength(str1, str2) {
    let len1 = 0, len2 = 0;
    while (str1[len1] !== undefined) {
        len1++;
    }
    while (str2[len2] !== undefined) {
        len2++;
    }
    return len1 === len2;
}
function compareAlphabeticalOrder(str1, str2) {
    let i = 0;
    while (i < str1.length && i < str2.length) {
        if (str1[i] < str2[i]) return -1; 
        if (str1[i] > str2[i]) return 1;
        i++;
    }
    if (str1.length < str2.length) return -1;
    if (str1.length > str2.length) return 1;
    return 0;
}
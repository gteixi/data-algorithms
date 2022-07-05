// *********************************************************+
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
// *********************************************************+

// FIRST SOLUTION
// function palindrome(str) {
//   debugger;
//   if (str.split("").reduce((strBackwards, str) => str + strBackwards) === str) {
//     return true;
//   }
//   return false;
// }

// FIRST SOLUTION W REFRACTOR
// function palindrome(str) {
//   return (
//     str.split("").reduce((strBackwards, str) => str + strBackwards) === str
//   );
// }

// SECOND SOLUTION
function palindrome(str) {
  return str.split("").reverse().join("") === str;
}

// THIRD SOLUTION

// function palindrome(str) {
//   return str.split("").every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

module.exports = palindrome;

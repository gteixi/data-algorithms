// *********************************************************+
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
// *********************************************************+

// FIRST SOLUTION WITH REVERSE()
// function reverse(str) {
//   const arr = str.split("");
//   arr.reverse();
//   return arr.join("");
// }

// FIRST SOLUTION W REFRACTOR
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// SECOND SOLUTION
// function reverse(str) {
//   let reverseStr = "";

//   for (let char of str) {
//     reverseStr = char + reverseStr  ;
//   }
//   return reverseStr;
// }

// THIRD SOLUTION
function reverse(str) {
  return str.split("").reduce((reverseStr, str) => {
    debugger;
    return str + reverseStr;
  }, "");
}

reverse("hello");

module.exports = reverse;

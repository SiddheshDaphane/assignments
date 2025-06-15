/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const oString = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const reserveStr = oString.split('').reverse().join('');
  if (oString === reserveStr) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;


// console.log(isPalindrome("NaN"))
// console.log(isPalindrome("Hello"))
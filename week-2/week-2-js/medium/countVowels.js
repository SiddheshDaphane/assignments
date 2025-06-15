/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let countV = 0
    for (let i=0; i < str.length; i++) {
      if (["a","e","i","o","u"].includes(str[i].toLowerCase())) {
        // console.log(i);
        // console.log(countV);
        countV += 1
      } else {
        countV
      }
    }
    return countV;
}

module.exports = countVowels;

// console.log(countVowels("Hello World")); 
// console.log(countVowels("AEIOU"));           // 5
// console.log(countVowels("javascript"));      // 3
// console.log(countVowels("xyz"));             // 0
// console.log(countVowels("aEiOuBCDFG")); 
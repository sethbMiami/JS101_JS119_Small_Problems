/* eslint-disable max-len */
// const readlineSync = require('readline-sync');


// //Write a program that solicits six numbers from the user and logs a message that 
// //describes whether the sixth number appears among the first five numbers.

// const askQuestion = (questionNumber) => {
//   let userInput = readlineSync.question(`Enter the ${questionNumber} number: `);
//   return userInput;
// };

// const checkNumbers = () => {
//   let fiveQuestions = ["1st", "2nd", "3rd", "4th", "5th", "last"];
//   let userResponses = [];
//   for (let question of fiveQuestions) {
//     userResponses.push(askQuestion(question));
//   }
//   let comparison = userResponses.slice(0, 5);
//   let last = userResponses[5];
//   if (comparison.some((element) => element === last)) {
//     return `The number ${last} appears in ${comparison.join(", ")}.`;
//   }

//   return `The number ${last} does not appear in ${comparison.join(", ")}.`;
// };

// console.log(checkNumbers());

//Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise.
//A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

const isPalindrome = (string) => {
  return string === string.split("").reverse().join("");
};

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

const isRealPalindrome = (string) => {
  let strippedString = string.replace(/[^a-zA-Z0-9]/g, '');
  return strippedString.toLowerCase() === strippedString.split("").reverse().join("").toLowerCase();
};

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

console.log('---------------');
const isPalindromicNumber = (number) => {
  return number === Number(String(number).split("").reverse().join(""));
};
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

const runningTotal = (array) => {
  let newArray = [];
  let totalArray = [];
  array.forEach(element => {
    newArray.push(element);
    totalArray.push(newArray.reduce((accumalator, currentValue) => accumalator + currentValue));
  });
  return totalArray;
};

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

const wordSizes = (string) => {
  let wordObject = {};

  for (let word of string.split(" ")) {
    word = word.replace(/[^a-zA-Z0-9]/g, '');
    if (wordObject.hasOwnProperty(word.length)) {
      wordObject[word.length] += 1;
    } else if (word.length) {
      wordObject[word.length] = 1;
    }
  }
  return wordObject;
};

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}

const swap = (string) => {
  return string.split(" ").map((word) => {
    return word.length > 1 ? word[word.length - 1] + word.slice(1, word.length - 1) + word[0] : word;
  }).join(" ");
};
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
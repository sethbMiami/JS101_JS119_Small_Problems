/* eslint-disable max-len */
// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

const smallerNumbersThanCurrent = (array) => {
  let countArray = [];

  array.forEach(element => {
    let count = [];
    array.forEach((value) => {
      if (!count.includes(value) && value < element) {
        count.push(value);
      }
    });
    countArray.push(count.length);
  });
  return countArray;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]


// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:
console.log('------------');
const minimumSum = (array) => {
  if (array.length < 5) return null;

  let sums = [];

  for (let index = 0; index < array.length - 4; index++) {
    let sum = array.slice(index, index + 5).reduce((acc, curVal) => acc + curVal);
    sums.push(sum);
  }
  //console.log(sums);
  return Math.min(...sums);
};

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".

// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:

const toWeirdCase = (string) => {
  return string.split(' ').map((word, index) => {
    if (index % 2 !== 0) {
      return word.split('').map((letter, index2) => {
        if ((index2  + 1) % 4 === 0) return letter.toUpperCase();
        return letter;
      }).join('');
    }
    return word;
  }).join(' ');
};

console.log('--------------');

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');

console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".

// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// Examples:

const closestNumbers = (array) => {
  let lowestPair = [array[0], array[1]];

  for (let index = 0; index < array.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {
      if (index === index2) continue;
      if (Math.abs(lowestPair[0] - lowestPair[1]) > Math.abs(array[index] - array[index2])) {
        lowestPair = [array[index], array[index2]];
      }
    }
  }
  return lowestPair;
};

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]

// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// Examples:

const leastCommonChar = (string) => {
  let charObject = {};

  for (let letter of string) {
    letter = letter.toLowerCase();
    if (charObject.hasOwnProperty(letter)) {
      charObject[letter] += 1;
    } else {
      charObject[letter] = 1;
    }
  }

  let lowestNum = Math.min(...Object.values(charObject));
  let lowestIndex = Object.values(charObject).indexOf(lowestNum);

  return Object.keys(charObject)[lowestIndex];
};

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".

function addAll(numbers) {
  let runningTotal = 0;
  let array = [];
  let length = numbers.length;

  for (let index = 0; index < length; index++) {

    if (runningTotal > numbers[0]) {
      runningTotal = 0;
    }
    let a = numbers.shift();
    let b = numbers.shift();
    console.log(runningTotal);

    runningTotal = a + b;
    array.push(runningTotal);
  }

  console.log(array);
  //return runningTotalArray.slice(1).reduce((acc, curVal) => acc + curVal);
}

console.log(addAll([1, 2, 3, 4, 5])); // 33

console.log(Array.from(123));

let newString = 'abcuehdyei';
console.log(newString.split('a','e', 'i', 'o', 'u'));
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */

const rotateArray = (array) => {
  if (!Array.isArray(array)) return undefined;
  return array.length ? array.slice(1).concat(array[0]) : [];
};


console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let arrayTest = [1, 2, 3, 4];
console.log(rotateArray(arrayTest));                    // [2, 3, 4, 1]
console.log(arrayTest);                                 // [1, 2, 3, 4]

console.log('hello');
const rotateRightmostDigits = (number, digit) => {
  let numberArray = [...String(number)];
  let moveDigit = numberArray.splice(-digit, 1);
  return Number(numberArray.concat(moveDigit).join(''));
};

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

const maxRotation = (number) => {
  let rotation = String(number).length;

  for (let index = 0; index < rotation; index++) {
    number = rotateRightmostDigits(number, rotation - index);
  }
  return number;
};


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

function wordToDigit(inputString) {
  const spelledOutNumbers = [
    'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten'
  ];

  const regex = new RegExp(`\\b(${spelledOutNumbers.join('|')})\\b`, 'gi');

  return inputString.replace(regex, (match) => {
    switch (match.toLowerCase()) {
      case 'one': return '1';
      case 'two': return '2';
      case 'three': return '3';
      case 'four': return '4';
      case 'five': return '5';
      case 'six': return '6';
      case 'seven': return '7';
      case 'eight': return '8';
      case 'nine': return '9';
      case 'ten': return '10';
      default: return match;
    }
  });
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

let string = 'hello';
let stringCode = string.charCodeAt(1);
console.log(string.charAt(1));   // ‘e’
console.log(stringCode);

let graderString = 'Will the grader give me an A? ';
let answer = 'Yes.';
console.log(graderString.concat(answer));

let stringInclude = 'seth';
console.log(stringInclude.includes('s'));   //true

let splitString = 'let this be a bunch of words';
console.log(splitString.split(' ', 3));

let trimString = '      hello    ';
console.log(trimString.trim());

const findFibonacciIndexByLength = (index) => {
  let array = [1, 1];

  while (index > String(array[array.length - 1]).length) {
    array.push(BigInt(array[array.length - 1]) + BigInt(array[array.length - 2]));
    //array = array.concat(array[array.length - 1] + array[array.length - 2]);

  }
  return BigInt(array.length);
};

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
//console.log(findFibonacciIndexByLength(100n) === 476n);
//console.log(findFibonacciIndexByLength(1000n) === 4782n);
//console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.

function sum(num) {
  if ( num === 1) {
    return 1;
  }
  console.log(`${num} + sum${num - 1}`);
  return num + sum(num - 1);
}

console.log(sum(4));

// const fibonacci = (count, number = 1) => {
//   if (count < 0) {
//     return number;
//   }
//   number += (number + 1);
//   return fibonacci(count - 1, number);
// };

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// fibonacci(5);       // 5
// fibonacci(12);      // 144
// fibonacci(20);      // 6765

let minger = '12fe';
console.log(parseInt(minger, 10));

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

let thisArray = [1, 2, 3, 4];
let firstItem = thisArray[0];
thisArray.shift();
console.log(thisArray, firstItem);

const numbers = [4, 3, 1, 5, 2];

// Sort the array numerically
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 3, 4, 5]

let arr = [];
arr[-3] = 5;
arr["foo"] = "a";

// Is arr empty?
console.log(arr.length); // 0                Yes
console.log(Object.keys(arr)); // [ '-3', 'foo' ]  No
console.log(arr.length);

const fibonacci2 = (number) => {
  let firstNum = 0;
  let secondNum = 1;
  let newSum = 0;

  for (let index = 1; index < number; index++) {
    newSum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = newSum;
  }
  return newSum;
};

console.log(fibonacci2(20));       // 6765
//console.log(fibonacci2(50));       // 12586269025
//console.log(fibonacci2(75));       // 2111485077978050

let memo = {};
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (memo[nth]) {
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return memo[nth];
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
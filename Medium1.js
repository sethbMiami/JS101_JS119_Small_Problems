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
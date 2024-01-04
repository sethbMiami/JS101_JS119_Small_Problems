/* eslint-disable max-len */
//Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

const repeater = (string) => {
  return string.split("").map((letter) => letter + letter).join("");
};
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

const doubleConsonants = (string) => {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  return string.split("").map((letter) => (consonants.includes(letter.toLowerCase()) ? letter + letter : letter)).join("");
};
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""


const reverseNumber = number => String(number).split("").reverse("").join("") * 1;
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1

const sequence2 = number => [...Array(number + 1).keys()].slice(1);

console.log(sequence2(5));    // [1, 2, 3, 4, 5]
console.log(sequence2(3));    // [1, 2, 3]
console.log(sequence2(1));    // [1]

const swapName = string => `${string.split(" ").pop()}, ${string.slice(0, string.lastIndexOf(" "))}`;

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Andrew Seth Bruner'));
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"


const sequence = (size, startNumber) => {
  let array = [];
  let index = 1;

  while (index <= size) {
    array.push(index * startNumber);
    index++;
  }
  return array;
};
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []


const reverseSentence = (string) => string.split(" ").reverse().join(" ");
console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"


const reverseWords = (string) => {
  return string.split(" ").map((word) => {
    return word.length >= 5 ? word.split("").reverse().join("") : word;
  }).join(" ");
};
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

const reverse = (array) => {
  for (let index = 0; index < array.length; index++) {
    let word = array.pop();
    array.splice(index, 0, word);
  }
  return array;
};

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

console.log("---------");

const isBalanced = (string) => {
  const regex = /[()]/g;
  let array = string.match(regex) ?? [];
  let evenPair = array.filter(item => item === '(').length === array.filter(item => item === ')').length;
  if (!array.length) return true;
  let correctOrder = string.lastIndexOf('(') < string.lastIndexOf(')');
  //console.log(evenPair,correctOrder);
  //console.log(evenPair % 2 === 0, correctOrder);
  return evenPair && correctOrder;
};

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
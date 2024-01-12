/* eslint-disable max-len */
/*
Write a function that takes one argument, a positive integer, and
returns the sum of its digits. Do this without using for, while, or do...while loops -
instead, use a series of method calls to perform the sum.
*/

const sum = (number) => {
  return String(number)
    .split("")
    .reduce((a, b) => Number(a) + Number(b));
};

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

let wordNumberObject = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen"
};

const alphabeticNumberSort = (array) => {
  return array.slice().sort((a, b) => wordNumberObject[a].localeCompare(wordNumberObject[b]));
};

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

const multiplyAllPairs = (array1, array2) => {
  return array1.flatMap((number) => array2.map((num) => num * number)).sort((a, b) => a - b);
};

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

const leadingSubstrings = (string) => {
  return string.split("").map((_, index) => string.slice(0, index + 1));
};

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


const substrings = (string) => {
  return string.split("").flatMap((_, index) => leadingSubstrings(string.slice(index, string.length)));
};
console.log(substrings('abcde'));
console.log(substrings('hello'));


// returns
/*
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
  */

const palindromes = (string) => {
  return substrings(string).filter((word) => {
    if (word.length > 1 && word === word.split("").reverse().join("")) {
      return true;
    }
    return false;
  });
};

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

const sumOfSums = (array) => {
  return array.reduce((accumalator, _, index) => accumalator + [...array.slice(0, index + 1)].reduce((accu, curVal) => accu + curVal));
};

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35


const buyFruit = (array) => {
  return array.flatMap((subArray) => Array.from({ length: subArray[1] }, () => subArray[0]));
};
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

const transactionsFor = (id, transactionList) => {
  // let transactions = [];

  // for (let index in transactionList) {
  //   if (transactionList[index].id === id) {
  //     transactions.push(transactionList);
  //   }
  // }
  // return transactions;

  return transactionList.filter((object) => object.id === id);
};

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(105, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

const isItemAvailable = (id, transactionList) => {
  let quantity = transactionsFor(id, transactionList).reduce((accumalator, currentValue) => {
    if (currentValue.movement === 'in') {
      return accumalator + currentValue.quantity;
    }

    return accumalator - currentValue.quantity;
  }, 0);
  console.log(quantity);
  return quantity > 0;
};
console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
/* eslint-disable max-len */
//Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd.
//You may assume that the argument is a valid integer value.

let isOdd = (num) => {
  if (Math.abs(num) % 2 === 1) {
    return true;
  }
  return false;
};


console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

//Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

let counter2 = 1;

while (counter2 < 100) {
  //console.log(counter2);
  counter2 += 2;
}

//Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

let counter = 2;

while (counter < 100) {
  //console.log(counter);
  counter += 2;
}

//Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to
//the console in both square meters and square feet.

//Note: 1 square meter == 10.7639 square feet

const readline = require('readline-sync');

let length = Number(readline.question('Enter the length of the room in meters:'));

let width = Number(readline.question('Enter the width of the room in meters:'));

let area = length * width;

console.log(`The area of the room is ${area} square meters (${area * 10.7639} square feet).`);

//Create a simple tip calculator. The program should prompt for a bill amount and a tip rate.
//The program must compute the tip, and then log both the tip and the total amount of the bill to the console.
//You can ignore input validation and assume that the user will enter numbers.

// let bill = Number(readline.question('What is the bill?'));

// let tipPercentage = Number(readline.question('What is the tip percentage?'));

// let tip = (tipPercentage / 100) * bill;

// let totalBill = tip + bill;

// console.log(`The tip is $${tip} \nThe total is $${totalBill}`);

//Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to
//determine the sum or the product of
//all numbers between 1 and the entered integer, inclusive.

// let integer = Number(readline.question("Please enter an integer greater than 0: "));

// let sumOrProduct = readline.question("Enter 's' to compute the sum, or 'p' to compute the product. ");

// const values = [...Array(integer)].map((_, num) => num + 1);

// let answer = 0;

// if (sumOrProduct === 's') {
//   answer = values.reduce((accel, val) => accel + val);
//   sumOrProduct = 'sum';
// } else if (sumOrProduct === 'p') {
//   answer = values.reduce((accel, val) => accel * val);
//   sumOrProduct = 'product';
// } else {
//   console.log("invalid input");
// }

// console.log(`The ${sumOrProduct} of the integers between ${values[0]} and ${values[values.length - 1]} is ${answer}.`);


let shortLongShort = (string1, string2) => {
  let string1Length = string1.length;
  let string2Length = string2.length;

  if (string1Length > string2Length) {
    return string2 + string1 + string2;
  }

  return string1 + string2 + string1;

};

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"


let isLeapYear = (year) => {

  if (year < 1752 && year % 4 === 0) {
    return true;
  }

  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return (year % 4 === 0);
  }
};

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true

let multisum = (num) => {
  const values = [...Array(num)].map((_, num) => num + 1);

  let threeOrFive = values.filter((int) => int % 3 === 0 || int % 5 === 0);

  return threeOrFive.reduce((accel, val) => accel + val);
};


console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

let utf16Value = (string) => {
  if (!string) {
    return 0;
  }
  return string.split("").reduce((accel, val) => accel + val.charCodeAt(0), 0);
};

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0


// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

//const readline = require('readline-sync');


let greetings = (nameArray, jobObj) => {
  return `Hello ${nameArray.join(" ")}! Nice to have a ${jobObj.title} ${jobObj.occupation} around.`;
};

console.log(greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }));
// logs Hello, John Q Doe! Nice to have a Master Plumber around.


// let name = readline.question("What is your name? ");

// console.log(
//   name.endsWith('!')
//     ? `HELLO ${name.toUpperCase().replace(/!/g, '')}. WHY ARE WE SCREAMING?`
//     : `Hello ${name}.`
// );

// let multiply = (num1, num2) => num1 * num2;

// let numSquared = (num) => multiply(num, num);

// console.log(numSquared(6));

// let firstNumber = readline.question("==> Enter the first number: ");
// let secondNumber = readline.question("==> Enter the second number: ");

// let arithmetics = ['+', '-', '*', '/', '%', '**'];

// for (let operation of arithmetics) {
//   console.log(`${firstNumber} ${operation} ${secondNumber} = ${Math.floor(eval(firstNumber + operation + secondNumber))}`);
// }

let penultimate = (string) => string.split(" ").slice(-2, -1).join();
console.log(penultimate("last word"));
console.log(penultimate("Launch School is great!"));
console.log(penultimate("Launch School is great test test again test winner test!"));


console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

console.log("-------------------");

let xor = (val1, val2) => {
  if ((val1 && val2) || (!val1 && !val2)) {
    return false;
  }
  return true;
};

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true

console.log("-------------------");

let oddities1 = (array) => {
  let oddArray = [];
  for (let val of array) {
    if (array.indexOf(val) % 2 === 0) {
      oddArray.push(val);
    }
  }
  return oddArray;
};

let oddities = array => array.filter((val, index) => index % 2 === 0);

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []


console.log("-------------------");

//Teddy is 69 years old!
//20 - 120

let randomTeddyAge = () => {
  let age = Math.floor(Math.random() * (120 - 20 + 1)) + 20;
  console.log(`Teddy is ${age} years old!`);
};

randomTeddyAge();
randomTeddyAge();
randomTeddyAge();
randomTeddyAge();

console.log("-------------------");


//What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

// let age = readline.question("What is your age? ");
// let retire = readline.question("At what age would you like to retire? ");

// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();

// console.log(`It's ${currentYear}. You will retire in ${(retire - age) + currentYear}. \nYou have only ${retire - age} years of work to go!`);

console.log("-------------------");


let centerOf = (string) => {
  if (string.length % 2 === 1) {
    return string.slice(Math.floor(string.length / 2), Math.ceil(string.length / 2));
  }
  return string.slice((string.length / 2) - 1, (string.length / 2) + 1);
};

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"


console.log("-------------------");

let negative = num => Math.abs(num) * -1;


console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

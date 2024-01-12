
// displayTemplate();

/*
Sum of Numbers
Implement a function that calculates the sum of numbers inside of a string.
Example: "L12aun3ch Sch3oo45l" should output 63.

You can expect that the string will include only positive numbers.

PEDAC
PE
Given a input string, return a number
number to return is sum of all numbers that are included in the string

rules,
Inputs are only strings, and be any length
Inputs strings consists of alphanumeric characters or spaces
Consecitive number characters, make a number

D
Variable that will hold the sum of the numbers, start off with 0, and this it variable to be returned
Variable that will hold the numbers in a string form, start of with an empty string, 

A 
Reassign input string by value of itself, append by 'A'
declare sum and intialise with 0
declare currentNumberString and initialise it with empty string

Given a input string, loop for each character of this string
  If the current character gets converted to a number and it's not NaN
    Add the current character at the end of currentNumberString;
  else the current character gets converted to a number and it's a NaN
    If the length of currentNumberString is not empty
      Convert the currentNumberString into a number, add it our sum variable
    Reset the currentNumberString to a empty string

return sum variable
*/
function sumOfNumbers(string) {
  string += 'A';
  let sum = 0;
  let currentNumberString = '';

  for (let char of string.split("")) {
    if (!isNaN(char) && char !== " ") {
      //console.log(Number(char));
      currentNumberString += char;
    } else {
      if (currentNumberString.length) {
        sum += Number(currentNumberString);
        //console.log(sum);
      }
      currentNumberString = '';
    }
  }
  //console.log(string);
  return sum;
}


// Test Cases
console.log(sumOfNumbers("HI") === 0);
console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
console.log(sumOfNumbers("L12aun3ch Sch3oo45") === 63);
console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);


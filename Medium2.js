/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */

const letterPercentages = (string) => {
  let lower = string.match(/[a-z]/g) ? string.match(/[a-z]/g).length / string.length : 0;
  let upper = string.match(/[A-Z]/g) ? string.match(/[A-Z]/g).length / string.length : 0;
  return {
    lowercase:(lower * 100).toFixed(2),
    uppercase: (upper * 100).toFixed(2),
    neither: ((1 - (lower + upper)) * 100).toFixed(2)
  };
};

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// const triangle = (side1, side2, side3) => {
//   let triArray = [side1, side2, side3].sort((a, b) => a - b);
//   let isIso = side1 === side2 || side2 === side3;
//   let greater2 = triArray[0] + triArray[1] > triArray[2];

//   if (triArray.every((side) => side === side1)) {
//     return 'equilateral';
//   } else if (isIso &&  greater2) {
//     return 'isosceles';
//   } else if (greater2) {
//     return 'scalene';
//   } else {
//     return 'invalid';
//   }
// };

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"

const triangle = (angle1, angle2, angle3) => {
  let tri = [angle1, angle2, angle3].sort((a, b) => a - b);

  if (!tri[0] || tri.reduce((acc, cur) => acc + cur) !== 180) return 'invalid';
  if (tri[2] > 90) {
    return 'obtuse';
  } else if (tri[2] === 90) {
    return 'right';
  } else {
    return 'acute';
  }
};

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

const fridayThe13ths = (year) => {
  let count = 0;

  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);
    if (date.getDay() === 5) {
      count++;
    }
  }
  return count;
};

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

const uniqueNumbers = (array) => {
  for (let number of array) {
    if (array.indexOf(number) !== array.lastIndexOf(number)) {
      return false;
    }
  }
  return true;
};

const featured = (number) => {
  let remainder = number % 7;
  let unique = number + (7 - remainder);

  if (number > 9876543200) {
    return "There is no possible number that fulfills those requirements.";
  }

  while (true) {
    let uniqueArray = String(unique).split('');
    if (unique % 2 !== 0 && uniqueNumbers(uniqueArray)) {
      break;
    }
    unique += 7;
  }
  return unique;
};
console.log('hello');
// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
//console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."


const sumSquareDifference = (number) => {
  let array = Array.from({ length: number }, (_, index) => index + 1);
  return Math.pow(array.reduce((acc, cur) => acc + cur), 2) - array.reduce((acc, cur) => acc + (cur * cur));
};
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
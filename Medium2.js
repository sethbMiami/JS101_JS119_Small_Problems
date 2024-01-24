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


//'hello' => 'helLo'
//'hellololo => 'helLolOlo'

const bubbleSort = (array) => {
  let index = 0;

  while (true) {
    let firstNum = array[index];
    let secondNum = array[index + 1];

    if (firstNum > secondNum) {
      array[index] = secondNum;
      array[index + 1] = firstNum;
      index = 0;
      continue;
    }
    index++;

    if (index === array.length - 1) {
      break;
    }
  }
  return array;
};

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]


let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]


let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';


const longestSentence = (string) => {
  let array = string.split(/([?.!])/);
  let lengths = array.map((sentence) => sentence.split(' ').length);
  console.log(`This sentence has ${Math.max(...lengths)} words in it.`);
  return array.find((sentence) => sentence.split(' ').length === Math.max(...lengths)) + array[lengths.indexOf(Math.max(...lengths)) + 1];
};

console.log(longestSentence(longText));
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

console.log(longestSentence(longerText));
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

console.log(longestSentence("Where do you think you're going? What's up, Doc?"));
// Where do you think you're going?
//
// The longest sentence has 6 words.

console.log(longestSentence("To be or not to be! Is that the question?"));
// To be or not to be!
//
// The longest sentence has 6 words.

const is_prime = (number) => {
  let divisor = 2;
  let prime = false;

  if (number === 1) return false;
  while (true) {
    if (number === divisor) {
      prime = true;
      break;
    } else if (number % divisor === 0) {
      break;
    }
    divisor++;
  }
  return prime;
};


console.log(is_prime(1) === false);            // true
console.log(is_prime(2) === true);             // true
console.log(is_prime(3) === true);             // true
console.log(is_prime(4) === false);            // true
console.log(is_prime(5) === true);             // true
console.log(is_prime(6) === false);            // true
console.log(is_prime(7) === true);          // true
console.log(is_prime(8) === false);            // true
console.log(is_prime(9) === false);            // true
console.log(is_prime(10) === false);           // true
console.log(is_prime(23) === true);            // true
console.log(is_prime(24) === false);           // true
console.log(is_prime(997) === true);           // true
console.log(is_prime(998) === false);          // true
//console.log(is_prime(3_297_061) === true);     // true
//console.log(is_prime(23_297_061) === false);   // true
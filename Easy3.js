

let crunch = string => string.replace(/(.)\1+/g, "$1");

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""


let logInBox = (string) => {
  let count = string.length + 2;
  console.log(`+${"-".repeat(count)}+ \n|${" ".repeat(count)}| \n| ${string} | \n|${" ".repeat(count)}| \n+${"-".repeat(count)}+`);
};

logInBox('To boldly go where no one has gone before.');
logInBox("try this and this and how about this friend.try this and this and how about this friend.oh no what about now");
logInBox('');

const stringy = (num) => '10'.repeat(Math.ceil(num / 2)).slice(0, num);


console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

const triangle = (num) => {
  for (let int = num; int > 0; int--) {
    console.log(" ".repeat(int - 1) + "*".repeat((num - int) + 1));
  }
};


triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

// let twice = (num) => {
//   num = String(num);
//   if (num.slice(0, num.length / 2) === num.slice(num.length / 2)) {
//     return num;
//   }
//   return num * 2;
// };

const twice = (num) => {
  const strNum = String(num);
  return strNum.slice(0, strNum.length / 2) === strNum.slice(strNum.length / 2) ? strNum : num * 2;
};


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676


const getGrade = (grade1, grade2, grade3) => {
  let averageGrade = (grade1 + grade2 + grade3) / 3;

  if (averageGrade >= 90) {
    return 'A';
  } else if (averageGrade >= 80) {
    return 'B';
  } else if (averageGrade >= 70) {
    return 'C';
  } else if (averageGrade >= 60) {
    return 'D';
  } else {
    return 'F';
  }
};

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"

const cleanUp = (string) => string.replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ');


console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
console.log(cleanUp("&* how*& about  *&^ now?"));

//need to refactor
const century = (year) => {
  let cent = String(Math.ceil(year / 100));

  if ((cent > 20 && cent < 100 && cent.slice(-1) === "1") || cent.slice(-2) === "01") {
    console.log(cent + "st");
  } else if (cent === "2" || cent.slice(-2) === "02") {
    console.log(cent + "nd");
  } else if (cent === "3" || cent.slice(-2) === "03") {
    console.log(cent + "rd");
  } else {
    console.log(cent + "th");
  }
};

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
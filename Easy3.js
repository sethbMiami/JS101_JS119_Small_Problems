

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
/* eslint-disable max-len */
/* PEDAC
Write a function that takes a string argument and returns true if all of the alphabetic
characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

P -
  input = string
  output = boolean

  given a string, return true if every character in that string is uppercase

  E -
    ignore chars that are not alphabetic
    can be given an empty string which should evaluate to true
    spaces don't count either

  D -
    string
    regex

  A -
    given an inputString
    create a variable to hold the regex for all lower case letters
    iterate thru inputString
      if inputString includes a letter from the regex
        return false
    otherwise return true after the loop is finished

*/
const isUppercase = (string) => {
  return !/[a-z]/.test(string);
};

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

/* PEDAC
Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

P
  input - array of strings
  output - array of strings

  given an array of strings, return an array of same strings but with vowels removed

E
  rules-
    keep the same order of strings, and within each string same order of letters
    casing doesn't matter, remove upper or lower
    appear to be no spaces nor special chars

D
  array
  regex

A
  given input array of strings
    iterate thru strings
      iterate thru chars
        if char is vowel (look out for lower or upperCase)
          remove it
  return array of strings
*/

const removeVowels = (array) => {
  let vowels = 'aeiouAEIOU'.split('');
  return array.map((string) => string.split('').filter((char) => !vowels.includes(char)).join(''));
};

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

/* PEDAC
Write a function that takes a string and returns an object containing three properties: one representing the number of
characters in the string that are lowercase letters, one representing the number of characters that are uppercase
letters, and one representing the number of characters that are neither.

P -
  input - string
  output - object (3 keys, 3 values)
  given a string, create a key for lowercase, uppercase, neither and then add the number of occurences for each as the value

E -
  spaces and special chars will be counted as neither
  only uppercase for upper key
  only lower for lower key
  string can be empty

D -
  object
  array
  string

A -
  given a string
  create object with 3 keys, set values to zero
  create regex for lower
  creaet regex for upper

  iterate thru inputString
    if char is in lower regex
      increment lower key
    else if char is in upper regex
      increment upper key
    else
      increment neither key

  return object
*/

const letterCaseCount = (string) => {
  let caseCountObj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  caseCountObj.lowercase = string.match(/[a-z]/g) ? string.match(/[a-z]/g).length : 0;
  caseCountObj.uppercase = string.match(/[A-Z]/g) ? string.match(/[A-Z]/g).length : 0;
  caseCountObj.neither = string.match(/[^a-z]/gi) ? string.match(/[^a-zA-Z]/g).length : 0;

  // string.split('').forEach(element => {
  //   if (lowerRegex.includes(element)) {
  //     caseCountObj.lowercase++;
  //   } else if (upperRegex.includes(element)) {
  //     caseCountObj.uppercase++;
  //   } else {
  //     caseCountObj.neither++;
  //   }
  // });


  return caseCountObj;
};

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }


const wordCap = (string) => {
  return string.toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1));
};
console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'


const swapCase = (string) => {
  return string.split('').map((letter) => {
    if (letter === letter.toLowerCase()) return letter.toUpperCase();
    return letter.toLowerCase();
  }).join('');
};
console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

console.log('!@#$%%^'.toUpperCase());
console.log('!@#$%%^'.toLowerCase());

const staggeredCase = (string) => {
  return string.split('').map((letter, index) => {
    if (index % 2 === 0) return letter.toUpperCase();
    return letter.toLowerCase();
  }).join('');
};

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

const staggeredCase2 = (string) => {
  let alternate = true;
  let regex = /[a-z]/gi;
  let newString = [];
  for (let letter of string.split('')) {
    if (alternate && letter.match(regex)) {
      newString.push(letter.toUpperCase());
      alternate = false;
    } else if (letter.match(regex)) {
      newString.push(letter.toLowerCase());
      alternate = true;
    } else {
      newString.push(letter);
    }
  }
  return newString.join('');
};

console.log(staggeredCase2("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase2("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase2("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

const wordLengths = (string) => {
  return string ? string.split(' ').map((word) => {
    return word + ` ${word.length}`;
  }) : [];
};
console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []

const searchWord = (word, text) => {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  return text.match(regex).length || 0;
  // return text.toLowerCase()
  //   .split(' ')
  //   .filter((strWord) => strWord === word)
  //   .length;
};

const searchWord2 = (word, text) => {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  return text.replace(regex, `**${word.toUpperCase()}**`);
};

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3
console.log(searchWord2('sed', text));
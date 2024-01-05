

const palindrome = (num, s) => {
  let newArray = [];
  while (newArray.length < s) {
    if (num > 9 && num === Number(String(num).split("").reverse().join(""))) {
      newArray.push(num);
    }
    num++;
  }
  return newArray;
};

console.log(palindrome(6,4)); // [11,22,33,44]
console.log(palindrome(75,1)); // [77]
console.log(palindrome(101,2)); // [101,111]
console.log(palindrome(20,0)); // []
console.log(palindrome(0,4)); // [11,22,33,44]

let str = "0123456789";
console.log(str.substring(2, 5));
let array = [42, 43];
let returnY = array.splice(0, 1);
console.log(returnY);

let array1 = [1, 2];
let array2 = [1, 2];

console.log(array1.concat(array2));
console.log([1] + 2);

let arr = ['a', null, undefined, 'a'];
arr.length = 6;

console.log(Object.keys(arr).length === arr.length);


function foo(array, func) {
  let newArray = [];

  for (let index = 0; index < array.length; index += 1) {
    newArray[index] = func(array[index]);
  }

  return newArray;
}

foo([1, 2, 3], console.log);
let newObj = {
  a: 1,
  b: 2
};


const obj = { a: "able", b: "baker", c: "charley" };
let result = Object.keys(obj).map(value => value.toUpperCase());
// => [ 'ABLE', 'BAKER', 'CHARLEY' ]
console.log(result);
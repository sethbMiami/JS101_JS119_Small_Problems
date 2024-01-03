const dms = (angle) => {
  let minutes = (angle % 1) * 60;
  let seconds = (minutes % 1) * 60;
  return `${Math.floor(angle)}˚${minutes > 9 ? "" : 0}${Math.floor(minutes)}'${minutes > 9 ? "" : 0}${Math.floor(seconds)}"`;
};

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

const union = (array1, array2) => {
  return [...new Set(array1.concat(array2))];
};
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

const halvsies = (array) => {
  return [array.slice(0, Math.ceil(array.length / 2)), array.slice(Math.ceil(array.length / 2))];
};

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]


const findDup = (array) => {
  return array.filter((number) => array.indexOf(number) !== array.lastIndexOf(number))[0];
};
console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73

const interleave = (array1, array2) => {
  let both = [];
  array1.forEach((_, index) => {
    both.push(array1[index], array2[index]);
  });
  return both;
};
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

const interleave2 = (array1, array2) => {
  return array1.map((item, index) => [item, array2[index]]).flat();
};

console.log(interleave2([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

const multiplicativeAverage = (array) => {
  return (array.reduce((acc, currentValue) => acc * currentValue) / array.length).toFixed(3);
};

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

const multiplyList = (array1, array2) => {
  return array1.map((item, index) => item * array2[index]);
};

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

const digitList = number => [...String(number)].map(Number);


console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]


const countOccurrences = (array) => {
  let countObject = {};
  array.forEach((item) => {
    countObject.hasOwnProperty(item) ? countObject[item] += 1 : countObject[item] = 1;
  });
  for (let [key, value] of Object.entries(countObject)) {
    console.log(`${key} => ${value}`);
  }
};
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1

const average = (array) => {
  return Math.floor(array.reduce((acc, currentValue) => acc + currentValue) / array.length);
};

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
console.log("-------");


const timeOfDay = (time) => {
  let hours = (Math.floor(Math.abs(time) / 60)) % 24;
  let minutes = Math.abs(time) % 60;
  if (time >= 0) {
    return `${hours > 9 ? hours : "0" + hours}:${minutes > 9 ? minutes : "0" + minutes}`;
  }
  hours = 23 - hours;
  minutes = 60 - minutes;
  return `${hours > 9 ? hours : "0" + hours}:${minutes > 9 ? minutes : "0" + minutes}`;
};

// console.log(timeOfDay(0));
// console.log(timeOfDay(-3));
// console.log(timeOfDay(35));
// console.log(timeOfDay(-1437));
// console.log(timeOfDay(3000));
// console.log(timeOfDay(800));
// console.log(timeOfDay(-4231));

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");


console.log("-------");

const afterMidnight = (time) => {
  const HOURS = Number(time.slice(0, 2)) * 60;
  const MINUTES = Number(time.slice(3));
  return HOURS + MINUTES === 1440 ? 0 : HOURS + MINUTES;
};

const beforeMidnight = (time) => {
  const HOURS = Number(time.slice(0, 2)) * 60;
  const MINUTES = Number(time.slice(3));
  return HOURS + MINUTES === 0 ? 0 : 1440 - (HOURS + MINUTES);
};
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
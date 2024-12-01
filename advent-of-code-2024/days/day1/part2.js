const input = require("../../input/day1/part1");
let sum = 0;

const arr1 = input.input[0];
const arr2 = input.input[1];

const arr2Map = {};

arr2.forEach((num) => {
  if (arr2Map[num]) {
    arr2Map[num]++;
  } else {
    arr2Map[num] = 1;
  }
});

arr1.forEach((num) => {
  if (arr2Map[num]) {
    sum += arr2Map[num] * num;
  }
});

console.log(sum);

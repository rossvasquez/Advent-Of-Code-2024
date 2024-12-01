const input = require("../../input/day1/part1");
let sum = 0;

const arr1 = input.input[0].sort((a, b) => a - b);
const arr2 = input.input[1].sort((a, b) => a - b);

arr1.forEach((val, index) => {
  sum += Math.abs(val - arr2[index]);
});

console.log(sum);

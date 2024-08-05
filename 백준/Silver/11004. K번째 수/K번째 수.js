const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const rank = input[0].split(" ").map(Number)[1];
let arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
console.log(arr[rank - 1]);
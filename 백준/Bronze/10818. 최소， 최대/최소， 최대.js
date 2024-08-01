const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const array = input[1].split(" ");
console.log(
  Math.min(...array).toString() + " " + Math.max(...array).toString()
);
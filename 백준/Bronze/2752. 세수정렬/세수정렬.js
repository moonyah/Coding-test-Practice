const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const sorted = input.map(Number).sort((a, b) => a - b);
console.log(
  sorted[0].toString() + " " + sorted[1].toString() + " " + sorted[2]
);
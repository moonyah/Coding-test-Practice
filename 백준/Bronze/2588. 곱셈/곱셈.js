const data = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const a = data[0];
const a1 = a * data[1][2];
const a2 = a * data[1][1];
const a3 = a * data[1][0];

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a1 + a2 * 10 + a3 * 100);

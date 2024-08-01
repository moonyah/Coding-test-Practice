const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");let data = input.map(Number).map((a) => (a %= 42));
let set = new Set(data);
console.log([...set].length);
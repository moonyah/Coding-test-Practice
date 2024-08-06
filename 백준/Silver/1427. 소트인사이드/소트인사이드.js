const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
console.log(
  input[0]
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("")
);
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const total = input[1].split("").reduce((a, b) => Number(a) + Number(b));
console.log(total);
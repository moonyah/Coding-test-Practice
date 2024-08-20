const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let a = input[0].trim();
let b = input[1].trim();
let c = input[2].trim();
console.log(Number(a) + Number(b) - Number(c));
console.log(a + b - c);
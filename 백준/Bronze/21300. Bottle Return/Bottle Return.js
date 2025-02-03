let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let arr = input[0].split(" ").map(Number);
let total = arr.reduce((a, b) => a + b);
console.log(total * 5);

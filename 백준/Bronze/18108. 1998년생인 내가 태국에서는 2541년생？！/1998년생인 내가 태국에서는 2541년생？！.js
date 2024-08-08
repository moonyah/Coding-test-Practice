const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let year = Number(input[0]);
console.log(year - 543);
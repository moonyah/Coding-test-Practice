const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let total = Number(input[0]) * 3 + Number(input[1]) * 4 + Number(input[2]) * 5;
console.log(total);

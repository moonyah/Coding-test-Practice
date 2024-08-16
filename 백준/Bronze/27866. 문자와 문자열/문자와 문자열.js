const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let word = input[0].trim();
let n = Number(input[1]);
console.log(word[n - 1]);
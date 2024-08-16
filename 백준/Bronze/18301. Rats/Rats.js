const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [a, b, c] = input[0].split(" ").map(Number);
console.log(Math.floor(((a + 1) * (b + 1)) / (c + 1) - 1));
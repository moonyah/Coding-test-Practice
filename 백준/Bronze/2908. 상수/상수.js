const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [a, b] = input[0].split(" ");
let reverseA = [...a].reverse().join("");
let reverseB = [...b].reverse().join("");
console.log(Math.max(reverseA, reverseB));
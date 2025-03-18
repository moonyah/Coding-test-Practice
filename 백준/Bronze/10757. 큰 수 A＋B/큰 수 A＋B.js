let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [A, B] = input[0].split(" ").map(BigInt);
console.log((A + B).toString());

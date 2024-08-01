const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let num = Number(input[0]);
let array = input[1].split(" ").map(Number);

let maxScore = Math.max(...array);
let fakeArray = array
  .map((a) => (a = (a / maxScore) * 100))
  .reduce((a, b) => a + b);
console.log(fakeArray / num);
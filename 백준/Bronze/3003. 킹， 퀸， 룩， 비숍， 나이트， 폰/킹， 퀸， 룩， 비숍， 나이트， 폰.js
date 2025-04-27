let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let piece = input[0].split(" ").map(Number);
let rightSet = [1, 1, 2, 2, 2, 8];
let answer = [];
for (let i = 0; i < 6; i++) {
  answer.push(rightSet[i] - piece[i]);
}
console.log(answer.join(" "));

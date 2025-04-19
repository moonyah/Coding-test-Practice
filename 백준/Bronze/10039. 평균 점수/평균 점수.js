let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let sum = 0;
let score = 0;
for (let i = 0; i < 5; i++) {
  score = Number(input[i]);
  if (score < 40) {
    score = 40;
  }
  sum += score;
}
console.log(sum / 5);

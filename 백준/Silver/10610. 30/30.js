let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let num = input[0].split("").map(Number);
let sum = num.reduce((a, b) => a + b);
if (num.includes(0) && sum % 3 == 0) {
  let answer = num.sort((a, b) => b - a);
  console.log(answer.join(""));
} else {
  console.log(-1);
}

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let answer = 1;
for (let i = 1; i <= n; i++) {
  answer *= i;
}
console.log(answer);
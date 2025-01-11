const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
// 1 > 2 * 6 - 6 > 3 * 6 - 6;

let total = 1;
let answer = 1;
while (total < N) {
  total += answer * 6;
  answer++;
}
console.log(answer);

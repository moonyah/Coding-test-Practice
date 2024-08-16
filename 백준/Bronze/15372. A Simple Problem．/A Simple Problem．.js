const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let T = Number(input[0]);
let N = 0;
let answer = "";
for (let i = 1; i <= T; i++) {
  N = Number(input[i]);
  answer += N * N;
  answer += "\n";
}
console.log(answer);

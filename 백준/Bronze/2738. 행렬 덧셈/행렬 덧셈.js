const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let A = [];
let B = [];

let subArr = [];
for (let i = 1; i <= N * 2; i++) {
  subArr = input[i].trim().split(" ").map(Number);
  if (i <= N) {
    A.push(subArr);
  } else {
    B.push(subArr);
  }
}

let answer = "";
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    answer += A[i][j] + B[i][j];
    answer += " ";
  }
  answer += "\n";
}
console.log(answer);

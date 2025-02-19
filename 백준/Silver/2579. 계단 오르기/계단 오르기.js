const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let maxScore = Array(N).fill(0);
let Score = [];
for (let i = 1; i <= N; i++) {
  Score.push(Number(input[i]));
}
// console.log(Score);
maxScore[0] = Score[0];
maxScore[1] = Score[0] + Score[1];

maxScore[2] = Math.max(Score[0] + Score[2], Score[1] + Score[2]);

for (let n = 3; n < N; n++) {
  maxScore[n] = Math.max(
    maxScore[n - 2] + Score[n],
    maxScore[n - 3] + Score[n - 1] + Score[n]
  );
}
console.log(maxScore[N - 1]);

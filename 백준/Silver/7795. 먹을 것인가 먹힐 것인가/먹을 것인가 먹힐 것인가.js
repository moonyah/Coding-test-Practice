const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let testCase = Number(input[0]);
for (let i = 0; i < testCase; i++) {
  let line = i * 3 + 1;
  let answer = 0;
  let [N, M] = input[line].split(" ").map(Number);
  let arrA = input[line + 1].split(" ").map(Number);
  let arrB = input[line + 2].split(" ").map(Number);
  arrA.sort((a, b) => a - b);
  arrB.sort((a, b) => a - b);
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (arrA[j] > arrB[k]) {
        answer++;
      } else {
        break;
      }
    }
  }
  console.log(answer);
}

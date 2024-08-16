const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, X] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let answer = "";
for (let i = 0; i < N; i++) {
  if (arr[i] < X) {
    answer += arr[i] + " ";
  }
}
console.log(answer);
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
let sumArr = [0];
let sum = 0;
for (let i = 0; i < N; i++) {
  sum += arr[i];
  sumArr.push(sum);
}
// console.log(sumArr); // 누적합 배열
for (let i = 2; i < M + 2; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  let answer = sumArr[end] - sumArr[start - 1];
  console.log(answer);
}
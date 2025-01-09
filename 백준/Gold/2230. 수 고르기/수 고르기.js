const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b);
let start = 0;
let end = 0;
let answer = 2000000000;
while (end < N) {
  let gap = arr[end] - arr[start];
  if (gap >= M) {
    if (gap < answer) {
      answer = gap;
    }
    start++;
  } else {
    end++;
  }
}
console.log(answer);

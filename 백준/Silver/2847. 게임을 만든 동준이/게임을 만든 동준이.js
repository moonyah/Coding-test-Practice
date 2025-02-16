let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let arr = [];
for (let i = 1; i < N + 1; i++) {
  arr.push(Number(input[i]));
}
let answer = 0;
let temp = 0;
for (let i = N - 1; i > 0; i--) {
  if (arr[i] <= arr[i - 1]) {
    temp = arr[i - 1] - (arr[i] - 1);
  } else {
    temp = 0;
  }
  arr[i - 1] -= temp;
  answer += temp;
}
console.log(answer);

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, K] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i < N + 1; i++) {
  let [A, B] = input[i].split(" ").map(Number);
  arr.push(B - A);
}
arr.sort((a, b) => a - b);
if (arr[K - 1] <= 0) {
  console.log(0);
} else {
  console.log(arr[K - 1]);
}

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let arr = [];
for (let i = 0; i < N; i++) {
  arr.push(Number(input[i + 1]));
}
arr.sort((a, b) => b - a);

let max = 0;
for (let i = 0; i < N; i++) {
  if (max < arr[i] * (i + 1)) {
    max = arr[i] * (i + 1);
  }
}
console.log(max);

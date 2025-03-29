const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let M = Number(input[1]);
let arr = input[2].split(" ").map(Number);
let count = 0;
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (arr[i] + arr[j] === M) {
      count++;
    }
  }
}
console.log(count);

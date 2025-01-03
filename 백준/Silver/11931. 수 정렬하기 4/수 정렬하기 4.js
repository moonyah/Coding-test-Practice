const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);

let arr = Array(2000001).fill(0); // 0 ~ 2000000

for (let i = 1; i < N + 1; i++) {
  let num = Number(input[i]);
  arr[num + 1000000] = 1;
}
let answer = "";
for (let i = 2000000; i >= 0; i--) {
  if (arr[i]) {
    answer += i - 1000000 + "\n";
  }
}
console.log(answer);
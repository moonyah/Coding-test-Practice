const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = input[0];
let arr = input[1].split(" ");
let v = input[2];
let answer = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] == v) {
    answer++;
  }
}
console.log(answer);
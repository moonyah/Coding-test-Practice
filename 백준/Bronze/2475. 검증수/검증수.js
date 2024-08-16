const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let arr = input[0].split(" ").map(Number);

let answer = 0;
for (let i = 0; i < 5; i++) {
  answer += arr[i] * arr[i];
}
console.log(answer % 10);
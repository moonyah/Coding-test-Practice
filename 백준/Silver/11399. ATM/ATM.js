const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const num = Number(input[0]);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let result = 0;
for (let i = 1; i <= num; i++) {
  result += arr[i - 1] * i;
}
console.log(result);

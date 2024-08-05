const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const cases = input.map(Number)[0];
const arr = input
  .map(Number)
  .slice(1)
  .sort((a, b) => a - b);

let answer = "";
for (let i = 0; i < cases; i++) {
  answer += arr[i] + "\n";
}
console.log(answer);
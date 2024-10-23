const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let x = Number(input[2]);
let answer = 0;
for (let i = 0; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    if (arr[i] + arr[j] === x) {
      answer++;
    }
  }
}
console.log(answer);

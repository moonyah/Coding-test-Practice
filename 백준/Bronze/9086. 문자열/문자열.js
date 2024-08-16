const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let len = 0;
let word = [];
for (let i = 1; i <= n; i++) {
  word = input[i].trim().split("");
  len = word.length;
  console.log(word[0] + word[len - 1]);
}

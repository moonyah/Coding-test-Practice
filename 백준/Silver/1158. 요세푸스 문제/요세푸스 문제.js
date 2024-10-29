const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [N, K] = input[0].split(" ").map(Number);
// console.log(N, K);
let arr = Array(N)
  .fill(1)
  .map((a, b) => (a = b + 1));
// arr.map((a, b) => (a = b + 1));
let count = 0;
let temp = [];
let answer = [];
let answerCount = 0;
while (answerCount < N) {
  if (count === K - 1 && arr.length > 0) {
    answer.push(arr.shift());
    answerCount++;
    count = 0;
  } else {
    if (arr.length === 0) {
      arr = temp;
      temp = [];
    } else {
      temp.push(arr.shift());
      count++;
    }
  }
}
console.log("<" + answer.join(", ") + ">");
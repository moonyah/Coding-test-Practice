const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const wordNum = input.map(Number)[0];

let arr = [];
for (let i = 1; i <= wordNum; i++) {
  arr.push(input[i].trim());
}

let minWordArr = [...new Set(arr)];

let sortedArr = [];
sortedArr = minWordArr.sort(function (a, b) {
  if (a.length - b.length > 0) return 1;
  if (a.length - b.length < 0) return -1;
  if (a.length == b.length) {
    if (a.toString() > b.toString()) return 1;
    else return -1;
  }
});

let answer = "";
for (let i = 0; i < sortedArr.length; i++) {
  answer += sortedArr[i] + "\n";
}
console.log(answer);

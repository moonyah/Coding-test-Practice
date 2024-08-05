const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let testCases = input[0];
let arr = [];
for (let i = 1; i <= testCases; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  arr.push([a, b]);
}

newArr = arr.sort(([a1, a2], [b1, b2]) => a2 - b2 || a1 - b1);

let answer = "";
for (let i = 0; i < testCases; i++) {
  answer += newArr[i][0] + " " + newArr[i][1] + "\n";
}
console.log(answer);
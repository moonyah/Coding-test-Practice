const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let uniqueArr = [...new Set(arr)];

let result = [];
let sequence = [];

function recursion(depth, start) {
  if (depth === M) {
    result.push(sequence.join(" "));
    return;
  }
  for (let i = start; i < uniqueArr.length; i++) {
    sequence.push(uniqueArr[i]);
    recursion(depth + 1, i);
    sequence.pop();
  }
}

recursion(0, 0);
console.log(result.join("\n"));
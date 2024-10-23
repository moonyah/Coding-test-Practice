let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let K = Number(input[0]);
let stack = [];
for (let i = 1; i < K + 1; i++) {
  let num = Number(input[i].trim());
  if (num === 0) {
    stack.pop();
  } else {
    stack.push(num);
  }
}
console.log(stack.reduce((a, b) => a + b, 0));
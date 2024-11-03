const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
let stack = [];
let answer = 0;
for (let i = 1; i < N + 1; i++) {
  let str = input[i].trim();
  stack = [];
  for (let j of str) {
    if (j !== stack[stack.length - 1]) {
      stack.push(j);
    } else {
      stack.pop();
    }
  }
  // console.log(stack);
  if (stack.length === 0) {
    answer++;
  }
}
console.log(answer);

const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let T = Number(input[0]);
let stack = [];
let str = "";
for (let i = 1; i < T + 1; i++) {
  str = input[i].toString().trim();
  stack = [];
  for (let j of str) {
    if (j === "(") {
      stack.push("(");
    }
    if (j === ")") {
      if (stack.length === 0) {
        stack.push(")");
      }
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      }
    }
  }
  if (stack.length === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

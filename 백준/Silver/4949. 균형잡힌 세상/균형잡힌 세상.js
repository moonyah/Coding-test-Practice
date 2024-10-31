const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let line = 0;
let stack = [];
let checkNo = false;
while (input[line] !== ".") {
  stack = [];
  answer = "";
  checkNo = false;
  for (let i of input[line]) {
    if (i === ".") {
      break;
    }
    if (i === "(" || i === "[") {
      stack.push(i);
    }
    if (i === ")") {
      if (stack.length > 0 && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        checkNo = true;
        break;
      }
    }
    if (i === "]") {
      if (stack.length > 0 && stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        checkNo = true;
        break;
      }
    }
  }
  if (checkNo || stack.length > 0) {
    console.log("no");
  } else {
    console.log("yes");
  }
  line++;
}

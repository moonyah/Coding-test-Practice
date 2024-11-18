let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let str = input[0];

let stack = [];
let answer = 0;
let temp = 1;
for (let i = 0; i < str.length; i++) {
  if (str[i] === "(") {
    stack.push("(");
    temp *= 2;
  } else if (str[i] === ")") {
    if (str[i - 1] === "(") {
      answer += temp;
    }
    if (stack.length === 0 || stack[stack.length - 1] !== "(") {
      answer = 0;
      break;
    }
    stack.pop();
    temp /= 2;
  } else if (str[i] === "[") {
    stack.push("[");
    temp *= 3;
  } else if (str[i] === "]") {
    if (str[i - 1] === "[") {
      answer += temp;
    }
    if (stack.length === 0 || stack[stack.length - 1] !== "[") {
      answer = 0;
      break;
    }
    stack.pop();
    temp /= 3;
  }
}
if (stack.length !== 0) {
  answer = 0;
}
console.log(answer);

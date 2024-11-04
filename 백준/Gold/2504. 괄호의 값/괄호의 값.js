const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let str = input[0];
let stack = [];
let answer = 0;
let temp = 1;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "(") {
    temp *= 2;
    stack.push("(");
  } else if (str[i] === "[") {
    temp *= 3;
    stack.push("[");
  } else if (str[i] === ")") {
    if (stack.length === 0 || stack[stack.length - 1] !== "(") {
      answer = 0;
      break;
    }
    if (str[i - 1] === "(") {
      answer += temp;
    }
    temp /= 2;
    stack.pop();
  } else if (str[i] === "]") {
    if (stack.length === 0 || stack[stack.length - 1] !== "[") {
      answer = 0;
      break;
    }
    if (str[i - 1] === "[") {
      answer += temp;
    }
    temp /= 3;
    stack.pop();
  }
}

if (stack.length !== 0) {
  console.log(0);
} else {
  console.log(answer);
}

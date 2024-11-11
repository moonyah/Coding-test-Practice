const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let str = input[0];
let stack = [];
let answer = 0;
let bar = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === "(") {
    stack.push("(");
    bar++;
  } else if (str[i] === ")") {
    if (str[i - 1] === "(") {
      stack.pop();
      bar--;
      answer += bar;
    } else if (stack[stack.length - 1] == "(") {
      bar--;
      answer += 1;
    } else {
      console.log("error");
    }
  }
  // console.log(bar, stack, answer);
}
console.log(answer);
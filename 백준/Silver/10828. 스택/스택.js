let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
let answer = "";
let stack = [];
for (let i = 1; i < 1 + N; i++) {
  let [order, num] = input[i].trim().split(" ");
  if (order === "push") {
    stack.push(num);
  }
  if (order === "pop") {
    if (stack.length === 0) {
      answer += -1 + "\n";
    } else {
      answer += stack.pop(num) + "\n";
    }
  }
  if (order === "size") {
    answer += stack.length + "\n";
  }
  if (order === "empty") {
    if (stack.length === 0) {
      answer += 1 + "\n";
    } else {
      answer += 0 + "\n";
    }
  }
  if (order === "top") {
    if (stack.length === 0) {
      answer += -1 + "\n";
    } else {
      let last = stack[stack.length - 1];
      answer += last + "\n";
    }
  }
}

console.log(answer);
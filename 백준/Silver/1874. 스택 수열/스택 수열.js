let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let n = Number(input[0]);
let arr = [];
for (let i = 1; i < 1 + n; i++) {
  arr.push(Number(input[i]));
}

let tempStack = [];
let inNum = 1;
let answer = "";
let index = 0;

while (true) {
  if (inNum > n) {
    if (tempStack[tempStack.length - 1] !== arr[index]) {
      console.log("NO");
      return;
    }
    if (tempStack.length === 0) {
      console.log(answer);
      return;
    }
  }
  
  if (tempStack[tempStack.length - 1] === arr[index]) {
    tempStack.pop();
    answer += "-" + "\n";
    index++;
  } else {
    tempStack.push(inNum);
    answer += "+" + "\n";
    inNum++;
  }
}
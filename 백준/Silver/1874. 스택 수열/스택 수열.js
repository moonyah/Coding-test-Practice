let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let n = Number(input[0]);
let arr = [];
for (let i = 1; i < 1 + n; i++) {
  arr.push(Number(input[i]));
}

let tempStack = [];
let inNum = 1;
let answer = "";

while (true) {
  if (inNum > n && tempStack[tempStack.length - 1] !== arr[0]) {
    console.log("NO");
    return;
  }
  if (inNum > n && tempStack.length === 0) {
    console.log(answer);
    return;
  }
  if (tempStack[tempStack.length - 1] === arr[0]) {
    tempStack.pop();
    answer += "-" + "\n";
    arr.shift();
    inNum--;
  } else {
    tempStack.push(inNum);
    answer += "+" + "\n";
  }

  inNum++;
}

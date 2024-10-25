const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let orderNum = Number(input[1]);

let leftStack = [...input[0].trim()];
let rightStack = [];

for (let i = 2; i < orderNum + 2; i++) {
  let [command, char] = input[i].trim().split(" ");
  
  if (command === "L") {
    if (leftStack.length > 0) {
      rightStack.push(leftStack.pop());
    }
  } else if (command === "D") {
    if (rightStack.length > 0) {
      leftStack.push(rightStack.pop());
    }
  } else if (command === "B") {
    leftStack.pop();
  } else if (command === "P") {
    leftStack.push(char);
  }
}

// 최종 결과를 출력
console.log(leftStack.join("") + rightStack.reverse().join(""));

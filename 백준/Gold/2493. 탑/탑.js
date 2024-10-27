const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
let arr = input[1].split(" ").map((a, b) => (a = [Number(a), b + 1]));
let stack = [];
let answer = [];
let count = 0;
let stackLen = 0;
let x = 0;
for (let i = 0; i < N; i++) {
  count = i;
  while (true) {
    if (stackLen === 0) {
      answer.push(0);
      stack.push(arr[i]);
      stackLen++;
      break;
    } else if (stack[stackLen - 1][0] <= arr[i][0]) {
      stack.pop();
      stackLen--;
    } else {
      x = stack[stackLen - 1][1];
      stack.push(arr[i]);
      stackLen++;
      answer.push(x);
      break;
    }
  }
}

console.log(answer.join(" "));


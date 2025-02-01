let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let arr = [];
for (let i = 1; i < N + 1; i++) {
  arr.push(Number(input[i]));
}
// console.log(arr);
let stack = [];
let i = 0;
let answer = 0;
let count = 0;
while (stack.length >= 0 && i <= N) {
  if (stack.length === 0) {
    stack.push(arr[i]);
    i++;
    count = 0;
  }
  if (arr[i] < stack[stack.length - 1]) {
    stack.push(arr[i]);
    i++;
    count++;
  } else {
    stack.pop();
    answer += count;
    count--;
  }
  // console.log(i, stack, answer);
}
console.log(answer);

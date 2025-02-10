let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let arr = input[1].split(" ").map(Number);

arr = arr.map((value, index) => [value, index]);

let stack = [];
let answer = Array(N).fill(-1);

for (let i = 0; i < N; i++) {
  while (stack.length > 0 && stack[stack.length - 1][0] < arr[i][0]) {
    let [_, idx] = stack.pop();
    answer[idx] = arr[i][0];
  }
  stack.push(arr[i]);
}

console.log(answer.join(" "));

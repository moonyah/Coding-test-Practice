const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
let queue = Array(N)
  .fill(1)
  .map((a, b) => (a = b + 1));

let rest = N;
let startIdx = 0;
while (rest > 1) {
  // queue.shift();
  startIdx++;
  startIdx++;
  queue.push(queue[startIdx - 1]);
  rest--;
  // console.log(queue);
}
console.log(queue.pop());
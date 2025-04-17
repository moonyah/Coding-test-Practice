const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, K] = input[0].split(" ").map(Number);
let queue = Array(N)
  .fill(0)
  .map((a, b) => (a = b + 1));
let count = 0;
let newQueue = [];
let answer = [];
while (true) {
  let curr = queue.shift();
  if (curr) {
    if (count < K - 1) {
      newQueue.push(curr);
      count++;
    } else {
      answer.push(curr);
      count = 0;
    }
  } else {
    queue = newQueue;
    newQueue = [];
  }
  if (queue.length === 0 && newQueue.length === 0) break;
}
console.log(`<${answer.join(", ")}>`);

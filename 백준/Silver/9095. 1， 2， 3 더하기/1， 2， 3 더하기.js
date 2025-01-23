const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let testCases = Number(input[0]);
for (let i = 1; i < testCases + 1; i++) {
  let num = dp(Number(input[i]));
  console.log(num);
}

function dp(num) {
  const addCases = [1, 2, 3];
  let queue = [0];
  let count = 0;
  while (queue.length > 0) {
    let curr = queue.shift();
    for (let i of addCases) {
      if (curr + i === num) {
        count++;
      } else if (curr + i < num) {
        queue.push(curr + i);
      }
    }
  }
  return count;
}

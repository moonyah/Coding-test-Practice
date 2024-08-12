const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let total = Number(input[0]);
let n = Number(input[1]);

// console.log(total, n);
let calculateTotal = 0;
for (let i = 1; i <= n; i++) {
  let [a, b] = input[i + 1].split(" ").map(Number);
  calculateTotal += a * b;
}

console.log(calculateTotal === total ? "Yes" : "No");
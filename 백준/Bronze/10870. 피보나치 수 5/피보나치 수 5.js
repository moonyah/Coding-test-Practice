let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let fibonacci = Array(21).fill(0);
fibonacci[0] = 0;
fibonacci[1] = 1;
for (let i = 2; i <= 20; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
let n = Number(input[0]);
console.log(fibonacci[n]);
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
function recursion(n) {
  if (n < 5) return 0;
  return Math.floor(n / 5) + recursion(Math.floor(n / 5));
}
console.log(recursion(N));

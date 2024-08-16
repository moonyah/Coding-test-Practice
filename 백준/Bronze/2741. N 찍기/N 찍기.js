const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
for (let i = 1; i <= n; i++) {
  console.log(i);
}
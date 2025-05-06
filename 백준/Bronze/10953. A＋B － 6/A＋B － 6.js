const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  let [A, B] = input[i].trim().split(",").map(Number);
  console.log(A + B);
}

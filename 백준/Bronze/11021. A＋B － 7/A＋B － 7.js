const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let num = Number(input[0]);
for (let i = 1; i <= num; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  console.log(`Case #${i}: ${a + b}`);
}

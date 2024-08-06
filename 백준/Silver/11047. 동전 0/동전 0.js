const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [coinTypNum, total] = input[0].split(" ").map(Number);
let result = 0;
for (let i = coinTypNum; i > 0; i--) {
  result += Math.floor(total / input[i]);
  total = total % input[i];
}
console.log(result);
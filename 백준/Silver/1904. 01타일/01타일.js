const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const num = parseInt(input);

let memo = {};
for (let i = 1; i <= num; i++) {
  if (i === 1) {
    memo[1] = 1;
  } else if (i === 2) {
    memo[2] = 2;
  } else {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 15746;
  }
}
console.log(memo[num]);
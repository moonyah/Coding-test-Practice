const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
let wine = [];
for (let i = 1; i <= n; i++) {
  wine.push(Number(input[i]));
}

let dp = {};
for (let i = 1; i <= n; i++) {
  if (i === 1) {
    dp[1] = wine[0];
  } else if (i === 2) {
    dp[2] = wine[0] + wine[1];
  } else if (i === 3) {
    dp[3] = Math.max(wine[0] + wine[2], wine[1] + wine[2], wine[0] + wine[1]);
  } else {
    // 3잔 이상 있을 경우
    dp[i] = Math.max(
      dp[i - 1],
      dp[i - 2] + wine[i - 1],
      dp[i - 3] + wine[i - 2] + wine[i - 1]
    );
  }
}

console.log(dp[n]);

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);

let cost = [];
for (let i = 1; i <= N; i++) {
  cost.push(input[i].trim().split(" ").map(Number));
}
let dp = Array.from({ length: N }, () => Array(3).fill(0));
dp[0] = cost[0];

for (let i = 1; i < N; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + cost[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + cost[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + cost[i][2];
}
console.log(Math.min(dp[N - 1][0], dp[N - 1][1], dp[N - 1][2]));

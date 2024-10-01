const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [n, m] = input[0].split(" ").map((a) => Number(a));
let arr = input[1].split(" ").map((a) => Number(a));
let restArr = Array(m).fill(0);
let sumValue = 0;
let result = 0;
for (let i = 0; i < n; i++) {
  sumValue += arr[i];
  if (sumValue % m === 0) {
    result++;
  }
  result += restArr[sumValue % m];
  restArr[sumValue % m]++;
}
console.log(result);

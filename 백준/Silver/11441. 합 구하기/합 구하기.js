const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map((a) => Number(a));
let m = Number(input[2]);

let ijArr = [];
for (let i = 0; i < m; i++) {
  ijArr.push(input[3 + i].split(" ").map((a) => Number(a)));
}
// console.log(ijArr);

let prefixSum = [0];
let sumValue = 0;

for (let i = 0; i < n; i++) {
  sumValue += arr[i];
  prefixSum.push(sumValue);
}
// console.log(prefixSum);

for (let i = 0; i < m; i++) {
  let a = ijArr[i][0];
  let b = ijArr[i][1];
  console.log(prefixSum[b] - prefixSum[a - 1]);
}

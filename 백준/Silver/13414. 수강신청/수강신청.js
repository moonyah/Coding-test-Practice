const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let obj = {};
let [K, L] = input[0].split(" ").map(Number);
for (let i = 1; i <= L; i++) {
  let data = input[i].trim();
  obj[data] = i;
}
let arr = [];
for (let i in obj) {
  arr.push([obj[i], i]);
}
arr.sort((a, b) => a[0] - b[0]);
for (let i = 0; i < K; i++) {
  if (!arr[i]) break;
  console.log(arr[i][1]);
}

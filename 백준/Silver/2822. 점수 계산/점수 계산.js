const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let arr = [];
for (let i = 0; i < 8; i++) {
  arr.push([i + 1, Number(input[i])]);
}
arr.sort((a, b) => b[1] - a[1]);
let sum = 0;
let sumArr = [];
for (let i = 0; i < 5; i++) {
  sum += arr[i][1];
  sumArr.push(arr[i][0]);
}
console.log(sum);
sumArr.sort((a, b) => a - b);
console.log(sumArr.join(" "));

let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let arr = [];
let sum = 0;
for (let i = 0; i < 5; i++) {
  let num = Number(input[i]);
  sum += num;
  arr.push(num);
}
arr.sort((a, b) => a - b);
console.log(sum / 5);
console.log(arr[2]);

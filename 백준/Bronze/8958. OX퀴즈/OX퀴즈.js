const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let cases = Number(input[0]);
for (let i = 1; i <= cases; i++) {
  let arr = input[i].trim().split("X");
  arr = arr.map((a) => a.length);
  arr = arr.map((a) => (a * (a + 1)) / 2);
  console.log(arr.reduce((a, b) => a + b));
}
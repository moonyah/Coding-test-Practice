const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let multiplication = (a * b * c).toString().split("");
let arr = Array(10).fill(0);
for (let i = 0; i < multiplication.length; i++) {
  arr[Number(multiplication[i])]++;
}
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
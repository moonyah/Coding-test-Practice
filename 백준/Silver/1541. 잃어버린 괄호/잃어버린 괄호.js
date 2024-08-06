const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let mArr = input[0].split("-");

let arr = [];
for (let i = 0; i < mArr.length; i++) {
  let pArr = mArr[i].split("+").reduce((a, b) => Number(a) + Number(b));
  arr.push(pArr);
}
let arr2 = arr.map(Number);

let answer = arr2[0];
for (let i = 1; i < arr.length; i++) {
  answer -= arr[i];
}
console.log(answer);
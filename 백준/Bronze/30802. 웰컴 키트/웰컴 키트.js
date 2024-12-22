// 같은 사이즈는 T, 펜은 P
const input = require("fs").readFileSync('dev/stdin').toString().split("\n");
const N = input[0].trim();
const numBySize = [...input[1].trim().split(" ").map(Number)];
const [T, P] = [...input[2].trim().split(" ")];
// console.log(N, numBySize, T, P);
let orderTNum = 0;

for (let i of numBySize) {
  if (i % T === 0) {
    orderTNum += Math.floor(i / T);
  } else {
    orderTNum += Math.floor(i / T) + 1;
  }
}
console.log(orderTNum);

let orderPUnit = 0;
let orderPEach = 0;

orderPUnit = Math.floor(N / P);
orderPEach = N - orderPUnit * P;

console.log(orderPUnit, orderPEach);

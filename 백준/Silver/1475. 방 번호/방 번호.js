// 한 세트 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (6이랑 9는 뒤집에서 사용 가능)
// 1,000,000보다 작거나 같은 자연수
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let num = input[0].split("").map(Number);
let countArr = Array(10).fill(0);
let sixNineNum = 0;
for (let i of num) {
  if (i === 6 || i === 9) {
    sixNineNum++;
  } else {
    countArr[i]++;
  }
}
let max = Math.max(...countArr, Math.ceil(sixNineNum / 2));
console.log(max);

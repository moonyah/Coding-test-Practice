const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]); // 좌석의 개수
let M = Number(input[1]); // 고정석의 개수
let changeNum = Array(41).fill(0);
// 좌석이 index일 때 바꿔 앉는 가짓수
changeNum[0] = 1;
changeNum[1] = 1;
for (let i = 2; i < 41; i++) {
  changeNum[i] = changeNum[i - 1] + changeNum[i - 2];
}
// console.log(changeNum);

let seatGapArr = [];
let initial = 0;
for (let i = 2; i < M + 2; i++) {
  seatGapArr.push(Number(input[i]) - initial - 1);
  initial = Number(input[i]);
}
seatGapArr.push(N - Number(input[M + 1]));
// console.log(seatGapArr);

let answer = 1;
for (let i of seatGapArr) {
  answer *= changeNum[i];
}
console.log(answer);

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const num = Number(input[0]);
let a = Number(input[1]);
for (let i = 1; i <= num; i++) {
  a = Number(input[i]);
  let f0 = 0;
  let f1 = 1;
  let n = 0;
  let arr = [];
  //  1 ≤ n ≤ 1,000,000,000의 피보나치 수 나열하기
  while (n < 1000000000) {
    n = f0 + f1;
    if (n > 1000000000) {
      break;
    }
    arr.push(n);

    f0 = f1;
    f1 = n;
  }
  arr.sort((a, b) => b - a);

  let answer = [];
  while (a > 0) {
    for (let i of arr) {
      if (i <= a) {
        answer.push(i);
        a -= i;
      }
    }
  }
  console.log(answer.sort((a, b) => a - b).join(" "));
}

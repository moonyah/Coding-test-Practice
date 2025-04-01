const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let arrN = [];
for (let i = 1; i <= N; i++) {
  arrN.push(Number(input[i]));
}
arrN.sort((a, b) => a - b);
// console.log(arrN);
// 2개의 수의 합을 set으로 저장한다.
// 2개의 수의 차가 set에 있는지 확인한다. (이 때 가장 큰 수를 기억)

let twoNumSumSet = new Set();
for (let i = 0; i < N; i++) {
  for (let j = i; j < N; j++) {
    let sum = arrN[i] + arrN[j];
    if (sum < arrN[N - 1]) {
      twoNumSumSet.add(sum);
    }
  }
}
// console.log(twoNumSumSet);
let answer = false;
for (let i = N - 1; i >= 0; i--) {
  let largeNum = arrN[i];
  for (let j = i - 1; j >= 0; j--) {
    let gap = largeNum - arrN[j];
    if (twoNumSumSet.has(gap)) {
      console.log(largeNum);
      answer = true;
      break;
    }
  }
  if (answer) break;
}

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let obj = {};
for (let i = 1; i < N + 1; i++) {
  let curr = input[i].trim();
  if (!obj[curr]) {
    obj[curr] = 1;
  } else {
    obj[curr] += 1;
  }
}
// console.log(obj);
let maxNum = 0;
for (let i in obj) {
  if (obj[i] > maxNum) {
    maxNum = obj[i];
  }
}
// console.log("maxNum", maxNum);
let answerArr = [];
for (let i in obj) {
  if (obj[i] == maxNum) {
    answerArr.push(i);
  }
}
answerArr.sort((a, b) => (BigInt(a) > BigInt(b) ? 1 : -1));
console.log(answerArr[0].toString());

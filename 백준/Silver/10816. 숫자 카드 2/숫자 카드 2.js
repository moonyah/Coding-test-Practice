const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let haveNumArr = input[1].split(" ").map(Number);
let M = Number(input[2]);
let findNumArr = input[3].split(" ").map(Number);

let haveNum = {};
for (let i = 0; i < N; i++) {
  if (haveNum[haveNumArr[i]]) {
    haveNum[haveNumArr[i]]++;
  } else {
    haveNum[haveNumArr[i]] = 1;
  }
}
// console.log(haveNum);

let answer = [];
for (let i = 0; i < M; i++) {
  if (haveNum[findNumArr[i]]) {
    answer.push(haveNum[findNumArr[i]]);
  } else {
    answer.push(0);
  }
}
console.log(answer.join(" "));

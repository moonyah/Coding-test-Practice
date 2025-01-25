const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let inputNum = input.length;
let arr = [];
for (let i = 0; i < inputNum; i++) {
  if (input[i].trim()) {
    arr.push(...input[i].trim().split(" "));
  }
}
// 한 줄에 원소가 0개 주어질 수 있고, 이로 인해 빈 줄이 주어질 수 있음
arr.shift();
let answerArr = [];
for (let i of arr) {
  let reverseNum = i.split("").reverse().join("");
  answerArr.push(BigInt(reverseNum));
}
answerArr.sort((a, b) => (BigInt(a) - BigInt(b) > 0 ? 1 : -1));
for (let i of answerArr) {
  console.log(i.toString());
}

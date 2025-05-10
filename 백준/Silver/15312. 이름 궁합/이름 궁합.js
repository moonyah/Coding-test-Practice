const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let lineCount = [
  3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1,
];
let A = input[0].trim().split("");
let B = input[1].trim().split("");
let numArr = [];
for (let i = 0; i < A.length; i++) {
  numArr.push(lineCount[A[i].charCodeAt() - 65]);
  numArr.push(lineCount[B[i].charCodeAt() - 65]);
}

function oneSumTask(numArr) {
  let newArr = [];
  for (let i = 0; i < numArr.length - 1; i++) {
    let sum = numArr[i] + numArr[i + 1];
    newArr.push(sum % 10);
  }
  return newArr;
}

while (true) {
  let sumTask = oneSumTask(numArr);
  numArr = sumTask;
  if (sumTask.length === 2) {
    console.log(sumTask.join(""));
    break;
  }
}

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let stack = [N];
let front = 0;
let minVisit = Array(1000001).fill(0); // 최소 몇 번째로 도달하는지 기록

while (front < stack.length) {
  let curr = stack[front];
  let tempArr = [];
  if (minVisit[curr] === 0) minVisit[curr]++;

  if (curr % 3 === 0) {
    tempArr.push(curr / 3);
  }
  if (curr % 2 === 0) {
    tempArr.push(curr / 2);
  }
  tempArr.push(curr - 1);

  for (let i = 0; i < tempArr.length; i++) {
    let temp = tempArr[i];
    if (minVisit[temp] === 0 || minVisit[temp] > minVisit[curr] + 1) {
      minVisit[temp] = minVisit[curr] + 1;
      stack.push(temp);
    }
  }
  front++;
}

console.log(minVisit[1] - 1);

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// DNA 문자열 {'A', 'C', 'G', 'T'}
// 부분 문자열로 뽑아야 한다.
// 만들 수 있는 종류의 수 구하자
let [S, P] = input[0].split(" ").map(Number);
let tempArr = input[1].trim();
let minMemo = input[2].split(" ").map(Number);
let passwords = 0;
let startIdx = 0;
let EndIdx = P - 1;
let obj = { A: 0, C: 0, G: 0, T: 0 };
for (let i = startIdx; i <= EndIdx; i++) {
  obj[tempArr[i]] ? obj[tempArr[i]]++ : (obj[tempArr[i]] = 1);
}
// console.log(obj);
while (EndIdx < S) {
  // console.log(startIdx, EndIdx);
  if (
    obj["A"] >= minMemo[0] &&
    obj["C"] >= minMemo[1] &&
    obj["G"] >= minMemo[2] &&
    obj["T"] >= minMemo[3]
  ) {
    // console.log("조건 맞음");
    passwords++;
  }
  obj[tempArr[startIdx]]--;
  startIdx++;
  EndIdx++;
  if (EndIdx >= S) break;
  obj[tempArr[EndIdx]] ? obj[tempArr[EndIdx]]++ : (obj[tempArr[EndIdx]] = 1);
  // console.log(obj);
}
console.log(passwords);

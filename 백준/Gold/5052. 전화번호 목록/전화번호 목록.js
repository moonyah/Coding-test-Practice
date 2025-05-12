let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let t = Number(input[0]);
let n = Number(input[1]);
let currT = 0;
let start = 1;
while (currT < t) {
  let n = Number(input[start]);
  let arr = [];
  for (let i = start + 1; i < start + 1 + n; i++) {
    arr.push(input[i].trim());
  }
  let result = compareArr(arr);
  console.log(result);
  start += n + 1;
  currT++;
}
// 사전 순으로 정렬, 인접한 번호 비교
function compareArr(arr) {
  arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1].startsWith(arr[i])) {
      return "NO";
    }
  }
  return "YES";
}

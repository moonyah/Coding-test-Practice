// 문제 풀이 아이디어
// 1. 순위 X를 기준으로 오름차순 정렬을 수행
// 2. 차례대로 한 명씩 확인하며, 순위 Y가 현재까지 확인했던 Y 중에서 가장 작은 수라면 카운트한다.
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);
let line = 1;
for (let tc = 0; tc < testCase; tc++) {
  n = Number(input[line]);
  let arr = [];
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(" ").map(Number);
    arr.push(data);
  }
  arr.sort((x, y) => x[0] - y[0]); // x 순위를 기준으로 오름차순 정렬
  let count = 0;
  let minValue = 100001;
  for (let [x, y] of arr) {
    if (y < minValue) {
      // y 순위 값이 가장 작다면 카운트
      minValue = y;
      count += 1;
    }
  }
  console.log(count);
  line += n + 1;
}
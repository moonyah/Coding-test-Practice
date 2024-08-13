// 각각의 높이에 대해서 화살의 개수를 count
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let data = input[1].split(" ").map(Number); // 모든 풍선의 위치 정보 입력받기
let arrow = new Array(1000001).fill(0); // 각 높이에 화살이 몇 개 있는지
let result = 0;
for (let x of data) {
  if (arrow[x] > 0) {
    // 해당 높이에 화살이 있다면
    arrow[x] -= 1;
    arrow[x - 1] += 1;
  } else {
    // 해당 높이에 화살이 없다면
    arrow[x - 1] += 1;
    result += 1; // 화살 쏘기
  }
}
console.log(result);

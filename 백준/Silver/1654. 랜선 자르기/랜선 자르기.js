let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [k, n] = input[0].split(" ").map(Number); // 랜선의 개수, 필요한 랜선의 개수
let lanArr = [];
for (let i = 1; i <= k; i++) {
  lanArr.push(Number(input[i]));
}
// console.log(lanArr);
let left = 1;
let right = lanArr.reduce((a, b) => Math.max(a, b));
// console.log(left, right);
let answer = 0;
let madeLanNum = 0;

while (left <= right) {
  madeLanNum = 0;
  let mid = parseInt((left + right) / 2);
  // console.log(mid);
  for (let i = 0; i < k; i++) {
    madeLanNum += parseInt(lanArr[i] / mid);
  }
  // console.log("madeLanNum", madeLanNum);
  if (madeLanNum >= n) {
    answer = mid;
    left = mid + 1;
  } else {
    // 필요 전선 부족할 경우
    right = mid - 1;
  }
}

console.log(answer);
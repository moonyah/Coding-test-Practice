const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
// console.log(N, M); // 나무의 수, 필요한 나무 길이

let treeArr = input[1]
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let left = 0;
let right = treeArr[0];
let mid = 0;
let answer = 0;

while (left <= right) {
  mid = parseInt((left + right) / 2); // 임의로 설정
  totalCuts = 0;
  for (let i = 0; i < N; i++) {
    if (treeArr[i] - mid >= 0) {
      totalCuts += treeArr[i] - mid;
    }
  }
  if (totalCuts >= M) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
console.log(answer);
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = [];
let sequence = [];

function recursion(depth, start) {
  if (depth === M) {
    result.push(sequence.join(" "));
    return;
  }
  let prev = -1; // 중복을 방지하기 위한 변수
  for (let i = start; i < N; i++) {
    if (arr[i] === prev) continue; // 이전 값과 동일하면 건너뜀
    sequence.push(arr[i]);
    recursion(depth + 1, i);
    sequence.pop();
    prev = arr[i]; // 이전 값을 현재 값으로 업데이트
  }
}

recursion(0, 0);
console.log(result.join("\n"));
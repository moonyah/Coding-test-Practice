const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, S] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let startIdx = 0;
let endIdx = 0;
let sum = 0;
let minLen = Infinity;

while (true) {
  if (sum >= S) {
    minLen = Math.min(endIdx - startIdx, minLen);
    sum -= arr[startIdx];
    startIdx++;
  } else if (endIdx === N) {
    break;
  } else if (sum < S) {
    sum += arr[endIdx]; // 먼저 sum에 포함
    endIdx++;
  }
}
console.log(minLen === Infinity ? 0 : minLen);

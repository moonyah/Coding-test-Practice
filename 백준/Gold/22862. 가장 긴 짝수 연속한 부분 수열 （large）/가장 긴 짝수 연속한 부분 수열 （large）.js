const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, K] = input[0].split(" ").map((a) => Number(a));
let arr = input[1].split(" ").map((a) => Number(a));

let maxArrLen = 0;
let left = 0;
let removeNum = 0;
for (let right = 0; right < N; right++) {
  if (arr[right] % 2 !== 0) {
    removeNum++;
  }

  while (removeNum > K) {
    if (arr[left] % 2 !== 0) {
      removeNum--;
    }
    left++;
  }

  if (right - left + 1 - removeNum > maxArrLen) {
    maxArrLen = right - left + 1 - removeNum;
  }
}

console.log(maxArrLen);

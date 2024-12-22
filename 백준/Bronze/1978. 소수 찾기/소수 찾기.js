const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const N = Number(input[0]);
const numArr = [...input[1].trim().split(" ").map(Number)];

// console.log(N, numArr);

let primeNumCount = N;
for (let i = 0; i < N; i++) {
  if (numArr[i] > 1) {
    for (let j = 2; j < numArr[i]; j++) {
      if (numArr[i] % j === 0) {
        primeNumCount--;
        break;
      }
    }
  } else {
    primeNumCount--;
  }
}
console.log(primeNumCount);

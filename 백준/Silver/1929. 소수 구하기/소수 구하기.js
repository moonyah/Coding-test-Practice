let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [M, N] = input[0].split(" ").map(Number);

// 2는 유일한 짝수 소수
if (M <= 2) {
  console.log(2);
  M = 3; // 3부터 시작
}

if (M % 2 === 0) {
  M += 1;
}
for (let i = M; i <= N; i += 2) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}

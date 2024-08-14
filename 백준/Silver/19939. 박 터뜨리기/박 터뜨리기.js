// 공의 개수는
// 바구니 수가 K라면
// K + (K-1) + (K-2) + (K-3) + ... + 1 의 합보다 커야 한다.
// 안 크면 -1 출력

// 나머지 공은 하나씩 맨 뒤부터 넣는다.

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, K] = input[0].split(" ").map(Number);
// console.log(N, K); // 공의 개수, 바구니 개수

let valid = 0;
for (let i = 1; i <= K; i++) {
  valid += i;
}
// console.log(valid);

let rest = (N - valid) % K;
// console.log("r", rest);
if (N < valid) {
  console.log(-1);
} else {
  if (rest == 0) {
    console.log(K - 1);
  } else if (rest > 0) {
    console.log(K);
  }
}

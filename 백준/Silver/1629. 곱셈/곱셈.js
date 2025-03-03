const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [A, B, C] = input[0].split(" ").map(BigInt);

// A^B % C
// B가 짝수라면
// A^(B/2) % C

function recursion(A, B) {
  // 종료 조건
  if (B === 0n) {
    return 1n;
  }
  if (B === 1n) {
    return A % C;
  }
  let temp = recursion(A, B / 2n);

  if (B % 2n === 0n) {
    // B가 짝수인 경우
    return (temp * temp) % C;
  } else {
    // B가 홀수인 경우
    return (temp * temp * A) % C;
  }
}
let answer = recursion(A, B);
console.log(answer.toString());

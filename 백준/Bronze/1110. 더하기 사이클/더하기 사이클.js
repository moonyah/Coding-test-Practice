const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let originalN = N;
let cycleCount = 0;
let A,
  B,
  C = 0;
while (true) {
  if (N < 10) {
    A = 0;
  } else {
    A = Math.floor(N / 10);
  }
  B = N % 10;
  C = (A + B) % 10;
  N = B * 10 + C;
  cycleCount++;
  if (N === originalN) break;
}
console.log(cycleCount);

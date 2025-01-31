let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let arr = [];
let len = N;
while (N > 1) {
  for (let i = 2; i <= len; i++) {
    if (N % i === 0) {
      arr.push(i);
      N /= i;
      break;
    }
  }
}
if (Number(input[0]) !== 1) {
  arr.forEach((a) => console.log(a));
}

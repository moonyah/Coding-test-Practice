const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, K] = input[0].split(" ").map(Number);
let a = 1;
let b = 1;
let num = K;
for (let i = 0; i < num; i++) {
  a *= N;
  N--;
}
for (let i = 0; i < num; i++) {
  b *= K;
  K--;
}
console.log(a / b);

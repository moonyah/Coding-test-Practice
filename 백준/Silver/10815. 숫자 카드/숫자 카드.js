const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
let arrN = input[1].split(" ").map(Number);
let set = new Set();
for (let i = 0; i < N; i++) {
  set.add(arrN[i]);
}
let answer = [];
const M = Number(input[2]);
let arrM = input[3].split(" ").map(Number);
for (let i = 0; i < M; i++) {
  if (set.has(arrM[i])) {
    answer.push(1);
  } else {
    answer.push(0);
  }
}
console.log(answer.join(" "));

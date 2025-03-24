const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, C] = input[0].split(" ").map(Number);
let arrA = input[1].split(" ").map(Number);
// let setA = new Set(arrA);
let arrB = input[2].split(" ").map(Number);
let setB = new Set(arrB);
let setAnswer = new Set();
for (let i = 0; i < N; i++) {
  if (!setB.has(arrA[i])) {
    setAnswer.add(arrA[i]);
  }
}
let answer = [...setAnswer].sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join(" "));

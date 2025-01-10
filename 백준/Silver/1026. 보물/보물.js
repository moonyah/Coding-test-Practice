const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let arrA = input[1].split(" ").map(Number);
let arrB = input[2].split(" ").map(Number);
arrA.sort((a, b) => a - b);
arrB.sort((a, b) => a - b).reverse();
let answer = 0;
for (let i = 0; i < N; i++) {
  answer += arrA[i] * arrB[i];
}
console.log(answer);

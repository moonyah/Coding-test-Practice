let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = input[0].trim().length;
// R<=C, R*C=N
// 행이 R개고, 열이 C개인 행렬
let R = 1; // R이 최대 여야 함
for (let i = 1; i <= Math.sqrt(N); i++) {
  if (N % i == 0 && R < N / i) {
    R = i;
  }
}
let C = N / R;

let str = [...input[0]];
let arr = Array.from({ length: R }, () => Array(C).fill(""));
let start = 0;
for (let i = 0; i < C; i++) {
  for (let j = 0; j < R; j++) {
    arr[j][i] = str[start];
    start++;
  }
}

let newArr = [];
for (let i of arr) {
  newArr.push(...i);
}
console.log(newArr.join(""));

const input = require("fs").readFileSync("/dev/stdin").toString();
// 1개면 상근 윈
// 2개면 상근 짐
// 3개면 상근 윈
// 4개면 상근 짐
let answer = Number(input) % 2 === 0 ? "CY" : "SK";
console.log(answer);

// 1부터 더해서 S가 넘어가면 멈춘다.
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let S = Number(input[0]);
// console.log(S);
let temp = 0;
let answer = 1;
while (temp < S) {
  temp += answer;
  // console.log(answer, temp);
  if (temp > S) {
    answer--;
    break;
  } else if (temp < S) {
    answer++;
  } else {
    break;
  }
}
console.log(answer);
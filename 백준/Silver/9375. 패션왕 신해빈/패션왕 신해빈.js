const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let testCases = Number(input[0]);
// 객체 { 의상의 종류 : 해당 의상 개수 }
let num = 1;
for (let i = 0; i < testCases; i++) {
  let clothes = {};
  let n = Number(input[num]);
  for (let j = 1; j <= n; j++) {
    let [name, sort] = input[num + j].split(" ").map((a) => a.trim());
    clothes[sort] ? clothes[sort]++ : (clothes[sort] = 1);
  }
  let answer = 1;
  for (let count in clothes) {
    answer *= clothes[count] + 1;
  }
  console.log(answer - 1); // 알몸인 경우 빼기

  num += Number(input[num]) + 1;
}

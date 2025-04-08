const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let T = Number(input[0]);
let money = [25, 10, 5, 1];
for (let i = 1; i <= T; i++) {
  let answer = [];
  let t = Number(input[i]);
  for (let j = 0; j < money.length; j++) {
    answer.push(Math.floor(t / money[j]));
    t %= money[j];
  }
  console.log(answer.join(" "));
}

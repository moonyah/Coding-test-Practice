const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let num = Number(input[0]);

let longNum = Math.ceil(num / 4);
let answer = "";

for (let i = 0; i < longNum; i++) {
  answer += "long ";
}
console.log(answer + "int");

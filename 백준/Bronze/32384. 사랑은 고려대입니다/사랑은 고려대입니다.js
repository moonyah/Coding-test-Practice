const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let num = input[0];
let answer = "";
for (let i = 0; i < num; i++) {
  answer += "LoveisKoreaUniversity" + " ";
}
console.log(answer);
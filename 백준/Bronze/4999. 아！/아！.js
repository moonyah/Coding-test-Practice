let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let A = input[0].length; // 재환
let B = input[1].length; // 의사
if (A >= B) {
  console.log("go");
} else {
  console.log("no");
}

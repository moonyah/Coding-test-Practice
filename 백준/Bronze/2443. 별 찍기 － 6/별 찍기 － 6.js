let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
for (let i = 0; i < N; i++) {
  let temp = "";
  for (let j = 0; j < i; j++) {
    temp += " ";
  }
  for (let j = 0; j < 2 * (N - i) - 1; j++) {
    temp += "*";
  }
  console.log(temp);
}

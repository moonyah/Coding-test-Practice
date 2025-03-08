let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
for (let i = N; i > 0; i--) {
  console.log(i);
}

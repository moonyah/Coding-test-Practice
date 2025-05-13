let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let jinho = input[0];
let N = Number(input[1]);
let count = 0;
for (let i = 2; i < N + 2; i++) {
  if (jinho === input[i]) {
    count++;
  }
}
console.log(count);

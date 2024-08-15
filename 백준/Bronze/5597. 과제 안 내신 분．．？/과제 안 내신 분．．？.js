const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let arr = [];
for (let i = 0; i < 28; i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b);

for (let i = 1; i <= 30; i++) {
  if (!arr.includes(i)) {
    console.log(i);
  }
}
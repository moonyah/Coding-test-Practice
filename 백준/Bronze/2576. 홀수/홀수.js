const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let minNum = 99;
let sum = 0;
for (let i = 0; i < 7; i++) {
  let num = Number(input[i]);
  if (num % 2 === 1) {
    sum += num;
    if (minNum > num) {
      minNum = num;
    }
  }
}
if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(minNum);
}

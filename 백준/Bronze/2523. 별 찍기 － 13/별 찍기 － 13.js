let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let temp = "";
  for (let j = 0; j < i; j++) {
    temp += "*";
  }
  console.log(temp);
}
for (let i = 1; i < num; i++) {
  let temp = "";
  for (let j = num - i; j > 0; j--) {
    temp += "*";
  }
  console.log(temp);
}
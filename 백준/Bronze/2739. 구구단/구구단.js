const input = require("fs").readFileSync("/dev/stdin").toString().split("");

let num = input[0];
for (let i = 1; i <= 9; i++) {
  console.log(num + " * " + i + " = " + num * i);
}
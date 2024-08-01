const input = require("fs").readFileSync("/dev/stdin").toString();
let num = Number(input);
let array = [];
for (let i = 0; i < num; i++) {
  array.push("*");
  console.log(array.join(""));
}
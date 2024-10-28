const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let a = arr[0];
let b = arr[1];
let output = "";
if (b - a < 2) {
  console.log(0);
} else {
  for (let i = a + 1; i < b; i++) {
    output += i + " ";
  }
  console.log(b - a - 1);
  console.log(output);
}
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let i = 0;

while (true) {
  let nArr = input[i]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  if (nArr[0] == 0 && nArr[1] == 0 && nArr[2] == 0) {
    break;
  }
  if (nArr[0] ** 2 == nArr[1] ** 2 + nArr[2] ** 2) {
    console.log("right");
  } else {
    console.log("wrong");
  }
  i++;
}
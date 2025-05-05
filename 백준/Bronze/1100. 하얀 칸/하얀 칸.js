const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let count = 0;

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if ((i + j) % 2 === 0 && input[i][j] === "F") {
      count++;
    }
  }
}

console.log(count);

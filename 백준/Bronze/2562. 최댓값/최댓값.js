const data = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let maxNum = 0;
let maxNumIndex = 0;
for (let i = 0; i < 9; i++) {
  if (maxNum < Number(data[i])) {
    maxNum = Number(data[i]);
    maxNumIndex = i + 1;
  }
}
console.log(maxNum);
console.log(maxNumIndex);
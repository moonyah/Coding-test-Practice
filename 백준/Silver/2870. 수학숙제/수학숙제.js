const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let M = Number(input[0]);
let arr = [];
for (let i = 1; i < M + 1; i++) {
  let curr = input[i].trim();
  let len = curr.length;
  let num = [];
  let temp = [];
  for (let j = 0; j <= len; j++) {
    if (Number(curr[j]) >= 0) {
      temp.push(Number(curr[j]));
    } else {
      if (temp.length > 0) {
        num.push(BigInt(temp.join("")));
      }
      temp = [];
    }
  }
  arr.push(...num);
}
// console.log(arr);
arr.sort((a, b) => (a > b ? 1 : -1)).forEach((a) => console.log(a.toString()));

const data = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let testCaseNum = Number(data[0]);
for (let i = 1; i <= testCaseNum; i++) {
  let [a, b] = data[i].split(" ").map(Number);
  console.log(a + b);
}

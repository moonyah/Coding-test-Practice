const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let testCaseNum = input[0];

for (let i = 1; i <= testCaseNum; i++) {
  let array = input[i].split(" ").map(Number);

  let scoreNum = array.shift();
  let total = array.reduce((a, b) => a + b);

  let filteredArray = array.filter((a) => a > total / scoreNum);
  let percent = (filteredArray.length / array.length) * 100;
  console.log(percent.toFixed(3) + "%");
}
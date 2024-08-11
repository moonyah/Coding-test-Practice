const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);

let arr = [];

for (let i = 1; i <= n; i++) {
  let temp = input[i].split(" ").map(Number);
  arr.push(temp);
}
arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let answer = 1;
let curr = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i][0] >= curr[1]) {
    curr = arr[i];
    answer++;
  }
}
console.log(answer);


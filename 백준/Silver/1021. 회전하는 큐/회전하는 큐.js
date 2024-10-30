const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let arr = Array(N)
  .fill(1)
  .map((a, b) => (a = b + 1));
let picks = input[1].split(" ").map(Number);
let pickCount = 0;
let arrLen = N;
let answer = 0;
while (pickCount < M) {
  if (arr[0] === picks[pickCount]) {
    pickCount++;
    arr.shift();
    arrLen--;
  } else {
    let idx = arr.indexOf(picks[pickCount]);
    if (idx <= arrLen - idx) {
      let temp = arr.shift();
      arr.push(temp);
    } else {
      let temp = arr.pop();
      arr.unshift(temp);
    }
    answer++;
  }
}
console.log(answer);

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
// console.log(N, M); // N개의 문자열

let answer = 0;
let testArrEle = "";
let includeArrEl = "";
let set = new Set();
for (let i = 1; i < N + 1; i++) {
  testArrEle = input[i].trim();
  set.add(testArrEle);
}
// console.log(set);
for (let j = N + 1; j < N + M + 1; j++) {
  includeArrEl = input[j].trim();
  if (set.has(includeArrEl)) {
    answer++;
  }
}

console.log(answer);

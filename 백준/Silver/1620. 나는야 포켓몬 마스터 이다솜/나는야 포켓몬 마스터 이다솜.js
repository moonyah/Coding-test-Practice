let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
// console.log(N, M);
let map = {};
for (let i = 1; i <= N; i++) {
  map[i] = input[i].trim();
  map[input[i].trim()] = i;
}
for (let i = N + 1; i <= N + M; i++) {
  let curr = input[i].trim();
  console.log(map[curr]);
}

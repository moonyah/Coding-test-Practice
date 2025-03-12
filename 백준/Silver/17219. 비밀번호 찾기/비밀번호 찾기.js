const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let set = new Set();
for (let i = 1; i < N + 1; i++) {
  let [address, password] = input[i].trim().split(" ");
  set[address] = password;
}
for (let i = N + 1; i < N + 1 + M; i++) {
  console.log(set[input[i].trim()]);
}

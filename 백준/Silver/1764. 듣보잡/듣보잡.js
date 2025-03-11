const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let list = [];
let set = new Set();
for (let i = 1; i < N + 1; i++) {
  set.add(input[i].trim());
}
for (let j = N + 1; j < N + M; j++) {
  let B = input[j].trim();
  if (set.has(B)) {
    list.push(B);
  }
}
console.log(list.length);
list.sort();
list.map((a) => console.log(a));


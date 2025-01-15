const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let arr = Array(N + 1)
  .fill(0)
  .map((a) => (a = [])); // index를 이용
for (let i = 1; i < M + 1; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  arr[a].push(b);
  arr[b].push(a);
}
// console.log(arr);

let visited = Array(N + 1).fill(false);
let answer = 0;
for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    bfs(i);
    answer++;
  }
}
console.log(answer);

function bfs(i) {
  let queue = [...arr[i]];

  while (queue.length > 0) {
    let curr = queue.shift();
    visited[curr] = true;
    for (let i of arr[curr]) {
      if (!visited[i]) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }
}

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// 상근이 학번은 1
let n = Number(input[0]); // 동기 수
let m = Number(input[1]); // 관계 줄 수
let graph = Array.from({ length: n + 1 }, () => []);
for (let i = 2; i < m + 2; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let answer = 0;

if (graph[1].length !== 0) {
  let queue = [[1, 0]];
  let visited = Array(n + 1).fill(false);
  visited[1] = true;

  let front = 0;
  while (true) {
    let [num, depth] = queue[front];
    depth++;
    if (depth > 2) break;
    for (let i of graph[num]) {
      if (!visited[i]) {
        visited[i] = true;
        queue.push([i, depth]);
      }
    }
    front++;
    // console.log(queue);
    answer = queue.length - 1;
  }
}
console.log(answer);

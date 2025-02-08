let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M, V] = input[0].split(" ").map(Number);
let graph = Array.from({ length: N + 1 }, () => []);
// console.log(graph);
for (let i = 1; i < M + 1; i++) {
  let [a, b] = input[i].trim().split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
// console.log(graph); // 양방향 그래프

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

function dfs(graph, start) {
  let result = [];
  let visited = Array(N + 1).fill(false);
  let stack = [start];

  while (stack.length > 0) {
    let curr = stack.pop();
    if (!visited[curr]) {
      visited[curr] = true;
      result.push(curr);

      for (let i = graph[curr].length - 1; i >= 0; i--) {
        let next = graph[curr][i];
        if (!visited[next]) {
          stack.push(next);
        }
      }
    }
  }
  return result;
}

function bfs(graph, start) {
  let result = [];
  let visited = Array(N + 1).fill(false);
  let queue = [start];
  let curr = 0;
  while (queue.length > 0) {
    curr = queue.shift();
    visited[curr] = true;
    result.push(curr);
    for (let input of graph[curr]) {
      if (!visited[input]) {
        visited[input] = true;
        queue.push(input);
      }
    }
  }
  return result;
}

let dfsAnswer = dfs(graph, V);
console.log(dfsAnswer.join(" "));
let bfsAnswer = bfs(graph, V);
console.log(bfsAnswer.join(" "));

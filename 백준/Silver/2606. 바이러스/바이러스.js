const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let coms = Number(input[0]);
let links = Number(input[1]);
let linkArr = [];

for (let i = 0; i < links; i++) {
  linkArr.push(input[i + 2].split(" ").map((a) => Number(a)));
}

let graph = Array.from({ length: coms + 1 }, () => []); // 각 인덱스에 빈 배열 할당

for (let [a, b] of linkArr) {
  graph[a].push(b); // a와 연결된 b
  graph[b].push(a); // b와 연결된 a (양방향)
}
// console.log(graph);

let result = 0;
function dfs(graph, v, visited) {
  // 현재 노드를 방문 처리
  visited[v] = true;
  result++;

  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for (let i of graph[v]) {
    if (!visited[i]) {
      // 방문하지 않은 곳
      dfs(graph, i, visited);
    }
  }
}
let visited = Array(coms + 1).fill(false);
dfs(graph, 1, visited);
console.log(result - 1);

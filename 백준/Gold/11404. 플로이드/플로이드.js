const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]); // 도시의 개수
const m = Number(input[1]); // 버스의 개수

// console.log(n, m);

// graph를 구해야 한다.
// (n+1) * (n+1)
let INF = 1e9;
let graph = Array(n + 1)
  .fill(INF)
  .map((a) => (a = Array(n + 1).fill(INF)));

//자기 자신으로 가는 비용은 0으로 초기화
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === j) {
      graph[i][j] = 0;
    }
  }
}
// console.log(graph);

for (let i = 0; i < m; i++) {
  let [a, b, c] = input[i + 2].split(" ").map((a) => Number(a));
  if (graph[a][b] > c) {
    graph[a][b] = c;
  }
}

// console.log(graph);

for (let k = 1; k <= n; k++) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      let cost = graph[a][k] + graph[k][b];
      graph[a][b] = Math.min(graph[a][b], cost);
    }
  }
}

// console.log(graph);

// 그래프 출력
for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = 1; j <= n; j++) {
    if (graph[i][j] == INF) line += "0 ";
    else line += graph[i][j] + " ";
  }
  console.log(line);
}

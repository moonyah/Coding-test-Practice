// 최단 경로가 2 이내인 것이 가장 많은 사람의 2-친구 수 출력
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
let graph = [];
for (let i = 1; i <= n; i++) {
  graph.push([...input[i].trim().split("")]);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === "N") {
      graph[i][j] = 100;
    } else {
      graph[i][j] = 1;
    }
    if (i === j) {
      graph[i][j] = 0;
    }
  }
}
// console.log(graph);

for (let k = 0; k < n; k++) {
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}
// console.log(graph);

let resultArr = [];
for (let i = 0; i < n; i++) {
  let result = 0;
  for (let j = 0; j < n; j++) {
    graph[i][j];
    if (0 < graph[i][j] && graph[i][j] <= 2) {
      result++;
    }
  }
  resultArr.push(result);
}

console.log(Math.max(...resultArr));

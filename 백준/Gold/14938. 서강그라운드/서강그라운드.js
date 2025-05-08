const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [n, m, r] = input[0].split(" ").map(Number);
// 지역, 수색범위, 길 개수
let item = input[1].split(" ").map(Number);
let graph = Array.from({ length: n + 1 }, () => []);
for (let i = 2; i < 2 + r; i++) {
  let [a, b, l] = input[i].split(" ").map(Number);
  graph[a].push([b, l]);
  graph[b].push([a, l]);
}

function countItem(start) {
  let dist = Array(n + 1).fill(Infinity); // 각 노드까지 최단 거리 저장
  let visited = Array(n + 1).fill(false);
  dist[start] = 0;

  // dist[] 배열 완성됨
  for (let i = 1; i <= n; i++) {
    // 방문하지 않은 노드 중 최단 거리인 노드 선택
    let min = Infinity;
    let idx = -1;
    for (let j = 1; j <= n; j++) {
      if (!visited[j] && dist[j] < min) {
        min = dist[j];
        idx = j; // 처음에 idx = start
      }
    }

    if (idx === -1) break;
    visited[idx] = true;

    for (let [next, weight] of graph[idx]) {
      if (dist[next] > dist[idx] + weight) {
        dist[next] = dist[idx] + weight;
      }
    }
  }

  // 수색 범위 m 이내의 지역의 아이템 개수 합치기
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (dist[i] <= m) sum += item[i - 1];
  }
  return sum;
}

// 모든 지점에서 탐색 시작
// // 최대 아이템 수 계산
let maxItem = 0;
for (let i = 1; i <= n; i++) {
  maxItem = Math.max(maxItem, countItem(i));
}
console.log(maxItem);

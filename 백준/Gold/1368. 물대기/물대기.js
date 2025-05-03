let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let price = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
for (let i = 1; i <= N; i++) {
  let w = Number(input[i]);
  price[0][i] = w;
  price[i][0] = w; // 무방향 연결
}
for (let i = N + 1; i < N + 1 + N; i++) {
  let arr = input[i].split(" ").map(Number);
  for (let j = 0; j < N; j++) {
    price[i - N][j + 1] = arr[j];
  }
}

let minEdge = Array(N + 1).fill(Infinity);
let visited = Array(N + 1).fill(false);
minEdge[0] = 0;

let result = 0;
for (let i = 0; i <= N; i++) {
  let min = Infinity;
  let u = -1;
  // 1. MST에 포함되지 않은 정점 중에서 가장 싸게 연결할 수 있는 정점 u를 찾는다.
  for (let v = 0; v <= N; v++) {
    if (!visited[v] && minEdge[v] < min) {
      min = minEdge[v];
      u = v;
    }
  }

  // 2. u를 MST에 포함, 비용을 누적
  visited[u] = true;
  result += min;

  // 3. u와 인접한 정점들의 minEdge 값 갱신
  for (let v = 0; v <= N; v++) {
    if (!visited[v] && price[u][v] < minEdge[v]) {
      minEdge[v] = price[u][v];
    }
  }
}
console.log(result);

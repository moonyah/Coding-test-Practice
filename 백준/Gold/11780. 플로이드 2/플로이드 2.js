const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let m = Number(input[1]);
// console.log(n, m);
let graph = Array.from({ length: n + 1 }, () =>
  Array.from({ length: n + 1 }, () => Infinity)
);
for (let i = 1; i <= n; i++) {
  graph[i][i] = 0;
}
// console.log(graph);
for (let i = 2; i < m + 2; i++) {
  let [a, b, c] = input[i].trim().split(" ").map(Number);
  graph[a][b] = Math.min(graph[a][b], c);
}
let memoCity = Array.from({ length: n + 1 }, () =>
  Array.from({ length: n + 1 }, () => [])
);
// 점화식 적용
for (let k = 1; k <= n; k++) {
  // 경유점
  for (let i = 1; i <= n; i++) {
    // 출발점
    for (let j = 1; j <= n; j++) {
      // 도착점
      if (graph[i][j] > graph[i][k] + graph[k][j]) {
        graph[i][j] = graph[i][k] + graph[k][j];
        memoCity[i][j] = [...memoCity[i][k], k, ...memoCity[k][j]];
      }
    }
  }
}
// console.log(graph);

// 출력
for (let i = 1; i < n + 1; i++) {
  let sub = [];
  for (let j = 1; j < n + 1; j++) {
    if (graph[i][j] === Infinity) {
      sub.push(0);
    } else {
      sub.push(graph[i][j]);
    }
  }
  console.log(sub.join(" "));
}
// console.log(memoCity);
// 출력: 도시 수 | 도시 | 도시 | ....memoCity
for (let k = 1; k < n + 1; k++) {
  for (let i = 1; i < n + 1; i++) {
    if (k === i || graph[k][i] == Infinity) {
      console.log(0);
    } else {
      console.log(memoCity[k][i].length + 2, k, ...memoCity[k][i], i);
    }
  }
}

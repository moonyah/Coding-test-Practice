let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
// console.log(N);
// 이중 배열에 넣기
let arr = [];
for (let i = 1; i < N + 1; i++) {
  arr.push([...input[i].trim()]);
}
// console.log(arr);

let visited = Array.from({ length: N }, () => Array(N).fill(false));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] == 0) {
      visited[i][j] = true;
    }
  }
}
// console.log(visited);

// 배열 순회
let answer = 0;
let areas = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      let area = bfs(i, j);
      areas.push(area);
      answer++;
    }
  }
}
// output
console.log(answer);
areas.sort((a, b) => a - b);
areas.map((a) => console.log(a));

function bfs(i, j) {
  let queue = [[i, j]]; // y, x
  visited[i][j] = true;
  let direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let area = 1;
  let front = 0;
  while (queue.length > front) {
    let [cy, cx] = queue[front];
    for (let [y, x] of direction) {
      let ny = cy + y;
      let nx = cx + x;
      if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue;
      if (!visited[ny][nx]) {
        visited[ny][nx] = true;
        queue.push([ny, nx]);
        area++;
      }
    }
    front++;
  }
  return area;
}

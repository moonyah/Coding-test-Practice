let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [M, N, K] = input[0].split(" ").map(Number);
// visited로 모두 처리하고 각각 bfs하기
// console.log(M, N, K);
let visited = Array.from({ length: M }, () => Array(N).fill(false));
// console.log(visited);
for (let i = 1; i <= K; i++) {
  let [x1, y1, x2, y2] = input[i].trim().split(" ").map(Number);
  for (let x = x1; x < x2; x++) {
    for (let y = y1; y < y2; y++) {
      if (!visited[y][x]) {
        visited[y][x] = true;
      }
    }
  }
}

let spaceArr = [];
let spaceCount = 0;
for (let x = 0; x < N; x++) {
  for (let y = 0; y < M; y++) {
    if (!visited[y][x]) {
      // console.log(y, x);
      let subSpace = bfs(y, x);
      spaceArr.push(subSpace);
      spaceCount++;
    }
  }
}
console.log(spaceCount);
if (spaceArr.length === 0) {
  console.log(0);
} else {
  console.log(spaceArr.sort((a, b) => a - b).join(" "));
}
function bfs(y, x) {
  let queue = [[y, x]];
  visited[y][x] = true;
  let direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let space = 1;
  while (queue.length > 0) {
    let [y, x] = queue.shift();
    for (let [dy, dx] of direction) {
      let ny = dy + y;
      let nx = dx + x;
      if (ny < 0 || ny >= M || nx < 0 || nx >= N) continue;
      if (!visited[ny][nx]) {
        visited[ny][nx] = true;
        queue.push([ny, nx]);
        // console.log(ny, nx);
        space++;
      }
    }
  }
  return space;
}

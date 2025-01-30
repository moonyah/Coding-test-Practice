const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let graph = [];

for (let i = 1; i < N + 1; i++) {
  graph.push([...input[i].trim()]);
}
// console.log(graph);
let countRGB = 0;
let countNoRGB = 0;
let visitedRGB = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => false)
);
let visitedNoRGB = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => false)
);
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visitedRGB[i][j]) {
      rgb([i, j]);
      countRGB++;
    }
    if (!visitedNoRGB[i][j]) {
      noRgb([i, j]);
      countNoRGB++;
    }
  }
}
function noRgb(start) {
  let queue = [start];
  let direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let oneOfRGB = "R";
  while (queue.length > 0) {
    let [currY, currX] = queue.shift();
    visitedNoRGB[currY][currX] = true;
    if (graph[currY][currX] === "G") {
      oneOfRGB = "R";
    } else if (graph[currY][currX] === "B") {
      oneOfRGB = "B";
    }
    for ([x, y] of direction) {
      let nextX = x + currX;
      let nextY = y + currY;
      if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= N) continue;
      let nextRGB = graph[nextY][nextX];
      if (graph[nextY][nextX] === "G") {
        nextRGB = "R";
      } else if (graph[nextY][nextX] === "B") {
        nextRGB = "B";
      }
      if (!visitedNoRGB[nextY][nextX] && nextRGB === oneOfRGB) {
        queue.push([nextY, nextX]);
        // console.log(nextY, nextX);
        visitedNoRGB[nextY][nextX] = true;
      }
    }
  }
  // console.log(visitedNoRGB);
}

function rgb(start) {
  let queue = [start];
  let direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  while (queue.length > 0) {
    let [currY, currX] = queue.shift();
    visitedRGB[currY][currX] = true;
    let oneOfRGB = graph[currY][currX];
    for ([x, y] of direction) {
      let nextX = x + currX;
      let nextY = y + currY;
      if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= N) continue;
      if (!visitedRGB[nextY][nextX] && graph[nextY][nextX] === oneOfRGB) {
        queue.push([nextY, nextX]);
        visitedRGB[nextY][nextX] = true;
      }
    }
  }
}
console.log(countRGB, countNoRGB);

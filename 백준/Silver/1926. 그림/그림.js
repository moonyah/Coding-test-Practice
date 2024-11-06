let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [n, m] = input[0].split(" ").map(Number); // 세로, 가로
input = input.slice(1).map((line) => line.trim().split(" ")); // 각 줄을 공백으로 나눠 숫자 배열로 변환
// console.log(input);
let visited = Array.from({ length: n }, () => Array(m).fill(false));
let routes = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let pictures = 0;
let maxExtent = 0;

function dfs(a, b) {
  visited[a][b] = true;
  let queue = [[a, b]];
  let extent = 1;

  while (queue.length > 0) {
    const [curX, curY] = queue.shift();
    for (let [dx, dy] of routes) {
      let newX = curX + dx;
      let newY = curY + dy;
      if (
        newX >= 0 &&
        newX < n &&
        newY >= 0 &&
        newY < m &&
        !visited[newX][newY] &&
        input[newX][newY] === "1"
      ) {
        visited[newX][newY] = true;
        queue.push([newX, newY]);
        extent++;
      }
    }
  }
  return extent;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j] && input[i][j] === "1") {
      pictures++;
      maxExtent = Math.max(maxExtent, dfs(i, j));
    }
  }
}
console.log(pictures);
console.log(maxExtent);

let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
input = input.slice(1).map((line) => line.trim().split(""));
let visited = Array.from({ length: N }, () => Array(M).fill(false));
let direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function bfs() {
  let queue = [[0, 0]];
  visited[0][0] = true;
  let distance = Array.from({ length: N }, () => Array(M).fill(0));
  distance[0][0] = 1;

  while (queue.length > 0) {
    const [curX, curY] = queue.shift();

    for (let [dx, dy] of direction) {
      let newX = curX + dx;
      let newY = curY + dy;

      if (newX === N - 1 && newY === M - 1) {
        return distance[curX][curY] + 1;
      }

      if (
        newX >= 0 &&
        newX < N &&
        newY >= 0 &&
        newY < M &&
        !visited[newX][newY] &&
        input[newX][newY] === "1"
      ) {
        visited[newX][newY] = true;
        distance[newX][newY] = distance[curX][curY] + 1;
        queue.push([newX, newY]);
      }
    }
  }

  return -1;
}

let result = bfs();
console.log(result);

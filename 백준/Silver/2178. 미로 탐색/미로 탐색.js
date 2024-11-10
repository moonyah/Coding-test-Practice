let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let maze = [];
for (let i = 1; i < N + 1; i++) {
  maze.push(input[i].trim().split("").map(Number));
}

let visited = Array.from({ length: N }, () => Array(M).fill(false));
let queue = [[0, 0, 1]];
visited[0][0] = true;
let direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
while (queue.length > 0) {
  let [curY, curX, count] = queue.shift();
  for (let [y, x] of direction) {
    let newY = curY + y;
    let newX = curX + x;
    if (
      0 <= newY &&
      newY < N &&
      0 <= newX &&
      newX < M &&
      maze[newY][newX] === 1 &&
      visited[newY][newX] === false
    ) {
      visited[newY][newX] = true;
      queue.push([newY, newX, count + 1]);
      if (newY === N - 1 && newX === M - 1) {
        console.log(count + 1);
        return;
      }
    }
  }
}
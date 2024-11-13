let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let testCases = Number(input[0]);
let mnk = 1;
for (let i = 0; i < testCases; i++) {
  let [M, N, K] = input[mnk].split(" ").map(Number);
  // console.log(M, N, K);
  let array = Array.from({ length: N }, () => Array(M).fill(0));
  let visited = Array.from({ length: N }, () => Array(M).fill(false));

  // console.log(array);
  for (let i = mnk + 1; i < mnk + 1 + K; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    array[y][x] = 1;
  }
  let answer = 0;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (array[y][x] === 1 && !visited[y][x]) {
        bfs(x, y, visited, M, N, array);
        answer++;
      }
    }
  }
  console.log(answer);
  mnk += K + 1;
}

function bfs(x, y, visited, M, N, array) {
  let direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let front = 0;
  let queue = [[x, y]];
  visited[y][x] = true;
  while (queue.length > front) {
    let [curX, curY] = queue[front];
    for (let [dirX, dirY] of direction) {
      let newX = curX + dirX;
      let newY = curY + dirY;
      if (
        0 <= newX &&
        newX < M &&
        0 <= newY &&
        newY < N &&
        array[newY][newX] === 1 &&
        !visited[newY][newX]
      ) {
        visited[newY][newX] = true;
        queue.push([newX, newY]);
      }
    }
    front++;
  }
}

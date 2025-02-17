let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [M, N, H] = input[0].split(" ").map(Number);
// console.log(M, N, H); // 가로, 세로, 상자 수

let tomatoes = [];
let visited = Array.from({ length: H }, () =>
  Array.from({ length: N }, () => Array(M).fill(false))
);

let start = [];
for (let i = 0; i < H; i++) {
  let floor = [];
  for (let j = 0; j < N; j++) {
    let line = input[i * N + j + 1].split(" ").map(Number);
    floor.push(line);

    for (let z = 0; z < M; z++) {
      if (line[z] == -1) {
        visited[i][j][z] = true;
      }
      if (line[z] == 1) {
        start.push([i, j, z]);
        visited[i][j][z] = true;
      }
    }
  }
  tomatoes.push(floor);
}
// console.log(tomatoes);

let queue = start;
// console.log(start);
let direction = [
  [-1, 0, 0],
  [1, 0, 0],
  [0, -1, 0],
  [0, 1, 0],
  [0, 0, -1],
  [0, 0, 1],
];

let day = -1;
let front = 0;
while (front < queue.length) {
  let newQueue = [];
  while (front < queue.length) {
    let [currZ, currY, currX] = queue[front];
    for (let [z, y, x] of direction) {
      let nextZ = currZ + z;
      let nextY = currY + y;
      let nextX = currX + x;
      // console.log(nextZ, nextY, nextX);

      if (
        0 > nextZ ||
        nextZ >= H ||
        0 > nextY ||
        nextY >= N ||
        0 > nextX ||
        nextX >= M
      ) {
        // console.log("안돼");
        continue;
      }
      if (!visited[nextZ][nextY][nextX]) {
        // console.log("진입");
        visited[nextZ][nextY][nextX] = true;
        newQueue.push([nextZ, nextY, nextX]);
      }
    }
    front++;
  }
  front = 0;
  day++;
  // console.log("한텀 완료");
  // console.log(visited);
  queue = newQueue;
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let z = 0; z < M; z++) {
      if (visited[i][j][z] === false) {
        day = -1;
        break;
      }
    }
  }
}
console.log(day);

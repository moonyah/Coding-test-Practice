let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [M, N] = input[0].split(" ").map(Number);
let box = [];
for (let i = 1; i < N + 1; i++) {
  box.push(input[i].split(" ").map(Number));
}

let start = [];
let empty = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 1) {
      start.push([i, j, 0]);
    }
    if (box[i][j] === -1) {
      empty.push([i, j]);
    }
  }
}
let answer = 0;
let queue = [];
if (start.length === 0) {
  answer = -1;
} else {
  queue = start;
}

let visited = Array.from({ length: N }, () => Array(M).fill(false));
for (let [y, x] of start) {
  visited[y][x] = true;
}
for (let [y, x] of empty) {
  visited[y][x] = null;
}
let direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let minDay = 0;
let pointerIdx = 0;
while (queue.length > pointerIdx) {
  let [curY, curX, count] = queue[pointerIdx];
  pointerIdx++;
  for (let [y, x] of direction) {
    let newY = curY + y;
    let newX = curX + x;
    if (
      0 <= newY &&
      newY < N &&
      0 <= newX &&
      newX < M &&
      visited[newY][newX] === false &&
      box[newY][newX] === 0
    ) {
      visited[newY][newX] = true;
      queue.push([newY, newX, count + 1]);
      minDay = count + 1;
    }
  }
}

for (let i of visited) {
  for (let j of i) {
    if (j === false) {
      answer = -1;
    }
  }
}

if (answer !== -1) {
  answer = minDay;
}
console.log(answer);

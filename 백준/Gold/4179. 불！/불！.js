let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [R, C] = input[0].split(" ").map(Number);
let maze = [];
let visited = Array.from({ length: R }, () => Array(C).fill(false));
let queueF = [];
let queueJ = [];

// 초기화
for (let i = 1; i < R + 1; i++) {
  let row = input[i].trim().split("");
  maze.push(row);
  for (let j = 0; j < C; j++) {
    if (row[j] === "F") {
      queueF.push([i - 1, j]);
      visited[i - 1][j] = true; // 불은 방문 처리
    }
    if (row[j] === "J") {
      queueJ.push([i - 1, j]);
    }
    if (row[j] === "#") visited[i - 1][j] = true;
  }
}

let direction = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

let fFront = 0;
let jFront = 0;
let count = 0;

// BFS 실행
while (queueJ.length > jFront) {
  // 1. 불 확산
  let fCount = queueF.length - fFront;
  for (let i = 0; i < fCount; i++) {
    let [curFX, curFY] = queueF[fFront++];
    for (let [dx, dy] of direction) {
      let newFX = curFX + dx;
      let newFY = curFY + dy;
      if (newFX < 0 || newFX >= R || newFY < 0 || newFY >= C) continue;
      if (!visited[newFX][newFY]) {
        queueF.push([newFX, newFY]);
        visited[newFX][newFY] = true; // 불은 방문 처리
      }
    }
  }

  // 2. 지훈 이동
  let jCount = queueJ.length - jFront; // 지훈의 현재 레벨 처리
  for (let i = 0; i < jCount; i++) {
    let [curJX, curJY] = queueJ[jFront++];
    for (let [dx, dy] of direction) {
      let newJX = curJX + dx;
      let newJY = curJY + dy;

      // 미로 탈출 확인
      if (newJX < 0 || newJX >= R || newJY < 0 || newJY >= C) {
        console.log(count + 1);
        return;
      }

      // 방문하지 않은 위치만 이동
      if (!visited[newJX][newJY]) {
        queueJ.push([newJX, newJY]);
        visited[newJX][newJY] = true; // 지훈 방문 처리
      }
    }
  }

  count++;
}

console.log("IMPOSSIBLE");

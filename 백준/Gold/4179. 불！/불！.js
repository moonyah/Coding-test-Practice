let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [R, C] = input[0].split(" ").map(Number);
let maze = [];
let J = [];
let F = [];
let visitedJ = Array.from({ length: R }, () => Array(C).fill(false));
let visitedF = Array.from({ length: R }, () => Array(C).fill(false));

for (let i = 1; i < R + 1; i++) {
  for (let j = 0; j < C; j++) {
    maze.push(input[i][j]);
    if (input[i][j] === "J") {
      J = [i - 1, j];
    }
    if (input[i][j] === "F") {
      F.push([i - 1, j]);
    }
    if (input[i][j] === "#") {
      visitedJ[i - 1][j] = true;
      visitedF[i - 1][j] = true;
    }
  }
}

let direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let queueJ = [J];
let queueF = F;
visitedJ[J[0]][J[1]] = true;
for (let fire of queueF) {
  visitedF[fire[0]][fire[1]] = true;
}
let answer = 0;
let exit = false;

while (queueJ.length > 0 && !exit) {
  answer++;

  // 불의 확산 먼저 처리
  let fireLen = queueF.length;
  for (let i = 0; i < fireLen; i++) {
    let [fireY, fireX] = queueF.shift();
    for (let [y, x] of direction) {
      let newFireY = fireY + y;
      let newFireX = fireX + x;
      if (
        0 <= newFireY &&
        newFireY < R &&
        0 <= newFireX &&
        newFireX < C &&
        !visitedF[newFireY][newFireX]
      ) {
        visitedF[newFireY][newFireX] = true;
        queueF.push([newFireY, newFireX]);
      }
    }
  }

  // 지훈의 이동 처리
  let jihunLen = queueJ.length;
  for (let i = 0; i < jihunLen; i++) {
    let [curY, curX] = queueJ.shift();
    for (let [y, x] of direction) {
      let newY = curY + y;
      let newX = curX + x;

      // 탈출 조건 확인 (경계를 벗어난 경우)
      if (newY < 0 || newY >= R || newX < 0 || newX >= C) {
        console.log(answer);
        exit = true;
        break;
      }

      if (
        0 <= newY &&
        newY < R &&
        0 <= newX &&
        newX < C &&
        !visitedJ[newY][newX] &&
        !visitedF[newY][newX]
      ) {
        visitedJ[newY][newX] = true;
        queueJ.push([newY, newX]);
      }
    }
    if (exit) break;
  }
}

if (!exit) {
  console.log("IMPOSSIBLE");
}

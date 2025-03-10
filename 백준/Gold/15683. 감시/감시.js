let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);

// CCTV의 좌표, 종류 저장
let office = [];
for (let i = 1; i <= N; i++) {
  office.push(input[i].trim().split(" ").map(Number));
}

let cctv = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (office[i][j] !== 0 && office[i][j] !== 6) {
      cctv.push([i, j, office[i][j]]);
    }
  }
}

const directions = [
  [0, 1], // 동 (오른쪽)
  [1, 0], // 남 (아래쪽)
  [0, -1], // 서 (왼쪽)
  [-1, 0], // 북 (위쪽)
];

// CCTV별 감시 방향 조합
const cctvDir = [
  [], // 0번 CCTV 없음
  [[0], [1], [2], [3]], // 1번 CCTV
  [
    [0, 2],
    [1, 3],
  ], // 2번 CCTV
  [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ], // 3번 CCTV
  [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 0],
    [3, 0, 1],
  ], // 4번 CCTV
  [[0, 1, 2, 3]], // 5번 CCTV (모든 방향 감시)
];

let minBlindSpot = Infinity; // 최소 사각지대 저장
function dfs(depth, officeCopy) {
  if (depth === cctv.length) {
    // 사각지대 계산 후, 최소값 갱신
    let blindSpot = countBlindSpot(officeCopy);
    minBlindSpot = Math.min(minBlindSpot, blindSpot);
    return;
  }
  let [cY, cX, cType] = cctv[depth];

  for (let arr of cctvDir[cType]) {
    let newOffice = officeCopy.map((row) => [...row]); // 깊은 복사
    checkOffice(newOffice, cY, cX, arr);
    dfs(depth + 1, [...newOffice]);
  }
}

function checkOffice(office, cY, cX, arr) {
  // 예) [[0], [1], [2], [3]] 중에 [0]
  office[cY][cX] = "#";
  for (let dir of arr) {
    let [dY, dX] = directions[dir];
    let nY = cY + dY;
    let nX = cX + dX;
    while (true) {
      if (0 > nY || nY >= N || 0 > nX || nX >= M) break;
      if (office[nY][nX] === 6) break;
      if (office[nY][nX] === 0) {
        office[nY][nX] = "#";
      }
      nY += dY;
      nX += dX;
    }
  }
}

// 사각지대(0의 개수) 계산 함수
function countBlindSpot(office) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (office[i][j] === 0) count++;
    }
  }
  return count;
}

dfs(0, office); // 현재 탐색 중인 CCTV 인덱스
console.log(minBlindSpot);

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let testCase = Number(input[0]);

for (let i = 0; i < testCase; i++) {
  // 0, 1, 2 => 1, 4, 7
  let sideLen = Number(input[(i + 1) * 3 - 2]);
  let [a, b] = input[(i + 1) * 3 - 1].split(" ").map((a) => Number(a));
  let [c, d] = input[(i + 1) * 3].split(" ").map((a) => Number(a));
  // console.log(sideLen, a, b, c, d);

  let visited = [];
  for (let i = 0; i < sideLen; i++) {
    visited.push(Array(sideLen).fill(false));
  }
  // console.log(visited);

  let queue = [];
  let front = 0; // 큐의 시작 인덱스
  queue.push([a, b, 0]);
  visited[a][b] = true;

  while (a < sideLen && b < sideLen) {
    let [x, y, len] = queue[front++];

    if (x === c && y === d) {
      console.log(len);
      break;
    }

    let cases = [
      [x - 2, y - 1],
      [x - 2, y + 1],
      [x - 1, y + 2],
      [x - 1, y - 2],
      [x + 1, y + 2],
      [x + 1, y - 2],
      [x + 2, y + 1],
      [x + 2, y - 1],
    ];
    // 이동할 수 있는 3가지 경우
    for (let [nextX, nextY] of cases) {
      if (
        nextX >= 0 &&
        nextY >= 0 &&
        nextX < sideLen &&
        nextY < sideLen &&
        !visited[nextX][nextY]
      ) {
        visited[nextX][nextY] = true; // 방문 처리
        queue.push([nextX, nextY, len + 1]); // 큐에 새로운 위치와 시간을 추가
      }
    }
  }
}

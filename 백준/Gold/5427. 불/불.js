const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let testCase = Number(input[0]); // 최대 100
let startIndex = 1;
while (testCase > 0) {
  let [w, h] = input[startIndex].split(" ").map(Number);
  let map = [];
  for (let i = 1; i <= h; i++) {
    map.push([...input[startIndex + i].trim()]);
  }
  let answer = bfs(map, w, h);
  console.log(answer === 0 ? "IMPOSSIBLE" : answer);
  startIndex += h + 1;
  testCase--;
}

function bfs(map, w, h) {
  // 가로, 세로
  let SGLocation = [];
  let fires = [];
  let fireVisited = Array.from({ length: h }, () => Array(w).fill(false));
  let SGvisited = Array.from({ length: h }, () => Array(w).fill(false));
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (map[i][j] === "#") {
        fireVisited[i][j] = true;
        SGvisited[i][j] = true;
      }
      if (map[i][j] === "@") {
        SGLocation = [i, j];
        SGvisited[i][j] = true;
      }
      if (map[i][j] === "*") {
        SGvisited[i][j] = true;
        fireVisited[i][j] = true;
        fires.push([i, j]);
      }
    }
  }
  // console.log("fireVisited 세팅", fireVisited);
  // console.log("SGvisited 세팅", SGvisited);

  // console.log(SGLocation, fires);
  // console.log(map, w, h);

  // 불이 번진다.
  let fireQueue = [...fires];
  let SGQueue = [SGLocation];
  let direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let dayCount = 0;
  let fireFront = 0;
  let SGFront = 0;
  while (fireQueue.length > fireFront || SGQueue.length > SGFront) { // or
    let newFireQueue = [];
    // 1초 지날 경우: 불 번짐
    while (fireQueue.length > fireFront) {
      let curr = fireQueue[fireFront];
      for (let [y, x] of direction) {
        let nextY = curr[0] + y;
        let nextX = curr[1] + x;
        if (nextY < 0 || nextY >= h || nextX < 0 || nextX >= w) continue;
        if (!fireVisited[nextY][nextX]) {
          fireVisited[nextY][nextX] = true;
          SGvisited[nextY][nextX] = true;
          newFireQueue.push([nextY, nextX]);
        }
      }
      fireFront++;
    }
    fireFront = 0;
    // console.log("newFireQueue", newFireQueue);
    // console.log("fireVisited", fireVisited);
    fireQueue = newFireQueue;

    let newSGQueue = [];
    // 1초 지날 경우: 상근 이동
    while (SGQueue.length > SGFront) {
      let curr = SGQueue[SGFront];
      // console.log("상근 현 위치", curr);
      for (let [y, x] of direction) {
        let nextY = curr[0] + y;
        let nextX = curr[1] + x;
        if (nextY < 0 || nextY >= h || nextX < 0 || nextX >= w)
          return dayCount + 1;
        if (!SGvisited[nextY][nextX]) {
          SGvisited[nextY][nextX] = true;
          newSGQueue.push([nextY, nextX]);
        }
      }
      SGFront++;
    }
    SGFront = 0;
    if (newSGQueue.length === 0) return 0;
    // console.log("newSGQueue", newSGQueue);
    // console.log("SGvisited", SGvisited);
    SGQueue = newSGQueue;
    dayCount++;
  }
  // 상근이가 나아간다.
  return dayCount;
}
// 불 문제를 풀 때, 주의할 점
// 불이 먼저 번지고
// 상근이는 불이 난 곳으로 갈 수 없음

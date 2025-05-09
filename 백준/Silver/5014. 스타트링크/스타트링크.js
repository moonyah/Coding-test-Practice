const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [F, S, G, U, D] = input[0].split(" ").map(Number);
// F는 가장 높은 층
// 현재 있는 곳은 S

// 스타트링크는 G층
// 위로 U층 가는 버튼
// 아래로 D층 가는 버튼
// 눌러야 하는 버튼의 최솟값 출력하기

let queue = [[S, 0]];
let visited = Array(F + 1).fill(false);
visited[S] = true;
let answer = null;
while (queue.length > 0) {
  let [curr, count] = queue.shift();
  if (curr === G) {
    answer = count;
    break;
  }
  let moveUp = curr + U;
  let moveDown = curr - D;
  if (0 < moveUp && moveUp <= F && !visited[moveUp]) {
    visited[moveUp] = true;
    queue.push([moveUp, count + 1]);
  }
  if (0 < moveDown && moveDown <= F && !visited[moveDown]) {
    visited[moveDown] = true;
    queue.push([moveDown, count + 1]);
  }
}
if (answer === null) {
  console.log("use the stairs");
} else {
  console.log(answer);
}

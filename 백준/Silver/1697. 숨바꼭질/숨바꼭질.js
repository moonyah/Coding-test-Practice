const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [N, K] = input[0].split(" ").map(Number);

let visited = Array(100001).fill(false);
if (N === K) {
  console.log(0);
  return;
}
let queue = [[N, 0]];
visited[N] = true;
let index = 0;
while (index < queue.length) {
  let [cur, count] = queue[index++];
  for (let [nextCur, nextCount] of [
    [cur * 2, count + 1],
    [cur - 1, count + 1],
    [cur + 1, count + 1],
  ]) {
    if (0 <= nextCur && nextCur < 100001 && visited[nextCur] === false) {
      if (nextCur === K) {
        console.log(nextCount);
        return;
      }
      visited[nextCur] = true;
      queue.push([nextCur, nextCount]);
    }
  }
}

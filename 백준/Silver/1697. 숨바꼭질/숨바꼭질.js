const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [N, K] = input[0].split(" ").map(Number);

let maxLimit = Math.max(N, K) * 2 + 1;
let visited = Array(maxLimit).fill(false);

function bfs(N, K) {
  let queue = [[N, 0]];
  visited[N] = true;
  let index = 0;

  while (index < queue.length) {
    let [currentPos, currentTime] = queue[index++];

    if (currentPos === K) {
      return currentTime;
    }

    let nextPositions = [currentPos - 1, currentPos + 1, currentPos * 2];
    for (let nextPos of nextPositions) {
      if (nextPos >= 0 && nextPos < maxLimit && !visited[nextPos]) {
        queue.push([nextPos, currentTime + 1]);
        visited[nextPos] = true;
      }
    }
  }
  return -1;
}

let answer = bfs(N, K);
console.log(answer);
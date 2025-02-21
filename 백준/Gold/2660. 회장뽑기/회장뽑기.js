let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let graph = Array.from({ length: N + 1 }, () => []);
let line = 1;
while (true) {
  let [a, b] = input[line].split(" ").map(Number);
  if (a === -1 && b === -1) break;
  if (a !== b) {
    graph[a].push(b);
    graph[b].push(a);
  }
  line++;
}
let candidate = [];
for (let i = 1; i <= N; i++) {
  if (graph[i].length > 0) {
    candidate.push([i, score(i)]);
  }
}
// console.log(candidate);

candidate.sort((a, b) => a[1] - b[1]);
let minScore = candidate[0][1];
let candidateCount = candidate.filter((a) => a[1] === minScore).length;
let candidateNumArr = candidate
  .filter((a) => a[1] === minScore)
  .map((a) => a[0]);
let sortedCandidateNumArr = candidateNumArr.sort((a, b) => a - b);
console.log(minScore, candidateCount);
console.log(...sortedCandidateNumArr);

function score(memberNum) {
  let queue = [];
  let visited = Array(N + 1).fill(false);
  visited[memberNum] = true;
  queue.push(memberNum);
  let score = -1;
  while (queue.length > 0) {
    let newQueue = [];
    while (queue.length > 0) {
      let curr = queue.shift();
      for (let i of graph[curr]) {
        if (!visited[i]) {
          visited[i] = true;
          newQueue.push(i);
        }
      }
    }
    score++;
    queue = newQueue;
  }
  return score;
}
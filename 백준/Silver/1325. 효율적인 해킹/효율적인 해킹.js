const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

// 역방향 그래프 생성: A가 B를 신뢰하면 graph[B]에 A 저장
const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[b].push(a);
}

const counts = Array(N + 1).fill(0);
let maxCount = 0;

for (let i = 1; i <= N; i++) {
  const visited = new Uint8Array(N + 1);
  const queue = new Array(N);
  let head = 0, tail = 0;
  queue[tail++] = i;
  visited[i] = 1;
  let count = 1;
  
  while (head < tail) {
    const cur = queue[head++];
    const neighbors = graph[cur];
    for (let j = 0, len = neighbors.length; j < len; j++) {
      const nxt = neighbors[j];
      if (!visited[nxt]) {
        visited[nxt] = 1;
        queue[tail++] = nxt;
        count++;
      }
    }
  }
  
  counts[i] = count;
  if (count > maxCount) {
    maxCount = count;
  }
}

const answer = [];
for (let i = 1; i <= N; i++) {
  if (counts[i] === maxCount) answer.push(i);
}
console.log(answer.join(" "));

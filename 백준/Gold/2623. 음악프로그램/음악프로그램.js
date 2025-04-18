let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let inDegree = Array(N + 1).fill(0);
let graph = Array.from({ length: N + 1 }, () => []);
for (let line = 1; line <= M; line++) {
  let lineArr = input[line].split(" ").map(Number);
  for (let el = 1; el < lineArr.length - 1; el++) {
    graph[lineArr[el]].push(lineArr[el + 1]);
    inDegree[lineArr[el + 1]]++;
  }
}
// console.log(graph);
// console.log(inDegree);
let queue = [];

// 처음 진입 차수 넣기
for (let i = 1; i <= N; i++) {
  if (inDegree[i] === 0) {
    queue.push(i);
  }
}
if (queue.length === 0) {
  console.log(0);
  return;
}
// console.log(queue);
let answer = [];
while (queue.length > 0) {
  let curr = queue.shift();
  answer.push(curr);
  for (let next of graph[curr]) {
    inDegree[next]--;
    if (inDegree[next] === 0) {
      queue.push(next);
    }
  }
}
if (answer.length !== N) {
  console.log(0);
} else {
  console.log(answer.join("\n"));
}

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i < M + 1; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
// console.log(graph);

let level = [];
for (let i = 1; i < N + 1; i++) {
  let subLevel = 0;
  for (let j = 1; j < N + 1; j++) {
    if (i !== j) {
      // console.log(minNum(i, j));
      subLevel += minNum(i, j);
    }
  }
  level.push(subLevel);
}
// console.log(level);

function minNum(n, m) {
  // console.log(n, m);
  let answer = 1;
  let queue = [...graph[n]];
  let visited = Array(N + 1).fill(false);
  for (let i = 0; i < queue.length; i++) {
    visited[queue[i]] = true;
    if (queue[i] === m) {
      return answer;
    }
  }
  while (queue.length > 0) {
    let newQueue = [];
    while (queue.length > 0) {
      let curr = queue.shift();
      for (let i of graph[curr]) {
        if (!visited[i]) {
          if (i === m) {
            answer++;
            return answer;
          }
          visited[i] = true;
          newQueue.push(i);
        }
      }
    }
    queue = newQueue;
    answer++;
  }
  return answer;
}

let result = Math.min(...level);
console.log(level.indexOf(result) + 1);

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let graph = Array.from({ length: N + 1 }, () => []); // 양방향으로 저장해야 함
for (let i = 1; i <= M; i++) {
  let [A_i, B_i] = input[i].split(" ").map(Number);
  graph[A_i].push(B_i);
  graph[B_i].push(A_i);
}
let queue = [[1, 0]];
let visited = Array(N + 1).fill(false);
let arr = Array(N + 1).fill(0);

while (queue.length > 0) {
  let [curr, count] = queue.shift();
  visited[curr] = true;
  count += 1;
  for (let i of graph[curr]) {
    if (!visited[i]) {
      visited[i] = true;
      queue.push([i, count]);
      arr[i] = count;
    }
  }
}

let maxDistance = 0;
let count = 0;
let maxDistanceNum = [];
for (let i = 0; i <= N; i++) {
  if (maxDistance < arr[i]) {
    maxDistance = arr[i];
    maxDistanceNum = [i];
    count = 1;
  } else if (maxDistance === arr[i]) {
    maxDistanceNum.push(i);
    count++;
  }
}
console.log(Math.min(...maxDistanceNum), maxDistance, count);

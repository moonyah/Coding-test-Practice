const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let nmLine = 0;
let [n, m] = input[nmLine].split(" ").map(Number);
let caseNum = 1;
while (!(n === 0 && m === 0)) {
  if (n === 0 && m === 0) break;
  let arr = [];
  for (let i = nmLine + 1; i <= nmLine + m; i++) {
    let [A, B] = input[i].split(" ").map(Number);
    arr.push([A, B]);
  }
  let treeCount = tree(n, arr);
  output(caseNum, treeCount);
  nmLine += m + 1;
  caseNum++;
  [n, m] = input[nmLine].split(" ").map(Number);
}

// 정점 개수, 간선 정보
function tree(n, arr) {
  let graph = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < arr.length; i++) {
    let [A, B] = arr[i];
    graph[A].push(B);
    graph[B].push(A);
  }
  // console.log(graph);
  let visited = Array(n + 1).fill(false);
  let treeCount = 0;

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      let queue = [[i, 0]]; // [현재 노드, 부모 노드]
      visited[i] = true;
      let isTree = true;
      let front = 0;
      while (queue.length > front) {
        let [curr, parent] = queue[front];
        for (let next of graph[curr]) {
          if (!visited[next]) {
            visited[next] = true;
            queue.push([next, curr]);
          } else if (next !== parent) {
            isTree = false; // 싸이클 발견
          }
        }
        front++;
      }
      if (isTree) {
        treeCount++;
      }
    }
  }
  return treeCount;
}

function output(caseNum, treeCount) {
  if (treeCount > 1) {
    console.log(`Case ${caseNum}: A forest of ${treeCount} trees.`);
  } else if (treeCount === 1) {
    console.log(`Case ${caseNum}: There is one tree.`);
  } else {
    console.log(`Case ${caseNum}: No trees.`);
  }
}

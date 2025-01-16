const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
// console.log(N);
let graphArr = Array(N + 1)
  .fill(null)
  .map((a) => (a = []));
for (let i = 1; i < N; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graphArr[a].push(b);
  graphArr[b].push(a);
}
// 무방향 그래프
// console.log(graphArr);
let parentsMemo = Array(N + 1).fill(0);
let visited = Array(N + 1).fill(false);
for (let i = 1; i < N + 1; i++) {
  if (visited[i] === false) {
    dfs(i);
  }
}

function dfs(i) {
  let stack = [i];
  visited[i] = true;
  while (stack.length > 0) {
    let curr = stack.pop();
    for (let i of graphArr[curr]) {
      if (visited[i] === false) {
        visited[i] = true;
        stack.push(i);
        parentsMemo[i] = curr;
        // console.log(`stack 상태 ${stack}`);
        // console.log(`${i}일 때 부모${curr}기록 ${parentsMemo}`);
      } else {
        continue;
      }
    }
  }
}

// console.log(parentsMemo);
for (let i = 2; i < N + 1; i++) {
  console.log(parentsMemo[i]);
}

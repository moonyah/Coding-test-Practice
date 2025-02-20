const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i < N + 1; i++) {
  let arr = input[i].trim().split(" ");
  for (let j = 0; j < N; j++) {
    if (arr[j] === "0") {
    } else {
      graph[i].push(j + 1);
    }
  }
}

function bfs(start, find) {
  let stack = [start];
  let visited = Array(N + 1).fill(false);
  while (stack.length > 0) {
    let curr = stack.pop();
    for (let i of graph[curr]) {
      if (i === find) {
        return 1;
      }
      if (!visited[i]) {
        visited[i] = true;
        stack.push(i);
      }
    }
  }
  return 0;
}

let output = "";
for (let i = 1; i < N + 1; i++) {
  let str = "";
  for (let j = 0; j < N; j++) {
    str += bfs(i, j + 1) + " ";
  }
  output += str + "\n";
}

console.log(output);

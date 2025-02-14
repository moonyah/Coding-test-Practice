const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [n, m] = input[0].split(" ").map(Number);
  let parent = Array(n + 1)
    .fill(0)
    .map((_, index) => index);
  let rank = Array(n + 1).fill(1);

  for (let i = 1; i <= m; i++) {
    let [operation, a, b] = input[i].split(" ").map(Number);
    if (operation === 1) {
      console.log(find(a) === find(b) ? "YES" : "NO");
    } else if (operation === 0) {
      union(a, b);
    }
  }

  function find(num) {
    if (parent[num] !== num) {
      parent[num] = find(parent[num]);
    }
    return parent[num];
  }

  function union(a, b) {
    let rootA = find(a);
    let rootB = find(b);
    if (rootA !== rootB) {
      if (rank[rootA] > rank[rootB]) {
        parent[rootB] = rootA;
      } else if (rank[rootA] < rank[rootB]) {
        parent[rootA] = rootB;
      } else {
        parent[rootB] = rootA;
        rank[rootA]++;
      }
    }
  }
});

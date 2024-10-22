const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map((a) => Number(a));
let vis = Array(N + 1).fill(false);

function recursion(depth, answer) {
  if (depth === M) {
    console.log(answer);
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (vis[i] === false) {
      let answerBuf = answer;
      answer += i + " ";
      vis[i] = true;
      recursion(depth + 1, answer);
      vis[i] = false;
      answer = answerBuf;
    }
  }
}

recursion(0, "");

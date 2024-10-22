const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map((a) => Number(a));
let visit = Array(N + 1).fill(false);

// 1 2 3 4
// t t f f
function recursion(depth, answer, start) {
  if (depth === M) {
    console.log(answer);
    return;
  }
  for (let i = start; i <= N; i++) {
    if (visit[i] === false) {
      let answerBuf = answer;
      answer += i + " ";
      visit[i] = true;
      recursion(depth + 1, answer, i);
      visit[i] = false;
      answer = answerBuf;
    }
  }
}
recursion(0, "", 1);

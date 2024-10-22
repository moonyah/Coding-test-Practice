const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map((a) => Number(a));
let visit = Array(N + 1).fill(false);
let arr = input[1]
  .split(" ")
  .map((a) => Number(a))
  .sort((a, b) => a - b);

let answer = "";
function recursion(depth, line) {
  if (depth === M) {
    answer += line + "\n";
    return;
  }
  for (let i = 0; i < N; i++) {
    if (visit[i] === false) {
      let lineBuf = line;
      line += arr[i] + " ";
      visit[i] = true;
      recursion(depth + 1, line);
      visit[i] = false;
      line = lineBuf;
    }
  }
}
recursion(0, "");
console.log(answer.trim());
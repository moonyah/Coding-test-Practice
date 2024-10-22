const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map((a) => Number(a));
const arr = input[1]
  .split(" ")
  .map((a) => Number(a))
  .sort((a, b) => a - b);

let answer = "";
function recursion(depth, line, startIndex) {
  if (depth === M) {
    answer += line + "\n";
    return;
  }
  for (let i = startIndex; i < N; i++) {
    let lineBuf = line;
    line += arr[i] + " ";
    recursion(depth + 1, line, i);
    line = lineBuf;
  }
}
recursion(0, "", 0);
console.log(answer.trim());
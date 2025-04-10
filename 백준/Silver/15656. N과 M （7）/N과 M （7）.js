const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map((a) => Number(a));
const arr = input[1]
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
    let lineBuf = line;
    line += arr[i] + " ";
    recursion(depth + 1, line);
    line = lineBuf;
  }
}
recursion(0, "");
console.log(answer.trim());

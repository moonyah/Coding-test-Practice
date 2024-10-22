const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map((a) => Number(a));
let answer = "";
function recursion(depth, line, start) {
  if (depth === M) {
    answer += line + "\n";
    return;
  }
  for (let i = start; i <= N; i++) {
    let lineBuf = line;
    line += i + " ";
    recursion(depth + 1, line, i);
    line = lineBuf;
  }
}
recursion(0, "", 1);
console.log(answer.trim());
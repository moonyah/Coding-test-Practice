const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map((a) => Number(a));
let answer = "";
function recursion(depth, line) {
  if (depth === M) {
    answer += line + "\n";
    return;
  }
  for (let i = 1; i <= N; i++) {
    let lineBuf = line;
    line += i + " ";
    recursion(depth + 1, line);
    line = lineBuf;
  }
}

recursion(0, "");
console.log(answer.trim());

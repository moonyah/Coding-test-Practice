const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map((a) => Number(a));
const arr = input[1]
  .split(" ")
  .map((a) => Number(a))
  .sort((a, b) => a - b);
let visit = Array(N).fill(false); // 방문한 index 체크

let answer = "";
let tempArr = [];
function recursion(depth, line) {
  if (depth === M) {
    // if (!tempArr.includes(line)) {
    //   tempArr.push(line);
    //   answer += line + "\n";
    // }
    tempArr.push(line.trim());
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
let set = new Set(tempArr);
for (let i of set) {
  console.log(i);
}


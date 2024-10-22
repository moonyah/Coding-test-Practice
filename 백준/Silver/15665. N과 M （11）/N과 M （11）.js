const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map((a) => Number(a));
const arr = input[1]
  .split(" ")
  .map((a) => Number(a))
  .sort((a, b) => a - b);
const uniqueArr = [...new Set(arr)];

// let tempArr = [];
let answer = "";
function recursion(depth, line) {
  if (depth === M) {
    // tempArr.push(line.trim());
    answer += line + "\n";
    return;
  }
  for (let i = 0; i < uniqueArr.length; i++) {
    let lineBuf = line;
    line += uniqueArr[i] + " ";
    recursion(depth + 1, line);
    line = lineBuf;
  }
}
recursion(0, "");
// let set = new Set(tempArr);
// for (let i of set) {
//   console.log(i);
// }
console.log(answer);
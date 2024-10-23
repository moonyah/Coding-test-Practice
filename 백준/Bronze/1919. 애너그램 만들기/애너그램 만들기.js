// 그럼 1000자가 다 다를 경우
// 비교하는 경우의 수는 1000000번이다.
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let word1 = input[0]
  .trim()
  .split("")
  .sort((a, b) => a.charCodeAt() - b.charCodeAt());
let word2 = input[1]
  .trim()
  .split("")
  .sort((a, b) => a.charCodeAt() - b.charCodeAt());

let twiceNum = 0;

// console.log(word1, word2);
let start = 0;
for (let i = 0; i < word1.length; i++) {
  for (let j = start; j < word2.length; j++) {
    // console.log(word1[i], word2[j], "비교");
    if (word1[i] === word2[j]) {
      // console.log(word1[i], word2[j]);
      start = j + 1;
      twiceNum++;
      i++;
    }
  }
}
// console.log(twiceNum);
console.log(word1.length + word2.length - twiceNum * 2);
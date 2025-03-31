const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let S = input[0].trim();
let K = input[1].trim();
let filterS = [];
for (let i in S) {
  if (Number(S[i]) != S[i]) {
    filterS.push(S[i]);
  }
}
let answer = filterS.join("").includes(K);
console.log(Number(answer));

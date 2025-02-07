let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let S = input[0].trim();
let strArr = [];
for (let i = 0; i < S.length; i++) {
  strArr.push(S.slice(i));
}
strArr.sort().map((a) => console.log(a));

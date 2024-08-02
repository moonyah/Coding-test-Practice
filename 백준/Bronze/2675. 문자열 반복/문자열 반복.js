const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const testCases = Number(input[0]);
for (let i = 1; i <= testCases; i++) {
  let array = [];
  let r = input[i].split(" ")[0];
  let s = input[i].split(" ")[1];
  for (let j = 0; j < s.length; j++) {
    for (let z = 0; z < r; z++) {
      array.push(s[j]);
    }
  }
  console.log(array.join(""));
}

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let str = input[0].trim();
let len = str.length;
let set = new Set();
for (let i = 0; i < len; i++) {
  for (let j = i + 1; j <= len; j++) {
    set.add(str.slice(i, j));
  }
}
console.log(set.size);
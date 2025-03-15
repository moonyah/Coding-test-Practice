const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let str = input[0].trim();
let len = str.length;
let set = new Set();
for (let i = 0; i < len; i++) {
  for (let j = 1; j <= len; j++) {
    if (str.slice(i, j)) set.add(str.slice(i, j));
  }
}
console.log(set.size);
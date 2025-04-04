const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = input[0].trim();
let len = N.length;
for (let i = 0; i <= Math.floor(len / 10); i++) {
  let str = N.slice(i * 10, (i + 1) * 10);
  console.log(str);
}

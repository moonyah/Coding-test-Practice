let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let str = input[0];
let target = input[1];

let noMore = true;
let answer = 0;
while (noMore) {
  if (str.includes(target)) {
    let idx = str.lastIndexOf(target);
    str = str.slice(0, idx);
    answer++;
  } else {
    noMore = false;
  }
}
console.log(answer);

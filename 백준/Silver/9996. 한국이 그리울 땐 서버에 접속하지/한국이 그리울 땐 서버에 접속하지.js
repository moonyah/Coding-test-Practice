let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let patternArr = input[1].trim().split("*");
let front = false;
let back = false;
for (let i = 2; i < N + 2; i++) {
  let str = input[i].trim();
  if (str.indexOf(patternArr[0]) === 0) {
    front = true;
    str = str.slice(patternArr[0].length);
    // console.log(str);
  }
  if (str.lastIndexOf(patternArr[1]) === str.length - patternArr[1].length) {
    back = true;
  }
  if (front && back) {
    console.log("DA");
  } else {
    console.log("NE");
  }
  front = false;
  back = false;
}

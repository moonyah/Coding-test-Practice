const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let t = input[0].trim().split("");
let p = input[1].trim();
let removeOrder = input[2].trim().split(" ").map(Number);

let rest = Array(t.length).fill(false);
let count = 0;

function isSubsequence(strArr, target) {
  let i = 0,
    j = 0;
  while (i < strArr.length && j < target.length) {
    if (strArr[i] === target[j]) j++;
    i++;
  }
  return j === target.length;
}

for (let i = 0; i < removeOrder.length; i++) {
  rest[removeOrder[i] - 1] = true;

  let arr = [];
  for (let j = 0; j < t.length; j++) {
    if (!rest[j]) {
      arr.push(t[j]);
    }
  }

  if (isSubsequence(arr, p)) {
    count++;
  } else {
    console.log(count);
    break;
  }
}

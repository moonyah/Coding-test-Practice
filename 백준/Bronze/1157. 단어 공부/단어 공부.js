const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let word = input[0].split("");
let count = {};
for (let i = 0; i < word.length; i++) {
  let char = word[i].toUpperCase();
  count[char] = (count[char] || 0) + 1;
}
let max = 0;
let maxChar = [];
for (let i in count) {
  if (count[i] > max) {
    max = count[i];
    maxChar = [];
    maxChar.push(i);
  } else if (count[i] === max) {
    maxChar.push(i);
  }
}
if (maxChar.length > 1) {
  console.log("?");
} else {
  console.log(...maxChar);
}


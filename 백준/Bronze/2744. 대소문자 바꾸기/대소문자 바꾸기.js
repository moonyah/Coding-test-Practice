const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let word = input[0].split("");
// console.log(word);
let answer = [];
for (let i = 0; i < word.length; i++) {
  if (word[i].toUpperCase() === word[i]) {
    answer.push(word[i].toLowerCase());
  } else {
    answer.push(word[i].toUpperCase());
  }
}
console.log(answer.join(""));

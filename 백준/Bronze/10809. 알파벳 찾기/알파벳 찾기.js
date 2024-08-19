const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let str = input[0].split("");
let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let answer = [];
for (let i = 0; i < alphabet.length; i++) {
  if (str.includes(alphabet[i])) {
    answer.push(str.indexOf(alphabet[i]));
  } else {
    answer.push(-1);
  }
}
console.log(answer.join(" "));

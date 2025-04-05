const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let word = input[0].trim();
let str = "";
for (let i of word) {
  if (i.toUpperCase() === i && i !== "-") {
    str += i;
  }
}
console.log(str);

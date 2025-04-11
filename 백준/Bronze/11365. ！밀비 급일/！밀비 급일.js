const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let line = 0;
while (input[line].trim() !== "END") {
  let sentence = [...input[line].trim()].reverse();
  line++;
  console.log(sentence.join(""));
}

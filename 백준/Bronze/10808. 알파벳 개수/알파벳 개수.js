const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const word = input[0];
let alphabet = Array(26).fill(0);
for (let i of word) {
  let idx = i.charCodeAt() - 97;
  alphabet[idx]++;
}
console.log(alphabet.join(" "));

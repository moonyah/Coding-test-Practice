const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const N = Number(input[0]);
for (let i = 1; i < N + 1; i++) {
  let [a, b] = input[i].split(" ");
  let sortA = a
    .trim()
    .split("")
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join("");
  let sortB = b
    .trim()
    .split("")
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join("");
  if (sortA === sortB) {
    console.log("Possible");
  } else {
    console.log("Impossible");
  }
}

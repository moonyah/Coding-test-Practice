const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let i = 0;
while (input[i] !== "0") {
  let temp = input[i].trim();
  if (temp === [...input[i].trim()].reverse().join("")) {
    console.log("yes");
  } else {
    console.log("no");
  }
  i++;
}

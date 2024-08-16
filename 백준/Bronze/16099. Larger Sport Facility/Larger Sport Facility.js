const input = require("fs").readFileSync(0,"utf-8").toString().split("\n");
let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let [lt, wt, le, we] = input[i].split(" ").map(Number);
  if (lt * wt > le * we) {
    console.log("TelecomParisTech");
  } else if (lt * wt < le * we) {
    console.log("Eurecom");
  } else {
    console.log("Tie");
  }
}
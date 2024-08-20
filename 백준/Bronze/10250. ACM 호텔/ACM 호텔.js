const input = require("fs").readFileSync(0,"utf-8").toString().split("\n");
let num = Number(input[0]);
let before = 0;
let after = 0;
for (let i = 1; i <= num; i++) {
  let [a, b, c] = input[i].split(" ").map(Number);
  if (c % a === 0) {
    before = a;
  } else {
    before = c % a;
  }
  after = Math.ceil(c / a);
  if (after < 10) {
    after = 0 + after.toString();
  }
  console.log(before.toString() + after.toString());
}

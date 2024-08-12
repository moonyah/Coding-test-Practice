const input = require("fs").readFileSync(0, "utf-8").toString();
let num = Number(input);

for (let i = 0; i < num; i++) {
  let str = "";
  let arr = [];
  arr.push(" ".repeat(num - i - 1));
  arr.push("*".repeat(i + 1));

  str += arr.join("");
  console.log(str);
}

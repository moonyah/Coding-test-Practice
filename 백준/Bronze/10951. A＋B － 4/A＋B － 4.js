const data = require("fs").readFileSync(0, "utf-8").toString().split("\n");

let i = 0;
while (data[i]) {
  let [a, b] = data[i]
    .split(" ")
    .map((a) => a.trim())
    .map(Number);

  console.log(a + b);
  i++;
}

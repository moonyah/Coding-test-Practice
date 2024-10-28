const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let sum = 0;
for (let i = 0; i < 3; i++) {
  sum = input[i].split(" ").reduce((a, b) => Number(a) + Number(b));
  switch (sum) {
    case 0:
      console.log("D");
      break;
    case 1:
      console.log("C");
      break;
    case 2:
      console.log("B");
      break;
    case 3:
      console.log("A");
      break;
    case 4:
      console.log("E");
      break;
  }
}

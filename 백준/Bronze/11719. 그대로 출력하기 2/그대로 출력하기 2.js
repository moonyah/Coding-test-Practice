const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let i = 0;
while (true) {
  let text = input[i];
  if (text === undefined) {
    break;
  } else {
    console.log(text);
  }
  i++;
}

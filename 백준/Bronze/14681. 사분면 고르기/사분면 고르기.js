const data = require("fs").readFileSync(0, "utf-8").toString().split("\n");
let x = Number(data[0]);
let y = Number(data[1]);

if (x > 0) {
  if (y > 0) {
    console.log(1);
  } else {
    console.log(4);
  }
} else {
  if (y < 0) {
    console.log(3);
  } else {
    console.log(2);
  }
}

const data = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let min = Number(data[1]);
let hour = Number(data[0]);

if (min >= 45) {
  min -= 45;
} else {
  min += 15;
  hour -= 1;
  if (hour < 0) {
    hour = 23;
  }
}

console.log(hour, min);
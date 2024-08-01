const data = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let hour = Number(data[0].split(" ")[0]);
let min = Number(data[0].split(" ")[1]);

let beforeTotalMin = hour * 60 + min;
let afterTotalMin = beforeTotalMin + Number(data[1]);

let afterHour = afterTotalMin / 60;
if (afterHour >= 24) afterHour -= 24;

let afterMin = afterTotalMin % 60;

console.log(parseInt(afterHour), afterMin);
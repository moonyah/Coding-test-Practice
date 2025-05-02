const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let score = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};
let subScore = 0;
let points = 0;
for (let i = 0; i < 20; i++) {
  let [subject, point, rating] = input[i].trim().split(" ");
  if (rating !== "P") {
    subScore += score[rating] * Number(point);
    points += Number(point);
  }
}
console.log(subScore / points);

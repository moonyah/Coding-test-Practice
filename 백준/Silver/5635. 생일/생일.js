let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let min = ["", 0, 0, 0];
let max = ["", Infinity, Infinity, Infinity];
for (let i = 1; i < n + 1; i++) {
  let curr = input[i].trim().split(" ");
  let currName = curr[0];
  let currDay = Number(curr[1]);
  let currMonth = Number(curr[2]);
  let currYear = Number(curr[3]);

  if (
    currYear > min[3] ||
    (currYear === min[3] && currMonth > min[2]) ||
    (currYear === min[3] && currMonth === min[2] && currDay > min[1])
  ) {
    min = [currName, currDay, currMonth, currYear];
  }

  if (
    currYear < max[3] ||
    (currYear === max[3] && currMonth < max[2]) ||
    (currYear === max[3] && currMonth === max[2] && currDay < max[1])
  ) {
    max = [currName, currDay, currMonth, currYear];
  }
}
console.log(min[0]);
console.log(max[0]);

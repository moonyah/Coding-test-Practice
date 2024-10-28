let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let num = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let yCost = 0;
let mCost = 0;
for (let i = 0; i < num; i++) {
  yCost += (Math.floor(arr[i] / 30) + 1) * 10;
  mCost += (Math.floor(arr[i] / 60) + 1) * 15;
}
if (yCost < mCost) {
  console.log("Y", yCost);
} else if (yCost > mCost) {
  console.log("M", mCost);
} else {
  console.log("Y", "M", mCost);
}

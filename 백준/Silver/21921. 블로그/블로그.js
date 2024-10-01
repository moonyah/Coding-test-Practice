const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [n, x] = input[0].split(" ").map((a) => Number(a));
let visitorArr = input[1].split(" ").map((a) => Number(a));

let visitorMax = 0;
let tempSum = 0;
let end = 0;
let period = 0;
for (let start = 0; start < n; start++) {
  while (end < n && end - start < x) {
    tempSum += visitorArr[end];
    end++;
  }
  if (tempSum > visitorMax) {
    visitorMax = tempSum;
    period = 1;
  } else if (tempSum === visitorMax) {
    period++;
  }
  tempSum -= visitorArr[start];
}

if (visitorMax === 0) {
  console.log("SAD");
} else {
  console.log(visitorMax);
  console.log(period);
}

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
// console.log(arr);
let count = 0;
for (let i = 0; i < N; i++) {
  let I = 0;
  for (let j = i; j < N; j++) {
    I += arr[j];
    if (I === M) {
      // console.log(I);
      count++;
      break;
    }
  }
}
console.log(count);

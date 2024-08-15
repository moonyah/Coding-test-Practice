const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);

let arr = Array(N)
  .fill(1)
  .map((a, b) => (a = a + b));

for (let n = 1; n <= M; n++) {
  let [a, b] = input[n].split(" ").map(Number);

  // a-1인덱스와 b-1인덱스를 바꿔야 한다.
  let temp = arr[a - 1];
  arr[a - 1] = arr[b - 1];
  arr[b - 1] = temp;
}
console.log(arr.join(" "));

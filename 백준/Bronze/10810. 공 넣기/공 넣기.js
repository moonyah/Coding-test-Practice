// 0 0 0 0 0
// 3 3 0 0 0
// 3 3 4 4 0
// 1 1 1 1 0
// 1 2 1 1 0
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let data = [];
for (let n = 1; n <= M; n++) {
  let [i, j, k] = input[n].split(" ").map(Number);
  data.push([i, j, k]);
  // console.log(data);
}

let arr = Array(N).fill(0);
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (j >= data[i][0] - 1 && j <= data[i][1] - 1) {
      arr[j] = data[i][2];
    }
  }
}
console.log(arr.join(" "));

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push([...input[i].trim()]);
}
// console.log(arr);

let answer = [];
let count = 0;
for (let i = 0; i < M; i++) {
  let sum = new Set();
  for (let j = 0; j < N; j++) {
    let curr = arr[j][i];
    if (sum[curr]) {
      sum[curr] += 1;
    } else {
      sum[curr] = 1;
    }
  }
  let max = 0;
  let output = [];
  for (let i in sum) {
    if (max === sum[i]) {
      output.push(i);
    }
    if (max < sum[i]) {
      output = [i];
      max = sum[i];
    }
  }
  output.sort();
  answer.push(output[0]);
  for (let i in sum) {
    if (i !== output[0]) {
      count += sum[i];
    }
  }
}

console.log(answer.join(""));
console.log(count);

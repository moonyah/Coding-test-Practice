const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
let arr = [];
for (let i = 1; i < N + 1; i++) {
  arr.push(Number(input[i]));
}
let B = arr.sort((a, b) => Number(a) - Number(b));
let A = arr.reduce((a, b) => a + b);
if (N > 1) {
  console.log(parseInt(Math.round(A / N)));
  let mid = Math.floor(N / 2);
  console.log(B[mid]);

  // 최빈값 구하기
  let set = [...new Set(arr)];
  let frequency = 0;
  let frequencyArr = [];
  for (let i = 0; i < set.length; i++) {
    frequency = 0;
    for (let j = 0; j < N; j++) {
      if (set[i] === arr[j]) {
        frequency++;
      }
    }
    frequencyArr.push([set[i], frequency]);
  }

  let C = 0;
  frequencyArr.sort((a, b) => b[1] - a[1]);
  frequencyArr = frequencyArr.filter((a) => a[1] === frequencyArr[0][1]);
  if (frequencyArr.length > 1) {
    frequencyArr.sort((a, b) => b[1] - a[1]);
    C = frequencyArr[1][0];
  } else {
    C = frequencyArr[0][0];
  }
  console.log(C);
  let D = arr.sort((a, b) => Number(a) - Number(b));
  console.log(D[N - 1] - D[0]);
} else {
  console.log(A);
  console.log(B[0]);
  console.log(A);
  console.log(0);
}

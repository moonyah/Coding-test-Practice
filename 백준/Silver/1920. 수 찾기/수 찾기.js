const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let A = input[1].split(" ").map(Number);

let M = Number(input[2]);
let arrM = input[3].split(" ").map(Number);
A.sort((a, b) => a - b);

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) {
      return 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return 0;
}

for (let i = 0; i < M; i++) {
  const result = binarySearch(A, arrM[i]);
  console.log(result);
}

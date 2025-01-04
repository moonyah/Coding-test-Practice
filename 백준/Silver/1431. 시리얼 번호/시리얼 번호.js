const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");
let N = Number(input[0]);
let arr = [];
for (let i = 1; i < N + 1; i++) {
  arr.push(input[i].trim());
}
function compare(A, B) {
  if (A.length > B.length) {
    return 1;
  }
  if (A.length < B.length) {
    return -1;
  }
  if (A.length === B.length) {
    let aSum = 0;
    let bSum = 0;
    let arrA = [...A];
    let arrB = [...B];
    // console.log(arrA, arrB, "비교");

    for (let i = 0; i < A.length; i++) {
      if (arrA[i] == +arrA[i]) {
        aSum += +arrA[i];
      }
    }

    for (let i = 0; i < B.length; i++) {
      if (B[i] == +arrB[i]) {
        bSum += +arrB[i];
      }
    }
    // console.log(aSum, bSum);

    if (aSum > bSum) {
      return 1;
    }
    if (aSum < bSum) {
      return -1;
    }

    if (aSum === bSum) {
      return A.localeCompare(B);
    }
  }
}
arr.sort((a, b) => compare(a, b));

let answer = "";
for (let i = 0; i < N; i++) {
  answer += arr[i] + "\n";
}
console.log(answer);

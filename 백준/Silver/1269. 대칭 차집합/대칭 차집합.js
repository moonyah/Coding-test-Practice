let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [countA, countB] = input[0].split(" ").map(Number);
let arrA = input[1].split(" ").map(Number);
let arrB = input[2].split(" ").map(Number);
let setA = new Set(arrA);
let commonCount = 0;
for (let i = 0; i < countB; i++) {
  if (setA.has(arrB[i])) {
    commonCount++;
  }
}
console.log(countA - commonCount + countB - commonCount);

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
arr.sort((a, b) => b - a);
console.log(arr[k - 1]);

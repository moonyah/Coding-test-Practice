const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let aArr = input[1].split(" ").map((a) => Number(a));
let bArr = input[2].split(" ").map((a) => Number(a));

let result = [...aArr, ...bArr].sort((a, b) => a - b);
console.log(result.join(" "));
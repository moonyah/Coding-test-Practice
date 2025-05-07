const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let arr = input[1].split(" ").map(Number);
let set = new Set(arr);
console.log([...set].sort((a, b) => a - b).join(" "));

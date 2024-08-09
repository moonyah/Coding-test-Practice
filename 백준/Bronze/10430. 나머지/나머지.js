const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [A, B, C] = input[0].split(" ").map(Number);
console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
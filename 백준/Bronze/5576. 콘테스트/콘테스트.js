let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let W = [];
for (let i = 0; i < 10; i++) {
  W.push(Number(input[i]));
}
W.sort((a, b) => b - a);
let top3WScore = W[0] + W[1] + W[2];

let K = [];
for (let i = 10; i < 20; i++) {
  K.push(Number(input[i]));
}
K.sort((a, b) => b - a);
let top3KScore = K[0] + K[1] + K[2];
console.log(top3WScore, top3KScore);

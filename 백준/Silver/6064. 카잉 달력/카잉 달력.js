let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let dataNum = Number(input[0]);
let answer = [];
for (let i = 1; i <= dataNum; i++) {
  let [N, M, x, y] = input[i].split(" ").map(Number);
  let k = findK(N, M, x, y);
  answer.push(k);
}
console.log(answer.join("\n"));

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function findK(N, M, x, y) {
  const maxYear = lcm(N, M);

  for (let t = 0; ; t++) {
    let k = N * t + x;
    if (k > maxYear) break;
    if ((k - y) % M === 0) return k;
  }
  return -1;
}


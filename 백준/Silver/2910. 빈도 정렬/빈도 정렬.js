let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, C] = input[0].split(" ").map(Number);
let frequency = new Map();
let arr = input[1].split(" ").map(Number);

for (let i = 0; i < N; i++) {
  if (!frequency.has(arr[i])) {
    frequency.set(arr[i], { count: 1, index: i });
  } else {
    frequency.get(arr[i]).count++;
  }
}
arr.sort((a, b) => {
  let freqA = frequency.get(a);
  let freqB = frequency.get(b);
  if (freqA.count !== freqB.count) {
    return freqB.count - freqA.count;
  }
  return freqA.index - freqB.index;
});

console.log(arr.join(" "));

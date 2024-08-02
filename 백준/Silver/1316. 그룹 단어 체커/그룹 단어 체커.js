const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const data = input.map((a) => a.trim());
const words = Number(data[0]);
let result = 0;
for (let i = 1; i <= words; i++) {
  let diff = 1;
  let set = new Set(data[i]);
  let existNum = [...set].length;
  for (let j = 0; j < data[i].length - 1; j++) {
    if (data[i][j] !== data[i][j + 1]) {
      diff++;
    }
  }
  if (existNum === diff) {
    result++;
  }
}
console.log(result);
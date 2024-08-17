const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);

let arr = Array(N)
  .fill(1)
  .map((a, b) => (a = a + b));

for (let n = 1; n <= M; n++) {
  let [a, b] = input[n].split(" ").map(Number);

  // a-1인덱스부터 b-1인덱스까지 뒤집어야 한다.
  let subArr = arr.slice(a - 1, b).reverse();
  let leftArr = arr.slice(0, a - 1);
  let rightArr = arr.slice(b);
  arr = [...leftArr, ...subArr, ...rightArr];
}
console.log(arr.join(" "));
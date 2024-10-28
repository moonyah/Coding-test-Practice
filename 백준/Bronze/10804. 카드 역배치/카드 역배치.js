const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let arr = Array(20)
  .fill(1)
  .map((a, b) => (a = b + 1));
for (let i = 0; i < 10; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  let preArr = arr.slice(0, a - 1);
  let reverseArr = arr.slice(a - 1, b).reverse();
  let nextArr = arr.slice(b);
  arr = [...preArr, ...reverseArr, ...nextArr];
}
console.log(arr.join(" "));

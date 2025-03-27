let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let obj = {};
for (let i = 1; i <= N; i++) {
  let bookName = input[i].trim();
  obj[bookName] > 0 ? obj[bookName]++ : (obj[bookName] = 1);
}
let sellNum = 0;
for (let i in obj) {
  if (sellNum <= obj[i]) {
    sellNum = obj[i];
  }
}
let bestSellerBooks = [];
for (let i in obj) {
  if (sellNum === obj[i]) {
    bestSellerBooks.push(i);
  }
}
bestSellerBooks.sort();
console.log(bestSellerBooks[0]);

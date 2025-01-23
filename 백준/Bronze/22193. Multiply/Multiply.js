const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let product = BigInt(input[1]) * BigInt(input[2]);
console.log(product.toString());

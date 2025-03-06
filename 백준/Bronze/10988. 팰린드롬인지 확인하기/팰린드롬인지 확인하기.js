const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let word = [...input[0].trim()];
console.log(word.join("") === word.reverse().join("") ? 1 : 0);

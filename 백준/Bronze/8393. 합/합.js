const input = require("fs").readFileSync("/dev/stdin").toString();

let total = 0;
for (let i = 0; i <= input; i++) {
  total += i;
}
console.log(total);

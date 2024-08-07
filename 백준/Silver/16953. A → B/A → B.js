const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [numA, numB] = input[0].split(" ").map(Number);

let answer = 0;
let canMake = false;

while (numB > numA) {
  if (numB % 2 == 0) {
    numB = parseInt(numB / 2);
    answer++;
  }
  else if (numB % 10 == 1) {
    numB = parseInt(numB / 10);
    answer++;
  }else {
    break;
  }

  if (numB == numA) {
    canMake = true;
    break;
  }
}

console.log(canMake ? answer + 1 : -1);


const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let T = Number(input[0]); // 테스트 케이스 개수
let n = 0;
let orders = [];
let arr = [];
let reverseState = false;
let errorState = false;
let answer = "";
for (let i = 1; i < T * 3; i += 3) {
  orders = input[i].trim().split("");
  n = Number(input[i + 1]);
  arr = input[i + 2].trim().slice(1, -1);
  if (arr.length > 0) {
    arr = arr.split(",").map(Number);
  } else {
    arr = [];
  }

  reverseState = false;
  errorState = false;

  for (let order of orders) {
    if (order === "R") {
      reverseState = !reverseState;
    }
    if (order === "D") {
      if (arr.length === 0) {
        errorState = true;
        break;
      }
      if (arr.length > 0 && reverseState === true) {
        arr.pop();
      }
      if (arr.length > 0 && reverseState === false) {
        arr.shift();
      }
    }
  }
  if (errorState === true) {
    // console.log("error");
    answer += "error" + "\n";
  } else {
    if (arr.length >= 0 && reverseState === true) {
      answer += "[" + arr.reverse() + "]" + "\n";
    }
    if (arr.length >= 0 && reverseState === false) {
      answer += "[" + arr + "]" + "\n";
    }
  }
}
console.log(answer);

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let arr = input[0].split("");
let answer = arr.length;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "c" && arr[i + 1] === "=") {
    answer--;
  }
  if (arr[i] === "c" && arr[i + 1] === "-") {
    answer--;
  }
  if (arr[i] === "d" && arr[i + 1] === "z" && arr[i + 2] === "=") {
    answer--;
  }
  if (arr[i] === "d" && arr[i + 1] === "-") {
    answer--;
  }
  if (arr[i] === "l" && arr[i + 1] === "j") {
    answer--;
  }
  if (arr[i] === "n" && arr[i + 1] === "j") {
    answer--;
  }
  if (arr[i] === "s" && arr[i + 1] === "=") {
    answer--;
  }
  if (arr[i] === "z" && arr[i + 1] === "=") {
    answer--;
  }
}
console.log(answer);

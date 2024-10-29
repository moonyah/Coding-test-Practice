const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
let queue = [];
let answer = "";
let order, num;
let queueLen = 0;

let frontIdx = 0;
let endIdx = 0;

for (let i = 1; i < N + 1; i++) {
  [order, num] = input[i].trim().split(" ");
  if (order === "push") {
    queue.push(Number(num));
    endIdx++;
    queueLen++;
  } else if (order === "pop") {
    if (queueLen > 0) {
      answer += queue[frontIdx] + "\n";
      frontIdx++;
      queueLen--;
    } else {
      answer += "-1" + "\n";
    }
  } else if (order === "front") {
    if (queueLen > 0) {
      answer += queue[frontIdx] + "\n";
    } else {
      answer += "-1" + "\n";
    }
  } else if (order === "back") {
    if (queueLen > 0) {
      answer += queue[endIdx - 1] + "\n";
    } else {
      answer += "-1" + "\n";
    }
  } else if (order === "size") {
    answer += queueLen + "\n";
  } else if (order === "empty") {
    if (queueLen > 0) {
      answer += "0" + "\n";
    } else {
      answer += "1" + "\n";
    }
  } else {
    console.log("없는 명령");
  }
}
console.log(answer);

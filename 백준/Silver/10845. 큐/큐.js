const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
let queue = [];
let answer = "";
for (let i = 1; i < N + 1; i++) {
  let order = input[i].trim().split(" "); // trim()을 해야 함!
  if (order[0] === "push") {
    queue.push(Number(order[1]));
  }
  if (order[0] === "pop") {
    if (queue.length > 0) {
      answer += queue.shift() + "\n";
    } else {
      answer += "-1" + "\n";
    }
  }
  if (order[0] === "front") {
    if (queue.length > 0) {
      answer += queue[0] + "\n";
    } else {
      answer += "-1" + "\n";
    }
  }
  if (order[0] === "back") {
    if (queue.length > 0) {
      answer += queue[queue.length - 1] + "\n";
    } else {
      answer += "-1" + "\n";
    }
  }
  if (order[0] === "size") {
    answer += queue.length + "\n";
  }
  if (order[0] === "empty") {
    if (queue.length > 0) {
      answer += "0" + "\n";
    } else {
      answer += "1" + "\n";
    }
  }
}
console.log(answer);
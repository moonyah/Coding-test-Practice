const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
let deque = [];
let dequeLen = 0;
let answer = "";
for (let i = 1; i < N + 1; i++) {
  let [order, num] = input[i].split(" ").map((a) => a.trim());
  if (order === "push_front") {
    deque.unshift(Number(num));
    dequeLen++;
  }
  if (order === "push_back") {
    deque.push(Number(num));
    dequeLen++;
  }
  if (order === "pop_front") {
    if (dequeLen > 0) {
      answer += deque.shift() + "\n";
      dequeLen--;
    } else {
      answer += "-1" + "\n";
    }
  }
  if (order === "pop_back") {
    if (dequeLen > 0) {
      answer += deque.pop() + "\n";
      dequeLen--;
    } else {
      answer += "-1" + "\n";
    }
  }
  if (order === "size") {
    answer += dequeLen + "\n";
  }
  if (order === "empty") {
    if (dequeLen === 0) {
      answer += "1" + "\n";
    } else {
      answer += "0" + "\n";
    }
  }
  if (order === "front") {
    if (dequeLen > 0) {
      answer += deque[0] + "\n";
    } else {
      answer += "-1" + "\n";
    }
  }
  if (order === "back") {
    if (dequeLen > 0) {
      answer += deque[dequeLen - 1] + "\n";
    } else {
      answer += "-1" + "\n";
    }
  }
}
console.log(answer);
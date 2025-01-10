const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let peopleList = {};
for (let i = 1; i < n + 1; i++) {
  let [name, workState] = input[i].trim().split(" ");
  if (workState === "enter") {
    peopleList[name] = 1;
  }
  if (workState === "leave") {
    peopleList[name] = 0;
  }
}
let enterPeople = [];
for (let key in peopleList) {
  if (peopleList[key]) {
    enterPeople.push(key);
  }
}
enterPeople.sort().reverse();
for (let i of enterPeople) {
  console.log(i);
}

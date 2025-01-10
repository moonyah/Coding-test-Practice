const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
// console.log(n);
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
// console.log(peopleList);
// { Baha: 0, Askar: 1, Artem: 1 }

let enterPeople = [];
// for in 문 사용
for (let key in peopleList) {
  if (peopleList[key]) {
    enterPeople.push(key);
  }
}
// console.log(enterPeople);
enterPeople.sort().reverse();
for (let i of enterPeople) {
  console.log(i);
}

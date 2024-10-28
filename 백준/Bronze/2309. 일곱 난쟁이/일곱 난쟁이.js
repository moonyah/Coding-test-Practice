let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let arr = [];
let sum = 0;
for (let i = 0; i < 9; i++) {
  let num = Number(input[i]);
  sum += num;
  arr.push(num);
}
let fakeTwoSum = sum - 100;

let fakeTwo = [];
for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (arr[i] + arr[j] === fakeTwoSum) {
      fakeTwo.push(i, j);
      break;
    }
  }
}
let filterArr = [];

for (let i = 0; i < 9; i++) {
  if (i !== fakeTwo[0] && i !== fakeTwo[1]) {
    filterArr.push(arr[i]);
  }
}
filterArr.sort((a, b) => a - b);
console.log(filterArr.join("\n"));

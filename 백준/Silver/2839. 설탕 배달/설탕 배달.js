const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let total = Number(input[0]);

// 5로 나눠지는지 확인
// 3을 빼고 5로 나눠지는지 확인
// 3을 빼고 5로 나눠지는지 확인
// ... 반복
// 3을 뺐는데 0이 되면 answer 출력 & 2, 1이면 -1

let answer = 0;
while (total >= 3) {
  if (total % 5 == 0) {
    answer += total / 5;
    total = total % 5;
  } else {
    total = total - 3;
    answer++;
  }
}

if (total == 0) {
  console.log(answer);
} else {
  console.log("-1");
}
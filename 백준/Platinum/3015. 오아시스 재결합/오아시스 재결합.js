let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);

let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(BigInt(input[i].trim()));
}

let stack = [];
let answer = 0n;

for (let i = 0; i < N; i++) {
  let count = 1n;

  // 현재 값보다 작은 값들은 모두 pop하면서 답에 그 개수를 더함.
  while (stack.length > 0 && stack[stack.length - 1][0] < arr[i]) {
    answer += stack[stack.length - 1][1];
    stack.pop();
  }

  // 동일한 높이가 있다면 처리
  if (stack.length > 0 && stack[stack.length - 1][0] === arr[i]) {
    let same = stack.pop();
    answer += same[1];
    count = same[1] + 1n;

    if (stack.length > 0) answer++; // 볼 수 있는 쌍 추가
  } else if (stack.length > 0) {
    // 스택이 남아 있다면 볼 수 있는 쌍 추가
    answer++;
  }
  stack.push([arr[i], count]);
}

console.log(answer.toString());

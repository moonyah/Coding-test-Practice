const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const num = input[0];
let memo = []; // 메모이제이션

for (let i = 1; i <= num; i++) {
  let a = parseInt(input[i]);
  fibonacci(a);
  console.log(memo[a].join(" "));
}

function fibonacci(num) {
  if (memo[num] !== undefined) {
    return memo[num];
  }

  if (num === 0) {
    memo[num] = [1, 0];
    return [1, 0];
  } else if (num === 1) {
    memo[num] = [0, 1];
    return [0, 1];
  } else {
    memo[num] = [
      fibonacci(num - 1)[0] + fibonacci(num - 2)[0],
      fibonacci(num - 1)[1] + fibonacci(num - 2)[1],
    ];
    // console.log(memo);
    return memo[num];
  }
}

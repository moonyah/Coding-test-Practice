const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let result = 0;
let cols = new Set(); // 같은 열을 체크
let diag1 = new Set(); // ↖ 체크 (row - col)
let diag2 = new Set(); // ↗ 체크 (row + col)

function backtrack(row) {
  if (row === N) {
    // 모든 퀸 배치
    result++;
    return;
  }

  for (let col = 0; col < N; col++) {
    if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
      continue; // 이미 사용된 열이나 대각선이면 스킵
    }

    // 퀸을 배치
    cols.add(col);
    diag1.add(row - col);
    diag2.add(row + col);

    backtrack(row + 1); // 다음 행으로 이동

    // 백트래킹
    cols.delete(col);
    diag1.delete(row - col);
    diag2.delete(row + col);
  }
}

backtrack(0); // 0번째 행부터 시작
console.log(result);

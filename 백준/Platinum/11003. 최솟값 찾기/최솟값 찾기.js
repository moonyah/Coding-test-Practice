const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [N, L] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let deque = [];
let answer = "";
const BUFFER_SIZE = 10000;
let front = 0; // `shift()` 대신 `front` 변수 사용

for (let i = 0; i < N; i++) {
    // 윈도우에서 벗어난 값 제거 (`front`를 이용하여 삭제)
    if (deque.length > front && deque[front][1] < i - L + 1) {
        front++;
    }

    // 현재 값보다 큰 값 제거 (최솟값 유지)
    while (deque.length > front && deque[deque.length - 1][0] > arr[i]) {
        deque.pop();
    }

    // (값, 인덱스) 추가
    deque.push([arr[i], i]);

    // 현재 윈도우의 최솟값 추가 (덱의 front 값)
    answer += deque[front][0] + " ";

    // 10,000개 단위로 `stdout.write()`를 사용하여 빠른 출력
    if ((i + 1) % BUFFER_SIZE === 0) {
        process.stdout.write(answer);
        answer = "";
    }
}

// 남아 있는 데이터 최종 출력
console.log(answer.trimEnd());

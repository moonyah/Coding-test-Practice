let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
// N명의 학생들, M은 키를 비교한 횟수

// 1) 방향 그래프
// 2) 임시 큐
// 3) 결과 배열
// 4) 진입 차수 배열

// 방향 그래프
let graph = Array(N + 1)
  .fill([])
  .map((a) => (a = []));
let inputCount = Array(N + 1).fill(0); // 진입 차수 배열
for (let i = 1; i < M + 1; i++) {
  let [A, B] = input[i].split(" ").map(Number);
  graph[A].push(B);
  inputCount[B]++;
}
// console.log(graph, inputCount);

let queue = [];
let answer = [];

for (let i = 1; i < N + 1; i++) {
  if (inputCount[i] === 0) {
    queue.push(i);
  }
}
// console.log(queue);

while (queue.length > 0) {
  let curr = queue.shift();
  answer.push(curr); // 큐에서 꺼낸 정점을 결과 배열에 추가

  for (let next of graph[curr]) {
    inputCount[next]--;
    if (inputCount[next] === 0) {
      queue.push(next);
    }
  }

  // console.log("queue", queue);
  // console.log("answer", answer);
}

console.log(answer.join(" "));

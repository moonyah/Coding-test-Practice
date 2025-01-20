let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// 최소 스패닝 트리: 주어진 그래프의 모든 정점들을 연결하는 부분 그래프 중에서 그 가중치의 합이 최소인 트리
let [V, E] = input[0].split(" ").map((a) => Number(a));
let graph = Array.from({ length: V + 1 }, () => []);

for (let i = 1; i < E + 1; i++) {
  let [start, end, weight] = input[i].split(" ").map((a) => Number(a));
  graph[start].push([end, weight]);
  graph[end].push([start, weight]);
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    let currIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currIndex - 1) / 2);

    while (
      currIndex > 0 &&
      this.heap[parentIndex][1] > this.heap[currIndex][1]
    ) {
      // 인덱스에 해당하는 값 바꾸기
      [this.heap[currIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currIndex],
      ];
      // 인덱스 재정의
      currIndex = parentIndex;
      parentIndex = Math.floor((currIndex - 1) / 2);
    }
  }
  removeMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    // 맨 끝에 있는 요소를 root로 옮기기
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapify(0);
    return min; // 제거한 값 return
  }

  heapify(index) {
    let currIndex = index;

    while (true) {
      let leftChildIndex = currIndex * 2 + 1;
      let rightChildIndex = currIndex * 2 + 2;
      let smallest = currIndex;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex][1] < this.heap[smallest][1]
      ) {
        smallest = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex][1] < this.heap[smallest][1]
      ) {
        smallest = rightChildIndex;
      }

      if (currIndex === smallest) break;

      [this.heap[currIndex], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[currIndex],
      ];
      currIndex = smallest;
    }
  }
}

let visited = Array(V + 1).fill(false); // 방문 여부 확인
// let minHeap = [[1, 0]]; // 1번으로 연결했는데 가중치는 0
let visitedCount = 0;
let min = [];
let answer = 0;

let minHeap = new MinHeap();
minHeap.insert([1, 0]);

while (visitedCount < V) {
  // 가장 가중치 작은 간선
  min = minHeap.removeMin();
  if (!min || visited[min[0]]) continue;

  // 힙 자료구조로 대체
  visited[min[0]] = true;
  visitedCount++;
  answer += min[1]; // 가중치 누적

  for (let i of graph[min[0]]) {
    if (!visited[i[0]]) {
      minHeap.insert(i); // 힙 자료구조로 대체
    }
  }
}

console.log(answer);

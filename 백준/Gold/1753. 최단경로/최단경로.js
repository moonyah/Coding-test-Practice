const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");
let [V, E] = input[0].split(" ").map(Number);
let K = Number(input[1]); // 시작 정점 번호
// console.log(K);

let graph = Array.from({ length: V + 1 }, () => []);
for (let i = 2; i < E + 2; i++) {
  let [u, v, w] = input[i].split(" ").map(Number);
  if (u < 1 || u > V || v < 1 || v > V) {
    continue; // 잘못된 간선은 무시
  }
  graph[u].push([v, w]);
}
// console.log(graph);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 힙의 길이를 반환
  heapLength() {
    return this.heap.length;
  }

  // 힙에 요소 삽입
  insert([end, value]) {
    this.heap.push([end, value]); // 새로운 요소를 힙 끝에 추가

    let currIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currIndex - 1) / 2);

    // 부모와 자식 노드 간 비교 및 위치 교환
    while (currIndex > 0 && this.heap[parentIndex][1] > this.heap[currIndex][1]) {
      [this.heap[parentIndex], this.heap[currIndex]] = [
        this.heap[currIndex],
        this.heap[parentIndex],
      ];
      currIndex = parentIndex;
      parentIndex = Math.floor((currIndex - 1) / 2);
    }

    return this.heap;
  }

  // 힙에서 최소값 제거
  removeMin() {
    if (this.heap.length === 0) return null; // 빈 힙 처리
    if (this.heap.length === 1) return this.heap.pop(); // 요소가 하나일 경우

    const min = this.heap[0];
    this.heap[0] = this.heap.pop(); // 마지막 요소를 루트로 이동

    let currIndex = 0;

    while (true) {
      let leftChildIndex = 2 * currIndex + 1;
      let rightChildIndex = 2 * currIndex + 2;
      let smallest = currIndex;

      // 왼쪽 자식과 비교
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex][1] < this.heap[smallest][1]
      ) {
        smallest = leftChildIndex;
      }

      // 오른쪽 자식과 비교
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex][1] < this.heap[smallest][1]
      ) {
        smallest = rightChildIndex;
      }

      // 교환이 필요하지 않으면 종료
      if (smallest === currIndex) break;

      // 현재 노드와 가장 작은 자식 노드 교환
      [this.heap[currIndex], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[currIndex],
      ];
      currIndex = smallest;
    }

    return min;
  }
}


// console.log(minHeap.insert([2, 2]));
// console.log(minHeap.insert([1, 3])); // [ [ 2, 2 ], [ 1, 3 ] ]
// console.log(minHeap.insert([4, 1])); // [ [ 4, 1 ], [ 1, 3 ], [ 2, 2 ] ]
// console.log(minHeap.removeMin());
// console.log(minHeap.removeMin());

let memoMinWeight = Array.from({ length: V + 1 }, () => Infinity);
memoMinWeight[K] = 0;

function dijkstra(K, weight) {
  let minHeap = new MinHeap();
  minHeap.insert([K, weight]);

  while (minHeap.heapLength() > 0) {
    let [currEnd, currWeight] = minHeap.removeMin();

    if (memoMinWeight[currEnd] < currWeight) continue;

    for (let [nextEnd, nextWeight] of graph[currEnd]) {
      let newWeight = currWeight + nextWeight; // 누적*

      // 더 짧은 경로를 발견한 경우만 갱신하고 큐에 삽입
      if (memoMinWeight[nextEnd] > newWeight) {
        memoMinWeight[nextEnd] = newWeight;
        minHeap.insert([nextEnd, newWeight]);
      }
    }
  }
}
dijkstra(K, 0); // 시작 정점
for (let i = 1; i < V + 1; i++) {
  if (memoMinWeight[i] === Infinity) {
    console.log("INF");
  } else {
    console.log(memoMinWeight[i]);
  }
}

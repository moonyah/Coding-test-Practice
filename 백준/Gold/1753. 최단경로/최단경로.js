const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");
let [V, E] = input[0].split(" ").map(Number);
let K = Number(input[1]);

if (V < 1 || E < 0 || input.length < E + 2) {
  console.error("잘못된 입력 데이터입니다.");
  process.exit(1);
}

let graph = Array.from({ length: V + 1 }, () => []);
for (let i = 2; i < E + 2; i++) {
  let [u, v, w] = input[i].split(" ").map(Number);
  if (u < 1 || u > V || v < 1 || v > V) {
    console.error(`잘못된 간선 정보: ${u} -> ${v} (${w})`);
    continue;
  }
  graph[u].push([v, w]);
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  heapLength() {
    return this.heap.length;
  }

  insert([end, value]) {
    this.heap.push([end, value]);
    this.bubbleUp();
  }

  removeMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex][1] <= this.heap[index][1]) break;

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex][1] < this.heap[smallest][1]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex][1] < this.heap[smallest][1]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

let memoMinWeight = Array.from({ length: V + 1 }, () => Infinity);
memoMinWeight[K] = 0;

function dijkstra(K) {
  let minHeap = new MinHeap();
  minHeap.insert([K, 0]);

  while (minHeap.heapLength() > 0) {
    let [currEnd, currWeight] = minHeap.removeMin();

    if (memoMinWeight[currEnd] < currWeight) continue;

    for (let [nextEnd, nextWeight] of graph[currEnd]) {
      let newWeight = currWeight + nextWeight;

      if (memoMinWeight[nextEnd] > newWeight) {
        memoMinWeight[nextEnd] = newWeight;
        minHeap.insert([nextEnd, newWeight]);
      }
    }
  }
}

dijkstra(K);

for (let i = 1; i <= V; i++) {
  if (memoMinWeight[i] === Infinity) {
    console.log("INF");
  } else {
    console.log(memoMinWeight[i]);
  }
}

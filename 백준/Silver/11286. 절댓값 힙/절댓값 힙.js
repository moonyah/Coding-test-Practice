const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
// x가 0이 아니라면 배열에 x 값을 추가
// x = 0이면 배열에서 절댓값이 가장 작은 값을 출력하고
// // 그 값을 배열에서 제거
// x=0인데 비어 있는 경우면 0출력

class MinHeapAbs {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(Number(value));
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);

      if (
        Math.abs(this.heap[parentIndex]) > Math.abs(this.heap[currentIndex]) ||
        (Math.abs(this.heap[parentIndex]) ===
          Math.abs(this.heap[currentIndex]) &&
          this.heap[parentIndex] > this.heap[currentIndex])
      ) {
        [this.heap[parentIndex], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[parentIndex],
        ];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
    return this.heap;
  }
  remove() {
    if (this.heap.length === 0) return 0; // 빈 힙 처리
    if (this.heap.length === 1) return this.heap.pop();

    let smallest = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapify(0);
    return smallest;
  }
  heapify(index) {
    let currentIndex = index;
    let leftChildIndex = 2 * currentIndex + 1;
    let rightChildIndex = 2 * currentIndex + 2;

    let smallest = currentIndex;
    while (true) {
      if (
        (leftChildIndex < this.heap.length &&
          Math.abs(this.heap[leftChildIndex]) <
            Math.abs(this.heap[currentIndex])) ||
        (Math.abs(this.heap[leftChildIndex]) ===
          Math.abs(this.heap[currentIndex]) &&
          this.heap[leftChildIndex] < this.heap[currentIndex])
      ) {
        smallest = leftChildIndex;
      }

      if (
        (rightChildIndex < this.heap.length &&
          Math.abs(this.heap[rightChildIndex]) <
            Math.abs(this.heap[smallest])) ||
        (Math.abs(this.heap[rightChildIndex]) ===
          Math.abs(this.heap[smallest]) &&
          this.heap[rightChildIndex] < this.heap[smallest])
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === currentIndex) {
        break;
      } else {
        [this.heap[smallest], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[smallest],
        ];
        currentIndex = smallest;
        leftChildIndex = 2 * currentIndex + 1;
        rightChildIndex = 2 * currentIndex + 2;
      }
    }
  }
}

const heap = new MinHeapAbs();
for (let i = 1; i < N + 1; i++) {
  let curr = Number(input[i]);
  if (curr != 0) {
    heap.insert(curr);
  } else if (curr == 0) {
    console.log(heap.remove());
  }
}

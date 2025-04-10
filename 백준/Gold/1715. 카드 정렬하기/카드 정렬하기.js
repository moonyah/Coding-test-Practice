const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
// 모든 수를 minHeap에 넣는다.
// 1) 최소 2개를 꺼낸다.
// 2) answer에 그 합을 더한다.
// 3) 최소 2개의 합을 minHeap에 넣는다.
// 1) ~ 3)을 반복한다.
// minHeap에 비어 있을 때까지 반복한다.
class minHeap {
  constructor() {
    this.heap = [];
  }
  push(num) {
    this.heap.push(num);
    let currIdx = this.heap.length - 1;
    let parentIdx = Math.floor((currIdx - 1) / 2);
    if (parentIdx < 0) return this.heap;
    while (currIdx > 0) {
      if (this.heap[parentIdx] <= this.heap[currIdx]) break;
      [this.heap[parentIdx], this.heap[currIdx]] = [
        this.heap[currIdx],
        this.heap[parentIdx],
      ];
      currIdx = parentIdx;
      parentIdx = Math.floor((currIdx - 1) / 2);
    }
    return this.heap;
  }
  pop() {
    if (this.heap.length === 0) return undefined;
    // 맨 위의 것을 return하고
    // 맨 아래 것을 맨 위로
    let min = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    // console.log("heapifty 전", this.heap);
    this.heapify();
    return min;
  }
  heapify() {
    // 위에서 아래로
    let currIdx = 0;
    while (currIdx <= this.heap.length - 1) {
      let leftIdx = (currIdx + 1) * 2 - 1;
      let rightIdx = (currIdx + 1) * 2;
      let smallerIdx = currIdx;
      if (this.heap[leftIdx] && this.heap[smallerIdx] > this.heap[leftIdx]) {
        smallerIdx = leftIdx;
      }
      if (this.heap[rightIdx] && this.heap[smallerIdx] > this.heap[rightIdx]) {
        smallerIdx = rightIdx;
      }
      if (currIdx === smallerIdx) return this.heap;
      [this.heap[currIdx], this.heap[smallerIdx]] = [
        this.heap[smallerIdx],
        this.heap[currIdx],
      ];
      currIdx = smallerIdx;
    }
    return this.heap;
  }
  getLength() {
    return this.heap.length;
  }
}
let arr = new minHeap();
for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

if (N === 1) {
  console.log(0);
  return;
}

let answer = 0;
let sum = 0;
while (arr.getLength() > 1) {
  let A = arr.pop();
  let B = arr.pop();
  sum = A + B;
  answer += sum;
  if (arr.getLength() === 0) break;
  arr.push(sum);
}
if (arr.getLength() === 1) {
  // N = 1일 때 조건 추가
  answer += arr.pop();
}
console.log(answer);

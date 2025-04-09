const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, K] = input[0].split(" ").map(Number);

let weightPrice = [];
for (let i = 1; i <= N; i++) {
  let [M, V] = input[i].split(" ").map(Number);
  weightPrice.push([M, V]);
}
weightPrice.sort((a, b) => a[0] - b[0]); // 무게 오름차순으로 정렬
let bag = [];
for (let i = N + 1; i <= N + K; i++) {
  let C = Number(input[i]);
  bag.push(C);
}
bag.sort((a, b) => a - b);

class maxHeap {
  constructor() {
    this.heap = [];
  }
  push(value) {
    this.heap.push(value);
    if (this.heap.length === 1) {
      return this.heap;
    }
    let parentIdx = Math.floor((this.heap.length - 1) / 2);
    let currIdx = this.heap.length - 1;
    let parentData = this.heap[parentIdx];
    while (parentData[1] < value[1]) {
      if (parentData[1] >= value[1] || parentIdx < 0) {
        break;
      }
      [this.heap[currIdx], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[currIdx],
      ]; // 데이터 바꾸고

      currIdx = parentIdx; // 인덱스 바꾸고
      parentIdx = Math.floor((currIdx - 1) / 2);
      parentData = this.heap[parentIdx];
      if (parentIdx < 0) break;
    }
    return this.heap;
  }
  pop() {
    // 최댓값 빼는 거
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    let maxData = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1]; // 값 바꾸기
    this.heap.pop();
    this.heapifyDown(); // 이렇게 호출하면 됨
    return maxData;
  }
  heapifyDown() {
    let currIdx = 0;

    while (true) {
      let leftIdx = currIdx * 2 + 1;
      let rightIdx = currIdx * 2 + 2;
      let largest = currIdx;

      if (
        leftIdx < this.heap.length &&
        this.heap[leftIdx][1] > this.heap[largest][1]
      ) {
        largest = leftIdx;
      }

      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx][1] > this.heap[largest][1]
      ) {
        largest = rightIdx;
      }

      if (largest === currIdx) break;

      [this.heap[currIdx], this.heap[largest]] = [
        this.heap[largest],
        this.heap[currIdx],
      ];
      currIdx = largest;
    }

    return this.heap;
  }

  peek() {
    // 최댓값 출력하는 거
    console.log(this.heap[0]);
  }
}
let arr = new maxHeap();

// 가격이 높은 순서로
let maxPrice = 0;
let j = 0;
for (let i = 0; i < K; i++) {
  // 비싼 거부터
  while (j < N && bag[i] >= weightPrice[j][0]) {
    arr.push(weightPrice[j]);
    j++;
  }
  let max = arr.pop();
  if (max) {
    maxPrice += max[1];
  }
}
console.log(maxPrice);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.output,
});

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (
      currentIndex > 1 &&
      this.heap[currentIndex] > this.heap[parentIndex]
    ) {
      const tmp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[parentIndex];
      this.heap[parentIndex] = tmp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length < 2) {
      return;
    }

    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const value = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftChildIndex = 2;
    let rightChildIndex = 3;

    while (leftChildIndex < this.heap.length) {
      let swapIndex = leftChildIndex;

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[leftChildIndex]
      ) {
        swapIndex = rightChildIndex;
      }

      if (this.heap[currentIndex] > this.heap[swapIndex]) {
        break;
      }

      const tmp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[swapIndex];
      this.heap[swapIndex] = tmp;

      currentIndex = swapIndex;
      leftChildIndex = currentIndex * 2;
      rightChildIndex = currentIndex * 2 + 1;
    }

    return value;
  }

  length() {
    return this.heap.length - 1;
  }

  clear() {
    this.heap = [null];
  }
}

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (
      currentIndex > 1 &&
      this.heap[currentIndex] < this.heap[parentIndex]
    ) {
      const tmp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[parentIndex];
      this.heap[parentIndex] = tmp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length < 2) {
      return;
    }

    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const value = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftChildIndex = 2;
    let rightChildIndex = 3;

    while (leftChildIndex < this.heap.length) {
      let swapIndex = leftChildIndex;

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
      ) {
        swapIndex = rightChildIndex;
      }

      if (this.heap[currentIndex] < this.heap[swapIndex]) {
        break;
      }

      const tmp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[swapIndex];
      this.heap[swapIndex] = tmp;

      currentIndex = swapIndex;
      leftChildIndex = currentIndex * 2;
      rightChildIndex = currentIndex * 2 + 1;
    }

    return value;
  }

  length() {
    return this.heap.length - 1;
  }

  clear() {
    this.heap = [null];
  }
}

const maxHeap = new MaxHeap();
const minHeap = new MinHeap();
let actual_quantity = new Map();
let index = 0;
let EndIndex = 0;
let answer = "";

rl.on("line", (line) => {
  if (index === 0) {
    index++;
    return;
  }

  if (index > EndIndex) {
    EndIndex = +line + index++;
    //초기화 로직
    maxHeap.clear();
    minHeap.clear();
    actual_quantity.clear();
    return;
  }

  let [cmd, value] = line.split(" ");
  value = +value;

  if (cmd === "I") {
    maxHeap.push(value);
    minHeap.push(value);

    if (actual_quantity.get(value) > 0) {
      actual_quantity.set(value, actual_quantity.get(value) + 1);
    } else {
      actual_quantity.set(value, 1);
    }
  }

  if (cmd === "D" && value === 1) {
    let max = maxHeap.pop();
    while (maxHeap.length() > 0 && actual_quantity.get(max) < 1) {
      max = maxHeap.pop();
    }
    actual_quantity.set(max, actual_quantity.get(max) - 1);
  }

  if (cmd === "D" && value === -1) {
    let min = minHeap.pop();
    while (minHeap.length() > 0 && actual_quantity.get(min) < 1) {
      min = minHeap.pop();
    }
    actual_quantity.set(min, actual_quantity.get(min) - 1);
  }

  if (index === EndIndex) {
    let max = null;
    let min = null;

    while (maxHeap.length() > 0) {
      let value = maxHeap.pop();
      if (actual_quantity.get(value) > 0) {
        max = value;
        break;
      }
    }

    while (minHeap.length() > 0) {
      let value = minHeap.pop();
      if (actual_quantity.get(value) > 0) {
        min = value;
        break;
      }
    }

    if (max === null || min === null) {
      answer += "EMPTY\n";
    } else {
      answer += `${max} ${min}\n`;
    }
  }
  index++;
});

rl.on("close", () => {
  console.log(answer);
});

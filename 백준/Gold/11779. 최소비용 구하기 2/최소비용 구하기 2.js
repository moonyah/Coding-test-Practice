let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]); // 도시 개수
let m = Number(input[1]); // 버스 개수
let busInfo = Array.from({ length: n + 1 }, () => []);
for (let line = 2; line < m + 2; line++) {
  let [start, end, price] = input[line].split(" ").map(Number);
  busInfo[start].push([end, price]);
}
let [startCityNum, endCityNum] = input[m + 2].split(" ").map(Number);

let eachPriceMemo = Array(n + 1).fill(Infinity);
eachPriceMemo[startCityNum] = 0; // startCityNum 비용 0
let prev = Array(n + 1).fill(null);

class MinHeap {
  constructor() {
    this.heap = [];
  }
  push([currPrice, cityNum]) {
    this.heap.push([currPrice, cityNum]);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();

    return min;
  }

  // push한 경우 필요
  heapifyUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx][0] <= this.heap[idx][0]) break;

      [this.heap[parentIdx], this.heap[idx]] = [
        this.heap[idx],
        this.heap[parentIdx],
      ];
      idx = parentIdx;
    }
  }

  // pop한 경우 필요
  heapifyDown() {
    let idx = 0;
    const length = this.heap.length;

    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let smallest = idx;

      if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }

      if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }

      if (smallest === idx) break;

      [this.heap[idx], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[idx],
      ];
      idx = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

// 도착 비용이 가장 싼 도시를 방문을 한다.
// startCityNum
let minHeap = new MinHeap();
cityNum = startCityNum;
minHeap.push([0, startCityNum]);
while (!minHeap.isEmpty()) {
  let [currPrice, cityNum] = minHeap.pop();
  if (cityNum === endCityNum) break;
  // 이 도시에서 갈 수 있는 다음 도시들 순회하면서 비용 업데이트
  for (let [nextCity, nextPrice] of busInfo[cityNum]) {
    let newCost = currPrice + nextPrice;
    if (newCost < eachPriceMemo[nextCity]) {
      eachPriceMemo[nextCity] = newCost;
      prev[nextCity] = cityNum;
      minHeap.push([newCost, nextCity]);
    }
  }
}

console.log(eachPriceMemo[endCityNum]); // 도착 도시까지 가는데 드는 최소 비용
// 도시의 개수
let path = [];
let curr = endCityNum;
while (curr !== null) {
  path.push(curr);
  curr = prev[curr];
}
path.reverse();
console.log(path.length); // 경로에 포함된 도시 수
console.log(path.join(" "));

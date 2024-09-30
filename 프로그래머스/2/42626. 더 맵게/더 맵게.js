function solution(scoville, K) {
    var answer = 0;
    let heap = new MinHeap(scoville);
    
    // 우선순위 큐(최소 힙)을 사용해서 찾기
    while(heap.peek() < K){
        
        // 힙의 크기가 2개 이상일 때만 섞을 수 있음
        if (heap.size() < 2) return -1;
        
        let a = heap.pop();
        let b = heap.pop();

        heap.push(a + (b * 2))
        answer++;
    }
    return answer;
}

class MinHeap {
    constructor(data = []) {
        this.heap = [];
        data.forEach(value => this.push(value));
    }

    // 요소 삽입 (버블 업)
    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        let element = this.heap[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (element >= parent) break;
            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    // 최소값 추출 (버블 다운)
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) swap = leftChildIndex;
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            index = swap;
        }
        this.heap[index] = element;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}
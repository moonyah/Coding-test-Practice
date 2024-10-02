function solution(jobs) {
    let currentTime = 0;
    let answer = 0;
    let count = 0;
    let minHeap = new MinHeap();
    
    // 요청 시간 기준으로 정렬
    jobs.sort((a, b) => a[0] - b[0]);
    
    // 작업 처리 흐름
    while (jobs.length > 0 || minHeap.size() > 0) {
    // jobs 배열과 MinHeap에 남아 있는 작업이 있을 동안 루프를 계속 돌도록 보장
        
        // 현재 시간에 가능한 작업을 모두 MinHeap에 넣기
        while (jobs.length && jobs[0][0] <= currentTime) {
            minHeap.push(jobs.shift());
        }
        
        // 소요 시간이 가장 짧은 작업 처리
        if (minHeap.size()) {
            let job = minHeap.pop();
            currentTime += job[1]; // 소요 시간을 더해 현재 시간 갱신
            answer += currentTime - job[0]; // 요청부터 완료까지 시간 계산
            count++;
        } else {
            // 대기 중인 작업이 없으면 시간을 다음 작업 요청 시간으로 이동
            currentTime = jobs[0][0];
        }
    }
    return Math.floor(answer / count);
}

// MinHeap 클래스 정의
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(job) {
        this.heap.push(job);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        let element = this.heap[index];
        
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (parent[1] <= element[1]) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    pop() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return min;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild[1] < element[1]) swap = leftChildIdx;
            }

            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild[1] < element[1]) ||
                    (swap !== null && rightChild[1] < leftChild[1])
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }

    size() {
        return this.heap.length;
    }
}

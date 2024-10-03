function solution(operations) {
    let queue = []; // 이중 우선순위 큐 역할을 할 배열

    operations.forEach(operation => {
        const [command, number] = operation.split(" "); // 명령어와 숫자를 분리
        const num = parseInt(number);

        if (command === 'I') {
            // 삽입 연산
            queue.push(num);
            queue.sort((a, b) => a - b); // 배열을 항상 오름차순 정렬
        } else if (command === 'D') {
            if (queue.length === 0) return; // 배열이 비어 있으면 무시

            if (num === 1) {
                // 최댓값 삭제 (오름차순 정렬이므로 마지막 요소 삭제)
                queue.pop();
            } else if (num === -1) {
                // 최솟값 삭제 (오름차순 정렬이므로 첫 번째 요소 삭제)
                queue.shift();
            }
        }
    });

    // 큐가 비어 있으면 [0, 0] 반환, 그렇지 않으면 [최댓값, 최솟값] 반환
    return queue.length === 0 ? [0, 0] : [queue[queue.length - 1], queue[0]];
}

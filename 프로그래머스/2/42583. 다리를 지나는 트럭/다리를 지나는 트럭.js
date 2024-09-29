function solution(bridge_length, weight, truck_weights) {
    var answer = 0; // 경과 시간
    let bridge = Array(bridge_length).fill(0); // 다리 길이만큼 초기화
    let totalWeightOnBridge = 0; // 다리 위 트럭들의 총 무게

    while (truck_weights.length > 0 || totalWeightOnBridge > 0) {
        answer++;

        // 다리 위에서 가장 앞에 있는 트럭이 다리를 모두 건넜으면 제거
        totalWeightOnBridge -= bridge.shift(); // 트럭이 다리를 건넌 후 무게에서 제외

        // 새로운 트럭이 다리에 올라갈 수 있는지 확인
        if (truck_weights.length > 0 && totalWeightOnBridge + truck_weights[0] <= weight) {
            let truck = truck_weights.shift();
            bridge.push(truck); // 트럭을 다리 위에 올림
            totalWeightOnBridge += truck; // 다리 위 무게에 추가
        } else {
            // 트럭이 올라갈 수 없으면 빈 공간 유지
            bridge.push(0);
        }
    }

    return answer; // 총 경과 시간 반환
}

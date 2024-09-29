function solution(bridge_length, weight, truck_weights) {
    var answer = 0; // 경과 시간
    let bridge = []; // 다리 위 상태를 [트럭 무게, 남은 시간] 형태로 관리
    let totalWeightOnBridge = 0; // 다리 위 트럭의 총 무게

    // 다리 길이만큼 빈 공간을 채움 (다리에 올라간 후 시간을 1씩 감소시키기 위한 역할)
    for (let i = 0; i < bridge_length; i++) {
        bridge.push([0, 0]); // [트럭 무게, 남은 시간] 형태로 추가
    }

    while (truck_weights.length > 0 || totalWeightOnBridge > 0) {
        answer++;

        // 트럭이 다리를 모두 건넜을 경우, 다리에서 제거
        let leavingTruck = bridge.shift();
        totalWeightOnBridge -= leavingTruck[0];

        // 새로운 트럭이 다리에 올라갈 수 있는지 확인
        if (truck_weights.length > 0 && totalWeightOnBridge + truck_weights[0] <= weight) {
            let truck = truck_weights.shift();
            bridge.push([truck, bridge_length]); // 트럭을 다리 위에 올림
            totalWeightOnBridge += truck;
        } else {
            // 올라갈 트럭이 없으면 빈 자리를 유지
            bridge.push([0, 0]);
        }
    }

    return answer;
}

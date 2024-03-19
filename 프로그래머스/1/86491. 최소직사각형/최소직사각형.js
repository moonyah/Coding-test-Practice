function solution(sizes) {
    var answer = 0;
    let maxArr = [];
    let minArr = [];
    for(let i of sizes){
        maxArr.push(Math.max(i[0], i[1]));
        minArr.push(Math.min(i[0], i[1]));
    }
    // 큰 것 중의 큰 것
    // 작은 것 중의 큰 것 구하기
    answer = Math.max(...maxArr) * Math.max(...minArr)
    return answer;
}
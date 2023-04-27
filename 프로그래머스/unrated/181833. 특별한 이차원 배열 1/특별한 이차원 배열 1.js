function solution(n) {
    var answer = [];
    // i++ (i은 1이 들어갈 인덱스)
    for(let i = 0; i < n; i++){
        answer.push(Array(n).fill(0).map((a, index)=> index == i ? a = 1 : a = 0));
    }
    return answer;
}
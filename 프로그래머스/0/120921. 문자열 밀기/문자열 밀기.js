function solution(A, B) {
    var answer = -1;
    // 문자수만큼 밀었는데 공통된 게 없으면 -1
    for(let i = 0; i < A.length; i++){
        if(A.slice(-i)+A.slice(0, -i) === B){
             answer = i; break;
        }
    }
    return answer;
}
function solution(numbers, n) {
    var answer = 0;
    for(let i = 0; numbers.length; i++){
        answer += numbers[i];
        if(answer > n){
            break;
        }
    }
    return answer;
}
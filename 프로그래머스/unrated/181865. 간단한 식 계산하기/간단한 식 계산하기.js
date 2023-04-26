function solution(binomial) {
    var answer = 0;
    answer = binomial.split(' ');
    if(answer[1] == '+'){
        answer = +answer[0] + +answer[2];
    }else if(answer[1] == '-'){
        answer = +answer[0] - +answer[2];
    }else if(answer[1] == '*'){
        answer = +answer[0] * +answer[2];
    }
    return answer;
}
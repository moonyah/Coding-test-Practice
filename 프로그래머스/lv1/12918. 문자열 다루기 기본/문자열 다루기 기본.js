function solution(s) {
    var answer = true;
    if(parseInt(s) == s && (s.length === 4 || s.length === 6) ){
        answer = true;
    }else{
        answer = false;
    }
    return answer;
}
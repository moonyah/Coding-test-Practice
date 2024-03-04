function solution(s) {
    var answer = [];
    s = s.split(' '); // 하나 이상의 공백 문자로 구분되어 있다고 한다.
    for(let i of s){
        for(let j = 0; j < i.length; j++){
            if(j % 2 == 1) // 홀수라면
            {
                 answer += i[j].toLowerCase();  
            }else{
                answer += i[j].toUpperCase();
            }
        }
        answer += ' ';
    }
    return answer.slice(0, answer.length-1);
}
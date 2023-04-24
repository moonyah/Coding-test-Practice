function solution(str1, str2) {
    var answer = '';
    var i = 0;
    while(answer.length < str1.length*2){
        answer += str1[i];
        answer += str2[i];
        i++;
    }
    return answer;
}
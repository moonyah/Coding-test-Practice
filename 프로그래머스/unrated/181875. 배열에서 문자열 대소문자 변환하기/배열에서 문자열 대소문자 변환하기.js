function solution(strArr) {
    var answer = [];
    for(let i = 0; i <strArr.length; i++){
        if(i%2 == 1) answer.push(strArr[i].toUpperCase());
        else answer.push(strArr[i].toLowerCase());
    }
    return answer;
}
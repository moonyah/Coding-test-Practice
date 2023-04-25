function solution(myString) {
    var answer = [];
    answer = myString.split('x');
    answer = answer.map(a => a = a.length);
    return answer;
}
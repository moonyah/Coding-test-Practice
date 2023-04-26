function solution(myString) {
    var answer = myString.split('x').filter(a => a != "");
    return answer.sort();
}
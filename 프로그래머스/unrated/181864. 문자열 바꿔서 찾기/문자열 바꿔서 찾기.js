function solution(myString, pat) {
    var answer = '';
    answer = myString.split("").map(a => a == "A" ? a = "B" : a = "A").join('');
    return answer.includes(pat) ? 1:0;
}
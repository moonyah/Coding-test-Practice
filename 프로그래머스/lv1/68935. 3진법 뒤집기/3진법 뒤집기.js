function solution(n) {
    var answer = 0;
    // 1. n을 3진법으로 만든다. 진법변환.... 뭐더라
    answer = n.toString(3);
    // 2. 반전시킨다.
    answer = answer.split("").reverse().join("");
    // 3. 10진법으로 표현한다.
    answer = parseInt(answer, 3);
    return answer;
}
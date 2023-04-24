function solution(number) {
    var answer = 0;
    answer = number.split("").reduce((a, b) => +a + +b);
    return answer%9;
}
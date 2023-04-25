function solution(x1, x2, x3, x4) {
    var answer = true;
    // V 또는
    // 산모양은 &
    answer = (x1 || x2) && (x3 || x4)
    return answer;
}
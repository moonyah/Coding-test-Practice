function solution(M, N) {
    var answer = 0;
    // M-1 번 일단 가위 질을 해야 함
    // + (N-1)번 이긴 한데 그것을 * M번 해야 함
    answer = (M-1)+(N-1)*M
    return answer;
}
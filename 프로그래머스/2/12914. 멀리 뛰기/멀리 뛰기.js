function solution(n) {
    var answer = 0;
    var dp = [];
    dp[1] = 1;
    dp[2] = 2;
    for (var i = 3; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;  // 전체 합에 대해 나머지 연산 적용
    }
    answer = dp[n];
    return answer % 1234567;  // 결과에 다시 한 번 나머지 연산
}
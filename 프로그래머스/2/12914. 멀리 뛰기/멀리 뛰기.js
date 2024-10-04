function solution(n) {
    var answer = 0;
    
    let dp =[1, 2];
    // n번 째 칸에 도달하는 방법: (n-1)번째 칸에 도달하는 방법 + (n-2)번째 칸에 도달하는 방법
    for(let i = 2; i < n; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }
    answer = dp[n-1];
    return answer;
}
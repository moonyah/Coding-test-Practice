function solution(n) {
    var answer = 0;
    if(n%2 == 1){  // 홀수라면
        for(let i = 1; i <= n;i = i + 2){
            answer += i;
        }
    }else{
        for(let i = 0; i <= n;i = i + 2){
            answer += i*i;
        }
    }
    return answer;
}
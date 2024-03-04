function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++){
        let num = (i-1)*i/2;
        if((n-num) % i === 0 && n-num >= i){
            answer++;
        }
    }
    return answer;
}
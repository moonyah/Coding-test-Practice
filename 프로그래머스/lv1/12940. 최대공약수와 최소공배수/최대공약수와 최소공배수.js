function solution(n, m) {
    var answer = [];
    // 최대공약수 구하기
    var arr = [n, m].sort((a, b) => a-b);
    // for(let i = n; i > 0 ;i--){
    //     if(m%i == 0 && answer.length != 1){
    //         answer.push(i);
    //         break;
    //     }
    // }
    
    // 최소공배수 구하기
    for(var i = n; n <= 1000000; i = i + n)     {
        if(i%m == 0 && answer.length != 2){
            answer.push(i);
            break;
        }
    }
    answer.push(n*m/answer[0]);
    
    return answer.sort((a, b)=>a-b);
}
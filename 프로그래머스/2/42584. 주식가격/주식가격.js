function solution(prices) {
    var answer = [];
    let len = prices.length;
    let arr = new Array(len).fill().map(() => [0, true]);
    // [가격이 떨어질 때까지 흘러간 초, ture(초 측정 중인지)]

    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len; j++){
            if(prices[i] > prices[j]){
                arr[i][1] = false;
                arr[i][0]++;
                break;
            }else{
                arr[i][0]++;
            }
        }
    }
    for(let i = 0; i < len; i++){
        answer.push(arr[i][0])
    }
    return answer;
}
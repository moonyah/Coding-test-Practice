function solution(a, d, included) {
    var answer = 0;
    // 1. 등차수열을 만든다
    let arr = [];
    while(arr.length < included.length){
        arr.push(a);
        a = a + d;
    }
    // 2. true번 째만 뽑아서 더한다
    for(let i = 0; i < arr.length; i++){
        if(included[i] === true){
            answer += arr[i];
        }
    }
    return answer;
}
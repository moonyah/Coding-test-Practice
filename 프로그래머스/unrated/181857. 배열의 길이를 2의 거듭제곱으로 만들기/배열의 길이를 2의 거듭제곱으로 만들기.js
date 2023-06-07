function solution(arr) {
    var answer = arr;
    let num = 0;
    
    while(num != 1){
        num = [...answer.length.toString(2)].reduce((a,b) => +a + +b); // 2진법으로 만들고 각 자리 합하기
        if(num != 1){ // 합이 1이 아니면 0 push
            answer.push(0);
        }
    }
    return answer;
}
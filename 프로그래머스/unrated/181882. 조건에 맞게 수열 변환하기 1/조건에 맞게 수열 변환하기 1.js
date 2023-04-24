function solution(arr) {
    var answer = [];
    for(let i of arr){
        if(i >= 50 && i%2 == 0){
            answer.push(i / 2);
        }else if(i < 50 && i%2 == 1){
            answer.push(i * 2);
        }else{
            answer.push(i);
        }
    }
    return answer;
}
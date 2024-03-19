function solution(brown, yellow) {
    var answer = [];

    for(let i = 0; i <= yellow; i++){
        if(i*(parseInt((brown-4)/2)-i) === yellow){
           answer.push(parseInt((brown-4)/2)-i+2);
           answer.push(i+2);
           break;
        }
    }
    
    return answer;
}
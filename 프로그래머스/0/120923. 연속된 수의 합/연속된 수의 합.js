function solution(num, total) {
    var answer = [];
    let 처음수 = Math.ceil(total/num - num/2);
    for(let i = 0; i < num; i++){
        answer.push(처음수);
        처음수 = 처음수 + 1;
    }
    return answer;
}
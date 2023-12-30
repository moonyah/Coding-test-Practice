function solution(q, r, code) {
    var answer = [];
    for(let i = 0; i < code.length; i++){
        if(i%q === r){
            answer.push(code[i])
        }
    }
    return answer.join('');
}
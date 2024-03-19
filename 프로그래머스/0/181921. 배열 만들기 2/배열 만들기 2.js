function solution(l, r) {
    var answer = [];
    for(let i = l; i <= r; i++){
        if(i.toString().split('').filter(a=>a !== '5' && a !== '0').length === 0){
            answer.push(i)
        }
    }
    return answer.length === 0 ? [-1] : answer;
}
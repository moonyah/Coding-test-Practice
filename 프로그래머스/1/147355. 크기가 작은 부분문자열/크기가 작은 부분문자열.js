function solution(t, p) {
    var answer = 0;
    let le = p.length;
    for(let i = 0; i < t.length-le+1; i++){
        if(t.slice(i,i+le) <= p){
            answer++;
        }
    }
    return answer;
}
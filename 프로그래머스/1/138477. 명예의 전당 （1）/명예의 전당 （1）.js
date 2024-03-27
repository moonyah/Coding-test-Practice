function solution(k, score) {
    var answer = [];
    let 명예의전당 = [];
    for(let i = 0; i < score.length; i++){
        if(명예의전당.length < k){
            명예의전당.push(score[i]);
            명예의전당 = 명예의전당.sort((a, b) => b - a);
            answer.push(명예의전당[명예의전당.length-1])
        }else{
            명예의전당.push(score[i]);
            명예의전당 = 명예의전당.sort((a, b) => b - a);
            answer.push(명예의전당[k-1])
        }
    }
    return answer;
}
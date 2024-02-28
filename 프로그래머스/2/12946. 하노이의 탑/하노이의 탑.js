let answer = []
function solution(n, start = 1, to = 3, via = 2) {
    if(n == 1){
        answer.push([start,to])
        return answer;
    }else{
        solution(n-1, start, via, to)
        answer.push([start, to])
        solution(n-1, via, to, start)
        return answer;
    }
}
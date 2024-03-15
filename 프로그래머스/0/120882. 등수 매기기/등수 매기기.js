function solution(score) {
    var answer = [];
    let meanArr = [];
    for(let i of score){
        meanArr.push((i[0]+i[1])/2);
    }
    answer = meanArr.map(a => a = [...meanArr].sort((a, b)=>(b-a)).indexOf(a)+1)
    return answer;
}
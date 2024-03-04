function solution(d, budget) {
    var answer = 0;
    let sortArr = d.sort((a, b)=> a-b);
    for(let i = 1; i <= sortArr.length; i++){
        let total = sortArr.slice(0, i).reduce((a, b) => a+b);
        console.log(total, i)
        if(total <= budget){
            answer = i;
        }
    }
    return answer;
}
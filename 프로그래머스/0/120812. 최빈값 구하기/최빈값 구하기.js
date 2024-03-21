function solution(array) {
    var answer = -1;
    let existNum = [...new Set(array)];
    // 각각의 개수 찾기
    let howMany = [];
    for(let i of existNum){
        let temp = 0;
        for(let j of array){
            if(j === i){
                temp++;
            }   
        }
        howMany.push(temp)
    }
    // 최빈값이 여러 개인지 아는 법
    if(howMany.filter(a=> a === Math.max(...howMany)).length === 1){
        answer = existNum[howMany.indexOf(Math.max(...howMany))];
    }
    
    return answer;
}
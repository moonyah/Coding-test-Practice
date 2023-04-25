function solution(strArr) {
    var answer = [];
    for(let i of strArr){
        if(i.includes("ad") == false){
            answer.push(i);
        }
    }
    return answer;
}